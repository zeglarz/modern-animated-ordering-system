import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, ButtonContainer } from '../styles.js';

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
            <ButtonContainer back>
                <Link to='/base'>
                    <Button>Back</Button>
                </Link>
            </ButtonContainer>
            {pizza.toppings.length > 0 && (
                <ButtonContainer>
                    <Link to='/order'>
                        <Button>Next</Button>
                    </Link>
                </ButtonContainer>
            )}
        </div>
    );
};

export default Toppings;
