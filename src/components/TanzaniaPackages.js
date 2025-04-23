import kilimanjaro from '../assets/kilimanjaro.avif'
import amboseli from '../assets/amboseli.jpg'
import ngoro from '../assets/ngorongoro.avif'
import lake from '../assets/Lake Manyara.avif'
import serengeti from '../assets/serengetinp.avif'

export const safariPackages = [
  {
    tourName: "KILIMANJARO SAFARI (CLASSIC)",
    tourCode: "JT022",
    duration: "3 days",
    locations: ["Nairobi", "Amboseli National Park"],
    accommodations: ["Amboseli Serena Lodge"],
    highlights: [
      "View of Mount Kilimanjaro",
      "Game drives in Amboseli National Park",
      "Lunch at The Carnivore Restaurant",
      "Opportunity to photograph wildlife against Mt. Kilimanjaro backdrop",
      "Early morning game drive experience"
    ],
    coverImage: kilimanjaro,
    itinerary: [
      {
        "day": 1,
        "title": "Nairobi/Amboseli National Park",
        "location": "Amboseli",
        "accommodation": "Amboseli Serena Lodge",
        "board": "LDBB",
        "activity": "P",
        "description": "Lunch at The Carnivore Restaurant. After lunch drive to Amboseli National Park, lying below the most famous symbol of Africa, Mount Kilimanjaro. The 392 sq km Amboseli National Park lies due south of Nairobi, within clear sight of Mt Kilimanjaro, Africa's highest mountain at 5896 metres. The waters of the mountain feed the seasonal swamps and marshes on which the game and birds, which live in the park, rely. It is here that photographers will hope to shoot the classic picture of the elephant or giraffe standing against the dramatic backdrop of the snow capped mountain. Game drive enroute to your lodge. Dinner and overnight at Amboseli Serena Lodge (LDBB)"
      },
      {
        "day": 2,
        "title": "Amboseli National Park",
        "location": "Amboseli",
        "accommodation": "Amboseli Serena Lodge",
        "board": "LDBB",
        "activity": "E, P",
        "description": "Early morning game drive returning to the lodge for breakfast. Rest of the morning at leisure. Lunch. Afternoon game drive. Dinner and overnight at Amboseli Serena Lodge (LDBB)"
      },
      {
        "day": 3,
        "title": "Amboseli National Park/Nairobi/Departure",
        "location": "Nairobi",
        "accommodation": "None",
        "board": "B",
        "activity": "TRSF",
        "description": "After breakfast, drive to Nairobi and drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. An Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
      }
    ]
  },
      {
        tourName: "Kilimanjaro Experience",
        tourCode: "JT023",
        duration: "3 days",
        locations: ["Nairobi", "Amboseli"],
        accommodations: ["Amboseli Sopa Lodge"],
        highlights: [
          "Views of Mount Kilimanjaro",
          "Wildlife photography in Amboseli",
          "Short but comprehensive safari experience"
        ],
        coverImage: "https://images.unsplash.com/photo-1592670129848-82e05b9193fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1ib3NlbGl8ZW58MHx8MHx8fDA%3D",
        itinerary: [
          {
            "day": 1,
            "location": "Nairobi/Amboseli",
            "accommodation": "Amboseli Sopa Lodge",
            "activities": ["Lunch at The Carnivore Restaurant", "Drive to Amboseli", "View Mount Kilimanjaro"],
            "meals": "LDBB"
          },
          {
            "day": 2,
            "location": "Amboseli",
            "accommodation": "Amboseli Sopa Lodge",
            "activities": ["Morning game drive", "Afternoon game drive"],
            "meals": "LDBB"
          },
          {
            "day": 3,
            "location": "Amboseli/Nairobi/Departure",
            "activities": ["Drive to Nairobi", "Departure from Jomo Kenyatta Airport"],
            "meals": "L"
          }
        ]
      },
      {
        tourName: "Discover Amboseli",
        tourCode: "JT024",
        duration: "3 days",
        locations: ["Amboseli"],
        accommodations: ["Ol Tukai Lodge"],
        highlights: [
          "Mount Kilimanjaro views",
          "Amboseli wildlife",
          "Dedicated time in Amboseli National Park"
        ],
        coverImage: "https://images.unsplash.com/photo-1612988700055-352051a40062?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2wlMjB0dWthaSUyMGxvZGdlfGVufDB8fDB8fHww",
        itinerary: [
          {
            "day": 1,
            "location": "Nairobi/Amboseli",
            "accommodation": "Ol Tukai Lodge",
            "activities": ["Lunch at The Carnivore Restaurant", "Drive to Amboseli", "Evening game drive"],
            "meals": "LDBB"
          },
          {
            "day": 2,
            "location": "Amboseli",
            "accommodation": "Ol Tukai Lodge",
            "activities": ["Morning game drive", "Afternoon game drive"],
            "meals": "LDBB"
          },
          {
            "day": 3,
            "location": "Amboseli/Nairobi/Departure",
            "activities": ["Drive to Nairobi", "Departure from Jomo Kenyatta Airport"],
            "meals": "L"
          }
        ]
      },
      {
        tourName: "Treasures of East Africa",
        tourCode: "JT025",
        duration: "9 days",
        locations: ["Nairobi", "Amboseli", "Ngorongoro", "Serengeti", "Manyara"],
        accommodations: ["Nairobi Serena Hotel", "Amboseli Serena Lodge", "Ngorongoro Serena Lodge", "Serengeti Serena Lodge", "Lake Manyara Serena Lodge"],
        highlights: [
          "Mount Kilimanjaro views from Amboseli",
          "Ngorongoro Crater exploration",
          "Serengeti wildlife",
          "Lake Manyara - tree-climbing lions"
        ],
        coverImage: ngoro,
        itinerary: [
          {
            "day": 1,
            "location": "Nairobi",
            "accommodation": "Nairobi Serena Hotel",
            "activities": ["Airport pick-up", "Leisure"],
            "meals": "BB"
          },
          {
            "day": 2,
            "location": "Nairobi/Amboseli",
            "accommodation": "Amboseli Serena Lodge",
            "activities": ["Drive to Amboseli", "Views of Kilimanjaro"],
            "meals": "LDBB"
          },
          {
            "day": 3,
            "location": "Amboseli",
            "accommodation": "Amboseli Serena Lodge",
            "activities": ["Morning game drive", "Afternoon game drive"],
            "meals": "LDBB"
          },
          {
            "day": 4,
            "location": "Amboseli/Ngorongoro",
            "accommodation": "Ngorongoro Serena Lodge",
            "activities": ["Drive to Namanga border", "Cross to Tanzania", "Proceed to Ngorongoro"],
            "meals": "LDBB"
          },
          {
            "day": 5,
            "location": "Ngorongoro",
            "accommodation": "Ngorongoro Serena Lodge",
            "activities": ["Half-day crater tour", "Afternoon leisure"],
            "meals": "LDBB"
          },
          {
            "day": 6,
            "location": "Ngorongoro/Serengeti",
            "accommodation": "Serengeti Serena Lodge",
            "activities": ["Drive to Serengeti", "Visit Olduvai Gorge", "Afternoon game drive"],
            "meals": "LDBB"
          },
          {
            "day": 7,
            "location": "Serengeti",
            "accommodation": "Serengeti Serena Lodge",
            "activities": ["Full day game drives"],
            "meals": "LDBB"
          },
          {
            "day": 8,
            "location": "Serengeti/Lake Manyara",
            "accommodation": "Lake Manyara Serena Lodge",
            "activities": ["Drive to Lake Manyara", "Afternoon game drive"],
            "meals": "LDBB"
          },
          {
            "day": 9,
            "location": "Lake Manyara/Arusha/Departure",
            "activities": ["Drive to Arusha", "Border crossing", "Return to Nairobi", "Departure"],
            "meals": "L"
          }
        ]
      },
      {
        tourName: "Splendours of Tanzania",
        tourCode: "JT026",
        duration: "7 days",
        locations: ["Nairobi", "Ngorongoro", "Serengeti", "Manyara"],
        accommodations: ["Mountain Village", "Ngorongoro Serena Lodge", "Serengeti Serena Lodge", "Lake Manyara Serena Lodge"],
        highlights: [
          "Ngorongoro Crater",
          "Serengeti Plains",
          "Lake Manyara National Park",
          "Outstanding wildlife viewing"
        ],
        coverImage: lake,
        itinerary: [
          {
            "day": 1,
            "location": "Kilimanjaro/Arusha",
            "accommodation": "Mountain Village",
            "activities": ["Airport pick-up", "Leisure"],
            "meals": "BB"
          },
          {
            "day": 2,
            "location": "Arusha/Ngorongoro",
            "accommodation": "Ngorongoro Serena Lodge",
            "activities": ["Drive to Ngorongoro Crater"],
            "meals": "LDBB"
          },
          {
            "day": 3,
            "location": "Ngorongoro",
            "accommodation": "Ngorongoro Serena Lodge",
            "activities": ["Half-day crater tour", "Afternoon leisure"],
            "meals": "LDBB"
          },
          {
            "day": 4,
            "location": "Ngorongoro/Serengeti",
            "accommodation": "Serengeti Serena Lodge",
            "activities": ["Drive to Serengeti", "Visit Olduvai Gorge", "Afternoon game drive"],
            "meals": "LDBB"
          },
          {
            "day": 5,
            "location": "Serengeti",
            "accommodation": "Serengeti Serena Lodge",
            "activities": ["Full day game drives"],
            "meals": "LDBB"
          },
          {
            "day": 6,
            "location": "Serengeti/Lake Manyara",
            "accommodation": "Lake Manyara Serena Lodge",
            "activities": ["Drive to Lake Manyara", "Afternoon game drive"],
            "meals": "LDBB"
          },
          {
            "day": 7,
            "location": "Lake Manyara/Arusha/Departure",
            "activities": ["Drive to Arusha", "Departure from Kilimanjaro Airport"],
            "meals": "L"
          }
        ]
      },
      {
        tourName: "Tanzania Migration Safari",
        tourCode: "JT027",
        duration: "6 days",
        locations: ["Ngorongoro", "Serengeti", "Manyara"],
        accommodations: ["Ngorongoro Serena Lodge", "Serengeti Serena Lodge", "Lake Manyara Serena Lodge"],
        highlights: [
          "Witness the great migration (seasonal)",
          "Ngorongoro Crater exploration",
          "Lake Manyara National Park - tree-climbing lions"
        ],
        coverImage: "https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFuemFuaWElMjBtaWdyYXRpb258ZW58MHx8MHx8fDA%3D",
        itinerary: [
          {
            "day": 1,
            "location": "Arusha/Ngorongoro",
            "accommodation": "Ngorongoro Serena Lodge",
            "activities": ["Pick up from Arusha", "Drive to Ngorongoro Crater"],
            "meals": "LDBB"
          },
          {
            "day": 2,
            "location": "Ngorongoro",
            "accommodation": "Ngorongoro Serena Lodge",
            "activities": ["Half-day crater tour", "Afternoon leisure"],
            "meals": "LDBB"
          },
          {
            "day": 3,
            "location": "Ngorongoro/Serengeti",
            "accommodation": "Serengeti Serena Lodge",
            "activities": ["Drive to Serengeti", "Visit Olduvai Gorge", "Afternoon game drive"],
            "meals": "LDBB"
          },
          {
            "day": 4,
            "location": "Serengeti",
            "accommodation": "Serengeti Serena Lodge",
            "activities": ["Full day game drives focusing on migration"],
            "meals": "LDBB"
          },
          {
            "day": 5,
            "location": "Serengeti/Lake Manyara",
            "accommodation": "Lake Manyara Serena Lodge",
            "activities": ["Drive to Lake Manyara", "Afternoon game drive"],
            "meals": "LDBB"
          },
          {
            "day": 6,
            "location": "Lake Manyara/Arusha/Departure",
            "activities": ["Drive to Arusha", "Departure from Kilimanjaro Airport"],
            "meals": "L"
          }
        ]
      },
      {
        tourName: "Tanzania Photography Safari",
        tourCode: "JT029",
        duration: "7 days",
        locations: ["Nairobi", "Ngorongoro", "Serengeti", "Tarangire"],
        accommodations: ["The Arusha Hotel", "Ngorongoro Sopa Lodge", "Serengeti Sopa Lodge", "Tarangire Sopa Lodge"],
        highlights: [
          "Photography opportunities at Ngorongoro Crater",
          "Wildlife photography in Serengeti",
          "Scenic landscapes of Tarangire"
        ],
        coverImage: "https://images.unsplash.com/photo-1726075016735-4fe1aa95ee9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmdvcm9uZ29yb3xlbnwwfHwwfHx8MA%3D%3D",
        itinerary: [
          {
            "day": 1,
            "location": "Nairobi",
            "accommodation": "The Arusha Hotel",
            "activities": ["Airport transfer", "Leisure"],
            "meals": "BB"
          },
          {
            "day": 2,
            "location": "Ngorongoro",
            "accommodation": "Ngorongoro Sopa Lodge",
            "activities": ["Drive to Ngorongoro Crater"],
            "meals": "LDBB"
          },
          {
            "day": 3,
            "location": "Ngorongoro",
            "accommodation": "Ngorongoro Sopa Lodge",
            "activities": ["Half-day crater tour", "Photography opportunities"],
            "meals": "LDBB"
          },
          {
            "day": 4,
            "location": "Serengeti",
            "accommodation": "Serengeti Sopa Lodge",
            "activities": ["Game drive to Serengeti", "Visit Olduvai Gorge"],
            "meals": "LDBB"
          },
          {
            "day": 5,
            "location": "Serengeti",
            "accommodation": "Serengeti Sopa Lodge",
            "activities": ["Full day game drives and photography"],
            "meals": "LDBB"
          },
          {
            "day": 6,
            "location": "Tarangire",
            "accommodation": "Tarangire Sopa Lodge",
            "activities": ["Drive to Tarangire", "Photography in park"],
            "meals": "LDBB"
          },
          {
            "day": 7,
            "location": "Departure",
            "activities": ["Drive to Arusha", "Departure from Kilimanjaro Airport"],
            "meals": "L"
          }
        ]
      },
      {
        tourName: "East Africa Odysseys",
        tourCode: "JT028",
        duration: "9 days",
        locations: ["Nairobi", "Amboseli", "Ngorongoro", "Serengeti", "Tarangire"],
        accommodations: ["Panafric Hotel", "Amboseli Sopa Lodge", "Ngorongoro Sopa Lodge", "Serengeti Sopa Lodge", "Tarangire Sopa Lodge"],
        highlights: [
          "Mount Kilimanjaro views from Amboseli",
          "Ngorongoro Crater - largest intact caldera",
          "Serengeti National Park - famous wildlife sanctuary",
          "Olduvai Gorge archaeological site",
          "Tarangire National Park"
        ],
        coverImage: "https://images.unsplash.com/photo-1631646109248-a7264aae1790?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG10JTIwa2lsaW1hbmphcm98ZW58MHx8MHx8fDA%3D",
        itinerary: [
          {
            "day": 1,
            "location": "Nairobi",
            "accommodation": "Panafric Hotel",
            "activities": ["Airport transfer", "Leisure"],
            "meals": "BB"
          },
          {
            "day": 2,
            "location": "Nairobi/Amboseli",
            "accommodation": "Amboseli Sopa Lodge",
            "activities": ["Drive to Amboseli", "View of Mount Kilimanjaro"],
            "meals": "LDBB"
          },
          {
            "day": 3,
            "location": "Amboseli",
            "accommodation": "Amboseli Sopa Lodge",
            "activities": ["Morning game drive", "Afternoon game drive"],
            "meals": "LDBB"
          },
          {
            "day": 4,
            "location": "Amboseli/Ngorongoro",
            "accommodation": "Ngorongoro Sopa Lodge",
            "activities": ["Drive to Namanga border", "Cross to Tanzania", "Proceed to Ngorongoro"],
            "meals": "LDBB"
          },
          {
            "day": 5,
            "location": "Ngorongoro",
            "accommodation": "Ngorongoro Sopa Lodge",
            "activities": ["Half-day crater tour", "Afternoon leisure"],
            "meals": "LDBB"
          },
          {
            "day": 6,
            "location": "Ngorongoro/Serengeti",
            "accommodation": "Serengeti Sopa Lodge",
            "activities": ["Drive to Serengeti", "Visit Olduvai Gorge", "Afternoon game drive"],
            "meals": "LDBB"
          },
          {
            "day": 7,
            "location": "Serengeti",
            "accommodation": "Serengeti Sopa Lodge",
            "activities": ["Full day game drives"],
            "meals": "LDBB"
          },
          {
            "day": 8,
            "location": "Serengeti/Tarangire",
            "accommodation": "Tarangire Sopa Lodge",
            "activities": ["Drive to Tarangire", "Lunch at Lake Manyara Serena Lodge", "Afternoon game drive"],
            "meals": "LDBB"
          },
          {
            "day": 9,
            "location": "Tarangire/Arusha/Nairobi/Departure",
            "activities": ["Drive to Arusha", "Continue to Namanga border", "Return to Nairobi", "Departure"],
            "meals": "L"
          }
        ]
      },
      {
        tourName: "Tanzania Highlights Classic",
        tourCode: "JT030",
        duration: "6 days",
        locations: ["Arusha", "Ngorongoro", "Serengeti", "Tarangire"],
        accommodations: ["Ngorongoro Sopa Lodge", "Serengeti Sopa Lodge", "Tarangire Sopa Lodge"],
        highlights: [
          "Ngorongoro Crater - largest intact caldera in the world",
          "Serengeti National Park - most famous wildlife sanctuary",
          "Olduvai Gorge - archaeological site with 3.5 million year old traces",
          "Tarangire National Park - known for plains game"
        ],
        coverImage: serengeti,
        itinerary: [
          {
            "day": 1,
            "location": "Arusha/Ngorongoro",
            "accommodation": "Ngorongoro Sopa Lodge",
            "activities": ["Transfer from Arusha", "Visit Ngorongoro Crater"],
            "meals": "LDBB"
          },
          {
            "day": 2,
            "location": "Ngorongoro",
            "accommodation": "Ngorongoro Sopa Lodge",
            "activities": ["Half-day crater floor tour", "Afternoon leisure"],
            "meals": "LDBB"
          },
          {
            "day": 3,
            "location": "Ngorongoro/Serengeti",
            "accommodation": "Serengeti Sopa Lodge",
            "activities": ["Drive to Serengeti", "Visit Olduvai Gorge", "Afternoon game drive"],
            "meals": "LDBB"
          },
          {
            "day": 4,
            "location": "Serengeti",
            "accommodation": "Serengeti Sopa Lodge",
            "activities": ["Full day game drives"],
            "meals": "LDBB"
          },
          {
            "day": 5,
            "location": "Serengeti/Tarangire",
            "accommodation": "Tarangire Sopa Lodge",
            "activities": ["Drive to Tarangire", "Lunch at Lake Manyara Serena Lodge", "Afternoon game drive"],
            "meals": "LDBB"
          },
          {
            "day": 6,
            "location": "Tarangire/Arusha/Departure",
            "activities": ["Drive to Arusha", "Departure from Kilimanjaro Airport"],
            "meals": "L"
          }
        ]
      },
      {
        tourName: "RIFT VALLEY EXPLORER 4 X 4 (CLASSIC)",
        tourCode: "JT031",
        duration: "6 days",
        locations: [
          "Nairobi",
          "Aberdares",
          "Nakuru/Naivasha",
          "Masai Mara"
        ],
        accommodations: [
          "Southern Sun Mayfair",
          "The Ark Lodge",
          "Great Rift Valley Lodge",
          "Siana Springs Tented Camp"
        ],
        highlights: [
          "Visit to Aberdares National Park",
          "Visit to Nyahururu waterfalls",
          "Game drives in Nakuru/Naivasha",
          "Game drives in Masai Mara",
          "Optional hot air balloon safari"
        ],
        coverImage: "safari-jt031.jpg",
        itinerary: [
          {
            "day": 1,
            "location": "Nairobi",
            "accommodation": "Southern Sun Mayfair",
            "board": "BB",
            "activity": "TRSF",
            "description": "Met upon arrival at Jomo Kenyatta International Airport by a Jambo Tours representative. Assistance and transfer to your hotel. Accommodation on bed & breakfast basis at The Southern Sun Mayfair Hotel(BB)."
          },
          {
            "day": 2,
            "location": "Aberdares",
            "accommodation": "The Ark Lodge",
            "board": "LDBB",
            "activity": "GV",
            "description": "After breakfast drive to the Aberdares arriving in time for lunch at The Aberdare Country Club. After lunch transfer to the lodge situated inside the Aberdare National Park. Rest of the day at leisure with game viewing from the lodge. Dinner and overnight at The Ark Lodge (LDBB)."
          },
          {
            "day": 3,
            "location": "Nakuru/Naivasha",
            "accommodation": "Great Rift Valley Lodge",
            "board": "LDBB",
            "activity": "P",
            "description": "After breakfast you will be collected for the day's drive taking you past the Aberdares mountain range, via the Nyahururu waterfalls to the floor of the Great Rift Valley, destination Lake Nakuru National Park arriving in time for lunch at the lodge. After lunch proceed for an afternoon game drive and the proceed to Naivasha arriving in the evening for dinner and overnight at The Great Rift Valley Lodge (LDBB)."
          },
          {
            "day": 4,
            "location": "Masai Mara",
            "accommodation": "Siana Springs Tented Camp",
            "board": "LDBB",
            "activity": "P",
            "description": "After breakfast, drive to the Masai Mara National Reserve offering wonderful scenery and plenty of game. It is perhaps the only region left in Kenya where the visitor may see animals in the same super-abundance as existed a century ago. Arrive for lunch at your lodge. Afternoon game drive until sunset. Meals and overnight at Siana Springs Tented Camp(LDBB)."
          },
          {
            "day": 5,
            "location": "Masai Mara",
            "accommodation": "Siana Springs Tented Camp",
            "board": "LDBB",
            "activity": "E,A,P",
            "description": "(Early morning optional balloon ride with champagne-style breakfast.) Whole day in Mara with morning and afternoon game drives. Meals and overnight at Siana Springs Tented Camp (LDBB)."
          },
          {
            "day": 6,
            "location": "Departure",
            "board": "L",
            "activity": "TRSF",
            "description": "After breakfast drive to Nairobi arriving in time for lunch at The Carnivore Restaurant. After lunch drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. A Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
          }
        ]
      },
      {
        tourName: "KENYA ESCAPADE 4 X 4 (CLASSIC)",
        tourCode: "JT032",
        duration: "5 days",
        locations: [
          "Nairobi",
          "Nakuru/Naivasha",
          "Masai Mara"
        ],
        accommodations: [
          "Southern Sun Mayfair Hotel",
          "Great Rift Valley Lodge",
          "Siana Springs Tented Camp"
        ],
        highlights: [
          "Game drives in Nakuru/Naivasha",
          "Game drives in Masai Mara",
          "Optional hot air balloon safari",
          "Visit to Lake Nakuru National Park"
        ],
        coverImage: "safari-jt032.jpg",
        itinerary: [
          {
            "day": 1,
            "location": "Nairobi",
            "accommodation": "Southern Sun Mayfair Hotel",
            "board": "BB",
            "activity": "TRSF",
            "description": "Met upon arrival at Jomo Kenyatta International Airport by a Jambo Tours representative. Assistance and transfer to your hotel. Accommodation on bed & breakfast basis at The Southern Sun Mayfair Hotel(BB)."
          },
          {
            "day": 2,
            "location": "Nakuru/Naivasha",
            "accommodation": "Great Rift Valley Lodge",
            "board": "LDBB",
            "activity": "P",
            "description": "After breakfast you will be collected for the day's drive taking you to the floor of the Great Rift Valley, destination Lake Nakuru National Park arriving in time for lunch at the lodge. After lunch proceed for an afternoon game drive and then proceed to Naivasha arriving in the evening for dinner and overnight at The Great Rift Valley Lodge (LDBB)."
          },
          {
            "day": 3,
            "location": "Masai Mara",
            "accommodation": "Siana Springs Tented Camp",
            "board": "LDBB",
            "activity": "P",
            "description": "After breakfast, drive to the Masai Mara National Reserve offering wonderful scenery and plenty of game. It is perhaps the only region left in Kenya where the visitor may see animals in the same super-abundance as existed a century ago. Arrive for lunch at your lodge. Afternoon game drive. Until sunset. Meals and overnight at Siana Springs Tented Camp(LDBB)."
          },
          {
            "day": 4,
            "location": "Masai Mara",
            "accommodation": "Siana Springs Tented Camp",
            "board": "LDBB",
            "activity": "E,A,P",
            "description": "(Early morning optional balloon ride with champagne-style breakfast.) Whole day in Mara with morning and afternoon game drives. Meals and overnight at Siana Springs Tented Camp (LDBB)."
          },
          {
            "day": 5,
            "location": "Departure",
            "board": "L",
            "activity": "TRSF",
            "description": "After breakfast drive to Nairobi arriving in time for lunch at The Carnivore Restaurant. After lunch drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. A Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
          }
        ]
      },
      {
        tourName: "JAMBO SAFARI (CLASSIC)",
        tourCode: "JT033",
        duration: "5 days",
        locations: [
          "Amboseli",
          "Tsavo West",
          "Tsavo East",
          "Taita Hills"
        ],
        accommodations: [
          "Kibo Safari Camp",
          "Voyager Safari Camp",
          "Voi Wildlife Lodge",
          "Taita Hills Lodge"
        ],
        highlights: [
          "Game drives in Amboseli",
          "Visit to Amboseli National Park",
          "Game drives in Tsavo West",
          "Visit to Tsavo West National Park",
          "Game drives in Tsavo East",
          "Visit to Tsavo East National Park",
          "Game drives in Taita Hills"
        ],
        coverImage: "safari-jt033.jpg",
        itinerary: [
          {
            "day": 1,
            "location": "Amboseli",
            "accommodation": "Kibo Safari Camp",
            "board": "LDBB",
            "activity": "P",
            "description": "Early morning pick up from your hotel in Nairobi or from Jomo Kenyatta International Airport and drive to Amboseli National Park arriving in time for lunch at Kibo Safari Camp. Afternoon game drive. Dinner and overnight at Kibo Safari Camp (LDBB)."
          },
          {
            "day": 2,
            "location": "Tsavo West",
            "accommodation": "Voyager Safari Camp",
            "board": "LDBB",
            "activity": "P",
            "description": "After breakfast drive to Tsavo West National Park arriving in time for lunch at Voyager Ziwani Camp. Afternoon game drive. Dinner and overnight at Voyager Ziwani Camp (LDBB)."
          },
          {
            "day": 3,
            "location": "Tsavo East",
            "accommodation": "Voi Wildlife Lodge",
            "board": "LDBB",
            "activity": "P",
            "description": "After breakfast drive to Tsavo East National Park arriving in time for lunch at Voi Wildlife Lodge. Afternoon game drive. Dinner and overnight at Voi Wildlife Lodge (LDBB)."
          },
          {
            "day": 4,
            "location": "Taita Hills",
            "accommodation": "Taita Hills Lodge",
            "board": "LDBB",
            "activity": "P",
            "description": "After breakfast drive to Taita Hills arriving in time for lunch at Taita Hills Lodge. Afternoon game drive. Dinner and overnight at Taita Hills Lodge (LDBB)."
          },
          {
            "day": 5,
            "location": "Departure",
            "board": "L",
            "activity": "TRSF",
            "description": "After breakfast drive to Nairobi arriving in time for lunch at The Carnivore Restaurant. After lunch drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. A Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
          }
        ]
      },
      {
        tourName: "TSAVO/TAITA HILLS EXPRESS (CLASSIC)",
        tourCode: "JT034",
        duration: "4 days",
        locations: [
          "Tsavo West",
          "Tsavo East",
          "Taita Hills"
        ],
        accommodations: [
          "Voyager Safari Camp",
          "Voi Wildlife Lodge",
          "Taita Hills Lodge"
        ],
        highlights: [
          "Game drives in Tsavo West",
          "Visit to Tsavo West National Park",
          "Game drives in Tsavo East",
          "Visit to Tsavo East National Park",
          "Game drives in Taita Hills"
        ],
        coverImage: "safari-jt034.jpg",
        itinerary: [
          {
            "day": 1,
            "location": "Tsavo West",
            "accommodation": "Voyager Safari Camp",
            "board": "LDBB",
            "activity": "P",
            "description": "Early morning pick up from your hotel in Nairobi or from Jomo Kenyatta International Airport and drive to Tsavo West National Park arriving in time for lunch at Voyager Ziwani Camp. Afternoon game drive. Dinner and overnight at Voyager Ziwani Camp (LDBB)."
          },
          {
            "day": 2,
            "location": "Tsavo East",
            "accommodation": "Voi Wildlife Lodge",
            "board": "LDBB",
            "activity": "P",
            "description": "After breakfast drive to Tsavo East National Park arriving in time for lunch at Voi Wildlife Lodge. Afternoon game drive. Dinner and overnight at Voi Wildlife Lodge (LDBB)."
          },
          {
            "day": 3,
            "location": "Taita Hills",
            "accommodation": "Taita Hills Lodge",
            "board": "LDBB",
            "activity": "P",
            "description": "After breakfast drive to Taita Hills arriving in time for lunch at Taita Hills Lodge. Afternoon game drive. Dinner and overnight at Taita Hills Lodge (LDBB)."
          },
          {
            "day": 4,
            "location": "Departure",
            "board": "L",
            "activity": "TRSF",
            "description": "After breakfast drive to Nairobi arriving in time for lunch at The Carnivore Restaurant. After lunch drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. A Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
          }
        ]
      }
]
