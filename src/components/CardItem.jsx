import Counter from './Counter/Counter'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const CardItem = ({ item }) => {
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title> {item.title} </Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <Link to={`/producto/${item.id}`}>
                    <Button variant="primary">+ Info</Button>
                </Link>
                <Counter />
            </Card.Body>
        </Card>
    );

}
export default CardItem