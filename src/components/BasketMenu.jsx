import React from 'react';
import { motion } from 'framer-motion';
import { subMenuAnimate } from '../animations';
import { SubMenu, BasketMenuItem, Divider, BasketContainer } from '../styles';

const BasketMenu = (props) => {
    return (
        <SubMenu
            className="sub-menu"
            initial="exit"
            animate={props.isHover ? 'enter' : 'exit'}
            variants={subMenuAnimate}
        >
            <div>
                <h3>{props.pizza.base}</h3>
                {props.pizza.toppings.map(topping => <BasketMenuItem>{topping}</BasketMenuItem>)}
                <Divider/>
            </div>
        </SubMenu>
    );
};

export default BasketMenu;
