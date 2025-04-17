import { useState, useEffect } from 'react';
import { Search, Map, Calendar, Users, DollarSign, Filter, Camera } from 'lucide-react';

// Function to normalize the tour data
const normalizeTourData = (tours) => {
  return tours.map(tour => {
    // Normalize name field
    const name = tour.name || tour.tourName || "Unnamed Tour";
    
    // Normalize itinerary structure
    let normalizedItinerary = Array.isArray(tour.itinerary) ? tour.itinerary : [];
    
    // Generate price based on duration and accommodations
    const duration = tour.duration ? parseInt(tour.duration.split(' ')[0]) : 3;
    const basePrice = 500 + (duration * 300);
    
    // Check if tour has premium accommodations
    const hasPremium = (tour.accommodations || []).some(acc => 
      acc.includes('Serena') || acc.includes('Sopa') || acc.includes('Luxury')
    ) || normalizedItinerary.some(day => 
      (day.accommodation || '').includes('Serena') || 
      (day.accommodation || '').includes('Sopa')
    );
    
    const price = hasPremium ? basePrice * 1.3 : basePrice;
    
    // Generate image URL (in real app, these would be actual images)
    const tourType = name.toLowerCase().includes('kilimanjaro') ? 'kilimanjaro' :
                    name.toLowerCase().includes('tanzania') ? 'tanzania' :
                    name.toLowerCase().includes('amboseli') ? 'amboseli' :
                    name.toLowerCase().includes('serengeti') ? 'serengeti' :
                    name.toLowerCase().includes('mara') ? 'masai-mara' :
                    name.toLowerCase().includes('tsavo') ? 'tsavo' :
                    'safari';
    
    // Add additional fields
    return {
      id: tour.tourCode || `TOUR-${Math.floor(Math.random() * 1000)}`,
      name,
      tourCode: tour.tourCode || '',
      duration: tour.duration || '3 days',
      durationDays: duration,
      price: Math.round(price),
      discountPrice: Math.round(price * 0.9),
      locations: tour.locations || normalizedItinerary.map(day => day.location).filter(Boolean),
      accommodations: tour.accommodations || normalizedItinerary.map(day => day.accommodation).filter(Boolean),
      highlights: tour.highlights || ['Wildlife viewing', 'Scenic landscapes', 'Cultural experiences'],
      difficulty: tourType.includes('kilimanjaro') ? 'Challenging' : 'Easy to Moderate',
      ageRequirement: tourType.includes('kilimanjaro') ? '16+' : 'All ages',
      groupSize: 'Maximum 6 per vehicle',
      imageUrl: `/api/placeholder/800/500`,
      itinerary: normalizedItinerary.map(day => ({
        day: day.day || 0,
        title: day.title || `Day ${day.day || 0}`,
        location: day.location || '',
        accommodation: day.accommodation || '',
        meals: day.board || day.meals || '',
        activities: day.activities || [day.description || ''].filter(Boolean),
        description: day.description || ''
      })),
      rating: (Math.random() * 1 + 4).toFixed(1), // Generate rating between 4.0 and 5.0
      reviewCount: Math.floor(Math.random() * 100) + 30, // Generate between 30 and 129 reviews
      departureMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    };
  });
};

