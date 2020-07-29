import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, ButtonContainer, ButtonsWrapper, MenuItem } from '../styles.js';

const Base = ({ addBase, pizza }) => {
    const bases = ['Classic', 'Super Thin', 'Cheese stuffed crust'];

    return (
        <MenuItem>
            <h3>Choose your crust</h3>
            <ul>
                {bases.map(base => {
                    let spanClass = pizza.base === base ? 'active' : '';
                    return (
                        <li key={base} onClick={() => addBase(base)}><span className={spanClass}>{base}</span></li>);
                })}
            </ul>
            {pizza.base && (
                <ButtonsWrapper>
                    <ButtonContainer>
                        <Link to='/toppings'>
                            <Button>Next</Button>
                        </Link>
                    </ButtonContainer>
                </ButtonsWrapper>
            )}
        </MenuItem>
    );
};

export default Base;
