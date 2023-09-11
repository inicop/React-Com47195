import React from 'react'

const Button = ({ text, cb }) => {
    return (
        <button onClick={cb} className="btn btn-primary" type="button">
            {text}
        </button >
    )
}

export default Button

