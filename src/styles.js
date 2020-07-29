import styled from 'styled-components';
import { motion } from 'framer-motion';
import React from 'react';

const buttonHoverStyle = {
    textShadow: '0px 0px 8px rgb(255, 255, 255)',
    boxShadow: '0px 0px 8px rgb(255, 255, 255)'
};

export const Button = styled(motion.button).attrs({
    whileHover: {
        scale: 1.1,
        ...buttonHoverStyle
    },
    onTap: { scale: 0.8 }
})`
    color: white;
    padding: 10px 30px;
    font-size: 1em;
    background: transparent;
    border-radius: 50px;
    border: 1px solid white;
    margin: 40px auto 0;
    cursor: pointer;
    opacity: 0.7;
`;

export const ButtonContainer = styled(motion.div).attrs(({ back }) => ({
    initial: { x: back ? '-100vw' : '100vw' },
    animate: {
        x: 0,
        transition: { duration: .3, type: 'spring', stiffness: 50, delay: .3 }
    }
}))`
  display: inline-block;
  margin-left: ${({ back }) => back ? '0' : 'auto'}
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const MenuItem = styled(motion.div).attrs(({ left }) => ({
    initial: { x: left ? '-100vw' : '100vw' },
    animate: { x: 0, transition: { duration: .7, type: 'spring', stiffness: 60 } }
}))`
    max-width: 400px;
    margin: 100px auto 40px;
    h3 {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    text-align: center;
    }
    li {
    padding: 10px;
    cursor: pointer;
    }
`;
