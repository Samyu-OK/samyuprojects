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

const countries= [
  { name: "Greece", img: "img/greek.jpg" },
  { name: "United Kingdom", img: "img/l.jpg" },
  { name: "Paris", img: "img/pa.jpg" },
  { name: "Georgia", img: "img/ge1.jpg" },
  { name: "Germany", img: "img/de1.jpg" },
  { name: "Netherlands", img: "img/ne8.jpg" },
  { name: "Spain", img: "img/sp1.jpg" },
  { name: "Italy", img: "img/it1.jpg" }
  ];
function createCountriesHTML(des) {
  const pageName = des.name.toLowerCase().replace(/\s+/g, '') + ".html";
  return `
    <div class="card1">
      <a href="${pageName}">
        <img src="${des.img}" class="image" />
      </a>
      <h2 class="txt">${des.name}</h2>
    </div>
  `;
}


document.addEventListener("DOMContentLoaded", () => {
  const countryContainer = document.getElementById("cont-container");

  if (countryContainer) {
    countries.forEach(des => {
      countryContainer.innerHTML += createCountriesHTML(des);
    });
  } else {
    console.warn("Missing #cont-container in your HTML");
  }
});
