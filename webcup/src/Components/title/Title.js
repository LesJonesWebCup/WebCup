
import React from "react";
import "./Title.css"

function revealQuote(isFirstTime) {
    const quote = document.getElementById("quote");
    const quotePosition = quote.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (quote.classList.contains("quote-idle")) {
        if (quotePosition < screenPosition) {
            quote.classList.remove("quote-idle");
            quote.classList.add("quote-appear");
        }
    } else {
        if (quotePosition > screenPosition) {
            quote.classList.remove("quote-appear");
            quote.classList.add("quote-disappear");
        } else {
          quote.classList.add("quote-appear")
          quote.classList.remove("quote-disappear")
        }
    }
}

function getQuote() {
    let quotes = [
      "\"Dreams are illustrations... from the book your soul is writing about you.\" - Marsha Norman",
      "\"All our dreams can come true, if we have the courage to pursue them.\" - Walt Disney",
      "\"Dreams are the touchstones of our character.\" - Henry David Thoreau",
      "\"The future belongs to those who believe in the beauty of their dreams.\" - Eleanor Roosevelt",
      "\"Dreams are often most profound when they seem the most crazy.\" - Sigmund Freud",
      "\"Dreams are the language of the subconscious.\" - Deepak Chopra"
    ]

    var randomIndex = Math.floor(Math.random() * quotes.length);
    window.addEventListener("scroll", revealQuote, false);
    return quotes[randomIndex];
}

function Title() {
    return (
      <div className="Title container">
        <h1>Découvrez des<br /> <span>perspectives fascinantes</span> <br />sur votre futur</h1>
        <span id="quote" className="quote-idle">
          <p>
            {getQuote()}
          </p>
        <p className="arrow">&#8595;</p>
        </span>
      </div>
    );
}

export default Title;