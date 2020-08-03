import React from 'react';
import { motion } from 'framer-motion';
import { subMenuAnimate } from '../animations';
import { SubMenu, BasketMenuItem, BasketContainer } from '../styles';

const BasketMenu = (props) => {
    return (
        <SubMenu
            className="sub-menu"
            initial="exit"
            animate={props.isHover ? 'enter' : 'exit'}
            variants={subMenuAnimate}
        >
            <div className="sub-menu-container">
                <BasketMenuItem>Submenu Item 1</BasketMenuItem>
                <BasketMenuItem className="sub-menu-item">Submenu Item 2</BasketMenuItem>
                <BasketMenuItem className="sub-menu-item">Submenu Item 3</BasketMenuItem>
                <BasketMenuItem className="sub-menu-item">Submenu Item 4</BasketMenuItem>
                <BasketMenuItem className="sub-menu-item">Submenu Item 5</BasketMenuItem>
            </div>
        </SubMenu>
    );
};

export default BasketMenu;
