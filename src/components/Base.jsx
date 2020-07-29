import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Button, ButtonContainer, ButtonsWrapper, MenuItem, Item } from '../styles.js';
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
                {pizza.base.length && previousPath ?
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
                        pizza.base.length &&
                        (
                            <ButtonsWrapper>
                                <ButtonContainer>
                                    <Link to='/toppings'>
                                        <Button>Next</Button>
                                    </Link>
                                </ButtonContainer>
                            </ButtonsWrapper>
                        )
                    )
                })
            </AnimatePresence>
        </MenuItem>
    );
};

export default withRouter(Base);
