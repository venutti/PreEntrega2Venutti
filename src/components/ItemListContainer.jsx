import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllItems, getItemsByCategory } from "../services/database";

import { Grid, Skeleton, Box } from "@mui/material";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
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
    <Box sx={{ p: 2, display: "grid", placeContent: "center" }}>
      {loading ? (
        <Skeleton variant="rounded" width="600px" height="300px" />
      ) : (
        <Grid container spacing={2}>
          <ItemList items={products} />
        </Grid>
      )}
    </Box>
  );
};

export default ItemListContainer;
