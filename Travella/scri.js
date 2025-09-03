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
  {
    name: "HongKong",
    img: "img/victoria.jpg",
  },
  {
    name: "Greece",
    img: "img/greek.jpg",
    },
  {
    name: "Japan",
    img: "img/Kyoto.jpg",
    },
  {
    name: "Maldives",
    img: "img/vacation.jpg",
    },
  {
    name: "United Kingdom",
    img: "img/l.jpg",
    
  },
  {
    name: "Paris",
    img: "img/pa.jpg",
    },
  {
    name: "India",
    img: "img/i.jpg",
   },
  {
    name: "China",
    img: "img/ch.jpg",
     },
{
  name: "Georgia",
  img: "img/ge1.jpg",
},
{
  name: "Seychelles",
  img: "img/mau5.jpg",
},
{
  name: "Iceland",
  img: "img/ice4.jpg",
},
{
  name: "Thailand",
  img: "img/t1.jpg",
},
{
  name: "Germany",
  img: "img/g2.jpg",
},
{
  name: "Vietnam",
  img: "img/v3.jpg",
},
{
  name: "UAE",
  img: "img/d2.jpg",
},
{
  name: "Mauritius",
  img: "img/mau2.jpg",
},
{
  name: "Netherlands",
  img: "img/n4.jpg",
},
{
  name: "Finland",
  img: "img/f3.jpg",
},
{
  name: "Indonesia",
  img: "img/bali.jpg",
},
{
  name: "Switzerland",
  img: "img/sw1.jpg",
},
{
  name: "Fiji",
  img: "img/mau1.jpg",
},
{
  name: "Spain",
  img: "img/s2.jpg",
},
{
  name: "Italy",
  img: "img/ven.jpg",
},
{
  name: "Malaysia",
  img: "img/ma1.jpg",
},

];

function createCountriesHTML(des) {
  const pageName = des.name.toLowerCase().replace(/\s+/g, '') + ".html";
  return `
    <div class="card1">
      <a href="${pageName}">
        <img src="${des.img}" class="image" />
        <h2 class="txt">${des.name}</h2>
      </a>
    </div>
  `;
}


document.addEventListener("DOMContentLoaded", () => {
  const countryContainer = document.getElementById("cont-container");

  if (countryContainer) {
    countries.forEach(des => {
      countryContainer.innerHTML += createCountriesHTML(des);
    });
  }
});
