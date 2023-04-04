import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { CenterFocusStrong } from "@mui/icons-material";
import GoToCartButton from "./buttons/GoToCartButton";
import ItemDescription from "./ItemDescription";

const ItemDetail = ({ item }) => {
  const { title, description, pictureUrl, price } = item;
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
      <GoToCartButton />
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
