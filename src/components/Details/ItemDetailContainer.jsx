import ItemDetail from './ItemDetail'
import useFetch from '../Hooks/useFetch'
import CartContext from '../../context/cartContext/CartContext'
import React, { useState, useEffect, useContext } from 'react'
import { doc, getDoc, getFirestore } from "firebase/firestore"

const ItemDetailContainer = ({ id }) => {
    const onAdd = (q) => {
        addItem(item, q)
    }
    const [item, setItem] = useState(null)
    const { addItem } = useContext(CartContext)
    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, "items", id)
        getDoc(itemRef)
            .then((snapshot) => {

                if (snapshot.exists()) {
                    setItem({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                }
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            {
                item !== null &&
                <ItemDetail item={item} onAdd={onAdd} />
            }
        </>
    )
}

export default ItemDetailContainer