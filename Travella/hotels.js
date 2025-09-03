function bar() {
  document.getElementById('sidebar').classList.remove('active');
}

function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

const hotels = [
    {
    name: "Hotel des Arts Montmartre",
    location: "Montmartre, Paris",
    distance: "2.1 km from city center",
    rating: 4.6,
    reviews: 1923,
    price: 23200,
    image: "img/h1.png",
    room: "Superior Room",
    tags: ["Free WiFi", "AC", "Restaurant", "Concierge", "Room Service"],
    inout: "12pm-12pm"
  },
  {
    name: "Hotel Elysees",
    location: "Elysees, Paris",
    distance: "0.5 km from city center",
    rating: 4.8,
    reviews: 2487,
    price: 37200,
    image: "img/h36.png",
    room: "Deluxe Double Room",
    tags: ["Free WiFi", "Parking", "Pool", "Spa", "Restaurant"],
    inout: "1pm-11am"
  },
  {
    name: "Le Marais Boutique Hotel",
    location: "Le Marais, Paris",
    distance: "1.2 km from city center",
    rating: 4.5,
    reviews: 1654,
    price: 19800,
    image: "img/h2.png",
    room: "Classic French Room",
    tags: ["Free WiFi", "Historic Building", "Breakfast"],
    inout: "2pm-12pm"
  },
  {
    name: "The Shard Hotel",
    location: "London Bridge, London",
    distance: "0.8 km from city center",
    rating: 4.9,
    reviews: 3421,
    price: 45600,
    image: "img/h3.png",
    room: "Luxury Suite with City View",
    tags: ["Free WiFi", "Concierge", "Gym", "Restaurant"],
    inout: "3pm-11am"
  },
  {
    name: "Covent Garden Hotel",
    location: "Covent Garden, London",
    distance: "0.3 km from city center",
    rating: 4.7,
    reviews: 2876,
    price: 31200,
    image: "img/h4.png",
    room: "Traditional English Room",
    tags: ["Free WiFi", "Theater District", "Restaurant", "Concierge"],
    inout: "12pm-10am"
  },
  {
    name: "Hyde Park Corner Hotel",
    location: "Hyde Park, London",
    distance: "1.5 km from city center",
    rating: 4.4,
    reviews: 1987,
    price: 26400,
    image: "img/h5.png",
    room: "Park View Double Room",
    tags: ["Free WiFi", "Park View", "Restaurant", "Room Service", "AC"],
    inout: "2pm-11am"
  },
  {
    name: "Times Square Grand Hotel",
    location: "Times Square, New York",
    distance: "0.2 km from Times Square",
    rating: 4.6,
    reviews: 4521,
    price: 41600,
    image: "img/h6.png",
    room: "Broadway View Suite",
    tags: ["Free WiFi", "Rooftop Bar", "Gym", "Concierge"],
    inout: "3pm-12pm"
  },
  {
    name: "Central Park Plaza",
    location: "Upper East Side, New York",
    distance: "0.1 km from Central Park",
    rating: 4.8,
    reviews: 3654,
    price: 52800,
    image: "img/h7.png",
    room: "Central Park View Room",
    tags: ["Free WiFi", "Park View", "Spa", "Restaurant"],
    inout: "1pm-10am"
  },
  {
    name: "Brooklyn Bridge Hotel",
    location: "DUMBO, Brooklyn",
    distance: "2.5 km from Manhattan",
    rating: 4.3,
    reviews: 2134,
    price: 28800,
    image: "img/h8.png",
    room: "Bridge View Room",
    tags: ["Free WiFi", "Bridge View", "Restaurant", "Pet Friendly"],
    inout: "2pm-11am"
  },
  {
    name: "Burj Al Arab",
    location: "Jumeirah Beach, Dubai",
    distance: "15 km from city center",
    rating: 4.9,
    reviews: 8765,
    price: 124800,
    image: "img/h37.png",
    room: "Luxury Suite with Sea View",
    tags: ["Private Beach", "Helicopter Transfers", "Spa", "Fine Dining"],
    inout: "3pm-12pm"
  },
  {
    name: "Atlantis The Palm",
    location: "Palm Jumeirah, Dubai",
    distance: "20 km from city center",
    rating: 4.7,
    reviews: 6543,
    price: 66400,
    image: "img/h10.png",
    room: "Ocean View Room",
    tags: ["Water Park", "Aquarium", "Private Beach", "Cuisine"],
    inout: "2pm-11am"
  },
  {
    name: "Downtown Dubai Hotel",
    location: "Downtown Dubai",
    distance: "0.5 km from Burj Khalifa",
    rating: 4.5,
    reviews: 4321,
    price: 49600,
    image: "img/h11.png",
    room: "Burj Khalifa View Room",
    tags: ["Free WiFi", "Pool", "Shopping Mall Access", "Restaurant"],
    inout: "1pm-12pm"
  },
  {
    name: "Tokyo Imperial Hotel",
    location: "Ginza, Tokyo",
    distance: "1.0 km from Imperial Palace",
    rating: 4.8,
    reviews: 5432,
    price: 45600,
    image: "img/h12.png",
    room: "Traditional Japanese Suite",
    tags: ["Free WiFi", "Onsen", "Multiple Restaurants", "Garden View"],
    inout: "3pm-11am"
  },
  {
    name: "Shibuya Sky Hotel",
    location: "Shibuya, Tokyo",
    distance: "0.2 km from Shibuya Crossing",
    rating: 4.6,
    reviews: 3876,
    price: 33600,
    image: "img/h13.png",
    room: "Modern City View Room",
    tags: ["Sky Bar", "Shopping Access", "Onsen", "Restaurant"],
    inout: "2pm-11am"
  },
  {
    name: "Asakusa Traditional Ryokan",
    location: "Asakusa, Tokyo",
    distance: "0.3 km from Senso-ji Temple",
    rating: 4.4,
    reviews: 2543,
    price: 28800,
    image: "img/h14.png",
    room: "Traditional Tatami Room",
    tags: ["Hot Springs", "Japanese Breakfast", "Cultural Activities"],
    inout: "1pm-10am"
  },
  {
    name: "Marina Bay Sands",
    location: "Marina Bay, Singapore",
    distance: "0.5 km from city center",
    rating: 4.9,
    reviews: 9876,
    price: 58400,
    image: "img/h15.png",
    room: "SkyPark Access Room",
    tags: ["Infinity Pool", "Shopping Mall", "Cuisine", "Sky Deck"],
    inout: "3pm-12pm"
  },
  {
    name: "Raffles Singapore",
    location: "Colonial District, Singapore",
    distance: "0.8 km from city center",
    rating: 4.8,
    reviews: 4567,
    price: 74400,
    image: "img/h16.png",
    room: "Colonial Suite",
    tags: ["Historic Hotel", "Spa", "Fine Dining", "Heritage Building"],
    inout: "2pm-11am"
  },
  {
    name: "Gardens by the Bay Hotel",
    location: "Marina South, Singapore",
    distance: "1.2 km from city center",
    rating: 4.6,
    reviews: 3421,
    price: 41600,
    image: "img/h17.png",
    room: "Garden View Room",
    tags: ["Garden Access", "Pool", "Restaurant", "Nature Walks"],
    inout: "1pm-10am"
  },
  {
    name: "The Oriental Bangkok",
    location: "Bangrak, Bangkok",
    distance: "0.5 km from Chao Phraya River",
    rating: 4.9,
    reviews: 6789,
    price: 37200,
    image: "img/h18.png",
    room: "River View Suite",
    tags: ["River View", "Spa", "Thai Cooking Classes", "Historic Hotel"],
    inout: "2pm-12pm"
  },
  {
    name: "Sukhumvit Plaza Hotel",
    location: "Sukhumvit, Bangkok",
    distance: "0.3 km from BTS Station",
    rating: 4.5,
    reviews: 4321,
    price: 19200,
    image: "img/h19.png",
    room: "Modern City Room",
    tags: ["Free WiFi", "Pool", "Shopping Access", "Restaurant"],
    inout: "1pm-11am"
  },
  {
    name: "Chatuchak Garden Hotel",
    location: "Chatuchak, Bangkok",
    distance: "5 km from city center",
    rating: 4.2,
    reviews: 2876,
    price: 14400,
    image: "img/h20.png",
    room: "Garden View Room",
    tags: ["Free WiFi", "Market Access", "Garden", "Restaurant"],
    inout: "2pm-10am"
  },
  {
    name: "Hotel Colosseum Palace",
    location: "Colosseum Area, Rome",
    distance: "0.2 km from Colosseum",
    rating: 4.7,
    reviews: 5432,
    price: 41600,
    image: "img/h21.png",
    room: "Colosseum View Room",
    tags: ["Historic View", "Restaurant", "Concierge", "Walking Tours"],
    inout: "3pm-12pm"
  },
  {
    name: "Vatican Gardens Hotel",
    location: "Vatican City, Rome",
    distance: "0.1 km from Vatican",
    rating: 4.6,
    reviews: 3654,
    price: 49600,
    image: "img/h22.png",
    room: "Vatican View Suite",
    tags: ["Vatican Access", "Free WiFi", "Cuisine", "Art Gallery"],
    inout: "1pm-11am"
  },
  {
    name: "Trastevere Boutique Hotel",
    location: "Trastevere, Rome",
    distance: "2.5 km from city center",
    rating: 4.4,
    reviews: 2987,
    price: 28800,
    image: "img/h23.png",
    room: "Traditional Roman Room",
    tags: ["Free WiFi", "Cuisine", "Wine Bar", "Cultural Experience"],
    inout: "2pm-10am"
  },
  {
    name: "Park Güell Hotel",
    location: "Gràcia, Barcelona",
    distance: "0.1 km from Park Güell",
    rating: 4.8,
    reviews: 4321,
    price: 37200,
    image: "img/h24.png",
    room: "Gaudí Inspired Suite",
    tags: ["Park Access", "Rooftop Terrace", "Cuisine", "Art Tours"],
    inout: "3pm-12pm"
  },
  {
    name: "Gothic Quarter Hotel",
    location: "Gothic Quarter, Barcelona",
    distance: "0.5 km from Las Ramblas",
    rating: 4.5,
    reviews: 3876,
    price: 31200,
    image: "img/h25.png",
    room: "Medieval View Room",
    tags: ["Historic Building", "Restaurant", "Cultural Sites"],
    inout: "1pm-11am"
  },
  {
    name: "Sagrada Familia Hotel",
    location: "Eixample, Barcelona",
    distance: "0.2 km from Sagrada Familia",
    rating: 4.6,
    reviews: 5234,
    price: 33600,
    image: "img/h26.png",
    room: "Basilica View Room",
    tags: ["Monument View", "Free WiFi", "Modern Design", "Restaurant"],
    inout: "2pm-10am"
  },
  {
    name: "Sydney Harbour Hotel",
    location: "Circular Quay, Sydney",
    distance: "0.1 km from Opera House",
    rating: 4.9,
    reviews: 7654,
    price: 52800,
    image: "img/h27.png",
    room: "Opera House View Suite",
    tags: ["Harbour View", "Opera House Access", "Fine Dining"],
    inout: "3pm-12pm"
  },
  {
    name: "Bondi Beach Resort",
    location: "Bondi Beach, Sydney",
    distance: "8 km from city center",
    rating: 4.6,
    reviews: 4321,
    price: 41600,
    image: "img/h28.png",
    room: "Ocean View Room",
    tags: ["Beach Access", "Surf Lessons", "Pool", "Restaurant"],
    inout: "2pm-11am"
  },
  {
    name: "Darling Harbour Hotel",
    location: "Darling Harbour, Sydney",
    distance: "1 km from city center",
    rating: 4.4,
    reviews: 3456,
    price: 37200,
    image: "img/h29.png",
    room: "Harbour Bridge View Room",
    tags: ["Free WiFi", "Aquarium Access", "Restaurant", "Shopping"],
    inout: "1pm-10am"
  },
  {
    name: "Canal House Amsterdam",
    location: "Canal Ring, Amsterdam",
    distance: "0.5 km from city center",
    rating: 4.7,
    reviews: 3987,
    price: 33600,
    image: "img/h30.png",
    room: "Canal View Room",
    tags: ["Canal View", "Historic Building", "Free WiFi", "Bike Rental"],
    inout: "2pm-12pm"
  },
  {
    name: "Vondelpark Hotel",
    location: "Vondelpark, Amsterdam",
    distance: "1.2 km from city center",
    rating: 4.5,
    reviews: 2876,
    price: 28800,
    image: "img/h31.png",
    room: "Park View Room",
    tags: ["Park Access", "Bike Rental", "Restaurant", "Green Location"],
    inout: "1pm-11am"
  },
  {
    name: "Sultanahmet Palace Hotel",
    location: "Sultanahmet, Istanbul",
    distance: "0.2 km from Hagia Sophia",
    rating: 4.8,
    reviews: 6543,
    price: 24000,
    image: "img/h32.png",
    room: "Ottoman Style Suite",
    tags: ["Historic Area", "Bosphorus View", "Turkish Bath", "Cuisine"],
    inout: "3pm-12pm"
  },
  {
    name: "Four Seasons Resort Bali",
    location: "Ubud, Bali",
    distance: "35 km from Ngurah Rai Airport",
    rating: 4.9,
    reviews: 8765,
    price: 62400,
    image: "img/h33.png",
    room: "Villa with Private Pool",
    tags: ["Jungle View", "Spa", "Rice Terrace View", "Cultural Activities"],
    inout: "2pm-11am"
  },
  {
    name: "Seminyak Beach Resort",
    location: "Seminyak, Bali",
    distance: "8 km from Ngurah Rai Airport",
    rating: 4.6,
    reviews: 4321,
    price: 41600,
    image: "img/h34.png",
    room: "Beach Front Suite",
    tags: ["Sunset View", "Beach Club", "Spa", "Shopping Access"],
    inout: "1pm-10am"
  },
  {
    name: "The Peninsula Hong Kong",
    location: "Tsim Sha Tsui, Hong Kong",
    distance: "0.5 km from Star Ferry",
    rating: 4.9,
    reviews: 9876,
    price: 66400,
    image: "img/h35.png",
    room: "Harbour View Suite",
    tags: ["Harbour View", "Rolls-Royce Fleet", "Michelin Dining"],
    inout: "2pm-12pm"
  }


];

