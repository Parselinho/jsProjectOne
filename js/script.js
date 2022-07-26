let quotes = 
[
  {
    quote: "Tell me and I forget, teach me and I may remember, involve me and I learn",
    source: "Xun Kuang",
    year: -454 ,
    citation: "one of the quotes that has been added to the Xunzi old book",
    tags: "study"
  },
  {
    quote: "Learning never exhausts the mind",
    source: "Leonardo da Vinci",
    year: 1499 ,
    citation: "Leonardo answered a friend question, with this answer",
    tags: "study"
  },
  {
    quote: "I Am Always Ready to Learn, Although I Do Not Always Like Being Taught",
    source: "Winston Churchill",
    year: 1952 ,
    citation: "Speaking in the House of Commons in London",
    tags: "study"
  },
  {
    quote: "In life all good things pass. But even the bad things, they also pass",
    source: "Menachem Begin",
    year: 1967 ,
    citation: "ex-prime minister of Israel, tallking to the people of Israel in the middle of a war",
    tags: "inspiration"
  },
  {
    quote: "The world is nothing but a large children's room, full of various amusements: wealth, honor, health, life. You should learn from the children: you came across one toy, cried for a moment, and immediately took another toy and rested your soul",
    source: "Ze'ev Jabotinsky",
    year: 1921 ,
    citation: "tallking in the World Zionist Congress in Czechoslovakia",
    tags: "inspiration"
  },
  {
    quote: "Life is like riding a bicycle: you have to move forward all the time without stopping, so as not to lose your balance",
    source: "Albert Einsiten",
    year: 1930 ,
    citation: "Writing to his son Eduard",
    tags: "inspiration"
  }
];

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

document.getElementById('load-quote').addEventListener("click", printQuote, false);