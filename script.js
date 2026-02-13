// Slide 3 image slider logic
let slide3Index = 0;
const slide3Imgs = () =>
  document.querySelectorAll("#slide-3 .slider-images .slider-img");

function showSlide3Img(idx) {
  const imgs = slide3Imgs();
  imgs.forEach((img, i) => {
    img.classList.toggle("active", i === idx);
  });
}

function prevSlide3Img() {
  const imgs = slide3Imgs();
  slide3Index = (slide3Index - 1 + imgs.length) % imgs.length;
  showSlide3Img(slide3Index);
}

function nextSlide3Img() {
  const imgs = slide3Imgs();
  slide3Index = (slide3Index + 1) % imgs.length;
  showSlide3Img(slide3Index);
}

// Auto-scroll for slide 3
function autoScrollSlide3() {
  const imgs = slide3Imgs();
  slide3Index = (slide3Index + 1) % imgs.length;
  showSlide3Img(slide3Index);
}

// Slide 4 image slider logic
let slide4Index = 0;
const slide4Imgs = () =>
  document.querySelectorAll("#slide-4 .slider-images .slider-img");

function showSlide4Img(idx) {
  const imgs = slide4Imgs();
  imgs.forEach((img, i) => {
    img.classList.toggle("active", i === idx);
  });
}

function prevSlide4Img() {
  const imgs = slide4Imgs();
  slide4Index = (slide4Index - 1 + imgs.length) % imgs.length;
  showSlide4Img(slide4Index);
}

function nextSlide4Img() {
  const imgs = slide4Imgs();
  slide4Index = (slide4Index + 1) % imgs.length;
  showSlide4Img(slide4Index);
}

// Auto-scroll for slide 4
function autoScrollSlide4() {
  const imgs = slide4Imgs();
  slide4Index = (slide4Index + 1) % imgs.length;
  showSlide4Img(slide4Index);
}

// Initialize sliders on page load
// Slide 6 image slider logic
// Slide 7 image slider logic
// Slide 8 image slider logic
let slide8Index = 0;
const slide8Imgs = () =>
  document.querySelectorAll("#slide-8 .slider-images .slider-img");

function showSlide8Img(idx) {
  const imgs = slide8Imgs();
  imgs.forEach((img, i) => {
    img.classList.toggle("active", i === idx);
  });
}

// Auto-scroll for slide 8
function autoScrollSlide8() {
  const imgs = slide8Imgs();
  slide8Index = (slide8Index + 1) % imgs.length;
  showSlide8Img(slide8Index);
}

// Slide 9 image slider logic
let slide9Index = 0;
const slide9Imgs = () =>
  document.querySelectorAll("#slide-9 .slider-images .slider-img");

function showSlide9Img(idx) {
  const imgs = slide9Imgs();
  imgs.forEach((img, i) => {
    img.classList.toggle("active", i === idx);
  });
}

// Auto-scroll for slide 9
function autoScrollSlide9() {
  const imgs = slide9Imgs();
  slide9Index = (slide9Index + 1) % imgs.length;
  showSlide9Img(slide9Index);
}

// Slide 10 image slider logic
let slide10Index = 0;
const slide10Imgs = () =>
  document.querySelectorAll("#slide-10 .slider-images .slider-img");

function showSlide10Img(idx) {
  const imgs = slide10Imgs();
  imgs.forEach((img, i) => {
    img.classList.toggle("active", i === idx);
  });
}

// Auto-scroll for slide 10
function autoScrollSlide10() {
  const imgs = slide10Imgs();
  slide10Index = (slide10Index + 1) % imgs.length;
  showSlide10Img(slide10Index);
}

// Slide 11 image slider logic
let slide11Index = 0;
const slide11Imgs = () =>
  document.querySelectorAll("#slide-11 .slider-images .slider-img");

function showSlide11Img(idx) {
  const imgs = slide11Imgs();
  imgs.forEach((img, i) => {
    img.classList.toggle("active", i === idx);
  });
}

// Auto-scroll for slide 11
function autoScrollSlide11() {
  const imgs = slide11Imgs();
  slide11Index = (slide11Index + 1) % imgs.length;
  showSlide11Img(slide11Index);
}

// Slide 12 image slider logic
let slide12Index = 0;
const slide12Imgs = () =>
  document.querySelectorAll("#slide-12 .slider-images .slider-img");

function showSlide12Img(idx) {
  const imgs = slide12Imgs();
  imgs.forEach((img, i) => {
    img.classList.toggle("active", i === idx);
  });
}

// Auto-scroll for slide 12
function autoScrollSlide12() {
  const imgs = slide12Imgs();
  slide12Index = (slide12Index + 1) % imgs.length;
  showSlide12Img(slide12Index);
}

// Slide 13 image slider logic
let slide13Index = 0;
const slide13Imgs = () =>
  document.querySelectorAll("#slide-13 .slider-images .slider-img");

