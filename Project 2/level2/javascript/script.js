let currentSlideIndex = 0;
let interval = 0;

const slides = document.getElementsByClassName("carousel-slide");
const dots = document.getElementsByClassName("dot");

function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-active", "");
  }

  slides[index].style.display = "block"; // Show the current slide
  dots[index].className += " dot-active"; // Activate the current dot
}

showSlide(currentSlideIndex);

function changeSlide(n) {
  currentSlideIndex += n;
  if (currentSlideIndex > slides.length - 1) currentSlideIndex = 0;
  if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;
  showSlide(currentSlideIndex);
}

function setCurrentSlide(n) {
  currentSlideIndex = n; // Set the current slide index directly
  showSlide(currentSlideIndex);
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(() => {
    changeSlide(1);
  }, 3000);
}

function openPopup() {
  clearInterval(interval); // Stop the current carousel
  const modal = document.getElementById("imagePopup");
  const popupImage = document.getElementById("popup-image");
  popupImage.src = slides[currentSlideIndex].src; // Set the image in the popup
  modal.style.display = "flex";
}

function closePopup() {
  const modal = document.getElementById("imagePopup");
  modal.style.display = "none"; // Hide the popup
  resetInterval(); // Restart the carousel timer
}

for (let i = 0; i < slides.length; i++) {
  slides[i].onclick = function () {
    openPopup();
  };
}

document.querySelector(".close").onclick = closePopup;

resetInterval();
