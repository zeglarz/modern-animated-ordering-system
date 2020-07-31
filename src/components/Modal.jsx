import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Backdrop, StyledModal, ModalContent } from '../styles.js';

const Modal = ({ setShowModal }) => {

    return (
        <Backdrop>
            <StyledModal>
                <ModalContent>
                    <p>Payment</p>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <button onClick={() => setShowModal(false)}>Pay</button>
                </ModalContent>
            </StyledModal>
        </Backdrop>
    );
};

export default Modal;
