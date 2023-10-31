
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import React, { useState, useEffect } from 'react'

const ItemListContainer = () => {

  const { category } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");

    console.log(itemCollection)
    console.log(category)
    let q;

    if (category === undefined) {
      q = itemCollection;

    } else {
      q = query(itemCollection, where("categoryId", "==", category))

    }
    getDocs(q)
      .then(snapshot => {
        const allData = snapshot.docs.map(document => ({ id: document.id, ...document.data() }))
        setItems(allData)
      })

  }, [category])


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