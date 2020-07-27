import React, { useState } from 'react';
import { Route, Switch } from 'react';
import Header from './components/Header';

const App = () => {
    const [pizza, setPizza] = useState({ base: '', toppings: [] });

    const addBase = base => setPizza({ ...pizza, base });

    const addToppings = topping => {
        let newToppings = [];
        if (!pizza.toppings.includes(topping)) {
            newToppings = [...pizza.toppings, topping];
        } else {
            newToppings = pizza.toppings.filter(item => item !== topping);
        }
        setPizza({ ...pizza, toppings: newToppings });
    };

    return (
        <div className="App">

        </div>
    );
};

export default App;
