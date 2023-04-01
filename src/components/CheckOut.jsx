import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { createOrder, addOrder } from "../services/database";

import { Container } from "@mui/material";
import ContactForm from "./ContactForm";
import Title from "./shared/Title";
import Subtitle from "./shared/Subtitle";
import EmptyCartAlert from "./alerts/EmptyCartAlert";
import OrderConfirmationAlert from "./alerts/OrderConfirmationAlert";
import PurchaseResume from "./PurchaseResume";

const CheckOut = () => {
  const { cartList } = useContext(CartContext);
  const [orderID, setOrderID] = useState("");

  if (orderID) return <OrderConfirmationAlert orderID={orderID} />;

  if (cartList.length === 0) return <EmptyCartAlert />;

  const handleSubmit = async (values) => {
    const newOrder = createOrder(cartList, values);
    const newOrderID = await addOrder(newOrder);
    setOrderID(newOrderID);
  };

  return (
    <Container maxWidth="sm">
      <Title>CHECKOUT</Title>
      <Subtitle>Complete los datos para finalizar la compra</Subtitle>
      <ContactForm onSubmit={handleSubmit} />
      <PurchaseResume cartList={cartList} />
    </Container>
  );
};

export default CheckOut;
