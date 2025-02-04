// let currentSlideIndex = 0;

// function showSlide(index) {
//   const slides = document.getElementsByClassName("carousel-slide");
//   console.log(slides);

//   const dots = document.getElementsByClassName("dot");
//   console.log(dots);

//   //   if (index >= slides.length) {
//   //     currentSlideIndex = 0;
//   //   } else if (index < 0) {
//   //     currentSlideIndex = slides.length - 1;
//   //   } else {
//   //     currentSlideIndex = index;
//   //   }

//   if (index < 0) {
//     currentSlideIndex = slides.length - 1;
//   }

//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   for (let i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace("dot-active", "");
//   }

//   slides[currentSlideIndex].style.display = "block";

//   dots[currentSlideIndex].className += " dot-active"; // give space and then write it will be dot dot active
// }

// function changeSlide(n) {
//   showSlide((currentSlideIndex += n));
// }

// function currentSlide(n) {
//   showSlide((currentSlideIndex = n));
// }

// showSlide(currentSlideIndex);

let currentSlideIndex = 0;

const slides = document.getElementsByClassName("carousel-slide");
const dots = document.getElementsByClassName("dot");

function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < slides.length; i++) {
    dots[i].className = dots[i].className.replace("dot-active", "");
  }

  slides[currentSlideIndex].style.display = "block";
  dots[currentSlideIndex].className += " dot-active";
}

showSlide(currentSlideIndex);

function changeSlide(n) {
  currentSlideIndex += n;
  if (currentSlideIndex > slides.length - 1) currentSlideIndex = 0;
  if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;
  showSlide(currentSlideIndex);
}

function currentSlide(n) {
  showSlide((currentSlideIndex = n));
}
