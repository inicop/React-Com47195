import React from 'react'

const ButtonCart = ({ text, cb }) => {
    return (
        <button onClick={cb} className="btn btn-primary btn-lg btn-block mt-3" type="button">
            {text}
        </button >
    )
}

export default ButtonCart