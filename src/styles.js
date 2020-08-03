import styled from 'styled-components';
import { motion } from 'framer-motion';
import React from 'react';
import {
    orderItemVariants,
    styledModalVariants,
    backdropVariants,
    buttonEffect,
    orderVariants,
    buttonContainerVariants
} from './animations';


export const Button = styled(motion.button).attrs(({ main }) => ({
        ...buttonEffect(main)
    }
))`
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
    ...buttonContainerVariants(back)
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
    animate: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 60, delay: 0, duration: 0.4 } },
    exit: { x: left ? '100vw' : '-100vw', opacity: 0, transition: { duration: .2 } }
}))`
    max-width: 400px;
    margin: 100px auto 40px;
    color: white;
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
    whileHover: orderItemVariants
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
    color: #fdbc01;
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
    color: #ff3100;
    position: relative;
    font-size: 1rem;
    top: 1px;
    margin-right: 6px;
    transform: scale(1);
    display: inline-block;
    }
     &:hover span.active {
    color: #ff0000;
    text-shadow: 0px 0px 10px rgb(67,63,63)

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

export const Backdrop = styled(motion.div).attrs({
    variants: backdropVariants,
    initial: 'hidden',
    animate: 'show',
    exit: 'exit'
})`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.5);
z-index: 1;
`;

export const StyledModal = styled(motion.div).attrs({
    variants: styledModalVariants,
    exit: 'exit'

})`
max-width: 400px;
  margin: 25vh auto;
  padding: 40px 20px;
background: white;
z-index: 1;
border-radius: 20px;
`;

export const ModalContent = styled(motion.div)`
display: flex;
flex-direction: column;
justify-content: center;
p {
color: #444;
text-align: center;
padding: 15px;
}
input {
margin: 10px 10px;
}
button {
color: #444;
    border: 1px solid #444;
}
`;

export const StyledLoader = styled(motion.div)`
width: 10px;
height: 10px;
margin: 40px auto;
border-radius: 50%;
background: #fff;
display: inline-block;
`;
export const BasketContainer = styled(motion.div)`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;
export const BasketMenuItem = styled(motion.div)`
  width: 100%;
  font-size: 0.8rem;
  perspective: 2000px;
`;

export const StyledBasket = styled(motion.div)`
margin: -40px 20px 0 0;
padding: 0 20px 0 40px;
`;

export const SubMenu = styled(motion.div)`
  position: absolute;
  top: 25px;
  right: 20px;
  padding: 15px;
  background-color: #ccc;
  border-radius: 6px;
  transform-origin: 50% -30px;
  width: 200px;
        box-shadow: 0px 0px 20px rgba(255,255,255,0.8);

  &::before {
  content: "";
  transform: rotate(45deg);
  position: absolute;
  border-left: 10px solid #ccc;
  border-right: 10px solid transparent;
  border-top: 10px solid #ccc;
  border-bottom: 10px solid transparent;
  top: -7px;
  right: 26px; 
`;

export const Divider = styled.hr`
  border-top: 1px solid #bbb;

`;
