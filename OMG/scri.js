
function bar() {
  document.getElementById('sidebar').classList.remove('active');
}

function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

const benefitsCard= [
  {
    title: "Benefits",
    description: "The world-famous twin skyscrapers offering stunning city views from the sky bridge.",
    highlights: ["Sky Bridge", "Observation Deck", "Photography"]
  },
  {
    title: "Elite Networking Circle",
    description: "A curved pedestrian bridge with breathtaking views of mountains and sea.",
    highlights: ["Scenic views", "Cable car ride", "Photography"]
  }
]

function createAdvanCardHTML(benefitsContainer) {
  return `
    <div class="card">
      <div class="card-content">
        <h3>${benefitsContainer.title}</h3><br>
        <p>${benefitsContainer.description}</p>
        <div class="highlights"><strong>Highlights:</strong> ${benefitsContainer.highlights.join(", ")}</div>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const benefitsContainers = document.getElementById("benefits");
 
  if (benefitsContainers && typeof benefitsCard!== "undefined") {
    benefitsCard.forEach(benefitsContainer => {
      benefitsContainers.innerHTML += createAdvanCardHTML(benefitsContainer);
    });
  }
});

let currentIndex = 0;
    let autoSlideInterval = null;
    let slideWidth = 0;

    document.addEventListener('DOMContentLoaded', () => {
      const slider = document.getElementById('slider');
      const slides = slider.querySelector('.slides');
      const slideEls = Array.from(slides.querySelectorAll('.slide'));
      const dots = Array.from(document.querySelectorAll('.dot'));
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');

      const totalSlides = slideEls.length;

      // Set slide sizes so each slide exactly equals slider width (pixel-accurate)
      function setSizes() {
        slideWidth = slider.clientWidth;
        slideEls.forEach(el => { el.style.minWidth = slideWidth + 'px'; });
        // Immediately apply transform according to current index (no animation)
        slides.style.transition = 'none';
        slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        // force a reflow then restore transition so next transition is smooth
        void slides.offsetWidth;
        slides.style.transition = 'transform 0.6s ease-in-out';
      }

      function updateIndicators() {
        dots.forEach((d,i) => d.classList.toggle('active', i === currentIndex));
      }

  function showSlide(index) {
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  // Change this line - use 100% instead of 25%
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateIndicators();
}
      function nextSlide() { showSlide(currentIndex + 1); }
      function prevSlide() { showSlide(currentIndex - 1); }
      function goToSlide(i) { showSlide(i); }

      // Autoplay
      function startAuto() {
        stopAuto();
        autoSlideInterval = setInterval(() => nextSlide(), 4000);
      }
      function stopAuto() {
        if (autoSlideInterval) { clearInterval(autoSlideInterval); autoSlideInterval = null; }
      }

      // Wire events
      nextBtn.addEventListener('click', () => { nextSlide(); startAuto(); });
      prevBtn.addEventListener('click', () => { prevSlide(); startAuto(); });
      dots.forEach(d => d.addEventListener('click', (e) => goToSlide(Number(e.currentTarget.dataset.index))));

      slider.addEventListener('mouseenter', stopAuto);
      slider.addEventListener('mouseleave', startAuto);

      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        else if (e.key === 'ArrowRight') nextSlide();
      });

      // Recalculate sizes on load and resize
      window.addEventListener('resize', () => { setSizes(); });

      // Init
      setSizes();
      updateIndicators();
      startAuto();
    });
