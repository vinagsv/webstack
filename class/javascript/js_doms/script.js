//example
//access the element

document
  .getElementById("changeTextButtonn")
  .addEventListener("click", function () {
    let para = document.getElementById("myParagraph");
    //console.log(para);
    para.textContent = "The text has been changed!";
  });

//example 2

document
  .querySelector("#highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

//example 3
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
});

//exaple 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newList = document.createElement("li");
  newList.textContent = "Paneer";
  document.getElementById("shoppingList").appendChild(newList);
});

//example 5

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("tasklist");
    taskList.lastElementChild.remove();
  });

//example 6
document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("welcome");
  });

//example 7
document.getElementById("teaList").addEventListener("click", function (event) {
  alert(`You have selected ${event.target.textContent} `);
});

//example 8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let feedback = document.getElementById("feedbackInput").value;

    document.getElementById("feedbackDisplay");
    feedbackDisplay.textContent = `Your feedback: ${feedback}`;
  });

// example 9
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

//example 10

document
  .getElementById("toggleHghLight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");

    descriptionText.classList.toggle("highlight");
  });

//example 11
console.log(document.getElementById("example-10"));
console.log(document.getElementsByClassName("para"));
