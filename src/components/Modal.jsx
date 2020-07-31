import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Backdrop, StyledModal } from '../styles.js';

const Modal = ({ showModal, setShowModal }) => {

    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <Backdrop onClick={() => setShowModal(false)}>
                    <StyledModal/>
                </Backdrop>
            )}
        </AnimatePresence>
    );
};

export default Modal;
