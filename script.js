const quoteContainer = document.getElementById('quote-container')
const newQuoteBtn = document.getElementById('newQuote')
const quoteText = document.getElementById('quoteText')
const author = document.querySelector('.author')
const loader = document.getElementById('loader')

// When page loads it will run the api once
getQuotes()
//stores the api values so that the page does not need to call the api multiple times
let quotes = [];

function loading(){
    loader.hidden = false
    quoteContainer.hidden = true
}
function loadingComplete(){
    loader.hidden = true
    quoteContainer.hidden = false
}

newQuoteBtn.addEventListener('click', newQuote)

function newQuote(){
    //grab a random quote from array
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)]

    //text
    quoteText.innerHTML = newQuote.text
    //author
    author.innerHTML = newQuote.author
}

//get quotes from api
async function getQuotes() {
    const response = await fetch("https://jacintodesign.github.io/quotes-api/data/quotes.json");
    quotes = await response.json();
    newQuote()
  }
