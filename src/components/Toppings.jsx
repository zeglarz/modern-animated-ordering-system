import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, ButtonContainer, ButtonsWrapper, MenuItem, Item } from '../styles.js';

const Toppings = ({ addToppings, pizza }) => {
    const toppings = ['pepperoni', 'extra mozzarella', 'pineapple', 'ham', 'rucola', 'prosciutto', 'chili', 'jalapeno', 'strawberries'];

    return (
        <MenuItem left>
            <h3>Choose your toppings</h3>
            <ul>
                {toppings.map(topping => {
                    let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
                    return (
                        <Item key={topping} onClick={() => addToppings(topping)}><span
                            className={spanClass}>{topping}</span></Item>);
                })}
            </ul>
            <ButtonsWrapper>
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
            </ButtonsWrapper>
        </MenuItem>
    );
};

export default Toppings;
