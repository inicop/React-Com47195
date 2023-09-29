
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import { Row } from 'react-bootstrap';
import useFetch from '../Hooks/useFetch';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const { category } = useParams();
  let itemsFetchUrl = 'https://fakestoreapi.com/products';

  if (category === undefined) {
    itemsFetchUrl = 'https://fakestoreapi.com/products';
  } else {

    itemsFetchUrl = `https://fakestoreapi.com/products/category/${category}`;
  }

  const [items] = useFetch(itemsFetchUrl, category);

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