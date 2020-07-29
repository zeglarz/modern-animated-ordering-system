import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, ButtonContainer, ButtonsWrapper, MenuItem, Item } from '../styles.js';
import { withRouter } from 'react-router';
import { ButtonsColumn } from '../styles';

const Base = ({ addBase, pizza, history }) => {
    const bases = ['Classic', 'Super Thin', 'Cheese stuffed crust'];
    const previousPath = history.location.state && history.location.state.from.pathname === '/order';
    return (
        <MenuItem>
            <h3>Choose your crust</h3>
            <ul>
                {bases.map(base => {
                    let spanClass = pizza.base === base ? 'active' : '';
                    return (
                        <Item key={base} onClick={() => addBase(base)}><span
                            className={spanClass}>{base}</span></Item>);
                })}
            </ul>
            <AnimatePresence>
                {pizza.base && previousPath ?
                    (
                        <ButtonsColumn>
                            <ButtonContainer>
                                <Link to='/order'>
                                    <Button>Order</Button>
                                </Link>
                            </ButtonContainer>
                        </ButtonsColumn>
                    )
                    :
                    (
                        <ButtonsWrapper>
                            <ButtonContainer>
                                <Link to='/toppings'>
                                    <Button>Next</Button>
                                </Link>
                            </ButtonContainer>
                        </ButtonsWrapper>
                    )
                })
            </AnimatePresence>
        </MenuItem>
    );
};

export default withRouter(Base);
