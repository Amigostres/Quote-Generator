const newQuoteBtn = document.getElementById('newQuote');
const quoteText = document.getElementById('quoteText')

newQuoteBtn.addEventListener('click', () => {
    quoteText.innerText = 'hi'
    getQuotes()
} )

function newQuote(){
    //grab a random quote from array
    const newQuote = quotes[Math.floor(Math.random(Math.random() * quotes.length))]
    console.log(newQuote);
}

//get quotes from api
async function getQuotes() {
    const response = await fetch("https://jacintodesign.github.io/quotes-api/data/quotes.json");
    const quotes = await response.json();
    newQuote()
  }
