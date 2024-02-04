import React, { useState } from 'react';
import styles from './BodyComponent.module.css';


function BodyComponent ()  {
  const [quote, setQuote] = useState({"content": "Welcome to the random quote generator.", "author": "Get a quote here bellow"});
  const [lastQuotes, setLastQuotes] = React.useState<any[]>([]);

  const getQuote = async () => {
      fetch("http://localhost:4200/quote")
          .then((response) => response.json())
          .then((quote) => {
            setLastQuotes(lastQuotes => [...lastQuotes, quote])
            if (lastQuotes.length > 100) {
              let [, ...all] = lastQuotes;
              setLastQuotes(lastQuotes => all)
            }
            if (quote in lastQuotes) {
              getQuote();
            } else {
              setQuote(quote);
            }
          });
  };
  const getNewQuote = () => {
    return getQuote();
  };

  return (<div className={styles.BodyComponent} data-testid="BodyComponent">
    <p className={styles.quote}>"{quote.content}"</p>
    <p className={styles.author}>~ {quote.author} ~</p>
    <button onClick={getNewQuote}>Next quote</button>
  </div>);
};

export default BodyComponent;
