import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { ChevronRightIcon, CalendarIcon, CurrencyDollarIcon, MapPinIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function RwandaSafariShowcase() {
  // Tabs for different safari packages
  const [safariPackages] = useState([
    {
      id: 'classic',
      title: 'Classic Rwanda Safari',
      code: 'JT045',
      description: 'Explore the wonders of Rwanda with our classic safari package',
      nights: 5,
      days: 6,
      image: '/images/gorilla.jpg'
    },
    {
      id: 'gorilla-midst',
      title: 'Two Nights - Gorilla in the Midst',
      code: 'JT046',
      description: 'A shorter trek focused on gorilla encounters',
      nights: 2,
      days: 3,
      image: '/images/gorilla-forest.jpg'
    },
    {
      id: 'three-gorilla',
      title: 'Three Nights - Gorilla in the Midst',
      code: 'JT047',
      description: 'Extended gorilla trek experience',
      nights: 3,
      days: 4,
      image: '/images/gorilla-family.jpg'
    },
  ]);

  // Rates data
  const ratesData = {
    classic: {
      options: [
        {
          name: 'Option 1 - Top/Mid-range Mix',
          highSeason: 3984.5,
          lowSeason: 3555.5,
          singleSupplement: 768.5
        },
        {
          name: 'Option 2 - Mid-range',
          highSeason: null,
          lowSeason: 637,
          singleSupplement: 476
        },
        {
          name: 'Option 3 - Mid-range',
          highSeason: null,
          lowSeason: 1865.5,
          singleSupplement: 279.5
        }
      ],
      seasons: {
        high: ['01 - 15 Jan', '01 Jun - 31 Oct', '15 - 31 Dec'],
        low: ['16 Jan - 31 May']
      }
    },
    gorillaMidst: {
      options: [
        {
          name: 'Kigali Serena Hotel',
          price: 933.5,
          singleSupplement: 344.5
        },
        {
          name: 'Umubano Hotel',
          price: 775,
          singleSupplement: 149.5
        }
      ]
    },
    threeGorilla: {
      options: [
        {
          name: 'Kigali Serena Hotel & Mountain Gorilla View Lodge',
          price: 1261,
          singleSupplement: 431.5
        },
        {
          name: 'Umubano Hotel & Mountain Gorilla View Lodge',
          price: 934.5,
          singleSupplement: 265.5
        }
      ]
    }
  };

  // Activity permits data
  const activityPermits = [
    {
      activity: 'Chimps Trek',
      location: 'Nyungwe Forest',
      permitFee: 117,
      remarks: 'Foreign Non-Resident'
    },
    {
      activity: 'Canopy Hike',
      location: 'Nyungwe Forest',
      permitFee: 78,
      remarks: 'Foreign Non-Resident'
    },
    {
      activity: 'Colobus Monkeys',
      location: 'Nyungwe Forest',
      permitFee: 78,
      remarks: 'Foreign Non-Resident'
    },
    {
      activity: 'Waterfalls Hike',
      location: 'Nyungwe Forest',
      permitFee: 65,
      remarks: 'Foreign Non-Resident'
    },
    {
      activity: 'Boat Transfer',
      location: 'Cyangugu/Kibuye/ Gisenyi',
      permitFee: '195 per Boat (05-07 Pax Capacity)',
      remarks: ''
    },
    {
      activity: 'Gorilla Trek',
      location: 'Volcanoes Park',
      permitFee: 1950,
      remarks: 'Per Person/Permit'
    },
    {
      activity: 'Optional Cultural Village Visit',
      location: '',
      permitFee: 35,
      remarks: 'Per Person'
    }
  ];

  return (
    <div className="py-16 bg-eggshell min-h-screen">
      {/* Header */}
      <div className="bg-cafe-noir text-mindaro py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Rwanda Safari Experiences</h1>
          <p className="text-center mt-2">Unforgettable Encounters with Nature</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/2 p-6">
              <h2 className="text-2xl font-bold text-cafe-noir mb-4">Discover Rwanda</h2>
              <p className="text-gray-700 mb-4">
                Experience the breathtaking beauty of Rwanda with our specially curated safari packages. From mountain gorilla encounters to spectacular landscapes, immerse yourself in the natural wonders of the "Land of a Thousand Hills."
              </p>
              <div className="bg-alice-blue rounded-lg p-4">
                <h3 className="font-bold text-cafe-noir text-lg mb-2">Important Location Information</h3>
                <p className="text-gray-700">
                  Nyungwe Forest and Volcanoes regions are high altitude areas, above 2,400m above sea level. As such, it can be extremely chilly in the early mornings and evenings - warm clothing is therefore necessary.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 bg-cover bg-center h-64 md:h-auto" style={{ backgroundImage: "url('/images/rwanda-landscape.jpg')" }}>
              {/* Image Placeholder */}
              <div className="h-64 md:h-auto bg-moss-green bg-opacity-20 flex items-center justify-center">
                <span className="text-moss-green font-bold text-lg">Rwanda Landscape</span>
              </div>
            </div>
          </div>
        </div>

        {/* Safari Packages Tabs */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <Tab.Group>
            <Tab.List className="flex space-x-1 bg-cafe-noir p-1">
              {safariPackages.map((pkg) => (
                <Tab
                  key={pkg.id}
                  className={({ selected }) =>
                    classNames(
                      'w-full py-3 text-sm font-medium leading-5 rounded-md',
                      'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-cafe-noir ring-hunyadi-yellow ring-opacity-60',
                      selected
                        ? 'bg-hunyadi-yellow text-cafe-noir'
                        : 'text-mindaro hover:bg-moss-green/[0.3] hover:text-white'
                    )
                  }
                >
                  {pkg.title}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {safariPackages.map((pkg) => (
                <Tab.Panel
                  key={pkg.id}
                  className={classNames(
                    'bg-white p-4',
                    'focus:outline-none'
                  )}
                >
                  <div className="border-b pb-4 mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-cafe-noir">{pkg.code} - {pkg.title}</h3>
                      <span className="px-3 py-1 bg-hunyadi-yellow text-cafe-noir rounded-full text-sm font-semibold">
                        {pkg.nights} Nights / {pkg.days} Days
                      </span>
                    </div>
                    <p className="text-gray-700">{pkg.description}</p>
                  </div>

                  {/* Travel Tips */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-moss-green mb-3">Important Tips</h4>
                    <div className="bg-cornsilk rounded-lg p-4">
                      <p className="mb-2">While trekking, it can rain unexpectedly – it is necessary therefore to have:</p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Waterproof clothing (jacket with hood + trousers)</li>
                        <li>Waterproof Zip-Lock bags for Camera/Film/Passports/Money, etc.</li>
                        <li>Hand Gloves (warm and water-proof), to keep hands off from rain and stinging vegetation, as well as protect from stinging nettles</li>
                        <li>Hiking boots - with good mud-grip are most appropriate, especially in wet weather</li>
                        <li>Gaiters – to protect your trek trouser legs and boots against mud/wetness</li>
                        <li>Small hand/face towel, to wipe sweat off your face during the trek</li>
                      </ul>
                    </div>
                  </div>

                  {/* Rates */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-moss-green flex items-center mb-3">
                      <CurrencyDollarIcon className="h-5 w-5 mr-2" />
                      Applicable Rates
                    </h4>
                    <div className="bg-white rounded-lg border border-french-gray overflow-x-auto">
                      <table className="min-w-full divide-y divide-french-gray">
                        <thead>
                          <tr className="bg-alice-blue">
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Accommodation</th>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">High Season</th>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Low Season</th>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Single Supplement</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-french-gray">
                          {pkg.id === 'classic' && ratesData.classic.options.map((option, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-cornsilk bg-opacity-30'}>
                              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{option.name}</td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                                {option.highSeason ? `$${option.highSeason}` : 'N/A'}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">${option.lowSeason}</td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">${option.singleSupplement}</td>
                            </tr>
                          ))}
                          {pkg.id === 'gorilla-midst' && ratesData.gorillaMidst.options.map((option, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-cornsilk bg-opacity-30'}>
                              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{option.name}</td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700" colSpan={2}>
                                ${option.price}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">${option.singleSupplement}</td>
                            </tr>
                          ))}
                          {pkg.id === 'three-gorilla' && ratesData.threeGorilla.options.map((option, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-cornsilk bg-opacity-30'}>
                              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{option.name}</td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700" colSpan={2}>
                                ${option.price}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">${option.singleSupplement}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    {pkg.id === 'classic' && (
                      <div className="mt-3 bg-alice-blue p-3 rounded-lg">
                        <h5 className="font-medium text-cafe-noir mb-1">Seasonal Information:</h5>
                        <div className="text-sm">
                          <div className="flex items-center mb-1">
                            <CalendarIcon className="h-4 w-4 text-moss-green mr-1" />
                            <span className="font-medium">High Season:</span>
                            <span className="ml-2">{ratesData.classic.seasons.high.join(', ')}</span>
                          </div>
                          <div className="flex items-center">
                            <CalendarIcon className="h-4 w-4 text-moss-green mr-1" />
                            <span className="font-medium">Low Season:</span>
                            <span className="ml-2">{ratesData.classic.seasons.low.join(', ')}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Package Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-bold text-moss-green mb-3">Included in Your Package</h4>
                      <ul className="bg-alice-blue rounded-lg p-4 space-y-2">
                        <li className="flex items-start">
                          <ChevronRightIcon className="h-5 w-5 text-hunyadi-yellow flex-shrink-0 mt-0.5" />
                          <span className="ml-2 text-gray-700">Kigali Airport Arrival/Departure transfers & assistance</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRightIcon className="h-5 w-5 text-hunyadi-yellow flex-shrink-0 mt-0.5" />
                          <span className="ml-2 text-gray-700">Accommodation in Kigali on Bed & Breakfast basis</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRightIcon className="h-5 w-5 text-hunyadi-yellow flex-shrink-0 mt-0.5" />
                          <span className="ml-2 text-gray-700">Park City Tour & Lunch on Day 01</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRightIcon className="h-5 w-5 text-hunyadi-yellow flex-shrink-0 mt-0.5" />
                          <span className="ml-2 text-gray-700">Private transport in 4x4 Safari Land-cruisers</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRightIcon className="h-5 w-5 text-hunyadi-yellow flex-shrink-0 mt-0.5" />
                          <span className="ml-2 text-gray-700">Services of English-speaking Specialist Driver Guide</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRightIcon className="h-5 w-5 text-hunyadi-yellow flex-shrink-0 mt-0.5" />
                          <span className="ml-2 text-gray-700">Emergency Evacuation Cover (excludes hospitalization and medical care)</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRightIcon className="h-5 w-5 text-hunyadi-yellow flex-shrink-0 mt-0.5" />
                          <span className="ml-2 text-gray-700">Bottled Drinking Water during the safari</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRightIcon className="h-5 w-5 text-hunyadi-yellow flex-shrink-0 mt-0.5" />
                          <span className="ml-2 text-gray-700">All taxes on the services quoted above</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-claret mb-3">Excluded from Your Package</h4>
                      <ul className="bg-alice-blue rounded-lg p-4 space-y-2">
                        <li className="flex items-start">
                          <ChevronRightIcon className="h-5 w-5 text-claret flex-shrink-0 mt-0.5" />
                          <span className="ml-2 text-gray-700">Any accommodation in Kigali not mentioned</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRightIcon className="h-5 w-5 text-claret flex-shrink-0 mt-0.5" />
                          <span className="ml-2 text-gray-700">Meals and beverages other than specified</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRightIcon className="h-5 w-5 text-claret flex-shrink-0 mt-0.5" />
                          <span className="ml-2 text-gray-700">Gorilla Trek permits (charged separately)</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRightIcon className="h-5 w-5 text-claret flex-shrink-0 mt-0.5" />
                          <span className="ml-2 text-gray-700">International, regional and local Airfares & Airport taxes</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRightIcon className="h-5 w-5 text-claret flex-shrink-0 mt-0.5" />
                          <span className="ml-2 text-gray-700">All items of personal nature (souvenirs, travel insurance, etc.)</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRightIcon className="h-5 w-5 text-claret flex-shrink-0 mt-0.5" />
                          <span className="ml-2 text-gray-700">Tips and gratuities</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>

        {/* Activity Permits */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="bg-moss-green text-white px-6 py-4">
            <h3 className="text-xl font-bold">Activity Permits & Fees</h3>
            <p className="text-sm mt-1">Additional fees applicable for activities (to be accompanied by a park guide)</p>
          </div>
          
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-french-gray">
                <thead>
                  <tr className="bg-alice-blue">
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Activity</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Location</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Permit Fee (USD)</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Remarks</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-french-gray">
                  {activityPermits.map((activity, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-cornsilk bg-opacity-30'}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-medium">{activity.activity}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{activity.location}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                        {typeof activity.permitFee === 'number' ? 
                          `$${activity.permitFee} Per Person/Trek` : 
                          `$${activity.permitFee}`}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{activity.remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 bg-cornsilk bg-opacity-40 p-4 rounded-lg border-l-4 border-hunyadi-yellow">
              <div className="flex items-start">
                <ShieldCheckIcon className="h-6 w-6 text-hunyadi-yellow flex-shrink-0" />
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-cafe-noir">Jambo TravelHouse-NBO</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    <span className="font-medium">Rwanda Primates Treks + Lake Kivu Program</span><br />
                    Various durations available for unforgettable gorilla encounters in the heart of Africa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Call-to-Action */}
        <div className="bg-cafe-noir text-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Ready for Your Rwanda Adventure?</h3>
            <p className="mb-4">Our experienced team is ready to help you plan your perfect Rwanda safari experience.</p>
            <button className="bg-hunyadi-yellow text-cafe-noir font-bold py-2 px-6 rounded-full hover:bg-gold-metallic transition duration-300">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-cafe-noir text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; 2025 Rwanda Safari Experiences. All rates are valid from 01st November - 31st December 2023/24.</p>
        </div>
      </div>
    </div>
  );
}