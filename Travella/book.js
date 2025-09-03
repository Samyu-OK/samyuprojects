function bar() {
  document.getElementById('sidebar').classList.remove('active');
}

function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

const bookingsContainer = document.getElementById("bookingsContainer");

function renderBookings() {
    bookingsContainer.innerHTML = "";

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    if (bookings.length === 0) {
    bookingsContainer.setAttribute("data-placeholder", "No bookings found");
    bookingsContainer.innerHTML = "";
    } else {
    bookingsContainer.removeAttribute("data-placeholder");
    }

    bookings.forEach((b, index) => {
    
        const totalPrice = b.totalPrice || (b.pricePerPerson * b.people);

        const card = document.createElement("div");
        card.className = "booking-card";

        card.innerHTML = `
            <div class="booking-image">
                <img src="${b.image}" alt="${b.title}">
            </div>
            <div class="booking-content">
                <h2 class="booking-title">${b.title}</h2>
                <div class="booking-details">
                    <p>📍 ${b.location}</p>
                    <p>📅 ${b.date}</p>
                    <p>👥 ${b.people} ${b.people > 1 ? "people" : "person"}</p>
                    <p>🕒 ${b.duration}</p>
                </div>
                <div class="booking-price">₹${totalPrice.toLocaleString()} <span class="price-label">total</span></div>
                <div class="booking-actions">
                    <button class="cancel-btn" onclick="cancelBooking(${index})">Cancel Booking</button>
                    <a href="${b.view}" class="view-btn">View</a>
                </div>
            </div>
        `;

        bookingsContainer.appendChild(card);
    });
    }

function cancelBooking(index) {
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    if (confirm("Are you sure you want to cancel this booking?")) {
        bookings.splice(index, 1);
        localStorage.setItem("bookings", JSON.stringify(bookings));
        renderBookings();
    }
}

renderBookings();



