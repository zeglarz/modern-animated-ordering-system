import React from 'react';
import { withRouter } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Basket from './Basket';
import { StyledBasket, BasketContainer, BasketMenuItem } from '../styles';
import BasketMenu from './BasketMenu';

const svgVariants = {
    init: { rotate: -180 },
    target: { rotate: 120, transition: { duration: 1.2 } }
};

const pathVariants = {
    init: {
        opacity: 0,
        pathLength: 0
    },
    target: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: 'easeInOut'
        }
    }
};

const Header = (props) => {
    const [isHover, toggleHover] = React.useState(false);
    const toggleHoverMenu = () => {
        toggleHover(!isHover);
    };
    return (
        <header>
            <motion.div className="logo"
                        onClick={() => props.history.push('/')}
                        drag
                        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                        dragElastic={0.7}
                        whileHover={{
                            rotate: 360, transition: {
                                loop: Infinity,
                                ease: 'linear',
                                duration: 5
                            }
                        }}
                        whileTap={{ scale: 1.3 }}
            >
                <motion.svg width={78} height={72} variants={svgVariants} initial='init'
                            animate='target'>
                    <title>{'Combined Shape'}</title>
                    <motion.path
                        d="M42.7.1c7.5 0 11.5 2.2 13.2 3.6.4.3.7.8.8 1.3.3 0 .6-.1 1 0 2.1.4 6.5 1.9 11.5 7.5 4.9 5.6 5.9 10.1 6 12.3.1.5-.1 1.1-.4 1.5.3.1.5.4.7.7 1.2 1.9 3 6.2 2.1 13.6-.8 7.4-3.5 11.1-5.1 12.7-.4.4-.9.6-1.4.7 0 .3 0 .7-.1 1-.7 2.1-2.7 6.3-8.8 10.6-5.5 3.9-9.8 4.6-12.2 4.6h-.6c-.5 0-1-.3-1.4-.6-.2.2-.5.5-.8.6-1.3.6-3.6 1.3-7 1.3-1.9 0-4.1-.2-6.7-.8-7.3-1.7-10.6-4.9-12-6.6-.3-.5-.5-1-.5-1.5h-.1l-.192-.008c-.308-.025-.558-.109-.808-.192-2-.9-6-3.3-9.5-9.9C6.8 46 6.9 41.4 7.3 39.2c.2-1.1 1.1-1.9 2.2-2l4-.3 26.3-2.2c.3 0 .6 0 .8.1-.1-.1-.2-.2-.2-.3l-10-24.2-1.7-3.8c-.5-1-.2-2.1.7-2.8C31.2 2.4 35.2.1 42.7.1zM24.1 61L23 62.4c-.1.2-.1.4 0 .5 1.2 1.5 4.2 4.3 10.9 5.9 7 1.6 11.1.3 12.5-.4.2 0 .3-.2.1-.5l-.3-1.8c-1.2.5-3.1 1.1-5.9 1.1-1.7 0-3.6-.2-5.9-.7-6-1.4-9-3.9-10.3-5.5zm43.4-7.8c-.6 1.9-2.5 5.4-7.6 9-4.9 3.4-8.7 4-10.8 4h-.2l.3 1.7c.1.2.2.3.4.3 1.9.1 6-.3 11.6-4.2 5.9-4.1 7.6-8 8-9.4 0-.2 0-.4-.2-.5zM41.3 38.9l-7.7 9.5-8.1 10.9c-.1.1-.1.2 0 .3.9 1.1 3.5 3.7 9.5 5.1 6 1.4 9.6.3 10.8-.3.1-.1.1-.2.1-.3L43.8 51l-2.5-12.1zm2.5-.2l2 12L48.5 64c0 .1.1.1.2.3 1.4 0 5-.2 10.1-3.7 5.1-3.6 6.6-7 7-8.3 0-.1 0-.2-.1-.3l-11.2-7.1-10.7-6.2zm-4.1 19.4c.7-.4 1.5-.5 2.3-.2.7.2 1.3.7 1.8 1.3.5.6.6 1.5.4 2.2-.2.7-.6 1.4-1.3 1.8-.5.2-1.1.4-1.6.4-.2 0-.5 0-.7-.1-1.6-.4-2.6-2-2.2-3.6.2-.7.6-1.4 1.3-1.8zm10.2-2.8c.8-.6 1.8-.8 2.7-.6.9.2 1.8.7 2.3 1.5.6.8.8 1.8.6 2.7-.2.9-.7 1.8-1.5 2.3-.6.4-1.3.6-2 .6-1.1 0-2.2-.5-2.9-1.5-1.1-1.6-.7-3.9.8-5zM30.3 55c.8-.5 1.8-.6 2.7-.4 1.9.4 3.1 2.4 2.6 4.3-.4 1.6-1.9 2.7-3.5 2.7-.3 0-.5 0-.8-.1-.9-.2-1.7-.8-2.2-1.6-.5-.8-.6-1.8-.4-2.7.2-.9.8-1.7 1.6-2.2zm11.2 4.6h-.2c-.2 0-.3 0-.5.1s-.3.3-.4.6l-.015.127c-.041.542.25.98.715 1.073.2.1.5 0 .7-.1.2-.1.3-.3.4-.6.1-.2.1-.5-.1-.8-.1-.2-.3-.3-.6-.4zM11.6 39.2l-1.8.1c-.2 0-.4.1-.4.3-.4 1.9-.4 6 2.8 12 3.4 6.3 7.2 8.5 8.6 9.1.1.1.3 0 .5-.1l1.1-1.4c-1.9-.9-5.1-3.1-8.1-8.6-2.9-5.4-3-9.4-2.7-11.4zm41.7 18.1c-.5-.7-1.5-.9-2.2-.4-.7.5-.9 1.5-.4 2.2.5.7 1.5.9 2.2.4.7-.5.9-1.5.4-2.2zm-20.8-.8h-.528c-.256.004-.5.029-.672.2-.4.3-.6.6-.7 1-.1.4-.1.8.2 1.2.3.4.6.6 1 .7.9.2 1.7-.4 1.9-1.2.1-.4.1-.8-.2-1.2-.3-.4-.6-.6-1-.7zm7.4-19.8l-26.2 2.2c-.1 0-.2.1-.2.2-.2 1.4-.4 5.1 2.5 10.5 3 5.4 6.2 7.3 7.5 7.9.1 0 .2 0 .3-.1l8.3-10.3 7.6-10.2c0-.1.1-.1.2-.2zm18.4 14.1c.6-.5 1.4-.6 2.2-.5.8.1 1.4.6 1.9 1.2 1 1.3.6 3.2-.7 4.1-.5.3-1.1.5-1.7.5-.9 0-1.8-.5-2.4-1.2-.5-.6-.6-1.4-.5-2.2.1-.8.5-1.4 1.2-1.9zm-36.6-1.7c.7-.3 1.5-.4 2.3-.2.8.2 1.4.7 1.8 1.4.8 1.4.2 3.2-1.2 4-.4.3-.9.4-1.4.4-1 0-2.1-.6-2.6-1.6-.3-.7-.4-1.5-.2-2.3.2-.7.7-1.4 1.3-1.7zm15.1-.7c.8-.5 1.7-.6 2.6-.4.9.2 1.7.7 2.1 1.5.5.8.6 1.7.4 2.6-.2.9-.7 1.6-1.5 2.1-.6.3-1.2.5-1.8.5-.3 0-.5 0-.8-.1-.9-.2-1.6-.7-2.1-1.5s-.6-1.7-.4-2.6c.2-.9.7-1.6 1.5-2.1zm23.3 3.7c-.2 0-.4.1-.6.2-.3.1-.4.4-.4.7 0 .2.1.5.2.7l.104.094c.395.32.93.381 1.296.106.4-.4.5-1 .2-1.4-.2-.3-.5-.4-.8-.4zM38.9 50h-.3c-.7 0-1.2.4-1.4 1.1-.1.7.3 1.5 1.1 1.7.7.1 1.5-.3 1.7-1.1.2-.8-.3-1.6-1.1-1.7zm-15.3.7h-.4c-.164.003-.317.017-.4.1l-.104.046c-.221.127-.309.379-.396.554-.1.2-.1.5.2.7.1.3.4.4.6.5.2.1.5 0 .7-.1.5-.2.7-.8.4-1.3-.1-.3-.4-.4-.6-.5zm25.7-4.5c1.6-1.1 3.7-.7 4.8.8 1.1 1.6.7 3.7-.8 4.8-.6.4-1.3.6-2 .6-.2 0-.4-.1-.6-.1-.9-.1-1.7-.6-2.2-1.4-1.1-1.6-.7-3.7.8-4.7zm24.7-18c-.1-.2-.3-.3-.5-.2l-1.7.5c1 1.8 2.4 5.5 1.7 11.7-.7 6.1-2.9 9.4-4.3 10.9l1.5.9c.2.1.4 0 .5-.1 1.4-1.4 3.8-4.7 4.6-11.5.8-6.8-.8-10.6-1.8-12.2zM52.5 48.1c-.5-.7-1.4-.9-2-.4-.7.5-.9 1.3-.4 2s1.4.9 2 .4c.7-.5.9-1.4.4-2zm17.35-19h-.15L57 32.7l-11.7 3.9 10.3 6.5 11.7 6.8c.1.1.2.1.3 0 1-1 3.3-3.9 4-10 .7-6.1-.9-9.5-1.6-10.7 0-.1-.1-.1-.2-.1zM63.1 40.6c.7-.5 1.7-.8 2.6-.7 1 .2 1.8.6 2.4 1.3.5.7.8 1.6.7 2.6-.1 1-.6 1.8-1.3 2.4-.6.5-1.4.8-2.2.8h-.4c-1.9-.2-3.3-2-3.1-4 .1-1 .6-1.8 1.3-2.4zm-36.114-.208c.752-.405 1.583-.469 2.414-.192.8.3 1.6.9 2 1.7.5.8.6 1.7.3 2.6-.3.8-.9 1.6-1.7 2-.5.3-1 .4-1.6.4-.3 0-.7 0-1-.1-.9-.3-1.6-.9-2-1.7-.5-.8-.6-1.7-.3-2.6.3-.8.9-1.6 1.7-2zM17.4 40.1c.8-.5 1.8-.6 2.7-.3.9.3 1.6.9 2.1 1.7.5.8.6 1.8.3 2.7-.3.9-.9 1.6-1.7 2.1-.6.3-1.1.4-1.7.4-1.3 0-2.5-.7-3.1-1.8-.5-.8-.6-1.8-.3-2.7.3-.9.9-1.6 1.7-2.1zM65.6 42h-.2c-.4 0-.7.1-1 .3-.3.2-.6.6-.6 1-.1.8.5 1.6 1.4 1.7l.133.023c.355.033.7-.145.967-.323.3-.2.6-.6.6-1s-.1-.9-.3-1.1c-.2-.3-.6-.6-1-.6zm-36.8.1c-.4-.1-.8-.1-1.1.1-.7.4-.9 1.3-.6 1.9.1.3.4.6.8.7.4.1.8.1 1.1-.1.3-.1.6-.4.7-.8.1-.4.1-.8-.1-1.1-.1-.3-.4-.6-.8-.7zm-9.63-.5h-.07c-.2 0-.5.1-.7.2l-.145.08c-.327.197-.567.47-.655.82-.2.4-.1.8 0 1.3.4.7 1.3 1 2.1.6.4-.2.7-.5.8-.9.1-.4.1-.8-.1-1.2-.2-.4-.5-.7-.9-.8-.1-.1-.3-.1-.4-.1zm36.63-6.5c.7-.6 1.6-.8 2.5-.7.9.1 1.7.6 2.3 1.3.6.7.8 1.6.7 2.5-.1.9-.6 1.7-1.3 2.3-.6.4-1.3.7-2.1.7h-.4c-.9-.1-1.7-.6-2.3-1.3-.6-.7-.8-1.6-.7-2.5.1-.9.6-1.7 1.3-2.3zm2.2 1.2c-.4 0-.8.1-1.1.3-.3.3-.5.6-.5 1s.1.8.3 1.1c.3.3.6.5 1 .5s.8-.1 1.1-.3c.3-.2.5-.5.5-1 0-.4-.1-.8-.3-1.1-.3-.3-.6-.5-1-.5zm5.9-2.6c.2-1.6 1.7-2.8 3.3-2.6 1.6.2 2.8 1.7 2.5 3.3-.1.8-.5 1.5-1.1 2-.5.4-1.1.6-1.8.6h-.3l-.216-.035c-.71-.14-1.33-.52-1.784-1.065-.5-.6-.7-1.4-.6-2.2zm-22 2l.1.1c.1.1.1.2.1.3.1.1.1.1.2.1.1-.1.2-.1.2-.1v-.2l-.1-.1c-.2 0-.3 0-.5-.1zM67 33c-.6 0-1 .4-1.1.9 0 .2 0 .5.2.7.1.2.3.4.6.4.2 0 .5 0 .7-.2.2-.1.4-.3.5-.7 0-.6-.4-1-.9-1.1zM55.5 10.8h-.05c-.08.003-.15.017-.15.1l-5.7 11.9-4.9 11.3 11.7-3.3 12.9-4.2c.1-.1.2-.2.1-.2-.1-1.3-.7-5-4.8-9.6-4.2-4.7-7.8-5.8-9.1-6zM42.8 6.4c-6.2 0-9.4 2-10.5 2.8-.1.1-.1.2-.1.3l10 24.1L47.8 22l5.5-12.5c0-.1 0-.2-.1-.3-1.1-.9-4.2-2.8-10.4-2.8zM13.7 3.1c1-.5 2.1-.2 2.8.7L19 7l16.1 20.8c.6.8.6 1.7.2 2.5-.4.7-1.1 1.1-1.9 1.1h-.2l-26-2.8-4-.3c-1.1-.1-2-.9-2.2-2-.3-2.2-.4-6.9 3.2-13.4s7.5-8.9 9.5-9.8zm3.6 5h-.1c-1.2.6-4.4 2.4-7.4 7.8S7 25 7.2 26.4c0 .1.1.2.2.2l26 2.8c.1 0 .1 0 .2-.1s.1-.2.1-.3L17.5 8.2c-.1-.1-.1-.1-.2-.1zM51.7 23c1.4-1.3 3.6-1.2 5 .3 1.2 1.4 1.1 3.5-.3 4.8-.7.6-1.5.9-2.3.9-1 0-1.9-.3-2.6-1.1-.6-.7-1-1.6-.9-2.5 0-1 .4-1.8 1.1-2.4zm9.1-1.9c.7-.7 1.6-1 2.6-.8 1 .1 1.9.5 2.5 1.2 1.3 1.4 1.2 3.7-.3 5l-.196.156a3.777 3.777 0 01-2.204.744c-1 0-2-.4-2.7-1.2-.6-.7-1-1.7-.9-2.6.1-1 .5-1.9 1.2-2.5zm-6.8 3c-.3 0-.6.2-.9.4-.3.3-.5.7-.5 1 0 .3.1.7.4 1 .3.3.6.5 1 .5.3 0 .7-.1 1-.4.6-.5.6-1.4.1-2-.3-.3-.7-.5-1.1-.5zm-39-19c-.1-.1-.3-.2-.5-.1-1.7.7-5.2 2.9-8.5 8.9S2.7 24 3 26c.1.1.2.3.4.3l1.8.2C4.9 24.4 5 20.5 8 15s6.2-7.7 8.1-8.5zm3.6 16.3c.9-1.7 3-2.3 4.6-1.4 1.7 1 2.3 3 1.4 4.7-.4.8-1.1 1.3-2 1.6-.4.1-.7.1-1 .1-.5 0-1.1-.1-1.6-.4-1.7-.9-2.3-3-1.4-4.6zm-9.3.3c.8-1.5 2.6-2 4-1.2.7.4 1.3 1 1.4 1.8.3.8.2 1.6-.2 2.3-.5.9-1.5 1.5-2.6 1.5-.5 0-.9-.2-1.4-.4-1.5-.8-2-2.6-1.2-4zM57.5 7c-.2 0-.4.1-.6.2l-.7 1.6c2 .4 5.8 1.8 9.9 6.5 4.1 4.7 5.1 8.5 5.3 10.5l1.7-.5c.2-.1.3-.2.3-.4-.1-2-1-6-5.5-11.1-4.7-5.3-8.8-6.5-10.4-6.8zm5.7 15.2h-.1c-.3 0-.7.1-1 .4-.3.3-.5.7-.5 1.1 0 .4.1.8.4 1.1.6.6 1.6.7 2.2.1.7-.6.7-1.6.1-2.2-.3-.3-.7-.5-1.1-.5zm-41.6-.7c-.1 0-.3.1-.4.1-.4.1-.7.4-.9.7-.1.3-.2.6-.1 1s.4.7.7.9c.3.2.7.2 1.1.1.4-.1.7-.4.9-.7.3-.7.1-1.5-.6-1.9-.2-.1-.5-.2-.7-.2zm-9.49.7h-.41c-.3.1-.5.3-.6.5-.2.5-.1 1 .4 1.3.5.2 1 .1 1.3-.4.1-.2.1-.5.2-.7-.1-.3-.3-.5-.5-.6-.2-.1-.3-.1-.5-.1zm30.09-5.3c1.9 0 3.4 1.5 3.4 3.4s-1.5 3.4-3.4 3.4c-1.8 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4zm0 1.9c-.7 0-1.4.6-1.4 1.4 0 .8.6 1.4 1.4 1.4.8 0 1.4-.6 1.4-1.4 0-.8-.6-1.4-1.4-1.4zm15.2-5.4c.7.1 1.5.4 2 1s.8 1.4.8 2c-.1.7-.4 1.5-1 2l-.152.142c-.565.49-1.206.658-1.848.658-.8 0-1.6-.3-2.2-1-.5-.5-.7-1.3-.7-2.1.1-.7.4-1.5 1-2 .5-.5 1.3-.7 2.1-.7zm-41.6-1.9c.9-.2 1.9-.1 2.7.3 1.7.9 2.3 3.1 1.4 4.8-.4.8-1.2 1.4-2.1 1.7-.3.1-.7.1-1 .1-.6 0-1.2-.1-1.7-.4-.8-.4-1.4-1.2-1.7-2.1-.3-.9-.2-1.9.3-2.7.4-.8 1.2-1.4 2.1-1.7zm41.4 3.9h-.186c-.171.004-.343.029-.514.2-.2.2-.3.4-.3.7-.1.3 0 .5.2.7.4.4 1 .5 1.4.1.2-.2.2-.4.3-.7.1-.3 0-.5-.2-.7-.2-.2-.4-.3-.7-.3zm-40.4-2c-.1 0-.3.1-.4.1-.4.1-.7.3-.9.7-.2.4-.2.8-.1 1.2.1.4.3.7.7.9.4.2.8.2 1.2.1.4-.1.7-.3.9-.7.4-.7.2-1.7-.6-2.1-.3-.1-.5-.2-.8-.2zM47 8.6c2 0 3.6 1.6 3.6 3.6S49 15.8 47 15.8s-3.6-1.6-3.6-3.6S45 8.6 47 8.6zm-9.5.2c1.7 0 3 1.4 3 3 0 1.7-1.3 3-3 3s-3-1.4-3-3c0-1.7 1.3-3 3-3zm9.5 1.8c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6zm-9.5.2c-.6 0-1 .4-1 1s.5 1 1 1 1-.4 1-1-.4-1-1-1zm5.2-8.6c-6.8 0-10.4 2-12 3.2-.1.1-.2.3-.1.5l.7 1.6c1.6-1.2 5.2-3 11.4-3s9.6 1.8 11.3 3l.7-1.6c.1-.2 0-.4-.1-.5-1.5-1.2-5.1-3.2-11.9-3.2z"
                        fill="#fff"
                        strokeWidth="6"
                        variants={pathVariants}
                    />
                </motion.svg>
            </motion.div>
            <motion.div
                className="title"
                animate={{ y: -10 }}
                whileTap={{ y: -350 }}
                initial={{ y: -350 }}
                exit={{ y: 0 }}
                transition={{ duration: 1.5, type: 'spring', stiffness: 100 }}
            >
                <h1>Pizza Orderotron</h1>
            </motion.div>
            <AnimatePresence>
                {props.pizza && props.pizza.base && props.pizza.toppings.length !== 0 &&
                (
                    <BasketContainer onBlur={toggleHoverMenu} tabIndex="1">
                        <StyledBasket onTap={toggleHoverMenu} whileTap={{ scale: 1.2 }} initial={{ y: -100 }}
                                      animate={{ y: 0 }} exit={{ y: -100, transition: { duration: .3 } }}>
                            <Basket fill={'white'}/>
                        </StyledBasket>
                        <BasketMenu isHover={isHover} pizza={props.pizza}/>
                    </BasketContainer>
                )}
            </AnimatePresence>
        </header>
    );
};

export default withRouter(Header);
