import { useState } from 'react';

const State = () => {

    // Initilaise state
    const [count, setCount] = useState(0);

    const [person, setPerson] = useState([
        {name: "Mike", age: 22},
        {name: "Lucy", age: 29}
    ]);

    const incrementCount = () => {
        setCount(count + 1);
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
            <Person 
                name={person[0].name} 
                age={person[0].age}
                clickMe={handleClick}
             />
             {/* // get entire person */}
             {/* <Person person={person[0]} />
             <Person person={person[1]} /> */}
        </div>
    )
}

const Person = (props) => {
    return (
        <div>
            {/* <h1>{props.person.name}</h1>
            <h2>{props.person.age}</h2> */}
            <h1 onClick={props.clickMe}>{props.name}</h1>
            {/* annom function to pass a parameter to the handleClick function - in this case age */}
            <h2 onClick={() => props.clickMe(props.age)}>{props.age}</h2>
        </div>
    )
}



export default State;