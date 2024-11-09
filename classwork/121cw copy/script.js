function printStars() {
  const numRows = document.getElementById("numRows").value;
  let output = "";

  for (let i = 1; i <= numRows; i++) {
    output += "* ".repeat(i).trim() + "\n";
  }

  document.getElementById("output").textContent = output;
}
