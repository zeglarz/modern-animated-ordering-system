import styled from 'styled-components';
import { motion } from 'framer-motion';
import React from 'react';

const buttonHoverStyle = {
    textShadow: '0px 0px 8px rgb(255, 255, 255)',
    boxShadow: '0px 0px 8px rgb(255, 255, 255)'
};

const orderVariants = {
    show: {
        opacity: 1,
        scale: 1.2,
        transition: {
            type: 'spring',
            stiffness: 120,
            duration: .4
        }
    },
    hidden: {
        opacity: 0
    }
};

export const Button = styled(motion.button).attrs({
    whileHover: {
        scale: 1.1,
        ...buttonHoverStyle
    },
    onTap: { scale: 0.8 }
})`
    color: ${({ inverted }) => inverted ? '#64007B' : 'white'};
    padding: 10px 30px;
    font-size: 1em;
    background: ${({ inverted }) => inverted ? 'white' : 'transparent'};
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
        transition: { type: 'spring', stiffness: 60, damping: 11, delay: 0.3 }
    },
    exit: { x: back ? '-100vw' : '100vw', transition: { duration: .4, ease: 'easeInOut' } }
}))`
  display: inline-block;
  margin-left: ${({ back }) => back ? '0' : 'auto'}
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const ButtonsColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & div {
    margin: 0 0;
    }
`;

export const MenuItem = styled(motion.div).attrs(({ left }) => ({
    initial: { x: left ? '-100vw' : '100vw', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 60, delay: 0.2, duration: 0.4 } },
    exit: { x: left ? '100vw' : '-100vw', opacity: 0, transition: { duration: .2 } }
}))`
    max-width: 400px;
    margin: 100px auto 40px;
    h3 {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    text-align: center;
    }
    ${({ order }) => order && `
     text-align: center;
     max-width: 800px;
    `}
`;

export const Item = styled(motion.li).attrs({
    whileHover: {
        scale: 1.3,
        originX: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            duration: 0.3
        }
    }
})`
    cursor: pointer;
    padding: 10px;
    &:hover {
    font-weight: bold;
    opacity: 0.9;
    }
    span.active {
    font-weight: bold;
    font-size: 1.1rem;
    color: #c69e3c;
    }
    &:hover span::before {
    content: '>';
    position: relative;
    top: -2px;
    margin-right: 6px;
    display: inline-block;
}
    &:hover span.active::before  {
    content: "🅧";
    color: #e63946;
    position: relative;
    font-size: 1rem;
    top: 1px;
    margin-right: 6px;
    transform: scale(1);
    display: inline-block;
    }
     &:hover span.active {
     color: #e63946;
}
  &:hover span {
     font-size: 1.1rem;
}

span.active::before {
    content: '✓';
    position: relative;
    top: 1px;
    margin-right: 6px;
    transform: scale(0.8, 1);
    display: inline-block;
`;

export const OrderItem = styled(motion.div).attrs({
    variants: orderVariants
})`
padding: 10px;
`;
