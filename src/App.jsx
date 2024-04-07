import { useState } from 'react';

const quoteData = [
	{
		text: "We cannot become what we need to be by remaining what we are.",
		author: "Max Depree"
	},
	{
		text:
			"You are successful the moment you start moving toward a worthwhile goal.",
		author: "Chuck Carlson"
	},
	{
		text: "If you have the courage to begin, you have the courage to succeed.",
		author: "David Viscott"
	},
	{
		text:
			"If you want something you’ve never had, you must do something you’ve never done.",
		author: "Thomas Jefferson"
	},
	{ 
    text: "I never lose. I either win or learn.", 
    author: "Nelson Mandela" 
  },
	{
		text: "You miss 100% of the shots you don’t take.",
		author: "Wayne Gretzky"
	},
	{
		text: "The life you want begins by embracing the life you have.",
		author: "Oprah"
	},
	{
		text:
			"Life is like a camera. Focus on what’s important, Capture the good times, Develop from the negatives, and if things don’t work out, Take another shot.",
		author: "unknown"
	},
	{
		text:
			"If you think you are too small to make a difference, try sleeping with a mosquito.",
		author: "Dalai Lama"
	},
	{
		text: "It always seems impossible until it’s done.",
		author: "Nelson Mandela"
	},
	{
		text:
			"If you don’t like something, change it. If you can’t change it, change your attitude.",
		author: "Maya Angelou"
	},
	{
		text: "It does not matter how slowly you go, as long as you do not stop.",
		author: "Confucius"
	},
	{
		text: "Don’t cry because it’s over, smile because it happened.",
		author: "Dr. Seuss"
	},
	{
		text: "I have not failed. I’ve just found 10,000 ways that won’t work.",
		author: "Thomas Edison"
	},
	{
		text: "No one can make you feel inferior without your consent.",
		author: "Eleanor Roosevelt"
	},
	{ text: "Winners find a way, losers make excuses.", 
    author: "F.D.Roosevelt" },
	{
		text: "No Fear. No Hesitation. No Surprise. No Doubt.",
		author: "Miyamoto Musashi"
	},
	{
		text: "Never trust your fears; they don’t know your strength.",
		author: "Athena Singh"
	},
	{
		text: "If you cannot be positive, then at least be quiet.",
		author: "Joel Osteen"
	},
	{
		text: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
		author: "Thomas A. Edison"
	},
	{
		text: "In the end, it's not the years in your life that count. It's the life in your years.",
		author: "Abraham Lincoln"
	},
	{
		text: "The only impossible journey is the one you never begin.",
		author: "Tony Robbins"
	},
	{
		text: "Whether you think you can or you think you can't, you're right.",
		author: "Henry Ford"
	},
	{
		text: "Everything you’ve ever wanted is on the other side of fear.",
		author: "George Addair"
	}
];

const getRandomNumber = () =>
  Math.floor(Math.random() * quoteData.length);

function GenerateQuote() {
  const [quote, setQuote] = useState(quoteData[getRandomNumber()]);

  const handleNewQuote = () => {
    setQuote(quoteData[getRandomNumber()]);
  }

  return (
    <div id="quote-box">
      <p id="text">{quote.text}</p>
      <p id="author">{quote.author}</p>
      <div id="btn-container">
        <button id="new-quote" onClick={handleNewQuote}>New quote</button>
        <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank">
					<i className="fa-brands fa-twitter" title="Tweet quote" aria-hidden="true"></i>
					<span className="fa-sr-only">Tweet quote</span>
				</a>
      </div>
    </div>
  )
}

function App() {
  return (
    <main>
      <h1>Inspirational Quotes</h1>
      <GenerateQuote />
    </main>
  )
}

export default App;
