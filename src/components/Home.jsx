import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../styles.js';

const Home = (props) => {
    return (
        <motion.div animate={{ opacity: 1, ease: 'easeIn', transition: { duration: 2, delay: .6 } }}
                    exit={{ opacity: 0, x: '-100vw', transition: { duration: .3 } }}
                    initial={{ opacity: 0 }}
                    className='home container'>
            <h2>Welcome to Pizza Orderotron!</h2>
            <Link to='/base'>
                <Button main>
                    Create your own Pizza
                </Button>
            </Link>
        </motion.div>
    );
};

export default Home;
