import React, { useState } from 'react';
import QuoteCard from './quotecards';
import axios from 'axios';

function App() {
  const init = () =>{
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=num')
      .then((response) => response.data)
      .then((data) => {
        setQuote(data[0]);
      });
  }

  const [quote, setQuote] = useState(init);

  const getQuote = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=num')
      .then((response) => response.data)
      .then((data) => {
        setQuote(data[0]);
      });


  };

  return (
    <div>
       <button type="button" onClick={getQuote}>Get quote</button>
        <QuoteCard {...quote}/>
    </div>
  );
}

export default App;
