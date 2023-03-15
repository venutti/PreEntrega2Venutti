import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ItemList from "./ItemList";

import { getProducts } from "../data/products";
import { Grid, Skeleton } from "@mui/material";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setProducts([]); // Para dar un efecto de loading
    getProducts().then((items) => {
      if (id) {
        setProducts(items.filter((product) => product.category === id));
      } else {
        setProducts(items);
      }
    });
  }, [id]);

  return (
    <Box sx={{ p: 2, display: "grid", placeContent: "center" }}>
      {products.length > 0 ? (
        <Grid container spacing={2}>
          <ItemList items={products} />
        </Grid>
      ) : (
        <Skeleton variant="rounded" width="600px" height="300px" />
      )}
    </Box>
  );
};

export default ItemListContainer;
