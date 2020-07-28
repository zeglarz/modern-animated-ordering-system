import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
            <motion.div className='next' initial={{ x: -1000 }} animate={{ x: 0, transition: { duration: .5 } }}>
                <Link to='/base'>
                    <button>Back</button>
                </Link>
            </motion.div>
            {pizza.toppings.length > 0 && (
                <motion.div className='next' initial={{ x: 1000 }} animate={{ x: 0, transition: { duration: .5 } }}>
                    <Link to='/order'>
                        <button>Next</button>
                    </Link>
                </motion.div>
            )}
        </div>
    );
};

export default Toppings;