const container = document.getElementById("hotelList");
let selectedHotel = null;

hotels.forEach((hotel, index) => {
    const card = document.createElement("div");
    card.className = "hotel-card";
    card.innerHTML = `
        <img src="${hotel.image}" alt="${hotel.name}">
        <div class="hotel-info">
            <div>
                <h3>${hotel.name}</h3>
                <p><strong>${hotel.location}</strong> - ${hotel.distance}</p>
                <p>⭐ ${hotel.rating} (${hotel.reviews} reviews)</p>
                <p>${hotel.room}</p>
                <div class="tags">
                    ${hotel.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <p>Check - In/Out Timings: <strong>${hotel.inout}</strong></p>
            </div>
            <div>
                <p class="price">₹${hotel.price.toLocaleString()} <small>/ night</small></p>
                <button class="book-btn" onclick="openHotelModal(${index})">Book Now</button>
            </div>
        </div>
    `;
    container.appendChild(card);
});


function openHotelModal(index) {
    selectedHotel = hotels[index];

    document.getElementById("hotelModalTitle").innerText = "Book Your Hotel";
    document.getElementById("hotelModalSubtitle").innerText = `${selectedHotel.name} - ${selectedHotel.room}`;
    document.getElementById("hotelTitle").innerText = selectedHotel.name;
    document.getElementById("hotelLocation").innerText = selectedHotel.location;
    document.getElementById("timing").innerText = `Check-In/Out: ${selectedHotel.inout}`;
    document.getElementById("hotelBasePriceText").innerText = `Price per night: ₹${selectedHotel.price.toLocaleString()}`;

    document.getElementById("hotelPeopleCount").value = 1;
    document.getElementById("hotelCheckInDate").value = "";
    document.getElementById("hotelCheckOutDate").value = "";
    updateHotelTotal();
    document.querySelector(".modal-overlay").style.display = "flex";
}

