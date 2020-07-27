import React from 'react';
import { Link } from 'react-router-dom';

const Toppings = ({ addToppings, pizza }) => {
    const toppings = ['pepperoni', 'extra mozzarella', 'pineapple', 'ham', 'rucola', 'prosciutto', 'chili', 'jalapenio'];

    return (
        <div className='toppings container'>
            <h3>Choose your toppings</h3>
            <ul>
                {toppings.map(topping => {
                    let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
                    return (
                        <li key={topping} onClick={() => addToppings(topping)}><span
                            className={spanClass}>{topping}</span></li>);
                })}
            </ul>
            {pizza.toppings && (
                <div className='next'>
                    <Link to='/order'>
                        <button>Next</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Toppings;
