import './App.css';
import { useState } from 'react';

const App = () => {

  // state used to store fetch request
  const [advice, setAdvice] = useState('');

  // async, await fetch request - with error catching
  const collect = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advie');
      console.log(response);
      if(response.status !== 200) {
        // if error, throw and catch in catch block
        throw new Error('oops');
      }
      // parse data into json
      const data = await response.json();
      setAdvice(data.slip);
      // catch errors that occur in the try
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Advice App - API Requests</h1>
      <h2>advice: {advice.advice}</h2>
      <button onClick={collect}>Collect data</button>
    </div>
  )
}

export default App;
