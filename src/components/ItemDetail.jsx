import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const { title, description, pictureUrl, price } = item;
  const { addToCart } = useContext(CartContext);

  const handleAdd = (countOnAdd) => {
    setQuantity(countOnAdd);
    addToCart(item, countOnAdd);
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {quantity === 0 ? (
            <ItemCount stock={item.stock} onAdd={handleAdd} />
          ) : (
            <Link to="/cart">
              <Button variant="contained" color="warning">
                Terminar con mi compra
              </Button>
            </Link>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ItemDetail;
