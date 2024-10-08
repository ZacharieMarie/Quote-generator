const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterBtn = document.getElementById("twitter")
const newQuoteBtn = document.getElementById("new-quote")
// Get quotes from api
let apiQuote = [];
async function getQuotes (){
    const apiUrl = "https://api.quotable.io/random"
    try {
        const response = await fetch(apiUrl);
        apiQuote = await response.json();
        //Check if the author is not null
        if(apiQuote.author == null){
            quoteAuthor.textContent = "Unknown"
        }else{
            quoteAuthor.textContent = apiQuote.author
        }

        //check for the length of the quote

        if(apiQuote.content.length > 56){
            quoteText.classList.add('long-quote')
        }else{
            quoteText.classList.remove('long-quote')
        }
        quoteText.textContent = apiQuote.content

    } catch (error){
        
    }
}

function tweetQuote(){
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(tweetUrl, '_blank');
}

//Event Listener 

twitterBtn.addEventListener("click", tweetQuote);
newQuoteBtn.addEventListener("click", getQuotes)

getQuotes()


// choose a categorie randomly

