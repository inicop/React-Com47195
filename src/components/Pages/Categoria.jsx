import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const Categoria = () => {

    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log(error))
    }, [category])

    return (
        <div>
            <h2 className={Style.text}>{category} Products</h2>
            <div className={Style.imagen}>
                {products.map((product) => (
                    <Card key={product.id}>
                        <Card.Body >
                            <Card.Img src={product.image}  />
                            <Card.Title><h1 className={Style.title} >{product.title}</h1></Card.Title>
                            <Card.Text className={Style.Descrp}>{product.description}</Card.Text>
                            <Card.Text className={Style.price} >${product.price}</Card.Text>
                            <Link to={`/Detalle/${product.id}`}>
                                <Button className={Style.buttom}>+ Info</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Categoria