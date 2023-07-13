var qoutes = [
{
qoute:`"Be yourself; everyone else is already taken."`,
owner:`- Oscar Wilde`,
},
{
  qoute:`"We don't see things as they are, we see them as we are."`,
  owner:`- Anaïs Nin`,
},
{
  qoute:`"Life isn't about finding yourself. Life is about creating yourself."`,
  owner:`- George Bernard Shaw`,
},
{
  qoute:`"Always do what you are afraid to do."`,
  owner:`- Ralph Waldo Emerson`,
},
{
  qoute:`"If you remember me, then I don't care if everyone else forgets."`,
  owner:`- Haruki Murakami`,
},
{
  qoute:`"You only live once, but if you do it right, once is enough."`,
  owner:`― Mae West`,
},
{
  qoute:`"Don’t walk in front of me… I may not follow<br>
  Don’t walk behind me… I may not lead<br>
  Walk beside me… just be my friend"`,
  owner:`- Albert Camus`,
},
{
  qoute:`"Never tell the truth to people who are not worthy of it."`,
  owner:`― Mark Twain`,
},
];

var randomNum;
var lastNum;
function showQuotes() {
    do {
      randomNum = Math.floor(Math.random() * qoutes.length);
    } while (randomNum == lastNum);
    document.getElementById('quotesElement').innerHTML = qoutes[randomNum].qoute;
    document.getElementById('owners').innerHTML = qoutes[randomNum].owner;
    lastNum = randomNum;
  }
