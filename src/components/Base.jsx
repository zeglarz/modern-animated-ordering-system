import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, ButtonContainer } from '../styles.js';

const Base = ({ addBase, pizza }) => {
    const bases = ['Classic', 'Super Thin', 'Cheese stuffed crust'];

    return (
        <motion.div className='base container' initial={{ x: '100vw' }}
                    animate={{ x: 0, transition: { duration: .7, delay: .2, type: 'spring', stiffness: 60 } }}>
            <h3>Choose your crust</h3>
            <ul>
                {bases.map(base => {
                    let spanClass = pizza.base === base ? 'active' : '';
                    return (
                        <li key={base} onClick={() => addBase(base)}><span className={spanClass}>{base}</span></li>);
                })}
            </ul>
            {pizza.base && (
                <ButtonContainer>
                    <Link to='/toppings'>
                        <Button>Next</Button>
                    </Link>
                </ButtonContainer>
            )}
        </motion.div>
    );
};

export default Base;
