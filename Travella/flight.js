function bar() {
      document.getElementById('sidebar').classList.remove('active');
    }

    function toggleMenu() {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('active');
    }

const flights = [
{
    airline: "IndiGo",
    flight: "6E 203",
    from: "Delhi",
    to: "Mumbai",
    departure: "06:00",
    arrival: "08:15",
    duration: "2h 15m",
    price: 4850, 
    stops: "nonstop",
    image: "img/boarding.jpg"
},
{
    airline: "SpiceJet",
    flight: "SG 8194",
    from: "Mumbai",
    to: "Bangalore",
    departure: "14:30",
    arrival: "16:00",
    duration: "1h 30m",
    price: 4200,
    stops: "nonstop",
    image: "img/boarding.jpg"
},
{
    airline: "Air India",
    flight: "AI 439",
    from: "Delhi",
    to: "Chennai",
    departure: "09:45",
    arrival: "12:30",
    duration: "2h 45m",
    price: 4750,
    stops: "nonstop",
    image: "img/boarding.jpg"
},
{
    airline: "Vistara",
    flight: "UK 955",
    from: "Bangalore",
    to: "Hyderabad",
    departure: "18:20",
    arrival: "19:30",
    duration: "1h 10m",
    price: 3850, 
    stops: "nonstop",
    image: "img/boarding.jpg"
},
{
    airline: "GoAir",
    flight: "G8 319",
    from: "Kolkata",
    to: "Delhi",
    departure: "07:15",
    arrival: "09:45",
    duration: "2h 30m",
    price: 4400, 
    stops: "nonstop",
    image: "img/boarding.jpg"
},
{
    airline: "AirAsia India",
    flight: "I5 719",
    from: "Pune",
    to: "Goa",
    departure: "11:00",
    arrival: "12:15",
    duration: "1h 15m",
    price: 3650, 
    stops: "nonstop",
    image: "img/boarding.jpg"
},
{
    airline: "IndiGo",
    flight: "6E 6112",
    from: "Ahmedabad",
    to: "Mumbai",
    departure: "16:40",
    arrival: "18:00",
    duration: "1h 20m",
    price: 3950, 
    stops: "nonstop",
    image: "img/boarding.jpg"
},
{
    airline: "SpiceJet",
    flight: "SG 143",
    from: "Jaipur",
    to: "Delhi",
    departure: "20:15",
    arrival: "21:30",
    duration: "1h 15m",
    price: 3750, 
    stops: "nonstop",
    image: "img/boarding.jpg"
},
{
    airline: "Air India",
    flight: "AI 2543",
    from: "Kochi",
    to: "Bangalore",
    departure: "13:25",
    arrival: "14:45",
    duration: "1h 20m",
    price: 4100, 
    stops: "nonstop",
    image: "img/boarding.jpg"
},
{
    airline: "Vistara",
    flight: "UK 851",
    from: "Lucknow",
    to: "Delhi",
    departure: "08:30",
    arrival: "09:55",
    duration: "1h 25m",
    price: 4350, 
    stops: "nonstop",
    image: "img/boarding.jpg"
},
{
    airline: "British Airways",
    flight: "BA 178",
    from: "Delhi",
    to: "London",
    departure: "22:00",
    arrival: "09:25+1",
    duration: "8h 25m",
    price: 52500, 
    stops: "nonstop",
    image: "img/boarding.jpg"
},
{
    airline: "Virgin Atlantic",
    flight: "VS 4",
    from: "Mumbai",
    to: "London",
    departure: "20:30",
    arrival: "07:55+1",
    duration: "9h 25m",
    price: 48900,
    stops: "nonstop",
    image: "img/boarding.jpg"
},
{
    airline: "Delta",
    flight: "DL 1",
    from: "Delhi",
    to: "New York",
    departure: "17:00",
    arrival: "07:00+1",
    duration: "15h",
    price: 42500,
    stops: "1",
    layover: "🕒 Layover: 3h 15m",
    point: "Doha",
    image: "img/boarding.jpg"
},
{
    airline: "Emirates",
    flight: "EK 511",
    from: "Mumbai",
    to: "Dubai",
    departure: "03:30",
    arrival: "06:00",
    duration: "3h 30m",
    price: 28500, 
    stops: "nonstop",
    image: "img/boarding.jpg"
},
{
    airline: "Qatar Airways",
    flight: "QR 571",
    from: "Delhi",
    to: "Doha",
    departure: "01:45",
    arrival: "04:15",
    duration: "4h 30m",
    price: 27500, 
    stops: "nonstop",
    image: "img/boarding.jpg"
},
{
    airline: "Singapore Airlines",
    flight: "SQ 406",
    from: "Bangalore",
    to: "Singapore",
    departure: "23:55",
    arrival: "07:20+1",
    duration: "4h 25m",
    price: 32500, 
    stops: "nonstop",
    image: "img/boarding.jpg"
},
{
    airline: "Thai Airways",
    flight: "TG 315",
    from: "Delhi",
    to: "Bangkok",
    departure: "07:45",
    arrival: "14:30",
    duration: "4h 45m",
    price: 29800,
    stops: "nonstop",
    image: "img/boarding.jpg"
},
{
    airline: "Lufthansa",
    flight: "LH 761",
    from: "Mumbai",
    to: "Frankfurt",
    departure: "01:40",
    arrival: "07:55",
    duration: "8h 15m",
    price: 51200, 
    stops: "nonstop",
    image: "img/boarding.jpg"
},
{
    airline: "Air France",
    flight: "AF 226",
    from: "Delhi",
    to: "Paris",
    departure: "13:40",
    arrival: "19:20",
    duration: "8h 40m",
    price: 49500, 
    stops: "nonstop",
    image: "img/boarding.jpg"
},
{
    airline: "KLM",
    flight: "KL 872",
    from: "Mumbai",
    to: "Amsterdam",
    departure: "04:25",
    arrival: "09:40",
    duration: "9h 15m",
    price: 47800, 
    stops: "nonstop",
    image: "img/boarding.jpg"
},
{
    airline: "Turkish Airlines",
    flight: "TK 719",
    from: "Delhi",
    to: "Istanbul",
    departure: "02:15",
    arrival: "06:30",
    duration: "6h 15m",
    price: 35500,
    stops: "nonstop",
    image: "img/boarding.jpg"
},
{
    airline: "Etihad Airways",
    flight: "EY 211",
    from: "Mumbai",
    to: "Abu Dhabi",
    departure: "21:05",
    arrival: "23:40",
    duration: "3h 35m",
    price: 26800,
    stops: "nonstop",
    image: "img/boarding.jpg"
},
{
    airline: "Cathay Pacific",
    flight: "CX 663",
    from: "Delhi",
    to: "Hong Kong",
    departure: "23:25",
    arrival: "08:30+1",
    duration: "6h 05m",
    price: 38500,
    stops: "nonstop",
    image: "img/boarding.jpg"
},
{
    airline: "Malaysia Airlines",
    flight: "MH 171",
    from: "Chennai",
    to: "Kuala Lumpur",
    departure: "09:20",
    arrival: "16:05",
    duration: "3h 45m",
    price: 24500, 
    stops: "nonstop",
    image: "img/boarding.jpg"
},
{
    airline: "United Airlines",
    flight: "UA 82",
    from: "Delhi",
    to: "New York",
    departure: "14:30",
    arrival: "17:55",
    duration: "16h 25m",
    price: 55200,
    stops: "1",
    layover: "🕒 Layover: 2h 30m",
    point: "Abu Dhabi",
    image: "img/boarding.jpg"
},
{
    airline: "American Airlines",
    flight: "AA 293",
    from: "Mumbai",
    to: "New York",
    departure: "19:45",
    arrival: "06:30+1",
    duration: "18h 45m",
    price: 58500, 
    stops: "2",
    layover: "🕒 Total Layover: 4h 30m",
    point: "Istanbul → London",
    image: "img/boarding.jpg"
},
{
    airline: "JAL",
    flight: "JL 750",
    from: "Delhi",
    to: "Tokyo",
    departure: "16:20",
    arrival: "05:55+1",
    duration: "7h 35m",
    price: 41200, 
    stops: "nonstop",
    image: "img/boarding.jpg"
},
{
    airline: "Korean Air",
    flight: "KE 481",
    from: "Mumbai",
    to: "Seoul",
    departure: "11:30",
    arrival: "01:45+1",
    duration: "8h 15m",
    price: 39500, 
    stops: "nonstop",
    image: "img/boarding.jpg"
},
{
    airline: "Air Canada",
    flight: "AC 42",
    from: "Delhi",
    to: "Toronto",
    departure: "02:15",
    arrival: "07:30",
    duration: "14h 15m",
    price: 54800, 
    stops: "1",
    layover: "🕒 Layover: 2h 15m",
    point:"London",
    image: "img/boarding.jpg"
},
{
    airline: "Qantas",
    flight: "QF 68",
    from: "Mumbai",
    to: "Sydney",
    departure: "22:40",
    arrival: "13:20+1",
    duration: "12h 40m",
    price: 62500, 
    stops: "nonstop",
    image: "img/boarding.jpg"
}
];

