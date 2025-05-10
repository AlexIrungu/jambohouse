// Comprehensive hotel data with all hotels from the provided list
export const hotelData = [
    {
        id: 1,
        name: "AA LODGES",
        location: "Kenya",
        rating: 4.6,
        category: "Safari",
        description: "Luxury safari lodges offering authentic wilderness experiences across Kenya's national parks.",
        amenities: ["Swimming Pool", "Restaurant", "Game Drives", "Wi-Fi"],
        priceCategory: "Premium",
        imageUrl: "https://aalodges.com/wp-content/uploads/2015/04/aa-mara.jpg",
        featured: true,
        hasContractRates: true,
        contractRates: {
          masaiMara: {
            nonResident: {
              classicChalets: {
                peak: { single: 230, twin: 360, triple: 460 },
                shoulder: { single: 145, twin: 230, triple: 295 },
                low: { single: 100, twin: 155, triple: 200 },
                christmas: { single: 230, twin: 360, triple: 460 }
              },
              familySuite: {
                peak: 750,
                shoulder: 490,
                low: 340,
                christmas: 750
              },
              suiteDeluxe: {
                peak: 390,
                shoulder: 260,
                low: 185,
                christmas: 390
              }
            },
            resident: {
              classicChalets: {
                peak: { single: 30000, twin: 46800, triple: 59800 },
                shoulder: { single: 18850, twin: 30000, triple: 38350 },
                low: { single: 13000, twin: 20150, triple: 26000 },
                christmas: { single: 30000, twin: 46800, triple: 59800 }
              }
            }
          },
          amboseli: {
            nonResident: {
              lodgeTents: {
                peak: { single: 150, twin: 250, triple: 320 },
                shoulder: { single: 140, twin: 210, triple: 280 },
                low: { single: 110, twin: 165, triple: 210 },
                christmas: { single: 150, twin: 250, triple: 320 }
              }
            },
            resident: {
              lodgeTents: {
                peak: { single: 19500, twin: 32500, triple: 41600 },
                shoulder: { single: 18200, twin: 27300, triple: 36400 },
                low: { single: 14300, twin: 21450, triple: 27300 },
                christmas: { single: 19500, twin: 32500, triple: 41600 }
              }
            }
          },
          extras: {
            tourLeader: 45,
            natureWalk: 30,
            bushDinner: 50,
            bushBreakfast: 30,
            gameDrive: 60,
            roomUpgrade: 50,
            extraDinner: 50,
            extraLunch: 30,
            picnicLunch: 25,
            honeymoonSupplement: 60,
            gardenBreakfast: 30,
            halfBoardDeduction: 5
          }
        }
      },
      {
        id: 2,
        name: "Air Excel Partner",
        location: "Tanzania",
        rating: 4.2,
        category: "Regional Airline",
        description: "Regional airline offering scheduled flights connecting major tourist destinations across Tanzania.",
        amenities: ["Scheduled Flights", "Luggage Allowance", "Connecting Flights", "Road Transfers"],
        priceCategory: "Premium",
        imageUrl: "https://storage.aerocrs.com/3/system/ELEMENT%20Cessna%20Grand%20Caravan%205H-VAN.png",
        featured: true,
        hasContractRates: true,
        contractRates: {
          routes: {
            arusha: {
              chemChem: {
                adultRate: 156,
                childRate: 109.20,
                taxes: 55,
                minimum: "2 seats"
              },
              dar: {
                adultRate: 350,
                childRate: 245.00,
                taxes: 25,
                season: "Year round"
              },
              fortIsoma: {
                adultRate: 277,
                childRate: 193.90,
                taxes: 25,
                season: "Jan - May"
              },
              grumeti: {
                adultRate: 277,
                childRate: 193.90,
                taxes: 25,
                season: "Year round"
              },
              kogakurura: {
                adultRate: 287,
                childRate: 200.90,
                taxes: 25,
                season: "June - November"
              },
              kuro: {
                adultRate: 156,
                childRate: 109.20,
                taxes: 25,
                season: "Year round"
              },
              lamai: {
                adultRate: 334,
                childRate: 233.80,
                taxes: 25,
                season: "June - November"
              },
              lobo: {
                adultRate: 277,
                childRate: 193.90,
                taxes: 25,
                season: "June - November"
              },
              loliondo: {
                adultRate: 242,
                childRate: 169.40,
                taxes: 25,
                minimum: "4 seats"
              },
              manyara: {
                adultRate: 113,
                childRate: 79.10,
                taxes: 25,
                season: "Year round"
              },
              migori: {
                adultRate: 600,
                childRate: 420.00,
                taxes: 25,
                "notes": "Road transfer to Migori included, minimum 2 seats. All immigration fees & visa requirements are excluded & payable by the passenger directly to the Border Authorities."
              },
              mwiba: {
                adultRate: 330,
                childRate: 231.00,
                taxes: 25,
                season: "Jan-Mar, June-Dec"
              },
              ndutu: {
                adultRate: 274,
                childRate: 191.80,
                taxes: 25,
                season: "December - March"
              },
              sasakwa: {
                adultRate: 277,
                childRate: 193.90,
                taxes: 25,
                season: "Year round"
              },
              serengetiSouth: {
                adultRate: 282,
                childRate: 197.40,
                taxes: 25,
                season: "December - March"
              },
              seronera: {
                adultRate: 164,
                childRate: 114.80,
                taxes: 25,
                season: "Year round"
              },
              tarime: {
                adultRate: 495,
                childRate: 346.50,
                taxes: 25,
                notes: "Road transfer to Migori not included, minimum 2 seats."
              },
              zanzibar: {
                adultRate: 316,
                childRate: 221.20,
                taxes: 25,
                season: "Year round"
              }
            }
          },
          policies: {
            luggageAllowance: "20 kg (inclusive of all hand luggage, cameras, checked luggage, laptops, etc)",
            childrenPolicy: "Children under 14 years travel at 70% of the adult rate.",
            connectingFlights: "We connect with domestic and international flights. For details contact our office.",
            specialRoutes: "On request. Minimum of 2 or 4 seats. Timings to be confirmed on a case-by-case basis.",
            seasonalNotes: "Destinations are seasonal and timings may fluctuate throughout the year. Due to demand, all routes may not be available on each day.",
            timingNotes: "All times are estimates and depend on the final route on the actual day. Please reconfirm the times with our office the day prior departure."
          },
          "destinations": {
            arusha: "ARS",
            chemChem: "CHM",
            dar: "DAR",
            fortIsoma: "FRT",
            grumeti: "GRU",
            kogakurura: "KOG",
            kuro: "KUR",
            lamai: "LAM",
            lobo: "LOB",
            loliondo: "LOL",
            manyara: "MAN/MYA",
            migori: "MIG",
            mwiba: "MWI",
            ndutu: "NDT",
            sasakwa: "SAS",
            serengetiSouth: "SGS",
            seronera: "SER",
            tarime: "TME",
            zanzibar: "ZNZ"
          },
          contactInfo: {
            reservations: "reservations@airexcelonline.co.tz",
            phoneNumbers: ["+255(0)739 102 546", "+255(0)754 211 227"]
          },
          validityPeriod: "01 June 2025 till 31 May 2027"
        }
      },
      {
        id: 3,
        name: "Ahadi Lodge",
        location: "Arusha, Tanzania",
        rating: 4.2,
        category: "Lodge",
        description: "Situated in the village of Morovian, Arusha – 300 meters from the Moshi/Nairobi Road, approximately 3 km from the center of town. A peaceful stay full of traditional cultures, tantalizing cuisine, heartfelt smiles, and true Tanzanian hospitality.",
        amenities: ["Swimming Pool", "Free Wi-Fi", "Restaurant", "Tea/Coffee Making Facilities", "Television", "Garden"],
        priceCategory: "Mid-range",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/ae/7b/13/ahadi-lodge.jpg?w=700&h=400&s=1",
        featured: false,
        hasContractRates: true,
        contractRates: {
          accommodation: {
            STO: {
              lowSeason: {
                doubleOrTwin: {
                  pax1: 80,
                  pax2: 100
                },
                family: {
                  pax1: 80,
                  pax2: 100,
                  pax3: 120,
                  pax4: 140
                }
              },
              highSeason: {
                doubleOrTwin: {
                  pax1: 105,
                  pax2: 150
                },
                family: {
                  pax1: 105,
                  pax2: 150,
                  pax3: 190,
                  pax4: 235
                }
              },
              peakSeason: {
                doubleOrTwin: {
                  pax1: 120,
                  pax2: 185
                },
                family: {
                  pax1: 120,
                  pax2: 185,
                  pax3: 245,
                  pax4: 310
                }
              }
            },
            BB: {
              lowSeason: {
                doubleOrTwin: {
                  pax1: 95,
                  pax2: 120
                },
                family: {
                  pax1: 95,
                  pax2: 120,
                  pax3: 150,
                  pax4: 185
                }
              },
              highSeason: {
                doubleOrTwin: {
                  pax1: 115,
                  pax2: 170
                },
                family: {
                  pax1: 115,
                  pax2: 170,
                  pax3: 220,
                  pax4: 275
                }
              },
              peakSeason: {
                doubleOrTwin: {
                  pax1: 105,
                  pax2: 145
                },
                family: {
                  pax1: 105,
                  pax2: 145,
                  pax3: 190,
                  pax4: 230
                }
              }
            },
            FB: {
              lowSeason: {
                doubleOrTwin: {
                  pax1: 140,
                  pax2: 205
                },
                family: {
                  pax1: 140,
                  pax2: 205,
                  pax3: 280,
                  pax4: 350
                }
              },
              highSeason: {
                doubleOrTwin: {
                  pax1: 130,
                  pax2: 195
                },
                family: {
                  pax1: 130,
                  pax2: 195,
                  pax3: 260,
                  pax4: 295
                }
              },
              peakSeason: {
                doubleOrTwin: {
                  pax1: 150,
                  pax2: 235
                },
                family: {
                  pax1: 150,
                  pax2: 235,
                  pax3: 315,
                  pax4: 395
                }
              }
            }
          },
          extras: {
            packedLunch: 15,
            childRates: {
              under2: "Free of Charge",
              between3And12: "50% of adult rate",
              above13: "Full adult rate"
            },
            tourLeaderPolicy: "Free room for tour leader with groups of 15+ paying guests, subject to availability"
          },
          policies: {
            payment: "Full payment required 30 days before arrival",
            cancellation: {
              "90-45days": "50% cancellation fee",
              "44-21days": "75% cancellation fee",
              "under21days": "100% cancellation fee"
            },
            provisional: "Subject to availability, 100% cancellation fee for fully booked properties not canceled"
          },
          seasonality: {
            lowSeason: "March, April, May",
            highSeason: "Rest of year",
            peakSeason: "December, July, August"
          }
        },
        details: {
          structure: "5 Rondavel style cottages each containing 2 rooms plus additional 2 rooms",
          rooms: {
            double: 5,
            twin: 5,
            triple: 2
          },
          roomFeatures: ["Television", "Free Wi-Fi", "Tea/Coffee Making Facilities"]
        }
      },
    {
      id: 5,
      name: "Almanar Diani",
      location: "Diani Beach, Kenya",
      rating: 4.3,
      category: "Beach Resort",
      description: "Beachfront resort with stunning views of the Indian Ocean in Diani.",
      amenities: ["Private Beach", "Swimming Pool", "Restaurant", "Water Sports"],
      priceCategory: "Mid-range",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/fe/5f/11/almanara-luxury-villas.jpg?w=900&h=-1&s=1"
    },
    {
        id: 6,
        name: "Ashnil Hotels",
        location: "Multiple Locations, Kenya",
        rating: 4.7,
        category: "Luxury",
        description: "Collection of luxury hotels and safari camps in prime Kenyan wildlife areas offering a destination with a difference.",
        amenities: ["Swimming Pool", "Restaurant", "Game Drives", "Wi-Fi", "Family Tents", "All-Inclusive Options"],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/e2/ca/b7/room.jpg?w=900&h=500&s=1",
        featured: true,
        hasContractRates: true,
        contractRates: {
          maraCamp: {
            nonResident: {
              halfTwin: {
                peak: 339.00,
                festive: 205.00,
                high: 180.00,
                shoulder: 162.00,
                low: 107.00
              },
              single: {
                peak: 509.00,
                festive: 308.00,
                high: 270.00,
                shoulder: 243.00,
                low: 107.00
              },
              thirdAdult: {
                peak: 271.00,
                festive: 164.00,
                high: 144.00,
                shoulder: 130.00,
                low: 86.00
              }
            },
            releasePeriod: {
              peak: 60,
              festive: 45,
              high: 45,
              shoulder: 30,
              low: 21
            },
            seasonDates: {
              peak: "15 Jul 2025 - 30 Sep 2025",
              festive: "21 Dec 2024 - 02 Jan 2025, 18 Apr 2025 - 21 Apr 2025",
              high: "01 Feb 2025 - 28 Feb 2025, 01 Oct 2025 - 31 Oct 2025",
              shoulder: "03 Jan 2025 - 31 Jan 2025, 01 Mar 2025 - 31 Mar 2025, 16 Jun 2025 - 14 Jul 2025, 01 Nov 2025 - 20 Dec 2025",
              low: "01 Apr 2025 - 17 Apr 2025, 22 Apr 2025 - 15 Jun 2025"
            }
          },
          samburuCamp: {
            nonResident: {
              halfTwin: {
                peak: 195.00,
                high: 169.00,
                shoulder: 135.00,
                low: 84.00
              },
              single: {
                peak: 293.00,
                high: 254.00,
                shoulder: 203.00,
                low: 84.00
              },
              thirdAdult: {
                peak: 156.00,
                high: 135.00,
                shoulder: 108.00,
                low: 67.00
              }
            },
            releasePeriod: {
              peak: 60,
              high: 45,
              shoulder: 30,
              low: 21
            },
            seasonDates: {
              peak: "15 Jul 2025 - 30 Sep 2025",
              high: "21 Dec 2024 - 02 Jan 2025, 18 Apr 2025 - 21 Apr 2025",
              shoulder: "03 Jan 2025 - 31 Mar 2025, 16 Jun 2025 - 14 Jul 2025, 01 Oct 2025 - 20 Dec 2025",
              low: "01 Apr 2025 - 17 Apr 2025, 22 Apr 2025 - 14 Jun 2025"
            }
          },
          aruba: {
            nonResident: {
              halfTwin: {
                high: 112.00,
                low: 81.00
              },
              single: {
                high: 168.00,
                low: 81.00
              },
              thirdAdult: {
                high: 102.00,
                low: 71.00
              }
            },
            releasePeriod: {
              high: 21,
              low: 14
            },
            seasonDates: {
              high: "16 Dec 2024 - 31 Mar 2025, 18 Apr 2025 - 21 Apr 2025, 01 Jul 2025 - 15 Dec 2025",
              low: "01 Apr 2025 - 17 Apr 2025, 22 Apr 2025 - 30 Jun 2025"
            }
          },
          suranaBuffaloSprings: {
            nonResident: {
              halfTwin: {
                peak: 395.00,
                high: 295.00,
                shoulder: 225.00,
                low: 138.00
              },
              single: {
                peak: 593.00,
                high: 443.00,
                shoulder: 338.00,
                low: 138.00
              },
              thirdAdult: {
                peak: 316.00,
                high: 236.00,
                shoulder: 180.00,
                low: 110.00
              }
            },
            releasePeriod: {
              peak: 60,
              high: 45,
              shoulder: 30,
              low: 21
            },
            seasonDates: {
              peak: "15 Jul 2025 - 30 Sep 2025",
              high: "21 Dec 2024 - 02 Jan 2025, 18 Apr 2025 - 21 Apr 2025, 16 Jun 2025 - 14 Jul 2025",
              shoulder: "03 Jan 2025 - 31 Mar 2025, 01 Oct 2025 - 20 Dec 2025",
              low: "01 Apr 2025 - 17 Apr 2025, 22 Apr 2025 - 15 Jun 2024"
            }
          },
          agentRates: {
            samburuAndMaraCamp: {
              low: {
                single: 60,
                double: 120
              },
              highAndShoulder: {
                single: 75,
                double: 150
              }
            },
            arubaLodge: {
              allSeasons: {
                single: 50,
                double: 100
              }
            },
            suranaBuffaloSprings: {
              low: {
                single: 100,
                double: 200
              },
              highAndShoulder: {
                single: 125,
                double: 250
              }
            }
          },
          extras: {
            halfBoardReduction: 5,
            lunch: 25,
            tourLeader: {
              arubaLodge: 50,
              samburuAndMaraCamp: {
                peak: 80,
                other: 50
              },
              suranaBuffaloSprings: {
                peak: 100,
                other: 80
              }
            },
            familyTent: {
              maraCamp: 75,
              suranaBuffaloSprings: 75
            },
            suite6A: 60,
            allInclusiveDrinks: 40,
            tentUpgrade: 30,
            childRates: {
              under3: "Free",
              child4To12WithAdults: "50% of adult rate",
              twoChildrenOwnRoom: "75% of adult rate each",
              threeChildrenOwnRoom: "Full double room rate",
              oneAdultSharingWithChild: "Adult single room rate & child 50% of half twin rate"
            },
            gamePackage: {
              maraCamp: {
                adult: 80,
                child: 60
              },
              samburuCamp: {
                adult: 80,
                child: 60
              },
              aruba: {
                adult: 65,
                child: 45
              },
              suranaBuffaloSprings: {
                adult: 80,
                child: 60
              }
            }
          },
          discounts: {
            circuit: {
              "4Nights": "5% Discount",
              "5Nights": "7.5% Discount"
            },
            group: {
              "30To49Pax": "5% off applicable contract rates",
              "50To99Pax": "7.5% off applicable contract rates"
            }
          },
          cancellationPolicy: {
            peakHighShoulder: {
              "0To15Days": "100%",
              "16To30Days": "50%",
              "31To40Days": "25%"
            },
            lowSeason: {
              "0To7Days": "100%",
              "8To14Days": "50%",
              "15To25Days": "25%"
            }
          },
          paymentTerms: {
            deposit: {
              peak: "40%",
              offPeak: "20%",
              longTerm: "10% + 20%"
            },
            fullPayment: "Required prior to final confirmation"
          }
        },
        termsAndConditions: {
          validity: "Non-residents only, leisure business only",
          distribution: "Not for onward distribution to 3rd-party online travel/hotel booking websites",
          currency: "US Dollars, non-commissionable",
          ratesInclude: "VAT, Service Charge and Government Levy",
          amendmentsRestrictions: "Ashnil may alter rates with three months notice, currency fluctuation adjustments may apply",
          applicableLaw: "Laws of the Republic of Kenya"
        }
      },
    {
      id: 7,
      name: "Atua En Kop",
      location: "Maasai Mara, Kenya",
      rating: 4.5,
      category: "Safari Camp",
      description: "Exclusive safari camp offering panoramic views of the Maasai Mara.",
      amenities: ["Game Drives", "Guided Walks", "Restaurant", "Luxury Tents"],
      priceCategory: "Premium",
      imageUrl: "data:image/jpeg;base64,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"
    },
    {
        id: 8,
        name: "Azul Margarita",
        location: "Diani Beach, Kenya",
        rating: 4.4,
        category: "Beach Resort",
        description: "Vibrant beach resort offering a fusion of African and Mediterranean aesthetics.",
        amenities: ["Swimming Pool", "Beach Access", "Restaurant", "Bar", "Studio Rooms", "Multiple Bedroom Options"],
        priceCategory: "Mid-range",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/44/4b/d9/pa-pweza-adamsville-beach.jpg?w=900&h=500&s=1",
        hasContractRates: true,
        contractRates: {
          standardRoom: {
            regular: {
              bedAndBreakfast: {
                single: 8500,
                double: 11000
              },
              halfBoard: {
                single: 10000,
                double: 13000
              },
              fullBoard: {
                single: 11000,
                double: 15000
              }
            },
            festive: {
              bedAndBreakfast: {
                single: 12500,
                double: 14000
              },
              halfBoard: {
                single: 14000,
                double: 17500
              },
              fullBoard: {
                single: 15000,
                double: 21500
              }
            }
          },
          studioRoom: {
            regular: {
              bedAndBreakfast: {
                single: 9000,
                double: 11500
              },
              halfBoard: {
                single: 10500,
                double: 13500
              },
              fullBoard: {
                single: 11500,
                double: 15500
              }
            },
            festive: {
              bedAndBreakfast: {
                single: 13000,
                double: 14500
              },
              halfBoard: {
                single: 15000,
                double: 18000
              },
              fullBoard: {
                single: 16000,
                double: 22000
              }
            }
          },
          oneBedroom: {
            regular: {
              bedAndBreakfast: {
                single: 10500,
                double: 15000
              },
              halfBoard: {
                single: 11500,
                double: 17000
              },
              fullBoard: {
                single: 12500,
                double: 18500
              }
            },
            festive: {
              bedAndBreakfast: 21000,
              halfBoard: 24500,
              fullBoard: 26500
            }
          },
          twoBedroom: {
            regular: {
              bedAndBreakfast: 23000,
              halfBoard: 26000,
              fullBoard: 30000
            },
            festive: {
              bedAndBreakfast: 32000,
              halfBoard: 40000,
              fullBoard: 48000
            },
            maxOccupancy: 4
          },
          threeBedroom: {
            regular: {
              bedAndBreakfast: 32500,
              halfBoard: 36500,
              fullBoard: 43000
            },
            festive: {
              bedAndBreakfast: 37000,
              halfBoard: 50000,
              fullBoard: 62000
            },
            maxOccupancy: 6
          }
        },
        termsAndConditions: {
          currency: "KES",
          inclusive: "All government taxes",
          rateChangePolicy: "Rates are subject to change without notice",
          minimumAge: "Must be at least 18 years to check-in and register",
          refundPolicy: "No refund granted upon early checkout",
          childPolicy: {
            "under2": "No charge",
            "4to12": "50% while sharing with parents"
          },
          cancellationPolicy: {
            "35to14Days": "25% of total expected fee",
            "14to2Days": "50% of total expected fee",
            "within2Days": "100% of total expected fee"
          }
        },
        contact: {
          phone: ["+254 727531259", "+254 733294398"],
          email: ["reservations@azulmargarita.co", "sales@azulmargarita.co"]
        }
      },
      {
        id: 9,
        name: "Bahari Beach",
        location: "Mombasa, Kenya",
        rating: 4.0,
        category: "Beach Resort",
        description: "Family-friendly beachfront resort on Kenya's stunning coast.",
        amenities: ["Swimming Pool", "Kids Club", "Restaurant", "Water Sports"],
        priceCategory: "Mid-range",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/96/3a/2b/bahari-beach-hotel.jpg?w=900&h=500&s=1",
        featured: false,
        hasContractRates: true,
        contractRates: {
          local: {
            ksh: {
              halfBoard: {
                normal: { single: 15500, double: 21500, triple: 25500 },
                holiday: { single: 33350, double: 45950, triple: 57120 },
                easter: { single: 16400, double: 24000, triple: 27700 }
              },
              fullBoard: {
                normal: { single: 16000, double: 22500, triple: 26500 },
                holiday: { single: 35050, double: 47400, triple: 61650 },
                easter: { single: 17900, double: 25000, triple: 28800 }
              },
              allInclusive: {
                normal: { single: 17500, double: 26500, triple: 32500 },
                holiday: { single: 35380, double: 47950, triple: 64510 },
                easter: { single: 19000, double: 29300, triple: 35000 }
              }
            }
          },
          operator: {
            usd: {
              bedAndBreakfast: {
                season1: { single: 230, double: 156, triple: 109 },
                season2: { single: 136, double: 96, triple: 67 },
                season3: { single: 120, double: 85, triple: 59 },
                season4: { single: 136, double: 96, triple: 67 },
                season5: { single: 288, double: 200, triple: 140 }
              },
              halfBoard: {
                season1: { single: 248, double: 164, triple: 115 },
                season2: { single: 150, double: 103, triple: 72 },
                season3: { single: 126, double: 98, triple: 68 },
                season4: { single: 150, double: 103, triple: 72 },
                season5: { single: 310, double: 207, triple: 145 }
              },
              allInclusive: {
                season1: { single: 276, double: 184, triple: 128 },
                season2: { single: 172, double: 109, triple: 76 },
                season3: { single: 141, double: 103, triple: 72 },
                season4: { single: 172, double: 109, triple: 76 },
                season5: { single: 345, double: 230, triple: 160 }
              }
            }
          },
          periods: {
            local: {
              normal: ["01.10.2024-22.12.2024", "05.01.2025-17.04.2025", "21.04.2025-22.12.2025"],
              holiday: ["23.12.2024-04.01.2025"],
              easter: ["18.04.2025-20.04.2025"]
            },
            operator: {
              season1: ["01.01.2025-05.01.2025"],
              season2: ["06.01.2025-30.04.2025"],
              season3: ["01.05.2025-30.06.2025"],
              season4: ["01.07.2025-21.12.2025"],
              season5: ["22.12.2025-31.12.2025"]
            }
          },
          extras: {
            oceanViewRoom: 2000,
            outdoorLivingRoom: 4000,
            oceanFrontJuniorSuite: 9000,
            christmasNewYearEve: 20,
            fullBoardSupplement: 5
          },
          childrenPolicy: {
            upTo2Years: "Free of charge",
            age3to12SharingWithAdult: "30% on single rate",
            age3to12SharingWithParents: "50% discount on half double rate",
            age3to12OwnRoom: "75% of adult rate",
            babyCot: "Free"
          },
          allInclusiveIncludes: [
            "Full board accommodation (Breakfast, Lunch, Dinner)",
            "Local spirits, drinks and snacks from 1000hrs to 2300hrs",
            "Afternoon Tea on the terrace with freshly baked cakes, cookies and sandwiches",
            "Free animation",
            "Free pool games, darts and board games",
            "Evening entertainment"
          ],
          specialConditions: {
            minimumStay: "3 nights throughout the year for all allotments",
            lessThan3Nights: "ON REQUEST"
          },
          cancellationPolicy: {
            from5to3days: "One full day rate is charged",
            noShow: "Three days full rate is charged"
          }
        }
      },
      {
        id: 10,
        name: "Bamburi Beach Hotel",
        location: "Mombasa, Kenya",
        rating: 4.1,
        category: "Beach Resort",
        description: "Popular beachfront hotel offering all-inclusive packages in North Mombasa.",
        amenities: ["All-Inclusive Option", "Swimming Pool", "Entertainment", "Water Sports"],
        priceCategory: "Mid-range",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/cf/12/f1/exterior.jpg?w=900&h=500&s=1",
        featured: false,
        hasContractRates: true,
        contractRates: {
          local: {
            ksh: {
              allInclusive: {
                normalSeason1: {
                  superiorRoom: { double: 29500, single: 22125 },
                  seaFacingDeluxeRoom: { double: 33500, single: 25125 },
                  oceanFrontRoom: { double: 35500, single: 26625 },
                  suite: { double: 41500, single: 31125 }
                },
                holidaySeason: {
                  superiorRoom: { double: 45000, single: 33750 },
                  seaFacingDeluxeRoom: { double: 49000, single: 36750 },
                  oceanFrontRoom: { double: 51000, single: 38250 },
                  suite: { double: 57000, single: 42750 }
                },
                normalSeason2: {
                  superiorRoom: { double: 29500, single: 22125 },
                  seaFacingDeluxeRoom: { double: 33500, single: 25125 },
                  oceanFrontRoom: { double: 35500, single: 26625 },
                  suite: { double: 41500, single: 31125 }
                },
                lowSeason: {
                  superiorRoom: { double: 25000, single: 18750 },
                  seaFacingDeluxeRoom: { double: 29000, single: 21750 },
                  oceanFrontRoom: { double: 31000, single: 23250 },
                  suite: { double: 37000, single: 27750 }
                },
                highSeason: {
                  superiorRoom: { double: 29500, single: 22125 },
                  seaFacingDeluxeRoom: { double: 33500, single: 25125 },
                  oceanFrontRoom: { double: 35500, single: 26625 },
                  suite: { double: 41500, single: 31125 }
                },
                normalSeason3: {
                  superiorRoom: { double: 27000, single: 20250 },
                  seaFacingDeluxeRoom: { double: 31000, single: 23250 },
                  oceanFrontRoom: { double: 33000, single: 24750 },
                  suite: { double: 39000, single: 29250 }
                }
              }
            }
          },
          operator: {
            usd: {
              halfBoard: {
                normalSeason1: { double: 78, single: 117 },
                holidaySeason: { double: 150, single: 225 },
                normalSeason2: { double: 78, single: 117 },
                lowSeason: { double: 62, single: 93 },
                highSeason: { double: 78, single: 117 },
                normalSeason3: { double: 75, single: 108 }
              }
            }
          },
          periods: {
            local: {
              normalSeason1: ["01.12.2024-22.12.2024"],
              holidaySeason: ["23.12.2024-03.01.2025"],
              normalSeason2: ["04.01.2025-30.04.2025"],
              lowSeason: ["01.05.2025-30.06.2025"],
              highSeason: ["01.07.2025-31.08.2025"],
              normalSeason3: ["01.09.2025-30.11.2025"]
            },
            operator: {
              normalSeason1: ["16.12.2024-22.12.2024"],
              holidaySeason: ["23.12.2024-03.01.2025"],
              normalSeason2: ["04.01.2025-30.04.2025"],
              lowSeason: ["01.05.2025-30.06.2025"],
              highSeason: ["01.07.2025-31.08.2025"],
              normalSeason3: ["01.09.2025-15.12.2025"]
            }
          },
          extras: {
            allInclusiveSupplement: {
              adult: 30,
              child: 15
            },
            galaDinnerSupplement: {
              adult: 25,
              child: 12.50
            },
            newYearsEveSupplement: {
              adult: 4000,
              child: 2000
            },
            easterSupplement: {
              usd: {
                adult: 25,
                child: 12.50
              },
              ksh: {
                adult: 2000,
                child: 1000
              }
            }
          },
          childrenPolicy: {
            age2to12SharingWithParents: "50% of adult rate",
            age2to12OwnRoom: "80% of adult rate",
            thirdAdult: "70% of adult rate"
          },
          specialConditions: {
            roomOccupancy: "Max 3 (2 adults +1 child or 3 adults)",
            minimumStay: {
              holiday: "3 nights from 23rd December 2024 to 3rd January 2025",
              newYear: "5 nights from 23rd December 2024 to 3rd January 2025"
            }
          },
          cancellationPolicy: {
            over7days: "No charge",
            lessThan7daysAndNoShow: "100% charge"
          },
          paymentTerms: "Full payment in advance"
        }
      },
      {
        id: 11,
        name: "Banana House",
        location: "Lamu, Kenya",
        rating: 4.3,
        category: "Boutique",
        description: "Charming boutique hotel in historic Lamu offering authentic Swahili experiences.",
        amenities: ["Yoga Studio", "Organic Food", "Garden", "Cultural Activities"],
        priceCategory: "Mid-range",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/46/8a/cb/wellness-penthouse.jpg?w=900&h=500&s=1",
        featured: false,
        hasContractRates: true,
        contractRates: {
          resident: {
            ksh: {
              bedAndBreakfast: {
                lowSeason: {
                  doubleRoomGardenView: { single: 14500, double: 21500, child: 6900 },
                  deluxeDoubleRoom: { single: 15100, double: 22200, child: 6900 },
                  doubleRoomExtraBed: { single: 22200, double: 22200, triple: 29800, child: 6900 },
                  standardTwinRoom: { single: 14500, double: 21500, triple: 29000, child: 6900 },
                  bananaPenthouseSuite: { single: 33600, double: 33600, triple: 41200, child: 6900 },
                  wellnessPenthouseSuite: { single: 35100, double: 35100, triple: 42800, quadruple: 50400, child: 6900 },
                  sweetPenthouse: { single: 30700, double: 30700, child: 6900 },
                  familyRoom: { single: 23700, double: 23700, triple: 31300, quadruple: 38900, child: 6900 },
                  budgetSingleRoom: { single: 10600 },
                  standardSingleRoom: { single: 13800 },
                  budgetDouble: { single: 13800, double: 20600 }
                },
                midSeason: {
                  doubleRoomGardenView: { single: 16200, double: 23800, child: 8000 },
                  deluxeDoubleRoom: { single: 16900, double: 24700, child: 8000 },
                  doubleRoomExtraBed: { single: 24700, double: 24700, triple: 33200, child: 8000 },
                  standardTwinRoom: { single: 16200, double: 23800, triple: 32300, child: 8000 },
                  bananaPenthouseSuite: { single: 37300, double: 37300, triple: 45800, child: 8000 },
                  wellnessPenthouseSuite: { single: 38900, double: 38900, triple: 47600, quadruple: 56000, child: 8000 },
                  sweetPenthouse: { single: 33900, double: 33900, child: 8000 },
                  familyRoom: { single: 26400, double: 26400, triple: 34700, quadruple: 43200, child: 8000 },
                  budgetSingleRoom: { single: 12000 },
                  standardSingleRoom: { single: 15300 },
                  budgetDouble: { single: 15300, double: 22900 }
                }
              }
            }
          },
          nonResident: {
            usd: {
              bedAndBreakfast: {
                lowSeason: {
                  doubleRoomGardenView: { single: 105, double: 155, child: 49 },
                  deluxeDoubleRoom: { single: 112, double: 159, child: 49 },
                  doubleRoomExtraBed: { single: 159, double: 159, triple: 212, child: 49 },
                  standardTwinRoom: { single: 105, double: 155, triple: 208, child: 49 },
                  bananaPenthouseSuite: { single: 239, double: 239, triple: 292, child: 49 },
                  wellnessPenthouseSuite: { single: 250, double: 250, triple: 303, quadruple: 356, child: 49 },
                  sweetPenthouse: { single: 218, double: 218, child: 49 },
                  familyRoom: { single: 170, double: 170, triple: 223, quadruple: 276, child: 49 },
                  budgetSingleRoom: { single: 80 },
                  standardSingleRoom: { single: 102 },
                  budgetDouble: { single: 102, double: 149 }
                },
                midSeason: {
                  doubleRoomGardenView: { single: 117, double: 171, child: 55 },
                  deluxeDoubleRoom: { single: 123, double: 177, child: 55 },
                  doubleRoomExtraBed: { single: 177, double: 177, triple: 235, child: 55 },
                  standardTwinRoom: { single: 117, double: 171, triple: 229, child: 55 },
                  bananaPenthouseSuite: { single: 265, double: 265, triple: 324, child: 55 },
                  wellnessPenthouseSuite: { single: 277, double: 277, triple: 335, quadruple: 394, child: 55 },
                  sweetPenthouse: { single: 241, double: 241, child: 55 },
                  familyRoom: { single: 188, double: 188, triple: 247, quadruple: 306, child: 55 },
                  budgetSingleRoom: { single: 88 },
                  standardSingleRoom: { single: 112 },
                  budgetDouble: { single: 112, double: 165 }
                }
              }
            }
          },
          net: {
            resident: {
              ksh: {
                bedAndBreakfast: {
                  lowSeason: {
                    doubleRoomGardenView: { single: 12300, double: 18200, child: 5800 },
                    deluxeDoubleRoom: { single: 12800, double: 18800, child: 5800 },
                    doubleRoomExtraBed: { single: 18800, double: 18800, triple: 25300, child: 5800 },
                    standardTwinRoom: { single: 12300, double: 18200, triple: 24600, child: 5800 },
                    bananaPenthouseSuite: { single: 28500, double: 28500, triple: 35000, child: 5800 },
                    wellnessPenthouseSuite: { single: 29800, double: 29800, triple: 36300, quadruple: 42800, child: 5800 },
                    sweetPenthouse: { single: 26000, double: 26000, child: 5800 },
                    familyRoom: { single: 20100, double: 20100, triple: 26600, quadruple: 33000, child: 5800 },
                    budgetSingleRoom: { single: 9000 },
                    standardSingleRoom: { single: 11700 },
                    budgetDouble: { single: 11700, double: 17500 }
                  },
                  midSeason: {
                    doubleRoomGardenView: { single: 13700, double: 20200, child: 6500 },
                    deluxeDoubleRoom: { single: 14300, double: 20900, child: 6500 },
                    doubleRoomExtraBed: { single: 20900, double: 20900, triple: 28100, child: 6500 },
                    standardTwinRoom: { single: 13700, double: 20200, triple: 27400, child: 6500 },
                    bananaPenthouseSuite: { single: 31700, double: 31700, triple: 38900, child: 6500 },
                    wellnessPenthouseSuite: { single: 33200, double: 33200, triple: 40400, quadruple: 47600, child: 6500 },
                    sweetPenthouse: { single: 28900, double: 28900, child: 6500 },
                    familyRoom: { single: 22400, double: 22400, triple: 29600, quadruple: 36700, child: 6500 },
                    budgetSingleRoom: { single: 10100 },
                    standardSingleRoom: { single: 13000 },
                    budgetDouble: { single: 13000, double: 19500 }
                  }
                }
              }
            },
            nonResident: {
              usd: {
                bedAndBreakfast: {
                  lowSeason: {
                    doubleRoomGardenView: { single: 89, double: 131, child: 41 },
                    deluxeDoubleRoom: { single: 95, double: 135, child: 41 },
                    doubleRoomExtraBed: { single: 135, double: 135, triple: 180, child: 41 },
                    standardTwinRoom: { single: 89, double: 131, triple: 176, child: 41 },
                    bananaPenthouseSuite: { single: 203, double: 203, triple: 248, child: 41 },
                    wellnessPenthouseSuite: { single: 212, double: 212, triple: 257, quadruple: 302, child: 41 },
                    sweetPenthouse: { single: 185, double: 185, child: 41 },
                    familyRoom: { single: 144, double: 144, triple: 189, quadruple: 234, child: 41 },
                    budgetSingleRoom: { single: 68 },
                    standardSingleRoom: { single: 86 },
                    budgetDouble: { single: 86, double: 126 }
                  },
                  midSeason: {
                    doubleRoomGardenView: { single: 99, double: 145, child: 45 },
                    deluxeDoubleRoom: { single: 105, double: 150, child: 45 },
                    doubleRoomExtraBed: { single: 150, double: 150, triple: 200, child: 45 },
                    standardTwinRoom: { single: 99, double: 145, triple: 195, child: 45 },
                    bananaPenthouseSuite: { single: 225, double: 225, triple: 275, child: 45 },
                    wellnessPenthouseSuite: { single: 235, double: 235, triple: 285, quadruple: 335, child: 45 },
                    sweetPenthouse: { single: 205, double: 205, child: 45 },
                    familyRoom: { single: 160, double: 160, triple: 210, quadruple: 260, child: 45 },
                    budgetSingleRoom: { single: 75 },
                    standardSingleRoom: { single: 95 },
                    budgetDouble: { single: 95, double: 140 }
                  }
                }
              }
            }
          },
          periods: {
            lowSeason: ["01.04.2025-30.06.2025"],
            midSeason: ["15.01.2025-31.03.2025", "01.07.2025-14.12.2025"]
          },
          extras: {
            airportTransfer: {
              resident: {
                perPerson: 3000,
                note: "For group bookings airport transfer is negotiable"
              },
              nonResident: {
                perPerson: 30,
                note: "For group bookings airport transfer is negotiable"
              }
            }
          },
          commission: "15% commission for travel agents",
          childrenPolicy: {
            ageDefinition: "3-12 years"
          },
          specialNotes: {
            ratesInclude: "Breakfast"
          }
        }
      },
      {
        id: 12,
        name: "Baobab Beach Resort and Spa",
        location: "Diani Beach, Kenya",
        rating: 4.7,
        category: "Beach Resort",
        description: "Located on the world famous Diani Beach, set within 80 acres of tropical gardens overlooking the Indian Ocean. An oasis of tranquility and serenity, the resort's picturesque location is nestled on a coral headland overlooking vast stretches of golden beach. The resort stretches over 700 meters of beach front offering the ultimate luxury beach holiday.",
        amenities: [
          "3 Swimming Pools", 
          "Afya Bora Spa", 
          "Multiple Restaurants", 
          "All-Inclusive Option", 
          "WiFi", 
          "Tennis Courts", 
          "Water Sports", 
          "Entertainment Shows",
          "Kids Activities"
        ],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/92/c3/83/sea-facing-room.jpg?w=900&h=500&s=1",
        featured: true,
        hasContractRates: true,
        contractRates: {
          "2024-2025": {
            nonResident: {
              gardenRoom: {
                lowSeason: {"pps": 104, single: 104, thirdAdult: 73},
                highSeason: {"pps": 151, single: 215, thirdAdult: 106},
                peakSeason: {"pps": 265, single: 382, thirdAdult: 186},
                regularSeason: {"pps": 129, single: 186, thirdAdult: 90}
              },
              seaFacingRoom: {
                lowSeason: {"pps": 112, single: 112, thirdAdult: 79},
                highSeason: {"pps": 160, single: 223, thirdAdult: 112},
                peakSeason: {"pps": 276, single: 393, thirdAdult: 193},
                regularSeason: {"pps": 137, single: 194, thirdAdult: 96}
              },
              superiorRoom: {
                lowSeason: {"pps": 120, single: 120, thirdAdult: 84},
                highSeason: {"pps": 168, single: 231, thirdAdult: 117},
                peakSeason: {"pps": 282, single: 398, thirdAdult: 197},
                regularSeason: {"pps": 145, single: 202, thirdAdult: 102}
              },
              deluxeRoom: {
                lowSeason: {"pps": 132, single: 132, thirdAdult: 92},
                highSeason: {"pps": 179, single: 243, thirdAdult: 125},
                peakSeason: {"pps": 293, single: 410, thirdAdult: 205},
                regularSeason: {"pps": 157, single: 214, thirdAdult: 110}
              },
              suiteRoom: {
                lowSeason: {"pps": 177, single: 177, thirdAdult: 124},
                highSeason: {"pps": 258, single: 366, thirdAdult: 180},
                peakSeason: {"pps": 451, single: 650, thirdAdult: 316},
                regularSeason: {"pps": 220, single: 317, thirdAdult: 154}
              }
            },
            seasonDates: {
              lowSeason: "01 Apr to 15 Jul 2025",
              highSeason: "16 Jul to 31 Aug 2025",
              peakSeason: "22 Dec 2024 to 03 Jan 2025",
              shoulderSeason: "04 Jan to 31 Mar 2025",
              regularSeason: "01 Sep to 31 Oct 2025",
              preRegularSeason: "01 Nov to 21 Dec 2024"
            }
          },
          childrenPolicy: {
            "under2": "Free when sharing with 2 adults",
            "2to12": "50% of per person sharing rate when sharing with 2 adults",
            "singleChildWithAdult": "Adult pays single room rate and child pays 50% of per person sharing rate",
            "childrenOnly": "75% of per person sharing rate"
          },
          specialOffers: {
            honeymoon: {
              minimumStay: 5,
              benefits: [
                "Bottle of wine",
                "Fruit basket and flowers in room on arrival",
                "15% discount on all Spa treatments",
                "15% discount on all food and drink menu items at a la carte restaurants"
              ],
              validity: "6 months from date of marriage"
            },
            longStay: {
              minimumStay: 5,
              benefits: [
                "15% discount on all Spa treatments",
                "15% discount on all food and drink menu items at a la carte restaurants"
              ]
            }
          }
        },
        roomTypes: {
          gardenRoom: {
            size: "31 sq. meters",
            bedType: "1 Double or 2 single beds",
            maxOccupancy: "3 adults or 2 adults + 1 child",
            amenities: ["Air conditioning", "Tea/coffee facilities", "Mini-fridge", "Safe", "TV", "Balcony/terrace"]
          },
          seaFacingRoom: {
            size: "31 sq. meters",
            bedType: "1 Double or 2 single beds",
            maxOccupancy: "3 adults or 2 adults + 1 child",
            amenities: ["Air conditioning", "Tea/coffee facilities", "Mini-fridge", "Safe", "TV", "Balcony/terrace"]
          },
          superiorRoom: {
            size: "63 sq. meters",
            bedType: "1 queen bed or 2 Queen beds",
            maxOccupancy: "3 adults or 2 adults + 2 children",
            amenities: ["Air conditioning", "Tea/coffee facilities", "Mini-fridge", "Safe", "TV", "Balcony/terrace"]
          },
          deluxeRoom: {
            size: "70 sq. meters",
            bedType: "1 King bed",
            maxOccupancy: "3 adults or 2 adults + 1 child",
            amenities: ["Air conditioning", "Tea/coffee facilities", "Mini-fridge", "Safe", "TV", "Balcony/terrace", "Lounge area"]
          },
          juniorSuite: {
            size: "97 sq. meters",
            bedType: "1 Super king bed",
            maxOccupancy: "3 adults or 2 adults + 1 child",
            amenities: ["Air conditioning", "Tea/coffee facilities", "Mini-fridge", "Safe", "TV", "Balcony/terrace", "Lounge area", "Private in-room Jacuzzi", "Luxury bath amenities", "Fruit basket on arrival"]
          }
        },
        allInclusive: {
          included: [
            "Accommodation as booked",
            "WiFi access throughout resort",
            "Buffet meals at 3 restaurants",
            "Selected alcoholic and non-alcoholic beverages",
            "Snacks and afternoon tea",
            "Daily sports activities",
            "Evening entertainment",
            "Kids activities"
          ],
          excluded: [
            "A la carte dining",
            "Premium drinks",
            "Spa treatments",
            "Water sports",
            "Excursions",
            "Room service",
            "Laundry service"
          ]
        },
        checkIn: "13:00",
        checkOut: "10:00",
        facilities: [
          "3 Swimming pools",
          "Children's pool",
          "Multiple restaurants and bars",
          "Spa and wellness center",
          "Tennis courts",
          "Entertainment amphitheater",
          "Kids club",
          "Boutiques and gift shops",
          "Conference facilities"
        ]
      },
      {
        id: 13,
        name: "Basecamp Mafia Island Lodge",
        location: "Mafia Island, Tanzania",
        rating: 4.5,
        category: "Eco Resort",
        description: "Basecamp offers unique eco-resorts at the most breathtaking places in the world. Places where you can retreat or meet, come as a guest and leave as a friend. In a way where sustainability and hospitality go beyond the imaginable.",
        amenities: [
          "Infinity Pool", 
          "Beach Bar", 
          "On-site Diving School", 
          "Restaurant", 
          "Spa Center",
          "Private Terrace Rooms",
          "Air Conditioning"
        ],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/54/f8/b2/mafia-island-lodge.jpg?w=900&h=500&s=1",
        hasContractRates: true,
        contractRates: {
          "2024-2025": {
            roomTypes: {
              bustaniGardenView: {
                type: "2-p standard (double bed)",
                count: 7,
                rates: {
                  june: 250,
                  july: 280,
                  august: 300,
                  september: 250,
                  october: 300,
                  november: 300,
                  december1to15: 250,
                  december16toJan31: 300,
                  febToMarch: 250
                }
              },
              bahariOceanViewDouble: {
                type: "2-p standard (double bed)",
                count: 4,
                rates: {
                  june: 270,
                  july: 300,
                  august: 320,
                  september: 270,
                  october: 320,
                  november: 320,
                  december1to15: 270,
                  december16toJan31: 320,
                  febToMarch: 270
                }
              },
              bahariOceanViewTwin: {
                type: "2-p standard (twin beds)",
                count: 4,
                rates: {
                  june: 270,
                  july: 300,
                  august: 320,
                  september: 270,
                  october: 320,
                  november: 320,
                  december1to15: 270,
                  december16toJan31: 320,
                  febToMarch: 270
                }
              },
              fahariFamilia: {
                type: "4-p family (double bed + bunk)",
                count: 4,
                rates: {
                  june: 350,
                  july: 392,
                  august: 420,
                  september: 350,
                  october: 420,
                  november: 420,
                  december1to15: 350,
                  december16toJan31: 420,
                  febToMarch: 350
                }
              },
              bahariXL: {
                type: "2-p XL room (double bed)",
                count: 3,
                rates: {
                  june: 290,
                  july: 320,
                  august: 345,
                  september: 290,
                  october: 345,
                  november: 290,
                  december1to15: 290,
                  december16toJan31: 345,
                  febToMarch: 290
                }
              },
              fahariOceanViewDouble: {
                type: "2-p XL room (king size bed)",
                count: 4,
                rates: {
                  june: 290,
                  july: 320,
                  august: 345,
                  september: 290,
                  october: 345,
                  november: 290,
                  december1to15: 290,
                  december16toJan31: 345,
                  febToMarch: 290
                }
              },
              fahariOceanViewTwin: {
                type: "2-p XL room (twin beds)",
                count: 2,
                rates: {
                  june: 290,
                  july: 320,
                  august: 345,
                  september: 290,
                  october: 345,
                  november: 290,
                  december1to15: 290,
                  december16toJan31: 345,
                  febToMarch: 290
                }
              }
            },
            mealOptions: {
              breakfast: "Included",
              dinner: "25 USD per person per night",
              lunch: "15 USD per person per night"
            },
            discounts: {
              singleOccupancy: "25% discount",
              longStay: {
                "7to13nights": "10% discount",
                "14to20nights": "15% discount",
                "21PlusNights": "20% discount"
              },
              nonRefundable: "10% discount",
              groupBookings: "10 rooms booked, 1 tour leader room free"
            }
          }
        },
        resortFeatures: {
          phaseOne: {
            completionDate: "July 2024",
            accommodation: {
              totalRooms: 28,
              roomTypes: [
                "2-p standard (twin/double)",
                "2-p ocean view rooms",
                "2-p XL ocean view rooms",
                "4-p family rooms"
              ],
              amenities: [
                "Air conditioning",
                "Private terrace"
              ]
            },
            facilities: [
              "Swimming pool",
              "Beach with Beach Bar",
              "Restaurant with Local-Italian Fusion",
              "Vegetarian & Vegan options",
              "On-site diving school",
              "Spa center (massages)"
            ]
          },
          phaseTwo: {
            plannedFacilities: [
              "Co-working spaces",
              "Meeting room & event space",
              "Beach cabins & Tiny houses"
            ]
          }
        }
      },
      {
        id: 14,
        name: "Best Western Plus Meridian Hotel",
        location: "Nairobi, Kenya",
        rating: 4.0,
        category: "Business Hotel",
        description: "Modern business hotel located in Nairobi's central business district.",
        amenities: [
          "Central Air Conditioning",
          "Free High-Speed Wi-Fi",
          "LED Satellite TV",
          "Electronic Safe",
          "Minibar",
          "24-Hour Room Service",
          "Conference Facilities",
          "Restaurant"
        ],
        priceCategory: "Mid-range",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/b3/2f/d3/lobby.jpg?w=900&h=500&s=1",
        featured: false,
        hasContractRates: true,
        contractRates: {
          accommodation: {
            superiorRoom: {
              published: { single: 160, double: 190 },
              specialRate: { single: 85, double: 100 },
              childRate: 40
            },
            executiveRoom: {
              published: { single: 190, double: 220 },
              specialRate: { single: 140, double: 160 },
              childRate: 50
            },
            studioSuite: {
              published: { single: 220, double: 250 },
              specialRate: { single: 170, double: 190 },
              childRate: 60
            },
            familySuite: {
              published: { "threeSharing": 220 },
              specialRate: { "threeSharing": 150 },
              childRate: 60
            }
          },
          meals: {
            buffetBreakfast: 25,
            buffetLunch: 25,
            buffetDinner: 25
          },
          conference: {
            fullDay: 30,
            halfDay: 26,
            venues: {
              khyber: { "theatre": 250, "banquet": 120, "classroom": 150 },
              lukenya: { "theatre": 80, "banquet": 40, "classroom": 50 },
              kilimambogo: { "theatre": 90, "banquet": 56, "classroom": 60 },
              kilimanjaro1: { "theatre": 100, "banquet": 56, "classroom": 60 },
              kilimanjaro2: { "theatre": 70, "banquet": 40, "classroom": 50 }
            }
          },
          policies: {
            validUntil: "2025-12-31",
            currency: "USD",
            checkIn: "12:00",
            checkOut: "10:00",
            childPolicy: "Children 0-5 years stay free without extra bed (max 1 child per room)"
          }
        }
      },
      {
        id: 15,
        name: "Best Western Plus Westlands",
        location: "Nairobi, Kenya",
        rating: 4.2,
        category: "Business Hotel",
        description: "International standard hotel in Nairobi's upscale Westlands neighborhood.",
        amenities: ["Swimming Pool", "Gym", "Restaurant", "Business Center"],
        priceCategory: "Mid-range",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/17/ab/93/best-western-plus-westlands.jpg?w=900&h=500&s=1",
        featured: false,
        hasContractRates: true,
        contractRates: {
          accommodation: {
            superiorDeluxeKing: {
              specialRate: { single: 130, double: 150 }
            },
            executiveRoom: {
              specialRate: { single: 140, double: 160 }
            },
            juniorSuite: {
              specialRate: { single: 160, double: 180 }
            },
            executiveSuite: {
              specialRate: { single: 180, double: 200 }
            }
          },
          conference: {
            fullDay: 45,
            halfDay: 40,
            briefMeetings: 30,
            breakfastPresentations: 32,
            cocktailReceptions: 42
          },
          policies: {
            validUntil: "2024-12-31",
            currency: "USD",
            year: "2024"
          }
        }
      },
      {
        id: 16,
        name: "Billionaire Resort & Retreat",
        location: "Malindi, Kenya",
        rating: 4.8,
        category: "Luxury Resort",
        description: "One of the most exclusive resorts on the Kenyan coast, offering both the Lion in the Sun retreat and Billionaire Resort with ultra-lush modern seafront apartments.",
        amenities: [
          "Private Beach",
          "Five Salt-water Swimming Pools",
          "Award-winning Spa",
          "Infinity Pool",
          "Fitness Studio",
          "Tennis Court",
          "Restaurant & Grill",
          "Beach Bar",
          "Shopping Arcade",
          "Complimentary Wi-Fi",
          "Airport Transfer"
        ],
        priceCategory: "Ultra Luxury",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/28/79/4d/billionaire-resort-retreat.jpg?w=900&h=500&s=1",
        featured: true,
        hasContractRates: true,
        contractRates: {
          lionInTheSun: {
            doubleStandard: {
              highSeason: 34000,
              lowSeason: 25000,
              peakSeason: 62000
            },
            doubleSuperior: {
              highSeason: 42000,
              lowSeason: 35500,
              peakSeason: 71300
            },
            suite: {
              highSeason: 47000,
              lowSeason: 40500,
              peakSeason: 80600
            },
            masterSuite: {
              highSeason: 58500,
              lowSeason: 52000,
              peakSeason: 99200
            }
          },
          billionaireResort: {
            oneBedroomApartment: {
              highSeason: 69000,
              lowSeason: 59000,
              peakSeason: 111600,
              maxPax: 2
            },
            twoBedroomApartment: {
              highSeason: 85500,
              lowSeason: 72000,
              peakSeason: 148800,
              maxPax: 4
            },
            threeBedroomApartment: {
              highSeason: 107000,
              lowSeason: 97000,
              peakSeason: 186000,
              maxPax: 6
            },
            fourBedroomApartment: {
              highSeason: 145000,
              lowSeason: 120000,
              peakSeason: 322400,
              maxPax: 8
            }
          },
          supplements: {
            halfBoard: 4500,
            fullBoard: 7000,
            allInclusive: 9500,
            singleUseDiscount: "20%",
            childDiscount: "50%"
          },
          childPolicy: {
            "under3": "Free",
            "3to12": "50% of adult rate sharing",
            "above12": "100% of adult rate"
          },
          transfers: {
            scheduledMalindi: "Included",
            privateMalindi: 3500,
            mombasa: 30000
          },
          seasons: {
            highSeason: ["Jan 7-Feb 28", "Aug"],
            lowSeason: ["Mar 1-Jul 31", "Sep 1-Dec 25"],
            peakSeason: ["Dec 26-Jan 6"]
          },
          policies: {
            validUntil: "2025-12-31",
            currency: "KES",
            checkIn: "15:00",
            checkOut: "11:00",
            cancellation: {
              "29to14days": "50% charge",
              "13to8days": "60% charge",
              "7to3days": "70% charge",
              "2daysOrLess": "80% charge",
              "festive": "80% charge (29 days prior)"
            }
          }
        }
      },
    {
      id: 17,
      name: "Blue Bay Cove",
      location: "Watamu, Kenya",
      rating: 4.6,
      category: "Beach Resort",
      description: "Elegant beach apartments overlooking the crystal-clear waters of Watamu Marine Park.",
      amenities: ["Swimming Pool", "Private Beach", "Water Sports", "Gardens"],
      priceCategory: "Premium",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/1d/61/68/photo7jpg.jpg?w=900&h=500&s=1"
    },
    {
      id: 18,
      name: "Bluebay Zanzibar",
      location: "Zanzibar, Tanzania",
      rating: 4.5,
      category: "Beach Resort",
      description: "Picturesque beachfront resort on Zanzibar's east coast with traditional architecture.",
      amenities: ["Swimming Pool", "Spa", "Water Sports", "Restaurant"],
      priceCategory: "Premium",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/ca/b7/07/bluebay-beach-resort.jpg?w=900&h=500&s=1"
    },
    {
      id: 19,
      name: "Bohmam",
      location: "Kenya",
      rating: 4.1,
      category: "Boutique",
      description: "Uniquely designed boutique accommodation offering personalized service.",
      amenities: ["Restaurant", "Bar", "Gardens", "Wi-Fi"],
      priceCategory: "Mid-range",
      imageUrl: "/api/placeholder/800/500"
    },
    {
        id: 20,
        name: "The Boma Hotels",
        location: "Nairobi, Kenya",
        rating: 4.7,
        category: "Luxury",
        description: "A collection of sophisticated luxury hotels including The Boma Nairobi, Boma Inn Nairobi and Boma Inn Eldoret. All profits fund the Kenya Red Cross Society.",
        amenities: ["Swimming Pool", "Spa", "Multiple Restaurants", "Conference Facilities", "Airport Transfers", "Free Wi-Fi"],
        priceCategory: "Premium",
        imageUrl: "https://assets.simplotel.com/simplotel/image/upload/x_101,y_0,w_1600,h_1200,r_0,c_crop,q_80,fl_progressive/w_1350,f_auto,c_fit/the-boma-nairobi/Exterior_facade_-_The_Boma,_hotel_in_Nairobi_5",
        featured: true,
        hasContractRates: true,
        contractRates: {
          theBomaNairobi: {
            superiorRoom: {
              rack: { single: 350, double: 405 },
              contract: { single: 130, double: 150 },
              weekend: { single: 110, double: 130 },
              thirdBedAdult: 30
            },
            deluxeRoom: {
              rack: { single: 395, double: 450 },
              contract: { single: 150, double: 170 },
              weekend: { single: 130, double: 150 }
            },
            executiveSuite: {
              rack: { single: 500, double: 500 },
              contract: { single: 250, double: 300 },
              weekend: { single: 250, double: 270 }
            },
            businessSuite: {
              rack: { single: 650, double: 650 },
              contract: { single: 350, double: 350 },
              weekend: { single: 180, double: 200 }
            },
            presidentialSuite: {
              rack: { single: 200, double: 2000 },
              contract: { single: 1200, double: 1200 },
              weekend: { single: 800, double: 800 }
            },
            framTrip: {
              superiorRoom: { single: 100, double: 120 }
            }
          },
          bomaInnNairobi: {
            standardRoom: {
              rack: { single: 240, double: 285 },
              contract: { single: 80, double: 100 },
              framTrip: { single: 75, double: 95 }
            }
          },
          bomaInnEldoret: {
            superiorRoom: {
              rack: { single: 165, double: 200 },
              contract: { single: 80, double: 100 },
              framTrip: { single: 70, double: 90 },
              thirdBedAdult: 30
            },
            deluxeRoom: {
              rack: { single: 195, double: 230 },
              contract: { single: 100, double: 130 }
            },
            governorsSuite: {
              rack: { single: 330, double: 330 },
              contract: { single: 300, double: 300 }
            }
          },
          meals: {
            bomaNairobi: {
              breakfast: 30,
              lunch: 35,
              dinner: 35
            },
            bomaInnNairobi: {
              breakfast: 25,
              lunch: 30,
              dinner: 30
            },
            bomaInnEldoret: {
              breakfast: 20,
              lunch: 25,
              dinner: 25
            },
            lunchBox: 25
          },
          childPolicy: {
            "under2": "Complimentary with baby cot on request",
            "2to12Sharing": {
              "bomaNairobi": 20,
              "bomaInnNairobi": 20,
              "bomaInnEldoret": 25
            },
            "under12OwnRoom": "75% of applicable double room rate"
          },
          transfers: {
            airport: 25
          },
          policies: {
            currency: "USD",
            inclusions: ["Bed and Breakfast", "28% Government Taxes (16% VAT, 10% Service Charge, 2% Training Levy)"],
            notes: "All profits fund the Kenya Red Cross Society"
          }
        }
      },
      {
        id: 21,
        name: "Boma Inn Eldoret",
        location: "Eldoret, Kenya",
        rating: 4,
        category: "Business Hotel",
        description: "Modern hotel offering comfortable accommodation and business facilities in Eldoret with 68 spacious rooms and conference facilities. Located in Ramogi Drive, the hotel features spa treatments, swimming pool, and beautiful gardens.",
        amenities: ["Swimming Pool", "Restaurant", "Conference Rooms", "Wi-Fi", "Spa", "Gym", "Sauna", "Steam Room"],
        priceCategory: "Mid-range",
        imageUrl: "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_278,y_0,w_4444,h_3333,r_0,c_crop,q_80,fl_progressive/w_1350,f_auto,c_fit/boma-inn-eldoret/Facade_of_Boma_Inn_Eldoret_2",
        featured: false,
        hasContractRates: true,
        contractRates: {
          accommodation: {
            superiorRoom: {
              bedOnly: {
                singleRate: 9000,
                doubleRate: 9000
              },
              bedAndBreakfast: {
                singleRate: 10500,
                doubleRate: 13500
              },
              halfBoard: {
                singleRate: 13000,
                doubleRate: 18500
              },
              fullBoard: {
                singleRate: 15500,
                doubleRate: 23500
              }
            },
            deluxeRoom: {
              bedOnly: {
                singleRate: 12000,
                doubleRate: 12000
              },
              bedAndBreakfast: {
                singleRate: 13500,
                doubleRate: 16500
              },
              halfBoard: {
                singleRate: 16000,
                doubleRate: 21500
              },
              fullBoard: {
                singleRate: 18500,
                doubleRate: 26500
              }
            },
            executiveSuite: {
              bedOnly: {
                doubleRate: 20000
              },
              bedAndBreakfast: {
                doubleRate: 25000
              },
              halfBoard: {
                doubleRate: 27500
              },
              fullBoard: {
                doubleRate: 30000
              }
            }
          },
          conferencePackages: {
            halfDay: {
              rate: 3200,
              details: "Includes lunch with soft drink, tea break with snacks, meeting room with projector and Wi-Fi"
            },
            fullDay: {
              rate: 3500,
              details: "Includes lunch with soft drink, two tea breaks with snacks, meeting room with projector and Wi-Fi"
            }
          },
          foodAndBeverage: {
            teaAndSnacks: {
              rate: 1800,
              details: "Includes tea, coffee, and snacks"
            },
            cocktailReception: {
              rate: 2000,
              details: "Includes soft drinks and cocktail bites"
            },
            breakfast: {
              rate: 2500,
              details: "Full breakfast with local and international dishes"
            },
            lunch: {
              rate: 2800,
              details: "Four course buffet with local and international dishes"
            },
            dinner: {
              rate: 2800,
              details: "Four course buffet with options to suit all preferences"
            }
          },
          meetingRooms: {
            asis: {
              setup: "Theatre",
              capacity: 250,
              rate: 120000
            },
            tinderet: {
              setup: "Theatre",
              capacity: 70,
              rate: 80000
            },
            nandi: {
              setup: "Theatre",
              capacity: 15,
              rate: 40000
            },
            iten: {
              setup: "Theatre",
              capacity: 15,
              rate: 40000
            },
            kerioValley: {
              setup: "Board room",
              capacity: 15,
              rate: 50000
            },
            kikilgei: {
              setup: "Board room",
              capacity: 4,
              rate: 25000
            }
          },
          extras: {
            additionalBed: 3000,
            dayRoom: "75% of overnight rate",
            airportTransfer: 2000,
            corporateBenefits: ["Complimentary in-room tea/coffee", "Complimentary water", "Complimentary Wi-Fi", "Complimentary gym/pool access"]
          },
          termsAndConditions: {
            taxes: "16% VAT, 10% Service Charge, 2% Catering Levy",
            checkIn: "14:00hrs",
            checkOut: "10:00hrs",
            lateCheckout: "50% of room rate until 18:00hrs, full rate after 18:00hrs",
            earlyDeparture: "Full stay charge",
            ratesNotes: "All rates in Kenyan Shillings (KES), non-commissionable and subject to availability"
          }
        }
      },
      {
        id: 22,
        name: "Borana Lodge",
        location: "Laikipia, Kenya",
        rating: 4.9,
        category: "Safari Lodge",
        description: "Eco-luxury lodge on the Borana Conservancy offering exceptional wildlife experiences with a commitment to conservation. All retained earnings are dedicated to building local livelihoods and enhancing ecosystem integrity.",
        amenities: ["Game Drives", "Horse Riding", "Mountain Biking", "E-Biking", "Bush Walks", "Swimming Pool", "Farm-to-Table Dining", "Conservation Activities"],
        priceCategory: "Ultra Luxury",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/1a/3d/2d/the-swimming-pool-at.jpg?w=900&h=500&s=1",
        featured: true,
        hasContractRates: true,
        contractRates: {
          nonResident: {
            standard: {
              adult: {
                regular: 930,
                net15: 824
              },
              single: {
                regular: 1210,
                net15: 1072
              },
              child: {
                regular: 465,
                net15: 412
              }
            },
            peak: {
              adult: {
                regular: 1200,
                net15: 1063
              },
              single: {
                regular: 1560,
                net15: 1382
              },
              child: {
                regular: 600,
                net15: 532
              }
            },
            extras: {
              afternoonDepartureWithLunch: 80,
              guidePilotAccommodation: 300,
              ngareNdareForestVisit: {
                perAdult: 40,
                perVehicle: 5
              },
              lewaConservancyVisit: {
                perAdult: 160,
                perChild: 80
              },
              flyCampingSetupFee: 600
            },
            currency: "USD"
          },
          resident: {
            standard: {
              adult: {
                regular: 37000,
                net10: 34200
              },
              single: {
                regular: 47000,
                net10: 43500
              },
              child: {
                regular: 18500,
                net10: 17100
              }
            },
            peak: {
              adult: {
                regular: 54000,
                net10: 49900
              },
              single: {
                regular: 66000,
                net10: 61000
              },
              child: {
                regular: 27000,
                net10: 25000
              }
            },
            extras: {
              "afternoonDepartureWithLunch": 10000,
              "guidePilotAccommodation": 39000,
              "ngareNdareForestVisit": {
                "perAdult": 2000,
                "perVehicle": 500
              },
              "flyCampingSetupFee": 78000,
              "eBikeAdventures": "80 USD per ride",
              "horseRide": "90 USD per ride"
            },
            currency: "KSH"
          },
          seasons: {
            peak: "15th June - 30th September 2025, 20th December 2025 - 5th January 2026",
            standard: "6th January - 14th June 2025, 1st October - 19th December 2025"
          },
          minimumStay: {
            standard: 2,
            peak: 3
          },
          childPolicy: {
            childRate: "5 to 15 years at time of travel",
            under5: "Stay free of charge"
          },
          inclusions: [
            "Mandatory per person donation to conservation",
            "AMREF/Emergency flying doctors cover",
            "Full board accommodation",
            "Soft drinks, beers, house wines & selected house spirits",
            "Local airstrip transfers (Borana Conservancy & Lewa Downs)",
            "Borana Conservancy based activities",
            "Day & night game drives",
            "Mountain biking",
            "Horse riding (one ride per guest per day for residents)",
            "Bush walks",
            "Conservation activities",
            "Tours of Waitabit Farm",
            "Sundowner excursions"
          ],
          exclusions: [
            "Gratuities",
            "Premium spirits, cellar wines and champagne",
            "Adventures beyond Borana Conservancy"
          ],
          termsAndConditions: {
            bookingProcess: {
              "provisionalBooking": "Held for 5 working days",
              "confirmationRequirement": "20% non-refundable deposit and guest information",
              "finalPayment": "80% balance due 45 days prior to arrival"
            },
            taxes: "All costs inclusive of VAT and taxes",
            cancellationPolicy: {
              "moreThan45Days": "20% deposit and bank charges forfeited",
              "between45And30Days": "50% of full value forfeited",
              "lessThan30Days": "100% of full value forfeited"
            },
            insurance: "Fully comprehensive travel and medical insurance required",
            conservationContribution: "24% non-commissionable contribution to environmental and social responsibilities included in rates"
          }
        }
      },
      {
        id: 23,
        name: "Bougainvillea Safari Lodge",
        location: "Karatu, Tanzania",
        rating: 4.4,
        category: "Safari Lodge",
        description: "Scenic safari lodge offering authentic wildlife experiences in Tanzania. Nestled in lush gardens with comfortable accommodations for an authentic safari experience.",
        amenities: ["Game Drives", "Swimming Pool", "Restaurant", "Guided Walks", "Garden Setting"],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/bb/c5/4b/bougainvillea-safari.jpg?w=900&h=500&s=1",
        hasContractRates: true,
        contractRates: {
          resident: {
            validity: "1st January 2024 to December 2025",
            inclusions: ["Tourism Development Levy"],
            highSeason: {
              single: {
                fullBoard: 70,
                halfBoard: 60
              },
              double: {
                fullBoard: 120,
                halfBoard: 100
              },
              triple: {
                fullBoard: 160,
                halfBoard: 130
              }
            },
            lowSeason: {
              months: ["April", "May", "November"],
              single: {
                fullBoard: 50,
                halfBoard: 40
              },
              double: {
                fullBoard: 80,
                halfBoard: 60
              },
              triple: {
                fullBoard: 120,
                halfBoard: 90
              }
            },
            currency: "USD"
          }
        }
      },
      {
        id: 24,
        name: "Buhoma Lodge",
        location: "Bwindi, Uganda",
        rating: 4.6,
        category: "Eco Lodge",
        description: "Eco-friendly lodge at the edge of Bwindi Impenetrable Forest, perfect for gorilla trekking. The lodge offers comfortable accommodations with full board service and is operated by Exclusive Camps & Lodges Uganda.",
        amenities: ["Gorilla Trekking", "Nature Walks", "Restaurant", "Eco-Friendly Facilities", "Community Tours", "Forest Walks", "Bar"],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1d/bd/87/buhoma-lodge.jpg?w=900&h=500&s=1",
        hasContractRates: true,
        contractRates: {
          validity: "1st January - 31st December 2025",
          "rackRates": {
            "nonResidents": {
              highSeason: {
                "months": ["January", "February", "July", "August", "September", "December"],
                "adult": {
                  "sharing": 495,
                  single: 625
                },
                "child5To12": {
                  "sharing": 250
                },
                "child0To4": "FOC",
                "tripleOccupancy": 360
              },
              shoulderSeason: {
                "months": ["March", "June", "October"],
                "adult": {
                  "sharing": 420,
                  single: 510
                },
                "child5To12": {
                  "sharing": 210
                },
                "child0To4": "FOC",
                "tripleOccupancy": 300
              },
              lowSeason: {
                "months": ["April", "May", "November"],
                "adult": {
                  "sharing": 350,
                  single: 410
                },
                "child5To12": {
                  "sharing": 175
                },
                "child0To4": "FOC",
                "tripleOccupancy": 260
              }
            },
            "eacAndResidents": {
              "allYearRound": {
                "adult": {
                  "sharing": 190,
                  single: 240
                },
                "child5To12": {
                  "sharing": 95
                },
                "child0To4": "FOC",
                "tripleOccupancy": 190
              }
            }
          },
          "stoRates": {
            "nonResidents": {
              highSeason: {
                "months": ["January", "February", "July", "August", "September", "December"],
                "adult": {
                  "sharing": 396,
                  single: 500
                },
                "child5To12": {
                  "sharing": 200
                },
                "child0To4": "FOC",
                "tripleOccupancy": 288
              },
              shoulderSeason: {
                "months": ["March", "June", "October"],
                "adult": {
                  "sharing": 336,
                  single: 408
                },
                "child5To12": {
                  "sharing": 168
                },
                "child0To4": "FOC",
                "tripleOccupancy": 240
              },
              lowSeason: {
                "months": ["April", "May", "November"],
                "adult": {
                  "sharing": 280,
                  single: 328
                },
                "child5To12": {
                  "sharing": 140
                },
                "child0To4": "FOC",
                "tripleOccupancy": 208
              }
            },
            "eacAndResidents": {
              "allYearRound": {
                "adult": {
                  "sharing": 171,
                  single: 216
                },
                "child5To12": {
                  "sharing": 85.50
                },
                "child0To4": "FOC",
                "tripleOccupancy": 171
              }
            }
          },
          "familyRoomSupplement": "$150 additional fee nett and non commissionable per night",
          inclusions: [
            "Full Board accommodation", 
            "3 multiple course meals per day", 
            "All hot beverages and bar snacks", 
            "House drinks", 
            "One complimentary 30 min massage per day", 
            "$35 for any additional 30 min massages and other lodge services"
          ],
          exclusions: [
            "National Park Fees", 
            "Road Transfers", 
            "Premium and non house drinks", 
            "Optional activities",
            "$100 PP/PN compulsory fee for all guests of Exclusive Camps and Lodges"
          ],
          "transfers": {
            "rackRates": {
              "kihihiAirstrip": {
                "oneWay": 280
              },
              "ruhijaArea": {
                "oneWay": 135
              },
              "buhomaArea": {
                "gorillaTrekking": 90
              },
              "ishashaWilderness": {
                "oneWay": 305
              },
              "mweyaArea": {
                "oneWay": 590
              },
              "kigaliOrKibale": {
                "oneWay": 805
              },
              "privateVehicle": {
                halfDay: 210,
                fullDay: 290
              }
            },
            "stoRates": {
              "kihihiAirstrip": {
                "oneWay": 224
              },
              "ruhijaArea": {
                "oneWay": 108
              },
              "buhomaArea": {
                "gorillaTrekking": 72
              },
              "ishashaWilderness": {
                "oneWay": 244
              },
              "mweyaArea": {
                "oneWay": 472
              },
              "kigaliOrKibale": {
                "oneWay": 644
              },
              "privateVehicle": {
                halfDay: 168,
                fullDay: 232
              }
            }
          },
          "optionalActivities": {
            "gorillaTrekking": {
              "permitFee": 800,
              "handlingFee": 35
            },
            "forestWalk": {
              "fee": 40,
              "notes": "Plus National Park Entry Fees as applicable"
            },
            "agarthasTaste": {
              "fee": 15
            },
            "buhomaCommunityTour": {
              "fee": 30
            },
            "batwaExperience": {
              "fee": 30
            }
          },
          currency: "USD",
          "notes": "All optional activity fees are net non-commissionable rates, subject to advance booking and for in-house ECL guests only"
        }
      },
    {
      id: 25,
      name: "Bush and Beyond",
      location: "Multiple Locations, Kenya",
      rating: 4.8,
      category: "Luxury Collection",
      description: "Collection of exclusive wilderness properties across Kenya's most stunning locations.",
      amenities: ["Game Drives", "Luxury Accommodation", "Gourmet Dining", "Unique Experiences"],
      priceCategory: "Ultra Luxury",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/d9/29/60/emakoko-in-nairobi-national.jpg?w=1200&h=900&s=1",
      featured: true
    },
    {
      id: 26,
      name: "Carnivore Restaurant",
      location: "Nairobi, Kenya",
      rating: 4.5,
      category: "Restaurant",
      description: "Legendary restaurant known for its all-you-can-eat meat feast and safari atmosphere.",
      amenities: ["Specialty Dining", "Bar", "Entertainment", "Event Space"],
      priceCategory: "Mid-range",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/f4/12/62/carnivore-restaurant.jpg?w=900&h=500&s=1"
    },
    {
        id: 27,
        name: "Chaka Ranch",
        location: "Kenya",
        rating: 4.2,
        category: "Ranch Resort",
        description: "Family-friendly ranch offering outdoor activities and authentic farm experiences.",
        amenities: ["Horse Riding", "Farm Activities", "Restaurant", "Swimming Pool", "Water Park", "Roller Skating", "Go-Kart", "Paintball", "Quad Bike"],
        priceCategory: "Mid-range",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/ec/07/e9/chaka-ranch.jpg?w=900&h=500&s=1",
        featured: true,
        hasContractRates: true,
        contractRates: {
          accommodation: {
            fullBoard: {
              standard: {
                single: 11000,
                double: 9500,
                triple: 9500
              },
              superior: {
                single: 13000,
                double: 11500,
                triple: 11500
              },
              deluxe: {
                single: 14000,
                double: 12500,
                triple: 12500
              },
              executive: {
                single: 16000,
                double: 14500,
                triple: 14500
              }
            },
            halfBoard: {
              standard: {
                single: 9000,
                double: 7500,
                triple: 7500
              },
              superior: {
                single: 11000,
                double: 9500,
                triple: 9500
              },
              deluxe: {
                single: 12000,
                double: 10500,
                triple: 10500
              },
              executive: {
                single: 14000,
                double: 12500,
                triple: 12500
              }
            }
          },
          activities: {
            individual: {
              chakaTrain: 300,
              chakaDizney: 1000,
              rollerSkating: 1000,
              actionArena: 2000,
              waterPark: 1500,
              kiddieRides: 1000,
              quadBike: 3000,
              juniorGoKart: 2000,
              seniorGoKart: 3000,
              paintball: 2000
            },
            packages: {
              paintball: {
                paintballWaterParkActionArena: 4500,
                paintballActionArenaRollerSkating: 4000,
                paintballActionArenaGoKart: 6000,
                paintballActionArenaQuad: 6000,
                paintballQuadGoKart: 7000,
                paintballActionArenaGoKartQuad: 8500
              },
              junior: {
                withWaterPark: {
                  waterParkActionArenaRollerSkating: 3500,
                  waterParkActionArenaQuad: 5500,
                  waterParkActionArenaJuniorGoKart: 4500,
                  waterParkJuniorGoKartQuad: 5500,
                  waterParkQuadRollerSkating: 4500,
                  waterParkJuniorGoKartRollerSkating: 3500,
                  waterParkActionArenaJuniorGoKartQuad: 7000,
                  waterParkActionArenaJuniorGoKartQuadRollerSkating: 7500
                },
                withoutWaterPark: {
                  actionArenaJuniorGoKartQuad: 6000,
                  actionArenaJuniorGoKartRollerSkating: 4000,
                  actionArenaQuadRollerSkating: 5000,
                  actionArenaJuniorGoKartQuadRollerSkating: 6500
                }
              },
              senior: {
                withWaterPark: {
                  waterParkActionArenaRollerSkating: 3500,
                  waterParkActionArenaSeniorQuad: 5500,
                  waterParkActionArenaSeniorGoKart: 5500,
                  waterParkSeniorGoKartSeniorQuad: 6500,
                  waterParkSeniorQuadRollerSkating: 4500, 
                  waterParkSeniorGoKartRollerSkating: 4500,
                  waterParkActionArenaSeniorGoKartSeniorQuad: 8000,
                  waterParkActionArenaSeniorGoKartSeniorQuadRollerSkating: 8500
                },
                withoutWaterPark: {
                  actionArenaSeniorGoKartSeniorQuad: 6500,
                  actionArenaSeniorGoKartRollerSkating: 4500,
                  actionArenaSeniorQuadRollerSkating: 5000,
                  actionArenaSeniorGoKartSeniorQuadRollerSkating: 7500
                }
              }
            }
          },
          policies: {
            childPolicy: {
              under3: "No charges for children under the age of 3 years. Maximum 2 children under 3 yrs per room/booking, Kshs. 4,500 charges apply per extra child below the set limit of 2 children below the age of 3 years.",
              childSharingWithAdult: "Child sharing with adult 50% of sharing occupancy rate. Maximum 2 children per room i.e. 1 adult 2 children",
              childrenSharingStandardSuperior: "Children sharing (Standard and Superior Rooms) 75% of sharing occupancy rate. Maximum 3 children per room.",
              childrenSharingDeluxeExecutive: "Children sharing (Deluxe Rooms and Executive Rooms) 85% of sharing occupancy rate. Maximum 3 children per room."
            },
            festiveSeasonSupplementCharge: "Ksh.2,500 Per Person Per night applicable to Easter Friday to Sunday, 29th March to 31st March and from 22nd December 2024 to 3rd January 2025."
          },
          discounts: {
            multipleActivities: "Buy 3 or more activities per person and get a 10% discount"
          },
          contactInfo: {
            address: "P.O BOX 21212 - 00505 NAIROBI, KENYA",
            centralReservations: ["0719242897", "0738600046", "0719242885"],
            email: "reservations@chakaranch.com"
          }
        }
      },
      {
        id: 28,
        name: "Chale Island",
        location: "Diani Beach, South Coast Kenya",
        rating: 4.7,
        category: "Island Resort",
        description: "Private island resort offering exclusivity and natural beauty on Kenya's coast.",
        amenities: ["Private Beaches", "Spa", "Water Sports", "Restaurant", "Massage", "Yoga Centre", "Gym"],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/93/ed/d1/chale-island-resort.jpg?w=900&h=500&s=1",
        featured: true,
        hasContractRates: true,
        contractRates: {
          chaleIsland: {
            nonResident: {
              deluxe: {
                regular: { pps: 200, single: 280 },
                spring: { pps: 175, single: 245 },
                festive: { pps: 350, single: 490 }
              },
              towerSuite: {
                regular: { pps: 250, single: 350 },
                spring: { pps: 200, single: 280 },
                festive: { pps: 400, single: 560 }
              },
              oceanViewBanda: {
                regular: { pps: 270, single: 378 },
                spring: { pps: 210, single: 294 },
                festive: { pps: 475, single: 665 }
              },
              suiteOnTheRocks: {
                regular: { pps: 575, single: 805 },
                spring: { pps: 500, single: 700 },
                festive: { pps: 750, single: 1050 }
              },
              overwaterSuite: {
                regular: { pps: 875, single: 1225 },
                spring: { pps: 800, single: 1120 },
                festive: { pps: 1050, single: 1470 }
              }
            },
            resident: {
              deluxe: {
                regular: 50000,
                spring: 42000,
                festive: 70000
              },
              towerSuite: {
                regular: 65000,
                spring: 55000,
                festive: 90000
              },
              oceanViewBanda: {
                regular: 60000,
                spring: 50000,
                festive: 72000
              },
              suiteOnTheRocks: {
                regular: 270000,
                spring: 260000,
                festive: 315000
              },
              overwaterSuite: {
                regular: 180000,
                spring: 170000,
                festive: 225000
              }
            }
          },
          privateVillas: {
            nonResident: {
              beachHouse: {
                regular: { baseRate: 2400, additionalAdult: 300, additionalChild: 70 },
                festive: { baseRate: 4560, additionalAdult: 428, additionalChild: 120 }
              },
              fishermans: {
                regular: { baseRate: 2700, additionalAdult: 338, additionalChild: 70 },
                festive: { baseRate: 5856, additionalAdult: 549, additionalChild: 120 }
              },
              lazyDays: {
                regular: { baseRate: 2100, additionalAdult: 263, additionalChild: 70 },
                festive: { baseRate: 4560, additionalAdult: 428, additionalChild: 120 }
              },
              familyCottage: {
                regular: { baseRate: 2100, additionalAdult: 263, additionalChild: 70 },
                festive: { baseRate: 5200, additionalAdult: 488, additionalChild: 120 }
              }
            },
            resident: {
              beachHouse: {
                regular: { baseRate: 264000, additionalAdult: 33000, additionalChild: 7700 },
                festive: { baseRate: 501600, additionalAdult: 47025, additionalChild: 13200 }
              },
              fishermans: {
                regular: { baseRate: 297000, additionalAdult: 37125, additionalChild: 7700 },
                festive: { baseRate: 644160, additionalAdult: 60390, additionalChild: 13200 }
              },
              lazyDays: {
                regular: { baseRate: 231000, additionalAdult: 28875, additionalChild: 7700 },
                festive: { baseRate: 501600, additionalAdult: 47025, additionalChild: 13200 }
              },
              familyCottage: {
                regular: { baseRate: 231000, additionalAdult: 28875, additionalChild: 7700 },
                festive: { baseRate: 572000, additionalAdult: 53625, additionalChild: 13200 }
              }
            }
          },
          nomadBeachResort: {
            nonResident: {
              seaBreezeRoom: {
                regular: { pps: 140, single: 196 },
                spring: { pps: 112, single: 157 },
                festive: { pps: 210, single: 294 }
              },
              oceanViewSuite: {
                regular: { pps: 200, single: 280 },
                spring: { pps: 175, single: 245 },
                festive: { pps: 273, single: 382 }
              },
              beachCottage: {
                regular: { pps: 290, single: 406 },
                spring: { pps: 250, single: 350 },
                festive: { pps: 475, single: 665 }
              },
              familySuite: {
                regular: { baseRate: 750, extraBed: 131 },
                spring: { baseRate: 645, extraBed: 113 },
                festive: { baseRate: 1000, extraBed: 175 }
              }
            },
            resident: {
              seaBreezeRoom: {
                regular: { pps: 14000, single: 19600 },
                spring: { pps: 11200, single: 15680 },
                festive: { pps: 21000, single: 29400 }
              },
              oceanViewSuite: {
                regular: { pps: 20300, single: 28420 },
                spring: { pps: 17500, single: 24500 },
                festive: { pps: 27300, single: 38220 }
              },
              beachCottage: {
                regular: { pps: 31000, single: 43400 },
                spring: { pps: 25000, single: 35000 },
                festive: { pps: 47500, single: 66500 }
              },
              familySuite: {
                regular: { baseRate: 75000, extraBed: 13125 },
                spring: { baseRate: 64500, extraBed: 11288 },
                festive: { baseRate: 100000, extraBed: 17500 }
              }
            }
          },
          extras: {
            nonResident: {
              fullBoardAdult: 45,
              fullBoardChild: 20,
              allInclusiveAdult: 90,
              allInclusiveChild: 45,
              transferAirportToResort: 70,
              transferDianiToChale: 35
            },
            resident: {
              fullBoardAdult: 3000,
              fullBoardChild: 1500,
              allInclusiveAdult: 7500,
              allInclusiveChild: 3000,
              transferAirportToResort: 7700,
              transferDianiToChale: 3850
            },
            honeymoonPackage: {
              description: "Free of charge for honeymooners within 6 months after wedding with minimum 3 nights stay in premium oceanfront rooms",
              includes: [
                "Welcome drink upon arrival",
                "Flower arrangement",
                "One bottle of wine & fruit platter",
                "Couple massage"
              ]
            }
          }
        }
      },
      {
        id: 29,
        name: "Chumbe Island Coral Park",
        location: "Zanzibar, Tanzania",
        rating: 4.6,
        category: "Eco-Resort",
        description: "Award-winning conservation area with zero-impact eco-bungalows in a protected coral reef sanctuary and forest reserve. A not-for-profit enterprise funding conservation management and environmental education.",
        amenities: [
          "Protected Coral Reef", 
          "Guided Snorkeling", 
          "Forest Tours", 
          "Educational Center", 
          "Full-Board Meals", 
          "Night Snorkels", 
          "Coconut Crab Tours", 
          "Laundry Service"
        ],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/74/46/9e/chumbe-island-coral-park.jpg?w=900&h=500&s=1",
        featured: true,
        hasContractRates: true,
        contractRates: {
          bungalows: {
            gardenBungalow: {
              highSeason: 280,
              lowSeason: 250
            },
            seaviewBungalow: {
              highSeason: 340,
              lowSeason: 305
            },
            seafrontBungalow: {
              highSeason: 360,
              lowSeason: 325
            }
          },
          seasons: {
            highSeason: ["June 1 - September 30", "December 16 - February 28"],
            lowSeason: ["May 1-31", "October 1 - December 15", "March 1-31"],
            closedSeason: ["April 1-30"]
          },
          childPolicy: {
            under2: "Free of charge",
            under12: "50% discount"
          },
          inclusions: [
            "Boat transfers to/from island (morning departures)",
            "Eco-bungalow accommodation",
            "Full-board meals",
            "Non-alcoholic beverages and snacks",
            "Snorkeling equipment and guided activities",
            "Guided forest tours",
            "Educational talks",
            "Laundry service",
            "All taxes"
          ],
          extras: {
            infrastructureTax: 5
          },
          paymentPolicy: {
            deposit: "50% to confirm booking",
            finalPayment: "Full balance 14 days before arrival"
          },
          cancellationPolicy: {
            within30Days: "50% charge",
            within14Days: "75% charge",
            within7Days: "100% charge"
          }
        }
      },
      {
        id: 30,
        name: "Ciala Resort",
        location: "Kisumu, Kenya",
        rating: 4.5,
        category: "Luxury Resort",
        description: "Premium lakeside resort in Kisumu offering luxury accommodation with a range of room categories, conference facilities, team building programs, and exclusive villa options with personalized butler service.",
        amenities: [
          "Swimming Pool", 
          "Restaurant", 
          "Conference Facilities", 
          "Team Building Activities", 
          "Hiking Programs", 
          "Event Grounds", 
          "Butler Service", 
          "Room Service", 
          "Airport Transfers"
        ],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/21/99/d3/caption.jpg?w=900&h=500&s=1",
        featured: true,
        hasContractRates: true,
        contractRates: {
          resident: {
            rooms: {
              superior: {
                single: {
                  bedAndBreakfast: 15000,
                  halfBoard: 18000,
                  fullBoard: 21000
                },
                double: {
                  bedAndBreakfast: 18000,
                  halfBoard: 24000,
                  fullBoard: 30000
                }
              },
              deluxe: {
                single: {
                  bedAndBreakfast: 17000,
                  halfBoard: 20000,
                  fullBoard: 23000
                },
                double: {
                  bedAndBreakfast: 20000,
                  halfBoard: 26000,
                  fullBoard: 32000
                }
              },
              superiorDeluxe: {
                single: {
                  bedAndBreakfast: 19000,
                  halfBoard: 22000,
                  fullBoard: 25000
                },
                double: {
                  bedAndBreakfast: 22000,
                  halfBoard: 28000,
                  fullBoard: 34000
                }
              },
              executiveSuite: {
                single: {
                  bedAndBreakfast: 25000,
                  halfBoard: 30000,
                  fullBoard: 35000
                },
                double: {
                  bedAndBreakfast: 28000,
                  halfBoard: 34000,
                  fullBoard: 40000
                }
              },
              villa: {
                upToSixPeople: {
                  bedAndBreakfast: 100000,
                  halfBoard: 115000,
                  fullBoard: 130000
                }
              }
            }
          },
          nonResident: {
            surcharge: "35% above resident rates"
          },
          extras: {
            extraPerson: {
              adult: {
                bedAndBreakfast: 5000,
                halfBoard: 8000,
                fullBoard: 11000
              },
              child5to12: {
                bedAndBreakfast: 4000,
                halfBoard: 6500,
                fullBoard: 9000
              },
              child3to5: {
                bedAndBreakfast: 1250,
                meals: "As per consumption"
              }
            },
            twinOccupancy: {
              perPersonSharing: {
                bedAndBreakfast: 9500,
                halfBoard: 12500,
                fullBoard: 15000
              }
            },
            meals: {
              adult: {
                breakfast: 2500,
                lunch: 3000,
                dinner: 3000,
                buffetMeal: 3000
              },
              child3to12: {
                breakfast: 1500,
                lunch: 2000,
                dinner: 2000
              }
            },
            swimming: {
              adult: 1000,
              child5to12: 500
            },
            transfers: {
              cialaToTown: 3500,
              cialaToAirport: 3000
            },
            roomService: 500
          },
          conferenceFacilities: {
            fullDayConference: {
              pricePerPerson: 4000,
              includes: [
                "AM/PM tea & snacks",
                "Stationery",
                "Water",
                "Buffet lunch with soft drink",
                "Projector",
                "PA system"
              ]
            },
            halfDayConference: {
              pricePerPerson: 3500,
              includes: [
                "AM/PM tea & snacks",
                "Stationery",
                "Water",
                "Buffet lunch with soft drink",
                "Projector",
                "PA system"
              ]
            },
            teamBuilding: {
              pricePerPerson: 4500,
              includes: [
                "AM/PM tea & snacks",
                "Water",
                "Buffet lunch with soft drink",
                "Grounds charges",
                "Equipment",
                "Instructor",
                "PA system"
              ]
            },
            hiking: {
              pricePerPerson: 6500,
              includes: [
                "Full buffet/champagne breakfast",
                "Buffet lunch with soft drink",
                "Hiking guide",
                "Water"
              ]
            },
            roomCharges: {
              hallOnly: {
                pricePerPerson: 750,
                minimumPeople: 12
              }
            },
            eventGrounds: {
              price: 200000,
              capacity: 3000
            }
          }
        }
      },
    // Continuing with more hotels
    {
      id: 31,
      name: "Coastal Aviation TZ",
      location: "Tanzania",
      rating: 4.4,
      category: "Transport Service",
      description: "Premium air charter service connecting Tanzania's national parks and coastal areas.",
      amenities: ["Safari Flights", "Scheduled Services", "Private Charters"],
      priceCategory: "Premium",
      imageUrl: "/api/placeholder/800/500"
    },
    {
        id: 32,
        name: "Crowne Plaza Nairobi Airport",
        location: "Nairobi, Kenya",
        rating: 4.5,
        category: "Airport Hotel",
        description: "Conveniently located within Jomo Kenyatta International Airport complex, offering luxury accommodations designed following vastu principles. Features 144 rooms created specifically to appeal to the discerning traveler.",
        amenities: [
          "Airport Transfers", 
          "Swimming Pool", 
          "Restaurant", 
          "Business Center", 
          "Spa", 
          "24-hour Coffee Shop", 
          "Bar", 
          "Fitness Center", 
          "Conference Facilities", 
          "Landscaped Gardens",
          "Infinity Pool"
        ],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/06/51/96/hotel-exterior-during.jpg?w=900&h=-1&s=1",
        featured: false,
        hasContractRates: true,
        contractRates: {
          accommodation: {
            rooms: {
              superior: {
                single: 150,
                double: 180
              },
              superiorWithBalcony: {
                single: 200,
                double: 230
              },
              clubRoom: {
                single: 280,
                double: 310
              },
              executiveSuite: {
                single: 380,
                double: 410
              }
            },
            dayRoom: {
              standard: 110,
              otherCategories: "70% of contracted rate"
            }
          },
          meals: {
            breakfast: {
              adults: "Included in room rate (USD 30)",
              children06: "Complimentary",
              children711: "50% discount"
            },
            lunch: {
              adults: 40,
              children06: "Complimentary",
              children711: "50% discount"
            },
            dinner: {
              adults: 40,
              children06: "Complimentary",
              children711: "50% discount"
            }
          },
          policies: {
            general: {
              rateIncludes: "Breakfast, taxes, and return airport transfers",
              validityPeriod: "1st January 2025 through 31st December 2025",
              rateReview: "Every quarter based on room night productivity",
              availability: "Space available basis unless allotments have been agreed upon",
              rateType: "Non-commissionable, for transient travelers only"
            },
            familyPlan: {
              babyCot: "Complimentary for all room types",
              extraBedChild411: 60,
              extraBedAdult: 60
            },
            roomCapacity: {
              superiorRooms: "Can only accommodate an extra baby cot, not a 3rd extra bed for an adult",
              clubAndExecutive: "Can accommodate 3rd adult extra bed",
              childrenSharing: "Children 0-12 years sharing allowed in Superior room with no extra bed, in Deluxe and all other room categories a rollaway bed will be provided only in double rooms (not in twin room)"
            },
            checkInOut: {
              checkIn: "12:00 noon",
              checkOut: "10:00am",
              lateCheckout: "10:00am to 6:00pm charged at 70% of contracted rate, beyond 6:00pm charged at full contract rate"
            },
            cancellation: "All cancellations must be made at least 48 hours prior to arrival. Failure to cancel a guaranteed reservation will result in a charge of one night's room rate and tax.",
            payment: "Full pre-payment required at least 7 days prior to arrival unless prior credit arrangements have been made."
          },
          groupRates: "Negotiable on ad hoc basis for minimum of 10 paying rooms and above",
          contactInfo: {
            reservations: {
              phone: ["0709 222 444", "0709 222 999", "0709 444 999"],
              email: "reservations@crowneplazanairobiairport.com"
            },
            sales: {
              contactPerson: "Kenneth Thuo",
              designation: "Director of Sales",
              email: "ken.thuo@crowneplazanairobiairport.com",
              phone: "+2540110896317"
            }
          }
        },
        details: {
          location: "Within Jomo Kenyatta International Airport complex",
          foodAndBeverage: {
            kitchen9: "Multi-cuisine restaurant",
            aroma: "24-hour coffee shop lounge",
            velocity: "Premiere bar"
          },
          roomTypes: {
            superior: 117,
            superiorWithBalcony: 16,
            clubRoom: 7,
            executiveSuite: 4
          }
        }
      },
    {
      id: 33,
      name: "Diamond Leisure",
      location: "Kenya",
      rating: 4.3,
      category: "Resort",
      description: "Leisure resort offering comprehensive recreational facilities and comfortable accommodation.",
      amenities: ["Swimming Pool", "Sports Facilities", "Restaurant", "Entertainment"],
      priceCategory: "Mid-range",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/7e/80/7e/diamonds-dream-of-africa.jpg?w=900&h=500&s=1"
    },
    {
        id: 34,
        name: "Diani Reef Beach Resort & Spa",
        location: "Diani Beach, Kenya",
        rating: 4.7,
        category: "Beach Resort",
        description: "Award-winning luxury beach resort on Kenya's most beautiful coast offering various accommodation options from standard rooms to presidential suites, with multiple dining choices, spa facilities, and water sports activities.",
        amenities: [
          "Spa", 
          "Multiple Pools", 
          "Water Sports", 
          "Several Restaurants", 
          "Free Wi-Fi", 
          "Complimentary Water", 
          "Welcome Drink", 
          "Fins and Waves Bar",
          "Fitness Activities",
          "Padel Court",
          "Table Tennis",
          "Billiard",
          "Beach Volleyball", 
          "Kids Club",
          "Entertainment Program"
        ],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/95/4a/ce/diani-reef-beach-resort.jpg?w=900&h=500&s=1",
        featured: true,
        hasContractRates: true,
        contractRates: {
          specialTourOperator: {
            currency: "USD",
            rooms: {
              standardRoom: {
                periods: [
                  {
                    dates: "06.01.25-31.03.25",
                    single: 112,
                    doublePerPersonSharing: 70
                  },
                  {
                    dates: "01.04.25-15.07.25",
                    single: 106,
                    doublePerPersonSharing: 66
                  },
                  {
                    dates: "16.07.25-31.08.25",
                    single: 114,
                    doublePerPersonSharing: 72
                  },
                  {
                    dates: "01.09.25-31.10.25",
                    single: 109,
                    doublePerPersonSharing: 68
                  },
                  {
                    dates: "01.11.25-21.12.25",
                    single: 114,
                    doublePerPersonSharing: 72
                  },
                  {
                    dates: "22.12.25-04.01.26",
                    single: 255,
                    doublePerPersonSharing: 165
                  }
                ]
              },
              standardSeaFacingRoom: {
                periods: [
                  {
                    dates: "06.01.25-31.03.25",
                    single: 150,
                    doublePerPersonSharing: 94
                  },
                  {
                    dates: "01.04.25-15.07.25",
                    single: 141,
                    doublePerPersonSharing: 88
                  },
                  {
                    dates: "16.07.25-31.08.25",
                    single: 150,
                    doublePerPersonSharing: 94
                  },
                  {
                    dates: "01.09.25-31.10.25",
                    single: 144,
                    doublePerPersonSharing: 90
                  },
                  {
                    dates: "01.11.25-21.12.25",
                    single: 150,
                    doublePerPersonSharing: 94
                  },
                  {
                    dates: "22.12.25-04.01.26",
                    single: 290,
                    doublePerPersonSharing: 187
                  }
                ]
              },
              deluxePartialSeaFacing: {
                periods: [
                  {
                    dates: "06.01.25-31.03.25",
                    single: 188,
                    doublePerPersonSharing: 118
                  },
                  {
                    dates: "01.04.25-15.07.25",
                    single: 176,
                    doublePerPersonSharing: 110
                  },
                  {
                    dates: "16.07.25-31.08.25",
                    single: 185,
                    doublePerPersonSharing: 116
                  },
                  {
                    dates: "01.09.25-31.10.25",
                    single: 179,
                    doublePerPersonSharing: 112
                  },
                  {
                    dates: "01.11.25-21.12.25",
                    single: 185,
                    doublePerPersonSharing: 116
                  },
                  {
                    dates: "22.12.25-04.01.26",
                    single: 340,
                    doublePerPersonSharing: 220
                  }
                ]
              },
              juniorSuite: {
                periods: [
                  {
                    dates: "06.01.25-31.03.25",
                    singleOrDouble: 330
                  },
                  {
                    dates: "01.04.25-15.07.25",
                    singleOrDouble: 275
                  },
                  {
                    dates: "16.07.25-31.08.25",
                    singleOrDouble: 330
                  },
                  {
                    dates: "01.09.25-31.10.25",
                    singleOrDouble: 275
                  },
                  {
                    dates: "01.11.25-21.12.25",
                    singleOrDouble: 330
                  },
                  {
                    dates: "22.12.25-04.01.26",
                    singleOrDouble: 605
                  }
                ]
              }
            },
            mealPlans: {
              halfBoard: "Included in base rates",
              fullBoardSupplement: {
                adult: 30,
                child5to12: 15,
                festive: {
                  adult: 40,
                  child5to12: 20
                }
              }
            },
            childrenPolicy: {
              sharing: {
                under5: "FOC (maximum 2 children)",
                age6to12: "45% of per adult sharing rate (maximum 2 children)"
              },
              ownRoom: {
                under5: "75% of adult double rate (maximum 3 children)",
                age6to12: "75% of adult double rate (maximum 3 children)"
              },
              age12Plus: "Full adult rate"
            },
            festiveSupplements: {
              easterSunday: {
                date: "20.04.2025",
                adult: 30,
                child5to12: 15
              },
              christmasEve: {
                date: "24.12.2025",
                adult: 40,
                child5to12: 20
              },
              newYearsEve: {
                date: "31.12.2025",
                adult: 50,
                child5to12: 25
              }
            }
          },
          travelAgents: {
            currency: "KES",
            commission: "20%",
            rooms: {
              standardRoom: {
                seasons: {
                  firstSeason: {
                    dates: "03.01.2024-30.06.2024",
                    single: {
                      bedAndBreakfast: 15400,
                      halfBoard: 17600,
                      fullBoard: 19800
                    },
                    double: {
                      bedAndBreakfast: 17600,
                      halfBoard: 19800,
                      fullBoard: 22000
                    }
                  },
                  easterPeriod: {
                    dates: "29.03.2024-01.04.2024",
                    single: {
                      bedAndBreakfast: 17000,
                      halfBoard: 18000,
                      fullBoard: 20000
                    },
                    double: {
                      bedAndBreakfast: 21000,
                      halfBoard: 23000,
                      fullBoard: 25000
                    }
                  },
                  secondSeason: {
                    dates: "01.07.2024-21.12.2024",
                    single: {
                      bedAndBreakfast: 15400,
                      halfBoard: 17600,
                      fullBoard: 19800
                    },
                    double: {
                      bedAndBreakfast: 17600,
                      halfBoard: 19800,
                      fullBoard: 22000
                    }
                  },
                  festive: {
                    dates: "22.12.2024-05.01.2025",
                    single: {
                      bedAndBreakfast: 30000,
                      halfBoard: 32400,
                      fullBoard: 35000
                    },
                    double: {
                      bedAndBreakfast: 38500,
                      halfBoard: 41800,
                      fullBoard: 45000
                    }
                  }
                }
              },
              standardSeaFacing: {
                seasons: {
                  firstSeason: {
                    dates: "03.01.2024-30.06.2024",
                    single: {
                      bedAndBreakfast: 17600,
                      halfBoard: 19800,
                      fullBoard: 22000
                    },
                    double: {
                      bedAndBreakfast: 19800,
                      halfBoard: 22000,
                      fullBoard: 24200
                    }
                  },
                  easterPeriod: {
                    dates: "29.03.2024-01.04.2024",
                    single: {
                      bedAndBreakfast: 18000,
                      halfBoard: 20000,
                      fullBoard: 22000
                    },
                    double: {
                      bedAndBreakfast: 23000,
                      halfBoard: 25000,
                      fullBoard: 27000
                    }
                  },
                  secondSeason: {
                    dates: "01.07.2024-21.12.2024",
                    single: {
                      bedAndBreakfast: 18000,
                      halfBoard: 20000,
                      fullBoard: 22000
                    },
                    double: {
                      bedAndBreakfast: 20000,
                      halfBoard: 22000,
                      fullBoard: 24000
                    }
                  },
                  festive: {
                    dates: "22.12.2024-05.01.2025",
                    single: {
                      bedAndBreakfast: 32000,
                      halfBoard: 35000,
                      fullBoard: 42900
                    },
                    double: {
                      bedAndBreakfast: 41000,
                      halfBoard: 45000,
                      fullBoard: 48300
                    }
                  }
                }
              },
              deluxeRoom: {
                seasons: {
                  firstSeason: {
                    dates: "03.01.2024-30.06.2024",
                    single: {
                      bedAndBreakfast: 19800,
                      halfBoard: 22000,
                      fullBoard: 24200
                    },
                    double: {
                      bedAndBreakfast: 22000,
                      halfBoard: 24200,
                      fullBoard: 26400
                    }
                  },
                  easterPeriod: {
                    dates: "29.03.2024-01.04.2024",
                    single: {
                      bedAndBreakfast: 21000,
                      halfBoard: 23000,
                      fullBoard: 25000
                    },
                    double: {
                      bedAndBreakfast: 25000,
                      halfBoard: 27000,
                      fullBoard: 29000
                    }
                  },
                  secondSeason: {
                    dates: "01.07.2024-21.12.2024",
                    single: {
                      bedAndBreakfast: 20000,
                      halfBoard: 22000,
                      fullBoard: 24000
                    },
                    double: {
                      bedAndBreakfast: 22000,
                      halfBoard: 24000,
                      fullBoard: 26000
                    }
                  },
                  festive: {
                    dates: "22.12.2024-05.01.2025",
                    single: {
                      bedAndBreakfast: 40700,
                      halfBoard: 44000,
                      fullBoard: 47300
                    },
                    double: {
                      bedAndBreakfast: 44000,
                      halfBoard: 47300,
                      fullBoard: 49500
                    }
                  }
                }
              }
            },
            childPolicy: {
              age0to5Sharing: "FREE",
              age6to12Sharing: "As per rate grid",
              age6to12OwnRoom: "75% of adult double rate (max. 2 children)"
            }
          },
          allInclusive: {
            currency: "KES",
            rooms: {
              standardGarden: {
                perPersonSharing: {
                  seasons: [
                    {
                      dates: "06.01.2025-16.04.2025",
                      rate: 18000
                    },
                    {
                      dates: "17.04.2025-21.04.2025",
                      rate: 20000
                    },
                    {
                      dates: "22.04.2025-30.06.2025",
                      rate: 17000
                    },
                    {
                      dates: "01.07.2025-22.12.2025",
                      rate: 18000
                    },
                    {
                      dates: "21.12.2025-04.01.2026",
                      rate: 32000
                    }
                  ]
                }
              },
              standardSeaView: {
                perPersonSharing: {
                  seasons: [
                    {
                      dates: "06.01.2025-16.04.2025",
                      rate: 21000
                    },
                    {
                      dates: "17.04.2025-21.04.2025",
                      rate: 26000
                    },
                    {
                      dates: "22.04.2025-30.06.2025",
                      rate: 21000
                    },
                    {
                      dates: "01.07.2025-22.12.2025",
                      rate: 21500
                    },
                    {
                      dates: "21.12.2025-04.01.2026",
                      rate: 34000
                    }
                  ]
                }
              },
              deluxe: {
                perPersonSharing: {
                  seasons: [
                    {
                      dates: "06.01.2025-16.04.2025",
                      rate: 23000
                    },
                    {
                      dates: "17.04.2025-21.04.2025",
                      rate: 27500
                    },
                    {
                      dates: "22.04.2025-30.06.2025",
                      rate: 22000
                    },
                    {
                      dates: "01.07.2025-22.12.2025",
                      rate: 23000
                    },
                    {
                      dates: "21.12.2025-04.01.2026",
                      rate: 35000
                    }
                  ]
                }
              },
              juniorSuite: {
                perPersonSharing: {
                  seasons: [
                    {
                      dates: "06.01.2025-16.04.2025",
                      rate: 34000
                    },
                    {
                      dates: "17.04.2025-21.04.2025",
                      rate: 36500
                    },
                    {
                      dates: "22.04.2025-30.06.2025",
                      rate: 22000
                    },
                    {
                      dates: "01.07.2025-22.12.2025",
                      rate: 34000
                    },
                    {
                      dates: "21.12.2025-04.01.2026",
                      rate: 47000
                    }
                  ]
                }
              }
            },
            supplements: {
              singleRoom: 27500,
              childSharingWithOneAdult: 5000,
              premiumAllInclusive: 1500
            },
            childPolicy: {
              underAge5First: "Free",
              underAge5Second: 5000,
              age6to12: 5000,
              thirdAdult: 11250
            },
            allInclusiveIncludes: [
              "Welcome drink",
              "In-room mini fridge, coffee and tea",
              "All meals at CRC Restaurant",
              "Drinks at Fins and Waves bar (10am-11pm)",
              "Snacks (11am-12pm and 4pm-5pm)",
              "Wi-Fi in rooms and public areas",
              "Non-motorized water sports",
              "Daily entertainment program",
              "Kids Club",
              "Beach and pool towels",
              "Sunshades and sun loungers"
            ],
            premiumAllInclusiveAdds: [
              "Express check-in",
              "Late check-out (subject to availability)",
              "Full room service at no charge",
              "Premium branded spirits, beer and wine",
              "Reserved sunbeds with drinks service"
            ]
          }
        },
        policies: {
          cancellation: {
            standard: "Cancellations within 7 days of arrival - 100% charge",
            festive: "Cancellations within 21 days of arrival - 100% charge"
          },
          payment: "Payment must be received 7 days prior to arrival",
          minimumStay: {
            festive: "3 nights during festive season"
          },
          checkInOut: {
            checkIn: "14:00",
            checkOut: "12:00"
          }
        },
        bankDetails: {
          accountName: "Diani Reef Beach Resort & Spa",
          bank: "Diamond Trust Bank",
          branch: "Diani",
          swiftCode: "DTKEKENA",
          bankCode: "DTKE",
          accountNumberUSD: "0215114002",
          accountNumberKES: "0215114001"
        }
      },
      {
        id: 35,
        name: "Diani Sea Resort",
        location: "Diani Beach, Kenya",
        rating: 4.4,
        category: "Beach Resort",
        description: "Family-friendly all-inclusive resort located on the pristine white sands of Diani Beach, offering comfortable accommodations with various room categories including Comfort, Bahari, and Ocean Suite options.",
        amenities: ["Swimming Pool", "Kids Club", "Restaurant", "Beach Access", "All-Inclusive Packages", "Family Rooms"],
        priceCategory: "Mid-range",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/56/73/ed/diani-sea-resort.jpg?w=900&h=-1&s=1",
        hasContractRates: true,
        contractRates: {
          nonResident: {
            currency: "USD",
            mealPlan: "All-Inclusive",
            rooms: {
              comfort: {
                seasons: [
                  {
                    dates: "05.01.2025-30.04.2025",
                    double: 129,
                    single: 180
                  },
                  {
                    dates: "01.05.2025-18.05.2025",
                    double: 105,
                    single: 147
                  },
                  {
                    dates: "19.05.2025-20.06.2025",
                    status: "CLOSED"
                  },
                  {
                    dates: "21.06.2025-08.07.2025",
                    double: 105,
                    single: 147
                  },
                  {
                    dates: "09.07.2025-30.09.2025",
                    double: 123,
                    single: 171
                  },
                  {
                    dates: "01.10.2025-20.12.2025",
                    double: 137,
                    single: 191
                  },
                  {
                    dates: "21.12.2025-04.01.2026",
                    double: 201,
                    single: 282
                  }
                ]
              }
            },
            upgrades: {
              bahari: {
                supplement: 17,
                minOccupancy: 1
              },
              oceanSuite: {
                supplement: 60,
                minOccupancy: 2
              }
            }
          },
          resident: {
            currency: "KES",
            mealPlan: "All-Inclusive",
            rooms: {
              comfort: {
                seasons: [
                  {
                    dates: "05.01.2025-30.04.2025",
                    double: 12900,
                    single: 18000
                  },
                  {
                    dates: "01.05.2025-18.05.2025",
                    double: 10500,
                    single: 14700
                  },
                  {
                    dates: "19.05.2025-20.06.2025",
                    status: "CLOSED"
                  },
                  {
                    dates: "21.06.2025-08.07.2025",
                    double: 10500,
                    single: 14700
                  },
                  {
                    dates: "09.07.2025-30.09.2025",
                    double: 12300,
                    single: 17100
                  },
                  {
                    dates: "01.10.2025-20.12.2025",
                    double: 13700,
                    single: 19100
                  },
                  {
                    dates: "21.12.2025-04.01.2026",
                    double: 20100,
                    single: 28200
                  }
                ]
              }
            },
            upgrades: {
              bahari: {
                supplement: 2500,
                minOccupancy: 1
              },
              oceanSuite: {
                supplement: 9500,
                minOccupancy: 2
              }
            }
          },
          roomCapacity: {
            comfortFamily: "2 adults, 2 children plus 1 infant max",
            bahariFamilyRoom: "2 adults, 3 children plus 1 infant max"
          },
          extraServices: {
            earlyCheckIn: {
              nonResident: 25,
              resident: 2500
            },
            lateCheckOut: {
              nonResident: 45,
              resident: 4500
            }
          }
        },
        sisterProperty: {
          name: "Diani Sea Lodge",
          hasContractRates: true,
          contractRates: {
            nonResident: {
              currency: "USD",
              mealPlan: "All-Inclusive",
              rooms: {
                comfort: {
                  seasons: [
                    {
                      dates: "05.01.2025-27.04.2025",
                      double: 122,
                      single: 170
                    },
                    {
                      dates: "28.04.2025-23.05.2025",
                      status: "CLOSED"
                    },
                    {
                      dates: "01.05.2025-08.07.2025",
                      double: 96,
                      single: 134
                    },
                    {
                      dates: "09.07.2025-30.09.2025",
                      double: 116,
                      single: 162
                    },
                    {
                      dates: "01.10.2025-20.12.2025",
                      double: 128,
                      single: 179
                    },
                    {
                      dates: "21.12.2025-04.01.2026",
                      double: 193,
                      single: 270
                    }
                  ]
                }
              },
              upgrades: {
                bahari: {
                  supplement: 17,
                  minOccupancy: 1
                },
                bahariPlus: {
                  supplement: 25,
                  minOccupancy: 1
                },
                juniorSuite: {
                  supplement: 35,
                  minOccupancy: 2
                },
                familySuite: {
                  supplement: 25,
                  minOccupancy: 3
                },
                bahariFamilyRoom: {
                  supplement: 28,
                  minOccupancy: 3
                },
                bahariFamilySuite: {
                  supplement: 50,
                  minOccupancy: 3
                },
                suite: {
                  supplement: 50,
                  minOccupancy: 2
                }
              }
            },
            resident: {
              currency: "KES",
              mealPlan: "All-Inclusive",
              rooms: {
                comfort: {
                  seasons: [
                    {
                      dates: "05.01.2025-27.04.2025",
                      double: 12200,
                      single: 17000
                    },
                    {
                      dates: "28.04.2025-23.05.2025",
                      status: "CLOSED"
                    },
                    {
                      dates: "24.05.2025-08.07.2025",
                      double: 9600,
                      single: 13400
                    },
                    {
                      dates: "09.07.2025-30.09.2025",
                      double: 11600,
                      single: 16200
                    },
                    {
                      dates: "01.10.2025-20.12.2025",
                      double: 12800,
                      single: 17900
                    },
                    {
                      dates: "21.12.2025-04.01.2026",
                      double: 19300,
                      single: 27000
                    }
                  ]
                }
              },
              upgrades: {
                bahari: {
                  supplement: 2500,
                  minOccupancy: 1
                },
                bahariPlus: {
                  supplement: 3700,
                  minOccupancy: 1
                },
                juniorSuite: {
                  supplement: 5000,
                  minOccupancy: 2
                },
                familySuite: {
                  supplement: 3700,
                  minOccupancy: 3
                },
                bahariFamilyRoom: {
                  supplement: 4000,
                  minOccupancy: 3
                },
                bahariFamilySuite: {
                  supplement: 7500,
                  minOccupancy: 3
                },
                suite: {
                  supplement: 7500,
                  minOccupancy: 2
                }
              }
            },
            roomCapacity: {
              comfortFamily: "2 adults, 2 children plus 1 infant max",
              familySuite: "2 or 3 adults, 3 children plus 1 infant max",
              bahariFamilyRoom: "2 adults, 3 children plus 1 infant max"
            }
          }
        },
        policies: {
          checkIn: "15:00",
          checkOut: "10:00",
          minimumStay: {
            standard: "2 nights",
            festive: "5 nights during festive season (21.12-04.01)"
          },
          payment: {
            standard: "Booking only guaranteed with payment",
            festive: "Full payment required at time of booking for peak season"
          },
          childPolicy: {
            childrenSharing: "Children 3.01-11.999 years old sharing with adults pay 50% of adult rate",
            childrenOwnRoom: "Two children occupying own room pay FULL double rate",
            adultWithChild: "1 adult sharing with kid pays full double rate"
          },
          cancellation: {
            festive: "No refunds given for peak season (21.12-04.01)"
          },
          commission: "Travel Agents Commission 12.5%"
        }
      },
      {
        id: 36,
        name: "Double Tree By Hilton",
        location: "Nairobi, Kenya",
        rating: 4.6,
        category: "Luxury Hotel",
        description: "Contemporary luxury hotel conveniently located in Kilimani's area of Nairobi, Kenya with 109 tastefully designed rooms, all-day dining restaurant, lounge bar, 6 meeting rooms and recreational facilities. Easy access to popular shopping malls including Prestige Plaza, Yaya Centre, and The Junction.",
        amenities: [
          "Swimming Pool", 
          "All-day Dining Restaurant", 
          "Lounge Bar", 
          "Meeting Rooms", 
          "Gym", 
          "Complimentary Wifi", 
          "In-room Tea/Coffee", 
          "Mini Bar", 
          "In-room Safe"
        ],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/fa/65/a5/lobby.jpg?w=900&h=500&s=1",
        featured: true,
        hasContractRates: true,
        contractRates: {
          nonResident: {
            rooms: {
              standard: {
                single: {
                  bedAndBreakfast: 140
                },
                double: {
                  bedAndBreakfast: 160
                },
                triple: {
                  bedAndBreakfast: 240
                }
              },
              deluxe: {
                single: {
                  bedAndBreakfast: 160
                },
                double: {
                  bedAndBreakfast: 180
                },
                triple: {
                  bedAndBreakfast: 270
                }
              },
              juniorSuite: {
                single: {
                  bedAndBreakfast: 220
                },
                double: {
                  bedAndBreakfast: 240
                },
                triple: {
                  bedAndBreakfast: 290
                }
              },
              penthouseSuite: {
                single: {
                  bedAndBreakfast: 350
                },
                double: {
                  bedAndBreakfast: 370
                },
                triple: {
                  bedAndBreakfast: 420
                }
              }
            }
          },
          extras: {
            extraPerson: {
              child5to18: {
                sharingWithParents: 50
              },
              above18: {
                sharingWithAdults: "50% of room rate"
              }
            },
            dayUse: "75% of applicable room rate",
            lateCheckout: {
              after1300: "75% of room rate",
              after1800: "100% of room rate"
            },
            meals: {
              breakfast: 25,
              lunch: 28,
              dinner: 28,
              packedLunch: 28
            }
          },
          policies: {
            currency: "USD",
            checkIn: "1400hrs",
            checkOut: "1100hrs",
            earlyArrival: {
              before0600: "Full night charge",
              before1300: "Subject to availability"
            },
            cancellation: {
              within30to14days: "50% of room charges for entire stay",
              within13to3days: "75% of room charges for entire stay",
              within48hoursOrNoShow: "100% for room charges and other services for entire stay"
            },
            childrenPolicy: {
              under5: "Free when sharing with adults",
              from5to18: "USD 50 when sharing with parents (includes extra bed and breakfast)",
              above18: "50% of room rate when sharing with adults (includes extra bed and breakfast)",
              separateRoom: "75% of applicable room rate for up to two children under 18"
            }
          },
          inclusions: [
            "Buffet Breakfast",
            "Complimentary use of Gym",
            "Complimentary wireless internet access",
            "In-room complimentary tea and coffee making facilities",
            "Outdoor swimming pool with sun-lounge area",
            "25% statutory taxes"
          ]
        }
      },
      {
        id: 37,
        name: "Dove Nest Naivasha",
        location: "Naivasha, Kenya",
        rating: 4.1,
        category: "Lodge",
        description: "Scenic lodge offering relaxing stays near Lake Naivasha.",
        amenities: ["Lake Access", "Restaurant", "Gardens", "Boat Trips"],
        priceCategory: "Mid-range",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/cf/56/8c/dove-nest-lodge.jpg?w=800&h=-1&s=1",
        hasContractRates: true,
        contractRates: {
          standard: {
            resident: {
              accommodation: {
                standard: 13000
              },
              extras: {
                mealSupplement: 2500
              }
            }
          }
        }
      },
    {
      id: 38,
      name: "Eka Hotel",
      location: "Nairobi, Kenya",
      rating: 4.3,
      category: "Business Hotel",
      description: "Contemporary hotel offering convenience and comfort for business travelers.",
      amenities: ["Business Center", "Restaurant", "Swimming Pool", "Wi-Fi"],
      priceCategory: "Mid-range",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/1d/43/da/pool-view.jpg?w=900&h=-1&s=1"
    },
    {
        id: 39,
        name: "Elangata Olerai",
        location: "Narok, Kenya",
        rating: 4.5,
        category: "Eco Lodge",
        description: "Sustainable eco-lodge offering immersive wildlife experiences.",
        amenities: [
          "Game Drives", 
          "Nature Walks", 
          "Farm-to-Table Dining", 
          "Eco-Friendly Facilities", 
          "Maasai Dance", 
          "Bonfire"
        ],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/97/bc/b1/rennovated-tent.jpg?w=1000&h=-1&s=1",
        hasContractRates: true,
        contractRates: {
          "masaiMara": {
            nonResident: {
              fullBoard: {
                peak: { single: 176, double: 255, "triple": 317 },
                high: { single: 128, double: 189, "triple": 238 },
                low: { single: 101, double: 141, "triple": 179 }
              },
              "seasonPeriods": {
                high: [{ "from": "02/01/2025", "to": "15/03/2025" }],
                low: [
                  { "from": "16/03/2025", "to": "15/06/2025" },
                  { "from": "01/11/2025", "to": "22/12/2025" }
                ],
                peak: [
                  { "from": "16/06/2025", "to": "31/10/2025" },
                  { "from": "23/12/2025", "to": "02/01/2026" }
                ]
              }
            },
            resident: {
              fullBoard: {
                peak: { single: 17107, double: 24805, "triple": 31007 },
                high: { single: 17107, double: 24805, "triple": 31007 },
                low: { single: 10138, double: 20275, "triple": 26235 }
              },
              "seasonPeriods": {
                high: [{ "from": "02/01/2025", "to": "15/03/2025" }],
                low: [
                  { "from": "16/03/2025", "to": "15/06/2025" },
                  { "from": "01/11/2025", "to": "22/12/2025" }
                ],
                peak: [
                  { "from": "16/06/2025", "to": "31/10/2025" },
                  { "from": "23/12/2025", "to": "02/01/2026" }
                ]
              },
              "flyingPackages": {
                "groundRates": {
                  "northCoastToMara": 195,
                  "malindiToMara": 195,
                  "nairobiToMara": 195
                }
              }
            },
            "childrenRates": {
              "zeroToThreeYears": "Free when sharing with parents",
              "fourToTwelveYears": {
                "sharingWithTwoAdults": "50% of per person rate",
                "twoChildrenSharingWithOneAdult": "50% of half double room rate per child",
                "oneChildSharingWithOneAdult": "50% of room rate + single room rate",
                "twoChildrenInOwnRoom": "75% of room rate"
              }
            },
            extras: {
              halfBoardReduction: 10,
              "extraLunch": 25,
              "picnicLunchBox": 25,
              "bushDinner": { "price": 45, "minimumPax": 4 },
              "bushBreakfast": { "price": 50, "minimumPax": 4 },
              "christmasSupplement": {
                "adult": 35,
                "child": 25,
                "dates": ["24/12/2025", "25/12/2025", "26/12/2025", "31/12/2025", "01/01/2026"]
              },
              "activities": {
                "fullDayGameDrive": 300,
                "halfDayGameDrive": 200,
                "airstripTransfers": 80
              }
            },
            "policies": {
              "singleRoomAllocation": "Maximum 2-4 single rooms per group, extra single rooms charged at full Double rate",
              releasePeriod: {
                peak: "60 Days",
                high: "45 Days",
                low: "30 Days"
              },
              cancellation: {
                "between45And35Days": "25% of contract rate",
                "between34And8Days": "50% of contract rate",
                "within7DaysOrNoShow": "100% of booking value"
              },
              "payment": {
                "depositOnConfirmation": "50% non-refundable within 7 days",
                "balancePayment": "21 days prior to arrival",
                "creditCardFee": "5% Bank processing fees",
                "chequePayment": "Must be paid 7 days before arrival"
              }
            }
          }
        }
      },
    {
      id: 40,
      name: "Emayani Beach Lodge",
      location: "Tanzania Coast",
      rating: 4.2,
      category: "Beach Lodge",
      description: "Laid-back beach lodge offering authentic coastal experiences in Tanzania.",
      amenities: ["Beach Access", "Restaurant", "Water Sports", "Cultural Activities"],
      priceCategory: "Mid-range",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/88/d2/eb/emayani-beach-lodge.jpg?w=900&h=500&s=1"
    },
    {
      id: 41,
      name: "Enashipai Resort & Spa",
      location: "Naivasha, Kenya",
      rating: 4.7,
      category: "Resort & Spa",
      description: "Luxury resort and spa offering relaxation and adventure near Lake Naivasha.",
      amenities: ["Spa", "Swimming Pool", "Water Sports", "Conference Facilities", "Internet Connectivity", "Full Board Dining"],
      priceCategory: "Premium",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/50/82/63/aerial-view-of-enashipai.jpg?w=900&h=500&s=1",
      featured: true,
      hasContractRates: true,
      contractRates: {
        accommodationRates: {
          highSeason: {
            periods: ["Jan 2-Mar 31, 2025", "Jul 1-Oct 31, 2025", "Dec 23, 2025-Jan 1, 2026"],
            single: 312,
            double: 438
          },
          lowSeason: {
            periods: ["Apr 1-Jun 30, 2025", "Nov 1-Dec 22, 2025"],
            single: 260,
            double: 352
          },
          honeymoonSuite: {
            period: "Jan 2, 2025-Jan 1, 2026",
            single: 380,
            double: 490
          }
        },
        mealRates: {
          breakfast: 35,
          lunch: 40,
          dinner: 45
        },
        supplements: {
          conference: 50,
          christmas: 50,
          easter: 50
        },
        discounts: {
          groups: [
            { size: "20-39 pax", discount: "5%" },
            { size: "40-59 pax", discount: "7%" },
            { size: "60-79 pax", discount: "10%" }
          ]
        },
        childPolicy: {
          age0to3: "No Charge when sharing with adults",
          age4to12sharing: "25% of applicable double room rate per child",
          age4to12ownRoom: {
            oneChild: "75% of adult single rate",
            twoChildren: "75% of adult double rate"
          },
          age13plus: "Full adult rate applies"
        },
        notes: {
          rateInclusions: ["16% VAT", "2% training levy", "7% service charge", "Full Board (Breakfast, Lunch & Dinner)", "Internet connectivity"],
          paymentTerms: "15+ rooms: 25% on confirmation, 50% two weeks prior, 25% two days prior. 15 rooms or less: 50% on confirmation, 50% two days prior",
          checkIn: "2:00 PM",
          checkOut: "10:00 AM"
        }
      }
    },
    {
      id: 42,
      name: "Enkorok Mara Camp",
      location: "Maasai Mara, Kenya",
      rating: 4.4,
      category: "Tented Camp",
      description: "Authentic tented safari camp offering immersive wildlife experiences in the Mara.",
      amenities: [
        "Game Drives", 
        "Bush Dining", 
        "Cultural Visits", 
        "Guided Walks", 
        "Balloon Safaris",
        "Massage Services",
        "Laundry Services",
        "Room Service",
        "Family Tents"
      ],
      priceCategory: "Premium",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/06/87/4d/caption.jpg?w=900&h=500&s=1",
      hasContractRates: true,
      contractRates: {
        seasonDefinitions: {
          peak: ["Jul 1-Sep 30, 2025", "Dec 22, 2025-Jan 2, 2026"],
          high: ["Jan 3-Mar 31, 2025", "Jun 1-30, 2025", "Oct 1-31, 2025"],
          low: ["Apr 1-May 31, 2025", "Nov 1-Dec 21, 2025"]
        },
        nonResident: {
          fullBoard: {
            peak: { double: 290, single: 205, triple: 400 },
            high: { double: 190, single: 130, triple: 260 },
            low: { double: 145, single: 100, triple: 230 }
          },
          groundPackage: {
            peak: { perPersonSharing: 340, singleSupplement: 60 },
            high: { perPersonSharing: 290, singleSupplement: 35 },
            low: { perPersonSharing: 275, singleSupplement: 35 }
          }
        },
        resident: {
          fullBoard: {
            peak: { double: 26500, single: 19500, triple: 36900 },
            high: { double: 17000, single: 12500, triple: 23500 },
            low: { double: 13500, single: 9000, triple: 20000 }
          },
          groundPackage: {
            peak: { perPersonSharing: 33500, singleSupplement: 6500 },
            high: { perPersonSharing: 28750, singleSupplement: 4000 },
            low: { perPersonSharing: 27200, singleSupplement: 2500 }
          }
        },
        extras: {
          nonResident: {
            bushDinner: 35,
            privateDinner: 35,
            bushBreakfast: 30,
            natureWalk: 25,
            culturalVisit: 30,
            balloonSafari: 450,
            picnicLunch: 20,
            extraHotLunch: 25,
            roomService: 20,
            exclusiveVehicle: 280
          },
          resident: {
            bushDinner: 3500,
            privateDinner: 3500,
            bushBreakfast: 3000,
            natureWalk: 2500,
            culturalVisit: 3000,
            balloonSafari: 45000,
            picnicLunch: 2000,
            extraHotLunch: 2500,
            roomService: 20,
            exclusiveVehicle: 28000
          },
          familyTentSupplement: 50
        },
        childPolicy: {
          under3Years: "Complimentary when sharing with 1-2 adults",
          age3to12SharingWithAdults: "50% of adult rate",
          age3to12OwnRoom: "75% of adult rate",
          age12to17: "75% of adult twin rate"
        },
        singleRoomPolicy: "Maximum 3 singles per group at single room rate. Additional singles charged at double room rate."
      },
      inclusions: {
        fullBoard: [
          "Breakfast",
          "lunch",
          "Dinner",
          "4pm tea"
        ],
        groundPackage: [
          "Full board accommodation",
          "Morning & afternoon shared game drives",
          "Local airstrip transfers from Keekorok airstrip",
          "Transfers for cultural visits (excluding entry fees)"
        ]
      },
      exclusions: [
        "Personal insurance",
        "Transportation to camp",
        "Park entry fees",
        "All drinks (payable directly)",
        "Gratuities"
      ],
      policies: {
        checkIn: "12:00 PM",
        checkOut: "10:00 AM",
        paymentTerms: "30% deposit within 10 days, balance 10 days prior to check-in",
        cancellation: {
          peak: [
            "0-14 days: 100% of invoice",
            "15-30 days: 50% of invoice",
            "31-55 days: 30% of invoice"
          ],
          midSeason: [
            "0-7 days: 100% of invoice",
            "8-14 days: 50% of invoice", 
            "15-35 days: 30% of invoice"
          ]
        }
      }
    },
    {
      id: 43,
      name: "Essque Zalu Zanzibar",
      location: "Nungwi Village, Zanzibar, Tanzania",
      rating: 4.0,
      category: "Resort",
      description: "Luxury resort in Zanzibar offering comfortable accommodations with stunning views and personalized service.",
      amenities: [
        "Restaurant", 
        "Bar", 
        "Wi-Fi", 
        "Concierge Service", 
        "Spa", 
        "Airport Transfers", 
        "Romantic Dinners"
      ],
      priceCategory: "Premium",
      imageUrl: "/api/placeholder/800/500",
      hasContractRates: true,
      contractRates: {
        basis: "Half Board (Breakfast and Dinner)",
        rateInclusions: [
          "Accommodation",
          "Breakfast and Dinner",
          "All local applicable taxes (excluding infrastructure tax)"
        ],
        specialOffers: [
          {
            name: "Long Stay",
            description: "10% discount off daily net rate for stays of seven nights or more"
          },
          {
            name: "Honeymoon",
            description: "10% discount off net rates for minimum 5-night stay",
            inclusions: [
              "Romantic dinner",
              "Complimentary flowers and fruit basket on arrival",
              "30-minute couple's massage",
              "10% discount on all spa treatments"
            ],
            validity: "Valid for 9 months after wedding/civil partnership",
            conditions: "Non-combinable with other offers, minimum 5 nights stay required"
          }
        ],
        supplements: {
          fullBoard: {
            description: "Breakfast, 3-course lunch & 3-course dinner, excluding beverages",
            price: 40
          },
          allInclusive: {
            price: 100
          },
          christmasEveDinner: {
            description: "Compulsory on December 24th",
            price: 90
          },
          newYearsEveDinner: {
            description: "Compulsory on December 31st",
            price: 140
          },
          secondChild: {
            description: "For second child under 12 years on Half Board basis",
            price: 50
          },
          extraAdult: {
            description: "Third person in suites",
            price: 70
          }
        }
      },
      childPolicy: {
        oneChildUnder12: "One child stays free (on Half Board) when sharing with two adults",
        secondChildUnder12: "USD 50 per night",
        maxChildrenPerRoom: "Maximum 2 children can share room with 2 adults",
        children12AndOlder: "Adult conditions apply"
      },
      policies: {
        checkIn: "Flexible, dependent on occupancy (early check-in fee may apply)",
        checkOut: "Flexible until departure time (late check-out fee may apply)",
        paymentTerms: "Pre-payment required 30 days prior to arrival unless credit facilities approved",
        cancellation: {
          standard: [
            "15-30 days prior to arrival: 25% charged",
            "7-14 days prior to arrival: 50% charged",
            "Less than 7 days prior to arrival: 100% charged"
          ],
          festive: {
            period: "December 23 - January 3",
            policy: [
              "60-90 days prior to arrival: 25% charged",
              "30-60 days prior to arrival: 50% charged",
              "Less than 30 days prior to arrival: 100% charged"
            ]
          }
        },
        noShow: "100% of total booking charged",
        infrastructureTax: "USD 5 per person (adults & children) per night, collected directly by resort"
      },
      festiveRequirements: {
        minimumStay: "5 nights"
      }
    },
    {
      id: 44,
      name: "Fairmont Mount Kenya Safari Club",
      location: "Mount Kenya, Kenya",
      rating: 4.9,
      category: "Luxury Safari",
      description: "Iconic luxury resort nestled at the base of Mount Kenya, offering world-class accommodations, dining, and access to the Mount Kenya Wildlife Conservancy.",
      amenities: [
        "Wildlife Conservancy",
        "Spa",
        "Fine Dining",
        "Swimming Pool",
        "Concierge Service",
        "Animal Orphanage"
      ],
      priceCategory: "Ultra Luxury",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/86/79/5b/fairmont-the-norfolk.jpg?w=1000&h=-1&s=1",
      featured: true,
      hasContractRates: true,
      contractRates: {
        seasonDates: {
          regular: [
            {"from": "2025-01-02", "to": "2025-04-17"},
            {"from": "2025-04-22", "to": "2025-06-13"},
            {"from": "2025-09-18", "to": "2025-12-18"}
          ],
          shoulder: [
            {"from": "2025-06-14", "to": "2025-06-30"},
            {"from": "2025-09-04", "to": "2025-09-17"},
            {"from": "2025-12-19", "to": "2026-01-05"}
          ],
          peak: [
            {"from": "2025-07-01", "to": "2025-09-03"},
            {"from": "2025-04-18", "to": "2025-04-21"}
          ]
        },
        "roomRates": {
          "fairmont": {
            deluxeRoom: {
              regular: {single: 363, double: 490},
              shoulder: {single: 443, double: 570},
              peak: {single: 644, double: 748}
            },
            "suite": {
              regular: {single: 528, double: 655},
              shoulder: {single: 608, double: 735},
              peak: {single: 809, double: 913}
            }
          },
          "riverside": {
            "suite": {
              regular: {single: 693, double: 820},
              shoulder: {single: 773, double: 900},
              peak: {single: 974, double: 1078}
            }
          },
          "garden": {
            "suite": {
              regular: {single: 693, double: 820},
              shoulder: {single: 773, double: 900},
              peak: {single: 974, double: 1078}
            }
          },
          "manor": {
            "juniorSuite": {
              regular: {single: 770, double: 897},
              shoulder: {single: 850, double: 977},
              peak: {single: 1051, double: 1155}
            },
            "equatorialSuite": {
              regular: {single: 858, double: 985},
              shoulder: {single: 938, double: 1065},
              peak: {single: 1139, double: 1243}
            }
          },
          "cottages": {
            "williamHolden": {
              regular: {"unit": 1370},
              shoulder: {"unit": 1450},
              peak: {"unit": 1628}
            },
            "batianSendeoVilla": {
              regular: {"unit": 1590},
              shoulder: {"unit": 1670},
              peak: {"unit": 1848}
            }
          }
        },
        "supplements": {
          "children": {
            "0-5": {"perNight": 0},
            "6-12": {"perNight": 70}
          },
          thirdAdult: {"perNight": 120},
          "conservancyFee": {
            "adult": {"perStay": 30},
            "child6-12": {"perStay": 15}
          }
        },
        "policies": {
          fullBoard: true,
          "vatIncluded": true,
          "serviceChargeIncluded": true,
          "dayUse": "75% of room rate, subject to availability",
          minimumStay: {
            peakSeason: "2 nights for groups over 9 rooms"
          },
          cancellation: {
            peak: {
              "0-21days": "100%",
              "21-45days": "50%",
              "45-60days": "25%"
            },
            "shoulderRegular": {
              "0-7days": "100%",
              "8-21days": "50%",
              "21-45days": "25%"
            }
          },
          "complimentary": "For groups more than 15 pax (15+1), the 16th person is on full board complimentary"
        },
        "roomCapacity": {
          "fairmont": {
            "deluxeQueen": "Maximum 2 adults + 1 child below 6 years",
            "deluxeTwin": "Maximum 2 adults only"
          },
          "riverside": {
            "deluxeKing": "Maximum 2 adults + 1 child below 12 years",
            "suiteTwin": "Maximum 2 adults + 1 child below 12 years OR 3 adults"
          },
          "garden": {
            "suiteKing": "Maximum 2 adults + 1 child below 12 years OR 3 adults"
          },
          "manor": {
            "juniorSuite": "Maximum 2 adults + 1 child below 12 years",
            "equatorialSuite": "Maximum 2 adults + 2 children below 12 years OR 3 adults"
          },
          "williamHolden": {
            "cottage": "2 Bedrooms (King/Twin or King/King), Maximum 4 adults OR 2 adults + 3 children below 12 years"
          },
          "batianSendeo": {
            "villa": "Maximum 4 adults + 1-2 children below 12 years"
          }
        }
      },
      "contractStartDate": "2025-01-02",
      "contractEndDate": "2026-01-05",
      "contractPartner": "Jambo Travel House"
    },
    {
      id: 45,
      name: "Four Points by Sheraton Nairobi Airport",
      location: "Jomo Kenyatta International Airport, Nairobi, Kenya",
      rating: 4.5,
      category: "Airport Hotel",
      description: "A stylish hotel located inside Jomo Kenyatta International Airport offering 172 guest rooms with complimentary airport transfers. This Marriott International property provides modern amenities and convenient access for travelers.",
      amenities: [
        "Complimentary Airport Transfers",
        "Restaurant",
        "Business Center",
        "Conference Facilities",
        "Wi-Fi",
        "Air Conditioning"
      ],
      priceCategory: "Premium",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/66/d6/a6/hotel-exterior-night.jpg?w=900&h=500&s=1",
      featured: false,
      hasContractRates: true,
      contractRates: {
        "roomRates": {
          "traditionalKing": {
            single: 155,
            double: 175
          },
          deluxeRoom: {
            single: 245,
            double: 270
          },
          "suite": {
            single: 295,
            double: 320
          },
          executiveSuite: {
            single: 410,
            double: 460
          }
        },
        "mealRates": {
          "breakfast": 25,
          lunch: 30,
          "dinner": 30,
          "lunchBox": 20,
          "childMeals": "50% of adult price (6-12 years), complimentary under 6 years"
        },
        "supplements": {
          "extraBed": {
            "suiteOnly": 50
          },
          "conference": {
            fullDay: 38,
            halfDay: 35
          },
          "conferenceExtras": {
            "extraFlipChart": 12,
            "cordlessMicrophone": 32,
            "lapelMicrophone": 36
          }
        },
        "policies": {
          bedAndBreakfast: true,
          "taxesIncluded": true,
          "dayUse": "75% of contracted rate (9:00am-9:00pm, max 6 hours)",
          checkIn: "14:00",
          checkOut: "12:00",
          "earlyCheckIn": "Pre-register for previous night (full night charge applies)",
          cancellation: {
            "fit": {
              "moreThan48Hours": "No charge",
              "within48Hours": "One-night fee including taxes",
              "noShow": "Full cancellation fee applies",
              "earlyDeparture": "No refunds provided"
            },
            "groups": {
              "moreThan60Days": "25% of contracted cost",
              "within30Days": "100% of contracted cost",
              "noShowOrReduction": "100% of contracted cost for full period"
            }
          },
          childPolicy: {
            "oneChildBelow12": "Free stay with one adult",
            "oneChildAbove12": "Full adult rate applies",
            "twoChildrenBelow12Sharing": "75% of double adult rate",
            "twoChildrenAbove12Sharing": "Full double adult rate",
            "infant0To2": "Free stay, baby cot available upon request"
          },
          "groupBookings": {
            "complimentaryRoom": "16th room free for groups of 15+ paying rooms",
            "depositTerms": {
              "confirmation": "25% non-refundable",
              "60DaysPrior": "25%",
              "30DaysPrior": "25%",
              "asPerNormalTerms": "25%"
            }
          }
        },
        "conferencePackage": {
          fullDay: {
            "rate": 38,
            "minimumDelegates": 10,
            "includes": [
              "Meeting room use",
              "Wireless access",
              "2 flip charts, markers and projection screen",
              "Air conditioning",
              "Security brief",
              "Morning tea/coffee with light snack",
              "Mid-morning tea/coffee with pastries",
              "Afternoon tea/coffee with pastries",
              "2 x 500ml bottled water per delegate",
              "Stationery (notepad and pen)",
              "Buffet lunch with complimentary soft drink",
              "Mints in room"
            ]
          },
          halfDay: {
            "rate": 35,
            "minimumDelegates": 10,
            "includes": "Same inclusions as full day with reduced refreshment services"
          }
        }
      },
      "contractStartDate": "2025-01-01",
      "contractEndDate": "2025-12-31",
      "contractPartner": "Jambo Travelhouse Safaris Ltd"
    },
    {
      id: 46,
      name: "Four Point Sheraton Hurlingham",
      location: "Nairobi, Kenya",
      rating: 4.6,
      category: "Business Hotel",
      description: "Contemporary hotel in Nairobi's Hurlingham district offering international standards.",
      amenities: ["Restaurant", "Bar", "Fitness Center", "Business Facilities"],
      priceCategory: "Premium",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/66/d5/d3/hotel-exterior.jpg?w=900&h=500&s=1",
      featured: false,
      hasContractRates: true,
      contractRates: {
          nairobi: {
              nonResident: {
                  standardRooms: {
                      peak: { single: 180, twin: 240, triple: 320 },
                      shoulder: { single: 150, twin: 200, triple: 270 },
                      low: { single: 120, twin: 180, triple: 240 },
                      christmas: { single: 180, twin: 240, triple: 320 }
                  },
                  deluxeRooms: {
                      peak: { single: 220, twin: 280, triple: 360 },
                      shoulder: { single: 190, twin: 240, triple: 310 },
                      low: { single: 160, twin: 220, triple: 280 },
                      christmas: { single: 220, twin: 280, triple: 360 }
                  }
              },
              resident: {
                  standardRooms: {
                      peak: { single: 22000, twin: 31200, triple: 41600 },
                      shoulder: { single: 19500, twin: 26000, triple: 35100 },
                      low: { single: 15600, twin: 23400, triple: 31200 },
                      christmas: { single: 22000, twin: 31200, triple: 41600 }
                  },
                  deluxeRooms: {
                      peak: { single: 28600, twin: 36400, triple: 46800 },
                      shoulder: { single: 24700, twin: 31200, triple: 40300 },
                      low: { single: 20800, twin: 28600, triple: 36400 },
                      christmas: { single: 28600, twin: 36400, triple: 46800 }
                  }
              }
          },
          extras: {
              tourLeader: 40,
              conferenceRoom: 200,
              earlyCheckIn: 50,
              lateCheckout: 50,
              airportTransfer: 30,
              roomUpgrade: 60,
              extraDinner: 45,
              extraLunch: 35,
              businessCenter: 25,
              honeymoonSupplement: 75,
              breakfastBuffet: 25,
              halfBoardDeduction: 10
          }
      }
  },
  {
    id: 47,
    name: "Four Twenty South",
    location: "Kenya Coast",
    rating: 4.3,
    category: "Beach Resort",
    description: "Relaxed beach resort offering a blend of comfort and coastal charm with three houses set in a tropical garden running down to the Indian Ocean and a stunning powder white beach.",
    amenities: ["Beach Access", "Swimming Pool", "Restaurant", "Water Sports", "Personal Chef and Maid", "Complimentary Airport Collection"],
    priceCategory: "Mid-range to Premium",
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/85/01/e6/caption.jpg?w=900&h=500&s=1",
    hasContractRates: true,
    contractRates: {
      "houses": {
        low: {
          "Chikore": { "nett": 408, "rack": 510, description: "1 Double, 1 Twin, 2 Bath" },
          "Kualuka": { "nett": 544, "rack": 680, description: "1 Double, 2 Twin, 2 Bath" },
          "Dzumbe4": { "nett": 864, "rack": 1080, description: "2 Double, 2 Twin, 4 Bath" },
          "Dzumbe5": { "nett": 1100, "rack": 1375, description: "3 Double, 2 Twin, 5 Bath" }
        },
        "mid": {
          "Chikore": { "nett": 448, "rack": 560, description: "1 Double, 1 Twin, 2 Bath" },
          "Kualuka": { "nett": 600, "rack": 750, description: "1 Double, 2 Twin, 2 Bath" },
          "Dzumbe4": { "nett": 960, "rack": 1200, description: "2 Double, 2 Twin, 4 Bath" },
          "Dzumbe5": { "nett": 1200, "rack": 1500, description: "3 Double, 2 Twin, 5 Bath" }
        },
        high: {
          "Chikore": { "nett": 496, "rack": 620, description: "1 Double, 1 Twin, 2 Bath" },
          "Kualuka": { "nett": 660, "rack": 825, description: "1 Double, 2 Twin, 2 Bath" },
          "Dzumbe4": { "nett": 1056, "rack": 1320, description: "2 Double, 2 Twin, 4 Bath" },
          "Dzumbe5": { "nett": 1320, "rack": 1650, description: "3 Double, 2 Twin, 5 Bath" }
        }
      },
      seasons: {
        low: ["Post Easter/May/June", "November"],
        "mid": ["September/October", "December", "January up to Easter"],
        high: ["July/August"]
      },
      extras: {
        "houseLinen": "Included",
        "chefAndMaid": "Included",
        "drinkingWater": "Included",
        "airportTransfer": "Complimentary from Ukunda Airstrip",
        "fullyCateredOption": "Available for Dzumbe houses"
      }
    }
  },
    {
      id: 48,
      name: "Foxes Camps",
      location: "Tanzania",
      rating: 4.4,
      category: "Safari Camps",
      description: "Collection of authentic safari camps across Tanzania's southern circuit.",
      amenities: ["Game Drives", "Walking Safaris", "Bush Dining", "Wildlife Viewing"],
      priceCategory: "Premium",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/5d/8a/d3/vamos-hotel-mikumi-national.jpg?w=900&h=-1&s=1"
    },
    {
      id: 49,
      name: "Gelian Hotel Machakos",
      location: "Machakos, Kenya",
      rating: 4.0,
      category: "Business Hotel",
      description: "Modern hotel offering comfortable accommodation and business facilities in Machakos. The hotel features state-of-the-art conference facilities, multiple restaurants and bars, and is known as 'The Cradle of Hospitality'.",
      amenities: [
        "Conference Facilities", 
        "Restaurant", 
        "Wi-Fi", 
        "Parking", 
        "Health Club", 
        "Gym", 
        "Room Service", 
        "Air Conditioning", 
        "In-room Safety Box", 
        "Laundry Service", 
        "CCTV Surveillance",
        "DSTV Channels"
      ],
      priceCategory: "Mid-range",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/05/e9/97/this-is-the-exterior.jpg?w=900&h=500&s=1",
      hasContractRates: true,
      contractRates: {
        nonResident: {
          "rack": {
            superiorRoom: { single: 95, double: 130 },
            deluxeRoom: { single: 120, double: 150 },
            "ambassadorialRoom": { single: 260, double: 260 },
            presidentialSuite: { single: 360, double: 360 }
          },
          "agent": {
            superiorRoom: { single: 85.5, double: 117 },
            deluxeRoom: { single: 105.5, double: 136.5 },
            "ambassadorialRoom": { single: 260, double: 260 },
            presidentialSuite: { single: 360, double: 360 }
          }
        },
        resident: {
          "rack": {
            superiorRoom: { single: 9500, double: 13000 },
            deluxeRoom: { single: 12000, double: 15000 },
            "ambassadorialRoom": { single: 25000, double: 25000 },
            presidentialSuite: { single: 35000, double: 35000 }
          },
          "agent": {
            superiorRoom: { single: 8550, double: 11700 },
            deluxeRoom: { single: 10800, double: 13500 },
            "ambassadorialRoom": { single: 26000, double: 26000 },
            presidentialSuite: { single: 36000, double: 36000 }
          }
        },
        "conference": {
          "packages": {
            fullDay: 4000,
            halfDay: 3800
          },
          "roomHire": {
            "kiimaKimwe": { "capacity": 60, "rate": 60000, "includes": "LCD Projector" },
            "yatta": { "capacity": 50, "rate": 50000, "includes": "LCD Projector" },
            "mua": { "capacity": 40, "rate": 40000, "includes": "LCD Projector" },
            "kyamwiluMutituniNgelani": { "capacity": 15, "rate": 20000, "includes": "LCD Projector" },
            "boardRooms": { "capacity": 20, "rate": 20000, "includes": "LCD Projector" }
          },
          extras: {
            "publicAddressSystem": 5000
          }
        },
        extras: {
          "meals": {
            "breakfast": 2000,
            "lunchOrDinner": 2500
          },
          "airportTransfer": {
            "oneWay": 80
          },
          "dayUse": "75% of applicable rate (checkout by 18:00hrs)",
          childPolicy: {
            "0to3years": "No charge when sharing with adults",
            "3to12years": "65% of adult rate when sharing with parents",
            "12to16years": "75% of adult rate when sharing with adults"
          }
        },
        "terms": {
          "taxes": "All rates are inclusive of 23% Government Taxes (16% VAT, 5% Service Charge, and 2% Training Levy)",
          cancellation: {
            "30to14days": "50% of room charges for the first night",
            "13to3days": "75% of room charges for the first night",
            "within48hours": "100% of room charges and other services for the first night",
            "noShow": "100% for room charges and other services for the first night"
          },
          checkIn: "12:00hrs",
          checkOut: "10:00hrs"
        }
      },
      "contact": {
        "address": "P O Box 2750 – 90100 Machakos, Kenya",
        "phone": ["+254 710 551 611", "+254 736 180 561"],
        "email": ["sales@gelianhotel.com", "reservations@gelianhotel.com"],
        "website": "www.gelianhotel.com"
      }
    },
    {
      id: 50,
      name: "Glee Nairobi",
      location: "Northern Bypass Road, Nairobi, Kenya",
      rating: 5.0,
      category: "Luxury Hotel",
      description: "A delightful 5-star luxury city hotel that embodies the charm of a Resort.",
      amenities: ["Restaurant", "Wi-Fi", "Gym", "Spa", "Sauna", "Steam Room", "Outdoor Heated Swimming Pool", "Skywalk", "Business Services"],
      priceCategory: "Premium",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/eb/ac/31/lobby.jpg?w=900&h=-1&s=1",
      hasContractRates: true,
      contractRates: {
        validity: "01 July 2024 to 31 December 2025",
        rooms: {
          superiorRoom: {
            size: "32M²",
            rack: { single: 330, double: 360 },
            contracted: { single: 210, double: 240, triple: "N/A" }
          },
          superiorTerraceRoom: {
            size: "32M²",
            rack: { single: 360, double: 390 },
            contracted: { single: 240, double: 270, triple: "N/A" }
          },
          deluxeRoom: {
            size: "50M²",
            rack: { single: 420, double: 450 },
            contracted: { single: 300, double: 330, triple: 360 }
          },
          juniorSuite: {
            size: "59M²",
            rack: { single: 470, double: 500 },
            contracted: { single: 350, double: 380, triple: 410 }
          },
          executiveSuite: {
            size: "65M²",
            rack: { single: 800, double: 830 },
            contracted: { single: 650, double: 680, triple: "N/A" }
          },
          presidentialSuite: {
            size: "582M²",
            rack: { single: 15000, double: 15000 },
            contracted: { single: 15000, double: 15000, triple: 15000 }
          }
        },
        mealSupplements: {
          breakfast: 30,
          lunch: 45,
          dinner: 50
        },
        childPolicy: {
          age0to5: "Free accommodation and breakfast when sharing with parents",
          age6to12: "USD 15 breakfast supplement per child per night when sharing with adults",
          ownRoom: "Children 12 years and below pay 75% of double room rate"
        },
        specialOffers: {
          familiarization: {
            agent: { 
              superiorSingle: 200,
              superiorDouble: 230
            },
            media: {
              superiorSingle: 200,
              superiorDouble: 230
            }
          },
          anniversary: "Room upgrade (subject to availability), flowers, card and bottle of wine",
          honeymoon: "Room upgrade (subject to availability), flowers, card and bottle of wine"
        },
        cancellationPolicy: {
          sevenDays: "35% of total amount",
          twentyFourHours: "100% of total amount",
          noShow: "100% of first night accommodation charge"
        }
      }
    },
    // Adding 50 more hotels to provide comprehensive coverage
    {
      id: 51,
      name: "Golden Tulip Westlands Nairobi",
      location: "Westlands, Nairobi, Kenya",
      rating: 4.4,
      category: "Business Hotel",
      description: "Modern international hotel in Nairobi's vibrant Westlands district offering comfortable accommodations for business and leisure travelers.",
      amenities: ["Restaurant", "Swimming Pool", "Fitness Center", "Business Center", "Wi-Fi", "Conference Facilities"],
      priceCategory: "Premium",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/46/00/09/hotel-facade.jpg?w=900&h=500&s=1",
      hasContractRates: true,
      contractRates: {
        validity: "31.10.2024 Till 31.12.2025",
        rooms: {
          standardRoom: {
            size: "27-30 sqm",
            roomCount: 44,
            rates: {
              BB: { single: 125, double: 145 },
              HB: { single: 145, double: 165 },
              FB: { single: 165, double: 185 }
            }
          },
          superiorRoom: {
            size: "30-35 sqm",
            roomCount: 38,
            rates: {
              BB: { single: 145, double: 165 },
              HB: { single: 165, double: 185 },
              FB: { single: 185, double: 205 }
            }
          },
          juniorSuite: {
            size: "35-40 sqm",
            roomCount: 10,
            rates: {
              BB: { single: 170, double: 190 },
              HB: { single: 190, double: 210 },
              FB: { single: 210, double: 230 }
            }
          },
          executiveSuite: {
            size: "50-55 sqm",
            roomCount: 2,
            rates: {
              BB: { single: 190, double: 210 },
              HB: { single: 210, double: 230 },
              FB: { single: 230, double: 250 }
            }
          }
        },
        childPolicy: {
          age1to6: "Baby cot available (subject to availability)",
          age6to12: "Extra bed charges apply",
          thirdAdult: "Extra bed charges apply",
          maxOccupancy: "2 Adults & 2 Children or 3 Adults"
        },
        rateInclusions: [
          "16% Service Charge",
          "7% VAT",
          "2% Catering Levy"
        ],
        cancellationPolicy: "1 Night Charge due if canceled within 48 hours of arrival",
        noShowPolicy: "1 Night Charge due",
        paymentTerms: "Payment required through Payment Gateway or Virtual Credit Card 48 hours before guests' arrival"
      }
    },
    {
      id: 52,
      name: "Golden Tulip Zanzibar Resort",
      location: "Zanzibar, Tanzania",
      rating: 4.5,
      category: "Beach Resort",
      description: "International standard beach resort offering comfort and luxury with oceanfront accommodation options in Zanzibar. Features rooms and suites with city and ocean views, some with private jacuzzis.",
      amenities: ["Swimming Pool", "Beach Access", "Restaurant", "Water Sports", "Ocean Views", "Private Jacuzzi (select rooms)", "Room Service", "Wi-Fi"],
      priceCategory: "Premium",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/e4/8c/37/suite-ocean-view.jpg?w=900&h=500&s=1",
      hasContractRates: true,
      contractRates: {
        validityYear: "2024-2025",
        seasons: {
          high: {
            period: "July & August",
            rates: {
              superiorCityView: {
                units: 7,
                maxOccupancy: 2,
                rack: { single: 114, double: 127 },
                sto: { single: 100, double: 124 }
              },
              superiorOceanView: {
                units: 4,
                maxOccupancy: 2,
                rack: { single: 131, double: 146 },
                sto: { single: 118, double: 130 }
              },
              superiorOceanFront: {
                units: 2,
                maxOccupancy: 2,
                features: "with Jacuzzi",
                rack: { single: 145, double: 161 },
                sto: { single: 123, double: 137 }
              },
              seniorSuite1BRCityView: {
                units: 4,
                maxOccupancy: 2,
                rack: { single: 172, double: 191 },
                sto: { single: 132, double: 148 }
              },
              seniorSuite1BROceanFront: {
                units: 8,
                maxOccupancy: 2,
                rack: { single: 188, double: 209 },
                sto: { single: 140, double: 158 }
              },
              seniorSuite2BROceanFront: {
                units: 6,
                maxOccupancy: 4,
                rack: { single: 300, double: 370 },
                sto: { single: 280, double: 310 }
              }
            }
          },
          shoulder: {
            period: "September 1 to October 31 and January 4 to February 28",
            rates: {
              superiorCityView: {
                rack: { single: 105, double: 125 },
                sto: { single: 89, double: 98 }
              },
              superiorOceanView: {
                rack: { single: 124, double: 140 },
                sto: { single: 100, double: 110 }
              },
              superiorOceanFront: {
                rack: { single: 130, double: 158 },
                sto: { single: 114, double: 138 }
              },
              seniorSuite1BRCityView: {
                rack: { single: 160, double: 175 },
                sto: { single: 128, double: 140 }
              },
              seniorSuite1BROceanFront: {
                rack: { single: 177, double: 188 },
                sto: { single: 138, double: 150 }
              },
              seniorSuite2BROceanFront: {
                rack: { single: 270, double: 350 },
                sto: { single: 250, double: 290 }
              }
            }
          },
          low: {
            period: "November 1 to December 23 and March 1 to June 30",
            rates: {
              superiorCityView: {
                rack: { single: 100, double: 115 },
                sto: { single: 84, double: 92 }
              },
              superiorOceanView: {
                rack: { single: 120, double: 140 },
                sto: { single: 89, double: 108 }
              },
              superiorOceanFront: {
                rack: { single: 125, double: 150 },
                sto: { single: 94, double: 114 }
              },
              seniorSuite1BRCityView: {
                rack: { single: 140, double: 160 },
                sto: { single: 115, double: 125 }
              },
              seniorSuite1BROceanFront: {
                rack: { single: 150, double: 175 },
                sto: { single: 120, double: 130 }
              },
              seniorSuite2BROceanFront: {
                rack: { single: 270, double: 350 },
                sto: { single: 180, double: 206 }
              }
            }
          },
          peak: {
            period: "December 24 to January 4",
            rates: {
              superiorCityView: {
                rack: { single: 142, double: 158 },
                sto: { single: 122, double: 135 }
              },
              superiorOceanView: {
                rack: { single: 164, double: 182 },
                sto: { single: 130, double: 138 }
              },
              superiorOceanFront: {
                rack: { single: 180, double: 200 },
                sto: { single: 140, double: 158 }
              },
              seniorSuite1BRCityView: {
                rack: { single: 214, double: 238 },
                sto: { single: 142, double: 168 }
              },
              seniorSuite1BROceanFront: {
                rack: { single: 235, double: 261 },
                sto: { single: 160, double: 180 }
              },
              seniorSuite2BROceanFront: {
                rack: { single: 320, double: 356 },
                sto: { single: 300, double: 390 }
              }
            }
          }
        },
        supplements: {
          extraPerson: 39,
          lunchOrDinner: 25,
          softDrinks: 12
        },
        childPolicy: "Children 6 years and below stay free in existing bed with adult(s). Persons 7 years and above are counted as adults.",
        rateInclusions: ["Bed & Breakfast", "VAT", "Infrastructure"],
        rateNotes: "All rates are quoted in USD. Double occupancy rates are based on 2 adults sharing accommodation per night."
      }
    },
    {
      id: 53,
      name: "Governors Camp",
      location: "Maasai Mara, Kenya",
      rating: 4.8,
      category: "Safari Camp",
      description: "Iconic luxury tented camp in the heart of the Maasai Mara, offering exceptional wildlife viewing.",
      amenities: ["Game Drives", "Hot Air Balloon Safaris", "Gourmet Dining", "Bush Walks", "Laundry", "Bush Breakfast", "Bush Dinner", "Masai Village Visits"],
      priceCategory: "Ultra Luxury",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/7e/f9/1f/caption.jpg?w=900&h=-1&s=1",
      featured: true,
      hasContractRates: true,
      contractRates: {
        "properties": {
          "governorsCamp": {
            name: "Governors' Camp",
            location: "Maasai Mara",
            "accommodationTypes": {
              "luxuryTent": {
                lowSeason: { single: 498, "sharing": 498 },
                "midSeason1": { single: 339, "sharing": 339 },
                "midSeason2": { single: 498, "sharing": 498 },
                highSeason: { single: 936, "sharing": 748 },
                "lowSeason2": { single: 498, "sharing": 498 },
                festive: { single: 936, "sharing": 748 }
              },
              "justusSuite": {
                lowSeason: { "1guest": 589, "2guests": 1087, "3guests": 1585 },
                "midSeason1": { "1guest": 430, "2guests": 769, "3guests": 1108 },
                "midSeason2": { "1guest": 589, "2guests": 1087, "3guests": 1585 },
                highSeason: { "1guest": 1028, "2guests": 1588, "3guests": 2336 },
                "lowSeason2": { "1guest": 589, "2guests": 1087, "3guests": 1585 },
                festive: { "1guest": 1028, "2guests": 1588, "3guests": 2336 }
              }
            },
            childRates: {
              "luxuryTent": {
                lowSeason: 324,
                "midSeason1": 220,
                "midSeason2": 324,
                highSeason: 487,
                "lowSeason2": 324,
                festive: 487
              }
            },
            "guideRates": {
              "guideAccommodation": 215,
              "guestAccommodation": {
                lowSeason: 324,
                "midSeason1": 221,
                "midSeason2": 324,
                highSeason: 488,
                "lowSeason2": 315,
                festive: 488
              }
            }
          },
          "littleGovernorsCamp": {
            name: "Little Governors' Camp",
            location: "Maasai Mara",
            "accommodationTypes": {
              "luxuryTent": {
                lowSeason: { single: 560, "sharing": 560 },
                "midSeason1": { single: 406, "sharing": 406 },
                "midSeason2": { single: 560, "sharing": 560 },
                highSeason: { single: 1091, "sharing": 873 },
                "lowSeason2": { single: 560, "sharing": 560 },
                festive: { single: 1091, "sharing": 873 }
              }
            },
            childRates: {
              "luxuryTent": {
                lowSeason: 364,
                "midSeason1": 264,
                "midSeason2": 364,
                highSeason: 567,
                "lowSeason2": 364,
                festive: 567
              }
            },
            "guideRates": {
              "guideAccommodation": 215
            }
          },
          "governorsIlMoranCamp": {
            name: "Governors' Il Moran Camp",
            location: "Maasai Mara",
            "accommodationTypes": {
              "luxuryTent": {
                lowSeason: { single: 732, "sharing": 732 },
                "midSeason1": { single: 533, "sharing": 533 },
                "midSeason2": { single: 732, "sharing": 732 },
                highSeason: { single: 1502, "sharing": 1201 },
                "lowSeason2": { single: 732, "sharing": 732 },
                festive: { single: 1502, "sharing": 1201 }
              }
            },
            childRates: {
              "luxuryTent": {
                lowSeason: 476,
                "midSeason1": 347,
                "midSeason2": 476,
                highSeason: 781,
                "lowSeason2": 476,
                festive: 781
              }
            },
            "guideRates": {
              "guideAccommodation": 215,
              "guestAccommodation": {
                lowSeason: 474,
                "midSeason1": 345,
                "midSeason2": 474,
                highSeason: 782,
                "lowSeason2": 460,
                festive: 782
              }
            },
            "notes": "Children under the age of 8 years are not permitted, although special requests can be made and confirmed at time of booking."
          },
          "governorsPrivateCamp": {
            name: "Governors' Private Camp",
            location: "Maasai Mara",
            "accommodationTypes": {
              "luxuryTent": {
                lowSeason: { single: 732, "sharing": 732 },
                "midSeason1": { single: 499, "sharing": 499 },
                "midSeason2": { single: 732, "sharing": 732 },
                highSeason: { single: 1502, "sharing": 1201 },
                "lowSeason2": { single: 732, "sharing": 732 },
                festive: { single: 1502, "sharing": 1201 }
              }
            },
            childRates: {
              "luxuryTent": {
                lowSeason: 476,
                "midSeason1": 324,
                "midSeason2": 476,
                highSeason: 781,
                "lowSeason2": 476,
                festive: 781
              }
            },
            "guideRates": {
              "guideAccommodation": 215,
              "guestAccommodation": {
                lowSeason: 474,
                "midSeason1": 345,
                "midSeason2": 474,
                highSeason: 782,
                "lowSeason2": 460,
                festive: 782
              }
            },
            "notes": "Available on an exclusive use basis by booking and paying for 6 or more tents per night. If less than 6 tents are booked per night then clients may be sharing the camp with other FIT's or small groups."
          },
          "loldiaHouse": {
            name: "Loldia House",
            location: "Lake Naivasha",
            "accommodationTypes": {
              "luxuryRoom": {
                lowSeason: { single: 498, "sharing": 498 },
                "midSeason1": { single: 339, "sharing": 339 },
                "midSeason2": { single: 498, "sharing": 498 },
                highSeason: { single: 936, "sharing": 748 },
                "lowSeason2": { single: 498, "sharing": 498 },
                festive: { single: 936, "sharing": 748 }
              },
              "suite": {
                lowSeason: { "1guest": 598, "2guests": 1096, "3guests": 1594 },
                "midSeason1": { "1guest": 439, "2guests": 779, "3guests": 1118 },
                "midSeason2": { "1guest": 598, "2guests": 1096, "3guests": 1594 },
                highSeason: { "1guest": 1036, "2guests": 1597, "3guests": 2345 },
                "lowSeason2": { "1guest": 598, "2guests": 1096, "3guests": 1594 },
                festive: { "1guest": 1036, "2guests": 1597, "3guests": 2345 }
              }
            },
            childRates: {
              "luxuryRoom": {
                lowSeason: 324,
                "midSeason1": 220,
                "midSeason2": 324,
                highSeason: 487,
                "lowSeason2": 324,
                festive: 487
              }
            }
          },
          "governorsMugie": {
            name: "Governors' Mugie",
            location: "Laikipia Plateau",
            "accommodationTypes": {
              "cottage": {
                lowSeason: { single: 710, "sharing": 710 },
                "midSeason1": { single: 518, "sharing": 518 },
                "midSeason2": { single: 710, "sharing": 710 },
                highSeason: { single: 1430, "sharing": 1144 },
                "lowSeason2": { single: 710, "sharing": 710 },
                festive: { single: 1430, "sharing": 1144 }
              },
              "suite": {
                lowSeason: { "1guest": 890, "2guests": 1600 },
                "midSeason1": { "1guest": 698, "2guests": 1216 },
                "midSeason2": { "1guest": 890, "2guests": 1600 },
                highSeason: { "1guest": 1615, "2guests": 2473 },
                "lowSeason2": { "1guest": 890, "2guests": 1600 },
                festive: { "1guest": 1615, "2guests": 2473 }
              }
            },
            childRates: {
              "cottage": {
                lowSeason: 462,
                "midSeason1": 336,
                "midSeason2": 462,
                highSeason: 744,
                "lowSeason2": 462,
                festive: 744
              }
            }
          }
        },
        "flights": {
          "adult": {
            "nairobiToMasaiMara": {
              "oneWay": 192,
              "return": { lowSeason: 328, highSeason: 338 }
            },
            "nairobiToLewa": {
              "oneWay": 213,
              "return": 362
            },
            "nairobiToLoisaba": {
              "oneWay": 213,
              "return": 362
            },
            "nairobiToLoldia": {
              "oneWay": 145
            },
            "nairobiToMugie": {
              "oneWay": 213,
              "return": 362
            },
            "nairobiToOlPejeta": {
              "oneWay": 160,
              "return": 272
            },
            "olPejetaToMasaiMara": {
              "oneWay": 328
            },
            "laikipiaToMasaiMara": {
              "oneWay": 336
            },
            "loldiaToMasaiMara": {
              "oneWay": 220
            },
            "masaiMaraInterAirstripFlights": 225,
            "laikipiaInterAirstripFlights": 230
          },
          "child": {
            "nairobiToMasaiMara": {
              "oneWay": 134,
              "return": { lowSeason: 230, highSeason: 236 }
            },
            "nairobiToLewa": {
              "oneWay": 149,
              "return": 254
            },
            "nairobiToLoisaba": {
              "oneWay": 149,
              "return": 254
            },
            "nairobiToLoldia": {
              "oneWay": 101
            },
            "nairobiToMugie": {
              "oneWay": 149,
              "return": 254
            },
            "nairobiToOlPejeta": {
              "oneWay": 112,
              "return": 190
            },
            "olPejetaToMasaiMara": {
              "oneWay": 230
            },
            "laikipiaToMasaiMara": {
              "oneWay": 235
            },
            "loldiaToMasaiMara": {
              "oneWay": 154
            },
            "masaiMaraInterAirstripFlights": 225,
            "laikipiaInterAirstripFlights": 230
          },
          "notes": [
            "All Governors' Aviation flights to the Mara and Laikipia operate with a minimum of 2 passengers.",
            "A 10% discount will be applied if 3 or more flights are booked with Governors Aviation in same itinerary."
          ]
        },
        "parkFees": {
          "adult": {
            "masaiMara": {
              lowSeason: 100,
              highSeason: 200
            },
            "masaiMaraCommunityFee": 50,
            "lakePejetaConservationFee": 130,
            "loldiaConservationFee": 80,
            "lakeNakuru": {
              lowSeason: 80,
              highSeason: 100
            }
          },
          "child": {
            "masaiMara": {
              lowSeason: 50,
              highSeason: 50
            },
            "masaiMaraCommunityFee": 50,
            "lakePejetaConservationFee": 65,
            "loldiaConservationFee": 40,
            "lakeNakuru": {
              lowSeason: 20,
              highSeason: 35
            }
          }
        },
        extras: {
          "bushBreakfastSupplement": 72,
          "bushDinnerSupplement": 88,
          "bushLunchSupplement": 72,
          "extraLunch": 48,
          "privateGameDrives": {
            lowSeason: 315,
            highSeason: 420
          },
          "masaiVillageVisit": 40,
          "weddingBlessingPackage": 3060
        },
        seasons: {
          lowSeason: "1-Jan-25 to 31-Mar-25",
          "midSeason1": "1-Apr-25 to 31-May-25",
          "midSeason2": "1-Jun-25 to 30-Jun-25",
          highSeason: "1-Jul-25 to 31-Oct-25",
          "lowSeason2": "1-Nov-25 to 15-Dec-25",
          festive: "16-Dec-25 to 31-Dec-25"
        },
        "inclusionsExclusions": {
          inclusions: [
            "Full board accommodation",
            "Three meals per person per night booked",
            "All soft drinks, beers, house wines and non-premium spirits",
            "Laundry",
            "Transportation in custom-built 4WD vehicles",
            "Airstrip transfers",
            "Two to three game drives daily"
          ],
          exclusions: [
            "Champagnes, selected fine wines, premium spirits and liqueurs",
            "Personal expenses",
            "Manyatta entrance fees",
            "Park fees",
            "Community fees",
            "Conservation levies"
          ]
        },
        childPolicy: "Child rate on accommodation is available for children under the age of 16 years old. Infants under the age of 3 years are accommodated free of charge. At Governors' Il Moran Camp, children under the age of 8 years are not permitted, although special requests can be made and confirmed at time of booking."
      }
    },
    {
      id: 54,
      name: "Hakuna Majiwe Beach Lodge",
      location: "Zanzibar, Tanzania",
      rating: 4.3,
      category: "Beach Resort",
      description: "Relaxed beach resort offering authentic Zanzibar experiences with modern comforts.",
      amenities: ["Beach Access", "Restaurant", "Water Sports", "Cultural Tours"],
      priceCategory: "Mid-range",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/03/cd/2b/hakuna-majiwe-lodge.jpg?w=900&h=500&s=1",
      featured: false,
      hasContractRates: true,
      contractRates: {
        "rackRates": {
          "seasonality": {
            low: "1/4-30/5",
            "mid": ["1/3-31/3", "1/6-30/6", "1/9-20/12"],
            high: ["6/1-28/2", "1/7-31/8"],
            festive: "21/12/25-5/01/26"
          },
          bedAndBreakfast: {
            "gardenBanda": {
              double: { low: 145, "mid": 163, high: 175, festive: 296 },
              single: { low: 95, "mid": 106, high: 115, festive: 193 }
            },
            "beachBanda": {
              double: { low: 206, "mid": 224, high: 236, festive: 357 },
              single: { low: 134, "mid": 146, high: 154, festive: 234 },
              "triple": { low: 242, "mid": 263, high: 276, festive: 417 }
            },
            "oceanFamilyBanda": {
              double: { low: 242, "mid": 260, high: 272, festive: 393 },
              single: { low: 158, "mid": 171, high: 178, festive: 256 },
              "triple": { low: 283, "mid": 305, high: 319, festive: 461 }
            }
          },
          halfBoard: {
            "gardenBanda": {
              double: { low: 185, "mid": 203, high: 215, festive: 336 },
              single: { low: 135, "mid": 146, high: 155, festive: 233 }
            },
            "beachBanda": {
              double: { low: 246, "mid": 264, high: 276, festive: 397 },
              single: { low: 174, "mid": 186, high: 194, festive: 274 },
              "triple": { low: 282, "mid": 303, high: 316, festive: 457 }
            },
            "oceanFamilyBanda": {
              double: { low: 282, "mid": 300, high: 312, festive: 433 },
              single: { low: 198, "mid": 211, high: 218, festive: 296 },
              "triple": { low: 323, "mid": 345, high: 359, festive: 501 }
            }
          },
          fullBoard: {
            "gardenBanda": {
              double: { low: 215, "mid": 233, high: 245, festive: 366 },
              single: { low: 175, "mid": 186, high: 195, festive: 273 }
            },
            "beachBanda": {
              double: { low: 276, "mid": 294, high: 306, festive: 427 },
              single: { low: 214, "mid": 226, high: 234, festive: 314 },
              "triple": { low: 322, "mid": 343, high: 356, festive: 497 }
            },
            "oceanFamilyBanda": {
              double: { low: 312, "mid": 330, high: 342, festive: 463 },
              single: { low: 238, "mid": 251, high: 258, festive: 336 },
              "triple": { low: 363, "mid": 385, high: 399, festive: 541 }
            }
          }
        },
        "specialTourOperatorRates": {
          bedAndBreakfast: {
            "gardenBanda": {
              double: { low: 102, "mid": 114, high: 123, festive: 207 },
              single: { low: 67, "mid": 74, high: 81, festive: 135 }
            },
            "beachBanda": {
              double: { low: 144, "mid": 157, high: 165, festive: 250 },
              single: { low: 94, "mid": 102, high: 108, festive: 164 },
              "triple": { low: 169, "mid": 184, high: 193, festive: 292 }
            },
            "oceanFamilyBanda": {
              double: { low: 169, "mid": 182, high: 190, festive: 295 },
              single: { low: 111, "mid": 120, high: 125, festive: 192 },
              "triple": { low: 198, "mid": 214, high: 223, festive: 323 }
            }
          },
          halfBoard: {
            "gardenBanda": {
              double: { low: 130, "mid": 142, high: 151, festive: 235 },
              single: { low: 95, "mid": 102, high: 109, festive: 163 }
            },
            "beachBanda": {
              double: { low: 172, "mid": 185, high: 193, festive: 278 },
              single: { low: 122, "mid": 130, high: 136, festive: 192 },
              "triple": { low: 197, "mid": 212, high: 221, festive: 320 }
            },
            "oceanFamilyBanda": {
              double: { low: 197, "mid": 210, high: 218, festive: 303 },
              single: { low: 139, "mid": 148, high: 153, festive: 207 },
              "triple": { low: 226, "mid": 242, high: 251, festive: 351 }
            }
          },
          fullBoard: {
            "gardenBanda": {
              double: { low: 151, "mid": 163, high: 172, festive: 256 },
              single: { low: 123, "mid": 130, high: 137, festive: 191 }
            },
            "beachBanda": {
              double: { low: 193, "mid": 206, high: 214, festive: 299 },
              single: { low: 150, "mid": 158, high: 164, festive: 220 },
              "triple": { low: 225, "mid": 240, high: 249, festive: 348 }
            },
            "oceanFamilyBanda": {
              double: { low: 218, "mid": 231, high: 239, festive: 324 },
              single: { low: 167, "mid": 176, high: 181, festive: 235 },
              "triple": { low: 254, "mid": 270, high: 279, festive: 379 }
            }
          }
        },
        extras: {
          childRates: {
            "6To11Years": "50% Discount on Adult PPR (sharing with Adult)"
          },
          "additionalAdult": "30% Discount on Adult PPR",
          "festiveSupplements": {
            "christmas": { "adult": 30, "child": 15 },
            "newYear": { "adult": 40, "child": 20 }
          },
          "infrastructureTax": 4,
          "transfer": {
            "stoneToHotel": 70
          }
        },
        "policies": {
          standard: {
            "payment": "25% deposit upon confirmation, 75% balance 30 days before arrival",
            cancellation: {
              "0To14Days": "75% charge",
              "15To30Days": "50% charge",
              "over30Days": "Free cancellation",
              "noShow": "100% charge"
            }
          },
          festive: {
            "payment": "50% deposit upon confirmation, 50% balance 30 days before arrival",
            cancellation: {
              "0To45Days": "50% charge",
              "over45Days": "Free cancellation",
              "noShow": "100% charge"
            }
          }
        },
        "roomCapacity": {
          "gardenBanda": { "maxAdults": 2 },
          "beachBanda": { "maxAdults": 2, "extraBed": 1 },
          "oceanFamilyBanda": { "maxAdults": 4, "extraBed": 1 }
        }
      }
    },
    {
      id: 55,
      name: "Hemingways Collection",
      location: "Multiple Locations, Kenya",
      rating: 4.9,
      category: "Luxury",
      description: "Collection of boutique luxury hotels offering unparalleled elegance and service across Kenya.",
      amenities: ["Spa", "Gourmet Dining", "Swimming Pool", "Personalized Service", "Wi-Fi", "Game Drives"],
      priceCategory: "Ultra Luxury",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/2d/34/c6/hemingways-nairobi-aerial.jpg?w=900&h=500&s=1",
      featured: true,
      hasContractRates: true,
      contractRates: {
        "hemingwaysNairobi": {
          regularSeason: {
            "dates": ["January 4 - May 31, 2025", "November 1 - December 19, 2025"],
            "sto": {
              deluxeSuite: { single: 580, double: 780, "child": 235 },
              executiveSuite: { single: 635, double: 910, "child": 275 },
              "blixenSuite": { single: 1515, double: 1515 },
              "hemingwaySuite": { single: 2020, double: 2020 }
            },
            "rack": {
              deluxeSuite: { single: 645, double: 865, "child": 260 },
              executiveSuite: { single: 700, double: 1010, "child": 300 },
              "blixenSuite": { single: 1685, double: 1685 },
              "hemingwaySuite": { single: 2245, double: 2245 }
            }
          },
          "premiumSeason": {
            "dates": ["June 1 - October 31, 2025", "December 20, 2025 - January 4, 2026"],
            "sto": {
              deluxeSuite: { single: 720, double: 920, "child": 275 },
              executiveSuite: { single: 800, double: 1080, "child": 325 },
              "blixenSuite": { single: 1800, double: 1800 },
              "hemingwaySuite": { single: 2575, double: 2575 }
            },
            "rack": {
              deluxeSuite: { single: 795, double: 1020, "child": 305 },
              executiveSuite: { single: 890, double: 1200, "child": 360 },
              "blixenSuite": { single: 2000, double: 2000 },
              "hemingwaySuite": { single: 2865, double: 2865 }
            }
          },
          extras: {
            "mealSupplement": { "lunchOrDinner": 60 },
            "transfers": {
              "jkia": { "3pax": 100, "5pax": 130 },
              "wilson": { "3pax": 60, "5pax": 80 }
            },
            "vipAirportAssistance": { "jkia": 35 }
          },
          inclusions: ["Bed & Breakfast", "Wi-Fi", "Mineral Water", "Gym Access", "Taxes"]
        },
        "hemingwaysOlSekiMara": {
          regularSeason: {
            "dates": ["January 4 - June 15, 2025", "November 1 - December 19, 2025"],
            "sto": {
              "ninaTent": { single: 895, "pps": 730, "child": 305 },
              "privateVilla": { "exclusive": 3645 }
            },
            "rack": {
              "ninaTent": { single: 995, "pps": 810, "child": 340 },
              "privateVilla": { "exclusive": 4050 }
            }
          },
          highSeason: {
            "dates": ["June 16 - 30, 2025", "September 1 - October 31, 2025"],
            "sto": {
              "ninaTent": { single: 1260, "pps": 995, "child": 415 },
              "privateVilla": { "exclusive": 4950 }
            },
            "rack": {
              "ninaTent": { single: 1405, "pps": 1105, "child": 460 },
              "privateVilla": { "exclusive": 5500 }
            }
          },
          "premiumSeason": {
            "dates": ["July 1 - August 31, 2025", "December 20, 2025 - January 4, 2026"],
            "sto": {
              "ninaTent": { single: 1400, "pps": 1090, "child": 445 },
              "privateVilla": { "exclusive": 5440 }
            },
            "rack": {
              "ninaTent": { single: 1555, "pps": 1210, "child": 495 },
              "privateVilla": { "exclusive": 6040 }
            }
          },
          extras: {
            "conservancyFees": { "adult": 130, "child": 65 },
            "reserveFundFees": { "perPerson": 5 },
            "maraReserveGameDrive": 80,
            "maraReserveParkFees": {
              "janToJun": 100,
              "julToDec": 200
            },
            "bushDinner": 65,
            "additionalLunch": 30,
            "exclusiveVehicle": 400,
            "culturalVillage": 35
          },
          "closedDates": ["April 14 - May 19, 2025"],
          inclusions: [
            "Full Board Accommodation", 
            "Local Alcoholic Drinks", 
            "2 Game Drives Daily",
            "Bush Breakfast (per stay)",
            "Night Game Drive (per stay)",
            "Airstrip Transfers",
            "Wi-Fi",
            "Guided Bush Walk (per stay)"
          ],
          specialOffers: {
            "stay4Pay3": "Valid for Regular and High Season",
            "honeymoon": "Bride pays 50% in Regular Season (3-5 nights)"
          }
        },
        "hemingwaysWatamu": {
          highSeason: {
            "dates": ["January 4 - February 28, 2025", "August 1 - 31, 2025"],
            "sto": {
              "northWingOceanView": { single: 295, double: 385, "extraAdult": 155, "child": 90 },
              "northWingDeluxeOceanView": { single: 360, double: 450 },
              "1BedroomOceanViewSuite": { single: 495, double: 675 },
              "2BedroomOceanViewSuite": { "perRoom": 900 },
              "2BedroomDeluxeOceanViewSuite": { "perRoom": 1080 },
              "4BedroomOceanViewPenthouse": { "perRoom": 1980 }
            },
            "rack": {
              "northWingOceanView": { single: 325, double: 425, "extraAdult": 170, "child": 100 },
              "northWingDeluxeOceanView": { single: 400, double: 500 },
              "1BedroomOceanViewSuite": { single: 550, double: 750 },
              "2BedroomOceanViewSuite": { "perRoom": 1000 },
              "2BedroomDeluxeOceanViewSuite": { "perRoom": 1200 },
              "4BedroomOceanViewPenthouse": { "perRoom": 2200 }
            }
          },
          regularSeason: {
            "dates": ["March 1 - July 31, 2025", "September 1 - December 19, 2025"],
            "sto": {
              "northWingOceanView": { single: 230, double: 310, "extraAdult": 125, "child": 60 },
              "northWingDeluxeOceanView": { single: 265, double: 355 },
              "1BedroomOceanViewSuite": { "perRoom": 450 },
              "2BedroomOceanViewSuite": { "perRoom": 765 },
              "2BedroomDeluxeOceanViewSuite": { "perRoom": 900 },
              "4BedroomOceanViewPenthouse": { "perRoom": 1440 }
            },
            "rack": {
              "northWingOceanView": { single: 255, double: 345, "extraAdult": 140, "child": 70 },
              "northWingDeluxeOceanView": { single: 295, double: 395 },
              "1BedroomOceanViewSuite": { "perRoom": 500 },
              "2BedroomOceanViewSuite": { "perRoom": 850 },
              "2BedroomDeluxeOceanViewSuite": { "perRoom": 1000 },
              "4BedroomOceanViewPenthouse": { "perRoom": 1600 }
            }
          },
          peakSeason: {
            "dates": ["December 20, 2025 - January 4, 2026"],
            "mealPlan": "Half Board",
            "sto": {
              "northWingOceanView": { "perRoom": 865, "extraAdult": 345, "child": 210 },
              "northWingDeluxeOceanView": { "perRoom": 970 },
              "1BedroomOceanViewSuite": { "perRoom": 1170 },
              "2BedroomOceanViewSuite": { "perRoom": 2025 },
              "2BedroomDeluxeOceanViewSuite": { "perRoom": 2205 },
              "4BedroomOceanViewPenthouse": { "perRoom": 4320 }
            },
            "rack": {
              "northWingOceanView": { "perRoom": 960, "extraAdult": 385, "child": 240 },
              "northWingDeluxeOceanView": { "perRoom": 1080 },
              "1BedroomOceanViewSuite": { "perRoom": 1300 },
              "2BedroomOceanViewSuite": { "perRoom": 2250 },
              "2BedroomDeluxeOceanViewSuite": { "perRoom": 2450 },
              "4BedroomOceanViewPenthouse": { "perRoom": 4800 }
            }
          },
          extras: {
            "mealSupplements": {
              halfBoard: 40,
              fullBoard: 75,
              "childUnder12": "50% of adult rate"
            },
            "transfers": {
              "malindiAirport": 25,
              "vipingoAirport": 50,
              "mombasaAirport": 80
            }
          },
          inclusions: ["Bed & Breakfast", "Wi-Fi", "Mineral Water", "Gym Access", "Taxes"],
          specialOffers: {
            "stay4Pay3": "Valid January 4 - December 19, 2025",
            "stay7Pay5": "Valid January 4 - December 19, 2025",
            "honeymoon": "Bride Stays Free in Regular Season (3-5 nights)"
          }
        },
        "hemingwaysEdenResidence": {
          regularSeason: {
            "dates": ["January 4 - June 30, 2025", "October 1 - December 19, 2025"],
            "sto": {
              "mainHouse": {
                "masterBedroom": { single: 650, double: 930 },
                "bedroom2": { single: 550, double: 770 },
                "bedroom3": { single: 430, double: 590 }
              },
              "toniosStudios": {
                "gardenView": { single: 650, double: 890 },
                "forestView": { single: 650, double: 890 },
                "gardenLoft": { single: 520, double: 720, "child": 220 }
              },
              "cottage": { single: 640, double: 890, "child": 220 },
              "exclusiveUse": {
                "mainHouse": 2250,
                "mainHouseWithKidsLoft": 2700,
                "toniosStudio": 1935,
                "entireProperty": 6480
              }
            },
            "rack": {
              "mainHouse": {
                "masterBedroom": { single: 720, double: 1035 },
                "bedroom2": { single: 610, double: 855 },
                "bedroom3": { single: 480, double: 655 }
              },
              "toniosStudios": {
                "gardenView": { single: 720, double: 990 },
                "forestView": { single: 720, double: 990 },
                "gardenLoft": { single: 580, double: 800, "child": 290 }
              },
              "cottage": { single: 710, double: 990, "child": 290 },
              "exclusiveUse": {
                "mainHouse": 2500,
                "mainHouseWithKidsLoft": 3000,
                "toniosStudio": 2150,
                "entireProperty": 7200
              }
            }
          },
          "premiumSeason": {
            "dates": ["July 1 - September 30, 2025", "December 20, 2025 - January 4, 2026"],
            "sto": {
              "mainHouse": {
                "masterBedroom": { single: 820, double: 1160 },
                "bedroom2": { single: 675, double: 925 },
                "bedroom3": { single: 520, double: 710 }
              },
              "toniosStudios": {
                "gardenView": { single: 815, double: 1115 },
                "forestView": { single: 815, double: 1115 },
                "gardenLoft": { single: 630, double: 860, "child": 220 }
              },
              "cottage": { single: 820, double: 1080, "child": 220 },
              "exclusiveUse": {
                "mainHouse": 2700,
                "mainHouseWithKidsLoft": 3150,
                "toniosStudio": 2475,
                "entireProperty": 8100
              }
            },
            "rack": {
              "mainHouse": {
                "masterBedroom": { single: 910, double: 1285 },
                "bedroom2": { single: 750, double: 1025 },
                "bedroom3": { single: 575, double: 790 }
              },
              "toniosStudios": {
                "gardenView": { single: 905, double: 1240 },
                "forestView": { single: 905, double: 1240 },
                "gardenLoft": { single: 700, double: 960, "child": 290 }
              },
              "cottage": { single: 910, double: 1200, "child": 290 },
              "exclusiveUse": {
                "mainHouse": 3000,
                "mainHouseWithKidsLoft": 3500,
                "toniosStudio": 2750,
                "entireProperty": 9000
              }
            }
          },
          inclusions: ["Bed & Breakfast", "Wi-Fi", "Mineral Water", "Taxes"],
          specialOffers: {
            "longStay": "20% discount on 4+ nights in Cottage, plus 50% off laundry"
          },
          childPolicy: "No children under 12 unless exclusive buyout"
        },
        "flyingPackages": {
          "7Nights": {
            "includes": ["1 night Hemingways Nairobi/Eden (B&B)", "3 nights Hemingways Ol Seki Mara (All-Inclusive)", "3 nights Hemingways Watamu (Half Board)"],
            regularSeason: {
              "dates": ["January 3 - April 15, 2025", "November 1 - December 19, 2025"],
              "perPersonSharing": 4430,
              "singleOccupancy": 5540
            },
            highSeason: {
              "dates": ["July - August 2025"],
              "perPersonSharing": 5755,
              "singleOccupancy": 7195
            },
            peakSeason: {
              "dates": ["June, September, October 2025"],
              "perPersonSharing": 5485,
              "singleOccupancy": 6860
            }
          },
          "9Nights": {
            "includes": ["1 night Hemingways Nairobi/Eden (B&B)", "4 nights Hemingways Ol Seki Mara (All-Inclusive)", "4 nights Hemingways Watamu (Half Board)"],
            regularSeason: {
              "dates": ["January 3 - April 15, 2025", "November 1 - December 19, 2025"],
              "perPersonSharing": 4660,
              "singleOccupancy": 5825
            },
            highSeason: {
              "dates": ["July - August 2025"],
              "perPersonSharing": 7215,
              "singleOccupancy": 9020
            },
            peakSeason: {
              "dates": ["June, September, October 2025"],
              "perPersonSharing": 5710,
              "singleOccupancy": 7150
            }
          },
          "11Nights": {
            "includes": ["2 nights Hemingways Nairobi/Eden (B&B)", "4 nights Hemingways Ol Seki Mara (All-Inclusive)", "5 nights Hemingways Watamu (Half Board)"],
            regularSeason: {
              "dates": ["January 3 - April 15, 2025", "November 1 - December 19, 2025"],
              "perPersonSharing": 5375,
              "singleOccupancy": 6720
            },
            highSeason: {
              "dates": ["July - August 2025"],
              "perPersonSharing": 8030,
              "singleOccupancy": 10040
            },
            peakSeason: {
              "dates": ["June, September, October 2025"],
              "perPersonSharing": 6525,
              "singleOccupancy": 8160
            }
          },
          "packageInclusions": [
            "Return flights between locations",
            "Accommodations as specified",
            "All meals as per package",
            "Game drives at Ol Seki Mara",
            "Airport transfers",
            "WiFi",
            "Taxes",
            "9 & 11 night offers include whale watching (Jul & Aug)",
            "11 nights offer includes half day excursion"
          ],
          "paymentTerms": {
            "deposit": "20% non-refundable upon reservation",
            "balance": "60 days prior to arrival"
          },
          "cancellationTerms": {
            "moreThan60Days": "20% of booking value",
            "30to60Days": "50% of booking value",
            "0to29Days": "100% of booking value"
          }
        }
      }
    },
    {
      id: 56,
      name: "King Fisher",
      location: "Kenya",
      rating: 4.1,
      category: "Hotel",
      description: "Established hotel offering consistent service and comfortable accommodation.",
      amenities: ["Restaurant", "Conference Facilities", "Wi-Fi", "Parking"],
      priceCategory: "Mid-range",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/23/79/62/caption.jpg?w=900&h=500&s=1"
    },
    {
      id: 57,
      name: "Heritage Group of Hotels",
      location: "Multiple Locations, Kenya",
      rating: 4.5,
      category: "Hotel Chain",
      description: "Respected hotel chain offering quality accommodation across various locations.",
      amenities: ["Restaurants", "Conference Facilities", "Business Services", "Wi-Fi"],
      priceCategory: "Premium",
      imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUXGBkYGRcYGBcYGBcYHRgYGhcdFhkaHyggGBolGxcWITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy0lICYtLS0tLS0tLS0vLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS8tLS0tNS0tLS0tLS0tLS0tLf/AABEIAOcA2gMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAQIDBQYABwj/xABCEAABAgQDBQUHBAEDAQgDAAABAhEAAyExBBJBBSJRYXEGEzKBkUJSobHB0fAUI2Lhcgcz8ZI0Q2OCk6Ky0hUWJP/EABkBAAIDAQAAAAAAAAAAAAAAAAECAAMEBf/EAC8RAAICAgECBAQGAgMAAAAAAAABAhEDIRIEMRMiQVFxobHwMkJhgZHhUtEUI8H/2gAMAwEAAhEDEQA/AM8cDOkhOJmJRlStJyUzozMB3gNQiksvmFCeYgnHY3Ln76RJUh0gozpSvOlQOeksEkhZezsol2Eei4HaIVLEqfMAlqQpJHdBOU5i+dyUqAql01DOdTGW7R7CzyiTmUpKArOAczB0h1H2XSpJ5AE+KNlVaMlaRmtl4eXOUspmFKW/blZCVKK1VdIKipi1WUSA7AxqNkYUow0zFJxKkKBmuhMtCC4WsAzAsZXJJBrbiBSTYvZ1GDTnUtEwz6IIf9ucTklNMBFDnLnLpapa/nbOw0uWwCkKAyBayCFBBCTMINXNaelWgx0RlXM2LiFS5XfFS5sxSlZU0lnNvgLyLDgMQ49HVCI7NSZijPK1AlWbunsbqJCyAo94VgijmoeL3CbExSj3vfGTLSjIiUSFKId3UVJdGZT7rlmDMXEUkyVOlgOp5gAdNFgFTqJFC5ZJBTRyBxh4yvsK40avYS5MkTJcvPnbMUkDfysCUJcAA0awrR4i7RZly0qcbis4CFBKixqS7bvRxqQwjKdn55xM492AaAqASR3amYkBSszFQd0lgyqVMaTAYKdJlTUqUkpooZkqUlmSaOWyuFO1yrS8Vyik7T2RSbVVo0EjEkEJ0YA5STlNTV75muBoYr8eqdKYyxnBZq5VFid0lXiZyxpQdIH2EqUpa5SCqWQXDOAnMWIQX1IJY0DjzF7Y4xYl/tzFKUhQoQh1Ef5BgHIPBnPCKqqQ7l5bAu2W3pknLMloUZhukjMkDeompCi6R4RcOwjKTu3BnrQoplSFDcVNWy1JyBiUJCQrMcxs2gehjJbZkGZNUsKOTNwrU3YavrS4ivw+AO8sslKWdStOg9omu6LvpCSzcHoWEJZHo3G1tsS0oZMwkKTkTlJQoi6sylFe67GgB/cUHDNGPlzV5H8QCjMTRnNlVZzQAHk1tQsYtKmRLTllitWzKIcOo6a0FBzNYbgcQUKKT4SXYlg7XBFjzijJ1LmzbHpUo16iKWCQzuSOpNXbX3YtNjypmJXlCEqzBKEglQSrIUsEsXUTVwXvo0CY7DKVL3VAgqdyKlkkZSRZQCjoxuHibZ2PUlCUFITkNCQAQC+ZL8STc1DNDYpq++jNkxyxibYE6R3srD94vD5VFiFNLQoglVDwTcuLlnDwIvbcqZLWneCj4XAJuouV2dlEGgvHoWw9sNJWpASpalyklTEZUmamillLEEqXuvV1UDUyn+oux8NJnGXKlkFABXMBUSsqGYFQIyh7gi4VQUjS01G09CRmpd1swJQxaFTNIGUHWDcRs+ZkUsOtMvK6gxy5gSAfQ9G0ivUYz17mpbHnMXueMMU8HYFTnhxN+X1hs9D6BxC8tg5bAkh4SJAGNoa0MMTISb8ni+2H2hXh1AbxRvUSWO8ACxL0pY0LwBshKQkrYqUFZcrUYpLHiasG5xy8OAkJJOYVAGpU7M+nhPnpDK47RVKnpkWNBUO8fdJLAqD3rR3G879RAJSecXuL2SpKQQAxIAUVh65lOJYcpDJIL8U2dokGwF/+IeYQsg9DkLjzg8JN9g8kj1/YuJwq1IStSWZKFOQcpBBBUpNOCQK+I1Z4FxeOCJcxEtxLl96e5cqeUWmLShbgy6KBYm6E2gHYfZsTe9Il5MRLUE2C5KcoDlYT7KhlIS7lK9amFwuwmmdwTk79BKkqLqAQU5zKchxMdKWdFFKGjxs79zMrWilx+0wELkSVHu5WSZnIZSSCkzMiiwCXoNWFtY0OFkzkzZaET1Il5krykhcxWViTOTlKkjUBgzoLg0A+G7OGXiJeHGUZzlmZkBZlsnvTLmPcMGBAqlZc2Ktzg8DKQnvpaUFRlnMhPhIYJZKCLOlgGS+gYUCfuF2Z+ZjJ0hS1yFzMiqqdIcEqVeoYueAuS1jGj2T/AP0yS4BVLyqJKHzTAA5UCHJLaG6ehgrB4lpKgky1BSlHLmJIObeBSQWamp1AFhAOHwGJw01SgJSsOVFSlJUp0PqpN1hO9qzF2pCyfcVJg+F2XLmrE9Kciw+aYErQspsN3MAQKODRnvA+0dvrwkxUubMzAI3VKYtmLjMHCSoBKhpfWIu2O3GWO7WkB3LgoDsapWHoSUkkgPRo8523tbvkJmKQkLTuleYHOmwKkkuCS9W1qNYVvX/gt7pGg27tGbLX30xaWcJAcqWPaSCKaM4DNpqBQ4raM6apQDsoEk1ASDoSqoBAtTiwaKITFTVOpRbVTU5efDrEvfGWkIuXfKa6+1W9t0ecZcuZXpGnD017kEzJmUJJO7ca5mNe7Jrl/kfTSB5q1LYqIRLS4SKsHLnKLqJPmdYhlTAXXMqtyMlaEe+dByFTyhci5hBNhbgByHnGOUm2dGEUlohnrd0oDW/yNNeArYRDInEEJIJBq2oLCqT+CDzhT7OWwqpQTrp6RArCCxIBBpvB2+8LaGphsosCRvJVum7KF8q/dP4I4YVEyqTq28Td2AUAaVFFWPDSBZJUgvxodX/yGvWJsKMrlJBOqSCd08R7SS9eDaXgRlxDKKmtmn2PhJX6ebLCCpaZiCneISmYEv8AuoeqCymLLJe2kZ6dhJsyctIzqUXzFsueh0LAJYHQN5ROJ2ZBUhZSRq9Uj3Vn25daKNQ9xA/61nCFKSpspsnKllAgqe1Q2hAFqiOhHMppI5ObDLG9diym7TThsJNw3dTEFZZLsQtK0grCwUuFBK7BQO8HFIwO0tnrkTChbOAk0LioCr8asRxjV7NebNRKmALyqKlGYTloCpWYhlGquOgvGj2ns/C43ArEpCBiEfuIMvLRARvIJBZVQbVJL0tFzjzjaBCfF0zy2WcqgXob8vKLOfLAs5GXM9hldvMOR+CKxaaWI0PEEcYmwOOUFIzZlhIYB3YVoAXDObc4zUn3NE4ljtXZpTJlzcrA0NXd3IIpQeze6TFMJVHBflGs2ztCQvChAWXyjKnxETUqL7pOaWFJ6hwLu6c1hZBBc0HOHyJR7C43rYmzsQZa0rSrKpJCks75gadI0mxJgOITOngTHU+UhgRlUSpLghwrKXarG7xRYDDoVNQk+HOkKckDKVMaioDPUR6/207OSzITPaWkhKU90kgLZzSULWy3TUC5NYuwR5b9ivLJXQB2i7pKAqXLStBC5KZZAyj99WT91RYAEBQJYM4q8U2HlzciWny2Yf8AczjpxAY9RFPPxqpaRmmKK5akhBLZWCRmBSwJYFIIc8eZr0dp8QkBIKGSGH7aDQU1TFkssYvYig2j0ram1lSiubIzIVh0plrSQCFSahKiAxOQs66+NQd2ipx+3Z+JxAWpakFkBIKgpKELWQTc5tFNU0ZqV0Ha/DonpzAzAtaCTuBMuYgqPBJKSGKgUuFMbOYwOyMCZhdT1UpL5i6ikDMzhjQGhOusGTd0LHsa9CMQrEpEiZLWtMtRXvZ0BEwoTLegZTJLFIJALUrGjwuxdqBShLXJCZqiVGUopQioIKaElJSRcipLgxkf9PcEtWImiUhExEvu05yWSACshbABSiTXlaPd8ChAGZGUhRqzF1WJJ1NK9IEstKxo47dMwEjY2NloEruUrCSMpFgmtgbmh4Xo1CZtpnaP6eYnKl3LKK94PQMADQqdnOnCPRF2jIbZKpigpCa6o3s9QUscpc28PhckvYwI5XN7SBPEoLTZ4fj0TlLAZalGhSAfEwo2tYgxKLJI/cLgEMWIVXLmDv4q7rNc1Eartnj5MuYE4aYVzt7vlJP7SQaZUl6KBAdnazvGITNScwCsqR/uK9ol7JB+XmYy5pRg2o9y/p8LauQUrEZmTLSKBybJRSpc68Vq1tEaVZS0uqj/AN4xfpKGnNV+kCrxRKciRlQ75QangVnU/J6RLhp6gGy+dXMY3bN6pEiMKEnMopa5cksefvfl4fMXV1OAdLKV1PsiOLkWJVd/d6DXrHS5KmqMyizDQHR+J5RXssVdwXEMRmYAcq6Gz/P7xGsDvK3YNwNBQ8CfSjRYTsDm3iWITUsCzO9PSkOm7MSd/MQ+UMGoQkOeTMT8IdRFckQSqOGJD2PiFPZ49Ik7nLlWgl6kKFxwb5Qq5AyuSS1HYWA+V+jQRJPh/HdhXjUD1heEhuUSKXNchjkXoaJQr/6k1vQ8oRUkLzMkpWPEhhmT/KXmqU6lOlNLTz8JVmAf8Yh+YirxeKWggKBYNkWDvIrxFSlgQ2lGMPFSRXJxZPJTMlzErdiohlVZn0rU2LaFjpGi2Tg50iSZ8qYgSVhsyFglQANNBQliA9XFdKqXiCrddyqoysEza1Mo2TM5NU8Ddk6ayTkUd5wS4BPhASTcKcKJFQaWtGrFmVb7mDP07W49jObUk5ZpVosknqT8oDmSspcUBjWy9lqMpcyaj9pmKiPCH8SAWzEEuyeY4xmjKYVuLhqBQvAaaSbJjnca9g/G7LPdSsSEHLNcAuMpUCQrIBUB0q/6TFeQ1S5+XXnFpsHHZlDDMSFK3Ru0BYqCSpwkboUaey94q9r4GZIm5JoyFgW4A2DAnp5Q8oWuSJFbpkU+ZThpwj2VW1ZszZ+GxEtRHeJyEBIWvNLzFRSConxpO9SgtaPEpsyv1+8bTsvttZwE3DCWtfdqz5k1CEKq5AUDurGbhWsXdNLi6EzQ8pS7QKVKAEw0AYqsmtRuuWy6NQlXUjpwqSAe8QOXCLbbmB7oTHIdKrBLkly4C7Myg44gC4eM0W930hMiSltDQ2tHpi5eJwKwnMALhSQpi6SCZagmjBZfKaueLCrlhU8zZCJiQkKKkpfOlt4gJWQ4DlRJNN5y0a7DYebjVZCsd3LBKFkLQkgZUgoISVUVUs43i9BFJOlS8H3E1UqXMQJq0qXmzZkLSrdUkOUlJZlAh8oo9Y0Sj/BTDZWdlZhk4vJOWUJQpC1oDKGdNUm+UEXd9GrHumG27JVlUZyEpGUeGgsUhyKO48udvn87UUmfMmy0lSFqcZnJ1YKNyA9WrS8WWJ7XYpQGXJKJIrLljQMPG5powet4rUoVTZb4c7tHvO2+0MmUkErAJdqsCwJBc0bd9HvHj/bbt4vEEypCwjIs55koqSZg4ZrlLsXpZrVON2jtLE4jN3k1a6l3LFSq6BgwdRZmgHC4UPV6VPhHFi50d7tFUppKolscbu5E0nGSw4Jt7OppqdBziGdiUKVmP+Iy2bgP75mHkJRvO4FWOWlW41P9xwnJ8TJcg7oNqEkg0HCM3BXZo5PsLKxYr3aUuOPAX8ukLLx0wkuUU4U6VYw85hVVNW9omgsLPm4PEqgBlBowLNwvdn8+WkEhF+pWR7ICtActObh3hBPJTRQCaeEk+uut4aooy3APEqBb8/OMImYh6lm5kjkSbaO/MQCEiZ5SSAssRwdxxao49Y5U5TVWW9SHrpS7RAVM6sqmUWNyw1ILelYjXVO6RWutCONK2g0QPVPWRlC1Ea5QOFeVuPG0QJSMzAqqaOSAeb6aVERyVhPjNQxapdjw0PKJ0TZYcqJeg+gGUcLP5QCE8yaQl8yszkbzHqzA5R1IiGfMJG8l6m+YHQ6CoPKI8RMSAfEFJtTKwc1Yj8eGS5iiQkBI/wDM3MVYOS4+ESiWE4ea7pUgBJI3cx9RwI4wXL2kkOCHNnI/3EtaYLPXxXpV9KybiEtZaQHJBALWapqrQekSzd4AoWAblJdIQ5AagY6VB4PA4ILkyx/Vr7v9kkpQUkoNCgBRUAK2zEmlfSK/tHvLExmzUUGyjMAWKQdCNeVzVo5MolJWqalRGigWKbPUHNXzpE8lBCCZuVQAZIWpJNbZAQQmvnF3PVMo8JcuSMzmKFgihBcMYsu0OL73u1im4lDOSKV11dSn5v5ptLDJYqYoVoglKnpooN8oEksqUpNHTvit7AgfODGVrRJxp2CFOsXvY7a6ZE2aF5iidJmSVMQPEKEuNCOV7iKeQaEenrEShWCnTI1aNZtrG9+nKlX7UjN3WZOVSwpbvQGmXLQmKDe0SfQwbOS0lBoyy4VVqABQ6JJAoC/KjuBIoEEgUBy35wJSbdsqi+K0fQ+A7JoK1LlT1AkpClgKJoge8Sgvm0pZqiMptvYBxGFmIIC5wG6spOYGUkJbKEpISSSRfxlw4JBmM/1HeWJct5cx0AlYLSx7Y0So0U1bEWipwHbo4bMl0zSXVlO8mXmCWaawdJAJyMSN2sbG9PkVxW0onmSwpBBBbNLSpJCkEMoOMxTYv7JqLQ2ZIUGUwKhTiW6X84scYoLWtWUDMpS2SGAKiScoe9dSwEMQAnxM/u3/AOo6xyp5KejpRha2RqQqYMwDkaAMQa1f4QGJWZgFBxU6FNWLlmZ4nwM5aJr6lRpcEcD6fCC8dghNdcsMQ3Wos3UQjyOMqfYeONSjruBycIkAEZTxbOLWKajXVtYZPSkFxLBsSxVVncD4V/5h0qeQCkbgHi4k89T0H9whNHJyp04nknW/lDKUrA4xBkyifAOG8TlZzcmw8+MLJeo3SX1LBXMalqaRKZjj3ZYLtWp5+8flA8zHV3A3AMCebk/KHtvsI0kcrEKBO4m7UfzYQ6bj5ocZEM50flxhcdiFJmqDvV7JYAseFTWIFY1d0mgPBPkLVMRW/RAde4QnaU9qZb2blzMMn4+cwfIXL+F2I48IjONm1OcgdEP8omxmPVlQcoTusdcyh7RJsTcgW4RKd9kS17sjXtmcTQpGlh6xJ+snFL50qe4yjr53gdG0eMtB51EOTjeCEgfnxiOL/wASJr3JZGJUalYPHdA9SKjyMWUhAVd+dE5kDiGoRb8rAGImsQQEhwCKULjXgXeJMNiHagCgX4F2bdOtNOcVzTatFkGl3DRgxmbPldykgABQ4OBQ9bPVrw2fLUlSncKF+fFxpyalmaFk4l2Bu9rBR6ewtvI/OcB2Dgp0NlBtCNK6Wipzku5dwi+wDNxYSAkpc8fLXW7RLhiFeFLlhe/C+sQ7QJUS43T4Te1Cx+kOwWVmIazKFxThBry2JfmojxuEWo3elGFzrXQjgYoJqSCaNyjZ5ymqqu28LKGmZq5v5XHO0DbQwAnAgBikAvzN3NiOfyNItxZVHTK8mPltGXlhlJ51eHTBeOxEhaTkUliPl11EOUl3+EaWZkOwwJA4Bz+cYJ7teij/AO77RHgxvAV8OjcauTYM8X4wC9JgA4G45GkRRbKp9zSbV7RzsJPKgnMVVSleV1EgbysoBABqAMrszNGbmTVTJi5qmUtaio0ASCeASwB5DgHiLETlTFqmTVKUtVSqr/jCJ5MgqAIGVP54RqfysVdR1HL4GrBg4/EZh1KJYM/GgpzOgg6XhAl3O/oSCa3OUXf4w/CSQpkhIPIHdqzFRNz0rZmg5WC7shqklhcqq5ozMaF1edC4jnZMu6Ojjw+rM6JbTavUqNbvvX1e9Imw+M7uY6w6SMpGpHFuV26xLMlEzmsXOtmzPUatrAeNSB4c2RQUCuzszkE3FdI0SSk6fsZ4NxVr3IdsBKZhWllA8bV15wIuaxJUc6z6Drp5CGTJKwGuGcNUM4qPtA0+WUkpWCkg1SQQp+YNovhGklZTOW7okmTybeZs3ThEKtb5T+fnSFKrUfgkWHWFTLKiyRmUbNYf4xatFT2E7SDrBNihCmFzuj7XgVRbSvDh9o0A2LnCM6iMqQDlbQk3PWFmYHDSw5FOKzmJ6JFCfKK4zVUO4PuUmz8GucphYXVoByi0VspKkkJoUpo7sYscBImTx+2nupOq1Cqh/EWPy+UWWO2eEJzSSHArnNFjrofhGbJ1UVkUb+/1NGPppSg5V/fwMFPwa5dFpIHG6fWIQW6H8rGzwuOQolChlVqlWvIe8IbiOz8ldQkoP8TT0MafGS/EUeE3+EzWJWe7lK/ipJ8ln1ooRHKmDX1BqOnEcoudpbAWJaRLObKVFiADVraG0Z9NCQQx509eENFqS0JJOL2WP6kGivJQqCOfEWiY4hbGujOKuOZiuC/jcGx+x5xJIm+yHJJAA1eFcEPGey1KAEAV0Jq4WNCD6v59IlwyCUqLOlw/VqHkeflyiAJZpYP8idCeXARZbLYZwSUl/FdIoAyxdjx+cZ5uotl8FeRIGRMKHYZk+0k0I+3UUgzB1LoJKA+6SNx3elaP1B+ESYjCuHFFe6Gq9ig2UDwc0s4oIJOzlpUFJcEaDXo3y/4innFrZd4ck9Eu1NmpWkLBAGiiHallNVtH9eMZWbh1IISW5EFwRyjf4dBWHSAFUzJ9hXTm/wCaRQ7WwABsxeqTSuuV9eX1izp835WVdRi/MlTM1h54RMSSHAo1GDhnbVnfyi4XKkuWWW03TaKXH4VSFPobGvoecKnGUF/h9o6CdrRz5R2anCYdCi9QOrN1ep6CsWCsO436CwAIOcfxIdwxdx8DFPlVLJBYAWLuSTa/CLfCY0quXDVBDpYFhmTqaUNCI5WZTTOtgcJLXqESZTsU7qRrZNHtV/WnGCzLGocFnAqtRejAjdNKH04wNOxWUbqc72OYbvmQx1qRwoDEM1ay+U5XcqLAq0cOSAlNA714mwGTjJuzZaSKxSwJpKk0GYsXV72g8R5EtxgLGYzvVupCSyWGa4HNqJ0ZIDCJdohRYJNWqeTVfhFfLUwYAE6ktTpzjquK5X6nKhLy0SYZZAyg0UCCHFHFwT+fMJitjzFLzZ7sXJUpR5ml4KkyGUNKKAPCl3019Y122NldzlbwkCtiC3HW2tulIpl1MYTS9XZasDlH4GOw/Z+wJUSdAAnN8yR6ReyNmy8OHLBWv8eHMmB5+3e5BASM9jmqp+fKK2XhcTjC6iUy/eVQHoPa+VoLnKS5TdR+oFGKfGCuRJjNrFahLkJK1GwTUeZF/Kgi02Z2aCWmYg95M9y6E8jx6UHWLLZGyUSUtLTU+JavEf65CDVy2ufzpGDP1t+THpfN/wCjZh6RLzZNv5IjKSenAflIXFSEmWsLAIKTQ60evoIfLD+EeYpDsXs1UyWpAmFGYM4DkDVrVjCpJSVujXLs62U+1Nky56WCQlabG1qAHl+dc9htqTcOvusQCQLKuQNCfeHONwdklqzCotcAJr5VB84Bx3Z+XMTlWFPosqKlDoVE05Ru6frIR8s3a+hkz9O5+aOn9QVE1KgCCCCAXFXqYF2hsWXOFaK94RSY7Z2JwRJG9LPtAOnhUHwH8cw/D9opxHsUu6T9DHRUW1zxu17mFyX4cipg2M7OT0WGdI1FT+dYhkYCZL3ineNEBwWJo54UeLqT2inZkgpQxUBZWp/ygntduoABqSSSLkW/roIbxZ2oyrYvhQpyj6FdhZQzhIYslyrmDZJ4fOJVrCVE1u+YXH0IoaH+47Zkt1dEH5phu0iUrJDg+oI4KETvEF1MPwk6qQopy+y1BbeKH8Cmo1vgYtErBBrW2cgg9JmoUGFalveAjL4VbBjqapV4Tq6fcVwMWmFxrB6kChJAUpI0ExBopPAhuTWjHlxX2NuLNXcvmJYEso6+yocwKF6jMPQ2CYxJmMlaAWCXPtJU1KuXprzHMQFh8QABR9QiqkKUdZSjUVoQeOthNLxAYlRzGpsMyXL392psfQxlqUXaNL4zjTKLHYV8yFpIPO3Inh/laM4rZZc1PoI3OLKZgFSS9wTy1oQfL1vAKtnpBY4iWCLglLg8DS8bsPUtKmYs3S8noZOUldspLlgzOeJJLcD58DApQrK9MpLNdfG12qz2oYWbMKmcEkter0Fh+fCB9rqSVAgAOKgBKQDwZIbj8LadFxjNOzkYpyh2LDD416AMmlrPy5/eG43FjwMWUQKEAvpTqbfGKRM5cpakHQBQHBwD5BiDrpD8PKXnlzFDdzAv0VXyDfj1yrpalfodL/l3GvUO2jJUVEAE5RVgSBU3PsjnACZTqSBUuA+grpx84Lx+K/ceWsggmqSQR5hm0g7AYvvVJE4JVUNMJyKSXFVEBlgX3g/MRMspRt0JjSaSCdpYIoMhI9tQHxSPrGm7eIKQmrOo/I/1D+0sqUqbhSiYhSUrBUpKgQkZkXIsGB9Ib/qPj5ExSBKnS1gAuUkEOSBpyHxjh45zyyxSr/K9ffsb8sox5JetUVvYKVIn98cQhCjLKO7K/ZQrNQcnTrZ42w2XINkD40t9jGD7IY7DShOEyahGZSGJeoGaopzjS4fb+CSf+0YUMQxLu2pcEdOUP1SyPK6i616P2G6eUVjVtWW6sFLHsfPlT5wIdnSLlA5k+T38/SGL7TYJW6cTIY1fOG8zoeUBY/H4ZSVFM/DqLGy0uRo29f7RVGORflf8MuU4v1H4aQxNDxAav9aXiaYDoGiBe0JOYFE6VQN/uIZtNeMYTbHbBaiUpBOlN1P3V1iLo8mbJ5UCeeGNbZusPlOZlOU3YikJJdQfMoguXy+nsxm+w21E7xmLQkqBJchNiQBXqItsLikBI35PBzOI9QlUWSwPG3Gr/YkMimk7DjhzWquhTRuhEZLbPYkqJm4Z0q9zKWUXbdIDJ86RscIoLmBCTLCPaUqa9x7IK3Y9dYIQkAEEIpp+oWmvUKteGj1E8O4JX+ws4QyakeVYFBRPRKmD90LSFhhu1fLzLXPlFv2wTuE8CPrFBMxTY9a7Dv1G5VQLPtG/WL3tTiEKkqZaScwoCCdecdWafODOdBrhJEeyUHxAez8yIZtLDvMA+lb/AB6RNsnFISGKk+HiOIgkzpZmILg0L/8AUfpAlJxx3+rJxTyfsRK2DMEsTCg5DqxoPeH8XpAC3TrQUChccmNx/Ex7Vidv4I7OEoKr3aQE2IUwfpUGsePbTUHJTcuG0OtuPLzEZ8eRuVXf32LPRuqBETgFCwBJ0OQmltUn4jpFgnHhYd6iucUUg/zFMw/mPPSKQsxyvW6XfjbjrzEVasYpJvUfI3HIVjX4CyCeO4GsnYsBzTMPaHhL3YWBY3GukZhe0g53R8fvA+KxxUGBIGop8+EAxdh6dRWynN1Lk9G2E4sGLHype3wMAjDpOoHDgOP19Ik756vUU/PSCMqMmUZXpcV5gV4B9eEUxlxMrTZS4kp7xLUoAauH9pqWv/caXDYpKUTAavJWgACmcu6wWBAqpTWqBGcxEg5wzkVdgaXp/fygqUsFDlyojLQ0Zrlr0DNaNqmBrsNwqAZhK1LTKdlKQkKKaXykilrkdY2OyOzSzMlGXOE/DzFpT36EncKjabLJzSlDgqh0MZXZ68ueoYqI8LkKyOno9R5i8G7O77DLzJEyStJdJylLi7F9KfOhjL1Cbi0macfez3BfZnCCUJOf9wkJej1PB4892x2LT+omyhiFMh65A9Egn2uJAiq2VtZQxkn9Qqhmy1zM1QxIUSacIu8ftrLNxa86VZkkpy2YlRLH2qhNeccaay4o/wDXpv2/u97+Rsik3UnZ5fiQqmVTUrFt2M7MLx85Un9QJaggrG5nzAEA6izjXWKsneYXbyF2praLHsrt39DipOJIKgjM6XAK0qQUkPpcHyEd2XNpqLpmHSdsuNv/AOny8ICV4xLAOP2mKjWiQFEk0it//WFuAnECYWBKZcsrUj/NiyacSHgjFbWRjsUlc/FBGcrUorCiiSkl0ykkMVH+TJTa8S7T7QzJM9crCrSqUlghUuS4UnKC+7Qh1EPyEZU+pVLlb+FL6GtLp3G6+v8Asy8qTMUsS0l1EqDZeANN13JbR+sFHY+KzJQZawtVUoMqYFK45RldXk8Pwm05kvEIxAI70FS3UgKDksrMghmYno8ep4rtbN/SyziDhFJWhKmVKdNRTKyvQhqHSLuo6l4mk/X6lOLDzujzHBdm8UteQoKKElSpUxIAHMgasPOJ8LsAKLHF4VKgSClRSkggsXBUDGowfbWdNC5alp7tBzJQvMl02PdzVElWm6tzXxNbF4ieZi1rZnJLcHPCApZpXuiTjjjFatjdvbNEhYQmbIn7oVmlsUuSRlJCiHp8YUbEmcJXoYBxM2iqVTSPSpuz8iAtZCUhiSaDSE6rqp4FDe38y3pcEMvLl6UeXpxK7ZExYzcHNTJE79spUzAAvXz/ABorgqtK89PXWLREjNhSopVRW6asE6toKv6xqnOSr4mWEU7BsOolbEps9ARpzgjZvd5SpU8IIUd0pJpSt+ZiNXiL8B/8Yt9gdhl4nDDFZhlMxaMrsd0bpJ0BVRwC3AvBWN5lSI5rE7YHiMcASlK8yXG8xDjWnr6QzETZb0nJI8/xorsXIMuaZK90pUEKHusWPWO2jgxKmKl1LGmZJSWNQSCKHl6OIq/46Q/jE2JmoeiwTqbfh5xXT5YUfEkecNWhPMnkIkw6QmYgZRcO4f5xbGPFWJKXJ0BTEsWcHpCiaeXoPtE+0x+6rrDU4FZDhN+afvFt62UtbLmWo9X082b5wXIUCKEAgMXHLQ8f7gQSRWo5X+8PkEM1H9AKWAjFKNjoMRPAbMWyg1BZyQWA0qza8YGm5WJDhVGAYBnD25D81jm0oW0fiaW+IgGfjGNjFmOGyNh+z5m8xysZoqpTVBSz0tS8a/tltbvcgAkir/tzSpxloC6RSPPP1oOkKnF8EwcmBSkpP0LceZxg4r1LvAY1X6pC658xO8QB4SKq0py0EMx6SC6QEioISoKFT8IqP1v8TCfrf4fOHWNIRzsnmuCSAaAfPnA+JwisxdKvV210Bjv1p935xxxR9w+kWVQroIwuzkdyqetQGVaUplOSuZqbNkS3tc6Ro+zGOUDNWhMpAy7qFqUGBUAAk1NABd4yf6g+4fSEVijqgws4KapjY8nB2i0VMJmTCwcy5r1oHJJylqmtLPGx7uerAF5UooGESnN3qswARunKJZdYIG6Ddg8ecfrOUd3+uT4RTn6ZZWn7fp/aLMefgmvf79gvG4WfJbvQtGaoCkAK8wai+sB9+XBzqBH8RDhiW9kjyh5xo90xpRndegq1lSVqNSdWZzqY9k2Xipasq5iJeIngA/78nLKpUSpYO7Q+Kqr10jxk40e7DDix7vyjJ1fSLqEldVfz+DRbiy8GSiWSQgBTmjNr+PHpcon/APHCV3QDSyAe9S9Qp90gejx5eMZyh36823vWLM2F5PX7/kfDnWNt1f38AzOe8Ve3pSPTP9OdorGAlolSFzFJmT1FRPdy6lISCsnfLqfKkKPh4NHkxxfEGLDZW3BKLkLI3nAWoAghLUBAdxfpdo04nwMubzIbtiYDi1KVUGYkllqWSCxIzqAUosWcgGLDZUpM6dMSUpCVhaE5iAwCFlNVA/uMEsqhzUfeim21jZcycuZJQZaCUlKCcxSyQC6tagnziNOJHu6uamtYDdMDVpE+GQZaib5aksaMWrw/uOC1KHeFyVTXe/KBJyyf+YmkYkIKSCoUZRSSCrjy5eUK1aGjp2ErwHezVhAUbNYBrFybG1IQySKCUr/1CPg8XGFxKZdTMUaCgYqCSpt4B3Uyk+nGIz2m4SnGhyJLjq1Ypbk+yJ6lMZpH9ddTHInHjy0iJLEGw+f2hpSKOQ3H86w9BsmXiHZ708mh8suGMAKWHifCzHJ6fWGUSWMSkMaamIkTlJ1MOQr5vCzQGsXeCQeMYY44l+LfnOBTCPE4InJhaJ4Fsz+X0iQYnmfzzgLPHZoDgicgxWL5q+P3iOZiHrV4HzRwMFRSJyHJIBqNIml4wjUtpWIcT4oigtWCyxGM5n1MO/W/yPqTFckwuaF4IPIKnTQS7/8AEP8A1PMeggJ4QmJxJyLA4np6J+0QzcQDSjakAD4iBXhwAa5eIopEuyWYsUsYYhALu/lC4eW79IVCwA1YZ6IRlN4l7pPFURLN+sPKg2sBkFKE+8YkwSlZwEKYmjlm+NIFUescm8FIAejGBLFIJUzlSqnNViku4Z/gHiReInubjkBQdIrzYXt9YUI/kPUwKQBcrB4RxR6jlCrUWbQ24QwCCQaYIwXtdIfgsIFqAJLO1ODE/SLSVsxH8m8vtE5JDJMoQqOKos8fs5KGy5qvdtIYNlqIuHgckTiyvNoQIJLC8W8vBJQwWzkaO3whsmRlm5su7VmrprA5B4FerCqHD1ERBEXmIaroHKn1itnSuQ8rRFIDiBw+XcRxQYLkbNmllZaGruLesNaAkwafcxHB0/Zs2pyFr3H3gNcoi4IiWiNMbDgkNDY6CAUiOAhGjohDoSFiWTIKnbSIQfhCz9IgJglEspd4FMDuFixzwqbGGQQHQohIWIQf3loTNDSISIQIvf1hF2Dc/p94fMVyeOlgm1ONmaFGDNmnfSORPwIi6SYp9meMtYJ/KRbgQjHQNtU0T0P0h6TaItpMSgHQEx0pXOAEZjT+4nkk/OIpqm0PUf1aExqVGYG91viYcEmtfzyiEIgsFmLvERUImGDr9rQ4SSKM/WADYCtEabB/7SP8U/IRSLltF3g/9tH+I+URvQY9zleFXQ/KKHaI3R1+hi+XZXQ/KKTGIKgAA9foYi7hZWBMdkgtOGUdBHKwh84s5FfEEaEaCThzCfpjE5IlA5EHbJSCpjZx9Yg/TG7QVs5JSsOLkfOBJ6JFbLheFR7g86wNjNny+6WoIAIDgh/k8Wc4Bg3KBcan9uZ/iYRMsaMqDQw0QphQmLygssPJGVNBaLDZ+EQczpSbaDnAeFO4npB+y1B1dPr/AHFQ5JO2ck+yn0ECnZg91Pxi3IJjhL6RBjKd2WrEqJegrz+0NUv7MLescmeWf6/nOJsTkgzApZRelIsETknURTCYSl/6Lw9Ek0Y01Pz6QGic2GYxJUqnA/NoFl26fOJxU1OkMCUhm9ePOn1gBtjpa4kTNHCGpZnLQ+WsFiwPUfPWIFTt6OKqUhxWBx/G+8cK1ALdCGjmLNX7xBkMMz884tMOl5aTyirKm0PpBCMYsAABmoHasAIXiJbIUeR+UUycQkAcYPnYpaxlNAddWgVOFSP7iEGicDYR2frE4Ra0dliBIgH0HWFmoBFL8/j9dIlMNy84gGiIJalHv+awgl73neJu6c8ep+sQplm9rMH/ADUwSubaCsPPCTlvUsLVu5iJeLzBbgMxcfnnAk2e4LJJLgkjhX+oYqarUFjYaiIJBsBnSgVEigictYAWh/cVIAiVEg6iGbLEkD5XFh/cF7JmBCyVMAQa+YIh6QBeGKIuBXhpX5wLDRarxiL5hDf1aPfT6iKmYgqU4ypHCvpDfT4xCHSpabmrfhiTuZfAsP8AmOjoYShyctN1x6c4coPYN6R0dAGFlhT8PP7CO/Tqcpo7l2JsD0hI6ARqxJmCLvmoRVvlWJJWFIS4o16mOjohFBEiiQBXh1hoWdYWOiEixAC8KE8T+co6OiDj+74FybBrmOKSKHR/WkdHQAEed7dIUqLwsdECcDDQqOjoBBHMLlJt8z5wsdEIRiaeMIuZyH1+cJHQ1AaHpqKj++tbwq0pa508+r6x0dEARrAF6fnKHoD1H5+UhI6AEasX8n/uB8vOOjoKFP/Z"
    },
    {
      id: 58,
      name: "Heritage Camps & Lodges",
      location: "Tanzania",
      rating: 4.4,
      category: "Hotels & Lodges",
      description: "Collection of quality hotels and lodges across Tanzania's key safari destinations including Serengeti, Lake Manyara, and Ngorongoro areas.",
      amenities: ["Restaurant", "Tours & Excursions", "Swimming Pool", "Wi-Fi", "Full Board", "Entertainment"],
      priceCategory: "Premium",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ff/4e/98/img-20161229-wa0039-largejpg.jpg?w=900&h=-1&s=1",
      hasContractRates: true,
      contractRates: {
        manyaraSafariLodge: {
          peakSeason: {
            months: ["July", "August", "September"],
            cottagesAndChalets: {
              single: 160,
              double: 140,
              triple: 130,
              quad: 130,
              group: 120
            },
            standardRooms: {
              single: 140,
              double: 120,
              triple: 110
            }
          },
          shoulderSeason: {
            months: ["December", "January", "February"],
            cottagesAndChalets: {
              single: 150,
              double: 130,
              triple: 120,
              quad: 120,
              group: 110
            },
            standardRooms: {
              single: 130,
              double: 110,
              triple: 100
            }
          },
          highSeason: {
            months: ["March", "June", "October"],
            cottagesAndChalets: {
              single: 130,
              double: 110,
              triple: 100,
              quad: 100,
              group: 90
            },
            standardRooms: {
              single: 110,
              double: 90,
              triple: 80
            }
          },
          lowSeason: {
            months: ["April", "May", "November"],
            cottagesAndChalets: {
              single: 80,
              double: 70,
              triple: 70,
              quad: 70,
              group: 70
            },
            standardRooms: {
              single: 70,
              double: 65,
              triple: 65
            }
          }
        },
        serengetiHeritageTentedCamp: {
          peakSeason: {
            months: ["July", "August", "September"],
            rates: {
              single: 185,
              double: 165,
              triple: 135,
              quad: 135,
              group: 125
            }
          },
          shoulderSeason: {
            months: ["December", "January", "February"],
            rates: {
              single: 155,
              double: 135,
              triple: 125,
              quad: 125,
              group: 115
            }
          },
          highSeason: {
            months: ["March", "June", "October"],
            rates: {
              single: 135,
              double: 115,
              triple: 105,
              quad: 105,
              group: 95
            }
          },
          lowSeason: {
            months: ["April", "May", "November"],
            rates: {
              single: 85,
              double: 85,
              triple: 85,
              quad: 85,
              group: 85
            }
          }
        },
        hakunaMatataSafariLodge: {
          peakSeason: {
            months: ["July", "August", "September"],
            rates: {
              single: 475,
              double: 300,
              triple: 250,
              quad: 250,
              group: 220
            }
          },
          shoulderSeason: {
            months: ["December", "January", "February"],
            rates: {
              single: 415,
              double: 250,
              triple: 200,
              quad: 200,
              group: 170
            }
          },
          highSeason: {
            months: ["March", "June", "October"],
            rates: {
              single: 350,
              double: 200,
              triple: 160,
              quad: 160,
              group: 135
            }
          },
          lowSeason: {
            months: ["April", "May", "November"],
            rates: {
              single: 270,
              double: 150,
              triple: 125,
              quad: 125,
              group: 100
            }
          }
        },
        maraMigrationCamp: {
          seasonalOperation: "June 15 - October 31",
          rates: {
            single: 160,
            double: 150,
            triple: 140,
            quad: 130,
            group: 120
          }
        },
        ndutuMigrationCamp: {
          seasonalOperation: "December 15 - March 31",
          rates: {
            single: 160,
            double: 150,
            triple: 140,
            quad: 130,
            group: 120
          },
          concessionFee: 71
        }
      },
      policies: {
        childrenPolicy: {
          ageUnder4: "Free accommodation",
          age5to12: "50% discount"
        },
        checkInTime: "14:00",
        checkOutTime: "10:00",
        earlyLunch: 30,
        driverGuides: {
          staffQuartersFee: 5,
          dinner: "Free"
        },
        tourLeaderPolicy: "Free accommodation for tour leaders bringing more than 12 guests",
        payment: {
          deposit: "20% upon confirmation",
          fullPayment: "20 days before arrival",
          cardSurcharge: "5% for Visa & Mastercard"
        },
        cancellation: {
          days60to30: "50% fee",
          days29to15: "75% fee",
          days14to0: "100% fee"
        }
      },
      additionalInfo: {
        inclusives: ["18% VAT", "Full Board", "Coffee & Tea", "Water", "Wi-Fi", "Entertainment"],
        exclusives: ["Government fees", "TDL", "Concession Fees"]
      }
    },
    {
      id: 59,
      name: "Hilton Garden Inn Nairobi Airport",
      location: "Nairobi, Kenya",
      rating: 4.6,
      category: "Airport Hotel",
      description: "Modern Hilton property offering comfort and convenience near Jomo Kenyatta International Airport, with complimentary airport transfers.",
      amenities: ["Airport Shuttle", "Restaurant", "Business Center", "Fitness Center", "Complimentary Breakfast", "Free Wi-Fi"],
      priceCategory: "Premium",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/11/98/9c/out-doors.jpg?w=900&h=500&s=1",
      featured: true,
      hasContractRates: true,
      contractRates: {
        validityPeriod: "January 1, 2025 - December 31, 2025",
        hiltonStandardRoom: {
          kingRoom: {
            single: 130,
            double: 160
          },
          twinRoom: {
            single: 130,
            double: 160
          }
        },
        hiltonDeluxeSuite: {
          kingRoom: {
            single: 250,
            double: 280
          }
        },
        rackRates: {
          hiltonStandardRoom: {
            kingRoom: {
              single: 270,
              double: 300
            },
            twinRoom: {
              single: 270,
              double: 300
            }
          },
          hiltonDeluxeSuite: {
            kingRoom: {
              single: 350,
              double: 380
            }
          }
        },
        additionalBed: {
          rollaway: 50
        },
        dayRoom: {
          timing: "11:00 AM - 6:00 PM",
          rate: "70% of contract rate"
        },
        meals: {
          breakfastBuffet: 30,
          lunchBuffet: 30,
          dinnerBuffet: 30
        }
      },
      policies: {
        checkIn: "3:00 PM",
        checkOut: "12:00 PM",
        childPolicy: {
          age0to5: "Complimentary accommodation and breakfast when sharing with adult",
          age6to12: "Complimentary room only, meals at 50% when sharing with adult",
          ownRoom: "80% of double room rate for children 0-12"
        },
        groupPolicy: {
          freeRooms: "1 free room per 10 paying rooms / 2 free rooms per 20 paying (subject to availability)",
          roomingList: {
            preliminary: "45 days prior to arrival",
            final: "14 days prior to arrival"
          }
        },
        cancellationPolicy: {
          days45to31: "First night's room rate and tax per cancelled room",
          days30to0: "100% of contracted room revenue for entire stay"
        },
        paymentTerms: {
          creditFacilities: "All invoices shall be paid within 30 days after departure",
          latePayment: "Finance charge of 1.5% per month on unpaid amounts"
        },
        mealCancellation: "72 hours advance notice required or full charge applies"
      },
      additionalInfo: {
        inclusions: ["Bed and breakfast", "Applicable taxes", "Complimentary airport transfers (on request)"],
        notes: ["All rates quoted in US dollars", "Rates are net and non-commissionable", "Government tax subject to change without notice"]
      },
      contact: {
        salesManager: {
          name: "Sheila Kimata",
          email: "sheila.kimata@hilton.com",
          phone: "+254 204075000"
        },
        reservations: {
          email: "reservations@hginairobi.co.ke",
          phone: "+254 204075000",
          fax: "+254 20 407 50001"
        }
      }
    },
    {
      id: 60,
      name: "Hondo Hondo",
      location: "Tanzania",
      rating: 4.2,
      category: "Eco Camp",
      description: "Eco-friendly tented camp at the edge of Udzungwa Mountains National Park.",
      amenities: ["Nature Walks", "Bird Watching", "Sustainable Facilities", "Restaurant"],
      priceCategory: "Mid-range",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/9d/d4/40/caption.jpg?w=300&h=-1&s=1"
    },
    {
      id: 61,
      name: "Hotel Boulevard",
      location: "Nairobi, Kenya",
      rating: 4.1,
      category: "Hotel",
      description: "Comfortable hotel offering reliable service and modern amenities, located on Harry Thuku Road in Nairobi.",
      amenities: ["Restaurant", "Wi-Fi", "Conference Room", "Business Services", "Continental Breakfast"],
      priceCategory: "Mid-range",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/b4/c2/5f/hotel-boulevard.jpg?w=900&h=500&s=1",
      hasContractRates: true,
      contractRates: {
        validityPeriod: "January 1, 2025 - December 31, 2025",
        classicRoom: {
          rackRates: {
            single: 125,
            double: 165,
            thirdAdult: 37
          },
          wholesaleRates: {
            single: 80,
            double: 105,
            thirdAdult: 30
          }
        },
        superiorRoom: {
          rackRates: {
            single: 125,
            double: 165,
            thirdAdult: 37
          },
          wholesaleRates: {
            single: 80,
            double: 105,
            thirdAdult: 30
          }
        },
        meals: {
          continentalBreakfast: 17,
          alaCarteLunch: 20,
          alaCarteDinner: 20
        },
        dayUse: {
          until1600hrs: "35% of room rate",
          until1800hrs: "50% of room rate"
        }
      },
      policies: {
        checkIn: "14:00",
        checkOut: "10:00",
        childPolicy: {
          age5to12: "50% of adult sharing rate",
          age12to17: "75% of adult sharing rate",
          ownRoom: "75% of room rate for children under 17",
          age18AndAbove: "Full adult rate"
        },
        cancellationPolicy: {
          days21to15: "25% of total booking cost",
          days14to8: "50% of total booking cost",
          days7to3: "75% of total booking cost",
          within48hrs: "100% of booking value"
        },
        singleRoomPolicy: "Maximum 5 single rooms per group at single rate, then double rate applies",
        groupPolicy: {
          complimentary: "1 free tour leader (half-twin basis) per 15 paying guests, maximum 3 per group",
          largeGroups: "Special approval needed for groups with over 15 rooms"
        },
        paymentTerms: {
          deposit: "Full payment required 45 days before arrival for peak season (July-October) and 30 days for other seasons",
          paymentMethods: ["Cash", "Cheque", "Credit Card", "Inter-bank Transfer"],
          returnedCheque: "USD 50 fee"
        },
        agentFamTrip: {
          singleRoom: 60,
          personSharing: 45
        }
      },
      additionalInfo: {
        inclusions: ["16% VAT", "Service charge", "Training levy"],
        notes: ["Rates are net and non-commissionable", "Valid for non-resident leisure business only", "Not for distribution to 3rd party online travel/hotel booking websites"]
      },
      contact: {
        reservations: {
          name: "Edith Njoki",
          email: "reservation@hotelboulevard.co.ke",
          phone: "+254 722 200 755"
        },
        marketing: {
          email: "marketing@hotelboulevard.co.ke",
          phone: "+254 762 200 755"
        },
        website: "www.hotelboulevard.co.ke",
        address: "Harry Thuku Road, P.O.Box 976-00606, Nairobi, Kenya"
      },
      bankDetails: {
        beneficiaryName: "Chezer Investments Ltd",
        accountNumber: "01003607571250",
        bank: "I & M Bank Ltd, One Park (Branch code 010), Parklane, Nairobi, Kenya",
        swiftCode: "IMBLKENA"
      }
    },
    {
      id: 62,
      name: "Hotel Rudi",
      location: "Naivasha, Kenya",
      rating: 3.9,
      category: "Budget Hotel",
      description: "Value-focused hotel offering comfortable stays and friendly service in Naivasha, Kenya with 14 rooms and conference facilities.",
      amenities: ["Restaurant", "Wi-Fi", "Parking", "Conference Room", "Half Board Option", "Full Board Option"],
      priceCategory: "Budget",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/23/e3/4d/hotel-rudi.jpg?w=800&h=500&s=1",
      hasContractRates: true,
      contractRates: {
        validityPeriod: "June 15, 2024 - December 31, 2025",
        currency: "KSH",
        bedAndBreakfast: {
          rackRates: {
            single: 9500,
            double: 15000,
            triple: 22000
          },
          tourOperatorRates: {
            single: 8000,
            double: 14000,
            triple: 21000
          }
        },
        halfBoard: {
          rackRates: {
            single: 11000,
            double: 18000,
            triple: 24000
          },
          tourOperatorRates: {
            single: 9500,
            double: 17000,
            triple: 23000
          }
        },
        fullBoard: {
          rackRates: {
            single: 12500,
            double: 22000,
            triple: 26000
          },
          tourOperatorRates: {
            single: 11000,
            double: 20000,
            triple: 25000
          }
        },
        conferencePackage: {
          fullDay: {
            rackRate: 3500,
            tourOperatorRate: 2800
          }
        },
        dayRoom: {
          refreshing: 3500
        }
      },
      facilities: {
        totalRooms: 14,
        conferenceRooms: 1,
        roomLocation: "First and second floors accessible by stairs"
      },
      policies: {
        checkIn: "12:00 PM",
        checkOut: "10:00 AM",
        childPolicy: {
          age0to5: "Free of charge",
          age6to12: "50% of room rate (regardless of whether they stay with parents)",
          age12AndAbove: "Full adult rate"
        },
        cancellationPolicy: {
          accommodation: "If cancelled 5 days or less prior to arrival date, amount shall be forfeited",
          events: "No refund on cancellation, confirmed only through payment"
        },
        paymentPolicy: "Full payment due prior to arrival",
        provisionalBookings: "Held for 2 weeks after initial request, subject to room demand"
      },
      additionalInfo: {
        inclusions: ["VAT", "All government taxes"],
        notes: ["Late check-out subject to availability and prior communication", "Mobility issues should be communicated in advance", "Dietary requirements should be advised", "Kenya has nationwide ban on plastic bags"]
      },
      paymentDetails: {
        accountName: "THE POT LTD",
        accountNumber: "01148625447400 (KSH)",
        bank: "Co-operative Bank of Kenya",
        branch: "Naivasha",
        chequePayableTo: "THE POT LTD - Only KSH account",
        usdPayment: "Cash or online banking to KSH account at current USD rate"
      },
      contact: {
        email: "info@hotelrudi.com"
      }
    },
    {
      id: 63,
      name: "House of Waine",
      location: "Masai Lane off Bogani Road, Karen, Nairobi, Kenya",
      rating: 4.4,
      category: "Boutique Hotel",
      description: "Elegant boutique hotel located in Karen, Nairobi offering luxurious accommodation and fine dining experiences.",
      amenities: ["Swimming Pool", "Garden Area", "Full English Breakfast", "Fine Dining", "Afternoon Tea"],
      priceCategory: "Premium",
      imageUrl: "/api/placeholder/800/500",
      featured: true,
      hasContractRates: true,
      contractRates: {
        "standardRates": {
          resident: {
            standard: {
              "BB": { single: 240, double: 325, "triple": 485 },
              "HB": { single: 255, double: 360, "triple": 540 },
              "FB": { single: 275, double: 395, "triple": 595 }
            },
            "malaikaSuite": {
              "BB": { single: 325, double: 400, "triple": 745 },
              "HB": { single: 340, double: 435, "triple": 780 },
              "FB": { single: 360, double: 470, "triple": 815 }
            },
            "poolsideCottage": {
              "BB": 745,
              "HB": 780,
              "FB": 815
            },
            "oneChildOneAdult": {
              "BB": 320,
              "HB": 360,
              "FB": 400
            }
          },
          nonResident: {
            standard: {
              "BB": { single: 350, double: 530, "triple": 795 },
              "HB": { single: 365, double: 560, "triple": 840 },
              "FB": { single: 380, double: 590, "triple": 885 }
            },
            "malaikaSuite": {
              "BB": { single: 415, double: 630, "triple": 875 },
              "HB": { single: 430, double: 660, "triple": 920 },
              "FB": { single: 445, double: 690, "triple": 965 }
            },
            "poolsideCottage": {
              "BB": 875,
              "HB": 920,
              "FB": 965
            },
            "oneChildOneAdult": {
              "BB": 400,
              "HB": 415,
              "FB": 440
            }
          }
        },
        extras: {
          "meals": {
            lunch: 65,
            "dinner": 65,
            "afternoonTea": 35
          },
          "dayRoom": "50% of applicable rate",
          latecheckOut: {
            "until2pm": "Free",
            "after2pm": "50% of applicable rate"
          }
        },
        "policies": {
          "children": {
            "under2": "Free",
            "under12": "50% of applicable rate",
            "above12": "100% of applicable adult rate"
          },
          "deposit": {
            "FIT": "50% pre-payment 7 days before arrival",
            "groups": "50% pre-payment 90 days before arrival"
          },
          cancellation: {
            "FIT": "Free up to 3 days to arrival",
            "groups": "Free up to 60 days to arrival"
          },
          "payment": "Payment in full must be received 3 days prior to arrival for FIT and 60 days for groups",
          "closurePeriods": {
            "christmas": "22nd to 28th December each year",
            "renovations": "May each year (subject to confirmation)"
          }
        }
      },
      "contactInfo": {
        "postal": "P.O. Box 25035-00603, Nairobi",
        "phone": ["0733414215", "0734699973", "0716267304", "0716267308", "020 8075796", "020 2601455", "020 2601456"],
        "email": ["reservations@houseofwaine.co.ke", "mail@houseofwaine.co.ke"],
        "website": "www.houseofwaine.com"
      },
      "commissionRates": {
        resident: "10%",
        nonResident: "25%"
      },
      "validUntil": "21/12/2025",
      "bankingDetails": {
        "bank": "Standard Chartered Bank",
        "branch": "Karen",
        "bankAddress": "P.O. Box 64601 – 00502",
        "accountName": "House of Waine",
        "usDollarAccount": "8702096828300",
        "kenyaShillingAccount": "0102096828300",
        "swiftCode": "SCBLKENXXXX",
        "branchCode": "75",
        "sortCode": "7500",
        "mpesa": {
          "paybill": "329329",
          "accountNumber": "0102096828300"
        }
      }
    },
    {
      id: 64,
      name: "Hyatt Regency Nairobi",
      location: "Westlands, Nairobi, Kenya",
      rating: 4.8,
      category: "Luxury Hotel",
      description: "Premium international hotel located in Westlands offering luxury accommodation with Regency Club access options.",
      amenities: ["Buffet Breakfast", "High-speed Internet", "Fitness Center", "Regency Club Lounge", "EAT Restaurant"],
      priceCategory: "Ultra Luxury",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/d9/04/ff/guest-room.jpg?w=900&h=500&s=1",
      featured: true,
      hasContractRates: true,
      contractRates: {
        wholesaleRates: {
          kingSingle: {
            rack: 250,
            sto: 150
          },
          kingDoubleTwin: {
            rack: 295,
            sto: 180
          },
          deluxeKing: {
            rack: 335,
            sto: 220
          },
          kingTwinClub: {
            rack: 345,
            sto: 240
          },
          deluxeKingClub: {
            rack: 385,
            sto: 260
          },
          juniorSuiteClub: {
            rack: 425,
            sto: 280
          },
          deluxeSuiteClub: {
            rack: 455,
            sto: 390
          },
          executiveSuiteClub: {
            rack: 485,
            sto: 420
          }
        },
        policies: {
          thirdPerson: 50,
          thirdPersonClub: 80,
          childPolicy: "Children 13 years and older charged adult rates, 12 years and younger no extra charges",
          familyRoom: "50% off rack rate for children in their own room",
          earlyCheckIn: {
            before9am: "100% of rate",
            between9amAnd2pm: "50% of rate"
          },
          lateCheckout: {
            until6pm: "50% of rate",
            after6pm: "100% of rate"
          },
          cancellation: "48 hours prior to 2:00pm for individual bookings, 7 days for series bookings"
        },
        inclusions: [
          "Buffet breakfast at EAT Restaurant",
          "Complimentary high-speed internet",
          "Use of fitness center",
          "Regency Club access for applicable room types"
        ],
        periodValidity: "January 1, 2025 to December 31, 2025",
        taxInformation: "Rates inclusive of 16% VAT, 2% Catering levy and 5.5% Service Charge"
      }
    },
    {
      id: 65,
      name: "Island Express",
      location: "Zanzibar, Tanzania",
      rating: 4.3,
      category: "Transport & Tours Service",
      description: "Comprehensive transfer and excursion service in Zanzibar offering airport transfers, beach hotel connections, and a variety of island tours.",
      amenities: ["Airport Transfers", "Hotel Transfers", "Vehicle Hire", "Guided Excursions", "Multilingual Guides", "Private Boat Tours"],
      priceCategory: "Premium",
      imageUrl: "/api/placeholder/800/500",
      featured: false,
      hasContractRates: true,
      contractRates: {
        transfers: {
          airport: {
            minibus: {
              stoneToAirport: 14,
              airportToBeach: 48,
              airportToWestBeach: 35
            },
            bus: {
              stoneToAirport: 28,
              airportToBeach: 96,
              airportToWestBeach: 70
            },
            largeBus: {
              stoneToAirport: 3,
              airportToBeach: 9,
              airportToWestBeach: 7
            },
            prado: {
              stoneToAirport: 233,
              airportToBeach: 75,
              airportToWestBeach: 51
            }
          },
          betweenHotels: {
            minibus: {
              southToNorth: 96,
              northToNorthEast: 70,
              southToSouthEast: 70
            },
            bus: {
              southToNorth: 192,
              northToNorthEast: 140,
              southToSouthEast: 140
            },
            largeBus: {
              southToNorth: 18,
              northToNorthEast: 12,
              southToSouthEast: 12
            },
            prado: {
              southToNorth: 140,
              northToNorthEast: 100,
              southToSouthEast: 100
            }
          },
          vehicleHire: {
            minibus: {
              fullDay: 220,
              halfDay: 165
            },
            bus: {
              fullDay: 380,
              halfDay: 220
            },
            largeBus: {
              fullDay: 600,
              halfDay: 400
            },
            prado: {
              fullDay: 300,
              halfDay: 220
            }
          }
        },
        excursions: {
          stoneTown: {
            fromStoneTown: {
              minibus: {
                onePerson: 42,
                twoPeople: 30,
                threePeople: 26,
                fourPeople: 23,
                fiveToNine: 21,
                tenPlus: 21
              },
              prado: {
                onePerson: 54,
                twoPeople: 43,
                threePeople: 34,
                fourPeople: 30
              }
            }
          },
          safariBlue: {
            fromStoneTown: {
              minibus: {
                onePerson: 105,
                twoPeople: 92,
                threePeople: 78,
                fourPeople: 72,
                fiveToNine: 68,
                tenPlus: 65
              }
            },
            private: {
              upToTwo: 530,
              additionalPerson: 71
            }
          },
          prisonIslandSandbank: {
            sharing: {
              fromStoneTown: {
                onePerson: 82,
                twoPeople: 77,
                threePeople: 77,
                fourPeople: 77,
                fiveToNine: 77,
                tenPlus: 77
              }
            },
            private: {
              oneToTwo: 427,
              threeToFour: 487,
              fiveToSix: 594,
              additionalUpToFourteen: 85,
              fifteenPlus: 55
            }
          },
          sunsetCruise: {
            withDinner: {
              oneToTwo: 350,
              threeToFour: 410,
              fiveToSix: 520,
              sevenToEight: 570,
              additionalPerson: 57
            }
          }
        },
        policies: {
          tourLeaderComplimentary: {
            transfers: "1 complimentary for 15-28 pax, 2 for 29-55 pax, 3 for 65-95 pax",
            excursions: "1 complimentary for 18-36 pax, 2 for 37-66 pax, 3 for 67-90 pax"
          },
          guideSupplements: {
            germanFrenchSpanishItalianArabic: "No supplement",
            russianChinese: "US$10 per transfer, US$20 per tour",
            portugueseJapanese: "On request"
          },
          childRates: {
            safariBlue: "Under 4 years free, 5-11 years 50% of adult rate, 12+ years full rate",
            sunsetCruisePrisonIsland: "Under 2 years free, 2-11 years 50% of adult rate",
            otherTours: "Under 2 years free, 2-11 years 30% of adult rate"
          },
          cancellation: "100% charge for cancellations within 24 hours",
          lunchSupplements: {
            localLunchSpiceTour: 25,
            stoneTownTour: 28,
            tourLunch: 28,
            childLunch: 14
          }
        },
        periodValidity: "2025"
      }
    },
    {
      id: 66,
      name: "Jacaranda Indian Ocean Beach Resort",
      location: "Diani Beach, Kenya",
      rating: 4.0,
      category: "Beach Resort",
      description: "Stunning beachfront resort offering garden, sea view, and ocean front accommodations with excellent amenities for both leisure and business travelers.",
      amenities: ["Half Board Meals", "Beach Access", "Conference Facilities", "Team Building Grounds", "Animation Team", "Airport Transfers", "Daily Entertainment"],
      priceCategory: "Premium",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/d9/04/ff/guest-room.jpg?w=900&h=500&s=1",
      featured: false,
      hasContractRates: true,
      contractRates: {
        eastAfricanResidents: {
          highSeason: {
            dates: ["03.01.2025 to 30.04.2025", "16.07.2025 to 31.08.2025"],
            usd: {
              gardenRooms: {
                single: 152,
                double: 218,
                thirdBed: 94
              },
              seaViewRooms: {
                single: 182,
                double: 260,
                thirdBed: 104
              },
              oceanFrontRooms: {
                single: 194,
                double: 285,
                thirdBed: 105
              }
            },
            kes: {
              gardenRooms: {
                single: 15200,
                double: 21800,
                thirdBed: 9350
              },
              seaViewRooms: {
                single: 18150,
                double: 26000,
                thirdBed: 10350
              },
              oceanFrontRooms: {
                single: 19400,
                double: 28500,
                thirdBed: 10500
              }
            }
          },
          shoulderSeason: {
            dates: ["01.09.2025 to 19.12.2025"],
            usd: {
              gardenRooms: {
                single: 146,
                double: 195,
                thirdBed: 80
              },
              seaViewRooms: {
                single: 176,
                double: 230,
                thirdBed: 92
              },
              oceanFrontRooms: {
                single: 189,
                double: 255,
                thirdBed: 104
              }
            },
            kes: {
              gardenRooms: {
                single: 14550,
                double: 19500,
                thirdBed: 7950
              },
              seaViewRooms: {
                single: 17600,
                double: 23000,
                thirdBed: 9200
              },
              oceanFrontRooms: {
                single: 18850,
                double: 25500,
                thirdBed: 10350
              }
            }
          },
          lowSeason: {
            dates: ["01.05.2025 to 15.07.2025"],
            usd: {
              gardenRooms: {
                single: 116,
                double: 165,
                thirdBed: 68
              },
              seaViewRooms: {
                single: 140,
                double: 200,
                thirdBed: 80
              },
              oceanFrontRooms: {
                single: 152,
                double: 212,
                thirdBed: 92
              }
            },
            kes: {
              gardenRooms: {
                single: 11550,
                double: 16500,
                thirdBed: 6750
              },
              seaViewRooms: {
                single: 14000,
                double: 20000,
                thirdBed: 8000
              },
              oceanFrontRooms: {
                single: 15200,
                double: 21200,
                thirdBed: 9150
              }
            }
          },
          festiveSeason: {
            dates: ["20.12.2025 to 05.01.2025"],
            usd: {
              gardenRooms: {
                single: 290,
                double: 436,
                thirdBed: 176
              },
              seaViewRooms: {
                single: 351,
                double: 527,
                thirdBed: 213
              },
              oceanFrontRooms: {
                single: 375,
                double: 564,
                thirdBed: 230
              }
            },
            kes: {
              gardenRooms: {
                single: 29050,
                double: 43600,
                thirdBed: 17600
              },
              seaViewRooms: {
                single: 35100,
                double: 52700,
                thirdBed: 21250
              },
              oceanFrontRooms: {
                single: 37500,
                double: 56350,
                thirdBed: 23000
              }
            }
          }
        },
        supplements: {
          usd: {
            fullBoard: {
              adult: 30,
              child: 15
            },
            easter: {
              adult: 30,
              child: 15
            }
          },
          kes: {
            fullBoard: {
              adult: 3000,
              child: 1500
            },
            easter: {
              adult: 3000,
              child: 1500
            }
          }
        },
        transfers: {
          usd: {
            ukundaToHotel: {
              oneWay: 25,
              return: 50
            },
            mombasaToHotel: {
              oneWay: 85,
              return: 170
            },
            miritiniToHotel: {
              oneWay: 85,
              return: 170
            }
          },
          kes: {
            ukundaToHotel: {
              oneWay: 2500,
              return: 5000
            },
            mombasaToHotel: {
              oneWay: 8500,
              return: 17000
            },
            miritiniToHotel: {
              oneWay: 8500,
              return: 17000
            }
          }
        },
        conference: {
          usd: {
            fullDay: 38,
            halfDay: 35
          },
          kes: {
            fullDay: 3800,
            halfDay: 3500
          }
        },
        policies: {
          childPolicy: "Children below 11 years at 50% if sharing with adults and 75% in own room",
          commission: "Rates are inclusive of taxes and are commissionable to Travel Agents at 10% excluding transport and conferencing",
          transferCapacity: "Maximum 5 passengers per vehicle"
        },
        periodValidity: "2025"
      }
    },
    {
      id: 67,
      name: "JTH PACKAGE",
      location: "Norway",
      rating: 4.5,
      category: "Tour Package",
      description: "Specialized tour packages connecting Scandinavia with East African experiences.",
      amenities: ["Guided Tours", "Accommodation", "Transport", "Unique Experiences"],
      priceCategory: "Premium",
      imageUrl: "/api/placeholder/800/500"
    },
    {
      id: 68,
      name: "Jumbo Resort",
      location: "Watamu, Kenya",
      rating: 4.2,
      category: "Beach Resort",
      description: "Family-friendly beach resort offering relaxation and water activities in Watamu. Features all-inclusive packages with special offers like 'pay 3 nights stay 4' (excluding festive period and Easter).",
      amenities: ["Swimming Pool", "Beach Access", "Restaurant", "Kids Club", "All-Inclusive Packages"],
      priceCategory: "Mid-range",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/03/0f/6b/e8/jumbo-club-orange.jpg?w=600&h=400&s=1",
      featured: false,
      hasContractRates: true,
      contractRates: {
        "watamu": {
          resident: {
            standardRoom: {
              regular: { double: 8400 },
              festive: { double: 9450 },
              "postFestive": { double: 8600 }
            },
            superiorRoom: {
              regular: { double: 9200 },
              festive: { double: 12450 },
              "postFestive": { double: 10000 }
            },
            extras: {
              "singleSupplement": {
                regular: 4000,
                festive: 4200
              },
              thirdAdult: {
                regular: 5700,
                festive: 5800
              },
              "childSharing": {
                "firstChild": {
                  regular: "FREE",
                  festive: "FREE"
                },
                "additionalChild": {
                  regular: 4000,
                  festive: 5800
                },
                "childWithOneAdult": {
                  regular: 6000,
                  festive: 5200
                }
              },
              "infantUnder2": "FREE",
              "softAllInclusiveReduction": {
                regular: 1200,
                festive: 1000
              }
            }
          },
          nonResident: {
            standardRoom: {
              "lowSeason1": { double: 70 },
              highSeason: { double: 115 },
              "lowSeason2": { double: 77 },
              festive: { double: 118 },
              "postFestive": { double: 75 }
            },
            superiorRoom: {
              "lowSeason1": { double: 80 },
              highSeason: { double: 125 },
              "lowSeason2": { double: 82 },
              festive: { double: 128 },
              "postFestive": { double: 82 }
            },
            extras: {
              "thirdAdultReduction": "-30%",
              "childUnder12Sharing": "FREE",
              "extraChildSharing": "-50%",
              "childWithOneAdult": "-50%",
              "infantUnder2": "FREE",
              "singleSupplement": "+50%"
            }
          },
          seasonDates: {
            resident: {
              regular: "26th June 2024 - 20th December 2024",
              festive: "21st December 2024 - 6th January 2025",
              "postFestive": "7th January 2025 - 21st April 2025"
            },
            nonResident: {
              "lowSeason1": "22nd June 2024 - 27th July 2024",
              highSeason: "28th July 2024 - 24th August 2024",
              "lowSeason2": "25th August 2024 - 20th December 2024",
              festive: "21st December 2024 - 6th January 2025",
              "postFestive": "7th January 2025 - 21st April 2025"
            }
          },
          "policies": {
            resident: {
              "payment": {
                "deposit": "30% (50% for festive period)",
                "balance": "7 days before arrival",
                "reservationWindow": "48 hours"
              },
              cancellation: {
                festive: {
                  "20-10DaysBefore": "50%",
                  "9DaysToNoShow": "100%"
                },
                "otherPeriods": {
                  "9DaysTo48Hours": "1 night",
                  "beyond48Hours": "100%"
                }
              },
              "nameChange": "Free of charge"
            },
            nonResident: {
              "payment": {
                "deposit": "20% (50% for festive period)",
                "balance": "7 days before arrival"
              },
              cancellation: {
                regularSeason: {
                  "5+DaysBefore": "No penalty",
                  "4DaysTo24Hours": "20%",
                  "noShow": "One night"
                },
                festive: {
                  "20-10DaysBefore": "50%",
                  "9DaysToNoShow": "100%"
                }
              },
              minimumStay: {
                festive: "3 nights"
              },
              "specialOffer": "Pay 6 nights stay 7 (excluding festive)"
            }
          },
          "mealPlans": {
            allInclusive: "Breakfast, lunch and dinner buffet service, from 10am to 10pm soft drinks by glass and local beer during meals. Selected list of local beer, alcohols and cocktails by glass from 10am to 10pm",
            "softAllInclusive": "Breakfast, lunch and dinner buffet service, from 10am to 10pm soft drinks by glass and local beer during meals"
          }
        }
      }
    },
    {
      id: 69,
      name: "Karama Lodge",
      location: "Arusha, Tanzania",
      rating: 4.3,
      category: "Eco Lodge",
      description: "Eco-friendly lodge set in tropical gardens with panoramic views of Mount Meru. Located on Suye Hill, Old Moshi Road in Arusha. Part of the Wilderness Trails Group of Companies.",
      amenities: ["Restaurant", "Safari Arrangements", "Gardens", "Wi-Fi", "Family Rooms"],
      priceCategory: "Mid-range",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/23/a3/24/karama-lodge-spa.jpg?w=900&h=500&s=1",
      featured: false,
      hasContractRates: true,
      contractRates: {
        "arusha": {
          resident: {
            standardRoom: {
              highSeason: {
                single: { "bb": 72, "hb": 94, "fb": 108 },
                double: { "bb": 106, "hb": 150, "fb": 180 },
                "triple": { "bb": 132.3, "hb": 199, "fb": 243 }
              },
              lowSeason: {
                single: { "bb": 61, "hb": 83, "fb": 98 },
                double: { "bb": 85, "hb": 129, "fb": 159 },
                "triple": { "bb": 109, "hb": 175, "fb": 220 }
              },
              "middleSeason": {
                single: { "bb": 63, "hb": 85, "fb": 100 },
                double: { "bb": 91, "hb": 136, "fb": 165 },
                "triple": { "bb": 114, "hb": 180, "fb": 224 }
              }
            },
            "familyRoom": {
              highSeason: { "bb": 50, "hb": 75, "fb": 89 },
              lowSeason: { "bb": 41, "hb": 65, "fb": 79 },
              "middleSeason": { "bb": 44, "hb": 68, "fb": 82 }
            }
          },
          nonResident: {
            standardRoom: {
              highSeason: {
                single: { "bb": 101, "hb": 124, "fb": 139 },
                double: { "bb": 136, "hb": 180, "fb": 209 },
                "triple": { "bb": 196, "hb": 263, "fb": 307 }
              },
              lowSeason: {
                single: { "bb": 73, "hb": 95, "fb": 109 },
                double: { "bb": 114, "hb": 158, "fb": 187 },
                "triple": { "bb": 146, "hb": 212, "fb": 256 }
              },
              "middleSeason": {
                single: { "bb": 85, "hb": 107, "fb": 122 },
                double: { "bb": 119, "hb": 163, "fb": 192 },
                "triple": { "bb": 158, "hb": 224, "fb": 268 }
              }
            },
            "familyRoom": {
              highSeason: { "bb": 63, "hb": 87, "fb": 102 },
              lowSeason: { "bb": 54, "hb": 78, "fb": 93 },
              "middleSeason": { "bb": 57, "hb": 81, "fb": 96 }
            }
          },
          extras: {
            "dayRoom": {
              highSeason: 49,
              lowSeason: 45,
              "middleSeason": 45
            },
            "holidaySurcharge": {
              "christmas": 25,
              "newYear": 25
            }
          },
          seasonDates: {
            highSeason: [
              "1st January - 28th February 2025",
              "1st June - 31st October 2025",
              "16th December - 31st December 2025"
            ],
            lowSeason: [
              "1st March - 31st May 2025"
            ],
            "middleSeason": [
              "1st November - 15th December 2025"
            ],
            "holidaySurcharge": [
              "24th December",
              "25th December",
              "31st December",
              "1st January"
            ]
          },
          "policies": {
            "payment": {
              "deposit": "25%",
              "balance": "48 hours before arrival",
              "lateFee": "10%"
            },
            "booking": {
              "method": "Email booking voucher to reservations@karama-lodge.com or direct with reception",
              "requirements": [
                "Number of adults/children (with ages)",
                "Meal Plan (BB/HB/FB/FB lunchbox)",
                "Cabin type (single/double/twin/triple/family room)",
                "Estimated arrival time",
                "Special requirements",
                "Voucher Number"
              ]
            },
            cancellation: {
              "moreThan45Days": "0%",
              "15To45Days": "25%",
              "3To14Days": "45%",
              "0To2DaysAndNoShows": "100%"
            },
            childPolicy: {
              "0To6YearsSharing": "No charge",
              "7To12YearsSharing": "50% of adult rate",
              "7To12YearsOwnRoom": "75% of adult rate",
              "13YearsAndAbove": "Full adult rate"
            },
            "blockBookings": {
              "release": "45 days before arrival",
              "confirmation": "By issuing an amendment voucher"
            }
          },
          "mealPlans": {
            "bb": "Bed & Breakfast",
            "hb": "Half Board",
            "fb": "Full Board"
          }
        }
      }
    },
    {
      id: 70,
      name: "Karen Blixen Camp",
      location: "Mara North, Kenya",
      rating: 4.7,
      category: "Safari Camp",
      description: "Premium safari camp located in the Mara North Conservancy, offering luxury tented accommodation with full board and game drive experiences.",
      amenities: [
        "Full Board Accommodation", 
        "Game Drives", 
        "Cooking School", 
        "Guided Eco Walks", 
        "Airstrip Transfers", 
        "Bush Meals",
        "Bead Project Visits"
      ],
      priceCategory: "Premium",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/9e/c7/f3/our-tents-are-en-suite.jpg?w=900&h=500&s=1",
      featured: true,
      hasContractRates: true,
      contractRates: {
        "maraNorth": {
          nonResident: {
            "rackRates": {
              "singleTent": {
                low: 685,
                shoulder: 764,
                high: 843,
                peak: 977
              },
              "doubleTwin": {
                low: 1060,
                shoulder: 1191,
                high: 1322,
                peak: 1534
              },
              "triple": {
                low: 1496,
                shoulder: 1688,
                high: 1839,
                peak: 2141
              },
              "childSharingWithTwoAdults": {
                low: 337,
                shoulder: 377,
                high: 417,
                peak: 484
              },
              "childOwnTent": {
                low: 432,
                shoulder: 473,
                high: 524,
                peak: 609
              }
            },
            contractRates: {
              "singleTent": {
                low: 445,
                shoulder: 500,
                high: 556,
                peak: 649
              },
              "doubleTwin": {
                low: 676,
                shoulder: 766,
                high: 856,
                peak: 1006
              },
              "triple": {
                low: 949,
                shoulder: 1077,
                high: 1205,
                peak: 1403
              },
              "childSharingWithTwoAdults": {
                low: 219,
                shoulder: 247,
                high: 274,
                peak: 320
              },
              "childOwnTent": {
                low: 335,
                shoulder: 374,
                high: 413,
                peak: 481
              }
            }
          },
          resident: {
            "rackRates": {
              "singleTent": {
                low: 31019,
                shoulder: 35160,
                high: 39301,
                peak: 43798
              },
              "doubleTwin": {
                low: 51016,
                shoulder: 57910,
                high: 64804,
                peak: 72304
              },
              "triple": {
                low: 71009,
                shoulder: 79793,
                high: 88577,
                peak: 98874
              },
              "childSharingWithTwoAdults": {
                low: 15422,
                shoulder: 377,
                high: 19571,
                peak: 22748
              },
              "childOwnTent": {
                low: 19572,
                shoulder: 22156,
                high: 24740,
                peak: 27564
              }
            },
            contractRates: {
              "singleTent": {
                low: 26048,
                shoulder: 29748,
                high: 33088,
                peak: 36908
              },
              "doubleTwin": {
                low: 45080,
                shoulder: 49768,
                high: 54456,
                peak: 59378
              },
              "triple": {
                low: 61753,
                shoulder: 68782,
                high: 75811,
                peak: 83276
              },
              "childSharingWithTwoAdults": {
                low: 12943,
                shoulder: 290,
                high: 16465,
                peak: 18365
              },
              "childOwnTent": {
                low: 16465,
                shoulder: 18662,
                high: 20858,
                peak: 23256
              }
            }
          },
          seasonDates: {
            lowSeason: "01/04/25 - 31/05/25",
            shoulderSeason: "01/06/25 - 30/06/25 & 1/11/25 - 22/12/25",
            highSeason: "03/01/25 - 31/03/25",
            peakSeason: "01/07/25 - 31/10/25 & 23/12/25 - 02/01/26"
          },
          inclusions: [
            "Full board accommodation",
            "Water, soft drinks, tea, coffee, local beers, house wines, selected spirit and vodka",
            "Unlimited shared game drives per day (optional full day game drive)",
            "One night game drive within Mara North Conservancy",
            "Return airstrip transfers in Mara",
            "Guided camp eco walk",
            "Visit to the Cooking School and bead project when in session"
          ],
          exclusions: [
            "Mara North Conservancy fees (Non-Residents: $130 per adult per night/$65 per child per night. Residents: KES 3000 per adult per night/KES 1500 per child per night.)",
            "Domestic flights",
            "Travel insurance",
            "Transfers in Nairobi",
            "Tips and any other items of personal nature",
            "Bush breakfast, bush lunch, bush dinner and sundowner",
            "Laundry",
            "Bush walk safaris",
            "Exclusive use of vehicle",
            "Any other item not listed under inclusions"
          ],
          "notes": [
            "Above rates DO NOT include conservancy fees for Mara North. Conservancy fees will be invoiced with the actual booking and therefore Karen Blixen Camp shall not accept payment for the same directly at the camp.",
            "CONSERVANCY FEES FOR MARA NORTH ARE SUBJECT TO CHANGE WITHIN THE YEAR."
          ]
        }
      }
    },
      {
        id: 71,
        name: "Kempinski",
        location: "Multiple Locations, East Africa",
        rating: 4.9,
        category: "Luxury Hotel",
        description: "International luxury hotel chain offering exceptional standards across East Africa.",
        amenities: ["Fine Dining", "Spa", "Swimming Pool", "Concierge Services"],
        priceCategory: "Ultra Luxury",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/d1/b9/ef/villa-rosa-kempinski.jpg?w=900&h=500&s=1",
        featured: true
      },
      {
        id: 72,
        name: "Kenya Comfort Suites",
        location: "Junction of Jakaya Kikwete & Ralph Bunche Road, Nairobi, Kenya",
        rating: 3.8,
        category: "Business Hotel",
        description: "Comfortable and affordable hotel in a convenient Nairobi location with various room options including suites with kitchens.",
        amenities: ["Restaurant", "Wi-Fi", "Airport Shuttle", "Meeting Rooms", "Kitchen in Suites", "Family Rooms"],
        priceCategory: "Budget",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/e2/d7/f2/swimming-pool.jpg?w=900&h=500&s=1",
        featured: false,
        hasContractRates: true,
        contractRates: {
          nairobi: {
            nonResident: {
              standard: {
                roomOnly: { 
                  single: 65, 
                  double: 80, 
                  triple: 90, 
                  quadruple: 100 
                },
                bedAndBreakfast: { 
                  single: 75, 
                  double: 100, 
                  triple: 110, 
                  quadruple: 140 
                },
                halfBoard: { 
                  single: 90, 
                  double: 130, 
                  triple: 155, 
                  quadruple: 200 
                }
              },
              superior: {
                roomOnly: { 
                  single: 70, 
                  double: 85 
                },
                bedAndBreakfast: { 
                  single: 80, 
                  double: 105 
                },
                halfBoard: { 
                  single: 95, 
                  double: 135 
                }
              },
              suitesWithKitchen: {
                studio: {
                  roomOnly: { 
                    single: 60, 
                    double: 70, 
                    triple: 80 
                  },
                  bedAndBreakfast: { 
                    single: 70, 
                    double: 90, 
                    triple: 130 
                  },
                  halfBoard: { 
                    single: 85, 
                    double: 120, 
                    triple: 175 
                  }
                },
                oneBedroom: {
                  roomOnly: { 
                    single: 85, 
                    double: 100 
                  },
                  bedAndBreakfast: { 
                    single: 95, 
                    double: 120 
                  },
                  halfBoard: { 
                    single: 110, 
                    double: 150 
                  }
                }
              },
              specialRooms: {
                twoRoomFamily: {
                  roomOnly: 100,
                  extraPersonBreakfast: 10,
                  extraPersonHalfBoard: 25,
                  maxOccupancy: 4
                },
                threeRoomFamily: {
                  roomOnly: 150,
                  extraPersonBreakfast: 10,
                  extraPersonHalfBoard: 25,
                  maxOccupancy: 6
                },
                fiveBedroomPenthouse: {
                  roomOnly: 250,
                  extraPersonBreakfast: 10,
                  extraPersonHalfBoard: 25,
                  maxOccupancy: 10
                }
              }
            }
          },
          meals: {
            breakfast: 10,
            lunchOrDinner: 15
          },
          policies: {
            childPolicy: {
              below3Years: "Free of charge",
              between3And12Years: "50% of adult rate",
              above12Years: "Full rate"
            },
            cancellationPolicy: {
              priorTo14Days: "No charge",
              between2And14Days: "50% charge",
              lessThan48Hours: "100% charge"
            },
            noShowPolicy: {
              fullPayment: "No release of room",
              deposit50Percent: "Room may be released after 10:00 p.m."
            },
            conferenceSurcharge: "25% during conference times",
            creditCardCommission: "5% less commission for Visa payments",
            specialsCommission: "10% flat commission on prepayment"
          }
        }
      },
      {
        id: 73,
        name: "Kibo Palace Hotel",
        location: "Arusha, Tanzania",
        rating: 4.4,
        category: "Business Hotel",
        description: "Elegant hotel in Arusha offering quality accommodation and business facilities.",
        amenities: ["Restaurant", "Swimming Pool", "Conference Center", "Wi-Fi", "Gym", "Sauna", "Steam Room"],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/af/0b/d3/entrance.jpg?w=900&h=500&s=1",
        featured: false,
        hasContractRates: true,
        contractRates: {
          arusha: {
            nonResident: {
              executiveRoom: {
                lowSeason: { single: 135, double: 155 },         // April - June 2025
                highSeason: { single: 157, double: 173 }         // July to Dec & Jan to March 2025
              },
              deluxeSuite: {
                lowSeason: { single: 235, double: 265 },         // April - June 2025
                highSeason: { single: 250, double: 280 }         // July to Dec & Jan to March 2025
              },
              executiveSuite: {
                lowSeason: { single: 335, double: 385 },         // April - June 2025
                highSeason: { single: 350, double: 400 }         // July to Dec & Jan to March 2025
              }
            },
            rackRates: {
              international: {
                executiveRoom: { single: 230, double: 260, twin: 260 },
                deluxeSuite: { single: 350, double: 380 },
                executiveSuite: { single: 510, double: 550 }
              },
              local: {
                executiveRoom: { single: 210, double: 230, twin: 230 },
                deluxeSuite: { single: 330, double: 350 },
                executiveSuite: { single: 480, double: 510 }
              }
            }
          },
          extras: {
            lunch: 23,
            dinner: 25,
            lunchBox: 18,
            hamper: 20,
            dayUseRoom: "50% of room rate",
            festiveSurcharge: 10,       // 24th Dec to 1st Jan
            childSurcharge: 35,         // 6-12 years sharing with parents
            extraPersonSurcharge: 45,   // Triple occupancy
            complimentaryRoom: "Tours booking more than 15 rooms"
          },
          policies: {
            childPolicy: {
              under6YearsFree: true,
              child6to12Sharing: 35,
              child6to12OwnRoom: "75% of the category rate"
            },
            cancellationPolicy: {
              between60and15Days: "50% of total room charges",
              within14Days: "100% of total room charges"
            },
            paymentTerms: {
              depositRequired: "30% within 14 days of confirmation",
              finalPayment: "70% 60 days prior to arrival"
            }
          }
        }
      },
      {
        id: 74,
        name: "Kibo Safari Camp",
        location: "Amboseli, Kenya",
        rating: 4.3,
        category: "Safari Camp",
        description: "Luxury tented camp with stunning views of Mount Kilimanjaro.",
        amenities: ["Game Drives", "Restaurant", "Swimming Pool", "Bar"],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/8a/e0/e8/kilimanjaro-view-from.jpg?w=900&h=500&s=1",
        featured: false,
        hasContractRates: true,
        contractRates: {
          amboseli: {
            nonResident: {
              club: {
                lowSeason1: { single: 225, double: 350, triple: 485, child: 90 },  // 1st Apr 2025 to 31st May 2025
                lowSeason2: { single: 250, double: 400, triple: 550, child: 100 }, // 5th Jan 2025 to 31st Mar 2025 & 1st Oct 2025 to 22nd Dec 2025
                peak: { single: 350, double: 460, triple: 635, child: 115 },       // 1st June 2025 to 30th Sept 2025
                christmas: { single: 400, double: 500, triple: 690, child: 125 }   // 23rd Dec 2025 to 4th Jan 2026
              },
              deluxe: {
                lowSeason1: { single: 175, double: 250, triple: 345, child: 65 },  // 1st Apr 2025 to 31st May 2025
                lowSeason2: { single: 200, double: 300, triple: 415, child: 75 },  // 5th Jan 2025 to 31st Mar 2025 & 1st Oct 2025 to 22nd Dec 2025
                peak: { single: 280, double: 360, triple: 495, child: 90 },        // 1st June 2025 to 30th Sept 2025
                christmas: { single: 300, double: 400, triple: 550, child: 100 }   // 23rd Dec 2025 to 4th Jan 2026
              },
              familyTent: {
                clubSupplement: { adult: 50, child: 25 },
                deluxeSupplement: { adult: 40, child: 20 }
              }
            }
          },
          extras: {
            honeymooners: 80,
            easterSurcharge: 35,
            christmasSurcharge: 40,
            extraLunch: 35,
            lunchbox: 30,
            tourLeader: 100,
            halfBoardReduction: 5
          }
        }
      },
      {
        id: 75,
        name: "Kicheche Camp",
        location: "Maasai Mara, Kenya",
        rating: 4.8,
        category: "Safari Camp",
        description: "Award-winning eco-friendly safari camps in Kenya's premier wildlife areas with locations in the Mara Conservancies and Laikipia.",
        amenities: ["Game Drives", "Guided Walks", "Sustainable Tourism", "Gourmet Dining", "Night Drives", "Bush Walks", "Laundry Service"],
        priceCategory: "Ultra Luxury",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/ff/3f/9b/kicheche-mara-family.jpg?w=800&h=500&s=1",
        featured: true,
        hasContractRates: true,
        "properties": [
          {
            name: "Kicheche Mara North",
            location: "Mara North Conservancy"
          },
          {
            name: "Kicheche Valley Naboisho",
            location: "Naboisho Conservancy" 
          },
          {
            name: "Kicheche Bush Olare",
            location: "Olare Motorogi Conservancy"
          },
          {
            name: "Kicheche Laikipia",
            location: "Ol Pejeta Conservancy"
          }
        ],
        contractRates: {
          "maraNorth": {
            peak: {
              "perPersonPerNight": 915,
              "singleSupplement": 260,
              "conservancyFees": 130
            },
            "mid": {
              "perPersonPerNight": 730,
              "singleSupplement": 175,
              "conservancyFees": 130
            },
            regular: {
              "perPersonPerNight": 625,
              "singleSupplement": 165,
              "conservancyFees": 130
            },
            "familySuite": {
              peak: 3660,
              "mid": 2920,
              regular: 2500
            }
          },
          "valleyNaboisho": {
            peak: {
              "perPersonPerNight": 995,
              "singleSupplement": 295,
              "conservancyFees": 130
            },
            "mid": {
              "perPersonPerNight": 840,
              "singleSupplement": 200,
              "conservancyFees": 130
            },
            regular: {
              "perPersonPerNight": 765,
              "singleSupplement": 185,
              "conservancyFees": 130
            },
            "familySuite": {
              peak: 3980,
              "mid": 3360,
              regular: 3060
            }
          },
          "bushOlare": {
            peak: {
              "perPersonPerNight": 995,
              "singleSupplement": 295,
              "conservancyFees": 130
            },
            "mid": {
              "perPersonPerNight": 840,
              "singleSupplement": 200,
              "conservancyFees": 130
            },
            regular: {
              "perPersonPerNight": 765,
              "singleSupplement": 185,
              "conservancyFees": 130
            },
            "familySuite": {
              peak: 3980,
              "mid": 3360,
              regular: 3060
            }
          },
          "laikipia": {
            peak: {
              "perPersonPerNight": 860,
              "singleSupplement": 245,
              "conservancyFees": 187
            },
            "mid": {
              "perPersonPerNight": 650,
              "singleSupplement": 155,
              "conservancyFees": 187
            },
            regular: {
              "perPersonPerNight": 570,
              "singleSupplement": 140,
              "conservancyFees": 187
            },
            "familySuite": {
              peak: 3440,
              "mid": 2600,
              regular: 2280
            }
          },
          "walkingWilderness": {
            peak: 5825,
            "mid": 5050,
            regular: 4675
          },
          seasonDates: {
            peak: "01 July - 31 October 2025, 20 December 2025 - 02 January 2026",
            "mid": "03 January - 28 February 2025",
            regular: "01 March - 15 April 2025, 23 May - 30 June 2025, 01 November - 19 December 2025"
          },
          "closingDates": {
            "maraNorth": "06 April - 22 May 2025",
            "bushOlare": "06 April - 22 May 2025",
            "valleyNaboisho": "15 April - 22 May 2025",
            "laikipia": "15 April - 22 May 2025"
          }
        },
        specialOffers: [
          {
            name: "Conservancy Safari",
            description: "A combination of Laikipia + Mara or Valley Camp 6 for 5 offer. The free night is at Laikipia Camp.",
            "validDates": "Throughout 2025"
          },
          {
            name: "Valley Honeymoon Offer",
            description: "Brides 50% off (Jul-Sep 25% off) and a half-hour free massage.",
            "validDates": "Throughout 2025",
            "conditions": "Travel within 12 months of wedding"
          },
          {
            name: "Long Stay Discount",
            description: "10% rate reduction for 6 nights or more.",
            "validDates": "Throughout 2025"
          }
        ],
        childPolicy: {
          "ageLimit": "7 years minimum at Kicheche Bush & Valley. No age limit at Kicheche Mara & Laikipia.",
          "youngAdults": "12-17 years: 75% of adult rate. 50% if guests share a Triple or Quad tent.",
          "children": "3-11 years: 50% of the adult rate.",
          "infants": "Under 3: free of charge, however, camps are not very conducive to infants.",
          "conservancyFees": {
            "mara": "50% of adult fees for all children & teens 17 years and below.",
            "laikipia": "50% of adult fees for all children 11 years and below."
          }
        },
        "inclusives": [
          "Airstrip transfers",
          "Full board accommodation with meals", 
          "Alcoholic and non-alcoholic beverages (except premium brands)",
          "Picnics",
          "Shared game-viewing drives",
          "Laundry",
          "Night drives (Laikipia & Valley only)",
          "Escorted bush walks (all camps)",
          "Community Discovery trip (Kicheche Mara only)",
          "Canoeing and mountain biking (Kicheche Laikipia only)",
          "$5 per night Community Trust contribution"
        ],
        "activities": {
          "includedActivities": [
            "Game drives",
            "Bush walks",
            "Night drives (Laikipia & Valley)",
            "Community Discovery Trip (Mara)",
            "Canoeing (Laikipia)",
            "Mountain biking (Laikipia)"
          ],
          "optionalActivities": [
            {
              name: "Mara Elephant Project Visit",
              location: "Kicheche Mara North",
              description: "Overview of the Project's monitoring, human-wildlife conflict, and anti-poaching programmes",
              "cost": "Donation at guests' discretion",
              "duration": "2-3 hours",
              "minPax": 2
            },
            {
              name: "The Maa Trust",
              location: "Kicheche Olare Bush",
              description: "Interaction with Maasai women, watch and learn about their bead-work",
              "cost": "Complimentary"
            },
            {
              name: "Wild Camping",
              location: "All camps",
              description: "Overnight in a private mobile campsite with escorted game walks",
              "cost": "$200 per person per night",
              "minPax": 2,
              "minAge": 12
            },
            {
              name: "Hot Air Ballooning",
              location: "Mara camps"
            },
            {
              name: "Ngare Ndare Forest visit",
              location: "Kicheche Laikipia",
              description: "Full day trip with guided walk, canopy walk, and picnic lunch",
              "cost": {
                "2pax": "$250 per person",
                "3pax": "$170 per person",
                "4to6pax": "$120 per person"
              }
            },
            {
              name: "Mount Kenya Day excursion",
              location: "Kicheche Laikipia",
              "cost": "$250 per person (inclusive of park fees)",
              "minPax": 2
            },
            {
              name: "Anti-poaching Dogs display",
              location: "Kicheche Laikipia",
              "cost": "$70 per person",
              "maxPax": 6,
              "minAge": 12
            },
            {
              name: "Endangered species enclosure visit",
              location: "Kicheche Laikipia",
              description: "Meet the last remaining Northern white rhinos",
              "cost": "$70 per person"
            }
          ],
          "transfers": {
            "interCampTransfers": "Complimentary between Mara camps"
          }
        },
        termsAndConditions: {
          "provisionalBookings": "Held for 7 days and can be extended",
          "deposit": "20% non-refundable deposit required to confirm booking",
          "fullPayment": "Required 45 days prior to arrival",
          "cancellationPolicy": {
            "45daysOrMore": "Loss of deposit",
            "45to31days": "50% cancellation charges",
            "30daysOrLess": "100% cancellation charge"
          },
          "groupCancellationPolicy": {
            "90daysOrMore": "Loss of deposit",
            "90to31days": "50% cancellation charge",
            "30daysOrLess": "100% cancellation charge"
          }
        },
        "additionalNotes": [
          "Minimum stay of two nights at Mara camps only",
          "Single supplement valid for maximum of 2 tents",
          "Families with children under 7 are required to take a vehicle on exclusive use",
          "Photography vehicle available at Mara camps only",
          "Late departures (after midday) subject to supplement of US$150pp in peak season, US$100pp in mid and regular seasons",
          "Exclusive use of vehicle guaranteed for bookings of 4-6 guests"
        ]
      },
      {
        id: 76,
        name: "Kingfisher Nest",
        location: "Westlands, Nairobi",
        rating: 4.0,
        category: "Boutique Hotel",
        description: "Cozy boutique hotel in Nairobi's Westlands area offering personalized service.",
        amenities: ["Restaurant", "Wi-Fi", "Airport Transfers", "Business Services"],
        priceCategory: "Mid-range",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/23/79/62/caption.jpg?w=900&h=500&s=1"
      },
      {
        id: 77,
        name: "Kinondo Kwetu",
        location: "Diani Beach, Kenya",
        rating: 4.8,
        category: "Luxury Resort",
        description: "Exclusive luxury beach retreat offering privacy and personalized service.",
        amenities: ["Private Beach", "Horse Riding", "Water Sports", "Tennis Court"],
        priceCategory: "Ultra Luxury",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/48/58/9b/kinondo-kwetu.jpg?w=900&h=-1&s=1",
        featured: true
      },
      {
        id: 78,
        name: "Kisiwa House",
        location: "Stone Town, Zanzibar",
        rating: 4.5,
        category: "Boutique Hotel",
        description: "Elegant boutique hotel in a restored Swahili mansion in historic Stone Town.",
        amenities: ["Restaurant", "Rooftop Terrace", "Cultural Tours", "Airport Transfer"],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/0d/76/fd/kisiwa-house.jpg?w=900&h=-1&s=1"
      },
      {
        id: 79,
        name: "Kizingo Lamu",
        location: "Lamu, Kenya",
        rating: 4.6,
        category: "Eco Lodge",
        description: "Eco-friendly beach lodge on Lamu Island offering tranquility and sustainability.",
        amenities: ["Beach Access", "Water Sports", "Local Cuisine", "Cultural Experiences"],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/8a/82/89/kizingo.jpg?w=900&h=500&s=1"
      },
      {
        id: 80,
        name: "Kobe Suite and Resort",
        location: "East Africa",
        rating: 4.3,
        category: "Resort",
        description: "Modern resort offering comprehensive facilities and comfortable suites.",
        amenities: ["Swimming Pool", "Restaurant", "Spa", "Conference Facilities"],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/2d/a1/f3/kobe-suite-resort.jpg?w=600&h=400&s=1"
      },
      {
        id: 81,
        name: "Korona House",
        location: "Arusha, Tanzania",
        rating: 4.2,
        category: "Boutique Hotel",
        description: "Charming boutique hotel offering comfort and convenience in Arusha.",
        amenities: ["Restaurant", "Gardens", "Airport Transfer", "Safari Arrangements"],
        priceCategory: "Mid-range",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/f3/7f/ba/view-from-upstairs.jpg?w=900&h=500&s=1"
      },
      {
        id: 82,
        name: "KSL",
        location: "Kenya",
        rating: 3.9,
        category: "Hotel Chain",
        description: "Local hotel chain offering affordable accommodation across Kenya.",
        amenities: ["Restaurant", "Conference Facilities", "Wi-Fi", "Parking"],
        priceCategory: "Budget",
        imageUrl: "/api/placeholder/800/500"
      },
      {
        id: 83,
        name: "KUOOM GROUP",
        location: "East Africa",
        rating: 4.4,
        category: "Hotel Group",
        description: "Regional hotel group offering diverse properties across East Africa.",
        amenities: ["Varied by Property", "Quality Standards", "Local Experience"],
        priceCategory: "Mid-range",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/8d/6d/c8/kuoom-lodge.jpg?w=900&h=500&s=1"
      },
      {
        id: 84,
        name: "Kusini Beach Cottage",
        location: "Tanzania Coast",
        rating: 4.1,
        category: "Beach Cottage",
        description: "Cozy beach cottages offering authentic coastal experiences in Tanzania.",
        amenities: ["Beach Access", "Restaurant", "Water Activities", "Garden"],
        priceCategory: "Mid-range",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/a9/c4/3b/kusini-beach-cottages.jpg?w=800&h=500&s=1"
      },
      {
        id: 85,
        name: "Lake Bogoria Spa and Resort",
        location: "Bogoria, Kenya",
        rating: 4.2,
        category: "Spa Resort",
        description: "Natural hot springs resort near the flamingo-filled Lake Bogoria.",
        amenities: ["Natural Hot Springs", "Spa Treatments", "Swimming Pool", "Restaurant"],
        priceCategory: "Mid-range",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/2e/1d/2e/92/pool-view.jpg?w=900&h=500&s=1"
      },
      {
        id: 86,
        name: "Lake Naivasha Resort",
        location: "Naivasha, Kenya",
        rating: 4.3,
        category: "Lakeside Resort",
        description: "Scenic resort on the shores of Lake Naivasha offering water activities and relaxation.",
        amenities: ["Boat Rides", "Swimming Pool", "Restaurant", "Conference Facilities"],
        priceCategory: "Mid-range",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/5a/66/75/lake-naivasha-resort.jpg?w=900&h=-1&s=1"
      },
      {
        id: 87,
        name: "Lake Nakuru Lodge",
        location: "Nakuru, Kenya",
        rating: 4.2,
        category: "Safari Lodge",
        description: "Established lodge overlooking Lake Nakuru, famous for flamingos and rhinos.",
        amenities: ["Game Drives", "Swimming Pool", "Restaurant", "Bar"],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/bf/51/8f/lake-nakuru-lodge.jpg?w=900&h=500&s=1"
      },
      {
        id: 88,
        name: "Langi Langi Zanzibar",
        location: "Zanzibar, Tanzania",
        rating: 4.3,
        category: "Beach Hotel",
        description: "Beachfront hotel offering comfortable accommodation and water activities in Zanzibar.",
        amenities: ["Beach Access", "Restaurant", "Water Sports", "Excursions"],
        priceCategory: "Mid-range",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/02/e0/0a/b2/langilangi-beach-bungalows.jpg?w=600&h=400&s=1"
      },
      {
        id: 89,
        name: "Lantana Galu Beach",
        location: "Diani Beach, Kenya",
        rating: 4.6,
        category: "Beach Resort",
        description: "Luxury beach apartments and villas with modern amenities on Galu Beach.",
        amenities: ["Swimming Pool", "Beach Access", "Restaurant", "Water Sports"],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/96/3b/8e/main-swimming-pool-le.jpg?w=900&h=500&s=1"
      },
      {
        id: 90,
        name: "Laragai House",
        location: "Laikipia, Kenya",
        rating: 4.9,
        category: "Luxury Lodge",
        description: "Exclusive colonial-style house offering luxury safari experiences in Laikipia.",
        amenities: ["Game Drives", "Horse Riding", "Swimming Pool", "Gourmet Dining"],
        priceCategory: "Ultra Luxury",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/59/a8/f0/laragai-house.jpg?w=900&h=500&s=1",
        featured: true
      },
      {
        id: 91,
        name: "Leopard Beach Resort",
        location: "Diani Beach, Kenya",
        rating: 4.7,
        category: "Beach Resort",
        description: "Award-winning resort on Diani Beach offering extensive facilities and activities.",
        amenities: ["Spa", "Multiple Restaurants", "Water Sports", "Golf Course"],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/d3/4f/c5/leopard-beach-resort.jpg?w=900&h=500&s=1",
        featured: true
      },
      {
        id: 92,
        name: "Leregai House",
        location: "Lamu, Kenya",
        rating: 4.4,
        category: "Boutique Hotel",
        description: "Traditional Swahili house converted into a charming boutique hotel in Lamu.",
        amenities: ["Traditional Architecture", "Rooftop Terrace", "Cultural Experiences", "Beach Access"],
        priceCategory: "Premium",
        imageUrl: "/api/placeholder/800/500"
      },
      {
        id: 93,
        name: "Lion Hill Lodge",
        location: "Lake Nakuru, Kenya",
        rating: 4.3,
        category: "Safari Lodge",
        description: "Scenic lodge overlooking Lake Nakuru National Park with excellent wildlife viewing.",
        amenities: ["Game Drives", "Swimming Pool", "Restaurant", "Bar"],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/3b/d9/84/20191205-115555-largejpg.jpg?w=900&h=500&s=1"
      },
      {
        id: 94,
        name: "Lotos Inn & Suite",
        location: "Tanzania",
        rating: 4.1,
        category: "Hotel",
        description: "Comfortable hotel offering quality accommodation and friendly service.",
        amenities: ["Restaurant", "Airport Transfer", "Wi-Fi", "Business Services"],
        priceCategory: "Mid-range",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/ec/35/b8/park-view-studio-apartment.jpg?w=900&h=500&s=1"
      },
      {
        id: 95,
        name: "Loyk Mara Camp",
        location: "Maasai Mara, Kenya",
        rating: 4.5,
        category: "Tented Camp",
        description: "Authentic tented camp offering immersive safari experiences in the Maasai Mara.",
        amenities: ["Game Drives", "Bush Dining", "Cultural Visits", "Guided Walks"],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ef/a0/0d/swimming-pool.jpg?w=900&h=500&s=1"
      },
      {
        id: 96,
        name: "Lushoto",
        location: "Usambara Mountains, Tanzania",
        rating: 4.2,
        category: "Mountain Lodge",
        description: "Scenic mountain lodge in the beautiful Usambara Mountains of Tanzania.",
        amenities: ["Hiking Trails", "Mountain Views", "Restaurant", "Cultural Tours"],
        priceCategory: "Mid-range",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/f3/1d/82/photo2jpg.jpg?w=1400&h=500&s=1"
      },
      {
        id: 97,
        name: "Maanzoni Lodge",
        location: "Machakos, Kenya",
        rating: 4.3,
        category: "Lodge",
        description: "Expansive lodge offering conference facilities and leisure activities near Nairobi.",
        amenities: ["Conference Center", "Swimming Pool", "Adventure Activities", "Restaurant"],
        priceCategory: "Mid-range",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/65/8c/78/executive-room.jpg?w=900&h=500&s=1"
      },
      {
        id: 98,
        name: "Macushla",
        location: "Kenya Coast",
        rating: 4.0,
        category: "Beach House",
        description: "Private beach house offering exclusive stays on Kenya's beautiful coast.",
        amenities: ["Private Beach Access", "Full Staff", "Private Chef", "Water Activities"],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/38/80/2c/caption.jpg?w=900&h=500&s=1"
      },
      {
        id: 99,
        name: "Mada Collection",
        location: "Madagascar",
        rating: 4.6,
        category: "Hotel Collection",
        description: "Collection of unique properties offering authentic experiences across Madagascar.",
        amenities: ["Varied by Property", "Local Experiences", "Unique Locations"],
        priceCategory: "Premium",
        imageUrl: "/api/placeholder/800/500"
      },
      {
        id: 100,
        name: "Madina Palms",
        location: "Kenya Coast",
        rating: 4.5,
        category: "Beach Resort",
        description: "Elegant beach resort offering luxurious accommodation on Kenya's coast.",
        amenities: ["Swimming Pool", "Beach Access", "Restaurant", "Water Sports"],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/28/1d/dc/medina-palms.jpg?w=900&h=500&s=1"
      },
      // Adding more hotels to complete the list
      {
        id: 101,
        name: "Majlis Resort",
        location: "Lamu, Kenya",
        rating: 4.9,
        category: "Luxury Resort",
        description: "Exclusive luxury resort on Lamu island combining Swahili, Arabic and Indian influences.",
        amenities: ["Private Beach", "Water Sports", "Spa", "Gourmet Dining", "Wi-Fi", "Airport Transfers", "Kayaking"],
        priceCategory: "Ultra Luxury",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/09/c6/36/the-majlis-resort.jpg?w=900&h=500&s=1",
        featured: true,
        hasContractRates: true,
        contractRates: {
          resident: {
            "yearRound": {
              "superior": {
                "singleRoom": 24000,
                "doubleRoom": 39000,
                "tripleRoom": 43000
              },
              "deluxe": {
                "singleRoom": 27000,
                "doubleRoom": 49000,
                "tripleRoom": 54000
              },
              "juniorSuite": {
                "singleRoom": 54000,
                "doubleRoom": 68000,
                "tripleRoom": 75000
              },
              "royalSuite": {
                "doubleRoom": 135000
              },
              "mealBasis": "Half Board"
            },
            festive: {
              "superior": {
                "singleRoom": 43000,
                "doubleRoom": 56000,
                "tripleRoom": 67000
              },
              "deluxe": {
                "singleRoom": 52000,
                "doubleRoom": 70000,
                "tripleRoom": 83000
              },
              "juniorSuite": {
                "singleRoom": 99000,
                "doubleRoom": 110000,
                "tripleRoom": 200000
              },
              "royalSuite": {
                "doubleRoom": 180000
              },
              "mealBasis": "Full Board",
              minimumStay: 5
            }
          },
          nonResident: {
            "yearRound": {
              "superior": {
                "singleRoom": 230,
                "doubleRoom": 370,
                "tripleRoom": 450
              },
              "deluxe": {
                "singleRoom": 270,
                "doubleRoom": 470,
                "tripleRoom": 550
              },
              "juniorSuite": {
                "singleRoom": 670,
                "doubleRoom": 840,
                "tripleRoom": 1360
              },
              "royalSuite": {
                "doubleRoom": 1360
              },
              "mealBasis": "Half Board"
            },
            festive: {
              "superior": {
                "singleRoom": 380,
                "doubleRoom": 590,
                "tripleRoom": 680
              },
              "deluxe": {
                "singleRoom": 450,
                "doubleRoom": 740,
                "tripleRoom": 850
              },
              "juniorSuite": {
                "singleRoom": 1070,
                "doubleRoom": 1340,
                "tripleRoom": 1600
              },
              "royalSuite": {
                "doubleRoom": 1600
              },
              "mealBasis": "Full Board",
              minimumStay: 5
            }
          },
          childPolicy: {
            "0to3years": "Free of charge",
            "4to11years": {
              "sharingWithAdults": "50% of adult rate",
              "ownRoom": "75% of room rate (maximum 3 children)"
            },
            "singleAdultWithChild": "Single Room Rate + 50% of Adult rate (for the child)"
          },
          extras: {
            "fullBoardUpgrade": {
              resident: 5000,
              nonResident: 50
            }
          },
          termsAndConditions: {
            "deposit": "20% upon confirmation",
            "fullPayment": "30 days prior to arrival",
            "lastMinuteBooking": "Full payment upon confirmation",
            "cancellationPolicy": {
              "90to60days": "20% of total cost",
              "60to35days": "30% of total cost",
              "34to20days": "50% of total cost",
              "19daysToArrival": "100% of total cost",
              "noShow": "1 night's accommodation rate"
            }
          }
        },
        "activities": {
          "waterActivities": {
            "dhowExperiences": {
              "dhowSunset": 15000,
              "dhowSunrise": 16000,
              "dhowLessons": 8000,
              "miniDhowDinner": 28500,
              "sailingDayOut": 33000,
              "romanticDhowChill": 20000,
              "happyBirthdayDhow": 20000,
              "willYouMarryMe": 20000,
              "tripAroundLamu": 33000
            },
            "watersports": {
              "waterSkis": 7100,
              "monoSki": 7100,
              "wakeboard": 7100,
              "kneeBoard": 7100,
              "tubing": 7100,
              "banana": 7100,
              "donut": 7100,
              "windsurfing": 7100,
              "standUpPaddle": 2200,
              "kayaking": "Free for in-house guests",
              "sunriseKayakToMangrove": 2200
            },
            "swimmingLessons": {
              "babyClasses": 2500,
              "advancedClasses": 3000,
              "adultsClasses": 2200
            },
            "snorkellingTrips": {
              "mandaToto": 28500,
              "kinyika": 28500,
              "kiwayu": 66000
            },
            "fishing": {
              "deepSeaWithCabin": 132000,
              "deepSeaOpenDeck": 79200,
              "fishingOnChannel": 15500
            }
          },
          "landActivities": {
            "biking": {
              "fatBikesOnShelaBeach": 3050,
              "mountainBikesOnMandaIsland": 2550,
              "fromShelaToLamu": 3050,
              "guideAddOn": 1200
            },
            "guidedTours": {
              "tripToLamu": 7200,
              "tripToShela": 5500,
              "tripToShelaAndLamu": 11500,
              "tripToMatondoni": 19800,
              "tripToTakwaRuins": 10560,
              "tripToPateIsland": 66000
            },
            "yogaLessons": 4000,
            "jungleGym": "Free for in-house guests"
          },
          "transfers": {
            "majlisToLamu": 3000,
            "majlisToShela": 1500,
            "majlisToFloatingBar": 2200,
            "majlisToMokowe": 8000,
            "majlisToMandaBay": 15000,
            "majlisToLamuPort": 19800,
            "majlisToKipungani": 16500,
            "majlisToKiwayu": 39600,
            "majlisToAirport": 2650,
            "afterHoursSupplements": {
              "after7PM": 500,
              "after10PM": 1000
            }
          }
        },
        inclusions: [
          "Bottled mineral water in room (2 x 700ml per person per day)",
          "Return Manda Airport transfers by motor boats",
          "Kayaking",
          "Wi-Fi internet access in main areas"
        ]
      },
      {
        id: 102,
        name: "Manda Bay",
        location: "Lamu, Kenya",
        rating: 4.8,
        category: "Luxury Resort",
        description: "Exclusive beach retreat on Manda Island offering barefoot luxury and privacy.",
        amenities: [
          "Water Sports",
          "Fishing",
          "Private Beach",
          "Gourmet Dining",
          "Swimming Pool",
          "Games Room",
          "Yoga Room",
          "WiFi",
          "Laundry Service",
          "Kayaking",
          "Sailing",
          "Windsurfing",
          "SUP Boarding"
        ],
        priceCategory: "Ultra Luxury",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/d0/e8/51/caption.jpg?w=900&h=-1&s=1",
        featured: true,
        hasContractRates: true,
        contractRates: {
          "validDates": "January 5, 2024 to January 5, 2025",
          "contact": {
            "email": "bookings@mandabay.com",
            "phone": [
              "+254 (0) 712 579 999",
              "+254 (0) 735 579 999"
            ],
            "emergency": "+254 (0) 716 579 999",
            "website": "www.scckenya.com",
            "hours": "MON - FRI 8.30am - 5.00pm"
          },
          seasons: {
            "christmas": "21st December - 4th January",
            "restOfYear": "5th January - 20th December"
          },
          roomTypes: {
            "beachfront": {
              "count": 11,
              "rack": {
                "perAdultSharing": 424,
                "singleRoom": 540,
                "perChildSharing": 380
              },
              "contractRate20": {
                "perAdultSharing": 340,
                "singleRoom": 432,
                "perChildSharing": 304
              }
            },
            "palm": {
              "count": 5,
              "rack": {
                "perAdultSharing": 404,
                "singleRoom": 464,
                "perChildSharing": 288
              },
              "contractRate20": {
                "perAdultSharing": 324,
                "singleRoom": 372,
                "perChildSharing": 231
              }
            },
            "garden": {
              "count": 6,
              description: "Simple in style and designed for children to make family travel more affordable",
              "rack": {
                "perAdultSharing": 308,
                "singleRoom": 330,
                "perChildSharing": 220
              },
              "contractRate20": {
                "perAdultSharing": 247,
                "singleRoom": 264,
                "perChildSharing": 176
              }
            }
          },
          "supplements": {
            "christmas": {
              "rack": {
                "adult": 100,
                "child": 75
              },
              "contractRate20": {
                "adult": 100,
                "child": 75
              },
              "nonCommissionable": true
            },
            allInclusive: {
              "perAdultPerNight": 300,
              "perChildPerNight": 150,
              "nonCommissionable": true,
              inclusions: [
                "Lamu Boat Trip with Local Guide and Museum Entrance Fee",
                "Water Sports",
                "Sundowner Excursion",
                "Snorkelling",
                "House Wine, Spirits & Cocktails"
              ]
            }
          },
          "exclusiveUse": {
            minimumStay: "3 nights",
            "rack": {
              standard: 18150,
              "christmas": 24200,
              "maxGuests": 46,
              "additionalGuest": 308
            },
            "contractRate20": {
              standard: 14520,
              "christmas": 19360,
              "maxGuests": 46,
              "additionalGuest": 246
            }
          },
          "stayRequirements": {
            "minimum": "2 nights",
            "christmasAndPeak": "5 nights"
          },
          childPolicy: {
            "under2years": "Free",
            "2to12years": "Child rates apply"
          },
          inclusions: [
            "Accommodation",
            "All meals during your stay",
            "Desalinated drinking water",
            "Airstrip transfers from Manda airport",
            "Use of the swimming pool",
            "Use of Games Room activities",
            "Use of yoga room",
            "Kayaking, Sailing, Windsurfing, SUP boarding",
            "Laundry and WiFi"
          ],
          exclusions: [
            "All drinks from the bar, including bottled water",
            "Deep sea fishing",
            "Motorised activities",
            "Snorkelling and conservation fees",
            "Spa treatments",
            "Archaeological site visits",
            "Guide fees for Lamu and museum entrance fees",
            "Scenic flights and charters"
          ],
          extras: {
            "fishing": {
              "deepSeaHalfDay": {
                "hours": 6,
                "price": 650
              },
              "deepSeaFullDay": {
                "hours": 10,
                "price": 1000,
                "supplement": "Kes 5000 per day if away from home"
              },
              "deepSeaOvernight": {
                "hours": 24,
                "price": 2400
              },
              "inshoreFishing": {
                "pricePerHour": 120,
                "type": "fly/cast"
              },
              "bottomFishing": {
                "pricePerHour": 55
              }
            },
            "waterSports": {
              "waterSkiing": {
                "price": 60,
                "duration": "20 mins per session"
              },
              "bananaRide": {
                "price": 60,
                "duration": "20 mins per session"
              },
              "tubing": {
                "price": 60,
                "duration": "20 mins per session"
              },
              "sailingInstruction": {
                "pricePerHour": 30
              },
              "windsurfingInstruction": {
                "pricePerHour": 30
              },
              "snorkellingFees": {
                "pricePerPerson": 20
              }
            },
            "lamuExcursions": {
              "museumEntrance": {
                nonResident: 10,
                resident: "Kes 800"
              },
              "guideFee": {
                "pricePerGroup": 20
              },
              "dayTrip": {
                "price": 250,
                "destination": "Lamu & Shela"
              }
            },
            "boatTransfers": {
              "mandaBayToTurtleNests": 200,
              "mandaBayToStarfishBeach": 40,
              "mandaBayToLamuShela": 200,
              "mandaBayToKipungani": 300,
              "mandaBayToKiwayu": 600
            },
            "activities": {
              "turtleHatchingsFee": {
                "price": 20,
                "season": "April - August"
              },
              "spaTreatments": {
                "pricePerHour": "Approx. $80+",
                "note": "Prior arrangements required"
              },
              "dhowCruiseWithLunch": {
                "priceRange": "$200-350",
                "note": "Prior arrangement needed"
              }
            },
            "miscellaneous": {
              "lateDeparture": {
                "pricePerPerson": 65
              },
              "extraMeals": {
                "adult": 65,
                "child5to12yrs": 30
              },
              "guideCaptainAccommodation": 160
            }
          },
          "policies": {
            "booking": {
              "provisionalHold": "7 days",
              "confirmationRequirements": [
                "Deposit receipt",
                "Booking voucher from tour operator"
              ],
              "requiredInformation": [
                "Camp or lodge being booked",
                "Room type",
                "Date, time and method of arrival/departure",
                "Number of people and rooming requirements",
                "Names of ALL guests and ages",
                "Special dietary requirements or requests",
                "Proof of residency (if applicable)"
              ]
            },
            "payment": {
              "deposit": "20% non-refundable",
              "finalBalance": "Due 60 days prior to arrival",
              "taxes": "All costings inclusive of VAT and all taxes",
              "payableTo": "The Safari & Conservation Company Ltd"
            },
            cancellation: {
              "moreThan60Days": "Deposit and bank charges forfeited",
              "60to45Days": "50% of full value forfeited",
              "45to30Days": "75% of full value forfeited",
              "lessThan30Days": "100% of full value forfeited"
            },
            checkIn: {
              "time": "from 12pm"
            },
            checkOut: {
              "time": "10am"
            },
            "insurance": "Comprehensive travel and medical insurance required"
          }
        }
      },
      {
        id: 103,
        name: "Manya Luxury Camp",
        location: "Central Serengeti, Tanzania",
        rating: 4.7,
        category: "Tented Camp",
        description: "Luxury tented camp in the heart of the Serengeti offering exceptional wildlife viewing.",
        amenities: ["Game Drives", "Bush Dining", "Luxury Tents", "Guided Walks", "Laundry Service", "Sundowners"],
        priceCategory: "Ultra Luxury",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/86/7e/24/caption.jpg?w=1200&h=900&s=1",
        featured: true,
        hasContractRates: true,
        contractRates: {
          "validDates": "23 October 2024 to 5 January 2026",
          seasons: {
            high: "16 Dec 2024 - 28 Feb 2025, 1 Jun 2025 - 30 Jun 2025, 1 Sep 2025 - 31 Oct 2025",
            peak: "1 Jul 2025 - 31 Aug 2025",
            low: "1 Mar 2025 - 31 May 2025, 1 Nov 2024/2025 - 15 Dec 2024/2025"
          },
          "rates": {
            fullBoard: {
              high: {
                "rack": {
                  "perPersonSharing": 325,
                  single: 431,
                  "triplePerPerson": 278,
                  familyTent: 308,
                  "child": 185
                },
                "net20": {
                  "perPersonSharing": 260,
                  single: 345,
                  "triplePerPerson": 222,
                  familyTent: 246,
                  "child": 148
                },
                "net40STO": {
                  "perPersonSharing": 195,
                  single: 259,
                  "triplePerPerson": 167,
                  familyTent: 195,
                  "child": 111
                }
              },
              peak: {
                "rack": {
                  "perPersonSharing": 380,
                  single: 490,
                  "triplePerPerson": 340,
                  familyTent: 380,
                  "child": 220
                },
                "net20": {
                  "perPersonSharing": 304,
                  single: 392,
                  "triplePerPerson": 272,
                  familyTent: 304,
                  "child": 176
                },
                "net40STO": {
                  "perPersonSharing": 228,
                  single: 294,
                  "triplePerPerson": 204,
                  familyTent: 228,
                  "child": 132
                }
              },
              low: {
                "rack": {
                  "perPersonSharing": 267,
                  single: 372,
                  "triplePerPerson": 232,
                  familyTent: 267,
                  "child": 148
                },
                "net20": {
                  "perPersonSharing": 213,
                  single: 298,
                  "triplePerPerson": 186,
                  familyTent: 208,
                  "child": 118
                },
                "net40STO": {
                  "perPersonSharing": 160,
                  single: 224,
                  "triplePerPerson": 140,
                  familyTent: 156,
                  "child": 89
                }
              }
            }
          },
          "facilities": {
            roomTypes: {
              "totalTents": 6,
              "standardTents": "King size bed or 2 single beds, accommodates 2 adults or 1 adult & 1 child",
              familyTent: "Interconnecting, accommodates up to 6 adults, can be sold as 2 separate tents"
            },
            "restrictions": {
              "maxSingleTents": 2,
              "maxTripleOccupancy": 2
            }
          },
          extras: {
            "bushBreakfast": {
              "price": 50,
              "minPax": 2
            },
            "bushLunch": {
              "price": 25,
              "minPax": 2
            },
            "walkingSafari": {
              "price": 60,
              "minPax": 2
            },
            "sundowner": {
              "price": 50,
              "minPax": 2
            },
            "drinksSupplement": {
              "price": 40,
              "perPerson": true
            },
            "gamePackageSupplement": {
              "minStay": "2 nights",
              "exclusiveUse": 480,
              "perPersonSharing": {
                "4pax": 120,
                "3pax": 160,
                "2pax": 240
              }
            }
          },
          "parkFees": {
            "centralSerengeti": {
              high: {
                "adult16Plus": 83,
                "children5to15": 24,
                "children4AndUnder": "Free"
              },
              low: {
                "adult16Plus": 71,
                "children5to15": 24,
                "children4AndUnder": "Free"
              }
            },
            "campingAndConcessionFees": {
              high: {
                "adult16Plus": 71,
                "children5to15": 12,
                "children4AndUnder": "Free"
              },
              low: {
                "adult16Plus": 59,
                "children5to15": 12,
                "children4AndUnder": "Free"
              }
            },
            "TDL": 1.5
          },
          inclusions: [
            "Full board accommodation (All three meals)",
            "Soft drinks, teas, coffee",
            "Laundry service"
          ],
          exclusions: [
            "Alcoholic drinks, Premium Brand Spirits, wines, & champagne",
            "Additional lunch (picnic or in-house)",
            "Transfers from/To the nearest airstrips",
            "Flights and airport taxes",
            "Medical evacuation Cover",
            "Tourism Development Levy (TDL), camping fees & park Fees",
            "Gratitude, items of personal nature, and all extras listed"
          ],
          "policies": {
            "child": {
              "0to5Years": "Free of charge when sharing with 1 or 2 adults",
              "6to16Years": "Child rate applies when sharing with 1 or 2 adults",
              "ownRoom": "1st child - Adult rate, 2nd & 3rd - Child rate"
            },
            "guide": {
              "localGuide": "20,000 TSH payable at camp (includes meals)",
              "parkFees": "Charges as applicable based on nationality and destination"
            },
            "booking": {
              "provisionalHold": "14 days",
              "deposit": "20% non-refundable deposit required for confirmation",
              "finalPayment": "Due 45 days before arrival",
              "documentation": "Provided after full payment proof received"
            },
            cancellation: {
              "moreThan45Days": "20% deposit forfeited",
              "45to30Days": "50% of full value forfeited",
              "lessThan30Days": "100% of value forfeited",
              "dateChanges": "2% administration fee",
              "reductions": "Same cancellation fees apply for reductions in guests, rooms, or nights",
              "shortenedStay": "No refund given"
            }
          },
          "payment": {
            "bankDetails": {
              "accountName": "Fantacy Adventures Limited (USD)",
              "accountNumber": "014105012656",
              "bank": "NBC",
              "swiftCode": "NLCBTZTX",
              "bankAddress": "Arusha Branch, P.O. Box 3004, Arusha, Tanzania"
            },
            "reservationContact": {
              "email": "reservation@manyaluxurycamps.com",
              "website": "www.manyaluxurycamps.com",
              "phone": "+255 696 436 710/ 436 712"
            }
          }
        }
      },
      {
        id: 104,
        name: "Manyara Best View Lodge",
        location: "Lake Manyara, Tanzania",
        rating: 4.3,
        category: "Lodge",
        description: "Scenic lodge offering spectacular views of Lake Manyara and surrounding landscape.",
        amenities: ["Game Drives", "Swimming Pool", "Restaurant", "Bar", "Private Butler Service"],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/be/0b/68/manyara-best-view-lodge.jpg?w=900&h=-1&s=1",
        hasContractRates: true,
        contractRates: {
          seasons: {
            low: "March, April, May",
            high: "Rest of year (excluding peak)",
            peak: "December, July, August"
          },
          roomTypes: {
            "silver": {
              "features": ["View of the escarpment and Lake Manyara", "Private Butler Service"],
              "rack": {
                low: { single: 264, double: 300, "triple": 360, "quadruple": 420 },
                high: { single: 300, double: 360, "triple": 540, "quadruple": 720 },
                peak: { single: 396, double: 456, "triple": 696, "quadruple": 876 }
              },
              "sto": {
                low: { single: 186, double: 210, "triple": 234, "quadruple": 300 },
                high: { single: 240, double: 300, "triple": 450, "quadruple": 540 },
                peak: { single: 300, double: 360, "triple": 480, "quadruple": 600 }
              }
            },
            "golden": {
              "features": ["Better View", "Private Butler Service", "Outside shower", "More luxurious room"],
              "rack": {
                low: { single: 360, double: 420, "triple": 540, "quadruple": 660 },
                high: { single: 540, double: 720, "triple": 1080, "quadruple": 1440 },
                peak: { single: 684, double: 1044, "triple": 1314, "quadruple": 1752 }
              },
              "sto": {
                low: { single: 240, double: 270, "triple": 300, "quadruple": 360 },
                high: { single: 300, double: 420, "triple": 480, "quadruple": 600 },
                peak: { single: 450, double: 630, "triple": 720, "quadruple": 840 }
              }
            },
            "diamond": {
              "features": ["Better View", "Private Butler Service", "Infinity plunge pool on the veranda"],
              "rack": {
                low: { single: 480, double: 540, "triple": 720, "quadruple": 840 },
                high: { single: 720, double: 1080, "triple": 1440, "quadruple": 1800 },
                peak: { single: 912, double: 1392, "triple": 1752, "quadruple": 2100 }
              },
              "sto": {
                low: { single: 300, double: 360, "triple": 420, "quadruple": 480 },
                high: { single: 600, double: 840, "triple": 960, "quadruple": 1080 },
                peak: { single: 720, double: 960, "triple": 1200, "quadruple": 1440 }
              }
            },
            "platinum": {
              "features": ["Better View", "Private Butler Service", "Outside shower", "Private bathtub on a platform in the middle of nature"],
              "rack": {
                low: { single: 480, double: 540, "triple": 600, "quadruple": 720 },
                high: { single: 810, double: 1080, "triple": 1350, "quadruple": 1800 },
                peak: { single: 1080, double: 1440, "triple": 1800, "quadruple": 2100 }
              },
              "sto": {
                low: { single: 360, double: 420, "triple": 480, "quadruple": 600 },
                high: { single: 630, double: 810, "triple": 990, "quadruple": 1320 },
                peak: { single: 840, double: 1080, "triple": 1320, "quadruple": 1560 }
              }
            }
          },
          "policies": {
            "children": {
              under5: "Free of charge (0% of adult rate)",
              "5to12": "50% of adult rate",
              "13andAbove": "100% of adult rate"
            },
            cancellation: {
              "45to30days": "0% cancellation fee",
              "29to15days": "50% cancellation fee",
              "lessThan14days": "75% cancellation fee"
            },
            "provisionalBooking": "Held for 10 days subject to availability",
            "payment": {
              "bankName": "NATIONAL MICROFINANCE BANK",
              "accountName": "HAKUNA MATATA BOOKINGS LIMITED",
              "accountNumber": "442810008484",
              currency: "USD",
              "swiftCode": "NMIBTZTZ"
            }
          },
          "terms": {
            currency: "USD",
            "taxInclusive": true,
            "nonCommissionable": true,
            "perRoomPerNight": true,
            "confidentiality": "Rates not to be posted, published, or made available to any third party"
          }
        }
      },
      {
        id: 105,
        name: "Mara Chui Resort",
        location: "Maasai Mara, Kenya",
        rating: 4.5,
        category: "Safari Resort",
        description: "Intimate safari resort offering personalized wildlife experiences in the Maasai Mara.",
        amenities: ["Game Drives", "Bush Dining", "Cultural Visits", "Guided Walks", "Nature Walks", "Sundowners"],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/00/b7/2c/deluxe-double-room.jpg?w=900&h=500&s=1",
        hasContractRates: true,
        contractRates: {
          "maasaiMara": {
            nonResident: {
              "standardRooms": {
                peak: { single: 165, double: 220, "triple": 300 },
                high: { single: 100, double: 150, "triple": 210 },
                low: { single: 90, double: 130, "triple": 180 }
              },
              "deluxeRooms": {
                peak: { single: 200, double: 250 },
                high: { single: 150, double: 210 },
                low: { single: 100, double: 160 }
              }
            },
            resident: {
              "standardRooms": {
                peak: { single: 16500, double: 22000, "triple": 30000 },
                high: { single: 9000, double: 14000, "triple": 19500 },
                low: { single: 8000, double: 13000, "triple": 18000 }
              },
              "deluxeRooms": {
                peak: { single: 20000, double: 25000 },
                high: { single: 13000, double: 18000 },
                low: { single: 8000, double: 14000 }
              }
            }
          },
          extras: {
            "picnicLunch": 20,
            "extraLunchDinner": 25,
            "natureWalk": 25,
            "bushBreakfastDinner": 30,
            "halfBoardDeduction": 5,
            "sundowner": 30,
            "birthdayCake": 25
          },
          "policies": {
            childPolicy: {
              under3: "Free",
              "4to12Sharing": "50% of half twin rate",
              "childWithOneAdult": "Single room rate + child rate",
              "ownRoom": "100% of contract rate"
            },
            seasonDates: {
              peak: ["July 1 - September 30", "December 22 - January 2"],
              high: ["January 3 - March 31", "June 1 - June 30", "October 1 - October 31"],
              low: ["April 1 - May 31", "November 1 - December 21"]
            },
            cancellation: {
              "45to15days": "25% charge",
              "14to3days": "50% charge",
              "2daysOrLess": "100% charge"
            },
            "payment": {
              "deposit": "50% upon confirmation",
              "fullPayment": "30 days prior to check-in"
            },
            "checkInOut": {
              checkIn: "11:00",
              checkOut: "10:00"
            },
            "singleRoomPolicy": "Maximum 3 single rooms at single rate, then double rate applies",
            "groupPolicy": "One person free for every 15 paying clients"
          }
        }
      },
      {
        id: 106,
        name: "Mara Empiris Safari Camp",
        location: "Maasai Mara, Kenya",
        rating: 4.6,
        category: "Safari Lodge",
        description: "Luxurious safari lodge offering exceptional wildlife viewing and comfort in the heart of Maasai Mara.",
        amenities: ["Game Drives", "Swimming Pool", "Restaurant", "Spa Services"],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/7b/06/be/mara-empiris-tented-camp.jpg?w=900&h=500&s=1",
        hasContractRates: true,
        contractRates: {
          "maasaiMara": {
            nonResident: {
              "roomRates": {
                peak: { single: 160, double: 220, "triple": 300 },
                high: { single: 130, double: 180, "triple": 240 },
                low: { single: 100, double: 160, "triple": 210 }
              }
            },
            resident: {
              "roomRates": {
                peak: { single: 12000, double: 18000, "triple": 27000 },
                high: { single: 10000, double: 16000, "triple": 24000 },
                low: { single: 8000, double: 14000, "triple": 21000 }
              }
            }
          },
          extras: {
            "christmasSupplement": {
              nonResident: 20,
              resident: 1500
            }
          },
          "policies": {
            childPolicy: {
              "under4": "Free",
              "5to12Sharing": "50% of adult rate",
              "5to12OwnRoom": "75% of adult rate"
            },
            seasonDates: {
              peak: ["July 1 - August 31", "December 23 - January 1"],
              high: ["September 1 - October 15"],
              low: ["January 1 - June 30", "October 16 - December 22"]
            },
            "payment": {
              "deposit": "50% upon confirmation",
              "fullPayment": "14 days prior to arrival",
              "creditCardFee": "4%"
            },
            cancellation: {
              "48hoursOrLess": "90% charge",
              "4to14days": "60% charge",
              "15to30days": "30% charge",
              "31daysAndAbove": "No charge"
            }
          }
        }
      },
      {
        id: 107,
        name: "Mara Maisha Camp",
        location: "Maasai Mara, Kenya",
        rating: 4.4,
        category: "Safari Camp",
        description: "Authentic safari camp focusing on sustainable tourism and community involvement, offering comfortable accommodations and exceptional wildlife viewing experiences.",
        amenities: ["Game Drives", "Cultural Experiences", "Bush Dining", "Guided Walks", "Family Accommodations", "Honeymoon Packages"],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/b7/5e/d4/double-mara-maisha-camp.jpg?w=900&h=500&s=1",
        featured: false,
        hasContractRates: true,
        contractRates: {
          "masaiMara": {
            nonResident: {
              lowSeason: {
                "dates": "1 Apr 2025 to 15 Jun 2025",
                "club": {
                  single: 275,
                  double: 450,
                  "triple": 620,
                  "child": 115
                },
                "deluxe": {
                  single: 200,
                  double: 300,
                  "triple": 415,
                  "child": 75
                }
              },
              "shoulder1": {
                "dates": "5 Jan 2025 to 31 Mar 2025",
                "club": {
                  single: 350,
                  double: 600,
                  "triple": 825,
                  "child": 150
                },
                "deluxe": {
                  single: 230,
                  double: 360,
                  "triple": 495,
                  "child": 90
                }
              },
              "shoulder2": {
                "dates": [
                  "16 Jun 2025 to 30 Jun 2025",
                  "16 Sept 2025 to 31 Oct 2025"
                ],
                "club": {
                  single: 350,
                  double: 600,
                  "triple": 825,
                  "child": 150
                },
                "deluxe": {
                  single: 250,
                  double: 400,
                  "triple": 550,
                  "child": 100
                }
              },
              "shoulder3": {
                "dates": "1 Nov 2025 to 22 Dec 2025",
                "club": {
                  single: 300,
                  double: 500,
                  "triple": 690,
                  "child": 125
                },
                "deluxe": {
                  single: 200,
                  double: 300,
                  "triple": 415,
                  "child": 75
                }
              },
              "peak1": {
                "dates": "1 Jul 2025 to 15 Sept 2025",
                "club": {
                  single: 525,
                  double: 850,
                  "triple": 1170,
                  "child": 215
                },
                "deluxe": {
                  single: 425,
                  double: 650,
                  "triple": 895,
                  "child": 165
                }
              },
              "peak2": {
                "dates": "23 Dec 2025 to 4 Jan 2026",
                "club": {
                  single: 500,
                  double: 800,
                  "triple": 1100,
                  "child": 200
                },
                "deluxe": {
                  single: 425,
                  double: 650,
                  "triple": 895,
                  "child": 165
                }
              },
              "easter": {
                "dates": "18 Apr 2025 to 21 Apr 2025",
                "club": {
                  single: 350,
                  double: 600,
                  "triple": 825,
                  "child": 150
                },
                "deluxe": {
                  single: 240,
                  double: 360,
                  "triple": 500,
                  "child": 90
                }
              }
            },
            extras: {
              familyTent: {
                "adultSupplement": 50,
                "childSupplement": 25,
                "maxCapacity": "maximum of 5 pax; 2 Adults and 3 children (Or 4-5 Adults)"
              },
              "clubDeluxe": {
                "adultSupplement": 60,
                "childSupplement": 30
              },
              "honeymooners": {
                "cost": 100,
                "includes": "room decoration, house wine and Ala carte dinner"
              },
              "holidaySurcharge": {
                "christmas": {
                  "dates": ["24 Dec 2025", "25 Dec 2025", "26 Dec 2025", "31 Dec 2025", "1 Jan 2026"],
                  "amount": 40
                }
              },
              "extraLunch": 40,
              "lunchbox": 35,
              tourLeader: 120,
              halfBoardReduction: {
                nonResident: 5,
                resident: 500
              }
            }
          }
        },
        "policies": {
          childPolicy: {
            "under4": "Complimentary when sharing a room",
            "age5to12Sharing": "50% of the adult rate when sharing a room",
            "ownRoom": "75% of adult rate if own room is required",
            "adultSharingWithChild": "Child 50% of adult rate and adult half of the double room rate",
            "adultWithTwoChildren": "Each child 50% of adult rate and adult half the double room rates"
          },
          "bookingConditions": {
            "deposits": {
              "overseas": "50% non-refundable deposit required 35 days prior to arrival",
              "local": "50% non-refundable deposit required 30 days prior to arrival",
              "julyAugust": "50% non-refundable deposit with balance payable 30 days prior to arrival"
            },
            "reconfirmation": "Bookings should be re-confirmed not later than 35 days prior to the date of arrival",
            "overdueAccounts": "5% interest per month from due date"
          },
          cancellation: {
            "60to31days": "15% of the quotation",
            "30to16days": "30% of the quotation",
            "15to1dayOrNoShow": "100% of the quotation"
          },
          "payment": "Bookings can only be confirmed upon full payment prior to arrival"
        },
        "generalTerms": {
          "rateDetails": "All rates quoted are on a per room basis unless otherwise stated, and are inclusive of the relevant taxes and levies",
          "depositRequirement": "A non-refundable deposit equivalent to the first night's rate will be required to secure booking",
          "taxChanges": "Where rates are affected by changes in Government taxes, we reserve the right to pass on such increases",
          "meals": "No credit can be given for meals not taken for pre-booked accommodation plans which include meals",
          "personalCheques": "We regret that we cannot accept personal cheques unless cleared in advance prior to arrival",
          "rateChange": "The rates are subject to change due to fluctuation in market conditions"
        },
        validity: "2025 non-resident rates - valid from 5th Jan 2025 to 4th Jan 2026"
      },
      {
        id: 108,
        name: "Mara River Camp",
        location: "North Conservancy, Maasai Mara, Kenya",
        rating: 4.5,
        category: "Tented Camp",
        description: "Luxury riverside tented camp with 19 lavish superior tents, 3 deluxe tents, and a log cabin, positioned with scenic forestry views on the banks of the majestic Mara River, offering convenient access to both Musiara and Ololoo gates.",
        amenities: ["Game Drives", "River Views", "Bush Dining", "Swimming Pool", "Free WiFi", "Nature Walks", "Bush Breakfast", "Bush Lunch", "Sundowners", "Maasai Village Visits", "Balloon Safaris (nearby)", "Laundry Services"],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/b9/dd/2a/getlstd-property-photo.jpg?w=600&h=400&s=1",
        featured: false,
        hasContractRates: true,
        contractRates: {
          "masaiMara": {
            nonResident: {
              lowSeason: {
                "dates": "1 April - 30 June",
                fullBoard: {
                  "doubleSuperior": 140,
                  "singleSuperior": 210,
                  "doubleDeluxe": 160,
                  "extraBed": 80,
                  "logCabin4Pax": 850
                },
                "groundPackage": {
                  "doubleSuperior": 210,
                  "singleSuperior": 300,
                  "doubleDeluxe": 230,
                  "extraBed": 130,
                  "logCabin4Pax": 1210
                }
              },
              shoulderSeason: {
                "dates": "2 Jan - 31 March & 1 Nov - 22 Dec",
                fullBoard: {
                  "doubleSuperior": 200,
                  "singleSuperior": 280,
                  "doubleDeluxe": 230,
                  "extraBed": 150,
                  "logCabin4Pax": 1130
                },
                "groundPackage": {
                  "doubleSuperior": 270,
                  "singleSuperior": 370,
                  "doubleDeluxe": 310,
                  "extraBed": 200,
                  "logCabin4Pax": 1490
                }
              },
              peakSeason: {
                "dates": "1 July - 31 October & 23 Dec - 1 Jan",
                fullBoard: {
                  "doubleSuperior": 325,
                  "singleSuperior": 485,
                  "doubleDeluxe": 375,
                  "extraBed": 160,
                  "logCabin4Pax": 1750
                },
                "groundPackage": {
                  "doubleSuperior": 395,
                  "singleSuperior": 555,
                  "doubleDeluxe": 445,
                  "extraBed": 230,
                  "logCabin4Pax": 2030
                }
              }
            },
            resident: {
              lowSeason: {
                "dates": "1 April - 30 June",
                fullBoard: {
                  "doubleSuperior": 14000,
                  "singleSuperior": 21000,
                  "doubleDeluxe": 16000,
                  "extraBed": 10000,
                  "logCabin4Pax": 75000
                },
                "groundPackage": {
                  "doubleSuperior": 21000,
                  "singleSuperior": 28000,
                  "doubleDeluxe": 23000,
                  "extraBed": 13750,
                  "logCabin4Pax": 99000
                }
              },
              shoulderSeason: {
                "dates": "2 Jan - 31 March & 1 Nov - 22 Dec",
                fullBoard: {
                  "doubleSuperior": 20000,
                  "singleSuperior": 28000,
                  "doubleDeluxe": 24500,
                  "extraBed": 17000,
                  "logCabin4Pax": 103000
                },
                "groundPackage": {
                  "doubleSuperior": 27000,
                  "singleSuperior": 35000,
                  "doubleDeluxe": 31000,
                  "extraBed": 20750,
                  "logCabin4Pax": 127000
                }
              },
              peakSeason: {
                "dates": "1 July - 31 October & 23 Dec - 1 Jan",
                fullBoard: {
                  "doubleSuperior": 28000,
                  "singleSuperior": 43000,
                  "doubleDeluxe": 32000,
                  "extraBed": 17500,
                  "logCabin4Pax": 150000
                },
                "groundPackage": {
                  "doubleSuperior": 35000,
                  "singleSuperior": 50000,
                  "doubleDeluxe": 39000,
                  "extraBed": 24000,
                  "logCabin4Pax": 178000
                }
              }
            },
            childRates: {
              "age5to12SharingWithAdult": "50% of Adult Rate",
              "age5to12InOwnTent": "75% of Adult Rate"
            },
            extras: {
              nonResident: {
                "sundowners": {
                  "cost": 60,
                  "minimumPax": 8
                }
              },
              resident: {
                "sundowners": {
                  "cost": 6000,
                  "minimumPax": 8
                }
              },
              "bushBreakfast": "Available at extra cost",
              "bushLunch": "Available at extra cost",
              "masaiVillageVisits": "Available at extra cost",
              "balloonSafaris": "Available nearby at extra cost",
              "laundryServices": "Available at extra cost",
              "flyingPackage": "Available upon request (includes 2 nights full board accommodation with shared game drives, return airfare Wilson-Mara-Wilson and airstrip transfers in Mara)"
            }
          }
        },
        "accommodation": {
          description: "The camp has 19 lavish superior tents, 3 lavish deluxe tents, and 1 two-bedroom log cabin with sitting room and private decking overlooking the majestic Mara River.",
          location: "The tents are well positioned with scenic forestry river facing on the banks of majestic Mara River. The camp is located in North Conservancy conveniently accessing two main gates - Musiara Gate which leads into the National Game Reserve and Ololoo Gate entering the Mara Triangle."
        },
        "packages": {
          fullBoard: "Includes bed, breakfast, lunch & dinner",
          "groundPackage": "Includes full board accommodation & 2 game drives per day or full day with packed lunch",
          "flyingPackage": "Available upon request"
        },
        "notes": {
          "airstrip": "Nearest airstrip to the camp is Kichwa Tembo or Musiara",
          "parkFees": "Gate park fees not included",
          "ratesValidity": "2025"
        },
        "contact": {
          "reservations": {
            "peterMokua": "+254 722 970 818",
            "aliceMuga": "+254 722 921 454"
          },
          "address": "P.O. Box 43825 - 80100, Nairobi, Kenya",
          "website": "www.mararivercamp.com / www.mararivercamp.co.ke",
          "instagram": "mararivercamp"
        }
      },
      {
        id: 109,
        name: "Marula House on the Beach",
        location: "Galu - Diani Beach, Kenya South Coast",
        rating: 4.3,
        category: "Beach House",
        description: "Eco-friendly luxury holiday homes situated on a stunning stretch of palm-fringed white beach, offering open spaces, tranquility, and luxury in a mix of modern and African design.",
        amenities: ["Private Beach Access", "Swimming Pool", "Free WiFi", "Air Conditioning", "Netflix/YouTube", "Housekeeping Service", "Private Chef Available", "Plunge Pool", "Transfer Services"],
        priceCategory: "Premium",
        imageUrl: "/api/placeholder/800/500",
        featured: false,
        hasContractRates: true,
        contractRates: {
          "dianiBeach": {
            "mainHouse": {
              "standardSeason": {
                "fourBedroom": {
                  resident: 90000,
                  nonResident: 800
                },
                threeBedroom: {
                  resident: 75000,
                  nonResident: 650
                }
              },
              peakSeason: {
                "dates": "15 Dec - 5 Jan",
                "fourBedroom": {
                  resident: 120000,
                  nonResident: 1100
                },
                threeBedroom: {
                  resident: 100000,
                  nonResident: 900
                }
              },
              "occupancy": {
                "fourBedroom": "8 Adults + 6 Children Under 12yrs",
                threeBedroom: "6 Adults + 2 Children Under 12yrs"
              },
              "rooms": "4 En-suite Rooms: 2 Kings, 1 Twin, 1 Family Room (1 King + 4 singles)"
            },
            "beachCottage": {
              "standardSeason": {
                twoBedroom: {
                  resident: 40000,
                  nonResident: 350
                }
              },
              peakSeason: {
                "dates": "15 Dec - 5 Jan",
                twoBedroom: {
                  resident: 55000,
                  nonResident: 500
                }
              },
              "occupancy": {
                twoBedroom: "4 Adults + 1 Child Under 12yrs"
              },
              "rooms": "2 En-suite Rooms: 2 Kings"
            },
            extras: {
              "privateChef": 3000,
              "transfers": {
                "mombasaAirport": 7000,
                "ukundaAirport": 1800
              },
              "laundryServices": 2000,
              "longStayDiscount": "10% for 7+ nights direct bookings"
            }
          }
        },
        "policies": {
          checkIn: "from 1 PM",
          checkOut: "11 AM",
          minimumStay: "2 nights",
          "mealPlan": "Breakfast included, self-catering for lunch & dinner",
          "payment": {
            "deposit": "50% advance payment to guarantee booking",
            "balance": "Required 30 days before check-in"
          },
          "residencyRule": "East African Resident rates apply if at least one member of the group is a resident (proof may be required)",
          "houseRules": {
            "events": "No events or parties allowed",
            "noise": "No loud music or noise after 10 PM",
            "smoking": "No smoking inside the house, use ashtrays on terrace",
            "pets": "Not permitted unless authorized in advance",
            "damages": "Guests responsible for any breakages/damages"
          }
        },
        "activities": {
          "nearbyAttractions": ["Pilli Pipa Dhow tour to Marine National Park", "Kongo River sunset", "Shimba Hills", "Deep Sea Fishing", "Diving"],
          "wellness": ["Private massage services", "Yoga sessions"],
          "dining": ["Nomad at the Sands", "Sails", "The Salty Squid", "Ali Barbour's Cave"]
        },
        // location: {
        //   description: "Located at one of the quietest parts of Diani/Galu Beach with no direct neighbors. Very private and secluded, yet within walking distance to resorts and only about 10 minutes by car from downtown Diani."
        // },
        validity: "Rates valid until 31st December 2024"
      },
      {
        id: 110,
        name: "Maru Maru Hotel",
        location: "Zanzibar, Tanzania",
        rating: 4.4,
        category: "Beach Resort",
        description: "Beachfront resort offering relaxation with rooftop swimming pool and fitness center in Zanzibar.",
        amenities: ["Swimming Pool", "Wi-Fi", "Restaurant", "Fitness Centre", "Airport Transfers", "Recreational Area"],
        priceCategory: "Premium",
        imageUrl: "/api/placeholder/800/500",
        featured: false,
        hasContractRates: true,
        contractRates: {
          zanzibar: {
            rates: {
              highSeason: {
                "dates": ["5 Jan - 28 Feb 2025", "15 Jun - 21 Dec 2025"],
                "queenRoomSingle": { "rack": 140, "sto": 110 },
                "queenRoomDouble": { "rack": 160, "sto": 135 },
                "twinRoomDouble": { "rack": 180, "sto": 140 },
                "kingRoomDouble": { "rack": 220, "sto": 145 },
                "familyRoom": { "rack": 300, "sto": 250 }
              },
              lowSeason: {
                "dates": ["1 Mar - 14 Jun 2025"],
                "queenRoomSingle": { "rack": 110, "sto": 90 },
                "queenRoomDouble": { "rack": 130, "sto": 110 },
                "twinRoomDouble": { "rack": 140, "sto": 115 },
                "kingRoomDouble": { "rack": 150, "sto": 120 },
                "familyRoom": { "rack": 250, "sto": 200 }
              },
              peakSeason: {
                "dates": ["22 Dec - 31 Dec 2025", "1 Jan - 4 Jan 2026"],
                "queenRoomSingle": { "rack": 250, "sto": 180 },
                "queenRoomDouble": { "rack": 250, "sto": 180 },
                "twinRoomDouble": { "rack": 260, "sto": 200 },
                "kingRoomDouble": { "rack": 280, "sto": 220 },
                "familyRoom": { "rack": 500, "sto": 350 }
              }
            },
            extras: {
              "extraPerson": { highSeason: 30, lowSeason: 30, peakSeason: 30 },
              "newYearGalaDinner": { "rack": 70, "sto": 50 },
              "christmasDinner": { "rack": 70, "sto": 50 },
              "mealRate": 25,
              "roomOnlyDiscount": 10,
              "airportTransfer": 25,
              "ferryPortTransfer": 10,
              "infrastructureFee": 4
            },
            policies: {
              childPolicy: {
                "under4": "Free when sharing bed",
                "age5to11": "$30 with extra bed"
              },
              checkIn: "14:00",
              checkOut: "11:00",
              earlyCheckIn: "Free from 7:00 AM (subject to availability)",
              latecheckOut: {
                "until18:00": "50% of room rate",
                "after18:00": "100% of room rate"
              },
              cancellation: {
                highSeason: "48 hours prior or 1 night charge",
                lowSeason: "48 hours prior or 1 night charge", 
                peakSeason: "48 hours prior or full stay charge"
              },
              noShow: {
                highSeason: "2 nights charged",
                lowSeason: "1 night charged",
                peakSeason: "Full stay charged"
              }
            }
          }
        }
      },
      {
        id: 111,
        name: "Melia Collections",
        location: "Multiple Locations, East Africa",
        rating: 4.7,
        category: "Luxury Hotels",
        description: "International luxury hotel chain offering premium accommodations across East Africa.",
        amenities: ["Swimming Pool", "Multiple Restaurants", "Spa", "Business Services"],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/ac/0b/d8/caption.jpg?w=300&h=300&s=1",
        featured: true
      },
      {
        id: 112,
        name: "Meru View Lodge",
        location: "Meru, Kenya",
        rating: 4.2,
        category: "Safari Lodge",
        description: "Comfortable lodge offering scenic views and safari experiences in Meru National Park.",
        amenities: ["Game Drives", "Swimming Pool", "Restaurant", "Gardens"],
        priceCategory: "Mid-range",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/1e/22/9f/meru-view-lodge.jpg?w=900&h=500&s=1",
        featured: true,
        hasContractRates: true,
        contractRates: {
          meru: {
            highSeason: {
              dates: "01 Jan – 28 Feb, 01 Jun – 31 Oct",
              fullBoard: {
                single: 111.35,
                twinDouble: 78.35,
                triple: 67.35,
                family: 78.35
              },
              halfBoard: {
                single: 101.35,
                twinDouble: 68.35,
                triple: 57.35,
                family: 68.35
              },
              bedAndBreakfast: {
                single: 86.35,
                twinDouble: 53.35,
                triple: 42.35,
                family: 53.35
              }
            },
            lowSeason: {
              dates: "01 Mar – 31 May, 01 Nov – 31 Dec",
              fullBoard: {
                single: 89.35,
                twinDouble: 67.35,
                triple: 67.35,
                family: 67.35
              },
              halfBoard: {
                single: 79.35,
                twinDouble: 57.35,
                triple: 51.35,
                family: 57.35
              },
              bedAndBreakfast: {
                single: 64.35,
                twinDouble: 42.35,
                triple: 36.85,
                family: 42.35
              }
            },
            extras: {
              dayRoom: {
                highSeason: 35,
                lowSeason: 30
              },
              tourismDevelopmentLevy: 1
            }
          }
        }
      },      
      {
        id: 113,
        name: "Mihingo Lodge",
        location: "Lake Mburo, Uganda",
        rating: 4.7,
        category: "Safari Lodge",
        description: "Luxurious eco-lodge perched on a rocky outcrop overlooking Lake Mburo National Park.",
        amenities: ["Game Drives", "Horse Riding", "Swimming Pool", "Spa"],
        priceCategory: "Premium",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/39/bb/85/mihingo-lodge-with-pool.jpg?w=900&h=500&s=1",
        featured: true,
        hasContractRates: true,
        contractRates: {
          lakeMburo: {
            nonResident: {
              twinDouble: {
                high: { perPerson: 215 },
                low: { perPerson: 175 }
              },
              single: {
                high: { perPerson: 285 },
                low: { perPerson: 255 }
              },
              thirdPerson: {
                high: { perPerson: 140 },
                low: { perPerson: 115 }
              },
              children: {
                high: { perChild: 105 },
                low: { perChild: 85 }
              }
            },
            resident: {
              twinDouble: {
                high: { perPerson: 148.5 },
                low: { perPerson: 148.5 }
              },
              single: {
                high: { perPerson: 198 },
                low: { perPerson: 198 }
              },
              thirdPerson: {
                high: { perPerson: 95 },
                low: { perPerson: 95 }
              },
              children: {
                high: { perChild: 55 },
                low: { perChild: 55 }
              }
            }
          },
          extras: {
            tourLeader: {
              "2-4": { twin: 90, single: 120 },
              "5-8": { twin: 70, single: 100 },
              "9-11": { twin: 50, single: 80 },
              "12+": { twin: 40, single: 70 }
            },
            driverAccommodation: {
              roomRate: "30,000 UGX",
              meals: {
                lunchDinner: "25,000 UGX",
                breakfast: "15,000 UGX",
                packedLunch: "15,000 UGX"
              }
            }
          }
        }
      },      
      {
        id: 114,
        name: "Moivaro Hotels",
        location: "Tanzania",
        rating: 4.3,
        category: "Hotel Group",
        description: "Collection of lodges and tented camps offering immersive safari experiences across Northern Tanzania's scenic locations.",
        amenities: ["Varied by Property", "Safari Experiences", "Swimming Pool", "Wi-Fi", "Cultural Tours"],
        priceCategory: "Mid-range",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/d7/a0/31/moivaro-lodges-tented.jpg?w=900&h=500&s=1",
        featured: true,
        hasContractRates: true,
        contractRates: {
          accommodation: {
            moivaroLodge: {
              seasons: {
                low: { months: "March, April, May, Nov 1–Dec 19" },
                high: { months: "June, Sept, Oct" },
                peak: { months: "Jan, Feb, July, Aug, Dec 20–31" }
              },
              rates: {
                low: {
                  single: { bb: 158, hb: 184, fb: 204 },
                  double: { bb: 196, hb: 248, fb: 289 },
                  triple: { bb: 259, hb: 337, fb: 400 }
                },
                high: {
                  single: { bb: 173, hb: 199, fb: 220 },
                  double: { bb: 227, hb: 279, fb: 320 },
                  triple: { bb: 296, hb: 374, fb: 436 }
                },
                peak: {
                  single: { bb: 215, hb: 241, fb: 262 },
                  double: { bb: 284, hb: 336, fb: 378 },
                  triple: { bb: 374, hb: 452, fb: 514 }
                }
              }
            }
          },
          childPolicy: [
            "0–3 years: Free of charge (taxes $1.50 apply)",
            "4–16 years: 50% of adult rate (sharing)",
            "In own room: 1st child full rate, others 50%"
          ],
          foodAndBeverage: {
            breakfast: 12,
            lunch: 20,
            dinner: 25,
            lunchbox: 15,
            christmasSupplement: 25,
            honeymoonPackage: 15,
            bushMeal: 15,
            privateDinner: 15
          },
          extras: {
            culturalTour: 20,
            massage: 60,
            airportTransfer: 100,
            walkingTrail: "Complimentary",
            wifi: "Complimentary",
            swimmingPool: "Complimentary",
            conferenceCenter: "T.B.A."
          },
          notes: {
            campsiteFees: {
              general: "$12–$22 p.p. per night depending on location"
            },
            circuitDiscount: {
              "4 properties": "4%",
              "5 properties": "5%",
              "6 properties": "6%",
              "7+ properties": "10%"
            },
            cancellationPolicy: {
              lodges: {
                "90–45 days": "25%",
                "44–14 days": "50%",
                "<14 days / no-show": "100%"
              },
              tentedCamps: {
                "90–45 days": "25%",
                "44–30 days": "50%",
                "<30 days / no-show": "100%"
              }
            },
            driverRates: "TZS 10,000 for shared room and meals",
            tourLeaderPolicy: "Free accommodation after 15 paying guests (excl. taxes)"
          }
        }
      },      
      {
        id: 115,
        name: "Mombasa Continental Resort",
        location: "Mombasa, Kenya",
        rating: 4.0,
        category: "Beach Resort",
        description: "Established beach resort offering comfortable stays on Mombasa's coast with various room categories and conference facilities.",
        amenities: ["Swimming Pool", "Beach Access", "Restaurant", "Entertainment"],
        priceCategory: "Mid-range",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/d1/e7/32/beachfront-luxury.jpg?w=900&h=-1&s=1",
        featured: true,
        hasContractRates: true,
        contractRates: {
          accommodation: {
            standardRoom: {
              gardenFacing: {
                bedAndBreakfast: { single: 10500, double: 13350 },
                halfBoard: { single: 13500, double: 16500 },
                fullBoard: { single: 19350, double: 24350 },
                allInclusiveSupplement: { adult: 3500, child: 2500 }
              }
            },
            deluxeRoom: {
              partialSeaFacing: {
                bedAndBreakfast: { single: 11500, double: 14500 },
                halfBoard: { single: 14500, double: 17500 },
                fullBoard: { single: 20350, double: 25350 },
                allInclusiveSupplement: { adult: 3500, child: 2500 }
              }
            },
            superiorRoom: {
              seaFacing: {
                bedAndBreakfast: { single: 12500, double: 15500 },
                halfBoard: { single: 15350, double: 21350 },
                fullBoard: { single: 26350 },
                allInclusiveSupplement: { adult: 3500, child: 2500 }
              }
            }
          },
          conference: {
            fullDayPerPerson: 4500,
            halfDayPerPerson: 3500
          },
          notes: {
            childPolicy: [
              "0-3 years sharing with adults: FREE (max 2)",
              "4-11 years: 50% of adult rate sharing",
              "4-11 years in own room: 75% of double rate (max 3)"
            ],
            extraPerson: "75% of adult sharing rate",
            cancellationPolicy: {
              lessThan14Days: "50% of total booking revenue",
              lessThan3Days: "100% of total booking revenue",
              noShow: "100% of total revenue"
            },
            commission: "12.5% to TAs & TOs",
            festivePeriod: "Rates not valid during festive period"
          }
        }
      }
      
]