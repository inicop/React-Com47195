import React from 'react'
import ItemListContainer from '../Items/ItemListContainer'
import { collection, getFirestore, addDoc } from "firebase/firestore";
import Button from '../Button/Button'
const Home = () => {

    const data = [
        // {
        //     title: "iPad Apple 10th generation 2022 A2696 10.9' 64GB plata",
        //     image: "https://res.cloudinary.com/dcqtyz8e7/image/upload/v1698719974/Apple-10.9_q6azax.jpg",
        //     description: "Este producto combina la potencia y la capacidad de una computadora con la versatilidad y facilidad de uso que solo un iPad puede brindar. Realizar varias tareas a la vez, como editar documentos mientras buscás información en internet o sacarte una selfie, es sumamente sencillo",
        //     price: 800,
        //     stock: 10,
        //     categoryId: "tablets"
        // },
        //     {
        //     title: "Apple MacBook Pro MNEP3PP/A 13 Inches M2 chip 8GB Unified RAM 256GB SSD Silver",
        //     image: "https://res.cloudinary.com/dcqtyz8e7/image/upload/v1698720272/Apple-MacBook-Pro_dzm5ob.jpg",
        //     description: "La notebook más delgada y ligera de Apple viene con los superpoderes del chip M1. Termina todos tus proyectos mucho más rápido con el CPU de 8 núcleos y disfruta como nunca antes de apps y juegos con gráficos avanzados gracias al GPU de hasta 8 núcleos.",
        //     price: 1800,
        //     stock: 15,
        //     categoryId: "computadoras"
        // },
        //     {
        //     title: "iPhone 12, 128 gb pantalla retina 5G",
        //     image: "https://res.cloudinary.com/dcqtyz8e7/image/upload/v1698720113/Iphone-12_osrllg.jpg",
        //     description: "iPhone 12 es un smartphone de vanguardia con conectividad 5G, potenciado por el chip A14 Bionic para un rendimiento excepcional. Cuenta con una pantalla Super Retina XDR, dos cámaras avanzadas con modo Noche, y es compatible con MagSafe para accesorios magnéticos.",
        //     price: 600,
        //     stock: 15,
        //     categoryId: "celulares"
        // },
            {
            title: "NUEVO iphone 15",
            image: "https://res.cloudinary.com/dcqtyz8e7/image/upload/v1698853799/Apple-iPhone-15-Pro-128GB-White-Titanium-MTUW3ZP_A-02_fnbfhj.jpg",
            description: "El iPhone 15 Pro tiene un acabado nuevo, remplazando al acero inoxidable de la generación anterior por titanio. Promete ser mucho más ligero y resistente, con unos nuevos bordes más redondeados. Este nuevo material permite, asimismo un mejor ejercicio de disipación térmica",
            price: 1800,
            stock: 10,
            categoryId: "celulares"

        }


    ]
    const insertarDatos = () => {

        const db = getFirestore();
        const collectionRef = collection(db, "items");

        for (let item of data) {
            addDoc(collectionRef, item)
                .then(res => console.log("se insertó correctamente la db", res.id))
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
