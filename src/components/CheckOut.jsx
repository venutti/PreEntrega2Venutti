import { Alert, Container, Link, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link as RouterLink } from "react-router-dom";
import { serverTimestamp } from "firebase/firestore";
import { addOrder } from "../services/database";
import ContactForm from "./ContactForm";
import Title from "./shared/Title";
import Subtitle from "./shared/Subtitle";
import EmptyCartAlert from "./alerts/EmptyCartAlert";
import OrderConfirmationAlert from "./alerts/OrderConfirmationAlert";

const CheckOut = () => {
  const [orderID, setOrderID] = useState("");

  const handleSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setOrderID("123456");
  };

  if (orderID) return <OrderConfirmationAlert orderID={orderID} />;

  return (
    <Container maxWidth="sm">
      <Title>CHECKOUT</Title>
      <Subtitle>Complete los datos para finalizar la compra</Subtitle>
      <ContactForm onSubmit={handleSubmit} />
    </Container>
  );

  const { cartList } = useContext(CartContext);

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

  // TODO: Mover lógica en un higher order component
  if (orderID) {
    // TODO: REFACTORIZAR ALERTA => Nuevo componente
    return (
      <Alert severity="success" sx={{ maxWidth: "700px", m: "20px auto" }}>
        <Typography>
          Gracias por tu compra! Tu número de orden es: {orderID}
        </Typography>
      </Alert>
    );
  }

  const totalPrice = cartList.reduce(
    (total, { price, quantity }) => total + price * quantity,
    0
  );

  // const handlePurchase = (event) => {
  //   // TODO: MULTIPLES RESPONSABILIDADES => REFACTORIZAR (createOrder, submitOrder)
  //   event.preventDefault();
  //   const order = {
  //     buyer: {
  //       name,
  //       lastName,
  //       email,
  //       phone,
  //     },
  //     items: cartList.map((item) => {
  //       return {
  //         id: item.id,
  //         title: item.title,
  //         price: item.price,
  //         quantity: item.quantity,
  //       };
  //     }),
  //     date: serverTimestamp(),
  //     total: totalPrice,
  //   };
  //   addOrder(order).then((id) => setOrderID(id));
  // };
};

export default CheckOut;
