import React from 'react'
import ItemListContainer from '../Items/ItemListContainer'
import './StylePage.css'
import { useParams } from 'react-router-dom'


const Categoria = () => {

    const {category} = useParams();
    return (
        <div className="container mt-2 bg-body-tertiary">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="display-1 text-white bg-dark p-1" style={{ fontSize: '50px', fontFamily: 'Open Sans' }}>  {category.toUpperCase()}</h1>
                </div>
            </div>
            <ItemListContainer />
        </div>


    )
}

export default Categoria