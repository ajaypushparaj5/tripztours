export interface ThailandDetails {
  whyVisit: string[];
  destinations: { name: string; desc: string }[];
  experiences: string[];
  perfectFor: string[];
}

export interface Excursion {
  name: string;
  description: string;
  category: "City Tours" | "Combos & Theme Parks" | "Cruises & Safaris";
  highlights?: string[];
  includes?: string[];
  experience?: string[];
  shoppingDestinations?: string[];
}

export interface UAEDetails {
  excursions: Excursion[];
  whyChooseUs: string[];
}

export interface Activity {
  id: number;
  title: string;
  location: string;
  largeImage: string;
  smallImage: string;
  duration: string;
  difficulty: string;
  description: string;
  highlights: string[];
  thailandDetails?: ThailandDetails;
  uaeDetails?: UAEDetails;
}

export const activitiesData: Activity[] = [
  {
    id: 1,
    title: "Discover Thailand – The Land of Smiles",
    location: "Thailand",
    largeImage: "/activities/large/activity1.png",
    smallImage: "/activities/small/activity1.jpg",
    duration: "Flexible",
    difficulty: "All Levels",
    description: "Crystal-clear beaches, vibrant cities, ancient temples, tropical islands, exciting nightlife, and unforgettable experiences—all in one destination.",
    highlights: [
      "Island hopping tours & Phi Phi Island",
      "Floating Market & Safari World",
      "Adventure activities & Spa wellness"
    ],
    thailandDetails: {
      whyVisit: [
        "Beautiful beaches and islands",
        "Rich Thai culture and heritage",
        "Delicious world-famous cuisine",
        "Adventure and water sports",
        "Family-friendly attractions",
        "Luxury resorts and wellness retreats",
        "Excellent shopping and nightlife"
      ],
      destinations: [
        { name: "Bangkok", desc: "Temples, shopping malls, floating markets, nightlife" },
        { name: "Phuket", desc: "Beaches, island hopping, luxury resorts" },
        { name: "Krabi", desc: "Limestone cliffs, Railay Beach, Four Islands Tour" },
        { name: "Pattaya", desc: "Coral Island, entertainment, family attractions" },
        { name: "Phi Phi Islands", desc: "Snorkeling and crystal-clear waters" },
        { name: "Chiang Mai", desc: "Mountains, temples, elephant sanctuaries" }
      ],
      experiences: [
        "Island hopping tours",
        "Phi Phi Island by speedboat",
        "James Bond Island tour",
        "Coral Island adventure",
        "Floating Market visit",
        "Safari World & Marine Park",
        "Chao Phraya Dinner Cruise",
        "Thai cultural shows",
        "Spa & wellness experiences",
        "Adventure activities (ziplining, ATV, rafting)"
      ],
      perfectFor: [
        "Honeymoon couples",
        "Family vacations",
        "Friends & group tours",
        "Solo travellers",
        "Luxury holidays",
        "Adventure seekers"
      ]
    }
  },
  {
    id: 2,
    title: "UAE Activities & Excursions",
    location: "UAE",
    largeImage: "/activities/large/activity2.png",
    smallImage: "/activities/small/activity2.jpg",
    duration: "Flexible",
    difficulty: "All Levels",
    description: "Discover the best of the United Arab Emirates with our carefully curated tours and attractions. From iconic landmarks and thrilling theme parks to cultural experiences and luxury cruises.",
    highlights: [
      "Dubai City Tour & Burj Al Arab",
      "Desert Safari Premium",
      "Abu Dhabi City Tour & Ferrari World"
    ],
    uaeDetails: {
      excursions: [
        {
          name: "Dubai City Tour (Half Day)",
          description: "Explore the highlights of modern and historic Dubai in a comfortable, air-conditioned vehicle. Visit iconic attractions while learning about the city's remarkable transformation.",
          category: "City Tours",
          highlights: [
            "Museum of the Future (Photo Stop)",
            "Jumeirah Beach",
            "Burj Al Arab (Photo Stop)",
            "Palm Jumeirah",
            "Atlantis The Palm (Photo Stop)",
            "Dubai Marina",
            "Old Dubai",
            "Gold Souk & Spice Souk",
            "Abra Boat Ride (Optional)"
          ]
        },
        {
          name: "Abu Dhabi City Tour",
          description: "Experience the capital city's rich culture, stunning architecture, and world-famous landmarks.",
          category: "City Tours",
          highlights: [
            "Sheikh Zayed Grand Mosque",
            "Emirates Palace",
            "Qasr Al Watan (Photo Stop)",
            "Corniche",
            "Heritage Village",
            "Dates Market",
            "Ferrari World (Photo Stop)",
            "Yas Island"
          ]
        },
        {
          name: "Abu Dhabi City Tour + Ferrari World",
          description: "Combine Abu Dhabi's cultural attractions with an exciting visit to Ferrari World, home to world-class rides and family entertainment.",
          category: "Combos & Theme Parks",
          includes: [
            "Full Abu Dhabi City Tour",
            "Ferrari World Admission",
            "Time to enjoy major attractions and rides"
          ]
        },
        {
          name: "Abu Dhabi City Tour + Yas Waterworld",
          description: "Enjoy the perfect mix of sightseeing and water adventures at one of the region's most popular water parks.",
          category: "Combos & Theme Parks",
          includes: [
            "Abu Dhabi City Tour",
            "Yas Waterworld Entry",
            "Access to exciting water slides and attractions"
          ]
        },
        {
          name: "Abu Dhabi City Tour + Warner Bros. World™",
          description: "A perfect family experience combining Abu Dhabi's famous landmarks with an indoor theme park featuring beloved characters and immersive attractions.",
          category: "Combos & Theme Parks",
          includes: [
            "Abu Dhabi City Tour",
            "Warner Bros. World™ Admission"
          ]
        },
        {
          name: "Aquaventure Waterpark",
          description: "Spend an action-packed day at one of the world's largest water parks located at Atlantis, The Palm.",
          category: "Combos & Theme Parks",
          experience: [
            "Thrilling water slides",
            "Lazy rivers",
            "Private beach access",
            "Family-friendly attractions",
            "Children's play areas"
          ]
        },
        {
          name: "Aquaventure Waterpark + The Lost Chambers Aquarium",
          description: "Enjoy unlimited fun with access to Aquaventure Waterpark and discover thousands of fascinating marine animals at The Lost Chambers Aquarium.",
          category: "Combos & Theme Parks",
          includes: [
            "Aquaventure Waterpark Entry",
            "Lost Chambers Aquarium Admission"
          ]
        },
        {
          name: "Dubai Mall Aquarium & Underwater Zoo",
          description: "Discover one of the world's largest suspended aquariums and experience an incredible underwater journey.",
          category: "Combos & Theme Parks",
          highlights: [
            "Aquarium Tunnel",
            "Underwater Zoo",
            "Penguin Cove (Selected Packages)",
            "Marine Life Exhibits"
          ]
        },
        {
          name: "Dhow Cruise – Dubai Creek",
          description: "Enjoy a relaxing evening aboard a traditional wooden dhow while cruising through historic Dubai Creek.",
          category: "Cruises & Safaris",
          includes: [
            "Buffet Dinner",
            "Live Entertainment",
            "Traditional Ambience",
            "Scenic Night Views"
          ]
        },
        {
          name: "Dhow Cruise – Dubai Marina",
          description: "Experience Dubai's modern skyline while enjoying a luxury dinner cruise through Dubai Marina.",
          category: "Cruises & Safaris",
          includes: [
            "International Buffet",
            "Live Entertainment",
            "Marina Skyline Views",
            "Air-conditioned Lower Deck & Open Upper Deck"
          ]
        },
        {
          name: "Desert Safari – Premium",
          description: "Experience the Arabian Desert in luxury with premium services and exclusive camp facilities.",
          category: "Cruises & Safaris",
          highlights: [
            "Premium 4x4 Dune Bashing",
            "VIP Seating",
            "Gourmet BBQ Dinner",
            "Live Entertainment",
            "Camel Ride",
            "Sand Boarding",
            "Henna Painting",
            "Falcon Photography",
            "Soft Drinks & Refreshments"
          ]
        },
        {
          name: "Desert Safari – Standard",
          description: "Enjoy one of Dubai's most popular adventures with exciting desert activities and traditional Arabian hospitality.",
          category: "Cruises & Safaris",
          includes: [
            "Dune Bashing",
            "Sunset Photography",
            "Camel Ride",
            "BBQ Dinner",
            "Belly Dance",
            "Tanoura Show",
            "Fire Show",
            "Henna Painting",
            "Soft Drinks"
          ]
        },
        {
          name: "Dubai Shopping Tour",
          description: "Explore Dubai's world-famous shopping destinations, from luxury malls to traditional markets.",
          category: "City Tours",
          shoppingDestinations: [
            "Dubai Mall",
            "Mall of the Emirates",
            "City Centre Mirdif",
            "Gold Souk",
            "Spice Souk",
            "Meena Bazaar",
            "Outlet Village (Optional)"
          ]
        },
        {
          name: "East Coast Tour",
          description: "Escape the city and discover the natural beauty of the UAE's eastern coastline.",
          category: "City Tours",
          highlights: [
            "Fujairah",
            "Khorfakkan",
            "Friday Market",
            "Al Bidya Mosque",
            "Mountain Views",
            "Beach Stops",
            "Scenic Coastal Drive"
          ]
        },
        {
          name: "Dubai Safari Park",
          description: "Meet thousands of animals from around the world in one of the Middle East's largest wildlife parks.",
          category: "Combos & Theme Parks",
          experience: [
            "African Village",
            "Asian Village",
            "Explorer Village",
            "Arabian Desert Safari",
            "Kids Farm",
            "Educational Wildlife Experiences"
          ]
        },
        {
          name: "Dubai Dolphinarium",
          description: "Enjoy entertaining dolphin and seal performances suitable for visitors of all ages.",
          category: "Combos & Theme Parks",
          highlights: [
            "Dolphin & Seal Show",
            "Family Entertainment",
            "Interactive Experiences (Optional)",
            "Indoor Air-conditioned Venue"
          ]
        },
        {
          name: "Luxury Yacht Experience",
          description: "Cruise along Dubai's spectacular coastline aboard a luxury yacht and enjoy breathtaking views of the city's iconic skyline.",
          category: "Cruises & Safaris",
          experience: [
            "Dubai Marina Departure",
            "Bluewaters Island",
            "Ain Dubai",
            "Palm Jumeirah",
            "Atlantis The Palm",
            "Burj Al Arab (Depending on Route)",
            "Private & Shared Yacht Options",
            "Daytime & Sunset Cruises"
          ]
        }
      ],
      whyChooseUs: [
        "Professional & Licensed Tour Operators",
        "Private & Shared Tour Options",
        "Comfortable Air-Conditioned Transportation",
        "Hotel Pick-up & Drop-off Available",
        "Family-Friendly Experiences",
        "Experienced Multilingual Guides",
        "Instant Booking Assistance",
        "Customized Holiday Packages"
      ]
    }
  }
];
