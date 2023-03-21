import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

const ItemDetail = ({ item }) => {
  const [showCounter, setShowCounter] = useState(true);
  const { title, description, pictureUrl, price } = item;
  const { addToCart } = useContext(CartContext);

  const handleAdd = (countOnAdd) => {
    addToCart(item, countOnAdd);
    setShowCounter(false);
  };

  return (
    <Card sx={{ maxWidth: "1000px", display: "flex", borderRadius: 3 }}>
      <CardMedia
        component="img"
        sx={{ width: "30%", flexShrink: 0 }}
        image={pictureUrl}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ flex: "1 0 auto", padding: 2 }}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body" color="gray">
            {description}
          </Typography>
          <Typography
            color="success.dark"
            variant="h4"
            sx={{ marginBlockStart: 1 }}
          >
            $ {price}
          </Typography>
        </Box>
        {showCounter && <ItemCount stock={item.stock} onAdd={handleAdd} />}
      </CardContent>
    </Card>
  );
};

export default ItemDetail;
