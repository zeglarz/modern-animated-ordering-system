import React from 'react';

const Order = ({ pizza }) => {
    return (
        <div className='order container'>
            <h3>Order Summary</h3>
            <h4>Crust: {pizza.base}</h4>
            <ul>
                {pizza.toppings.map(topping => <li key={topping}><span>{topping}</span></li>)}
            </ul>
        </div>
    );
};

export default Order;
