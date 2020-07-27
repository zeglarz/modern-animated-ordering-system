import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = (props) => {
    return (
        <div className='home container'>
            <motion.h2 animate={{ fontSize: 50, x: 100 }}>
                Welcome to Pizza Oderotron!
            </motion.h2>
            <Link to='/base'>
                <button>
                    Create your own Pizza
                </button>
            </Link>
        </div>
    );
};

export default Home;
