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

    return (
        <div>
            <h1>{ count }</h1>
            {/* <button onClick={() => setCount(count + 1)}></button> */}
            <button onClick={incrementCount}>Increase count</button>
            <Person 
                name={person[0].name}
                age={person[0].age}
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
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
        </div>
    )
}

export default State;