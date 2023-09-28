
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import { Row } from 'react-bootstrap';
import useFetch from '../Hooks/useFetch';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const[items] = useFetch('https://fakestoreapi.com/products');
     //const[items] = useFetch('https://fakestoreapi.com/products/category/jewelery');


  return (
    <Container>
      <Row>
        {
          items !== null &&
          <ItemList items={items} />
        }
      </Row>
    </Container>
  )
}
export default ItemListContainer
