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
        x: '65vw',
        y: ['-10vh', '-20vh', '-30vh', '-40vh', '-45vh', '-50vh'],
        scale: -.5,
        opacity: 0,
        transition: { ease: 'easeOut', duration: .5, opacity: { duration: 0.33 } }
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

const subMenuAnimate = {
    enter: {
        opacity: 1,
        rotateX: 0,
        transition: {
            duration: 0.6,
            delay: 0.1,
            opacity: {
                duration: 0.4
            }
        },
        display: 'block'
    },
    exit: {
        opacity: 0,
        rotateX: -90,
        transition: {
            duration: 0.5,
            delay: 0.1,
            opacity: {
                duration: .4
            }
        },
        transitionEnd: {
            display: 'none'
        }
    }
};

export {
    orderItemVariants,
    styledModalVariants,
    backdropVariants,
    buttonEffect,
    orderVariants,
    buttonContainerVariants,
    subMenuAnimate
};
