import React from 'react'
import ItemListContainer from '../Items/ItemListContainer'

const Home = () => {
        return (
            <div className="container mt-2 bg-body-tertiary">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="display-1 text-white bg-dark p-1" style={{ fontSize: '15px', fontFamily: 'Open Sans' }}>  HOME</h1>
                    </div>
                </div>
                <ItemListContainer />
            </div>
    )
}
export default Home
