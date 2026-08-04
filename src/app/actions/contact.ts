'use server';

import { Resend } from 'resend';
import { cookies, headers } from 'next/headers';

const resend = new Resend(process.env.RESEND_KEY);

export type ContactFormState = {
  status: 'idle' | 'success' | 'error';
  message: string;
};

const SESSION_COOKIE = 'contact_sends';
const SESSION_LIMIT = 3;

const IP_LIMIT = 5;
const IP_WINDOW_MS = 60 * 60 * 1000;
const ipHits = new Map<string, { count: number; resetAt: number }>();

function isRateLimitedByIp(ip: string) {
  const now = Date.now();
  const entry = ipHits.get(ip);

  if (!entry || now > entry.resetAt) {
    ipHits.set(ip, { count: 1, resetAt: now + IP_WINDOW_MS });
    return false;
  }
  if (entry.count >= IP_LIMIT) return true;

  entry.count += 1;
  return false;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot: real visitors never fill this hidden field, bots usually do.
  if (formData.get('company')?.toString().trim()) {
    return { status: 'success', message: 'Thanks! Your message has been sent.' };
  }

  const name = formData.get('name')?.toString().trim().slice(0, 100) ?? '';
  const email = formData.get('email')?.toString().trim().slice(0, 200) ?? '';
  const message = formData.get('message')?.toString().trim().slice(0, 2000) ?? '';

  if (!name || !email || !message) {
    return { status: 'error', message: 'Please fill in all fields.' };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' };
  }

  const cookieStore = await cookies();
  const sentThisSession = Number(cookieStore.get(SESSION_COOKIE)?.value ?? 0);
  if (sentThisSession >= SESSION_LIMIT) {
    return { status: 'error', message: "You've reached the message limit for this session. Please email us directly at info@tripzworld.com." };
  }

  const ip = (await headers()).get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
  if (isRateLimitedByIp(ip)) {
    return { status: 'error', message: 'Too many requests. Please try again later.' };
  }

  const safeName = name.replace(/[\r\n]+/g, ' ');

  const { error } = await resend.emails.send({
    from: 'Tripz World <onboarding@resend.dev>',
    to: 'info@tripzworld.com',
    replyTo: email,
    subject: `New inquiry from ${safeName}`,
    text: `Name: ${safeName}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    return { status: 'error', message: 'Something went wrong. Please try again.' };
  }

  cookieStore.set(SESSION_COOKIE, String(sentThisSession + 1), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });

  return { status: 'success', message: 'Thanks! Your message has been sent.' };
}
