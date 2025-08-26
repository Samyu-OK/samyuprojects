function bar() {
  document.getElementById('sidebar').classList.remove('active');
}

function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

/*let currentIndex = 0;
const totalSlides = 4;

function showSlide(index) {
  const slides = document.querySelector('.slides');

  if (index >= totalSlides) {
    currentIndex = 0;
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
}, 4000);*/
/*
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

function createStars() {
    const starsContainer = document.getElementById('stars-container');
    const numStars = 100;
    
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random animation timing
        star.style.animationDelay = `${Math.random() * 3}s`;
        star.style.animationDuration = `${2 + Math.random() * 2}s`;
        
        starsContainer.appendChild(star);
    }
}

// Initialize the animation when the page loads
document.addEventListener('DOMContentLoaded', function() {
    createStars();*/
    
    // Optional: Add click interaction to the globe
    const globe = document.querySelector('.globe');
    globe.addEventListener('click', function() {
        // Add a temporary faster rotation on click
        globe.style.animation = 'rotate 2s linear infinite';
        
        setTimeout(() => {
            globe.style.animation = 'rotate 10s linear infinite';
        }, 4000);
    });
    
    // Optional: Add mouse hover effects
    const globeContainer = document.querySelector('.globe-container');
    
    globeContainer.addEventListener('mouseenter', function() {
        const glowRing = document.querySelector('.glow-ring');
        glowRing.style.transform = 'scale(1.1)';
        glowRing.style.transition = 'transform 0.3s ease';
    });
    
    globeContainer.addEventListener('mouseleave', function() {
        const glowRing = document.querySelector('.glow-ring');
        glowRing.style.transform = 'scale(1)';
    });


// Optional: Add window resize handler for responsive adjustments
window.addEventListener('resize', function() {
    // You can add responsive logic here if needed
    console.log('Window resized');
});