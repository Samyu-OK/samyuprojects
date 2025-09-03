const places = [
  {
    title: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    image: "img/n40.jpg",
    tag: "MONUMENT",
    rating: 5.0,
    description: "A symbol of love and one of the Seven Wonders of the World.",
    highlights: ["Marble architecture", "Sunrise view", "Photography"]
  },
  {
    title: "Amber Fort",
    location: "Jaipur, Rajasthan",
    image: "img/in5.jpg",
    tag: "FORT",
    rating: 4.8,
    description: "A majestic fort with a blend of Hindu and Mughal architecture.",
    highlights: ["Fort tours", "Elephant ride", "City views"]
  },
  {
    title: "Backwaters of Alleppey",
    location: "Kerala",
    image: "img/in32.jpg",
    tag: "NATURE",
    rating: 4.9,
    description: "Scenic canals, houseboats, and coconut groves in 'God’s Own Country'.",
    highlights: ["Houseboat stay", "Village life", "Sunset views"]
  },
  {
    title: "Pangong Lake",
    location: "Ladakh",
    image: "img/in29.jpg",
    tag: "LAKE",
    rating: 4.9,
    description: "A stunning high-altitude lake with crystal-clear blue waters.",
    highlights: ["Photography", "Camping", "Scenic drives"]
  },
  {
    title: "Gateway of India",
    location: "Mumbai, Maharashtra",
    image: "img/in26.jpg",
    tag: "LANDMARK",
    rating: 4.6,
    description: "An iconic archway facing the Arabian Sea, built during the British Raj.",
    highlights: ["Photography", "Boat rides", "Historic architecture"]
  },
  {
  title: "Varanasi Ghats",
  location: "Varanasi, Uttar Pradesh",
  image: "img/in21.jpg",
  tag: "CULTURE",
  rating: 4.8,
  description: "Sacred riverfront steps along the Ganges, famous for evening aarti ceremonies and spiritual significance.",
  highlights: ["Ganga Aarti", "Boat rides", "Cultural experience"]
},
{
  title: "Hawa Mahal",
  location: "Jaipur, Rajasthan",
  image: "img/in19.jpg",
  tag: "PALACE",
  rating: 4.7,
  description: "Known as the 'Palace of Winds', a pink sandstone palace with intricate latticework.",
  highlights: ["Photography", "Architecture", "City views"]
},
{
  title: "Mysore Palace",
  location: "Mysuru, Karnataka",
  image: "img/in18.jpg",
  tag: "PALACE",
  rating: 4.8,
  description: "A grand royal residence showcasing Indo-Saracenic architecture.",
  highlights: ["Palace tour", "Light show", "Photography"]
},
{
  title: "Meenakshi Temple",
  location: "Madurai, Tamil Nadu",
  image: "img/in12.jpg",
  tag: "TEMPLE",
  rating: 4.9,
  description: "A historic Hindu temple with towering gopurams and vibrant sculptures.",
  highlights: ["Architecture", "Pilgrimage", "Photography"]
}
];

const packages = [
  {
    title: "Golden Triangle Tour",
    location: "Delhi, Agra, Jaipur - India",
    view: "India.html",
    image: "img/in39.jpg",
    description: "Explore India's famous Golden Triangle with heritage sites, forts, and cultural experiences.",
    tags: ["Taj Mahal", "Amber Fort", "City Palace", "Hotel Stay"],
    rating: 4.9,
    oldPrice: "₹65,000",
    newPrice: "₹52,999",
    duration: "6 Days, 5 Nights",
    pricePerPerson: 52999
  },
  {
    title: "Kerala Backwaters Retreat",
    location: "Kerala, India",
    view: "India.html",
    image: "img/in32.jpg",
    description: "Relax with a serene houseboat cruise, lush greenery, and Ayurvedic spa treatments.",
    tags: ["Houseboat Stay", "Ayurvedic Spa", "Backwater Cruise", "Hotel Stay"],
    rating: 4.8,
    oldPrice: "₹58,000",
    newPrice: "₹46,999",
    duration: "5 Days, 4 Nights",
    pricePerPerson: 46999
  },
  {
    title: "Himalayan Adventure",
    location: "Leh-Ladakh, India",
    view: "India.html",
    image: "img/in7.jpg",
    description: "A thrilling mountain escape with high-altitude lakes, monasteries, and scenic drives.",
    tags: ["Bike Trip", "Pangong Lake", "Monastery Visits", "Hotel Stay"],
    rating: 4.9,
    oldPrice: "₹72,000",
    newPrice: "₹59,999",
    duration: "7 Days, 6 Nights",
    pricePerPerson: 59999
  },
  {
    title: "Tamil Nadu & Karnataka Heritage",
    location: "Tamil Nadu & Karnataka, India",
    view: "India.html",
    image: "img/in11.jpg",
    description: "Experience the cultural heritage and scenic beauty of Southern India. Explore the temples of Madurai, the French charm of Pondicherry, the cool hills of Ooty, and the UNESCO World Heritage ruins of Hampi.",
    tags: ["Temples", "Hill Stations", "Heritage Sites", "Scenic Views", "Hotel Stay"],
    rating: 4.9,
    oldPrice: "₹82,000",
    newPrice: "₹67,999",
    duration: "10 Days, 9 Nights",
    pricePerPerson: 67999
  },
  {
    title: "Royal Rajasthan Experience",
    location: "Rajasthan, India",
    view: "India.html",
    image: "img/in38.jpg",
    description: "Step into the land of kings with majestic forts, palaces, desert safaris, and vibrant bazaars across Jaipur, Jodhpur, and Udaipur.",
    tags: ["Forts & Palaces", "Desert Safari", "Cultural Shows", "Hotel Stay"],
    rating: 4.9,
    oldPrice: "₹78,000",
    newPrice: "₹62,999",
    duration: "8 Days, 7 Nights",
    pricePerPerson: 62999
  },
  {
    title: "North East Himalayan Escape",
    location: "Sikkim & Meghalaya, India",
    view: "India.html",
    image: "img/in2.jpg",
    description: "Discover the lush valleys, waterfalls, and serene monasteries of North East India, from Gangtok to Cherrapunji.",
    tags: ["Waterfalls", "Monasteries", "Himalayan Views", "Hotel Stay"],
    rating: 4.8,
    oldPrice: "₹85,000",
    newPrice: "₹68,999",
    duration: "9 Days, 8 Nights",
    pricePerPerson: 68999
  }
];
