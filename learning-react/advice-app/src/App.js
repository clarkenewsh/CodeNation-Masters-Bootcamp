import './App.css';
import { useState, useEffect } from 'react';

const App = () => {

  // state used to store fetch request and error handling
  const [advice, setAdvice] = useState('');
  const [error, setError] = useState({
    error: false,
    message:""
  });


  // async, await fetch request - with error catching
  const collect = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      // console.log(response);
      if(response.status !== 200) {
        // if error, throw and catch in catch block
        throw new Error('oops');
      }
      // parse data into json
      const data = await response.json();
      setAdvice(data.slip);
      // catch errors that occur in the try
    } catch (error) {
      setError({ error: true, message: error.message})
    }
  }

  // use effect hook to load advice response data on page load - using [] dependency to update on load
  useEffect(() => {
    collect();
  }, [])

  // if error has value of true - display error message
  if(error.error) {
    return <h1>An error has occured: {error.message}</h1>
  }
  return (
    <div>
      <h1>Advice App - API Requests</h1>
      <h2>advice: {advice.advice}</h2>
      <button onClick={collect}>Collect data</button>
      {/* can use this method to query a api endpoint - i.e const response = await fetch(`https://api.adviceslip.com/advice?q=${city}`) */}
      {/* <input onChange={(e) => setCity(e.target.value)}></input> */}
    </div>
  )
}

export default App;
