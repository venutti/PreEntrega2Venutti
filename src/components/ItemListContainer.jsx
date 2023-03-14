import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ItemList from "./ItemList";

import getProducts from "../data/products";
import { Skeleton } from "@mui/material";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setProducts(getProducts());
    }, 2000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      {products.length > 0 ? (
        <ItemList items={products} />
      ) : (
        <Skeleton variant="rounded" width="80%" height="300px" />
      )}
    </Box>
  );
};

export default ItemListContainer;
