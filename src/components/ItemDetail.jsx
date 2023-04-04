import { Box, Stack } from "@mui/material";
import ItemCount from "./ItemCount";
import GoToCartButton from "./buttons/GoToCartButton";
import ItemDescription from "./ItemDescription";

import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";

const ItemDetail = ({ item }) => {
  const { title, pictureUrl } = item;
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const handleAdd = (countOnAdd) => {
    setQuantity(countOnAdd);
    addToCart(item, countOnAdd);
  };

  const actionButton =
    quantity === 0 ? (
      <ItemCount stock={item.stock} onAdd={handleAdd} />
    ) : (
      <Box sx={{ display: "grid", placeContent: "center" }}>
        <GoToCartButton />
      </Box>
    );

  return (
    <Stack
      alignItems={{ xs: "center", sm: "start" }}
      direction={{ xs: "column", sm: "row" }}
      sx={{ gap: 2 }}
    >
      <Box width={300} sx={{ flexShrink: 0 }}>
        <img src={pictureUrl} alt={title} />
        {actionButton}
      </Box>
      <ItemDescription item={item} />
    </Stack>
  );
};

export default ItemDetail;
