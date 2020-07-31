import styled from 'styled-components';
import { motion } from 'framer-motion';
import React from 'react';

const buttonHoverStyle = {
    textShadow: '0px 0px 8px rgb(255, 255, 255)',
    boxShadow: '0px 0px 8px rgb(255, 255, 255)'
};

const buttonContainerVariants = back => ({
    initial: { x: back ? '-100vw' : '100vw' },
    animate: {
        x: 0,
        transition: { type: 'spring', stiffness: 60, damping: 11, delay: 0.2 }
    },
    exit: {
        x: back ? '-100vw' : '100vw',
        transition: {
            duration: .4,
            ease: 'easeInOut'
        }
    }
});

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

const buttonEffect = main => ({
    whileHover: {
        scale: 1.1,
        ...buttonHoverStyle,
        transition: {
            yoyo: main ? Infinity : 0
        }
    },
    onTap: { scale: 0.8 }
});

const backdropVariants = {
    show: { opacity: 1, transition: { when: 'beforeChildren' } },
    hidden: { opacity: 0 },
    exit: { opacity: 0, transition: { when: 'afterChildren', duration: .2 } }

};

const styledModalVariants = {
    show: { scale: 1, transition: { duration: .5, type: 'spring', stiffness: 80 } },
    hidden: { scale: 0.0 },
    exit: {
        x: '80vw',
        y: ['-10vh', '-20vh', '-30vh', '-40vh', '-45vh', '-50vh', '-55vh', '-60vh', '65vh'],
        scale: -.5,
        opacity: 0,
        transition: { ease: 'easeOut', duration: .6 }
    }
};


const orderItemVariants = {
    scale: 1.3,
    originX: 0,
    transition: {
        type: 'spring',
        stiffness: 300,
        duration: 0.3
    }
};

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
margin: 5px;
`;
