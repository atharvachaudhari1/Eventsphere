/**
 * EventSphere Vendor Mock Data
 * Centralised vendor catalogue used across the app.
 */

export const VENDORS = {
  catering: [
    {
      id: "c1",
      name: "Royal Feast Caterers",
      rating: 4.8,
      price: "high",
      city: "Chennai",
      speciality: "South Indian, Multi-cuisine",
      icon: "🍽️",
      reviews: 142,
      verified: true,
      minBudget: 80000,
      phone: "+91 98400 11111",
      description: "Premium multi-cuisine caterers trusted by 500+ events across Chennai.",
    },
    {
      id: "c2",
      name: "Spice Garden",
      rating: 4.5,
      price: "medium",
      city: "Coimbatore",
      speciality: "Chettinad, North Indian",
      icon: "🥘",
      reviews: 98,
      verified: true,
      minBudget: 40000,
      phone: "+91 98400 22222",
      description: "Authentic Chettinad flavours with a modern touch.",
    },
    {
      id: "c3",
      name: "Budget Bites",
      rating: 4.1,
      price: "low",
      city: "Madurai",
      speciality: "Traditional South Indian",
      icon: "🍛",
      reviews: 67,
      verified: false,
      minBudget: 15000,
      phone: "+91 98400 33333",
      description: "Affordable home-style South Indian meals for any occasion.",
    },
  ],
  decoration: [
    {
      id: "d1",
      name: "Dream Decors",
      rating: 4.9,
      price: "high",
      city: "Chennai",
      speciality: "Floral, Theme decor",
      icon: "🌸",
      reviews: 203,
      verified: true,
      minBudget: 60000,
      phone: "+91 98400 44444",
      description: "Award-winning floral designers specialising in grand wedding setups.",
    },
    {
      id: "d2",
      name: "Elegant Events",
      rating: 4.6,
      price: "medium",
      city: "Trichy",
      speciality: "Modern, Minimalist",
      icon: "✨",
      reviews: 115,
      verified: true,
      minBudget: 30000,
      phone: "+91 98400 55555",
      description: "Clean, contemporary décor that lets the couple shine.",
    },
    {
      id: "d3",
      name: "Simple Setups",
      rating: 4.0,
      price: "low",
      city: "Salem",
      speciality: "Traditional decor",
      icon: "🎊",
      reviews: 44,
      verified: false,
      minBudget: 10000,
      phone: "+91 98400 66666",
      description: "Traditional Tamil décor — kolam, mango leaves, jasmine garlands.",
    },
  ],
  photographer: [
    {
      id: "p1",
      name: "Moments by Karthik",
      rating: 4.9,
      price: "high",
      city: "Chennai",
      speciality: "Candid, Cinematic",
      icon: "📸",
      reviews: 178,
      verified: true,
      minBudget: 50000,
      phone: "+91 98400 77777",
      description: "Cinematic wedding films and candid photography — every moment preserved.",
    },
    {
      id: "p2",
      name: "Click & Capture",
      rating: 4.5,
      price: "medium",
      city: "Madurai",
      speciality: "Traditional, Candid",
      icon: "🎥",
      reviews: 89,
      verified: true,
      minBudget: 25000,
      phone: "+91 98400 88888",
      description: "Traditional portraits + candid photography combo packages.",
    },
    {
      id: "p3",
      name: "Budget Frames",
      rating: 3.9,
      price: "low",
      city: "Trichy",
      speciality: "Basic photography",
      icon: "📷",
      reviews: 31,
      verified: false,
      minBudget: 8000,
      phone: "+91 98400 99999",
      description: "Reliable basic photography for small events and functions.",
    },
  ],
  makeup: [
    {
      id: "m1",
      name: "Glam Studio by Priya",
      rating: 4.8,
      price: "high",
      city: "Chennai",
      speciality: "Bridal, HD Makeup",
      icon: "💄",
      reviews: 156,
      verified: true,
      minBudget: 20000,
      phone: "+91 98401 11111",
      description: "HD bridal makeup trusted by hundreds of brides across Chennai.",
    },
    {
      id: "m2",
      name: "Belle Artistry",
      rating: 4.4,
      price: "medium",
      city: "Coimbatore",
      speciality: "Bridal, Party makeup",
      icon: "💅",
      reviews: 72,
      verified: true,
      minBudget: 8000,
      phone: "+91 98401 22222",
      description: "Elegant bridal and party makeup with long-lasting formulas.",
    },
    {
      id: "m3",
      name: "Natural Glow",
      rating: 4.0,
      price: "low",
      city: "Salem",
      speciality: "Natural makeup",
      icon: "🌿",
      reviews: 28,
      verified: false,
      minBudget: 3000,
      phone: "+91 98401 33333",
      description: "Natural, breathable makeup for day events and small functions.",
    },
  ],
  costume: [
    {
      id: "cos1",
      name: "Silk Route Designers",
      rating: 4.7,
      price: "high",
      city: "Kanchipuram",
      speciality: "Silk sarees, Lehengas",
      icon: "👗",
      reviews: 134,
      verified: true,
      minBudget: 30000,
      phone: "+91 98401 44444",
      description: "Authentic Kanchipuram silk and designer bridal lehengas.",
    },
    {
      id: "cos2",
      name: "Trendy Threads",
      rating: 4.3,
      price: "medium",
      city: "Chennai",
      speciality: "Designer wear",
      icon: "👘",
      reviews: 88,
      verified: true,
      minBudget: 10000,
      phone: "+91 98401 55555",
      description: "Contemporary designer outfits for bride, groom & family.",
    },
    {
      id: "cos3",
      name: "Affordable Fashion",
      rating: 3.8,
      price: "low",
      city: "Madurai",
      speciality: "Traditional wear",
      icon: "🥻",
      reviews: 22,
      verified: false,
      minBudget: 2000,
      phone: "+91 98401 66666",
      description: "Affordable traditional wear on rental and purchase.",
    },
  ],
  returnGift: [
    {
      id: "r1",
      name: "Gift Galaxy",
      rating: 4.6,
      price: "high",
      city: "Chennai",
      speciality: "Customized gifts, Hampers",
      icon: "🎁",
      reviews: 99,
      verified: true,
      minBudget: 15000,
      phone: "+91 98401 77777",
      description: "Premium customised gift hampers with branding and packaging.",
    },
    {
      id: "r2",
      name: "Memory Makers",
      rating: 4.2,
      price: "medium",
      city: "Coimbatore",
      speciality: "Personalized gifts",
      icon: "🎀",
      reviews: 55,
      verified: true,
      minBudget: 5000,
      phone: "+91 98401 88888",
      description: "Photo frames, mugs, and keepsakes personalised for each guest.",
    },
    {
      id: "r3",
      name: "Budget Giftz",
      rating: 3.7,
      price: "low",
      city: "Trichy",
      speciality: "Bulk gifts",
      icon: "📦",
      reviews: 18,
      verified: false,
      minBudget: 1000,
      phone: "+91 98401 99999",
      description: "Bulk return gift packs starting ₹50/guest for big events.",
    },
  ],
};

/**
 * Get all vendors as a flat array.
 * @returns {Array}
 */
export function getAllVendors() {
  return Object.values(VENDORS).flat();
}

/**
 * Get vendors by city.
 * @param {string} city
 * @returns {Array}
 */
export function getVendorsByCity(city) {
  return getAllVendors().filter((v) => v.city === city);
}

/**
 * Get top-rated vendors (rating >= 4.5).
 * @returns {Array}
 */
export function getTopRatedVendors() {
  return getAllVendors()
    .filter((v) => v.rating >= 4.5)
    .sort((a, b) => b.rating - a.rating);
}

/**
 * Filter vendors by price tier.
 * @param {string} category
 * @param {'low'|'medium'|'high'} tier
 * @returns {Array}
 */
export function filterByPrice(category, tier) {
  return (VENDORS[category] ?? []).filter((v) => v.price === tier);
}
