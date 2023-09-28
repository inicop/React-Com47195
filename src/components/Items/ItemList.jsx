import React from 'react'
import { Col } from 'react-bootstrap'
import CardItem from '../CardItem'

const ItemList = ({ items }) => {
    return (
        <>
            {
                items.map((item) => (
                    <Col sm={12} md={6} lg={4} xl={3} key={item.id}>
                        <CardItem item={item}/>
                    </Col>
                ))
            }
        </>
    )
}
export default ItemList