function closeHotelModal() {
    document.querySelector(".modal-overlay").style.display = "none";
}

function updateHotelTotal() {
    if (!selectedHotel) return;

    const count = parseInt(document.getElementById("hotelPeopleCount").value) || 1;
    const checkin = document.getElementById("hotelCheckInDate").value;
    const checkout = document.getElementById("hotelCheckOutDate").value;

    let nights = 1;
    if (checkin && checkout) {
        const checkinDate = new Date(checkin);
        const checkoutDate = new Date(checkout);
        if (checkoutDate > checkinDate) {
            nights = Math.ceil((checkoutDate - checkinDate) / (1000 * 60 * 60 * 24));
        }
    }

    const total = selectedHotel.price * nights * count;

    document.getElementById("hotelTotalPrice").innerText = `₹${total.toLocaleString()}`;
    document.getElementById("hotelTotalLabel").innerText =
        `Total for ${count} ${count > 1 ? "people" : "person"} (${nights} night${nights > 1 ? 's' : ''})`;
    document.getElementById("hotelConfirmBtn").innerText =
        `Confirm Booking - ₹${total.toLocaleString()}`;
}

function handleHotelSubmit(event) {
    event.preventDefault();
    if (!selectedHotel) return;

    const count = parseInt(document.getElementById("hotelPeopleCount").value) || 1;
    const checkin = document.getElementById("hotelCheckInDate").value;
    const checkout = document.getElementById("hotelCheckOutDate").value;

    let nights = 1;
    if (checkin && checkout) {
        const checkinDate = new Date(checkin);
        const checkoutDate = new Date(checkout);
        if (checkoutDate > checkinDate) {
            nights = Math.ceil((checkoutDate - checkinDate) / (1000 * 60 * 60 * 24));
        }
    }

    const totalPrice = selectedHotel.price * nights * count;

    const booking = {
        title: selectedHotel.name,
        location: `${selectedHotel.location} | Check-In/Out: ${selectedHotel.inout}`,
        date: `${checkin} to ${checkout}`,
        duration: `${nights} night${nights > 1 ? 's' : ''} | Room: ${selectedHotel.room}`,
        people: count,
        totalPrice: totalPrice,
        image: selectedHotel.image,
        view: "hotels.html",
    };

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    window.location.href = "bookings.html";
}

document.getElementById("hotelPeopleCount").addEventListener("input", updateHotelTotal);
document.getElementById("hotelCheckInDate").addEventListener("change", updateHotelTotal);
document.getElementById("hotelCheckOutDate").addEventListener("change", updateHotelTotal);
