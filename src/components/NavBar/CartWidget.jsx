import React from 'react'
import { BsCart3 } from "react-icons/bs"
import UserContext from '../../context/UserContext/'


const CartWidget = () => {

    const style = {
        color: "black",
        marginRight: "10px"
    }
    return (
        <div style={style}>
            <UserContext.Consumer>
                {
                    ({user}) => <p> Welcome,{user.name}</p>
                    // return  < BsCart3 /> <span>{user.name}</span>
                }
            </UserContext.Consumer>
        </div>
    )
}

export default CartWidget
