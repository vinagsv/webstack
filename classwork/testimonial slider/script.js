const images = [
  {
    src: "./assets/pexels-justin-shaifer-501272-1222271.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, praesentium! Deleniti vero iste recusandae mollitia facilis alias nulla vel ipsam id molestias totam, dolore suscipit officiis possimus ratione, blanditiis velit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi odio culpa, dolore pariatur maiores nobis quas fuga obcaecati.",
    author: "Simon Robben",
  },
  {
    src: "./assets/pexels-olly-733872.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, praesentium! Deleniti vero iste recusandae mollitia facilis alias nulla vel ipsam id molestias totam, dolore suscipit officiis possimus ratione, blanditiis velit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi odio culpa, dolore pariatur maiores nobis quas fuga obcaecati.",
    author: "Emily Zhang",
  },
  {
    src: "./assets/pexels-simon-robben-55958-614810.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, praesentium! Deleniti vero iste recusandae mollitia facilis alias nulla vel ipsam id molestias totam, dolore suscipit officiis possimus ratione, blanditiis velit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi odio culpa, dolore pariatur maiores nobis quas fuga obcaecati.",
    author: "John Doe",
  },
  {
    src: "./assets/pexels-stefanstefancik-91227.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, praesentium! Deleniti vero iste recusandae mollitia facilis alias nulla vel ipsam id molestias totam, dolore suscipit officiis possimus ratione, blanditiis velit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi odio culpa, dolore pariatur maiores nobis quas fuga obcaecati. Cum quam deleniti quisquam ab similique rerum repudiandae ex ratione obcaecati.",
    author: "cpt jack sparrow",
  },
];
let currentIndex = 0;
const imageElement = document.getElementById("image");
const descriptionElement = document.getElementById("description");
const authorElement = document.getElementById("author");

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  imageElement.src = images[currentIndex].src;
  descriptionElement.textContent = images[currentIndex].text;
  authorElement.textContent = images[currentIndex].author;
}

// setInterval(changeImage, 10000);
setInterval(changeImage, 2000);
