import { Card, CardMedia, IconButton, Stack, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import QuantityButton from "./QuantityButton";

import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ cartItem }) => {
  const { removeItem, changeQuantity } = useContext(CartContext);
  const handleIncrement = () => {
    if (cartItem.quantity >= cartItem.stock) return;
    changeQuantity(cartItem.id, cartItem.quantity + 1);
  };

  const handleDecrement = () => {
    if (cartItem.quantity === 1) {
      removeItem(cartItem.id);
    } else {
      changeQuantity(cartItem.id, cartItem.quantity - 1);
    }
  };

  return (
    <Card key={cartItem.id} sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        image={cartItem.pictureUrl}
        sx={{ width: "150px" }}
      />
      <Stack padding={2} sx={{ flexGrow: "1" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="start"
        >
          <Typography variant="h5">{cartItem.title}</Typography>
          <IconButton color="error" onClick={() => removeItem(cartItem.id)}>
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
        <Typography sx={{ color: "grey.600" }}>
          {cartItem.quantity} x ${cartItem.price}
        </Typography>
        <Typography sx={{ color: "grey.600" }}>
          {cartItem.stock} en stock
        </Typography>
        <QuantityButton
          quantity={cartItem.quantity}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </Stack>
    </Card>
  );
};

export default CartItem;
