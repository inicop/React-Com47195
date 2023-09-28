import React from 'react'
import ItemListContainer from '../Items/ItemListContainer'
import { useParams } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            Home
            <ItemListContainer />
        </div>
    )
}
export default Home