import {
  Alert,
  Box,
  Button,
  Card,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const CartView = () => {
  const { cartList, removeItem } = useContext(CartContext);

  if (cartList.length === 0)
    return (
      <Alert severity="info" sx={{ maxWidth: "700px", m: "20px auto" }}>
        <Typography>No tenés productos en el carrito :c. </Typography>
        <Typography>
          Deberías{" "}
          <Link component={RouterLink} to="/" underline="hover">
            volver al listado.
          </Link>
        </Typography>
      </Alert>
    );

  const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const renderedItems = cartList.map((cartItem) => {
    return (
      <Card key={cartItem.id} sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          image={cartItem.pictureUrl}
          sx={{ width: "150px" }}
        />
        <Box sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Typography variant="h5">{cartItem.title}</Typography>
          <Typography sx={{ color: "#a3a3a3" }}>
            {cartItem.quantity} x ${cartItem.price}
          </Typography>
          <Button
            sx={{ mt: "auto" }}
            variant="contained"
            color="warning"
            onClick={() => removeItem(cartItem.id)}
          >
            Eliminar del carrito
          </Button>
        </Box>
      </Card>
    );
  });

  return (
    <Box
      sx={{
        p: 4,
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <Typography variant="h4" align="center">
        Carrito de compras
      </Typography>
      <Box
        sx={{ display: "grid", maxWidth: "500px", my: 2, mx: "auto", gap: 2 }}
      >
        {renderedItems}
      </Box>
      <Typography variant="h5" align="center" fontWeight={600}>
        Total: ${totalPrice}
      </Typography>
      <Button to="/checkout" component={RouterLink} variant="contained">
        Realizar compra
      </Button>
    </Box>
  );
};

export default CartView;
