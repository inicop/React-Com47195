
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import React, { useState, useEffect } from 'react'

const ItemListContainer = () => {

  const { categoryId } = useParams();

  const [items, setItems] = useState([]);

  //let itemsFetchUrl = 'https://fakestoreapi.com/products';

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");
    const q = query(itemCollection, where("catergoryId", "==", "celular"))
    //console.log(q)
    console.log(q)
    getDocs(q)
      .then(snapshot => {
        const allData = snapshot.docs.map(document => ({ id: document.id, ...document.data() }))
        setItems(allData)
      })
  }, [])

  // if (category === undefined) {
  //   itemsFetchUrl = 'https://fakestoreapi.com/products';
  // } else {

  //   itemsFetchUrl = `https://fakestoreapi.com/products/category/${category}`;
  // }

  //const [items] = useFetch(itemsFetchUrl, category);

  return (
    <Container>
      <Row>
        {
          items.length > 0 &&
          <ItemList items={items} />
        }
      </Row>
    </Container>
  )
}
export default ItemListContainer