import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonContainer } from '../styles.js';

const Order = ({ pizza, resetState }) => {
    return (
        <div className='order container'>
            <h3>Please review the order and push "place order" button to place order</h3>
            <p>You are about to order a {pizza.base} pizza with:</p>
            {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
            <Link to='/'>
                <Button onClick={() => resetState()}>
                    Place Order
                </Button>
            </Link>
        </div>
    );
};

export default Order;
