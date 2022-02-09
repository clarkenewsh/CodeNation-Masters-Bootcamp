import { useState } from 'react';

const State = () => {

    // Initilaise state
    const [count, setCount] = useState(0);

    const [person, setPerson] = useState([
        {name: "Mike", age: 22},
        {name: "Lucy", age: 29}
    ]);

    const [bool, setBool] = useState(true);

    const logger = () => {
        // toggle bool vale 
        setBool(!bool);
        // Testing bool value
        console.log(bool)
    }

    const incrementCount = () => {
        setCount(count + 1);
    }

    const resetCounter = () => {
        setCount(0);
    }

    // using parameter age to catch the props.age property from - onClick={() => props.clickMe(props.age)
    const handleClick = (age) => {
        alert(age);
    }

    return (
        <div>
            <h1>{ count }</h1>
            {/* <button onClick={() => setCount(count + 1)}></button> */}
            <button onClick={incrementCount}>Increase count</button>
            <button onClick={resetCounter}>Reset counter </button>
            <Person 
                name={person[0].name} 
                age={person[0].age}
                clickMe={handleClick}
             />
             {/* // get entire person */}
             {/* <Person person={person[0]} />
             <Person person={person[1]} /> */}
             <button onClick={logger}>Logger</button>
             {/* Ternary operator - using setBool to do opposite here */}
             <h2> This boolean value is currently { bool ? 'false' : 'true' }</h2>
             {/* Short Circuit && - If condition is true, display bool vale, if false display nothing */}
             {bool && `bool is ${bool}`}
        </div>
    )
}

const Person = (props) => {
    return (
        <div>
            {/* <h1>{props.person.name}</h1>
            <h2>{props.person.age}</h2> */}
            {/* passing handleClick using props to Person component  */}
            <h1 onClick={props.clickMe}>{props.name}</h1>
            {/* annom function to pass a parameter to the handleClick function - in this case age */}
            <h2 onClick={() => props.clickMe(props.age)}>{props.age}</h2>
        </div>
    )
}



export default State;