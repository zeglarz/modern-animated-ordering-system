import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, ButtonContainer, ButtonsColumn, OrderItem, MenuItem } from '../styles.js';
import { motion } from 'framer-motion';

const Order = ({ pizza, resetState, location }) => {
    const [buttonClicked, setButtonClicked] = useState(false);
    const listItem = {
        show: {
            transition: { staggerChildren: .15, delayChildren: 0.8 }
        },
        hidden: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    };

    return (
        <MenuItem order left={buttonClicked}>
            <h3>Please review the order and push "place order" <br/> button to place order</h3>
            <p>You are about to order a {pizza.base} pizza with:</p>
            <motion.div variants={listItem} initial='hidden' animate='show' style={{ marginTop: 30 }}>
                {pizza.toppings.map(topping =>
                    <OrderItem key={topping}>{topping}</OrderItem>)}
            </motion.div>
            <ButtonsColumn>
                <ButtonContainer>
                    <Link to={{
                        pathname: '/base',
                        state: { from: location }
                    }}>
                        <Button onClick={() => setButtonClicked(true)}>Change Crust</Button>
                    </Link>
                </ButtonContainer>
                <ButtonContainer back>
                    <Link to={{
                        pathname: '/toppings',
                        state: { from: location }
                    }}> <Button onClick={() => setButtonClicked(true)}>Change Toppings</Button>
                    </Link>
                </ButtonContainer>
                <ButtonContainer>
                    <Link to='/'>
                        <Button inverted onClick={() => {
                            resetState();
                            setButtonClicked(true);
                        }}>
                            Place Order
                        </Button>
                    </Link>
                </ButtonContainer>
            </ButtonsColumn>
        </MenuItem>
    );
};

export default withRouter(Order);
