const newQuoteBtn = document.getElementById('newQuote');
const quoteText = document.getElementById('quoteText')
const author = document.querySelector('.author')
//when page loads it will run the api once
onload = getQuotes
newQuoteBtn.addEventListener('click', getQuotes)
function newQuote(quotes){
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
    const quotes = await response.json();
    newQuote(quotes)
  }
