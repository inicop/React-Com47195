import React, { useState } from 'react'
import UserContext from './UserContext/'


const UserContexProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "Santiago",
        age: 32
    })

    const editUser = (newName, newAge) => {
        setUser({
            name: newName,
            age: newAge
        })
    }

    const value = {
        user,
        editUser
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContexProvider