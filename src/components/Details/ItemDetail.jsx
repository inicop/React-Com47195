import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import Counter from '../Counter/Counter';

const itemDetailStyle = {
    maxWidth: '600px', // Ancho máximo del contenedor
    margin: '0 auto', // Centrar el contenedor horizontalmente
    padding: '20px', // Espaciado interno
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra sutil
    borderRadius: '5px', // Bordes redondeados
    backgroundColor: '#fff', // Color de fondo
    textAlign: 'center', // Texto centrado
};

const titleStyle = {
    fontSize: '1.5rem', // Tamaño de fuente del título
    fontWeight: 'bold', // Texto en negrita
    marginBottom: '10px', // Espaciado inferior
};

const imageStyle = {
    maxWidth: '60%', // Asegura que la imagen no desborde el contenedor
    height: 'auto', // Escala la imagen proporcionalmente
    marginBottom: '20px', // Espaciado inferior
};

const paragraphStyle = {
    fontSize: '1rem', // Tamaño de fuente de párrafo
    margin: '10px 0', // Espaciado vertical
};

const ItemDetail = ({ item, onAdd }) => {
    return (

        <Container style={itemDetailStyle}>
            <h5 style={titleStyle}>{item.title}</h5>
            <img src={item.image} alt={item.title} style={imageStyle} />
            <p style={paragraphStyle}>Descripción: {item.description}</p>
            <p style={paragraphStyle}>Precio: ${item.price}</p>
            <p style={paragraphStyle}>Categoría: {item.categoryId}</p>
            <p style={paragraphStyle}>Stock {item.stock}</p>

            <Counter onAdd={onAdd} stock ={item.stock} text="Agregar al carrito" itemId={item.id} />
  
        </Container>
    );
};

export default ItemDetail;




