const newQuoteBtn = document.getElementById('newQuote');
const quoteText = document.getElementById('quoteText')
const author = document.querySelector('.author')

newQuoteBtn.addEventListener('click', getQuotes)

function newQuote(quotes){
    //grab a random quote from array
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)]
    console.log(newQuote);

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