let selectedFlight = null;
flightsContainer = document.getElementById("flightsContainer");
priceRange = document.getElementById("priceRange");
priceValue = document.getElementById("priceValue");
stopsFilter = document.getElementById("stops");

function createFlightCardHTML(flight, index) {
  return `
   <div class="flight-card" style="border:1px solid #ccc; padding:25px; margin:10px; border-radius:8px;cursor:default;">
      <h3>${flight.airline} - ${flight.flight}</h3>
      <div class="flight-route">${flight.from} → ${flight.to}</div>
      <div class="details">
        <p><strong>Departure:</strong> ${flight.departure}</p>
        <p><strong>Arrival:</strong> ${flight.arrival}</p>
        <div class="details1">
        <div style="display:inline-block;align-items: center; justify-content: center; position:absolute;left:20%;bottom:60%;">
  
              <img src="img/airplane.png" style="width:20px; height:auto; position:absolute;left:0%;bottom:42%;">
  
              <div style="display:inline-block; width:350px;height:2px; background-color:#ccc; margin:0 5px;"></div>
  
              <img src="img/airplane-mode.png" style="width:20px; height:auto; position:relative;left:0px;bottom:42%;">
  
              <div style="display:inline-block;width:350px;height:2px; background-color:#ccc; margin:0 5px;"></div>
  
              <img src="img/landing.png" style="width:20px; height:auto; position:relative;left:0px;bottom:42%;">

        </div>
        </div>
        <p><strong>Duration:</strong> ${flight.duration}</p>
        <p><strong>Stops:</strong> ${flight.stops}</p>
        <p><strong>Price:</strong> ₹${flight.price.toLocaleString()}</p>
        <button class="book-btn" onclick="openFlightModal(${index})">Select Flight</button>
      </div>
      <br>
      <p>-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
    </div>
  `;
}

