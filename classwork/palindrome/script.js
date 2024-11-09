function checkPalindrome() {
  const wordInput = document.getElementById("wordInput");
  const word = wordInput.value.toLowerCase().replace(/\s/g, "");
  const reversedWord = word.split("").reverse().join("");

  if (word === reversedWord) {
    alert(`${wordInput.value} is a palindrome!`);
  } else {
    alert(`${wordInput.value} is not a palindrome.`);
  }
}