function showSlide13Img(idx) {
  const imgs = slide13Imgs();
  imgs.forEach((img, i) => {
    img.classList.toggle("active", i === idx);
  });
}

// Auto-scroll for slide 13
function autoScrollSlide13() {
  const imgs = slide13Imgs();
  slide13Index = (slide13Index + 1) % imgs.length;
  showSlide13Img(slide13Index);
}
let slide7Index = 0;
const slide7Imgs = () =>
  document.querySelectorAll("#slide-7 .slider-images .slider-img");

function showSlide7Img(idx) {
  const imgs = slide7Imgs();
  imgs.forEach((img, i) => {
    img.classList.toggle("active", i === idx);
  });
}

function prevSlide7Img() {
  const imgs = slide7Imgs();
  slide7Index = (slide7Index - 1 + imgs.length) % imgs.length;
  showSlide7Img(slide7Index);
}

function nextSlide7Img() {
  const imgs = slide7Imgs();
  slide7Index = (slide7Index + 1) % imgs.length;
  showSlide7Img(slide7Index);
}

// Auto-scroll for slide 7
function autoScrollSlide7() {
  const imgs = slide7Imgs();
  slide7Index = (slide7Index + 1) % imgs.length;
  showSlide7Img(slide7Index);
}
let slide6Index = 0;
const slide6Imgs = () =>
  document.querySelectorAll("#slide-6 .slider-images .slider-img");

function showSlide6Img(idx) {
  const imgs = slide6Imgs();
  imgs.forEach((img, i) => {
    img.classList.toggle("active", i === idx);
  });
}

function prevSlide6Img() {
  const imgs = slide6Imgs();
  slide6Index = (slide6Index - 1 + imgs.length) % imgs.length;
  showSlide6Img(slide6Index);
}

function nextSlide6Img() {
  const imgs = slide6Imgs();
  slide6Index = (slide6Index + 1) % imgs.length;
  showSlide6Img(slide6Index);
}

// Auto-scroll for slide 6
function autoScrollSlide6() {
  const imgs = slide6Imgs();
  slide6Index = (slide6Index + 1) % imgs.length;
  showSlide6Img(slide6Index);
}

// Initialize sliders on page load
document.addEventListener("DOMContentLoaded", () => {
  showSlide3Img(slide3Index);
  showSlide4Img(slide4Index);
  showSlide6Img(slide6Index);
  showSlide7Img(slide7Index);
  showSlide8Img(slide8Index);
  showSlide9Img(slide9Index);
  showSlide10Img(slide10Index);
  showSlide11Img(slide11Index);
  showSlide12Img(slide12Index);
  showSlide13Img(slide13Index);
  // Start auto-scroll for all carousel slides
  setInterval(autoScrollSlide3, 2000);
  setInterval(autoScrollSlide4, 2000);
  setInterval(autoScrollSlide6, 2000);
  setInterval(autoScrollSlide7, 2000);
  setInterval(autoScrollSlide8, 2000);
  setInterval(autoScrollSlide9, 2000);
  setInterval(autoScrollSlide10, 2000);
  setInterval(autoScrollSlide11, 2000);
  setInterval(autoScrollSlide12, 2000);
  setInterval(autoScrollSlide13, 2000);
});
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const music = document.getElementById("bgMusic");
const progress = document.getElementById("progress");

let current = 0;
const total = slides.length;

function updateProgress() {
  progress.innerText = `${current + 1} / ${total}`;
}

function updateButtons() {
  // Show back button from slide 2 onwards (index 1)
  if (current >= 1) {
    backBtn.style.display = "inline-block";
  } else {
    backBtn.style.display = "none";
  }

  // Hide next button on last slide
  if (current >= total - 1) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "inline-block";
  }
}

function updateEffects() {
  // Query effects dynamically since they are loaded from effects.html
  const slideEffects = document.querySelectorAll(".slide-effect");

  // Hide all effects first
  slideEffects.forEach((effect) => {
    effect.style.display = "none";
  });

  // Show effect for current slide (1-indexed)
  const currentEffect = document.getElementById(`effect-${current + 1}`);
  if (currentEffect) {
    currentEffect.style.display = "block";
  }
}

function fadeInMusic() {
  music.volume = 0;
  music.play();
  let fade = setInterval(() => {
    if (music.volume < 0.5) {
      music.volume += 0.02;
    } else {
      clearInterval(fade);
    }
  }, 200);
}

nextBtn.addEventListener("click", () => {
  if (current === 0) {
    fadeInMusic();
  }

  slides[current].classList.remove("active");
  current++;

  if (current < total) {
    slides[current].classList.add("active");
    updateProgress();
    updateEffects();
    updateButtons();
  }
});

backBtn.addEventListener("click", () => {
  if (current > 0) {
    slides[current].classList.remove("active");
    current--;
    slides[current].classList.add("active");
    updateProgress();
    updateEffects();
    updateButtons();
  }
});

// Initial state
updateEffects();
updateButtons();
