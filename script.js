const quoteElement = document.getElementById("quote");
const inputArea = document.getElementById("inputArea");
const startButton = document.getElementById("startButton");
const resultElement = document.getElementById("result");

let currentQuote = "";
let startTime;

async function fetchRandomQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    currentQuote = data.content;
    quoteElement.textContent = currentQuote;
    inputArea.value = "";
    resultElement.textContent = "";
    startButton.disabled = true;
    inputArea.disabled = false;
    inputArea.focus();
    startTime = new Date();
  } catch (error) {
    console.error("Error fetching quote:", error);
    quoteElement.textContent = "An error occurred while fetching the quote.";
  }
}

function checkTyping() {
  const typedText = inputArea.value.trim();

  if (typedText === currentQuote) {
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000;
    const wordsTyped = typedText.split(" ").length;
    const typingSpeed = Math.round(wordsTyped / (timeTaken / 60));

    resultElement.textContent = `Kecepatan mengetik kamu adalah : ${typingSpeed} WPM`;
    startButton.disabled = false;
    inputArea.disabled = true;
  } else {
    resultElement.textContent = "";
  }
}

startButton.addEventListener("click", fetchRandomQuote);
inputArea.addEventListener("input", checkTyping);
