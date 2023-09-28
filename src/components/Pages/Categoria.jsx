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
            <h2 >{category} Products</h2>
            <div >
                {products.map((product) => (
                    <Card key={product.id}>
                        <Card.Body >
                            <Card.Img src={product.image}  />
                            <Card.Title><h1 >{product.title}</h1></Card.Title>
                            <Card.Text >{product.description}</Card.Text>
                            <Card.Text >${product.price}</Card.Text>
                            <Link to={`/Detalle/${product.id}`}>
                                <Button >+ Info</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Categoria