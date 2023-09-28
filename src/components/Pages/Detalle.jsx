import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../Details/ItemDetailContainer'

const Detalle = () => {
    const { id } = useParams()
    console.log(useParams())
    return (
        <div>
            <ItemDetailContainer id={id} />
        </div>
    )
}
export default Detalle