
let authorName = document.getElementById("author-name");
getQuote();
let button = document.getElementById('quoteButton');
let quote = document.getElementById('quote');

async function getQuote() {
  let res = await fetch("https://type.fit/api/quotes");
  let data = await res.json();

  let getRandomQuote = Math.floor(Math.random() * data.length);
  if (data[getRandomQuote].author == null) {
    authorName.innerHTML = "Unknown";
  } else {
    authorName.innerHTML = data[getRandomQuote].author;
  }
  quote.innerHTML = `${data[getRandomQuote].text}`;
}

button.addEventListener("click", getQuote);



//Orginal code

//let quotes = ["Life isn’t about getting and having, it’s about giving and being.", "Life isn’t about getting and having, it’s about giving and being." , "Strive not to be a success, but rather to be of value.", "I attribute my success to this: I never gave or took any excuse.", "You miss 100% of the shots you don’t take.", "Definiteness of purpose is the starting point of all achievement.",
// "We must balance conspicuous consumption with conscious capitalism.", "Life is what happens to you while you’re busy making other plans.", "We become what we think about.", "The mind is everything. What you think you become.", "An unexamined life is not worth living.", "Eighty percent of success is showing up.", "Your time is limited, so don’t waste it living someone else’s life.",
// "Winning isn’t everything, but wanting to win is.", "I am not a product of my circumstances. I am a product of my decisions.",

// ]


// function quoteSelector(){
//   let randomQuote = Math.floor(Math.random() * quotes.length);
//   return quotes[randomQuote];
// };

// function showQuote(){
//   quote.innerHTML = quoteSelector();
//   //button.innerHTML = "Enjoy!";
//   button.style.cursor = "default";
//   //button.removeEventListener ('click', showFortune)
  

// }

// button.addEventListener('click', showQuote);