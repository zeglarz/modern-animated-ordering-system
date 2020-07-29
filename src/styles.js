import styled from 'styled-components';
import { motion } from 'framer-motion';

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
        transition: { duration: .4, type: 'spring', stiffness: 40 }
    }
}))`
  display: inline-block;
  padding: 0 20px;
`;


