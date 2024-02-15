const quoteContainer = document.getElementById('quote-container')
const newQuoteBtn = document.getElementById('newQuote')
const twitterBtn = document.getElementById('twitter')
const quoteText = document.getElementById('quoteText')
const author = document.querySelector('.author')
const loader = document.getElementById('loader')

// When page loads it will run the api once
getQuotes()
//stores the api values so that the page does not need to call the api multiple times
let quotes = [];

//this function will fun first so that it will get the data from the api
function loading(){
    loader.hidden = false
    quoteContainer.hidden = true
}
//this fuction will run second after the api gets recieved
function loadingComplete(){
    loader.hidden = true
    quoteContainer.hidden = false
}

newQuoteBtn.addEventListener('click', newQuote)

function newQuote(){
    // loading()
    //grab a random quote from array
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)]

    //text
    quoteText.innerHTML = newQuote.text
    //author
    author.innerHTML = newQuote.author

    loadingComplete()
}

//get quotes from api
async function getQuotes() {
    loading()
    const response = await fetch("https://jacintodesign.github.io/quotes-api/data/quotes.json");
    quotes = await response.json();
    newQuote()
  }


  // Tweet Quote
  twitterBtn.addEventListener('click' , () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${author.innerText}`;
    window.open(twitterUrl, '_blank');
})