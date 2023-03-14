import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ItemList from "./ItemList";

import { getProducts } from "../data/products";
import { Skeleton } from "@mui/material";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((items) => setProducts(items));
  }, []);

  return (
    <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
      {products.length > 0 ? (
        <ItemList items={products} />
      ) : (
        <Skeleton variant="rounded" width="60%" height="300px" />
      )}
    </Box>
  );
};

export default ItemListContainer;
