// quotes array 
let quotes = 
[
  // objects inside array : 
  {
    quote: "Tell me and I forget, teach me and I may remember, involve me and I learn",
    source: "Xun Kuang",
    year: -454 ,
    tags: "#study"
  },
  {
    quote: "Learning never exhausts the mind",
    source: "Leonardo da Vinci",
    year: 1499 ,
    tags: "#study"
  },
  {
    quote: "I Am Always Ready to Learn, Although I Do Not Always Like Being Taught",
    source: "Winston Churchill",
    year: 1952 ,
    citation: "Speaking in the House of Commons in London",
  },
  {
    quote: "In life all good things pass. But even the bad things, they also pass",
    source: "Menachem Begin",
    year: 1967 ,
    tags: "#inspiration"
  },
  {
    quote: "The world is nothing but a large children's room, full of various amusements: wealth, honor, health, life. You should learn from the children: you came across one toy, cried for a moment, and immediately took another toy and rested your soul",
    source: "Ze'ev Jabotinsky",
    year: 1921 ,
    tags: "#inspiration"
  },
  {
    quote: "Life is like riding a bicycle: you have to move forward all the time without stopping, so as not to lose your balance",
    source: "Albert Einsiten",
    year: 1930 ,
    citation: "Writing to his son Eduard",
  }
];
 // return random object from the quotes array
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * (quotes.length));
  return quotes[randomNumber];
}

function printQuote() {
  let randomQuote = getRandomQuote();
  // printing the quote with the source
  let htmlString = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;
  // printing citation of quote
   if (randomQuote.citation) {
    htmlString += `<span class="citation"> ${randomQuote.citation}, </span>`;
   }
   // print year of quote
   if (randomQuote.year) {
    htmlString += `<span class="year"> ${randomQuote.year}, </span>`;
   }
   // print the tags of the quote
   if (randomQuote.tags) {
    htmlString += `<span class="tags"> ${randomQuote.tags}.</span>`;
   }
   // adding the end p element
   htmlString += `</p>`
   // printing the thing we wrote above
   document.getElementById('quote-box').innerHTML = htmlString; 
}
// refresh the printquote every 15 seconds
setInterval(printQuote, 15000);

// changing color while clicking the button
function changeColor() {
  document.body.style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
}
// event listener for pressing the button (false to make bubbling phase [ after get to all children of elem])
document.getElementById('load-quote').addEventListener("click", printQuote, false);