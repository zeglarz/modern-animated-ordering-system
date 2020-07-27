import React from 'react';
import Link from 'react-router-dom/modules/Link';

const Home = (props) => {
    return (
        <div className='home container'>
            <h2>
                Welcome to Pizza Oderotron!
            </h2>
            <Link to='/base'>
                <button>
                    Create your own Pizza
                </button>
            </Link>
        </div>
    );
};

export default Home;