function displayFlights() {
  const maxPrice = parseInt(priceRange.value) || 80000;
  const stops = stopsFilter.value;

  flightsContainer.innerHTML = '';

  flights.forEach((flight, index) => {
    if (flight.price <= maxPrice && (stops === 'any' || flight.stops === stops)) {
      flightsContainer.innerHTML += createFlightCardHTML(flight, index);
    }
  });

  priceValue.textContent = maxPrice.toLocaleString();
}

window.addEventListener("DOMContentLoaded", () => {
  priceRange.value = 80000;
  displayFlights(); 
  priceRange.addEventListener("input", displayFlights);
  stopsFilter.addEventListener("change", displayFlights);
});


function openFlightModal(index) {
  selectedFlight = flights[index];

  document.getElementById("flightModalTitle").innerText = "Book Your Flight";
  document.getElementById("flightModalSubtitle").innerText = `✈ ${selectedFlight.from} → ${selectedFlight.to}`;
  document.getElementById("flightAirline").innerText = `${selectedFlight.airline} - ${selectedFlight.flight}`;
  document.getElementById("flightRoute").innerText = `${selectedFlight.from} ${selectedFlight.point ? `→ ${selectedFlight.point}` : ""} → ${selectedFlight.to}`;
  document.getElementById("flightTiming").innerText = `Departure: ${selectedFlight.departure} | Arrival: ${selectedFlight.arrival}`;
  document.getElementById("flightClass").innerText = `Duration: ${selectedFlight.duration} | Stops: ${selectedFlight.stops} ${selectedFlight.layover ? `${selectedFlight.layover}` : ""}`;
  document.getElementById("flightBasePriceText").innerText = `Price per passenger: ₹${selectedFlight.price.toLocaleString()}`;

  document.getElementById("flightPassengers").value = 1;
  updateFlightTotal();
  document.querySelector(".flight-modal-overlay").style.display = "flex";
}

function closeFlightModal() {
  document.querySelector(".flight-modal-overlay").style.display = "none";
}

function updateFlightTotal() {
  if (!selectedFlight) return;
  const passengers = parseInt(document.getElementById("flightPassengers").value) || 1;
  const total = selectedFlight.price * passengers;
  document.getElementById("flightTotalPrice").innerText = `₹${total.toLocaleString()}`;
  document.getElementById("flightTotalLabel").innerText = `Total for ${passengers} ${passengers > 1 ? "passengers" : "passenger"}`;
  document.getElementById("flightConfirmBtn").innerText = `Confirm Booking - ₹${total.toLocaleString()}`;
}

function handleFlightSubmit(event) {
  event.preventDefault();
  if (!selectedFlight) return;

  const passengers = parseInt(document.getElementById("flightPassengers").value) || 1;
  const departureDate = document.getElementById("flightDepartureDate").value;
  const totalPrice = selectedFlight.price * passengers;

  const booking = {
    title: `${selectedFlight.airline} - ${selectedFlight.flight}`,
    location: `${selectedFlight.from} → ${selectedFlight.to}`,
    date: `${departureDate} | Depature: ${selectedFlight.departure} Arrival: ${selectedFlight.arrival} | ${selectedFlight.stops} ${selectedFlight.point ? `stop | ${selectedFlight.point} | ` : ""} ${selectedFlight.layover ? `${selectedFlight.layover}` : ""}`,
    people: passengers,
    totalPrice: totalPrice,
    duration: selectedFlight.duration,
    view: "flight.html",
    image: selectedFlight.image,
  };

  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  window.location.href = "bookings.html";
}


