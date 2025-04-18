import React, { useState } from 'react';
import { Calendar, Users, Star, Download, ChevronDown, ChevronUp, Filter, Bookmark, Search, ArrowDownCircle, GitCompare } from 'lucide-react';

  // Updated data structure with actual packages from the PDF
  const pricingData = {
    kenya: [
      {
        id: 'JT002',
        name: 'Karibu Kenya (Classic)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 2952.05, singleSupplement: 553.15 },
          midSeason1: { period: '01.04-30.06.2025', price: 2715.15, singleSupplement: 155.25 },
          peakSeason: { period: '01.07-31.10.2025', price: 3193.55, singleSupplement: 631.35 },
          midSeason2: { period: '01.11-15.12.2025', price: 2938.25, singleSupplement: 545.10 }
        },
        highlights: ['Classic Kenya experience', 'Multiple national parks', 'Cultural interactions'],
        accommodationType: 'Comfortable lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in safari vehicle'],
        rating: 4.7
      },
      {
        id: 'JT003',
        name: 'Twiga Safari (Classic)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 3251.05, singleSupplement: 1024.65 },
          midSeason1: { period: '01.04-30.06.2025', price: 3093.50, singleSupplement: 474.95 },
          peakSeason: { period: '01.07-31.10.2025', price: 3806.50, singleSupplement: 1276.50 },
          midSeason2: { period: '01.11-15.12.2025', price: 3174.00, singleSupplement: 834.90 }
        },
        highlights: ['Giraffe spotting', 'Diverse ecosystems', 'Photography opportunities'],
        accommodationType: 'Comfortable lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in safari vehicle'],
        rating: 4.6
      },
      {
        id: 'JT004',
        name: 'Kenya Horizons (Classic)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 2608.20, singleSupplement: 767.05 },
          midSeason1: { period: '01.04-30.06.2025', price: 2410.40, singleSupplement: 353.05 },
          peakSeason: { period: '01.07-31.10.2025', price: 3022.20, singleSupplement: 861.35 },
          midSeason2: { period: '01.11-15.12.2025', price: 2439.15, singleSupplement: 591.10 }
        },
        highlights: ['Panoramic views', 'Diverse wildlife', 'Scenic landscapes'],
        accommodationType: 'Comfortable lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in safari vehicle'],
        rating: 4.5
      },
      {
        id: 'JT005',
        name: 'Kenya Footsteps (Classic)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 2362.10, singleSupplement: 448.50 },
          midSeason1: { period: '01.04-30.06.2025', price: 2165.45, singleSupplement: 156.40 },
          peakSeason: { period: '01.07-31.10.2025', price: 2556.45, singleSupplement: 512.90 },
          midSeason2: { period: '01.11-15.12.2025', price: 2349.45, singleSupplement: 441.60 }
        },
        highlights: ['Walking safaris', 'Intimate wildlife encounters', 'Cultural experiences'],
        accommodationType: 'Comfortable lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in safari vehicle'],
        rating: 4.4
      },
      {
        id: 'JT006',
        name: 'Classic Kenya Safari',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 2503.55, singleSupplement: 661.25 },
          midSeason1: { period: '01.04-30.06.2025', price: 2375.90, singleSupplement: 474.95 },
          peakSeason: { period: '01.07-31.10.2025', price: 2945.15, singleSupplement: 969.45 },
          midSeason2: { period: '01.11-15.12.2025', price: 2426.50, singleSupplement: 474.95 }
        },
        highlights: ['Big Five focus', 'Traditional safari experience', 'Diverse habitats'],
        accommodationType: 'Comfortable lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in safari vehicle'],
        rating: 4.7
      },
      {
        id: 'JT007',
        name: 'Kenya Highlights Safari (Classic)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 1743.40, singleSupplement: 343.85 },
          midSeason1: { period: '01.04-30.06.2025', price: 1584.70, singleSupplement: 154.10 },
          peakSeason: { period: '01.07-31.10.2025', price: 1890.60, singleSupplement: 393.30 },
          midSeason2: { period: '01.11-15.12.2025', price: 1730.75, singleSupplement: 335.80 }
        },
        highlights: ['Budget-friendly', 'Essential Kenya experience', 'Great for first-timers'],
        accommodationType: 'Standard lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in safari vehicle'],
        rating: 4.3
      },
      {
        id: 'JT008',
        name: 'Explore Kenya Safari (Classic)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 1797.45, singleSupplement: 481.85 },
          midSeason1: { period: '01.04-30.06.2025', price: 1783.65, singleSupplement: 476.10 },
          peakSeason: { period: '01.07-31.10.2025', price: 2236.75, singleSupplement: 792.35 },
          midSeason2: { period: '01.11-15.12.2025', price: 1721.55, singleSupplement: 293.25 }
        },
        highlights: ['Diverse ecosystems', 'Cultural interactions', 'Scenic diversity'],
        accommodationType: 'Standard lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in safari vehicle'],
        rating: 4.2
      },
      {
        id: 'JT009',
        name: 'Majestic Kenya Safari (Classic)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 2268.95, singleSupplement: 675.05 },
          midSeason1: { period: '01.04-30.06.2025', price: 2144.75, singleSupplement: 323.15 },
          peakSeason: { period: '01.07-31.10.2025', price: 2719.75, singleSupplement: 690.00 },
          midSeason2: { period: '01.11-15.12.2025', price: 2137.85, singleSupplement: 416.30 }
        },
        highlights: ['Premium locations', 'Exclusive experiences', 'Luxury touches'],
        accommodationType: 'Upgraded lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in safari vehicle'],
        rating: 4.6
      },
      {
        id: 'JT014',
        name: 'Ndovu Trail Classic',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 2003.30, singleSupplement: 365.70 },
          midSeason1: { period: '01.04-30.06.2025', price: 1820.45, singleSupplement: 309.35 },
          peakSeason: { period: '01.07-31.10.2025', price: 2186.15, singleSupplement: 423.20 },
          midSeason2: { period: '01.11-15.12.2025', price: 2003.30, singleSupplement: 365.70 }
        },
        highlights: ['Elephant-focused', 'Family-friendly', 'Educational components'],
        accommodationType: 'Comfortable lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in safari vehicle'],
        rating: 4.5
      },
      {
        id: 'JT017',
        name: 'Masai Safari Classic',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 1414.50, singleSupplement: 257.60 },
          midSeason1: { period: '01.04-30.06.2025', price: 1269.60, singleSupplement: 193.20 },
          peakSeason: { period: '01.07-31.10.2025', price: 1549.05, singleSupplement: 302.45 },
          midSeason2: { period: '01.11-15.12.2025', price: 1414.50, singleSupplement: 257.60 }
        },
        highlights: ['Maasai culture immersion', 'Authentic experiences', 'Community visits'],
        accommodationType: 'Standard lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in safari vehicle'],
        rating: 4.4
      },
      {
        id: 'JT018',
        name: 'Safari Royale (Classic)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 1468.55, singleSupplement: 397.90 },
          midSeason1: { period: '01.04-30.06.2025', price: 1278.80, singleSupplement: 396.75 },
          peakSeason: { period: '01.07-31.10.2025', price: 1898.65, singleSupplement: 702.65 },
          midSeason2: { period: '01.11-15.12.2025', price: 1405.30, singleSupplement: 216.20 }
        },
        highlights: ['Royal treatment', 'Premium service', 'Exclusive locations'],
        accommodationType: 'Upgraded lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in safari vehicle'],
        rating: 4.6
      },
      {
        id: 'JT019',
        name: 'Mara Serenade Experience (Classic)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 969.45, singleSupplement: 194.35 },
          midSeason1: { period: '01.04-30.06.2025', price: 969.45, singleSupplement: 198.95 },
          peakSeason: { period: '01.07-31.10.2025', price: 1300.65, singleSupplement: 248.40 },
          midSeason2: { period: '01.11-15.12.2025', price: 897.00, singleSupplement: 239.20 }
        },
        highlights: ['Maasai Mara focus', 'Great Migration potential', 'Budget-friendly'],
        accommodationType: 'Standard lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in safari vehicle'],
        rating: 4.3
      },
      {
        id: 'JT020',
        name: 'Mara Classic Experience (Classic)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 894.70, singleSupplement: 117.30 },
          midSeason1: { period: '01.04-30.06.2025', price: 795.80, singleSupplement: 80.50 },
          peakSeason: { period: '01.07-31.10.2025', price: 990.15, singleSupplement: 149.50 },
          midSeason2: { period: '01.11-15.12.2025', price: 894.70, singleSupplement: 117.30 }
        },
        highlights: ['Essential Mara experience', 'Great value', 'Wildlife concentration'],
        accommodationType: 'Standard lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in safari vehicle'],
        rating: 4.2
      },
      {
        id: 'JT021',
        name: 'Mara Premium Experience (Classic)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 926.90, singleSupplement: 203.55 },
          midSeason1: { period: '01.04-30.06.2025', price: 926.90, singleSupplement: 203.55 },
          peakSeason: { period: '01.07-31.10.2025', price: 1240.85, singleSupplement: 427.80 },
          midSeason2: { period: '01.11-15.12.2025', price: 894.70, singleSupplement: 66.70 }
        },
        highlights: ['Upgraded accommodations', 'Exclusive game viewing', 'Premium service'],
        accommodationType: 'Upgraded lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in safari vehicle'],
        rating: 4.7
      },
      {
        id: 'JT016',
        name: 'Migration Safari (Classic)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 1596.20, singleSupplement: 432.40 },
          midSeason1: { period: '01.04-30.06.2025', price: 1393.80, singleSupplement: 156.40 },
          peakSeason: { period: '01.07-31.10.2025', price: 1927.40, singleSupplement: 486.45 },
          midSeason2: { period: '01.11-15.12.2025', price: 1457.05, singleSupplement: 290.95 }
        },
        highlights: ['Great Migration focus', 'River crossing opportunities', 'Predator action'],
        accommodationType: 'Comfortable lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in safari vehicle'],
        rating: 4.8
      }
    ],
    tanzania: [
      {
        id: 'JT022',
        name: 'Kilimanjaro Safari (Classic)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 870.55, singleSupplement: 192.05 },
          midSeason1: { period: '01.04-30.06.2025', price: 765.90, singleSupplement: 115.00 },
          peakSeason: { period: '01.07-31.10.2025', price: 941.85, singleSupplement: 2043.55 },
          midSeason2: { period: '01.11-15.12.2025', price: 786.60, singleSupplement: 126.50 }
        },
        highlights: ['Kilimanjaro views', 'Northern circuit', 'Diverse wildlife'],
        accommodationType: 'Comfortable lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in safari vehicle'],
        rating: 4.6
      },
      {
        id: 'JT023',
        name: 'Treasure Of East Africa (Classic)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 5033.55, singleSupplement: 715.30 },
          midSeason1: { period: '01.04-30.06.2025', price: 3758.20, singleSupplement: 173.65 },
          peakSeason: { period: '01.07-31.10.2025', price: 5104.85, singleSupplement: 726.80 },
          midSeason2: { period: '01.11-15.12.2025', price: 4174.50, singleSupplement: 607.20 }
        },
        highlights: ['Premium experience', 'Comprehensive itinerary', 'Luxury touches'],
        accommodationType: 'Upgraded lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in safari vehicle'],
        rating: 4.9
      },
      {
        id: 'JT026',
        name: 'Splendours Of Tanzania (Classic)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 4376.90, singleSupplement: 466.90 },
          midSeason1: { period: '01.04-30.06.2025', price: 3149.85, singleSupplement: 462.30 },
          peakSeason: { period: '01.07-31.10.2025', price: 4376.90, singleSupplement: 466.90 },
          midSeason2: { period: '01.11-15.12.2025', price: 3520.15, singleSupplement: 425.50 }
        },
        highlights: ['Iconic locations', 'Photography opportunities', 'Diverse ecosystems'],
        accommodationType: 'Comfortable lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in safari vehicle'],
        rating: 4.7
      },
      {
        id: 'JT027',
        name: 'Tanzania Migration Safari (Classic)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 1083.30, singleSupplement: 278.30 },
          peakSeason: { period: '01.07-31.10.2025', price: 969.45, singleSupplement: 335.80 }
        },
        highlights: ['Great Migration focus', 'Serengeti plains', 'Predator action'],
        accommodationType: 'Standard lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in safari vehicle'],
        rating: 4.5
      },
      {
        id: 'JT028',
        name: 'East Africa Odyssey (Classic)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 5384.30, singleSupplement: 594.55 },
          midSeason1: { period: '01.04-30.06.2025', price: 4861.05, singleSupplement: 438.15 },
          peakSeason: { period: '01.07-31.10.2025', price: 5434.90, singleSupplement: 609.50 },
          midSeason2: { period: '01.11-15.12.2025', price: 4896.70, singleSupplement: 542.80 }
        },
        highlights: ['Multi-country experience', 'Comprehensive itinerary', 'Premium service'],
        accommodationType: 'Upgraded lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in safari vehicle'],
        rating: 4.8
      },
      {
        id: 'JT029',
        name: 'Tanzania Photography Safari (Classic)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 4245.80, singleSupplement: 410.55 },
          midSeason1: { period: '01.04-30.06.2025', price: 3050.95, singleSupplement: 67.85 },
          peakSeason: { period: '01.07-31.10.2025', price: 4245.80, singleSupplement: 410.55 },
          midSeason2: { period: '01.11-15.12.2025', price: 3816.85, singleSupplement: 366.85 }
        },
        highlights: ['Photography-focused', 'Specialist guides', 'Prime locations'],
        accommodationType: 'Comfortable lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in safari vehicle'],
        rating: 4.7
      },
      {
        id: 'JT030',
        name: 'Tanzania Highlight Classic',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 3984.75, singleSupplement: 336.95 },
          midSeason1: { period: '01.04-30.06.2025', price: 2791.05, singleSupplement: 115.00 },
          peakSeason: { period: '01.07-31.10.2025', price: 3984.75, singleSupplement: 336.95 },
          midSeason2: { period: '01.11-15.12.2025', price: 3588.00, singleSupplement: 299.00 }
        },
        highlights: ['Essential Tanzania', 'Northern circuit', 'Diverse wildlife'],
        accommodationType: 'Comfortable lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in safari vehicle'],
        rating: 4.6
      },
      {
        id: 'JT031',
        name: 'Rift Valley Explorer',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 1749.15, singleSupplement: 378.35 },
          midSeason1: { period: '01.04-30.06.2025', price: 1677.85, singleSupplement: 355.35 },
          peakSeason: { period: '01.07-31.10.2025', price: 1964.20, singleSupplement: 453.10 },
          midSeason2: { period: '01.11-15.12.2025', price: 1736.50, singleSupplement: 370.30 }
        },
        highlights: ['Geological wonders', 'Scenic diversity', 'Cultural interactions'],
        accommodationType: 'Standard lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in safari vehicle'],
        rating: 4.4
      },
      {
        id: 'JT032',
        name: 'Kenya Escapade 4x4 (Classic)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 1339.75, singleSupplement: 295.55 },
          midSeason1: { period: '01.04-30.06.2025', price: 1282.25, singleSupplement: 280.60 },
          peakSeason: { period: '01.07-31.10.2025', price: 1543.30, singleSupplement: 365.70 },
          midSeason2: { period: '01.11-15.12.2025', price: 1339.75, singleSupplement: 295.55 }
        },
        highlights: ['4x4 adventure', 'Off-road capability', 'Remote locations'],
        accommodationType: 'Standard lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in 4x4 vehicle'],
        rating: 4.3
      },
      {
        id: 'JT033',
        name: 'Jambo Safari (Classic)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 1307.55, singleSupplement: 246.10 },
          midSeason1: { period: '01.04-30.06.2025', price: 1289.15, singleSupplement: 128.80 },
          peakSeason: { period: '01.07-31.10.2025', price: 1399.55, singleSupplement: 254.15 },
          midSeason2: { period: '01.11-15.12.2025', price: 1365.05, singleSupplement: 246.10 }
        },
        highlights: ['Traditional safari', 'Wildlife focus', 'Cultural elements'],
        accommodationType: 'Standard lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in safari vehicle'],
        rating: 4.2
      },
      {
        id: 'JT034',
        name: 'Tsavo/Taita Hills Express (Classic)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 1051.10, singleSupplement: 171.35 },
          midSeason1: { period: '01.04-30.06.2025', price: 990.15, singleSupplement: 169.05 },
          peakSeason: { period: '01.07-31.10.2025', price: 1070.65, singleSupplement: 179.40 },
          midSeason2: { period: '01.11-15.12.2025', price: 1051.10, singleSupplement: 171.35 }
        },
        highlights: ['Coastal proximity', 'Red elephants', 'Scenic diversity'],
        accommodationType: 'Standard lodges and tented camps',
        packageIncludes: ['All park fees', 'Professional guide', 'Full board accommodation', 'Game drives', 'Transport in safari vehicle'],
        rating: 4.1
      }
    ],
    rwanda: [
      {
        id: 'JT045',
        name: 'Classic Rwanda Safari',
        duration: '6 days / 5 nights',
        groupSize: '3+ guests',
        seasonality: {
          highSeason: { period: '01.01-15.01, 01.06-31.10, 15.12-31.12.2025', price: 4582.18, singleSupplement: 814.78 },
          lowSeason: { period: '16.01-31.05.2025', price: 4088.83, singleSupplement: 732.55 },
          allYear1: { period: 'All Year', price: 2145.33, singleSupplement: 478.40 },
          allYear2: { period: 'All Year', price: 1891.18, singleSupplement: 321.43 }
        },
        highlights: ['Gorilla trekking', 'Nyungwe Forest', 'Lake Kivu', 'Cultural experiences'],
        accommodationType: 'Mid-range to top mid-range lodges',
        packageIncludes: [
          'Kigali airport transfers',
          'Genocide Memorial visit',
          'City tour with lunch',
          'Nyungwe Forest accommodation',
          'Lake Kivu accommodation',
          'Volcanoes region accommodation',
          'Private transport',
          'English/French speaking driver-guide',
          'Emergency evacuation cover',
          'Bottled water'
        ],
        rating: 4.9,
        permitFees: {
          chimpsTrek: 134.55,
          canopyHike: 89.70,
          colobusMonkeys: 89.70,
          waterfallHike: 74.75,
          boatTransfer: 2242.50,
          gorillaTrek: 2242.50
        }
      },
      {
        id: 'JT046',
        name: 'Gorillas in the Mist (2 nights)',
        duration: '3 days / 2 nights',
        groupSize: '3+ guests',
        seasonality: {
          option1: { period: 'Kigali Serena Hotel', price: 1188.53, singleSupplement: 396.18 },
          option2: { period: 'Umutomo Hotel', price: 889.53, singleSupplement: 1719.25 }
        },
        highlights: ['Mountain gorilla trekking', 'Volcanoes National Park', 'Kigali city tour'],
        accommodationType: 'City hotel + park lodges',
        packageIncludes: [
          'Kigali airport transfers',
          '2 nights accommodation in Kigali (B&B)',
          'Kigali city tour with lunch',
          'Private transport',
          'English/French speaking driver-guide',
          'Emergency evacuation cover',
          'Bottled water'
        ],
        rating: 4.8,
        permitFees: {
          gorillaTrek: 2242.50
        }
      },
      {
        id: 'JT047',
        name: 'Gorillas in the Mist (3 nights)',
        duration: '4 days / 3 nights',
        groupSize: '3+ guests',
        seasonality: {
          option1: { period: 'Kigali Serena Hotel & Mountain Gorilla View Lodge', price: 1450.15, singleSupplement: 530.72 },
          option2: { period: 'Umatomo Hotel & Mountain Gorilla View Lodge', price: 1143.67, singleSupplement: 306.47 }
        },
        highlights: ['Mountain gorilla trekking', 'Volcanoes National Park', 'Kigali city tour', 'Cultural village visit'],
        accommodationType: 'City hotel + park lodges',
        packageIncludes: [
          'Kigali airport transfers',
          '2 nights accommodation in Kigali (B&B)',
          '1 night at volcanoes region (full board)',
          'Kigali city tour with lunch',
          'Private transport',
          'English/French speaking driver-guide',
          'Emergency evacuation cover',
          'Bottled water'
        ],
        rating: 4.9,
        permitFees: {
          gorillaTrek: 2242.50,
          goldenMonkeyTrek: 100.00 // Example, actual price may vary
        }
      }
    ],
    kilimanjaro: [
      {
        id: 'JT043',
        name: 'Marangu Route Climb',
        duration: '6-7 days',
        groupSize: '1-10+ climbers',
        seasonality: {
          privateClimb: { period: '1 person (private)', price: { '6day': 2359, '7day': 2669 } },
          groupClimb: { 
            period: 'Joining others', 
            price: { 
              '6day': { '1person': 2279, '2-5persons': 1972, '6-10persons': 1876 },
              '7day': { '1person': 2577, '2-5persons': 2269, '6-10persons': 2174 }
            } 
          }
        },
        highlights: ['"Coca-Cola" route', 'Mountain huts accommodation', 'Gradual ascent'],
        accommodationType: 'Mountain huts',
        packageIncludes: [
          'Park fees',
          'Mountain huts accommodation',
          'Professional mountain guide',
          'Porters and cook',
          'All meals on the mountain',
          'Pre-climb briefing',
          'Emergency oxygen',
          'Transfer to/from park gates'
        ],
        rating: 4.7,
        additionalInfo: {
          leaderRate: { '6day': 956.80, '7day': 1160.35 },
          childrenDiscount: '30% for under 15 years'
        }
      },
      {
        id: 'JT044',
        name: 'Machame/Lemosho/Shira/Umbwe/Rongai/Northern Circuit',
        duration: '6-9 days',
        groupSize: '1-10+ climbers',
        seasonality: {
          privateClimb: { period: '1 person (private)', price: { '6day': 2465.60, '7day': 2774.95, '8day': 3084.30, '9day': 3393.65 } },
          groupClimb: { 
            period: 'Joining others', 
            price: { 
              '6day': { '1person': 2386.25, '2-5persons': 2086.10, '6-10persons': 1980.30 },
              '7day': { '1person': 2682.95, '2-5persons': 2382.80, '6-10persons': 2277.00 },
              '8day': { '1person': 2978.50, '2-5persons': 2678.35, '6-10persons': 2572.55 },
              '9day': { '1person': 3275.20, '2-5persons': 2972.75, '6-10persons': 2869.25 }
            } 
          }
        },
        highlights: [
          'Scenic routes',
          'Higher success rates',
          'Camping accommodation',
          'Acclimatization days'
        ],
        accommodationType: 'Mountain tents',
        packageIncludes: [
          'Park fees',
          'Camping equipment',
          'Professional mountain guide',
          'Porters and cook',
          'All meals on the mountain',
          'Pre-climb briefing',
          'Emergency oxygen',
          'Transfer to/from park gates'
        ],
        rating: 4.8,
        additionalInfo: {
          leaderRate: { '6day': 1087.90, '7day': 1276.50, '8day': 1466.25, '9day': 1654.85 },
          additionalNight: 296.70,
          childrenDiscount: '30% for under 15 years'
        }
      }
    ],
    luxury: [
      {
        id: 'JT035',
        name: 'Luxury East Africa Safari',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 6848.25, singleSupplement: 1401.85 },
          midSeason1: { period: '01.04-30.06.2025', price: 5670.65, singleSupplement: 788.90 },
          peakSeason: { period: '01.07-31.10.2025', price: 7625.65, singleSupplement: 1838.85 },
          midSeason2: { period: '01.11-15.12.2025', price: 6287.05, singleSupplement: 1292.60 }
        },
        highlights: ['Exclusive lodges', 'Private guides', 'Helicopter transfers', 'Premium experiences'],
        accommodationType: '5-star lodges and boutique camps',
        packageIncludes: [
          'All park fees',
          'Private professional guide',
          'Luxury full board accommodation',
          'Private game drives',
          'Premium transport (4x4 or air)',
          'Butler service',
          'Spa treatments',
          'Exclusive activities'
        ],
        rating: 5.0
      },
      {
        id: 'JT036',
        name: 'East Africa Highlights 4x4 (Luxury)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 6104.20, singleSupplement: 1258.10 },
          midSeason1: { period: '01.04-30.06.2025', price: 4982.95, singleSupplement: 532.45 },
          peakSeason: { period: '01.07-31.10.2025', price: 6763.15, singleSupplement: 1607.70 },
          midSeason2: { period: '01.11-15.12.2025', price: 5518.85, singleSupplement: 1090.20 }
        },
        highlights: ['Iconic locations', 'Private vehicle', 'Premium service', 'Exclusive access'],
        accommodationType: '5-star lodges and boutique camps',
        packageIncludes: [
          'All park fees',
          'Private professional guide',
          'Luxury full board accommodation',
          'Private game drives',
          'Premium 4x4 vehicle',
          'Butler service',
          'Exclusive activities'
        ],
        rating: 4.9
      },
      {
        id: 'JT037',
        name: 'Classic East Africa 4x4 (Luxury)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 5651.10, singleSupplement: 1166.10 },
          midSeason1: { period: '01.04-30.06.2025', price: 4560.90, singleSupplement: 721.05 },
          peakSeason: { period: '01.07-31.10.2025', price: 6191.60, singleSupplement: 1429.45 },
          midSeason2: { period: '01.11-15.12.2025', price: 4794.35, singleSupplement: 946.45 }
        },
        highlights: ['Traditional luxury', 'Personalized service', 'Premium locations', 'Cultural immersion'],
        accommodationType: '5-star lodges and boutique camps',
        packageIncludes: [
          'All park fees',
          'Private professional guide',
          'Luxury full board accommodation',
          'Private game drives',
          'Premium 4x4 vehicle',
          'Butler service',
          'Cultural experiences'
        ],
        rating: 4.8
      },
      {
        id: 'JT038',
        name: 'Splendours of Kenya 4x4 (Luxury)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 2549.55, singleSupplement: 549.70 },
          midSeason1: { period: '01.04-30.06.2025', price: 2351.75, singleSupplement: 463.45 },
          peakSeason: { period: '01.07-31.10.2025', price: 2922.15, singleSupplement: 696.90 },
          midSeason2: { period: '01.11-15.12.2025', price: 2535.75, singleSupplement: 541.65 }
        },
        highlights: ['Kenya focus', 'Premium locations', 'Personalized itinerary', 'Exclusive access'],
        accommodationType: '5-star lodges and boutique camps',
        packageIncludes: [
          'All park fees',
          'Private professional guide',
          'Luxury full board accommodation',
          'Private game drives',
          'Premium 4x4 vehicle',
          'Butler service',
          'Exclusive activities'
        ],
        rating: 4.7
      },
      {
        id: 'JT039',
        name: 'Wings over Kenya (Luxury)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 8208.70, singleSupplement: 3048.65 },
          midSeason1: { period: '01.04-30.06.2025', price: 8015.50, singleSupplement: 2898.00 },
          peakSeason: { period: '01.07-31.10.2025', price: 9520.85, singleSupplement: 3684.60 },
          midSeason2: { period: '01.11-15.12.2025', price: 6637.80, singleSupplement: 1335.15 }
        },
        highlights: ['Private air transfers', 'Exclusive lodges', 'Helicopter safaris', 'Premium service'],
        accommodationType: '5-star lodges and boutique camps',
        packageIncludes: [
          'All park fees',
          'Private professional guide',
          'Luxury full board accommodation',
          'Private air transfers',
          'Helicopter game viewing',
          'Butler service',
          'Exclusive activities'
        ],
        rating: 5.0
      },
      {
        id: 'JT040',
        name: 'Memories of Kenya (Luxury)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 7109.30, singleSupplement: 2385.10 },
          midSeason1: { period: '01.04-30.06.2025', price: 6840.20, singleSupplement: 2116.00 },
          peakSeason: { period: '01.07-31.10.2025', price: 7711.90, singleSupplement: 2829.00 },
          midSeason2: { period: '01.11-15.12.2025', price: 6852.85, singleSupplement: 2248.25 }
        },
        highlights: ['Signature experiences', 'Private guides', 'Premium locations', 'Personalized service'],
        accommodationType: '5-star lodges and boutique camps',
        packageIncludes: [
          'All park fees',
          'Private professional guide',
          'Luxury full board accommodation',
          'Private game drives',
          'Premium transport',
          'Butler service',
          'Signature experiences'
        ],
        rating: 4.9
      },
      {
        id: 'JT041',
        name: 'The Ultimate Tanzania Safari (Luxury)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 7732.60, singleSupplement: 2250.55 },
          midSeason1: { period: '01.04-30.06.2025', price: 7732.60, singleSupplement: 2250.55 },
          peakSeason: { period: '01.07-31.10.2025', price: 8192.60, singleSupplement: 2486.30 },
          midSeason2: { period: '01.11-15.12.2025', price: 7732.60, singleSupplement: 2250.55 }
        },
        highlights: ['Tanzania focus', 'Private guides', 'Premium locations', 'Exclusive access'],
        accommodationType: '5-star lodges and boutique camps',
        packageIncludes: [
          'All park fees',
          'Private professional guide',
          'Luxury full board accommodation',
          'Private game drives',
          'Premium transport',
          'Butler service',
          'Exclusive activities'
        ],
        rating: 5.0
      },
      {
        id: 'JT042',
        name: 'Wings Over Kenya & Tanzania Safari (Luxury)',
        duration: 'Varies by season',
        groupSize: '2+ guests',
        seasonality: {
          highSeason: { period: '02.01-30.03.2025', price: 12973.15, singleSupplement: 3960.60 },
          midSeason1: { period: '01.04-30.06.2025', price: 11399.95, singleSupplement: 3243.00 },
          peakSeason: { period: '01.07-31.10.2025', price: 13031.80, singleSupplement: 4073.30 },
          midSeason2: { period: '01.11-15.12.2025', price: 9911.85, singleSupplement: 853.30 }
        },
        highlights: ['Multi-country experience', 'Private air transfers', 'Exclusive lodges', 'Premium service'],
        accommodationType: '5-star lodges and boutique camps',
        packageIncludes: [
          'All park fees',
          'Private professional guide',
          'Luxury full board accommodation',
          'Private air transfers',
          'Helicopter game viewing',
          'Butler service',
          'Exclusive activities'
        ],
        rating: 5.0
      }
    ]
  };

