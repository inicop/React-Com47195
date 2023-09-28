import React from 'react'
import { Container } from 'react-bootstrap'

const ItemDetail = ({ item }) => {

    return (
        <Container>
            <h5>{item.title}</h5>
            <img src={item.image} alt="" />
            <p>Descripción: {item.description}</p>
            <p>Precio: {item.price}</p>
            <p>Categoría: {item.catergory}</p>
        </Container>
    )
}

export default ItemDetail