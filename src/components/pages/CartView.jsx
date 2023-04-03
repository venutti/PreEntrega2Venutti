import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import Title from "../shared/Title";
import CartItem from "../CartItem";
import EmptyCartAlert from "../alerts/EmptyCartAlert";
import DarkPanel from "../shared/DarkPanel";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Link as RouterLink } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CartView = () => {
  const { cartList } = useContext(CartContext);

  if (cartList.length === 0) return <EmptyCartAlert />;

  const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const renderedItems = cartList.map((cartItem) => {
    return <CartItem key={cartItem.id} cartItem={cartItem} />;
  });

  return (
    <Container maxWidth="md">
      <Title>CARRITO DE COMPRAS</Title>
      <Stack mb={4} spacing={2}>
        {renderedItems}
      </Stack>
      <DarkPanel>
        <Grid container columnSpacing={2}>
          <Grid item xs={12} sm>
            <Typography variant="h6" fontWeight={600}>
              Total: ${totalPrice}
            </Typography>
          </Grid>
          <Grid item xs={12} sm="auto">
            <Button
              to="/checkout"
              component={RouterLink}
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon />}
            >
              Realizar compra
            </Button>
          </Grid>
        </Grid>
      </DarkPanel>
    </Container>
  );
};

export default CartView;
