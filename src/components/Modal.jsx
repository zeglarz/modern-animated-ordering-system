import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Backdrop, StyledModal, ModalContent } from '../styles.js';

const Modal = ({ pizza, history }) => {
    useEffect(() => {
        if (pizza.base === '') {
            return history.push('/base');
        } else if (pizza.toppings.length === 0) {
            return history.push('/toppings');
        }
        return;
    }, [pizza]);

    return (
        <Backdrop>
            <StyledModal>
                <ModalContent>
                    <p>Payment</p>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <button onClick={() => {
                        history.push('/');
                    }}>Pay
                    </button>
                </ModalContent>
            </StyledModal>
        </Backdrop>
    );
};

export default withRouter(Modal);
