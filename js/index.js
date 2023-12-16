let quotes = [];
async function response() {
  let apiRespone = await fetch(`https://api.quotable.io/quotes/random?limit=5`);
  quotes = await apiRespone.json();
}

response();

var randomNum;
var lastNum;
function showQuotes() {
  do {
    randomNum = Math.floor(Math.random() * quotes.length);
  } while (randomNum == lastNum);
  document.getElementById("quotesElement").innerHTML =
    quotes[randomNum].content;
  document.getElementById("owners").innerHTML = quotes[randomNum].author;
  document.getElementById("read").style.display = "inline";
  lastNum = randomNum;
}

document.getElementById("read").addEventListener("click", () => {
  let text = document.getElementById("quotesElement").innerHTML;
  readQuote(text);
});

function readQuote(quote) {
  let utterance = new SpeechSynthesisUtterance(quote);
  utterance.pitch = 1.2;
  speechSynthesis.speak(utterance);
}
