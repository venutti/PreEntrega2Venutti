import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllItems, getItemsByCategory } from "../../services/database";

import { Container } from "@mui/material";
import ItemList from "../ItemList";
import ItemListSkeleton from "../skeletons/ItemListSkeleton";
import Title from "../shared/Title";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id: categoryID } = useParams();

  const getProducts = async () => {
    setLoading(true);
    const productList = categoryID
      ? await getItemsByCategory(categoryID)
      : await getAllItems();
    setProducts(productList);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [categoryID]);

  return (
    <Container maxWidth="lg" sx={{ p: 2 }}>
      <Title>LISTA DE PRODUCTOS</Title>
      {loading ? <ItemListSkeleton /> : <ItemList items={products} />}
    </Container>
  );
};

export default ItemListContainer;