const PriceList = ({}) => {


  const [activeTab, setActiveTab] = useState('kenya');
  const [expandedPackage, setExpandedPackage] = useState(null);
  const [sortBy, setSortBy] = useState('default');
  const [priceRange, setPriceRange] = useState([0, 15000]);
  const [searchTerm, setSearchTerm] = useState('');
  const [compareList, setCompareList] = useState([]);
  const [showCompare, setShowCompare] = useState(false);

  const togglePackage = (id) => {
    setExpandedPackage(expandedPackage === id ? null : id);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setExpandedPackage(null);
    setCompareList([]);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  const toggleCompare = (pkgId) => {
    if (compareList.includes(pkgId)) {
      setCompareList(compareList.filter(id => id !== pkgId));
    } else {
      if (compareList.length < 3) {
        setCompareList([...compareList, pkgId]);
      } else {
        alert('You can compare maximum 3 packages at once');
      }
    }
  };

  const handleDownload = (packageId, packageName) => {
    // In a real implementation, you would use the package ID to fetch the correct PDF
    const pdfUrl = `/brochures/${activeTab}/${packageId}.pdf`;
    
    // Create a temporary anchor element to trigger the download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', `${packageName.replace(/\s+/g, '-').toLowerCase()}-itinerary.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // In a real implementation, you might want to track downloads
    console.log(`Downloaded brochure for ${packageName}`);
  };

  const getMinPrice = (pkg) => {
    if (activeTab === 'kilimanjaro') {
      return Math.min(
        pkg.seasonality.privateClimb.price['6day'],
        pkg.seasonality.groupClimb.price['6day']['1person']
      );
    } else if (activeTab === 'rwanda') {
      return Math.min(
        pkg.seasonality.highSeason?.price || Infinity,
        pkg.seasonality.lowSeason?.price || Infinity,
        pkg.seasonality.allYear1?.price || Infinity,
        pkg.seasonality.allYear2?.price || Infinity,
        pkg.seasonality.option1?.price || Infinity,
        pkg.seasonality.option2?.price || Infinity
      );
    } else {
      // Handle cases where some seasons might be missing
      return Math.min(
        pkg.seasonality.highSeason?.price || Infinity,
        pkg.seasonality.midSeason1?.price || Infinity,
        pkg.seasonality.peakSeason?.price || Infinity,
        pkg.seasonality.midSeason2?.price || Infinity
      );
    }
  };

  const filteredPackages = pricingData[activeTab]
    ?.filter(pkg => {
      // Filter by search term
      if (searchTerm && !pkg.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      // Filter by price range
      let minPrice = getMinPrice(pkg);
      let maxPrice;
      
      if (activeTab === 'kilimanjaro') {
        maxPrice = Math.max(
          pkg.seasonality.privateClimb.price['9day'] || 0,
          pkg.seasonality.groupClimb.price['9day']?.['6-10persons'] || 0
        );
      } else if (activeTab === 'rwanda') {
        maxPrice = Math.max(
          pkg.seasonality.highSeason?.price || 0,
          pkg.seasonality.lowSeason?.price || 0,
          pkg.seasonality.allYear1?.price || 0,
          pkg.seasonality.allYear2?.price || 0,
          pkg.seasonality.option1?.price || 0,
          pkg.seasonality.option2?.price || 0
        );
      } else {
        maxPrice = Math.max(
          pkg.seasonality.highSeason?.price || 0,
          pkg.seasonality.midSeason1?.price || 0,
          pkg.seasonality.peakSeason?.price || 0,
          pkg.seasonality.midSeason2?.price || 0
        );
      }
      
      return minPrice >= priceRange[0] && maxPrice <= priceRange[1];
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') {
        return getMinPrice(a) - getMinPrice(b);
      } else if (sortBy === 'price-desc') {
        return getMinPrice(b) - getMinPrice(a);
      } else if (sortBy === 'rating') {
        return b.rating - a.rating;
      } else if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0; // default sort
    }) || [];

  const renderSeasonality = (pkg) => {
    if (activeTab === 'kilimanjaro') {
      return (
        <div className="mt-4">
          <h4 className="font-semibold text-gray-700 mb-2">Private Climb:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600">6 Day Climb: {formatPrice(pkg.seasonality.privateClimb.price['6day'])}</p>
              <p className="text-sm text-gray-600">7 Day Climb: {formatPrice(pkg.seasonality.privateClimb.price['7day'])}</p>
              {pkg.seasonality.privateClimb.price['8day'] && (
                <p className="text-sm text-gray-600">8 Day Climb: {formatPrice(pkg.seasonality.privateClimb.price['8day'])}</p>
              )}
              {pkg.seasonality.privateClimb.price['9day'] && (
                <p className="text-sm text-gray-600">9 Day Climb: {formatPrice(pkg.seasonality.privateClimb.price['9day'])}</p>
              )}
            </div>
          </div>

          <h4 className="font-semibold text-gray-700 mb-2">Group Climb:</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Duration</th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">1 Person</th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">2-5 Persons</th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">6-10 Persons</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">6 Day</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.seasonality.groupClimb.price['6day']['1person'])}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.seasonality.groupClimb.price['6day']['2-5persons'])}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.seasonality.groupClimb.price['6day']['6-10persons'])}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">7 Day</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.seasonality.groupClimb.price['7day']['1person'])}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.seasonality.groupClimb.price['7day']['2-5persons'])}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.seasonality.groupClimb.price['7day']['6-10persons'])}</td>
                </tr>
                {pkg.seasonality.groupClimb.price['8day'] && (
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">8 Day</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.seasonality.groupClimb.price['8day']['1person'])}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.seasonality.groupClimb.price['8day']['2-5persons'])}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.seasonality.groupClimb.price['8day']['6-10persons'])}</td>
                  </tr>
                )}
                {pkg.seasonality.groupClimb.price['9day'] && (
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">9 Day</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.seasonality.groupClimb.price['9day']['1person'])}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.seasonality.groupClimb.price['9day']['2-5persons'])}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.seasonality.groupClimb.price['9day']['6-10persons'])}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {pkg.additionalInfo && (
            <div className="mt-4">
              <h4 className="font-semibold text-gray-700 mb-2">Additional Information:</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                {pkg.additionalInfo.leaderRate && (
                  <li>11th person (four leader) Rate: {formatPrice(pkg.additionalInfo.leaderRate['6day'])} (6-Day), {formatPrice(pkg.additionalInfo.leaderRate['7day'])} (7-Day)</li>
                )}
                {pkg.additionalInfo.additionalNight && (
                  <li>Cost of an additional Day/Night on the Mountain: {formatPrice(pkg.additionalInfo.additionalNight)}</li>
                )}
                {pkg.additionalInfo.childrenDiscount && (
                  <li>{pkg.additionalInfo.childrenDiscount}</li>
                )}
              </ul>
            </div>
          )}
        </div>
      );
    } else if (activeTab === 'rwanda') {
      return (
        <div className="mt-4">
          <h4 className="font-semibold text-gray-700 mb-2">Pricing Options:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pkg.seasonality.highSeason && (
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-medium text-gray-800">High Season: {pkg.seasonality.highSeason.period}</p>
                <p className="text-sm text-gray-600">Per Person: {formatPrice(pkg.seasonality.highSeason.price)}</p>
                <p className="text-sm text-gray-600">Single Supplement: {formatPrice(pkg.seasonality.highSeason.singleSupplement)}</p>
              </div>
            )}
            {pkg.seasonality.lowSeason && (
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-medium text-gray-800">Low Season: {pkg.seasonality.lowSeason.period}</p>
                <p className="text-sm text-gray-600">Per Person: {formatPrice(pkg.seasonality.lowSeason.price)}</p>
                <p className="text-sm text-gray-600">Single Supplement: {formatPrice(pkg.seasonality.lowSeason.singleSupplement)}</p>
              </div>
            )}
            {pkg.seasonality.allYear1 && (
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-medium text-gray-800">All Year (Option 1): {pkg.seasonality.allYear1.period}</p>
                <p className="text-sm text-gray-600">Per Person: {formatPrice(pkg.seasonality.allYear1.price)}</p>
                <p className="text-sm text-gray-600">Single Supplement: {formatPrice(pkg.seasonality.allYear1.singleSupplement)}</p>
              </div>
            )}
            {pkg.seasonality.allYear2 && (
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-medium text-gray-800">All Year (Option 2): {pkg.seasonality.allYear2.period}</p>
                <p className="text-sm text-gray-600">Per Person: {formatPrice(pkg.seasonality.allYear2.price)}</p>
                <p className="text-sm text-gray-600">Single Supplement: {formatPrice(pkg.seasonality.allYear2.singleSupplement)}</p>
              </div>
            )}
            {pkg.seasonality.option1 && (
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-medium text-gray-800">Option 1: {pkg.seasonality.option1.period}</p>
                <p className="text-sm text-gray-600">Per Person: {formatPrice(pkg.seasonality.option1.price)}</p>
                <p className="text-sm text-gray-600">Single Supplement: {formatPrice(pkg.seasonality.option1.singleSupplement)}</p>
              </div>
            )}
            {pkg.seasonality.option2 && (
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-medium text-gray-800">Option 2: {pkg.seasonality.option2.period}</p>
                <p className="text-sm text-gray-600">Per Person: {formatPrice(pkg.seasonality.option2.price)}</p>
                <p className="text-sm text-gray-600">Single Supplement: {formatPrice(pkg.seasonality.option2.singleSupplement)}</p>
              </div>
            )}
          </div>

          {pkg.permitFees && (
            <div className="mt-4">
              <h4 className="font-semibold text-gray-700 mb-2">Activity Permit Fees:</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Activity</th>
                      <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Location</th>
                      <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Fee (USD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pkg.permitFees.chimpsTrek && (
                      <tr>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Chimps Trek</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Nyungwe Forest</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.permitFees.chimpsTrek)}</td>
                      </tr>
                    )}
                    {pkg.permitFees.canopyHike && (
                      <tr>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Canopy Hike</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Nyungwe Forest</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.permitFees.canopyHike)}</td>
                      </tr>
                    )}
                    {pkg.permitFees.colobusMonkeys && (
                      <tr>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Colobus Monkeys</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Nyungwe Forest</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.permitFees.colobusMonkeys)}</td>
                      </tr>
                    )}
                    {pkg.permitFees.waterfallHike && (
                      <tr>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Waterfall Hike</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Nyungwe Forest</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.permitFees.waterfallHike)}</td>
                      </tr>
                    )}
                    {pkg.permitFees.boatTransfer && (
                      <tr>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Boat Transfer</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Gisenyi/Cyangugu</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.permitFees.boatTransfer)} per boat (6-7 pax capacity)</td>
                      </tr>
                    )}
                    {pkg.permitFees.gorillaTrek && (
                      <tr>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Gorilla Trek</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Volcanoes Park</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.permitFees.gorillaTrek)} per person</td>
                      </tr>
                    )}
                    {pkg.permitFees.goldenMonkeyTrek && (
                      <tr>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Golden Monkey Trek</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Volcanoes Park</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.permitFees.goldenMonkeyTrek)} per person</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div className="mt-4">
          <h4 className="font-semibold text-gray-700 mb-2">Seasonal Pricing:</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Season</th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Per Person Sharing</th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Single Supplement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{pkg.seasonality.highSeason.period}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.seasonality.highSeason.price)}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.seasonality.highSeason.singleSupplement)}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{pkg.seasonality.midSeason1.period}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.seasonality.midSeason1.price)}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.seasonality.midSeason1.singleSupplement)}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{pkg.seasonality.peakSeason.period}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.seasonality.peakSeason.price)}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.seasonality.peakSeason.singleSupplement)}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{pkg.seasonality.midSeason2.period}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.seasonality.midSeason2.price)}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{formatPrice(pkg.seasonality.midSeason2.singleSupplement)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  };

  // Select packages for comparison
  const packagesToCompare = compareList.length > 0
    ? pricingData[activeTab].filter(pkg => compareList.includes(pkg.id))
    : [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Jambo Travel House</h1>
        <h2 className="text-2xl font-semibold text-amber-600">2025 Price List</h2>
        <p className="text-gray-600 mt-2">Your Tour Operator in East Africa</p>
      </div>

      {/* Introduction section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">About Our Pricing</h3>
        <p className="text-gray-600 mb-4">
          At Jambo Travel House, we offer competitive and transparent pricing for all our safari packages. 
          All prices are quoted in USD and include accommodations, meals as specified, park fees, and transportation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">What's Included</h4>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>Professional safari guides</li>
              <li>All park entrance fees</li>
              <li>Full board accommodation during safari</li>
              <li>Transportation in 4x4 safari vehicle</li>
              <li>Bottled water during game drives</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">What's Not Included</h4>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>International flights</li>
              <li>Travel insurance</li>
              <li>Visa fees</li>
              <li>Personal expenses and gratuities</li>
              <li>Optional activities not specified</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main pricing filter area */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            <button
              onClick={() => handleTabChange('kenya')}
              className={`px-4 py-2 rounded-md font-medium flex-shrink-0 ${
                activeTab === 'kenya' 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Kenya Safaris
            </button>
            <button
              onClick={() => handleTabChange('tanzania')}
              className={`px-4 py-2 rounded-md font-medium flex-shrink-0 ${
                activeTab === 'tanzania' 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Tanzania Safaris
            </button>
            <button
              onClick={() => handleTabChange('rwanda')}
              className={`px-4 py-2 rounded-md font-medium flex-shrink-0 ${
                activeTab === 'rwanda' 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Rwanda Safaris
            </button>
            <button
              onClick={() => handleTabChange('kilimanjaro')}
              className={`px-4 py-2 rounded-md font-medium flex-shrink-0 ${
                activeTab === 'kilimanjaro' 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Kilimanjaro Climbs
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search packages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md pr-10"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <div className="relative w-full md:w-auto">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md appearance-none pr-10"
              >
                <option value="default">Sort By</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
                <option value="name">Name</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
        </div>

        {/* Price range filter */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Filter size={18} className="text-gray-600" />
            <h4 className="font-medium text-gray-700">Price Range: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}</h4>
          </div>
          <input
            type="range"
            min="0"
            max="15000"
            step="500"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mb-2"
          />
          <input
            type="range"
            min="0"
            max="15000"
            step="500"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Compare section */}
        {compareList.length > 0 && (
          <div className="mb-6 bg-amber-50 p-4 rounded-lg border border-amber-200">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-medium text-gray-700 flex items-center gap-2">
                <GitCompare size={18} className="text-amber-600" />
                Compare Packages ({compareList.length}/3)
              </h4>
              <button 
                onClick={() => setShowCompare(!showCompare)}
                className="text-amber-600 hover:text-amber-700 flex items-center gap-1 text-sm font-medium"
              >
                {showCompare ? 'Hide' : 'View'} Comparison
                {showCompare ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </div>
            {showCompare && (
              <div className="overflow-x-auto bg-white p-4 rounded-lg border border-gray-200">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Feature</th>
                      {packagesToCompare.map(pkg => (
                        <th key={pkg.id} className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          {pkg.name}
                          <button 
                            onClick={() => toggleCompare(pkg.id)}
                            className="ml-2 text-red-500 hover:text-red-700"
                          >
                            ✕
                          </button>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-gray-700">Duration</td>
                      {packagesToCompare.map(pkg => (
                        <td key={pkg.id} className="py-2 px-4 border-b border-gray-200 text-sm text-gray-600">
                          {pkg.duration} days
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-gray-700">Starting Price</td>
                      {packagesToCompare.map(pkg => (
                        <td key={pkg.id} className="py-2 px-4 border-b border-gray-200 text-sm text-gray-600">
                          {formatPrice(getMinPrice(pkg))}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-gray-700">Rating</td>
                      {packagesToCompare.map(pkg => (
                        <td key={pkg.id} className="py-2 px-4 border-b border-gray-200 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Star className="text-amber-400 fill-amber-400" size={16} />
                            <span className="ml-1">{pkg.rating.toFixed(1)}/5</span>
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-gray-700">Group Size</td>
                      {packagesToCompare.map(pkg => (
                        <td key={pkg.id} className="py-2 px-4 border-b border-gray-200 text-sm text-gray-600">
                          {pkg.groupSize}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-gray-700">Accommodation</td>
                      {packagesToCompare.map(pkg => (
                        <td key={pkg.id} className="py-2 px-4 border-b border-gray-200 text-sm text-gray-600">
                          {pkg.accommodationType}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-gray-200 text-sm font-medium text-gray-700">Action</td>
                      {packagesToCompare.map(pkg => (
                        <td key={pkg.id} className="py-2 px-4 border-gray-200 text-sm text-gray-600">
                          <button 
                            onClick={() => handleDownload(pkg.id, pkg.name)}
                            className="bg-amber-600 text-white px-3 py-1 rounded-md text-sm flex items-center gap-1 hover:bg-amber-700"
                          >
                            <Download size={14} />
                            Download
                          </button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Package list */}
        <div>
          {filteredPackages.length === 0 ? (
            <div className="text-center py-10 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No packages found matching your criteria.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setPriceRange([0, 15000]);
                  setSortBy('default');
                }}
                className="mt-3 text-amber-600 hover:text-amber-700"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredPackages.map((pkg) => (
                <div 
                  key={pkg.id} 
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white transition-all duration-200"
                >
                  <div 
                    className="flex flex-col md:flex-row justify-between items-start p-4 cursor-pointer hover:bg-gray-50"
                    onClick={() => togglePackage(pkg.id)}
                  >
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full">
                      {pkg.featured && (
                        <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                          Featured
                        </span>
                      )}
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-800">{pkg.name}</h3>
                        <div className="flex items-center mt-1">
                          <span className="text-sm text-gray-600 mr-4">
                            <Calendar size={16} className="inline mr-1" /> {pkg.duration} days
                          </span>
                          <span className="text-sm text-gray-600 mr-4">
                            <Users size={16} className="inline mr-1" /> {pkg.groupSize}
                          </span>
                          <div className="flex items-center">
                            <Star className="text-amber-400 fill-amber-400" size={16} />
                            <span className="ml-1 text-sm text-gray-600">{pkg.rating.toFixed(1)}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end mt-3 md:mt-0">
                        <span className="text-sm text-gray-500">From</span>
                        <span className="text-xl font-bold text-amber-600">{formatPrice(getMinPrice(pkg))}</span>
                        <span className="text-xs text-gray-500">per person</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 mt-3 md:mt-0 w-full md:w-auto">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCompare(pkg.id);
                        }}
                        className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm font-medium ${
                          compareList.includes(pkg.id)
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <GitCompare size={14} />
                        {compareList.includes(pkg.id) ? 'Remove' : 'Compare'}
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownload(pkg.id, pkg.name);
                        }}
                        className="flex items-center gap-1 px-3 py-1 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        <Download size={14} />
                        PDF
                      </button>
                      {expandedPackage === pkg.id ? (
                        <ChevronUp className="text-gray-500" size={20} />
                      ) : (
                        <ChevronDown className="text-gray-500" size={20} />
                      )}
                    </div>
                  </div>
                  
                  {expandedPackage === pkg.id && (
                    <div className="p-4 border-t border-gray-200 bg-gray-50">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">Description</h4>
                          <p className="text-sm text-gray-600">{pkg.description}</p>
                          <div className="mt-4">
                            <h5 className="font-medium text-gray-700 mb-1">Accommodation:</h5>
                            <p className="text-sm text-gray-600">{pkg.accommodationType}</p>
                          </div>
                          <div className="mt-2">
                            <h5 className="font-medium text-gray-700 mb-1">Activities Included:</h5>
                            <ul className="list-disc pl-5 text-sm text-gray-600">
                              {pkg.activities.map((activity, idx) => (
                                <li key={idx}>{activity}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">Highlights</h4>
                          <ul className="list-disc pl-5 text-sm text-gray-600">
                            {pkg.highlights.map((highlight, idx) => (
                              <li key={idx}>{highlight}</li>
                            ))}
                          </ul>
                          
                          {pkg.itineraryHighlights && (
                            <div className="mt-4">
                              <h5 className="font-medium text-gray-700 mb-1">Itinerary Overview:</h5>
                              <ul className="list-none pl-0 text-sm text-gray-600">
                                {pkg.itineraryHighlights.map((day, idx) => (
                                  <li key={idx} className="mb-1">
                                    <span className="font-medium">Day {day.day}:</span> {day.description}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {renderSeasonality(pkg)}
                      
                      <div className="mt-6 flex justify-end">
                        <button
                          onClick={() => handleDownload(pkg.id, pkg.name)}
                          className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-md font-medium hover:bg-amber-700"
                        >
                          <ArrowDownCircle size={18} />
                          Download Full Itinerary
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-700 mb-1">How do I book a safari?</h4>
            <p className="text-sm text-gray-600">
              Booking is simple! Just select your preferred package, fill out our booking form, and pay a 20% deposit to secure your dates.
              Our team will contact you within 24 hours to confirm your booking and provide additional information.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-1">What is your cancellation policy?</h4>
            <p className="text-sm text-gray-600">
              We understand plans can change. Cancellations made 60+ days before arrival receive a full refund minus a $100 admin fee.
              Cancellations 30-59 days before arrival forfeit the deposit. Cancellations less than 30 days before arrival are non-refundable.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-1">Can I customize my safari?</h4>
            <p className="text-sm text-gray-600">
              Absolutely! All our packages can be customized to match your preferences, timeframe, and budget.
              Contact us to create your perfect East African adventure.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-1">When is the best time to visit?</h4>
            <p className="text-sm text-gray-600">
              The best time depends on what you want to see. For the Great Migration in Kenya, visit between July and October.
              Tanzania's Serengeti is excellent year-round, with the migration there from December to July.
              Gorilla trekking in Rwanda is possible year-round, with slightly better conditions during dry seasons (June-September and December-February).
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-1">What's included in the price?</h4>
            <p className="text-sm text-gray-600">
              Our prices include accommodations, meals as specified in the itinerary, park fees, game drives, and transportation.
              International flights, visa fees, travel insurance, and personal expenses are not included.
              See each package for specific inclusions.
            </p>
          </div>
        </div>
      </div>

      {/* Request Custom Quote */}
      <div className="bg-amber-50 rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Need a Custom Safari Package?</h3>
        <p className="text-gray-600 mb-4">
          We understand that every traveler is unique. Our team can create a custom itinerary tailored to your preferences,
          time constraints, and budget. Tell us what you're dreaming of!
        </p>
        <button className="px-4 py-2 bg-amber-600 text-white rounded-md font-medium hover:bg-amber-700">
          Request Custom Quote
        </button>
      </div>
    </div>
  );
};

export default PriceList;
              