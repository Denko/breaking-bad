import React, { useState, useEffect } from 'react'
import Quote from './components/Quote';
import Spinner from './components/Spinner';

const initialQuote = {
  text: 'Esta es una frase de Breaking Bad',
  author: 'Autor',
  series: 'Serie'
}


function App() {

  const [quote, setQuote] = useState(initialQuote)
  const [loading, setLoading] = useState(false)

  //Hay que realizarlo fuera del useEffect porque este no permite llamadas asíncronas directamente en él
  const updateQuote = async () => {
    setLoading(true)
    const url = 'https://www.breakingbadapi.com/api/quote/random'
    const response = await fetch(url)
    const data = await response.json()
    const newQuote = data[0]
    console.log(newQuote)

    setQuote({
      text: newQuote.quote,
      author: newQuote.author,
      series: newQuote.series
    })
    setLoading(false)
  }

  useEffect(() => {

    updateQuote();

  }, [])


  return (
    <div className='App'>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
        alt="logo"
      />
      <button onClick={updateQuote}>Otra Frase</button>

      {
        loading ? <Spinner /> : <Quote quote={quote} />
      }
    </div>
  );
}

export default App;
