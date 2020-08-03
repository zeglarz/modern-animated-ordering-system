import React from 'react';
import { StyledLoader } from '../styles.js';
import { Button } from '../styles';

const loaderVariants = {
    animeOne: {
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

export const animes = Object.keys(loaderVariants)

const Loader = ({ cycle, switchCycle }) => {
    return (
        <>
            <StyledLoader variants={loaderVariants} animate={cycle}/>
            <StyledLoader variants={loaderVariants} animate={cycle}/>
            <StyledLoader variants={loaderVariants} animate={cycle}/>
            <Button onClick={() => switchCycle()}>Switch Animations</Button>
        </>
    );
};

export default Loader;
