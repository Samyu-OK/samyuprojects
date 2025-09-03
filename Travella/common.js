
function bar() {
  document.getElementById('sidebar').classList.remove('active');
}

function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

let currentIndex = 0;
const totalSlides = 4;

function showSlide(index) {
  const slides = document.querySelector('.slides');

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

setInterval(() => {
  nextSlide();
}, 4000);


function createPlaceCardHTML(place) {
  return `
    <div class="card">
      <div style="position: relative;">
        <img src="${place.image}" alt="${place.title}">
        <div class="tag">${place.tag}</div>
        <div class="rating">★ ${place.rating}</div>
      </div>
      <div class="card-content">
        <h3>${place.title}</h3>
        <p><strong>📍 ${place.location}</strong></p>
        <p>${place.description}</p>
        <div class="highlights"><strong>Highlights:</strong> ${place.highlights.join(", ")}</div>
      </div>
    </div>
  `;
}

function createPackageCardHTML(pkg, index) {
  return `
    <div class="cards">
      <div class="image-wrapper">
        <a href="${pkg.view}">
          <img src="${pkg.image}" alt="${pkg.title}" />
        </a>
      </div>
      <div class="cards-content">
        <div class="location">📍 ${pkg.location}</div>
        <h3>${pkg.title}</h3>
        <p class="description">${pkg.description}</p>
        <div class="tags">${pkg.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
        <div class="review">⭐ ${pkg.rating} ${pkg.exclusive ||""}</div>
        <div class="price">
          <span class="old-price">${pkg.oldPrice}</span>
          <span class="new-price">${pkg.newPrice}</span>
        </div>
        <div class="duration">📅 ${pkg.duration}</div>
        <button class="book-btn" onclick="openModal(${index})">Book Now</button>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const placeContainer = document.getElementById("spotContainer");
  const packageContainer = document.getElementById("packageContainer");

  if (placeContainer && typeof places !== "undefined") {
    places.forEach(place => {
      placeContainer.innerHTML += createPlaceCardHTML(place);
    });
  }

  if (packageContainer && typeof packages !== "undefined") {
    packages.forEach((pkg, index) => {
      packageContainer.innerHTML += createPackageCardHTML(pkg, index);
    });
  }
});

let selectedPackage = null;

function openModal(index) {
  selectedPackage = packages[index];
  document.getElementById("modalTitle").innerText = "Book Your Trip";
  document.getElementById("modalSubtitle").innerText = selectedPackage.title;
  document.getElementById("tourTitle").innerText = selectedPackage.title;
  document.getElementById("tourLocation").innerText = selectedPackage.location;
  document.getElementById("basePriceText").innerText =
    `Base price per person: ₹${selectedPackage.pricePerPerson.toLocaleString()}`;

  document.getElementById("peopleCount").value = 1;
  updateTotal();
  document.querySelector(".modal-overlay").style.display = "flex";
}

function closeModal() {
  document.querySelector(".modal-overlay").style.display = "none";
}

function updateTotal() {
  const count = parseInt(document.getElementById("peopleCount").value);
  const total = selectedPackage.pricePerPerson * count;
  document.getElementById("totalPrice").innerText = `₹${total.toLocaleString()}`;
  document.getElementById("totalLabel").innerText = 
    `Total for ${count} ${count > 1 ? "people" : "person"}`;
  document.getElementById("confirmBtn").innerText = 
    `Confirm Booking - ₹${total.toLocaleString()}`;
}

function handleSubmit(event) {
  event.preventDefault();
  const count = parseInt(document.getElementById("peopleCount").value);
  const totalPrice = selectedPackage.pricePerPerson * count;

  const booking = {
    title: selectedPackage.title,
    image: selectedPackage.image,
    location: selectedPackage.location,
    date: document.getElementById("travelDate").value,
    people: count,
    totalPrice: totalPrice,
    duration: selectedPackage.duration,
    view: selectedPackage.view
  };

  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  window.location.href = "Bookings.html";
}
