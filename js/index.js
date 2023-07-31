let quotes = [];
async function response() {
  let apiRespone = await fetch(`https://api.quotable.io/quotes/random?limit=5`);
  quotes = await apiRespone.json();
}
async function main() {
await response();
}
main()
var randomNum;
var lastNum;
function showQuotes(){
  do {
    randomNum = Math.floor(Math.random() * quotes.length);
  } while (randomNum == lastNum);
  document.getElementById("quotesElement").innerHTML = quotes[randomNum].content;
  document.getElementById("owners").innerHTML = quotes[randomNum].author;
  lastNum = randomNum;
}
