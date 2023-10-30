import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './StyleCard.css'


const CardItem = ({ item }) => {

    return (

        <Card >
            <Card.Img src={item.image} style={{ maxWidth: '100%', height: '250px', borderRadius: '8px' }} />
            <Card.Body>
                <Card.Title style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{item.title}</Card.Title>
                <Card.Text style={{ fontSize: '0.7rem' }}>Precio: {item.price}</Card.Text>
                <Link to={`/producto/${item.id}`}>
                    <Button variant="primary">+ Info</Button>
                </Link>




            </Card.Body>
        </Card>
    );

}
export default CardItem