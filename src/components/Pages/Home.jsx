import React from 'react'
import ItemListContainer from '../Items/ItemListContainer'
import { collection, getFirestore, addDoc } from "firebase/firestore";
import Button from '../Button/Button'
const Home = () => {

    const data = [
        {
            categoryId: "celulares",
            description: "iPhone 13",
            image: "",
            price: 1200,
            stock: 10,
            title: "Nuevo iPhone 13"
        }


    ]
    const insertarDatos = () => {

        const db = getFirestore();
        const collectionRef = collection(db, "items");

        for (let item of data) {
            addDoc(collectionRef, item)
                .then(res => console.log("se insertó correctamente la db", red.id))
                .catch(err => console.log(err))
        }
    }


    return (
        <div className="container mt-2 bg-body-tertiary">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="display-1 text-white bg-dark p-1" style={{ fontSize: '15px', fontFamily: 'Open Sans' }}>  HOME</h1>
                </div>
            </div>
            <Button cb={() => insertarDatos()} text="Agregar Productos" />
            <ItemListContainer />
        </div>
    )
}
export default Home
