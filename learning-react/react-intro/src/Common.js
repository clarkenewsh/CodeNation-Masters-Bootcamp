import React from 'react';
import { useState } from 'react';

const Common = () => {

    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

    // function to push numbers on to array using state
    const addHandler = () => {
        // spread over numbers, copy array and store in new array storedNums
        let storedNums = [...numbers];

        // get last number in array and push the number to the last array index + 1
        storedNums.push(numbers[numbers.length - 1] + 1);
        setNumbers(storedNums);
    }

  return (
      <div>
          <h1>Common React components</h1>
          {numbers.map((number, index) => {
              return <h1 key={index}>{ number }</h1>
          })}
          <button onClick={addHandler}>Add number to array</button>
      </div>
  )
    
};

export default Common;
