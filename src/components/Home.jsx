import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = (props) => {
    return (
        <motion.div animate={{ opacity: 1, ease: 'easeIn', transition: { duration: 2 } }}
                    initial={{ opacity: 0, transform: { rotate: 45 } }}
                    className='home container'>
            <h2>Welcome to Pizza Orderotron!</h2>
            <Link to='/base'>
                <motion.button
                    animate={{}}
                    initial
                >
                    Create your own Pizza
                </motion.button>
            </Link>
        </motion.div>
    );
};

export default Home;