export default function SafariTours() {
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [durationFilter, setDurationFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const [selectedTour, setSelectedTour] = useState(null);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const rawTours = [
      // This would be your JSON data
      {
        "name": "KILIMANJARO SAFARI (CLASSIC)",
        "tourCode": "JT022",
        "duration": "3 days",
        "itinerary": [
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
            "activity": "TRSF",
            "description": "After breakfast, drive to Nairobi and drop off at your hotel or Jomo Kenyatta Airport for your departure flight back home. An Jambo Tours representative will re-confirm your onward flight, and assist you at check-in. End of our services."
          }
        ]
      },
      {
        "tourName": "Kilimanjaro Experience",
        "tourCode": "JT023",
        "duration": "3 days",
        "locations": ["Nairobi", "Amboseli"],
        "accommodations": ["Amboseli Sopa Lodge"],
        "highlights": [
          "Views of Mount Kilimanjaro",
          "Wildlife photography in Amboseli",
          "Short but comprehensive safari experience"
        ],
        "itinerary": [
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
        "tourName": "Discover Amboseli",
        "tourCode": "JT024",
        "duration": "3 days",
        "locations": ["Amboseli"],
        "accommodations": ["Ol Tukai Lodge"],
        "highlights": [
          "Mount Kilimanjaro views",
          "Amboseli wildlife",
          "Dedicated time in Amboseli National Park"
        ],
        "itinerary": [
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
        "tourName": "Treasures of East Africa",
        "tourCode": "JT025",
        "duration": "9 days",
        "locations": ["Nairobi", "Amboseli", "Ngorongoro", "Serengeti", "Manyara"],
        "accommodations": ["Nairobi Serena Hotel", "Amboseli Serena Lodge", "Ngorongoro Serena Lodge", "Serengeti Serena Lodge", "Lake Manyara Serena Lodge"],
        "highlights": [
          "Mount Kilimanjaro views from Amboseli",
          "Ngorongoro Crater exploration",
          "Serengeti wildlife",
          "Lake Manyara - tree-climbing lions"
        ],
        "itinerary": [
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
        "tourName": "Splendours of Tanzania",
        "tourCode": "JT026",
        "duration": "7 days",
        "locations": ["Nairobi", "Ngorongoro", "Serengeti", "Manyara"],
        "accommodations": ["Mountain Village", "Ngorongoro Serena Lodge", "Serengeti Serena Lodge", "Lake Manyara Serena Lodge"],
        "highlights": [
          "Ngorongoro Crater",
          "Serengeti Plains",
          "Lake Manyara National Park",
          "Outstanding wildlife viewing"
        ],
        "itinerary": [
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
        "tourName": "Tanzania Migration Safari",
        "tourCode": "JT027",
        "duration": "6 days",
        "locations": ["Ngorongoro", "Serengeti", "Manyara"],
        "accommodations": ["Ngorongoro Serena Lodge", "Serengeti Serena Lodge", "Lake Manyara Serena Lodge"],
        "highlights": [
          "Witness the great migration (seasonal)",
          "Ngorongoro Crater exploration",
          "Lake Manyara National Park - tree-climbing lions"
        ],
        "itinerary": [
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
        "tourName": "Tanzania Photography Safari",
        "tourCode": "JT029",
        "duration": "7 days",
        "locations": ["Nairobi", "Ngorongoro", "Serengeti", "Tarangire"],
        "accommodations": ["The Arusha Hotel", "Ngorongoro Sopa Lodge", "Serengeti Sopa Lodge", "Tarangire Sopa Lodge"],
        "highlights": [
          "Photography opportunities at Ngorongoro Crater",
          "Wildlife photography in Serengeti",
          "Scenic landscapes of Tarangire"
        ],
        "itinerary": [
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
        "tourName": "East Africa Odysseys",
        "tourCode": "JT028",
        "duration": "9 days",
        "locations": ["Nairobi", "Amboseli", "Ngorongoro", "Serengeti", "Tarangire"],
        "accommodations": ["Panafric Hotel", "Amboseli Sopa Lodge", "Ngorongoro Sopa Lodge", "Serengeti Sopa Lodge", "Tarangire Sopa Lodge"],
        "highlights": [
          "Mount Kilimanjaro views from Amboseli",
          "Ngorongoro Crater - largest intact caldera",
          "Serengeti National Park - famous wildlife sanctuary",
          "Olduvai Gorge archaeological site",
          "Tarangire National Park"
        ],
        "itinerary": [
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
        "tourName": "Tanzania Highlights Classic",
        "tourCode": "JT030",
        "duration": "6 days",
        "locations": ["Arusha", "Ngorongoro", "Serengeti", "Tarangire"],
        "accommodations": ["Ngorongoro Sopa Lodge", "Serengeti Sopa Lodge", "Tarangire Sopa Lodge"],
        "highlights": [
          "Ngorongoro Crater - largest intact caldera in the world",
          "Serengeti National Park - most famous wildlife sanctuary",
          "Olduvai Gorge - archaeological site with 3.5 million year old traces",
          "Tarangire National Park - known for plains game"
        ],
        "itinerary": [
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
        "name": "RIFT VALLEY EXPLORER 4 X 4 (CLASSIC)",
        "tourCode": "JT031",
        "duration": "6 days",
        "itinerary": [
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
        "name": "KENYA ESCAPADE 4 X 4 (CLASSIC)",
        "tourCode": "JT032",
        "duration": "5 days",
        "itinerary": [
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
        "name": "JAMBO SAFARI (CLASSIC)",
        "tourCode": "JT033",
        "duration": "5 days",
        "itinerary": [
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
        "name": "TSAVO/TAITA HILLS EXPRESS (CLASSIC)",
        "tourCode": "JT034",
        "duration": "4 days",
        "itinerary": [
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
      // More tours would be here
    ];

    // Process the data
    const normalizedTours = normalizeTourData(rawTours);
    setTours(normalizedTours);
    setFilteredTours(normalizedTours);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (tours.length === 0) return;
    
    // Filter based on search term, duration, and location
    let filtered = tours;
    
    if (searchTerm) {
      filtered = filtered.filter(tour => 
        tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (tour.locations && tour.locations.some(loc => 
          loc.toLowerCase().includes(searchTerm.toLowerCase())
        ))
      );
    }
    
    if (durationFilter !== 'all') {
      const [min, max] = durationFilter.split('-').map(Number);
      filtered = filtered.filter(tour => 
        tour.durationDays >= min && (max ? tour.durationDays <= max : true)
      );
    }
    
    if (locationFilter !== 'all') {
      filtered = filtered.filter(tour => 
        tour.locations && tour.locations.some(loc => 
          loc.toLowerCase().includes(locationFilter.toLowerCase())
        )
      );
    }
    
    setFilteredTours(filtered);
  }, [searchTerm, durationFilter, locationFilter, tours]);

  const handleTourClick = (tour) => {
    setSelectedTour(tour);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-bold">Loading safari tours...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      {selectedTour ? (
        // Tour Detail View
        <div className="bg-white rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-4">
              <button 
                onClick={() => setSelectedTour(null)}
                className="mb-4 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Back to Tours
              </button>
              <h1 className="text-2xl font-bold mb-2">{selectedTour.name}</h1>
              <div className="flex items-center mb-4">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm mr-2">
                  {selectedTour.rating} ★
                </span>
                <span className="text-gray-600 text-sm">
                  {selectedTour.reviewCount} reviews
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Duration:</span> {selectedTour.duration}
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Tour Code:</span> {selectedTour.tourCode}
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Difficulty:</span> {selectedTour.difficulty}
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Age Requirement:</span> {selectedTour.ageRequirement}
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Group Size:</span> {selectedTour.groupSize}
              </p>
              <div className="mb-4">
                <span className="font-semibold">Locations:</span>
                <div className="flex flex-wrap">
                  {selectedTour.locations.map((location, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mr-2 mt-2">
                      {location}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <span className="font-semibold">Accommodations:</span>
                <div className="flex flex-wrap">
                  {selectedTour.accommodations.map((accommodation, index) => (
                    <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm mr-2 mt-2">
                      {accommodation}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Highlights:</h3>
                <ul className="list-disc pl-5">
                  {selectedTour.highlights.map((highlight, index) => (
                    <li key={index} className="text-gray-700">{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="text-2xl font-bold text-purple-800 mb-2">
                ${selectedTour.discountPrice}
                <span className="text-lg text-gray-500 line-through ml-2">
                  ${selectedTour.price}
                </span>
              </div>
              <button className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 font-bold">
                Book Now
              </button>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="mb-6">
                <img src={selectedTour.imageUrl} alt={selectedTour.name} className="rounded-lg w-full h-64 object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Itinerary</h3>
                {selectedTour.itinerary.map((day, index) => (
                  <div key={index} className="mb-4 border-b pb-4">
                    <h4 className="font-bold text-lg">Day {day.day}: {day.title || day.location}</h4>
                    {day.location && <p className="text-gray-700"><span className="font-semibold">Location:</span> {day.location}</p>}
                    {day.accommodation && <p className="text-gray-700"><span className="font-semibold">Accommodation:</span> {day.accommodation}</p>}
                    {day.meals && <p className="text-gray-700"><span className="font-semibold">Meals:</span> {day.meals}</p>}
                    {day.description && <p className="text-gray-700 mt-2">{day.description}</p>}
                    {day.activities && Array.isArray(day.activities) && day.activities.length > 0 && (
                      <div className="mt-2">
                        <span className="font-semibold">Activities:</span>
                        <ul className="list-disc pl-5 mt-1">
                          {day.activities.map((activity, idx) => (
                            <li key={idx} className="text-gray-700">{activity}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Tour Listing View
        <>
          <h1 className="text-3xl font-bold mb-8 text-center">Safari Tours & Adventures</h1>
          <div className="bg-white rounded-lg shadow-md p-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="flex items-center border rounded-md px-3 py-2">
                  <Search className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search tours or destinations"
                    className="w-full focus:outline-none"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-full md:w-40">
                  <select
                    className="w-full border rounded-md px-3 py-2"
                    value={durationFilter}
                    onChange={e => setDurationFilter(e.target.value)}
                  >
                    <option value="all">Duration: All</option>
                    <option value="1-3">1-3 Days</option>
                    <option value="4-6">4-6 Days</option>
                    <option value="7-10">7-10 Days</option>
                    <option value="11">11+ Days</option>
                  </select>
                </div>
                <div className="w-full md:w-40">
                  <select
                    className="w-full border rounded-md px-3 py-2"
                    value={locationFilter}
                    onChange={e => setLocationFilter(e.target.value)}
                  >
                    <option value="all">Location: All</option>
                    <option value="amboseli">Amboseli</option>
                    <option value="serengeti">Serengeti</option>
                    <option value="mara">Masai Mara</option>
                    <option value="ngorongoro">Ngorongoro</option>
                    <option value="tsavo">Tsavo</option>
                    <option value="tarangire">Tarangire</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {filteredTours.length === 0 ? (
            <div className="text-center p-8">
              <p className="text-xl text-gray-600">No tours found matching your criteria.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setDurationFilter('all');
                  setLocationFilter('all');
                }}
                className="mt-4 px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTours.map(tour => (
                <div 
                  key={tour.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => handleTourClick(tour)}
                >
                  <div className="relative">
                    <img 
                      src={tour.imageUrl} 
                      alt={tour.name} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-purple-700 text-white px-3 py-1 m-2 rounded-md">
                      {tour.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 truncate">{tour.name}</h3>
                    <div className="flex items-center mb-2">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm mr-2">
                        {tour.rating} ★
                      </span>
                      <span className="text-gray-600 text-sm">
                        {tour.reviewCount} reviews
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {tour.locations.slice(0, 3).map((location, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {location}
                        </span>
                      ))}
                      {tour.locations.length > 3 && (
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                          +{tour.locations.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mb-3">
                      <Map className="w-4 h-4 mr-1" />
                      <span>{tour.locations.length} locations</span>
                      <Calendar className="w-4 h-4 ml-3 mr-1" />
                      <span>{tour.durationDays} days</span>
                    </div>
                    <div className="text-lg font-bold text-purple-800">
                      ${tour.discountPrice}
                      <span className="text-sm text-gray-500 line-through ml-2">
                        ${tour.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}