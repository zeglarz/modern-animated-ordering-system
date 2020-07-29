import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonContainer, ButtonsColumn } from '../styles.js';
import { withRouter } from 'react-router';

const Order = ({ pizza, resetState, location }) => {

    return (
        <div className='order container'>
            <h3>Please review the order and push "place order" <br/> button to place order</h3>
            <p>You are about to order a {pizza.base} pizza with:</p>
            {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
            <ButtonsColumn>
                <ButtonContainer>
                    <Link to={{
                        pathname: '/base',
                        state: { from: location }
                    }}>
                        <Button>Change Crust</Button>
                    </Link>
                </ButtonContainer>
                <ButtonContainer back>
                    <Link to='/toppings'>
                        <Button>Change Toppings</Button>
                    </Link>
                </ButtonContainer>
                <ButtonContainer>
                    <Link to='/'>
                        <Button onClick={() => resetState()}>
                            Place Order
                        </Button>
                    </Link>
                </ButtonContainer>
            </ButtonsColumn>
        </div>
    )
        ;
};

export default withRouter(Order);
