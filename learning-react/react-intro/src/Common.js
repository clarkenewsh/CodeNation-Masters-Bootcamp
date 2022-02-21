import React from 'react';
import { useState } from 'react';

const Common = () => {

    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

    const [inputText, setInputText] = useState('');

    // function to push numbers on to array using state
    const addHandler = () => {
        // spread over numbers, copy array and store in new array storedNums
        let storedNums = [...numbers];

        // get last number in array and push the number to the last array index + 1
        storedNums.push(numbers[numbers.length - 1] + 1);
        setNumbers(storedNums);
    }

    // remove number from specific index in the array when clicking on it
    const removeHandler = (index) => {
        console.log('delete', index)
         // spread over numbers, copy array and store in new array storedNums
        let storedNums = [...numbers];

        // splice from index in array clicked then remove, 1 number 
        storedNums.splice(index, 1);
        setNumbers(storedNums);
    }

    // onChnage handler to update state using the text typed in the input
    const changeHandler = (e) => {
        setInputText(e.target.value);
    }



  return (
      <div>
          <h1>Common React components</h1>
            {numbers.map((number, index) => {
            // using annom function to call removeHandler onclick, passing the index of that number of the array to the removeHandler function - must use annom when passing in 
              return <h1 key={index} onClick={() => removeHandler(index)}>{ number }</h1>
          })}
          <button onClick={addHandler}>Add number to array</button>

          {/* On change event - change value when input value changes */}
          <input type='text' onChange={(e) => changeHandler(e)}></input>
          {/* Output input value when typed in the input box */}
          <h2>{inputText}</h2>
      </div>
  )
    
};

export default Common;
