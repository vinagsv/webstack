const greenBtn = document.getElementById("greenBtn");
const redBtn = document.getElementById("redBtn");
const blueBtn = document.getElementById("blueBtn");
const randomBtn = document.getElementById("randomBtn");

function setColor(color) {
  document.body.style.backgroundColor = color;
}

greenBtn.addEventListener("click", () => setColor("green"));
redBtn.addEventListener("click", () => setColor("red"));
blueBtn.addEventListener("click", () => setColor("blue"));
randomBtn.addEventListener("click", () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  setColor(randomColor);
});
