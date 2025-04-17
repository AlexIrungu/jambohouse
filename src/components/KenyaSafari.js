import React, { useState, useRef } from 'react';
import { 
  ChevronRight, 
  X, 
  Calendar, 
  MapPin, 
  Star, 
  Heart, 
  Share2, 
  Tag, 
  Clock, 
  Target,
  Shield,
  CheckCircle,
  Leaf,
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail
} from 'lucide-react';
import kenyahero from '../assets/kenyahero.jpg';
import grand from '../assets/grandkenya.jpg'
import karibu from '../assets/karibukenya.jpg'
import twiga from '../assets/twiga.jpg'
import amboseli from '../assets/amboseli.jpg'
import naivasha from '../assets/naivasha.jpg'
import mara from '../assets/mara.jpg'
import zebra from '../assets/zebra.jpg'
import marasun from '../assets/marasun.jpg'
import easymara from '../assets/easymara.jpg'
import kenyasaf from '../assets/lioncub.jpg'

export const safariPackages = [
  {
    id: "JT001",
    name: "Grand Kenya (Classic)",
    duration: "9 Days / 8 Nights",
    description: "Experience the ultimate Kenya adventure with our most comprehensive safari package, covering the best national parks and reserves across the country.",
    highlights: [
      "Big Five wildlife viewing",
      "Visit to multiple national parks",
      "Cultural experiences with local tribes",
      "Luxury accommodations throughout"
    ],
    difficulty: "Moderate",
    featured: true,
    destinations: ["Masai Mara", "Amboseli", "Lake Nakuru", "Samburu"],
    coverImage: grand,
    itinerary: [
  {
    "day": "Day 01",
    "title": "Arrival In Nairobi",
    "description": "Met upon arrival at Jomo Kenyatta International Airport by a Jambo Tours representative. Assistance and transfer to your hotel. Rest of the day at leisure. Accommodation on bed & breakfast basis at The Nairobi Serena Hotel (BB)."
  },
  {
    "day": "Day 02",
    "title": "Nairobi/Samburu National Reserve",
    "description": "After breakfast, drive north via Nanyuki and Mt Kenya to the Samburu National Reserve. Rugged and remote, this wildlife reserve provides some of the best and most colorful game viewing in the country arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Samburu Simba Lodge (LDBB)."
  },
  {
    "day": "Day 03",
    "title": "Samburu National Reserve",
    "description": "Early morning game drive returning to the lodge for breakfast. Rest of the morning at leisure. Lunch. Afternoon game drive. Dinner and overnight at Samburu Simba Lodge (LDBB)."
  },
  {
    "day": "Day 04",
    "title": "Samburu National Reserve/Mount Kenya National Park",
    "description": "After breakfast drive to the Mount Kenya National Park arriving in time for lunch at The Serena Mountain Lodge. Rest of the day at leisure with game viewing from the lodge. Dinner and overnight at Serena Mountain Lodge (LDBB)."
  },
  {
    "day": "Day 05",
    "title": "Mount Kenya National Park/Lake Nakuru National Park",
    "description": "After breakfast you will be collected for the day's drive, via the Nyahururu waterfalls to the floor of the Great Rift Valley, destination Lake Nakuru National Park arriving in time for lunch at the camp. Afternoon game drive. Dinner and overnight at Flamingo Hill Tented Camp (LDBB)."
  },
  {
    "day": "Day 06",
    "title": "Lake Nakuru National Park/Masai Mara National Reserve",
    "description": "After breakfast, drive to the Masai Mara National Reserve offering wonderful scenery and plenty of game. It is perhaps the only region left in Kenya where the visitor may see animals in the same super-abundance as existed a century ago, arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Mara Serena Lodge (LDBB)."
  },
  {
    "day": "Day 07",
    "title": "Masai Mara National Reserve",
    "description": "(Early morning optional balloon ride with champagne-style breakfast.) Full day in Masai Mara with morning and afternoon game drives. All meals and overnight at Mara Serena Lodge (LDBB)."
  },
  {
    "day": "Day 08",
    "title": "Masai Mara National Reserve/Nairobi/Amboseli National Park",
    "description": "After breakfast drive to Nairobi arriving in time for lunch at The Carnivore Restaurant. After lunch drive to Amboseli National Park, lying below the most famous symbol of Africa, Mount Kilimanjaro. The 392 sq km Amboseli National Park lies due south of Nairobi, within clear sight of Mt Kilimanjaro, Africa's highest mountain at 5896 metres. The waters of the mountain feed the seasonal swamps and marshes on which the game and birds, which live in the park, rely. It is here that photographers will hope to shoot the classic picture of the elephant or giraffe standing against the dramatic backdrop of the snow-capped mountain. Game drive enroute to your lodge. Dinner and overnight at Amboseli Serena Lodge (LDBB)."
  },
  {
    "day": "Day 09",
    "title": "Amboseli National Park",
    "description": "Early morning game drive returning to the lodge for breakfast. Rest of the morning at leisure. Lunch. Afternoon game drive. Dinner and overnight at Amboseli Serena Lodge (LDBB)."
  },
  {
    "day": "Day 10",
    "title": "Amboseli National Park/Nairobi/Departure",
    "description": "After breakfast, drive to Nairobi and drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. A Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
  }
]
  },
  {
      id: "JT002",
      name: "Karibu Kenya (Classic)",
      duration: "10 Days / 9 Nights",
      description: "A warm welcome to Kenya with this classic safari experience that showcases the country's incredible biodiversity and landscapes.",
      highlights: [
        "Game drives in premier wildlife reserves", 
        "Professional safari guides",
        "Comfortable lodge accommodations",
        "Cultural interactions"
      ],
      seasons: [
        { "period": "02.01-30.03.2025", "sharedPrice": 2952.05, "singleSupplement": 553.15 },
        { "period": "01.04-30.06.2025", "sharedPrice": 2715.15, "singleSupplement": 155.25 },
        { "period": "01.07-31.10.2025", "sharedPrice": 3193.55, "singleSupplement": 631.35 },
        { "period": "01.11-15.12.2025", "sharedPrice": 2938.25, "singleSupplement": 545.10 }
      ],
      difficulty: "Easy to Moderate",
      featured: true,
      destinations: ["Masai Mara", "Lake Nakuru", "Aberdares", "Samburu", "Amboseli", "Lake Naivasha"],
      coverImage: "karibu",
      itinerary: [
        {
          "day": "Day 01",
          "title": "Arrival In Nairobi",
          "description": "Met upon arrival at Jomo Kenyatta International Airport by a Jambo Tours representative. Assistance and transfer to your hotel. Rest of the day at leisure. Accommodation on bed & breakfast basis at The Panafric Hotel (BB)."
        },
        {
          "day": "Day 02",
          "title": "Nairobi/Samburu National Reserve",
          "description": "After breakfast, drive north via Nanyuki and Mt Kenya to the Samburu National Reserve. Rugged and remote, this wildlife reserve provides some the best and most colourful game viewing in the country arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Samburu Sopa Lodge (LDBB)."
        },
        {
          "day": "Day 03",
          "title": "Samburu National Reserve",
          "description": "Early morning game drive returning to the lodge for breakfast. Rest of the morning at leisure. Lunch. Afternoon game drive. Dinner and overnight at Samburu Sopa Lodge (LDBB)."
        },
        {
          "day": "Day 04",
          "title": "Samburu National Reserve/Aberdare National Park",
          "description": "After breakfast drive to the Aberdares arriving in time for lunch at The Aberdare Country Club. After lunch transfer to the lodge situated inside the Aberdare National Park. Rest of the day at leisure with game viewing from the lodge. Dinner and overnight at The Ark Lodge (LDBB)."
        },
        {
          "day": "Day 05",
          "title": "Aberdare National Park/Lake Nakuru National Park/Lake Naivasha",
          "description": "After breakfast you will be collected for the day's drive, via the Nyahururu waterfalls to the floor of the Great Rift Valley, destination Lake Nakuru National Park arriving in time for lunch at the lodge. After lunch proceed for a game drive and thereafter continue to Lake Naivasha arriving in the late afternoon for dinner and overnight at Lake Naivasha Sopa Lodge (LDBB)."
        },
        {
          "day": "Day 06",
          "title": "Lake Naivasha/Masai Mara National Reserve",
          "description": "After breakfast, drive to the Masai Mara National Reserve offering wonderful scenery and plenty of game. It is perhaps the only region left in Kenya where the visitor may see animals in the same super-abundance as existed a century ago, arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Mara Sopa Lodge (LDBB)."
        },
        {
          "day": "Day 07",
          "title": "Masai Mara National Reserve",
          "description": "(Early morning optional balloon ride with champagne-style breakfast.) Full day in Masai Mara with morning and afternoon game drives. All meals and overnight at Mara Sopa Lodge (LDBB)."
        },
        {
          "day": "Day 08",
          "title": "Masai Mara National Reserve/Nairobi/Amboseli National Park",
          "description": "After breakfast drive to Nairobi arriving in time for lunch at The Carnivore Restaurant. After lunch drive to Amboseli National Park, lying below the most famous symbol of Africa, Mount Kilimanjaro. The 392 sq km Amboseli National Park lies due south of Nairobi, within clear sight of Mt Kilimanjaro, Africa's highest mountain at 5896 metres. The waters of the mountain feed the seasonal swamps and marshes on which the game and birds, which live in the park, rely. It is here that photographers will hope to shoot the classic picture of the elephant or giraffe standing against the dramatic backdrop of the snow capped mountain. Game drive enroute to your lodge. Dinner and overnight at Amboseli Sopa Lodge (LDBB)."
        },
        {
          "day": "Day 09",
          "title": "Amboseli National Park",
          "description": "Early morning game drive returning to the lodge for breakfast. Rest of the morning at leisure. Lunch. Afternoon game drive. Dinner and overnight at Amboseli Sopa Lodge (LDBB)."
        },
        {
          "day": "Day 10",
          "title": "Amboseli National Park/Nairobi/Departure",
          "description": "After breakfast, drive to Nairobi and drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. A Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
        }
      ]
    },
    {
      id: "JT003",
      name: "Twiga Safari (Classic)",
      duration: "10 Days / 9 Nights",
      description: "Named after the Swahili word for giraffe, this safari offers towering views of Kenya's most magnificent landscapes and wildlife.",
      highlights: [
        "Premium wildlife viewing opportunities",
        "Comfortable accommodations in the heart of the wilderness",
        "Expert naturalist guides",
        "Multiple national parks exploration"
      ],
      seasons: [
        { "period": "02.01-30.03.2025", "sharedPrice": 3251.05, "singleSupplement": 1024.65 },
        { "period": "01.04-30.06.2025", "sharedPrice": 3093.50, "singleSupplement": 474.95 },
        { "period": "01.07-31.10.2025", "sharedPrice": 3806.50, "singleSupplement": 1276.50 },
        { "period": "01.11-15.12.2025", "sharedPrice": 3174.00, "singleSupplement": 834.90 }
      ],
      difficulty: "Moderate",
      destinations: ["Masai Mara", "Samburu", "Amboseli", "Lake Nakuru", "Mount Kenya", "Aberdare"],
      coverImage: "twiga",
      itinerary: [
        {
          "day": "Day 01",
          "title": "Arrival In Nairobi",
          "description": "Met upon arrival at Jomo Kenyatta International Airport by a Jambo Tours representative. Assistance and transfer to your hotel. Rest of the day at leisure. Accommodation on bed & breakfast basis at The Stanley Hotel (BB)."
        },
        {
          "day": "Day 02",
          "title": "Nairobi/Samburu National Reserve",
          "description": "After breakfast, drive north via Nanyuki and Mt Kenya to the Samburu National Reserve. Rugged and remote, this wildlife reserve provides some the best and most colourful game viewing in the country arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Sarova Shaba Lodge (LDBB)."
        },
        {
          "day": "Day 03",
          "title": "Samburu National Reserve",
          "description": "Early morning game drive returning to the lodge for breakfast. Rest of the morning at leisure. Lunch. Afternoon game drive. Dinner and overnight at Sarova Shaba Lodge (LDBB)."
        },
        {
          "day": "Day 04",
          "title": "Samburu National Reserve/Aberdare National Park",
          "description": "After breakfast drive to the Aberdares arriving in time for lunch at The Aberdare Country Club. After lunch transfer to the lodge situated inside the Aberdare National Park. Rest of the day at leisure with game viewing from the lodge. Dinner and overnight at The Ark Lodge (LDBB)."
        },
        {
          "day": "Day 05",
          "title": "Aberdare National Park/Lake Nakuru National Park",
          "description": "After breakfast you will be collected for the day's drive, via the Nyahururu waterfalls to the floor of the Great Rift Valley, destination Lake Nakuru National Park arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Sarova Lion Hill Lodge (LDBB)."
        },
        {
          "day": "Day 06",
          "title": "Lake Nakuru National Park/Masai Mara National Reserve",
          "description": "After breakfast, drive to the Masai Mara National Reserve offering wonderful scenery and plenty of game. It is perhaps the only region left in Kenya where the visitor may see animals in the same super-abundance as existed a century ago, arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Sarova Mara Camp (LDBB)."
        },
        {
          "day": "Day 07",
          "title": "Masai Mara National Reserve",
          "description": "(Early morning optional balloon ride with champagne-style breakfast.) Full day in Masai Mara with morning and afternoon game drives. All meals and overnight at Sarova Mara Camp (LDBB)."
        },
        {
          "day": "Day 08",
          "title": "Masai Mara National Reserve/Nairobi/Amboseli National Park",
          "description": "After breakfast drive to Nairobi arriving in time for lunch at The Carnivore Restaurant. After lunch drive to Amboseli National Park, lying below the most famous symbol of Africa, Mount Kilimanjaro. The 392 sq km Amboseli National Park lies due south of Nairobi, within clear sight of Mt Kilimanjaro, Africa's highest mountain at 5896 metres. The waters of the mountain feed the seasonal swamps and marshes on which the game and birds, which live in the park, rely. It is here that photographers will hope to shoot the classic picture of the elephant or giraffe standing against the dramatic backdrop of the snow capped mountain. Game drive enroute to your lodge. Dinner and overnight at Oltukai Lodge (LDBB)."
        },
        {
          "day": "Day 09",
          "title": "Amboseli National Park",
          "description": "Early morning game drive returning to the lodge for breakfast. Rest of the morning at leisure. Lunch. Afternoon game drive. Dinner and overnight at Oltukai Lodge (LDBB)."
        },
        {
          "day": "Day 10",
          "title": "Amboseli National Park/Nairobi/Departure",
          "description": "After breakfast, drive to Nairobi and drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. A Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
        }
      ]
    },
    {
      id: "JT004",
      name: "Kenya Horizons (Classic)",
      duration: "8 Days / 7 Nights",
      description: "Discover the breathtaking horizons of Kenya's diverse landscapes, from savannah plains to mountain vistas.",
      highlights: [
        "Scenic panoramic views",
        "Diverse ecosystems exploration",
        "Big Five wildlife sightings",
        "Comfortable safari lodges"
      ],
      seasons: [
        { "period": "02.01-30.03.2025", "sharedPrice": 2608.20, "singleSupplement": 767.05 },
        { "period": "01.04-30.06.2025", "sharedPrice": 2410.40, "singleSupplement": 353.05 },
        { "period": "01.07-31.10.2025", "sharedPrice": 3022.20, "singleSupplement": 861.35 },
        { "period": "01.11-15.12.2025", "sharedPrice": 2439.15, "singleSupplement": 591.10 }
      ],
      difficulty: "Easy",
      destinations: ["Masai Mara", "Lake Nakuru", "Mount Kenya", "Samburu"],
      coverImage: "amboseli",
      itinerary: [
        {
          "day": "Day 01",
          "title": "Arrival In Nairobi",
          "description": "Met upon arrival at Jomo Kenyatta International Airport by a Jambo Tours representative. Assistance and transfer to your hotel. Rest of the day at leisure. Accommodation on bed & breakfast basis at The Nairobi Serena Hotel (BB)."
        },
        {
          "day": "Day 02",
          "title": "Nairobi/Samburu National Reserve",
          "description": "After breakfast, drive north via Nanyuki and Mt Kenya to the Samburu National Reserve. Rugged and remote, this wildlife reserve provides some the best and most colourful game viewing in the country arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Samburu Simba Lodge (LDBB)"
        },
        {
          "day": "Day 03",
          "title": "Samburu National Reserve",
          "description": "Early morning game drive returning to the lodge for breakfast. Rest of the morning at leisure. Lunch. Afternoon game drive. Dinner and overnight at Samburu Simba Lodge (LDBB)"
        },
        {
          "day": "Day 04",
          "title": "Samburu National Reserve/Mount Kenya National Park",
          "description": "After breakfast drive to the Mount Kenya National Park arriving in time for lunch at The Serena Mountain Lodge. Rest of the day at leisure with game viewing from the lodge. Dinner and overnight at Serena Mountain Lodge (LDBB)"
        },
        {
          "day": "Day 05",
          "title": "Mount Kenya National Park/Lake Nakuru National Park",
          "description": "After breakfast you will be collected for the day's drive, via the Nyahururu waterfalls to the floor of the Great Rift Valley, destination Lake Nakuru National Park arriving in time for lunch at the camp. Afternoon game drive. Dinner and overnight at Flamingo Hill Tented Camp (LDBB)"
        },
        {
          "day": "Day 06",
          "title": "Lake Nakuru National Park/Masai Mara National Reserve",
          "description": "After breakfast, drive to the Masai Mara National Reserve offering wonderful scenery and plenty of game. It is perhaps the only region left in Kenya where the visitor may see animals in the same super-abundance as existed a century ago, arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Mara Serena Lodge (LDBB)"
        },
        {
          "day": "Day 07",
          "title": "Masai Mara National Reserve",
          "description": "(Early morning optional balloon ride with champagne-style breakfast.) Full day in Masai Mara with morning and afternoon game drives. All meals and overnight at Mara Serena Lodge (LDBB)"
        },
        {
          "day": "Day 08",
          "title": "Masai Mara National Reserve/Nairobi/Departure",
          "description": "After breakfast drive to Nairobi arriving in time for lunch at The Carnivore Restaurant. After lunch drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. A Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
        }
      ]
    },
  {
    id: "JT005",
    name: "Kenya Footsteps (Classic)",
    duration: "8 Days / 7 Nights",
    description: "Follow in the footsteps of Kenya's amazing wildlife with this compact but comprehensive safari experience.",
    highlights: [
      "Concentrated wildlife viewing",
      "Premium safari vehicles",
      "Expert tracking guides",
      "Conservation insights"
    ],
    seasons: [
      { period: "02.01-30.03.2025", sharedPrice: 2362.10, singleSupplement: 448.50 },
      { period: "01.04-30.06.2025", sharedPrice: 2165.45, singleSupplement: 156.40 },
      { period: "01.07-31.10.2025", sharedPrice: 2556.45, singleSupplement: 512.90 },
      { period: "01.11-15.12.2025", sharedPrice: 2349.45, singleSupplement: 441.60 }
    ],
    difficulty: "Easy",
    destinations: ["Masai Mara", "Lake Naivasha", "Samburu", "Aberdare", "Mount Kenya"],
    coverImage: naivasha,
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival In Nairobi",
        description: "Met upon arrival at Jomo Kenyatta International Airport by a Jambo Tours representative. Assistance and transfer to your hotel. Rest of the day at leisure. Accommodation on bed & breakfast basis at The Panafric Hotel (BB)."
      },
      {
        day: "Day 02",
        title: "Nairobi/Samburu National Reserve",
        description: "After breakfast, drive north via Nanyuki and Mt Kenya to the Samburu National Reserve. Rugged and remote, this wildlife reserve provides some the best and most colourful game viewing in the country arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Samburu Sopa Lodge (LDBB)."
      },
      {
        day: "Day 03",
        title: "Samburu National Reserve",
        description: "Early morning game drive returning to the lodge for breakfast. Rest of the morning at leisure. Lunch. Afternoon game drive. Dinner and overnight at Samburu Sopa Lodge (LDBB)."
      },
      {
        day: "Day 04",
        title: "Samburu National Reserve/Aberdare National Park",
        description: "After breakfast drive to the Aberdares arriving in time for lunch at The Aberdare Country Club. After lunch transfer to the lodge situated inside the Aberdare National Park. Rest of the day at leisure with game viewing from the lodge. Dinner and overnight at The Ark Lodge (LDBB)."
      },
      {
        day: "Day 05",
        title: "Aberdare National Park/Lake Nakuru National Park/Lake Naivasha",
        description: "After breakfast you will be collected for the day's drive, via the Nyahururu waterfalls to the floor of the Great Rift Valley, destination Lake Nakuru National Park arriving in time for lunch at the lodge. After lunch proceed for a game drive and thereafter continue to Lake Naivasha arriving in the late afternoon for dinner and overnight at Lake Naivasha Sopa Lodge (LDBB)."
      },
      {
        day: "Day 06",
        title: "Lake Naivasha/Masai Mara National Reserve",
        description: "After breakfast, drive to the Masai Mara National Reserve offering wonderful scenery and plenty of game. It is perhaps the only region left in Kenya where the visitor may see animals in the same super-abundance as existed a century ago, arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Mara Sopa Lodge (LDBB)."
      },
      {
        day: "Day 07",
        title: "Masai Mara National Reserve",
        description: "(Early morning optional balloon ride with champagne-style breakfast.) Full day in Masai Mara with morning and afternoon game drives. All meals and overnight at Mara Sopa Lodge (LDBB)."
      },
      {
        day: "Day 08",
        title: "Masai Mara National Reserve/Nairobi/Departure",
        description: "After breakfast drive to Nairobi arriving in time for lunch at The Carnivore Restaurant. After lunch drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. A Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
      }
    ]
  },
  {
    id: "JT006",
    name: "Classic Kenya Safari",
    duration: "8 Days / 7 Nights",
    description: "The quintessential Kenyan safari experience featuring the most iconic wildlife destinations and comfortable accommodations.",
    highlights: [
      "Big Five game viewing",
      "Scenic drives through diverse landscapes",
      "Bird watching opportunities",
      "Comfortable safari lodges"
    ],
    seasons: [
      { period: "02.01-30.03.2025", sharedPrice: 2503.55, singleSupplement: 661.25 },
      { period: "01.04-30.06.2025", sharedPrice: 2375.90, singleSupplement: 474.95 },
      { period: "01.07-31.10.2025", sharedPrice: 2945.15, singleSupplement: 969.45 },
      { period: "01.11-15.12.2025", sharedPrice: 2426.50, singleSupplement: 474.95 }
    ],
    difficulty: "Moderate",
    destinations: ["Masai Mara", "Lake Nakuru", "Amboseli", "Samburu"],
    coverImage: mara,
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival In Nairobi",
        description: "Met upon arrival at Jomo Kenyatta International Airport by a Jambo Tours representative. Assistance and transfer to your hotel. Rest of the day at leisure. Accommodation on bed & breakfast basis at The Stanley Hotel (BB)."
      },
      {
        day: "Day 02",
        title: "Nairobi/Samburu National Reserve",
        description: "After breakfast, drive north via Nanyuki and Mt Kenya to the Samburu National Reserve. Rugged and remote, this wildlife reserve provides some the best and most colourful game viewing in the country arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Sarova Shaba Lodge (LDBB)."
      },
      {
        day: "Day 03",
        title: "Samburu National Reserve",
        description: "Early morning game drive returning to the lodge for breakfast. Rest of the morning at leisure. Lunch. Afternoon game drive. Dinner and overnight at Sarova Shaba Lodge (LDBB)."
      },
      {
        day: "Day 04",
        title: "Samburu National Reserve/Aberdare National Park",
        description: "After breakfast drive to the Aberdares arriving in time for lunch at The Aberdare Country Club. After lunch transfer to the lodge situated inside the Aberdare National Park. Rest of the day at leisure with game viewing from the lodge. Dinner and overnight at The Ark Lodge (LDBB)."
      },
      {
        day: "Day 05",
        title: "Aberdare National Park/Lake Nakuru National Park",
        description: "After breakfast you will be collected for the day's drive, via the Nyahururu waterfalls to the floor of the Great Rift Valley, destination Lake Nakuru National Park arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Sarova Lion Hill Lodge (LDBB)."
      },
      {
        day: "Day 06",
        title: "Lake Nakuru National Park/Masai Mara National Reserve",
        description: "After breakfast, drive to the Masai Mara National Reserve offering wonderful scenery and plenty of game. It is perhaps the only region left in Kenya where the visitor may see animals in the same super-abundance as existed a century ago, arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Sarova Mara Camp (LDBB)."
      },
      {
        day: "Day 07",
        title: "Masai Mara National Reserve",
        description: "(Early morning optional balloon ride with champagne-style breakfast.) Full day in Masai Mara with morning and afternoon game drives. All meals and overnight at Sarova Mara Camp (LDBB)."
      },
      {
        day: "Day 08",
        title: "Masai Mara National Reserve/Nairobi/Departure",
        description: "After breakfast drive to Nairobi arriving in time for lunch at The Carnivore Restaurant. After lunch drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. A Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
      }
    ]
  },
  {
    id: "JT007",
    name: "Kenya Highlights Safari (Classic)",
    duration: "8 Days / 7 Nights",
    description: "A condensed safari focusing on Kenya's highlight destinations and most remarkable wildlife experiences.",
    highlights: [
      "Key wildlife viewing areas",
      "Efficient itinerary",
      "Quality accommodations",
      "Professional guiding"
    ],
    seasons: [
      { period: "02.01-30.03.2025", sharedPrice: 1743.40, singleSupplement: 343.85 },
      { period: "01.04-30.06.2025", sharedPrice: 1584.70, singleSupplement: 154.10 },
      { period: "01.07-31.10.2025", sharedPrice: 1890.60, singleSupplement: 393.30 },
      { period: "01.11-15.12.2025", sharedPrice: 1730.75, singleSupplement: 335.80 }
    ],
    difficulty: "Easy",
    destinations: ["Masai Mara", "Lake Nakuru", "Mount Kenya", "Amboseli"],
    coverImage: zebra,
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival In Nairobi",
        description: "Met upon arrival at Jomo Kenyatta International Airport by a Jambo Tours representative. Assistance and transfer to your hotel. Rest of the day at leisure. Accommodation on bed & breakfast basis at The Nairobi Serena Hotel (BB)."
      },
      {
        day: "Day 02",
        title: "Nairobi/Mount Kenya National Park",
        description: "After breakfast drive to the Mount Kenya National Park arriving in time for lunch at The Serena Mountain Lodge. Rest of the day at leisure with game viewing from the lodge. Dinner and overnight at Serena Mountain Lodge (LDBB)."
      },
      {
        day: "Day 03",
        title: "Mount Kenya National Park/Lake Nakuru National Park",
        description: "After breakfast you will be collected for the day's drive, via the Nyahururu waterfalls to the floor of the Great Rift Valley, destination Lake Nakuru National Park arriving in time for lunch at the camp. Afternoon game drive. Dinner and overnight at Flamingo Hill Tented Camp (LDBB)."
      },
      {
        day: "Day 04",
        title: "Lake Nakuru National Park/Masai Mara National Reserve",
        description: "After breakfast, drive to the Masai Mara National Reserve offering wonderful scenery and plenty of game. It is perhaps the only region left in Kenya where the visitor may see animals in the same super-abundance as existed a century ago, arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Mara Serena Lodge (LDBB)."
      },
      {
        day: "Day 05",
        title: "Masai Mara National Reserve",
        description: "(Early morning optional balloon ride with champagne-style breakfast.) Full day in Masai Mara with morning and afternoon game drives. All meals and overnight at Mara Serena Lodge (LDBB)."
      },
      {
        day: "Day 06",
        title: "Masai Mara National Reserve/Nairobi/Amboseli National Park",
        description: "After breakfast drive to Nairobi arriving in time for lunch at The Carnivore Restaurant. After lunch drive to Amboseli National Park, lying below the most famous symbol of Africa, Mount Kilimanjaro. The 392 sq km Amboseli National Park lies due south of Nairobi, within clear sight of Mt Kilimanjaro, Africa's highest mountain at 5896 metres. The waters of the mountain feed the seasonal swamps and marshes on which the game and birds, which live in the park, rely. It is here that photographers will hope to shoot the classic picture of the elephant or giraffe standing against the dramatic backdrop of the snow capped mountain. Game drive enroute to your lodge. Dinner and overnight at Amboseli Serena Lodge (LDBB)."
      },
      {
        day: "Day 07",
        title: "Amboseli National Park",
        description: "Early morning game drive returning to the lodge for breakfast. Rest of the morning at leisure. Lunch. Afternoon game drive. Dinner and overnight at Amboseli Serena Lodge (LDBB)."
      },
      {
        day: "Day 08",
        title: "Amboseli National Park/Nairobi/Departure",
        description: "After breakfast, drive to Nairobi and drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. A Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
      }
    ]
  },
  {
      id: "JT008",
      name: "Explore Kenya Safari (Classic)",
      duration: "8 Days / 7 Nights",
      description: "An exploratory journey through Kenya's most fascinating wildlife regions and landscapes.",
      highlights: [
        "Diverse wildlife habitats",
        "Expert naturalist guides",
        "Photographic opportunities",
        "Comfortable accommodations"
      ],
      difficulty: "Moderate",
      destinations: ["Masai Mara", "Lake Nakuru", "Mount Kenya", "Amboseli", "Lake Naivasha"],
      coverImage: "explore-kenya.jpg",
      tourCode: "JT008",
      itinerary: [
        {
          day: "Day 01",
          title: "Arrival In Nairobi",
          description: "Met upon arrival at Jomo Kenyatta International Airport by a Jambo Tours representative. Assistance and transfer to your hotel. Rest of the day at leisure. Accommodation on bed & breakfast basis at The Panafric Hotel (BB)."
        },
        {
          day: "Day 02",
          title: "Nairobi/Aberdare National Park",
          description: "After breakfast drive to the Aberdares arriving in time for lunch at The Aberdare Country Club. After lunch transfer to the lodge situated inside the Aberdare National Park. Rest of the day at leisure with game viewing from the lodge. Dinner and overnight at The Ark Lodge (LDBB)."
        },
        {
          day: "Day 03",
          title: "Aberdare National Park/Lake Nakuru National Park/Lake Naivasha",
          description: "After breakfast you will be collected for the day's drive, via the Nyahururu waterfalls to the floor of the Great Rift Valley, destination Lake Nakuru National Park arriving in time for lunch at the lodge. After lunch proceed for a game drive and thereafter continue to Lake Naivasha arriving in the late afternoon for dinner and overnight at Naivasha Sopa Lodge (LDBB)."
        },
        {
          day: "Day 04",
          title: "Lake Naivasha/Masai Mara National Reserve",
          description: "After breakfast, drive to the Masai Mara National Reserve offering wonderful scenery and plenty of game. It is perhaps the only region left in Kenya where the visitor may see animals in the same super-abundance as existed a century ago, arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Mara Sopa Lodge (LDBB)."
        },
        {
          day: "Day 05",
          title: "Masai Mara National Reserve",
          description: "(Early morning optional balloon ride with champagne-style breakfast.) Full day in Masai Mara with morning and afternoon game drives. All meals and overnight at Mara Sopa Lodge (LDBB)."
        },
        {
          day: "Day 06",
          title: "Masai Mara National Reserve/Nairobi/Amboseli National Park",
          description: "After breakfast drive to Nairobi arriving in time for lunch at The Carnivore Restaurant. After lunch drive to Amboseli National Park, lying below the most famous symbol of Africa, Mount Kilimanjaro. The 392 sq km park supports a wide range of mammals and birds. Game drive enroute to your lodge. Dinner and overnight at Amboseli Sopa Lodge (LDBB)."
        },
        {
          day: "Day 07",
          title: "Amboseli National Park",
          description: "Early morning game drive returning to the lodge for breakfast. Rest of the morning at leisure. Lunch. Afternoon game drive. Dinner and overnight at Amboseli Sopa Lodge (LDBB)."
        },
        {
          day: "Day 08",
          title: "Amboseli National Park/Nairobi/Departure",
          description: "After breakfast, drive to Nairobi and drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. A Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
        }
      ],
      accommodationSummary: [
        { day: "01", location: "Nairobi", accommodation: "Panafric Hotel", board: "BB", activity: "TRSF" },
        { day: "02", location: "Mount Kenya", accommodation: "The Ark Lodge", board: "LDBB", activity: "GV" },
        { day: "03", location: "Nakuru/Naivasha", accommodation: "Naivasha Sopa Lodge", board: "LDBB", activity: "P" },
        { day: "04", location: "Masai Mara", accommodation: "Mara Sopa Lodge", board: "LDBB", activity: "P" },
        { day: "05", location: "Masai Mara", accommodation: "Mara Sopa Lodge", board: "LDBB", activity: "E,A,P" },
        { day: "06", location: "Amboseli", accommodation: "Amboseli Sopa Lodge", board: "LDBB", activity: "P" },
        { day: "07", location: "Amboseli", accommodation: "Amboseli Sopa Lodge", board: "LDBB", activity: "E,P" },
        { day: "08", location: "Departure", accommodation: "", board: "", activity: "TRSF" }
      ]
    },
    {
      id: "JT009",
      name: "Majestic Kenya Safari (Classic)",
      duration: "8 Days / 7 Nights",
      description: "A majestic journey through Kenya's pristine wilderness and breathtaking landscapes.",
      highlights: [
        "Premium accommodations",
        "Diverse ecosystems",
        "Big Five wildlife viewing",
        "Spectacular scenery"
      ],
      difficulty: "Moderate",
      destinations: ["Nairobi", "Mount Kenya", "Lake Nakuru", "Masai Mara", "Amboseli"],
      coverImage: "majestic-kenya.jpg",
      tourCode: "JT009",
      itinerary: [
        {
          day: "Day 01",
          title: "Arrival In Nairobi",
          description: "Met upon arrival at Jomo Kenyatta International Airport by a Jambo Tours representative. Assistance and transfer to your hotel. Rest of the day at leisure. Accommodation on bed & breakfast basis at The Stanley Hotel (BB)."
        },
        {
          day: "Day 02",
          title: "Nairobi/Aberdare National Park",
          description: "After breakfast drive to the Aberdares arriving in time for lunch at The Aberdare Country Club. After lunch transfer to the lodge situated inside the Aberdare National Park. Rest of the day at leisure with game viewing from the lodge. Dinner and overnight at The Ark Lodge (LDBB)."
        },
        {
          day: "Day 03",
          title: "Aberdare National Park/Lake Nakuru National Park",
          description: "After breakfast you will be collected for the day's drive, via the Nyahururu waterfalls to the floor of the Great Rift Valley, destination Lake Nakuru National Park arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Sarova Lion Hill Lodge (LDBB)."
        },
        {
          day: "Day 04",
          title: "Lake Nakuru National Park/Masai Mara National Reserve",
          description: "After breakfast, drive to the Masai Mara National Reserve offering wonderful scenery and plenty of game. It is perhaps the only region left in Kenya where the visitor may see animals in the same super-abundance as existed a century ago, arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Sarova Mara Camp (LDBB)."
        },
        {
          day: "Day 05",
          title: "Masai Mara National Reserve",
          description: "(Early morning optional balloon ride with champagne-style breakfast.) Full day in Masai Mara with morning and afternoon game drives. All meals and overnight at Sarova Mara Camp (LDBB)."
        },
        {
          day: "Day 06",
          title: "Masai Mara National Reserve/Nairobi/Amboseli National Park",
          description: "After breakfast drive to Nairobi arriving in time for lunch at The Carnivore Restaurant. After lunch drive to Amboseli National Park, lying below the most famous symbol of Africa, Mount Kilimanjaro. The 392 sq km park supports a wide range of mammals and birds, which live in the park, rely. It is here that photographers will hope to shoot the classic picture of the elephant or giraffe standing against the dramatic back-drop of the snow capped mountain. Game drive enroute to your lodge. Dinner and overnight at Ol Tukai Lodge (LDBB)."
        },
        {
          day: "Day 07",
          title: "Amboseli National Park",
          description: "Early morning game drive returning to the lodge for breakfast. Rest of the morning at leisure. Lunch. Afternoon game drive. Dinner and overnight at Ol Tukai Lodge (LDBB)."
        },
        {
          day: "Day 08",
          title: "Amboseli National Park/Nairobi/Departure",
          description: "After breakfast, drive to Nairobi and drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. A Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
        }
      ],
      accommodationSummary: [
        { day: "01", location: "Nairobi", accommodation: "The Stanley Hotel", board: "BB", activity: "TRSF" },
        { day: "02", location: "Mount Kenya", accommodation: "The Ark Lodge", board: "LDBB", activity: "GV" },
        { day: "03", location: "Lake Nakuru", accommodation: "Sarova Lion Hill Lodge", board: "LDBB", activity: "P" },
        { day: "04", location: "Masai Mara", accommodation: "Sarova Mara Camp", board: "LDBB", activity: "P" },
        { day: "05", location: "Masai Mara", accommodation: "Sarova Mara Camp", board: "LDBB", activity: "E,A,P" },
        { day: "06", location: "Amboseli", accommodation: "Ol Tukai Lodge LDBB", board: "LDBB", activity: "P" },
        { day: "07", location: "Amboseli", accommodation: "Ol Tukai Lodge LDBB", board: "LDBB", activity: "E,P" },
        { day: "08", location: "Departure", accommodation: "", board: "", activity: "TRSF" }
      ]
    },
    {
      id: "JT010",
      name: "Kenya Trails Safari (Classic)",
      duration: "6 Days / 5 Nights",
      description: "An immersive journey through Kenya's most iconic wildlife trails and natural landscapes.",
      highlights: [
        "Quintessential Kenya experience",
        "Big Five game viewing",
        "Diverse landscapes",
        "Premium accommodations"
      ],
      difficulty: "Easy to Moderate",
      destinations: ["Nairobi", "Mount Kenya", "Lake Nakuru", "Masai Mara"],
      coverImage: "kenya-trails.jpg",
      tourCode: "JT010",
      itinerary: [
        {
          day: "Day 01",
          title: "Arrival In Nairobi",
          description: "Met upon arrival at Jomo Kenyatta International Airport by a Jambo Tours representative. Assistance and transfer to your hotel. Rest of the day at leisure. Accommodation on bed & breakfast basis at The Nairobi Serena Hotel (BB)."
        },
        {
          day: "Day 02",
          title: "Nairobi/Mount Kenya National Park",
          description: "After breakfast drive to the Mount Kenya National Park arriving in time for lunch at The Serena Mountain Lodge. Rest of the day at leisure with game viewing from the lodge. Dinner and overnight at Serena Mountain Lodge (LDBB)."
        },
        {
          day: "Day 03",
          title: "Mount Kenya National Park/Lake Nakuru National Park",
          description: "After breakfast you will be collected for the day's drive, via the Nyahururu waterfalls to the floor of the Great Rift Valley, destination Lake Nakuru National Park arriving in time for lunch at the camp. Afternoon game drive. Dinner and overnight at Flamingo Hill Tented Camp (LDBB)."
        },
        {
          day: "Day 04",
          title: "Lake Nakuru National Park/Masai Mara National Reserve",
          description: "After breakfast, drive to the Masai Mara National Reserve offering wonderful scenery and plenty of game. It is perhaps the only region left in Kenya where the visitor may see animals in the same super-abundance as existed a century ago, arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Mara Serena Lodge (LDBB)."
        },
        {
          day: "Day 05",
          title: "Masai Mara National Reserve",
          description: "(Early morning optional balloon ride with champagne-style breakfast.) Full day in Masai Mara with morning and afternoon game drives. All meals and overnight at Mara Serena Lodge (LDBB)."
        },
        {
          day: "Day 06",
          title: "Masai Mara National Reserve/Nairobi/Departure",
          description: "After breakfast drive to Nairobi arriving in time for lunch at The Carnivore Restaurant. After lunch drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. A Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
        }
      ],
      accommodationSummary: [
        { day: "01", location: "Nairobi", accommodation: "Nairobi Serena Hotel", board: "BB", activity: "TRSF" },
        { day: "02", location: "Mount Kenya", accommodation: "Mountain Lodge", board: "LDBB", activity: "GV" },
        { day: "03", location: "Lake Nakuru", accommodation: "Flamingo Hill Tented Camp", board: "LDBB", activity: "P" },
        { day: "04", location: "Masai Mara", accommodation: "Mara Serena Lodge", board: "LDBB", activity: "P" },
        { day: "05", location: "Masai Mara", accommodation: "Mara Serena Lodge", board: "LDBB", activity: "E,A,P" },
        { day: "06", location: "Departure", accommodation: "", board: "", activity: "TRSF" }
      ]
    },
    {
      id: "JT011",
      name: "Discover Kenya Safari (Classic)",
      duration: "6 Days / 5 Nights",
      "description": "A perfect introduction to Kenya's wildlife and landscapes for first-time safari-goers.",
      highlights: [
        "Aberdare National Park tree lodge",
        "Lake Nakuru and Lake Naivasha exploration",
        "Masai Mara extensive game drives",
        "Optional balloon safari"
      ],
      difficulty: "Easy",
      destinations: ["Mount Kenya", "Lake Nakuru", "Lake Naivasha", "Masai Mara"],
      itinerary: [
        {
          "day": "Day 01",
          "title": "Arrival In Nairobi",
          "description": "Met upon arrival at Jomo Kenyatta International Airport by a Jambo Tours representative. Assistance and transfer to your hotel. Rest of the day at leisure. Accommodation on bed & breakfast basis at The Panafric Hotel (BB)"
        },
        {
          "day": "Day 02",
          "title": "Nairobi/Aberdare National Park",
          "description": "After breakfast drive to the Aberdares arriving in time for lunch at The Aberdare Country Club. After lunch transfer to the lodge situated inside the Aberdare National Park. Rest of the day at leisure with game viewing from the lodge. Dinner and overnight at The Ark Lodge (LDBB)"
        },
        {
          "day": "Day 03",
          "title": "Aberdare National Park/Lake Nakuru National Park/Lake Naivasha",
          "description": "After breakfast you will be collected for the day's drive, via the Nyahururu waterfalls to the floor of the Great Rift Valley, destination Lake Nakuru National Park arriving in time for lunch at the lodge. After lunch proceed for a game drive and thereafter continue to Lake Naivasha arriving in the late afternoon for dinner and overnight at Lake Naivasha Sopa Lodge (LDBB)"
        },
        {
          "day": "Day 04",
          "title": "Lake Naivasha/Masai Mara National Reserve",
          "description": "After breakfast, drive to the Masai Mara National Reserve offering wonderful scenery and plenty of game. It is perhaps the only region left in Kenya where the visitor may see animals in the same super-abundance as existed a century ago, arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Mara Sopa Lodge (LDBB)"
        },
        {
          "day": "Day 05",
          "title": "Masai Mara National Reserve",
          "description": "(Early morning optional balloon ride with champagne-style breakfast.) Full day in Masai Mara with morning and afternoon game drives. All meals and overnight at Mara Sopa Lodge (LDBB)"
        },
        {
          "day": "Day 06",
          "title": "Masai Mara National Reserve/Nairobi/Departure",
          "description": "After breakfast drive to Nairobi arriving in time for lunch at The Carnivore Restaurant. After lunch drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. A Jambo Tours representative will re-confirm your onward flight, and assist you at check-in."
        }
      ]
    },
    {
      id: "JT012",
      name: "Simba Safari (Classic)",
      duration: "6 Days / 5 Nights",
      "description": "Follow in the footsteps of lions on this classic Kenya safari experience.",
      highlights: [
        "Aberdare National Park tree lodge experience",
        "Lake Nakuru National Park wildlife viewing",
        "Masai Mara extensive game drives",
        "Optional balloon safari"
      ],
      difficulty: "Easy",
      destinations: ["Aberdare", "Lake Nakuru", "Masai Mara"],
      itinerary: [
        {
          "day": "Day 01",
          "title": "Arrival In Nairobi",
          "description": "Met upon arrival at Jomo Kenyatta International Airport by a Jambo Tours representative. Assistance and transfer to your hotel. Rest of the day at leisure. Accommodation on bed & breakfast basis at The Stanley Hotel (BB)"
        },
        {
          "day": "Day 02",
          "title": "Nairobi/Aberdare National Park",
          "description": "After breakfast drive to the Aberdares arriving in time for lunch at The Aberdare Country Club. After lunch transfer to the lodge situated inside the Aberdare National Park. Rest of the day at leisure with game viewing from the lodge. Dinner and overnight at The Ark Lodge (LDBB)"
        },
        {
          "day": "Day 03",
          "title": "Aberdare National Park/Lake Nakuru National Park",
          "description": "After breakfast you will be collected for the day's drive, via the Nyahururu waterfalls to the floor of the Great Rift Valley, destination Lake Nakuru National Park arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Sarova Lion Hill Lodge (LDBB)"
        },
        {
          "day": "Day 04",
          "title": "Lake Nakuru National Park/Masai Mara National Reserve",
          "description": "After breakfast, drive to the Masai Mara National Reserve offering wonderful scenery and plenty of game. It is perhaps the only region left in Kenya where the visitor may see animals in the same super-abundance as existed a century ago, arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Sarova Mara Camp (LDBB)"
        },
        {
          "day": "Day 05",
          "title": "Masai Mara National Reserve",
          "description": "(Early morning optional balloon ride with champagne-style breakfast.) Full day in Masai Mara with morning and afternoon game drives. All meals and overnight at Sarova Mara Camp (LDBB)"
        },
        {
          "day": "Day 06",
          "title": "Masai Mara National Reserve/Nairobi/Departure",
          "description": "After breakfast drive to Nairobi arriving in time for lunch at The Carnivore Restaurant. After lunch drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. A Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
        }
      ]
    },
    {
      id: "JT013",
      name: "Kenya Plains & Safari (Classic)",
      duration: "7 Days / 6 Nights",
      "description": "Discover the magnificent plains of Kenya and witness diverse wildlife in their natural habitats.",
      highlights: [
        "Lake Nakuru flamingo viewing",
        "Masai Mara Big Five sightings",
        "Optional hot air balloon safari",
        "Amboseli with Mt. Kilimanjaro backdrop"
      ],
      difficulty: "Easy",
      destinations: ["Lake Nakuru", "Masai Mara", "Amboseli"],
      itinerary: [
        {
          "day": "Day 01",
          "title": "Arrival In Nairobi",
          "description": "Met upon arrival at Jomo Kenyatta International Airport by a Jambo Tours representative. Assistance and transfer to your hotel. Rest of the day at leisure. Accommodation on bed & breakfast basis at The Nairobi Serena Hotel (BB)"
        },
        {
          "day": "Day 02",
          "title": "Nairobi/Lake Nakuru National Park",
          "description": "After breakfast drive to Lake Nakuru National Park arriving in time for lunch at the camp. Afternoon game drive. Dinner and overnight at Flamingo Hill Tented Camp (LDBB)"
        },
        {
          "day": "Day 03",
          "title": "Lake Nakuru National Park/Masai Mara National Reserve",
          "description": "After breakfast, drive to the Masai Mara National Reserve offering wonderful scenery and plenty of game. It is perhaps the only region left in Kenya where the visitor may see animals in the same super-abundance as existed a century ago, arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Mara Serena Lodge (LDBB)"
        },
        {
          "day": "Day 04",
          "title": "Masai Mara National Reserve",
          "description": "(Early morning optional balloon ride with champagne-style breakfast.) Full day in Masai Mara with morning and afternoon game drives. All meals and overnight at Mara Serena Lodge (LDBB)"
        },
        {
          "day": "Day 05",
          "title": "Masai Mara National Reserve/Nairobi/Amboseli National Park",
          "description": "After breakfast drive to Nairobi arriving in time for lunch at The Carnivore Restaurant. After lunch drive to Amboseli National Park, lying below the most famous symbol of Africa, Mount Kilimanjaro. The 392 sq km Amboseli National Park lies due south of Nairobi, within clear sight of Mt Kilimanjaro, Africa's highest mountain at 5896 metres. The waters of the mountain feed the seasonal swamps and marshes on which the game and birds, which live in the park, rely. It is here that photographers will hope to shoot the classic picture of the elephant or giraffe standing against the dramatic backdrop of the snow capped mountain. Game drive enroute to your lodge. Dinner and overnight at Amboseli Serena Lodge (LDBB)"
        },
        {
          "day": "Day 06",
          "title": "Amboseli National Park",
          "description": "Early morning game drive returning to the lodge for breakfast. Rest of the morning at leisure. Lunch. Afternoon game drive. Dinner and overnight at Amboseli Serena Lodge (LDBB)"
        },
        {
          "day": "Day 07",
          "title": "Amboseli National Park/Nairobi/Departure",
          "description": "After breakfast, drive to Nairobi and drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. A Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
        }
      ]
    },
    {
      id: "JT014",
      name: "Ndovu Trail (Classic)",
      duration: "7 Days / 6 Nights",
      "description": "Experience Kenya's stunning landscapes and abundant wildlife on this classic safari trail.",
      highlights: [
        "Lake Naivasha and Lake Nakuru exploration",
        "Masai Mara game drives",
        "Optional balloon safari experience",
        "Mount Kilimanjaro views from Amboseli"
      ],
      difficulty: "Easy",
      destinations: ["Lake Naivasha", "Lake Nakuru", "Masai Mara", "Amboseli"],
      itinerary: [
        {
          "day": "Day 01",
          "title": "Arrival In Nairobi",
          "description": "Met upon arrival at Jomo Kenyatta International Airport by an Jambo Tours representative. Assistance and transfer to your hotel. Rest of the day at leisure. Accommodation on bed & breakfast basis at The Panafric Hotel (BB)"
        },
        {
          "day": "Day 02",
          "title": "Nairobi/Lake Nakuru National Park/Lake Naivasha",
          "description": "After breakfast drive to Lake Naivasha for lunch at your lodge. After lunch proceed for a game drive to Lake Nakuru National Park. Thereafter drive back to Lake Naivasha. Dinner and overnight at Lake Naivasha Sopa Lodge (LDBB)"
        },
        {
          "day": "Day 03",
          "title": "Lake Naivasha/Masai Mara National Reserve",
          "description": "After breakfast, drive to the Masai Mara National Reserve offering wonderful scenery and plenty of game. It is perhaps the only region left in Kenya where the visitor may see animals in the same super-abundance as existed a century ago, arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Mara Sopa Lodge (LDBB)"
        },
        {
          "day": "Day 04",
          "title": "Masai Mara National Reserve",
          "description": "(Early morning optional balloon ride with champagne-style breakfast.) Full day in Masai Mara with morning and afternoon game drives. All meals and overnight at Mara Sopa Lodge (LDBB)"
        },
        {
          "day": "Day 05",
          "title": "Masai Mara National Reserve/Nairobi/Amboseli National Park",
          "description": "After breakfast drive to Nairobi arriving in time for lunch at The Carnivore Restaurant. After lunch drive to Amboseli National Park, lying below the most famous symbol of Africa, Mount Kilimanjaro. The 392 sq km Amboseli National Park lies due south of Nairobi, within clear sight of Mt Kilimanjaro, Africa's highest mountain at 5896 metres. The waters of the mountain feed the seasonal swamps and marshes on which the game and birds, which live in the park, rely. It is here that photographers will hope to shoot the classic picture of the elephant or giraffe standing against the dramatic backdrop of the snow capped mountain. Game drive enroute to your lodge. Dinner and overnight at Amboseli Sopa Lodge (LDBB)"
        },
        {
          "day": "Day 06",
          "title": "Amboseli National Park",
          "description": "Early morning game drive returning to the lodge for breakfast. Rest of the morning at leisure. Lunch. Afternoon game drive. Dinner and overnight at Amboseli Sopa Lodge (LDBB)"
        },
        {
          "day": "Day 07",
          "title": "Amboseli National Park/Nairobi/Departure",
          "description": "After breakfast, drive to Nairobi and drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. A Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
        }
      ]
    },
    {
      name: "KENYA FRONTIERS SAFARI (CLASSIC)",
      "tourCode": "JT015",
      duration: "7 days",
      itinerary: [
        {
          "day": 1,
          "title": "Arrival In Nairobi",
          "location": "Nairobi",
          "accommodation": "The Stanley Hotel",
          "board": "BB",
          "activity": "TRSF",
          "description": "Met upon arrival at Jomo Kenyatta International Airport by a Jambo Tours representative. Assistance and transfer to your hotel. Rest of the day at leisure. Accommodation on bed & breakfast basis at The Stanley Hotel (BB)"
        },
        {
          "day": 2,
          "title": "Nairobi/Lake Nakuru National Park",
          "location": "Lake Nakuru",
          "accommodation": "Sarova Lion Hill Lodge",
          "board": "LDBB",
          "activity": "P",
          "description": "After breakfast drive to Lake Nakuru National Park arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Sarova Lion Hill Lodge (LDBB)"
        },
        {
          "day": 3,
          "title": "Lake Nakuru National Park/Masai Mara National Reserve",
          "location": "Masai Mara",
          "accommodation": "Sarova Mara Camp",
          "board": "LDBB",
          "activity": "P",
          "description": "After breakfast, drive to the Masai Mara National Reserve offering wonderful scenery and plenty of game. It is perhaps the only region left in Kenya where the visitor may see animals in the same super-abundance as existed a century ago, arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Sarova Mara Camp (LDBB)"
        },
        {
          "day": 4,
          "title": "Masai Mara National Reserve",
          "location": "Masai Mara",
          "accommodation": "Sarova Mara Camp",
          "board": "LDBB",
          "activity": "E,A,P",
          "description": "(Early morning optional balloon ride with champagne-style breakfast.) Full day in Masai Mara with morning and afternoon game drives. All meals and overnight at Sarova Mara Camp (LDBB)"
        },
        {
          "day": 5,
          "title": "Masai Mara National Reserve/Nairobi/Amboseli National Park",
          "location": "Amboseli",
          "accommodation": "Ol Tukai Lodge",
          "board": "LDBB",
          "activity": "P",
          "description": "After breakfast drive to Nairobi arriving in time for lunch at The Carnivore Restaurant. After lunch drive to Amboseli National Park, lying below the most famous symbol of Africa, Mount Kilimanjaro. The 392 sq km Amboseli National Park lies due south of Nairobi, within clear sight of Mt Kilimanjaro, Africa's highest mountain at 5896 metres. The waters of the mountain feed the seasonal swamps and marshes on which the game and birds, which live in the park, rely. It is here that photographers will hope to shoot the classic picture of the elephant or giraffe standing against the dramatic backdrop of the snow capped mountain. Game drive enroute to your lodge. Dinner and overnight at Ol Tukai Lodge (LDBB)"
        },
        {
          "day": 6,
          "title": "Amboseli National Park",
          "location": "Amboseli",
          "accommodation": "Ol Tukai Lodge",
          "board": "LDBB",
          "activity": "E,P",
          "description": "Early morning game drive returning to the lodge for breakfast. Rest of the morning at leisure. Lunch. Afternoon game drive. Dinner and overnight at Ol Tukai Lodge (LDBB)"
        },
        {
          "day": 7,
          "title": "Amboseli National Park/Nairobi/Departure",
          "activity": "TRSF",
          "description": "After breakfast, drive to Nairobi and drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. A Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
        }
      ]
    },
    {
      name: "MIGRATION SAFARI (CLASSIC)",
      "tourCode": "JT016",
      duration: "5 days",
      itinerary: [
        {
          "day": 1,
          "title": "Arrival In Nairobi",
          "location": "Nairobi",
          "accommodation": "Nairobi Serena Hotel",
          "board": "BB",
          "activity": "TRSF",
          "description": "Met upon arrival at Jomo Kenyatta International Airport by a Jambo Tours representative. Assistance and transfer to your hotel. Rest of the day at leisure. Accommodation on bed & breakfast basis at The Nairobi Serena Hotel (BB)"
        },
        {
          "day": 2,
          "title": "Nairobi/Lake Nakuru National Park",
          "location": "Lake Nakuru",
          "accommodation": "Flamingo Hill Tented Camp",
          "board": "LDBB",
          "activity": "P",
          "description": "After breakfast drive to Lake Nakuru National Park arriving in time for lunch at the camp. Afternoon game drive. Dinner and overnight at Flamingo Hill Tented Camp (LDBB)"
        },
        {
          "day": 3,
          "title": "Lake Nakuru National Park/Masai Mara National Reserve",
          "location": "Masai Mara",
          "accommodation": "Mara Serena Lodge",
          "board": "LDBB",
          "activity": "P",
          "description": "After breakfast, drive to the Masai Mara National Reserve offering wonderful scenery and plenty of game. It is perhaps the only region left in Kenya where the visitor may see animals in the same super-abundance as existed a century ago, arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Mara Serena Lodge (LDBB)"
        },
        {
          "day": 4,
          "title": "Masai Mara National Reserve",
          "location": "Masai Mara",
          "accommodation": "Mara Serena Lodge",
          "board": "LDBB",
          "activity": "E,A,P",
          "description": "(Early morning optional balloon ride with champagne-style breakfast.) Full day in Masai Mara with morning and afternoon game drives. All meals and overnight at Mara Serena Lodge (LDBB)"
        },
        {
          "day": 5,
          "title": "Masai Mara National Reserve/Nairobi/Departure",
          "activity": "TRSF",
          "description": "After breakfast drive to Nairobi arriving in time for lunch at The Carnivore Restaurant. After lunch drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. A Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
        }
      ]
    },
    {
      name: "MAASAI SAFARI (CLASSIC)",
      "tourCode": "JT017",
      duration: "5 days",
      itinerary: [
        {
          "day": 1,
          "title": "Arrival In Nairobi",
          "location": "Nairobi",
          "accommodation": "Panafric Hotel",
          "board": "BB",
          "activity": "TRSF",
          "description": "Met upon arrival at Jomo Kenyatta International Airport by a Jambo Tours representative. Assistance and transfer to your hotel. Rest of the day at leisure. Accommodation on bed & breakfast basis at The Panafric Hotel (BB)"
        },
        {
          "day": 2,
          "title": "Nairobi/Lake Nakuru National Park/Lake Naivasha",
          "location": "Nakuru/Naivasha",
          "accommodation": "Naivasha Sopa Lodge",
          "board": "LDBB",
          "activity": "P",
          "description": "After breakfast drive to Lake Naivasha for lunch at your lodge. After lunch proceed for a game drive to Lake Nakuru National Park. Thereafter drive back to Lake Naivasha. Dinner and overnight at Lake Naivasha Sopa Lodge (LDBB)"
        },
        {
          "day": 3,
          "title": "Lake Naivasha/Masai Mara National Reserve",
          "location": "Masai Mara",
          "accommodation": "Mara Sopa Lodge",
          "board": "LDBB",
          "activity": "P",
          "description": "After breakfast, drive to the Masai Mara National Reserve offering wonderful scenery and plenty of game. It is perhaps the only region left in Kenya where the visitor may see animals in the same super-abundance as existed a century ago, arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Mara Sopa Lodge (LDBB)"
        },
        {
          "day": 4,
          "title": "Masai Mara National Reserve",
          "location": "Masai Mara",
          "accommodation": "Mara Sopa Lodge",
          "board": "LDBB",
          "activity": "E, A, P",
          "description": "(Early morning optional balloon ride with champagne-style breakfast.) Full day in Masai Mara with morning and afternoon game drives. All meals and overnight at Mara Sopa Lodge (LDBB)"
        },
        {
          "day": 5,
          "title": "Masai Mara National Reserve/Nairobi/Departure",
          "activity": "TRSF",
          "description": "After breakfast drive to Nairobi arriving in time for lunch at The Carnivore Restaurant. After lunch drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. A Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
        }
      ]
    },
    {
      name: "SAFARI ROYALE (CLASSIC)",
      "tourCode": "JT018",
      duration: "5 days",
      itinerary: [
        {
          "day": 1,
          "title": "Arrival In Nairobi",
          "location": "Nairobi",
          "accommodation": "The Stanley Hotel",
          "board": "BB",
          "activity": "TRSF",
          "description": "Met upon arrival at Jomo Kenyatta International Airport by a Jambo Tours representative. Assistance and transfer to your hotel. Rest of the day at leisure. Accommodation on bed & breakfast basis at The Stanley Hotel (BB)"
        },
        {
          "day": 2,
          "title": "Nairobi/Lake Nakuru National Park",
          "location": "Lake Nakuru",
          "accommodation": "Sarova Lion Hill Lodge",
          "board": "LDBB",
          "activity": "P",
          "description": "After breakfast drive to Lake Nakuru National Park arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Sarova Lion Hill Lodge (LDBB)"
        },
        {
          "day": 3,
          "title": "Lake Nakuru National Park/Masai Mara National Reserve",
          "location": "Masai Mara",
          "accommodation": "Sarova Mara Camp",
          "board": "LDBB",
          "activity": "P",
          "description": "After breakfast, drive to the Masai Mara National Reserve offering wonderful scenery and plenty of game. It is perhaps the only region left in Kenya where the visitor may see animals in the same super-abundance as existed a century ago, arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Sarova Mara Camp (LDBB)"
        },
        {
          "day": 4,
          "title": "Masai Mara National Reserve",
          "location": "Masai Mara",
          "accommodation": "Sarova Mara Camp",
          "board": "LDBB",
          "activity": "E,A,P",
          "description": "(Early morning optional balloon ride with champagne-style breakfast.) Full day in Masai Mara with morning and afternoon game drives. All meals and overnight at Sarova Mara Camp (LDBB)"
        },
        {
          "day": 5,
          "title": "Masai Mara National Reserve/Nairobi/Departure",
          "activity": "TRSF",
          "description": "After breakfast drive to Nairobi arriving in time for lunch at The Carnivore Restaurant. After lunch drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. A Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
        }
      ]
    },
    {
      name: "MARA SERENADE EXPERIENCE (CLASSIC)",
      "tourCode": "JT019",
      duration: "3 days",
      itinerary: [
        {
          "day": 1,
          "title": "Nairobi/Masai Mara National Reserve",
          "location": "Masai Mara",
          "accommodation": "Mara Serena Lodge",
          "board": "LDBB",
          "activity": "P",
          "description": "After breakfast, drive to the Masai Mara National Reserve offering wonderful scenery and plenty of game. It is perhaps the only region left in Kenya where the visitor may see animals in the same super-abundance as existed a century ago, arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Mara Serena Lodge (LDBB)"
        },
        {
          "day": 2,
          "title": "Masai Mara National Reserve",
          "location": "Masai Mara",
          "accommodation": "Mara Serena Lodge",
          "board": "LDBB",
          "activity": "E, A, P",
          "description": "(Early morning optional balloon ride with champagne-style breakfast.) Full day in Masai Mara with morning and afternoon game drives. All meals and overnight at Mara Serena Lodge (LDBB)"
        },
        {
          "day": 3,
          "title": "Masai Mara National Reserve/Nairobi/Departure",
          "activity": "TRSF",
          "description": "After breakfast drive to Nairobi arriving in time for lunch at The Carnivore Restaurant. After lunch drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. A Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
        }
      ]
    },
    {
      name: "MARA CLASSIC EXPERIENCE (CLASSIC)",
      "tourCode": "JT020",
      duration: "3 days",
      itinerary: [
        {
          "day": 1,
          "title": "Nairobi/Masai Mara National Reserve",
          "location": "Masai Mara",
          "accommodation": "Mara Sopa Lodge",
          "board": "LDBB",
          "activity": "P",
          "description": "After breakfast, drive to the Masai Mara National Reserve offering wonderful scenery and plenty of game. It is perhaps the only region left in Kenya where the visitor may see animals in the same super-abundance as existed a century ago, arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Mara Sopa Lodge (LDBB)"
        },
        {
          "day": 2,
          "title": "Masai Mara National Reserve",
          "location": "Masai Mara",
          "accommodation": "Mara Sopa Lodge",
          "board": "LDBB",
          "activity": "E, A, P",
          "description": "(Early morning optional balloon ride with champagne-style breakfast.) Full day in Masai Mara with morning and afternoon game drives. All meals and overnight at Mara Sopa Lodge (LDBB)"
        },
        {
          "day": 3,
          "title": "Masai Mara National Reserve/Nairobi/Departure",
          "activity": "TRSF",
          "description": "After breakfast drive to Nairobi arriving in time for lunch at The Carnivore Restaurant. After lunch drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. An Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
        }
      ]
    },
    {
      name: "MARA PREMIUM EXPERIENCE (CLASSIC)",
      "tourCode": "JT021",
      duration: "3 days",
      itinerary: [
        {
          "day": 1,
          "title": "Nairobi/Masai Mara National Reserve",
          "location": "Masai Mara",
          "accommodation": "Sarova Mara Camp",
          "board": "LDBB",
          "activity": "P",
          "description": "After breakfast, drive to the Masai Mara National Reserve offering wonderful scenery and plenty of game. It is perhaps the only region left in Kenya where the visitor may see animals in the same super-abundance as existed a century ago, arriving in time for lunch at the lodge. Afternoon game drive. Dinner and overnight at Sarova Mara Camp (LDBB)"
        },
        {
          "day": 2,
          "title": "Masai Mara National Reserve",
          "location": "Masai Mara",
          "accommodation": "Sarova Mara Camp",
          "board": "LDBB",
          "activity": "E, A, P",
          "description": "(Early morning optional balloon ride with champagne-style breakfast.) Full day in Masai Mara with morning and afternoon game drives. All meals and overnight at Sarova Mara Camp (LDBB)"
        },
        {
          "day": 3,
          "title": "Masai Mara National Reserve/Nairobi/Departure",
          "activity": "TRSF",
          "description": "After breakfast drive to Nairobi arriving in time for lunch at The Carnivore Restaurant. After lunch drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. A Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
        }
      ]
    },
  ];
  
  // Activity code meanings
  const activityCodes = {
    "L": "Lunch",
    "D": "Dinner",
    "BB": "Bed and breakfast",
    "LDBB": "Lunch, dinner, bed and breakfast",
    "TRSF": "Transfer",
    "E": "Early morning game drive",
    "A": "Morning game drive",
    "P": "Afternoon game drive",
    "GV": "Game Viewing",
    "FLT": "Flight"
  };

  

