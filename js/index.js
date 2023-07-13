var quotes = [
{
quote:`"Be yourself; everyone else is already taken."`,
owner:`- Oscar Wilde`,
},
{
  quote:`"We don't see things as they are, we see them as we are."`,
  owner:`- Anaïs Nin`,
},
{
  quote:`"Life isn't about finding yourself. Life is about creating yourself."`,
  owner:`- George Bernard Shaw`,
},
{
  quote:`"Always do what you are afraid to do."`,
  owner:`- Ralph Waldo Emerson`,
},
{
  quote:`"If you remember me, then I don't care if everyone else forgets."`,
  owner:`- Haruki Murakami`,
},
{
  quote:`"You only live once, but if you do it right, once is enough."`,
  owner:`― Mae West`,
},
{
  quote:`"Don’t walk in front of me… I may not follow<br>
  Don’t walk behind me… I may not lead<br>
  Walk beside me… just be my friend"`,
  owner:`- Albert Camus`,
},
{
  quote:`"Never tell the truth to people who are not worthy of it."`,
  owner:`― Mark Twain`,
},
];

var randomNum;
var lastNum;
function showQuotes() {
    do {
      randomNum = Math.floor(Math.random() * quotes.length);
    } while (randomNum == lastNum);
    document.getElementById('quotesElement').innerHTML = quotes[randomNum].quote;
    document.getElementById('owners').innerHTML = quotes[randomNum].owner;
    lastNum = randomNum;
  }
