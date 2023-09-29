import Counter from '../Counter/Counter'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardItem = ({ item }) => {
    return (

        <Card >
            <Card.Img src={item.image} />
            <Card.Body>
            <Card.Title style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{item.title}</Card.Title>
                <Card.Text style={{ fontSize: '0.875rem' }}>{item.description}</Card.Text>            
                <Link to={`/producto/${item.id}`}>
                    <Button variant="primary">+ Info</Button>
                </Link>
                <Counter />
            </Card.Body>
        </Card>
    );

}
export default CardItem