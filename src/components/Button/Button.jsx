import React from 'react';

const Button = ({ text, cb, type = "button" }) => {
    return (
        <button onClick={cb} type={type} className="btn btn-primary btn-sm">
            {text}
        </button>
    );
};

export default Button;