const KenyaSafari = () => {
  const [selectedSeason, setSelectedSeason] = useState("01.07-31.10.2025"); // Peak season by default
  const [displayCount, setDisplayCount] = useState(6);
  const [filter, setFilter] = useState('all');
  const [selectedPackage, setSelectedPackage] = useState(null);
  const detailsRef = useRef(null);
  
  // Filter functions
  const filteredPackages = safariPackages
    .filter(pkg => {
      if (filter === 'featured') return pkg.featured;
      if (filter === 'budget') return pkg.bestValue || (pkg.seasons && pkg.seasons[0].sharedPrice < 1500);
      if (filter === 'luxury') return pkg.seasons && pkg.seasons[0].sharedPrice > 2500;
      return true;
    });

  // Get current price based on selected season
  const getCurrentPrice = (pkg) => {
    if (!pkg.seasons) return null;
    const season = pkg.seasons.find(s => s.period === selectedSeason);
    return season ? season.sharedPrice : null;
  };

  // Find similar packages based on destinations or price range
  const getSimilarPackages = (pkg) => {
    if (!pkg) return [];
    
    return safariPackages
      .filter(item => 
        item.id !== pkg.id && 
        (
          (item.destinations && pkg.destinations && 
           item.destinations.some(dest => pkg.destinations.includes(dest))) ||
          (item.seasons && pkg.seasons && 
           Math.abs(item.seasons[0].sharedPrice - pkg.seasons[0].sharedPrice) < 500)
        )
      )
      .slice(0, 3);
  };

  const handleViewDetails = (pkg) => {
    setSelectedPackage(pkg);
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const closeDetails = () => {
    setSelectedPackage(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero Section with Parallax Effect */}
      <header className="relative w-full h-[90vh] bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${safariPackages[0].coverImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
            Discover Kenya's <span className="text-amber-400">Wild Beauty</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in extraordinary wildlife encounters and breathtaking landscapes with our premium safari experiences.
          </p>
          <div className="mt-12">
            <button onClick={() => document.getElementById('packages').scrollIntoView({ behavior: 'smooth' })} 
              className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-amber-500/20 flex items-center">
              Explore Safaris <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div id="packages" className="container mx-auto px-4 py-16">
        {/* Season Selector with improved styling */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">When Would You Like to Travel?</h2>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {period: "02.01-30.03.2025", name: "Shoulder Season", icon: "🌤️"},
                {period: "01.04-30.06.2025", name: "Green Season", icon: "🌿"}, 
                {period: "01.07-31.10.2025", name: "Peak Season", icon: "🦁"}, 
                {period: "01.11-15.12.2025", name: "Low Season", icon: "☂️"}
              ].map(({period, name, icon}) => (
                <button
                  key={period}
                  onClick={() => setSelectedSeason(period)}
                  className={`py-4 px-4 rounded-xl transition-all flex flex-col items-center ${
                    selectedSeason === period 
                      ? 'bg-amber-500 text-white shadow-md ring-2 ring-amber-300' 
                      : 'bg-gray-50 text-gray-700 hover:bg-amber-100'
                  }`}
                >
                  <span className="text-2xl mb-2">{icon}</span>
                  <span className="font-medium">{name}</span>
                  <span className="text-sm mt-1 opacity-80">{period}</span>
                </button>
              ))}
            </div>
            <div className="mt-4 p-3 bg-amber-50 rounded-xl text-sm text-amber-800 flex items-center justify-center">
              <Calendar className="h-4 w-4 mr-2" />
              {selectedSeason === "01.07-31.10.2025" && 
                <span>Peak Season - Witness the spectacular Great Migration!</span>
              }
              {selectedSeason === "01.04-30.06.2025" && 
                <span>Green Season - Best value with lush landscapes and fewer crowds</span>
              }
              {selectedSeason === "02.01-30.03.2025" && 
                <span>Shoulder Season - Excellent wildlife viewing with comfortable temperatures</span>
              }
              {selectedSeason === "01.11-15.12.2025" && 
                <span>Low Season - Great deals with occasional short rains and emerging greenery</span>
              }
            </div>
          </div>
        </div>
        
        {/* Filters with pill design */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            <button 
              onClick={() => setFilter('all')}
              className={`py-3 px-8 rounded-full transition-all font-medium ${
                filter === 'all' 
                  ? 'bg-gray-800 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              All Safaris
            </button>
            <button 
              onClick={() => setFilter('featured')}
              className={`py-3 px-8 rounded-full transition-all font-medium ${
                filter === 'featured' 
                  ? 'bg-amber-500 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-amber-50 shadow'
              }`}
            >
              <Star className="h-4 w-4 inline mr-2" />
              Featured
            </button>
            <button 
              onClick={() => setFilter('budget')}
              className={`py-3 px-8 rounded-full transition-all font-medium ${
                filter === 'budget' 
                  ? 'bg-emerald-500 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-emerald-50 shadow'
              }`}
            >
              <Tag className="h-4 w-4 inline mr-2" />
              Budget-Friendly
            </button>
            <button 
              onClick={() => setFilter('luxury')}
              className={`py-3 px-8 rounded-full transition-all font-medium ${
                filter === 'luxury' 
                  ? 'bg-indigo-500 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-indigo-50 shadow'
              }`}
            >
              Luxury
            </button>
          </div>
        </div>

        {/* Safari Packages with Modern Card Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.slice(0, displayCount).map((safari) => {
            const currentPrice = getCurrentPrice(safari);
            
            return (
              <div 
                key={safari.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-2xl transform hover:-translate-y-1 group"
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={safari.coverImage} 
                    alt={safari.name} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {safari.featured && (
                      <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                        <Star className="h-3 w-3 mr-1" /> Featured
                      </div>
                    )}
                    {safari.bestValue && (
                      <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                        <Tag className="h-3 w-3 mr-1" /> Best Value
                      </div>
                    )}
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {safari.duration}
                  </div>
                  
                  {/* Price Badge */}
                  {currentPrice && (
                    <div className="absolute bottom-4 right-4 bg-white text-gray-800 px-4 py-2 rounded-lg text-lg font-bold shadow-lg">
                      ${currentPrice.toFixed(0)}
                    </div>
                  )}
                  
                  {/* Title on image */}
                  <div className="absolute bottom-4 left-4 right-24 text-white">
                    <h2 className="text-xl font-bold">{safari.name}</h2>
                    <div className="flex items-center mt-1 text-xs">
                      <span className="bg-black/30 text-white/90 px-2 py-1 rounded-full flex items-center">
                        <Target className="h-3 w-3 mr-1" /> {safari.difficulty}
                      </span>
                      <span className="ml-2 bg-black/30 text-white/90 px-2 py-1 rounded-full flex items-center">
                        <MapPin className="h-3 w-3 mr-1" /> {safari.destinations[0]}{safari.destinations.length > 1 ? ` +${safari.destinations.length - 1}` : ''}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{safari.description}</p>
                  
                  <div className="mb-4">
                    <h3 className="font-medium text-gray-800 mb-2 text-sm">Highlights:</h3>
                    <ul className="space-y-1">
                      {safari.highlights.slice(0, 2).map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </li>
                      ))}
                      {safari.highlights.length > 2 && (
                        <li className="text-xs text-amber-600">+ {safari.highlights.length - 2} more highlights</li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <button 
                      onClick={() => handleViewDetails(safari)}
                      className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center shadow-md hover:shadow-lg"
                    >
                      <span>View Details</span>
                      <ChevronRight className="h-5 w-5 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Load More Button */}
        {filteredPackages.length > displayCount && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setDisplayCount(prev => prev + 3)}
              className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-medium py-3 px-8 rounded-full transition-colors shadow-md"
            >
              Load More Safaris
            </button>
          </div>
        )}
        
        {/* Package Details Modal/Section */}
        {selectedPackage && (
          <div ref={detailsRef} className="mt-16 mb-8 bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="relative h-96">
              <img 
                src={selectedPackage.coverImage} 
                alt={selectedPackage.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              <button 
                onClick={closeDetails}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-2 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center mb-2">
                  <h1 className="text-3xl font-bold flex-grow">{selectedPackage.name}</h1>
                  <span className="text-sm bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-lg">
                    {selectedPackage.id}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-amber-500/90 text-white px-3 py-1 rounded-lg flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {selectedPackage.duration}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-lg flex items-center">
                    <Target className="h-4 w-4 mr-2" />
                    {selectedPackage.difficulty}
                  </span>
                  
                  {getCurrentPrice(selectedPackage) && (
                    <span className="bg-white text-gray-800 px-4 py-1 rounded-lg font-bold flex items-center">
                      ${getCurrentPrice(selectedPackage).toFixed(0)} per person
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Overview</h2>
                  <p className="text-gray-600 mb-6">{selectedPackage.description}</p>
                  
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Safari Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {selectedPackage.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start bg-amber-50 p-4 rounded-xl">
                        <div className="bg-amber-500 text-white p-2 rounded-full mr-3 flex-shrink-0">
                          <Star className="h-4 w-4" />
                        </div>
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Destinations</h2>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {selectedPackage.destinations.map((dest, idx) => (
                      <div key={idx} className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {dest}
                      </div>
                    ))}
                  </div>
                  
                  {selectedPackage.seasons && (
                    <>
                      <h2 className="text-xl font-bold text-gray-800 mb-4">Seasonal Pricing</h2>
                      <div className="overflow-x-auto mb-6">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="p-3 text-left text-gray-700 font-semibold">Travel Period</th>
                              <th className="p-3 text-left text-gray-700 font-semibold">Price (Shared)</th>
                              <th className="p-3 text-left text-gray-700 font-semibold">Single Supplement</th>
                            </tr>
                          </thead>
                          <tbody>
                            {selectedPackage.seasons.map((season, idx) => (
                              <tr key={idx} className={`${season.period === selectedSeason ? 'bg-amber-50' : 'border-b border-gray-200'}`}>
                                <td className="p-3 text-gray-800">
                                  {season.period}
                                  {season.period === selectedSeason && (
                                    <span className="ml-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">Selected</span>
                                  )}
                                </td>
                                <td className="p-3 text-gray-800 font-medium">${season.sharedPrice.toFixed(2)}</td>
                                <td className="p-3 text-gray-800">+${season.singleSupplement.toFixed(2)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </>
                  )}
                </div>
                
                <div>
                  <div className="bg-gray-50 p-6 rounded-2xl mb-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Book This Safari</h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-xl">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Selected Season</label>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-800">{selectedSeason}</span>
                          <button className="text-amber-600 text-sm">Change</button>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-xl">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Travelers</label>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-800">2 Adults</span>
                          <button className="text-amber-600 text-sm">Edit</button>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-xl">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Total Price</label>
                        <div className="text-xl font-bold text-gray-800">
                          ${(getCurrentPrice(selectedPackage) * 2).toFixed(2)}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Includes all taxes and fees</div>
                      </div>
                      
                      <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-lg flex items-center justify-center">
                        Reserve Now
                      </button>
                      
                      <div className="flex items-center justify-center gap-4 pt-2">
                        <button className="flex items-center text-gray-600 hover:text-amber-600">
                          <Heart className="h-4 w-4 mr-1" />
                          <span className="text-sm">Save</span>
                        </button>
                        <button className="flex items-center text-gray-600 hover:text-amber-600">
                          <Share2 className="h-4 w-4 mr-1" />
                          <span className="text-sm">Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 p-6 rounded-2xl">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Need Help?</h3>
                    <p className="text-gray-600 text-sm mb-4">Our safari specialists are ready to customize this itinerary to your preferences.</p>
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-xl transition-colors shadow-md">
                      Contact a Specialist
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Similar Packages */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">You May Also Like</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {getSimilarPackages(selectedPackage).map((pkg) => (
                    <div 
                      key={pkg.id} 
                      className="bg-gray-50 rounded-xl overflow-hidden shadow-md group cursor-pointer"
                      onClick={() => handleViewDetails(pkg)}
                    >
                      <div className="relative h-48">
                        <img 
                          src={pkg.coverImage} 
                          alt={pkg.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <h3 className="font-bold">{pkg.name}</h3>
                          <div className="flex items-center mt-1">
                            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                              {pkg.duration}
                            </span>
                            {getCurrentPrice(pkg) && (
                              <span className="ml-2 text-xs bg-amber-500/90 px-2 py-1 rounded-full">
                                ${getCurrentPrice(pkg).toFixed(0)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Season Notes with modern design */}
        <div className="mt-20 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 max-w-6xl mx-auto shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Kenya Safari Seasons Guide</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-amber-500 text-white p-3 rounded-full mr-4">
                  <span className="text-xl">🦁</span>
                </div>
                <h4 className="font-bold text-lg text-gray-800">Peak Season (July-October)</h4>
              </div>
              <p className="text-gray-600">
                The ultimate wildlife experience coinciding with the spectacular Great Wildebeest Migration in the Masai Mara.
                Expect sunny days, comfortable temperatures, and exceptional game viewing opportunities across all parks.
                This is the best time for wildlife photography and witnessing predator action.
              </p>
              <div className="mt-4 text-sm bg-amber-50 p-3 rounded-xl">
                <strong>Pro tip:</strong> Book well in advance as accommodations fill up quickly during this popular season.
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-500 text-white p-3 rounded-full mr-4">
                  <span className="text-xl">🌿</span>
                </div>
                <h4 className="font-bold text-lg text-gray-800">Green Season (April-June)</h4>
              </div>
              <p className="text-gray-600">
                Outstanding value with significantly lower prices and fewer tourists. The landscapes transform into lush, green paradises,
                creating stunning photography opportunities. Wildlife is still plentiful around permanent water sources.
                Occasional afternoon showers typically don't interfere with morning game drives.
              </p>
              <div className="mt-4 text-sm bg-emerald-50 p-3 rounded-xl">
                <strong>Pro tip:</strong> This is the best season for budget-conscious travelers who want to avoid crowds.
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 text-white p-3 rounded-full mr-4">
                  <span className="text-xl">🌤️</span>
                </div>
                <h4 className="font-bold text-lg text-gray-800">Shoulder Season (January-March)</h4>
              </div>
              <p className="text-gray-600">
                Excellent wildlife viewing with balanced pricing. Expect warm days and cooler nights with generally dry conditions.
                The landscape transitions from green to golden, creating beautiful contrasts. This is the calving season for many herbivores,
                and bird watching reaches its peak with numerous migratory species present.
              </p>
              <div className="mt-4 text-sm bg-blue-50 p-3 rounded-xl">
                <strong>Pro tip:</strong> Perfect for combining wildlife viewing with bird watching interests.
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-purple-500 text-white p-3 rounded-full mr-4">
                  <span className="text-xl">☂️</span>
                </div>
                <h4 className="font-bold text-lg text-gray-800">Low Season (November-December)</h4>
              </div>
              <p className="text-gray-600">
                The short rains bring life back to the savannah. Occasional showers typically occur in the late afternoon and rarely impact the full day of activities.
                Enjoy competitive pricing and the advantage of fewer vehicles in the parks for a more exclusive experience.
                The landscape begins transforming from golden to green, creating unique photographic opportunities.
              </p>
              <div className="mt-4 text-sm bg-purple-50 p-3 rounded-xl">
                <strong>Pro tip:</strong> Great for photographers looking to capture dramatic skies and storm lighting.
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-20 mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready for Your Kenya Adventure?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our safari specialists can help customize any of these packages to match your travel style, interests, and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg">
              Start Planning Your Safari
            </button>
            <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-bold py-4 px-8 rounded-xl transition-colors shadow-md">
              Download Brochure
            </button>
          </div>

{/* Testimonials Section
<div className="mt-20 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">What Our Travelers Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 font-bold text-lg">
                    JT
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-800">James T.</h4>
                    <p className="text-gray-500 text-sm">Grand Kenya Safari</p>
                  </div>
                </div>
                <div className="flex text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "The Grand Kenya Safari exceeded all our expectations. Our guide was incredibly knowledgeable, and we saw all of the Big Five within the first three days. The accommodations were luxurious even in the middle of the wilderness."
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 font-bold text-lg">
                    SM
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-800">Sarah M.</h4>
                    <p className="text-gray-500 text-sm">Twiga Safari</p>
                  </div>
                </div>
                <div className="flex text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "Traveling during the green season was the best decision we made. The landscapes were breathtaking, we had most wildlife sightings to ourselves, and the value for money was incredible. Will definitely be returning!"
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 font-bold text-lg">
                    RK
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-800">Robert K.</h4>
                    <p className="text-gray-500 text-sm">Mara Classic Experience</p>
                  </div>
                </div>
                <div className="flex text-amber-500 mb-4">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                  <Star className="h-5 w-5 text-gray-300" />
                </div>
                <p className="text-gray-600 italic">
                  "Even with just 3 days in the Masai Mara, we had an incredible experience. We witnessed a cheetah hunt, lions with cubs, and countless elephants. The tented camp was comfortable and the food was amazing."
                </p>
              </div>
            </div>
          </div> */}
          
          {/* FAQ Section */}
          <div className="mt-20 max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg text-gray-800 mb-3">When is the best time to visit Kenya for a safari?</h3>
                <p className="text-gray-600">
                  The best time for wildlife viewing is during the dry season (July to October), which coincides with the Great Migration in the Masai Mara. However, Kenya is a year-round destination with each season offering unique advantages. The green season (April-June) offers excellent value and fewer tourists.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg text-gray-800 mb-3">What should I pack for a Kenya safari?</h3>
                <p className="text-gray-600">
                  Pack lightweight, neutral-colored clothing (avoid bright colors and black/dark blue which attract tsetse flies), a warm jacket for cool mornings/evenings, comfortable walking shoes, sun protection (hat, sunglasses, sunscreen), insect repellent, and a good camera with extra batteries and memory cards.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg text-gray-800 mb-3">Are Kenya safaris safe for families with children?</h3>
                <p className="text-gray-600">
                  Yes, many lodges and camps welcome families with children and offer special activities for kids. We recommend safaris for children aged 6 and above who can appreciate the experience. For families, we can customize itineraries with child-friendly accommodations and activities.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg text-gray-800 mb-3">What is the difference between private and group safaris?</h3>
                <p className="text-gray-600">
                  Private safaris offer exclusive use of a safari vehicle with your own guide, flexibility with itineraries, and personalized attention. Group safaris have fixed departure dates and shared vehicles with other travelers, making them more economical. Both options provide high-quality wildlife experiences.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-3">What vaccinations do I need for Kenya?</h3>
                <p className="text-gray-600">
                  Yellow fever vaccination is required if you're arriving from a country with risk of yellow fever. Recommended vaccinations include hepatitis A and B, typhoid, and routine vaccines. Malaria prophylaxis is also recommended. Please consult your healthcare provider for personalized advice based on your medical history.
                </p>
              </div>
            </div>
          </div>
          
          {/* Why Choose Us */}
          <div className="mt-20 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Book With Us</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Local Expertise</h3>
                <p className="text-gray-600 text-sm">
                  Our team has over 20 years of experience organizing safaris in Kenya with intimate knowledge of wildlife hotspots.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                <div className="bg-emerald-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Guaranteed Quality</h3>
                <p className="text-gray-600 text-sm">
                  We personally inspect all lodges and camps to ensure they meet our high standards of comfort and service.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Personalized Service</h3>
                <p className="text-gray-600 text-sm">
                  Every safari is tailored to your preferences, interests, and pace for a truly custom experience.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Leaf className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Responsible Travel</h3>
                <p className="text-gray-600 text-sm">
                  We partner with eco-friendly lodges and support local conservation initiatives for sustainable tourism.
                </p>
              </div>
            </div>
          </div>
          
          {/* Newsletter Sign-up */}
          <div className="mt-20 bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-10 max-w-6xl mx-auto shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white md:w-1/2">
                <h3 className="text-2xl font-bold mb-2">Get Safari Inspiration & Special Offers</h3>
                <p className="text-white/80">
                  Subscribe to our newsletter for expert safari tips, seasonal deals, and wildlife photography guides.
                </p>
              </div>
              <div className="md:w-1/2 w-full">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="bg-white text-amber-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="text-white/70 text-xs mt-2">
                  We respect your privacy and will never share your information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KenyaSafari;