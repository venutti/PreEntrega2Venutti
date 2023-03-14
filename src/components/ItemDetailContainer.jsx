import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getProduct } from "../data/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ id = 1 }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProduct(id).then((product) => setItem(product));
  }, []);

  return (
    <Box sx={{ display: "grid", placeContent: "center" }}>
      {item ? <ItemDetail item={item} /> : <p>Cargando item...</p>}
    </Box>
  );
};

export default ItemDetailContainer;
