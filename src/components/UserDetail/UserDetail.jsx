import React from 'react'
import UserContext from '../../context/UserContext/'
import { useContext } from 'react'

const UserDetail = () => {

    const {user, editUser} = useContext(UserContext)

const changeName =(e) => {

    editUser(e.target.value, user.age)
}

    return (
        <div> UserDetail

            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <input type="text" value={user.name} onChange={changeName} />

        </div>
    )
}

export default UserDetail 