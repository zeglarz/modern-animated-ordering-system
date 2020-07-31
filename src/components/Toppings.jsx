import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, ButtonContainer, ButtonsWrapper, MenuItem, Item } from '../styles.js';

const Toppings = ({ addToppings, pizza, history, location }) => {
    const toppings = ['pepperoni', 'extra mozzarella', 'pineapple', 'ham', 'rucola', 'prosciutto', 'chili', 'jalapeño', 'strawberries'];
    const previousPath = history.location.state && history.location.state.from.pathname === '/order';
    const [buttonClicked, setButtonClicked] = useState(false);

    return (
        <MenuItem left={previousPath || buttonClicked}>
            <h3>Choose your toppings</h3>
            <ul>
                {toppings.map(topping => {
                    let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
                    return (
                        <Item key={topping} onClick={() => addToppings(topping)}><span
                            className={spanClass}>{topping}</span></Item>);
                })}
            </ul>
            <ButtonsWrapper>
                <ButtonContainer back>
                    <Link to={{
                        pathname: '/base',
                        state: { from: location }
                    }}>
                        <Button onClick={() => setButtonClicked(true)}>Back</Button>
                    </Link>
                </ButtonContainer>
                {pizza.toppings.length > 0 && (
                    <ButtonContainer>
                        <Link to='/order'>
                            <Button>Next</Button>
                        </Link>
                    </ButtonContainer>
                )}
            </ButtonsWrapper>
        </MenuItem>
    );
};

export default withRouter(Toppings);
