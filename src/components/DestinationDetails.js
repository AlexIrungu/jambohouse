import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, MapPin, Calendar, Users, Shield, Cloud, Camera, Coffee, Clock, Activity, DollarSign, Binoculars } from 'lucide-react';


const DestinationDetails = () => {
  const { country, destination } = useParams();
  const [destinationData, setDestinationData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // This would be replaced with actual API calls in a real implementation
  useEffect(() => {
    // Simulate API fetch with sample data
    const fetchDestinationData = () => {
      // This is sample data - in a real application, you'd fetch this from your backend
      const destinations = {
        "kenya": {
          "masai-mara": {
            title: "Masai Mara",
            tagline: "Home to the Great Migration",
            hero: "/api/placeholder/1200/600",
            description: "The Masai Mara National Reserve is one of Africa's most magnificent game reserves. Bordering Tanzania, the Mara is the northern extension of the Serengeti and forms a wildlife corridor between the two countries. It's named after the statuesque, red-cloaked Maasai people who live in the park and graze their animals there as they have done for centuries.",
            longDescription: "The Masai Mara is one of Africa's greatest wildlife reserves. Acacia dotted plains, tree-lined rivers and woodlands are abundant with wildlife and an array of bird species. The Mara is recognized as one of the best wildlife viewing destinations in the world, and the annual Great Migration of wildebeest, zebra, and Thomson's gazelle from the Serengeti to the Mara attracts visitors from around the world.",
            bestTimeToVisit: "July to October (Migration Season)",
            duration: "3-7 Days recommended",
            difficulty: "Easy to Moderate",
            priceRange: "$150-$600 per day",
            activities: [
              "Game drives",
              "Hot air balloon safaris",
              "Cultural visits to Maasai villages",
              "Bird watching",
              "Photographic safaris"
            ],
            highlights: [
              {
                title: "The Great Migration",
                description: "Witness one of nature's most spectacular events as millions of wildebeest and zebra cross the Mara River."
              },
              {
                title: "Big Five Sightings",
                description: "Excellent opportunities to spot lion, leopard, elephant, buffalo and rhino all in one reserve."
              },
              {
                title: "Balloon Safaris",
                description: "Experience the magic of floating over the savannah at sunrise, with panoramic views of wildlife below."
              },
              {
                title: "Cultural Experiences",
                description: "Visit authentic Maasai villages and learn about their ancient traditions and way of life."
              }
            ],
            packages: [
              {
                title: "3-Day Masai Mara Explorer",
                price: "$1,549",
                description: "A quick but comprehensive safari experience in Kenya's premium wildlife destination.",
                link: "/safaris/kenya/masai-mara-explorer"
              },
              {
                title: "5-Day Masai Mara Deluxe",
                price: "$2,750",
                description: "Experience the Mara in comfort with luxury accommodations and extended game viewing.",
                link: "/safaris/kenya/masai-mara-deluxe"
              },
              {
                title: "7-Day Migration Special",
                price: "$3,900",
                description: "Timed to coincide with the Great Migration, this package offers prime wildlife viewing opportunities.",
                link: "/safaris/kenya/migration-special"
              }
            ]
          },
          "amboseli": {
            title: "Amboseli",
            tagline: "In the Shadow of Kilimanjaro",
            hero: "/api/placeholder/1200/600",
            description: "Amboseli National Park offers some of the most breathtaking views of Mount Kilimanjaro and is renowned for its large elephant herds and easy wildlife viewing.",
            longDescription: "Located in southern Kenya, Amboseli National Park is famous for its large elephant herds and stunning views of Mount Kilimanjaro across the border in Tanzania. The park's open plains, acacia woodland, swamps and marshland offer visitors varied wildlife viewing opportunities in a picturesque setting.",
            bestTimeToVisit: "June to October, January to February",
            duration: "2-4 Days recommended",
            difficulty: "Easy",
            priceRange: "$120-$500 per day",
            activities: [
              "Game drives",
              "Bird watching",
              "Photography",
              "Cultural visits",
              "Hiking"
            ],
            highlights: [
              {
                title: "Mount Kilimanjaro Views",
                description: "Spectacular vistas of Africa's highest mountain form the backdrop to your safari experience."
              },
              {
                title: "Elephant Herds",
                description: "Home to some of the largest elephants in Africa, with herds easily observed crossing the plains."
              },
              {
                title: "Observation Hill",
                description: "A perfect viewpoint overlooking the park's plains and swamps teeming with wildlife."
              },
              {
                title: "Diverse Ecosystems",
                description: "Experience five different habitats within one park, from dried-up lake bed to wetlands and savannah."
              }
            ],
            packages: [
              {
                title: "2-Day Amboseli Express",
                price: "$950",
                description: "A quick weekend getaway to experience Amboseli's elephants and mountain views.",
                link: "/safaris/kenya/amboseli-express"
              },
              {
                title: "4-Day Amboseli Photographic Safari",
                price: "$1,850",
                description: "Designed for photography enthusiasts with optimal timing for Kilimanjaro views.",
                link: "/safaris/kenya/amboseli-photo"
              }
            ]
          }
        },
        "tanzania": {
          "serengeti": {
            title: "Serengeti",
            tagline: "Endless Plains of Wonder",
            hero: "/api/placeholder/1200/600",
            description: "Tanzania's oldest and most popular national park, the Serengeti is famed for its annual migration, when some six million hooves pound the open plains, as more than 200,000 zebra and 300,000 Thomson's gazelle join the wildebeest's trek for fresh grazing.",
            longDescription: "The Serengeti ecosystem is one of the oldest on earth, with the essential features of climate, vegetation and fauna having remained largely unchanged for millions of years. The Serengeti's vast plains are punctuated by kopjes—island mountains of granite standing in a sea of grass. The park has diverse habitats, from the endless plains in the south, to the woodland and hills in the central area, to the black clay plains in the west, and the extensive woodland and river systems of the north.",
            bestTimeToVisit: "Year-round (Migration varies by season)",
            duration: "4-7 Days recommended",
            difficulty: "Easy to Moderate",
            priceRange: "$200-$800 per day",
            activities: [
              "Game drives",
              "Hot air balloon safaris",
              "Walking safaris (in selected areas)",
              "Bird watching",
              "Migration viewing"
            ],
            highlights: [
              {
                title: "The Great Migration",
                description: "Witness millions of wildebeest and zebra in their continuous search for fresh grazing."
              },
              {
                title: "Big Cat Sightings",
                description: "The Serengeti is renowned for its high density of lions, leopards, and cheetahs."
              },
              {
                title: "Seronera Valley",
                description: "The heart of the Serengeti, with resident wildlife throughout the year and beautiful acacia landscapes."
              },
              {
                title: "Moru Kopjes",
                description: "Ancient granite rock formations that provide habitat for unique wildlife and offer spectacular views."
              }
            ],
            packages: [
              {
                title: "5-Day Serengeti Explorer",
                price: "$2,250",
                description: "A classic safari experience in one of Africa's most iconic wildlife destinations.",
                link: "/safaris/tanzania/serengeti-explorer"
              },
              {
                title: "7-Day Migration Safari",
                price: "$3,500",
                description: "Timed and routed to maximize chances of witnessing the Great Migration in action.",
                link: "/safaris/tanzania/migration-safari"
              },
              {
                title: "10-Day Ultimate Tanzania",
                price: "$5,750",
                description: "Comprehensive safari combining Serengeti with Ngorongoro and Tarangire.",
                link: "/safaris/tanzania/ultimate-tanzania"
              }
            ]
          },
          "ngorongoro-crater": {
            title: "Ngorongoro Crater",
            tagline: "Africa's Garden of Eden",
            hero: "/api/placeholder/1200/600",
            description: "Often called 'Africa's Eden', the Ngorongoro Crater is a breathtaking natural wonder, a collapsed volcano that contains a wealth of wildlife in an area naturally enclosed by the crater walls.",
            longDescription: "The Ngorongoro Crater is a breathtaking natural wonder, a UNESCO World Heritage Site and one of Africa's most remarkable geological features. This vast, unbroken caldera is home to more than 25,000 animals, creating one of the highest densities of wildlife in Africa. The crater floor consists of several distinct habitats including grassland, swamps, forests and Lake Magadi, a central soda lake filled by the Munge River.",
            bestTimeToVisit: "June to October, December to March",
            duration: "2-3 Days recommended",
            difficulty: "Easy",
            priceRange: "$250-$800 per day",
            activities: [
              "Game drives on the crater floor",
              "Photography",
              "Bird watching",
              "Cultural visits to Maasai villages",
              "Crater rim walks"
            ],
            highlights: [
              {
                title: "Concentrated Wildlife",
                description: "One of the few places where you can see all of the Big Five in a single day."
              },
              {
                title: "Spectacular Scenery",
                description: "The view from the crater rim looking down into this natural amphitheater is breathtaking."
              },
              {
                title: "Black Rhino Sightings",
                description: "One of the few places in Tanzania where you're likely to spot the endangered black rhino."
              },
              {
                title: "Lake Magadi",
                description: "A seasonal alkaline lake that attracts numerous flamingos and other water birds."
              }
            ],
            packages: [
              {
                title: "2-Day Crater Explorer",
                price: "$1,425",
                description: "A focused safari experience in the world's largest intact volcanic caldera.",
                link: "/safaris/tanzania/crater-explorer"
              },
              {
                title: "4-Day Northern Tanzania Highlights",
                price: "$2,850",
                description: "Combine Ngorongoro Crater with Tarangire for a diverse wildlife experience.",
                link: "/safaris/tanzania/northern-highlights"
              }
            ]
          }
        },
        "rwanda": {
          "volcanoes-national-park": {
            title: "Volcanoes National Park",
            tagline: "Gorillas in the Mist",
            hero: "/api/placeholder/1200/600",
            description: "Home to endangered mountain gorillas and golden monkeys, Volcanoes National Park is part of the Virunga Conservation Area and offers some of the most emotional wildlife encounters in Africa.",
            longDescription: "Volcanoes National Park, situated in northwestern Rwanda, is named after the chain of dormant volcanoes that form the Virunga Massif. The park is home to about a third of the world's remaining mountain gorillas and was the base for Dian Fossey's gorilla research. The landscape features bamboo forests, open grassland, swamp and heath, providing diverse habitats for numerous mammal species and over 200 recorded bird species.",
            bestTimeToVisit: "December to February, June to September",
            duration: "3-5 Days recommended",
            difficulty: "Challenging",
            priceRange: "$400-$1,500 per day",
            activities: [
              "Gorilla trekking",
              "Golden monkey tracking",
              "Volcano hiking",
              "Cultural experiences",
              "Bird watching"
            ],
            highlights: [
              {
                title: "Mountain Gorilla Encounters",
                description: "Spend an hour with a habituated gorilla family - an experience often described as life-changing."
              },
              {
                title: "Scenic Volcanoes",
                description: "Five volcanoes form the backdrop of the park, offering spectacular landscapes and hiking opportunities."
              },
              {
                title: "Golden Monkeys",
                description: "Track these playful and photogenic primates in the bamboo forests of the lower slopes."
              },
              {
                title: "Dian Fossey's Legacy",
                description: "Visit the grave of this famous primatologist and the research center continuing her work."
              }
            ],
            packages: [
              {
                title: "3-Day Gorilla Experience",
                price: "$3,132",
                description: "A focused gorilla trekking adventure with comfortable accommodations.",
                link: "/safaris/rwanda/gorilla-experience"
              },
              {
                title: "5-Day Rwanda Primates",
                price: "$4,750",
                description: "Combine gorilla trekking with golden monkey tracking and cultural experiences.",
                link: "/safaris/rwanda/rwanda-primates"
              },
              {
                title: "7-Day Rwanda Complete",
                price: "$6,900",
                description: "Comprehensive Rwanda experience including gorillas, Nyungwe Forest, and Lake Kivu.",
                link: "/safaris/rwanda/rwanda-complete"
              }
            ]
          },
          "akagera-national-park": {
            title: "Akagera National Park",
            tagline: "Rwanda's Big Five Destination",
            hero: "/api/placeholder/1200/600",
            description: "Rwanda's only savannah park, Akagera combines woodland, swamps, lakes and grassland in a beautiful landscape that's home to a wide variety of wildlife including recently reintroduced lions and rhinos.",
            longDescription: "Located in eastern Rwanda, Akagera National Park is Central Africa's largest protected wetland and the last remaining refuge for savannah-adapted species in the country. The park consists of a complex system of lakes, papyrus swamps, and rolling hills. After years of conservation efforts, Akagera now hosts all of the Big Five (lion, leopard, rhino, elephant, and buffalo), making it Rwanda's premier safari destination alongside its famous gorilla trekking.",
            bestTimeToVisit: "June to September, December to February",
            duration: "2-3 Days recommended",
            difficulty: "Easy",
            priceRange: "$150-$450 per day",
            activities: [
              "Game drives",
              "Boat safaris",
              "Bird watching",
              "Night drives",
              "Behind-the-scenes conservation tours"
            ],
            highlights: [
              {
                title: "Big Five Viewing",
                description: "Recently reintroduced lions and rhinos complete the Big Five in this rehabilitated park."
              },
              {
                title: "Lake Ihema Boat Safari",
                description: "Cruise alongside hippos, crocodiles and water birds on Rwanda's second-largest lake."
              },
              {
                title: "Conservation Success Story",
                description: "Learn about one of Africa's most remarkable wildlife restoration projects."
              },
              {
                title: "Diverse Ecosystems",
                description: "Experience savannah plains, woodlands, lakes and wetlands all within one park."
              }
            ],
            packages: [
              {
                title: "2-Day Akagera Safari",
                price: "$1,280",
                description: "A quick but comprehensive introduction to Rwanda's safari destination.",
                link: "/safaris/rwanda/akagera-safari"
              },
              {
                title: "4-Day Rwanda Wildlife",
                price: "$2,450",
                description: "Combine Akagera with cultural experiences in Kigali for a rounded Rwanda experience.",
                link: "/safaris/rwanda/rwanda-wildlife"
              }
            ]
          }
        }
      };

      try {
        setDestinationData(destinations[country][destination]);
      } catch (error) {
        console.error("Destination not found");
      } finally {
        setLoading(false);
      }
    };

    fetchDestinationData();
  }, [country, destination]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-moss-green"></div>
      </div>
    );
  }

  if (!destinationData) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-cafe-noir mb-4">Destination Not Found</h2>
        <p className="mb-8">We couldn't find the destination you're looking for.</p>
        <Link to="/destinations" className="bg-moss-green text-white px-6 py-3 rounded-full inline-flex items-center">
          <ChevronLeft size={18} className="mr-2" />
          Back to All Destinations
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${destinationData.hero})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{destinationData.title}</h1>
            <p className="text-xl md:text-2xl">{destinationData.tagline}</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-eggshell py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-cafe-noir">
            <Link to="/" className="hover:text-moss-green">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/destinations" className="hover:text-moss-green">Destinations</Link>
            <span className="mx-2">/</span>
            <Link to={`/destinations/${country}`} className="hover:text-moss-green capitalize">{country}</Link>
            <span className="mx-2">/</span>
            <span className="text-moss-green">{destinationData.title}</span>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-1 w-12 bg-hunyadi-yellow mr-4"></div>
                <p className="text-hunyadi-yellow font-medium uppercase tracking-wider">Destination Overview</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cafe-noir">About {destinationData.title}</h2>
              <p className="text-cafe-noir text-lg mb-6">{destinationData.description}</p>
              <p className="text-cafe-noir mb-8">{destinationData.longDescription}</p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Calendar className="text-moss-green mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-cafe-noir">Best Time to Visit</h4>
                    <p>{destinationData.bestTimeToVisit}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="text-moss-green mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-cafe-noir">Recommended Duration</h4>
                    <p>{destinationData.duration}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Activity className="text-moss-green mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-cafe-noir">Difficulty Level</h4>
                    <p>{destinationData.difficulty}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <DollarSign className="text-moss-green mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-cafe-noir">Price Range</h4>
                    <p>{destinationData.priceRange}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-eggshell rounded-xl p-8">
              <h3 className="text-2xl font-bold text-cafe-noir mb-6">Popular Activities</h3>
              <ul className="space-y-4">
                {destinationData.activities.map((activity, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-moss-green/10 flex items-center justify-center text-moss-green">
                      {index === 0 && <Binoculars size={20} />}
                      {index === 1 && <Cloud size={20} />}
                      {index === 2 && <Users size={20} />}
                      {index === 3 && <Camera size={20} />}
                      {index === 4 && <Coffee size={20} />}
                    </div>
                    <span className="ml-4 text-cafe-noir">{activity}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Link 
                  to="/enquire" 
                  className="bg-hunyadi-yellow hover:bg-gold-metallic text-cafe-noir font-medium py-3 px-6 rounded-full inline-flex items-center transition-colors"
                >
                  Enquire About This Destination
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-cornsilk">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="h-1 w-12 bg-moss-green mr-4"></div>
              <p className="text-moss-green font-medium uppercase tracking-wider">Experiences</p>
              <div className="h-1 w-12 bg-moss-green ml-4"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cafe-noir">Destination Highlights</h2>
            <p className="text-cafe-noir text-lg">What makes {destinationData.title} special and why it should be on your bucket list.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinationData.highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-moss-green/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="text-moss-green" size={24} />
                </div>
                <h3 className="text-xl font-bold text-cafe-noir mb-3">{highlight.title}</h3>
                <p className="text-cafe-noir">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="h-1 w-12 bg-hunyadi-yellow mr-4"></div>
              <p className="text-hunyadi-yellow font-medium uppercase tracking-wider">Our Itineraries</p>
              <div className="h-1 w-12 bg-hunyadi-yellow ml-4"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cafe-noir">Recommended Packages</h2>
            <p className="text-cafe-noir text-lg">Explore our carefully designed packages featuring {destinationData.title}.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {destinationData.packages.map((pkg, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200">
                  <img 
                    src="/api/placeholder/500/300" 
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-cafe-noir mb-2">{pkg.title}</h3>
                  <p className="text-hunyadi-yellow font-bold mb-4">{pkg.price}</p>
                  <p className="text-cafe-noir mb-6">{pkg.description}</p>
                  <Link 
                    to={pkg.link} 
                    className="bg-moss-green hover:bg-asparagus text-white py-2 px-4 rounded-full inline-flex items-center transition-colors text-sm"
                  >
                    View Package Details
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cafe-noir text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore {destinationData.title}?</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">Contact our travel experts today to plan your perfect African safari adventure.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/enquire" 
              className="bg-hunyadi-yellow hover:bg-gold-metallic text-cafe-noir font-medium py-3 px-8 rounded-full inline-flex items-center transition-colors"
            >
              Make an Enquiry
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetails;