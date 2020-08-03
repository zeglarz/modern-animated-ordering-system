import * as React from 'react';

function Basket(props) {
    return (
        <svg width={30} height={50} viewBox="0 0 120 120" {...props}>
            <title>{'Basket'}</title>
            <g stroke="#fff" strokeWidth={8} fill="none" fillRule="evenodd">
                <path
                    d="M89.53 36c3.849 0 7.494 1.526 10.283 3.974 2.773 2.434 4.71 5.789 5.12 9.508h0l9.4 85.473c.39 3.546-1.188 6.727-3.963 9.038C107.366 146.496 102.993 148 98 148h0-79c-4.993 0-9.366-1.504-12.37-4.007-2.775-2.311-4.353-5.492-3.963-9.038h0l9.4-85.473c.41-3.719 2.347-7.074 5.12-9.508C19.977 37.526 23.621 36 27.47 36h0z"/>
                <path
                    d="M84 53C82.378 19.299 74.044 2.448 58.997 2.448S35.321 19.425 33.11 53.379"
                    strokeLinecap="square"
                />
            </g>
        </svg>
    );
}

export default Basket;
