import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, ButtonContainer, ButtonsColumn, OrderItem } from '../styles.js';
import { motion } from 'framer-motion';

const Order = ({ pizza, resetState, location }) => {

    const listItem = {
        show: {
            transition: { staggerChildren: .15, delayChildren: 0.3 }
        },
        hidden: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    };

    return (
        <div className='order container'>
            <h3>Please review the order and push "place order" <br/> button to place order</h3>
            <p>You are about to order a {pizza.base} pizza with:</p>
            <motion.div variants={listItem} initial='hidden' animate='show'>
                {pizza.toppings.map(topping =>
                    <OrderItem key={topping}>{topping}</OrderItem>)}
            </motion.div>
            <ButtonsColumn>
                <ButtonContainer>
                    <Link to={{
                        pathname: '/base',
                        state: { from: location }
                    }}>
                        <Button>Change Crust</Button>
                    </Link>
                </ButtonContainer>
                <ButtonContainer back>
                    <Link to='/toppings'>
                        <Button>Change Toppings</Button>
                    </Link>
                </ButtonContainer>
                <ButtonContainer>
                    <Link to='/'>
                        <Button inverted onClick={() => resetState()}>
                            Place Order
                        </Button>
                    </Link>
                </ButtonContainer>
            </ButtonsColumn>
        </div>
    );
};

export default withRouter(Order);
