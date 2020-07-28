import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Base = ({ addBase, pizza }) => {
    const bases = ['Classic', 'Super Thin', 'Cheese stuffed crust'];

    return (
        <div className='base container'>
            <h3>Choose your crust</h3>
            <ul>
                {bases.map(base => {
                    let spanClass = pizza.base === base ? 'active' : '';
                    return (
                        <li key={base} onClick={() => addBase(base)}><span className={spanClass}>{base}</span></li>);
                })}
            </ul>
            {pizza.base && (
                <motion.div className='next' initial={{ x: '100vw' }}
                            animate={{
                                x: 0,
                                transition: { duration: .5, type: 'spring', stiffness: 70 }
                            }}>
                    <Link to='/toppings'>
                        <button>Next</button>
                    </Link>
                </motion.div>
            )}
        </div>
    );
};

export default Base;
