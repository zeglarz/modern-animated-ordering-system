import React from 'react';
import { StyledLoader } from '../styles.js';

const loaderVariants = {
    animeFirst: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: .5
            },
            y: {
                yoyo: Infinity,
                duration: .25,
                ease: 'easeOut'
            }
        }
    },
    animeTwo: {
        x: [-20, 20],
        y: [-30, 0],
        transition: {
            x: {
                yoyo: Infinity,
                duration: .5
            },
            y: {
                yoyo: Infinity,
                duration: .25,
                ease: 'easeOut'
            }
        }
    }
};

const Loader = (props) => {
    return (
        <>
            <StyledLoader variants={loaderVariants} animate='animeFirst'/>
            <StyledLoader variants={loaderVariants} animate='animeTwo'/>
            <StyledLoader variants={loaderVariants} animate='animeFirst'/>
        </>
    );
};

export default Loader;
