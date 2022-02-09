import { useState } from 'react';

export const Map = () => {

    const [bookPrices, setBookPrices] = useState([2.5, 1.25, 1.55, 5.0]);

    return (
        // <div>
        //     <h1>Using Map in react</h1>
        //     {bookPrices.map((bookPrice) => {
        //        return <h1>Book price is £{bookPrice}</h1>
        //     })}
        // </div>
        // Map through the bookPrices array, assign each one to bookPrice and key index and return Book component that we passed the bookPrice props to for each price
        <div>
            <h1>Using Map in react</h1>
            {bookPrices.map((bookPrice, index) => {
                return <Book bookPrice={bookPrice} key={index} />
            })}
        </div>
    )
};

const Book = (props) => {
    return (
        <div>Book price is £{props.bookPrice}</div>
    )
}

export default Map;