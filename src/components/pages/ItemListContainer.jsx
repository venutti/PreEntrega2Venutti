import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllItems, getItemsByCategory } from "../../services/database";

import { Grid, Container } from "@mui/material";
import ItemList from "../ItemList";
import ItemListSkeleton from "../skeletons/ItemListSkeleton";

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
    // getProducts();
  }, [categoryID]);

  return (
    <Container maxWidth="lg" sx={{ p: 2 }}>
      {loading ? (
        <ItemListSkeleton />
      ) : (
        <Grid container spacing={2}>
          <ItemList items={products} />
        </Grid>
      )}
    </Container>
  );
};

export default ItemListContainer;
