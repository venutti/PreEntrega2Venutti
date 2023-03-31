import {
  Alert,
  Box,
  Button,
  FormControl,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link as RouterLink } from "react-router-dom";
import { serverTimestamp } from "firebase/firestore";
import { addOrder } from "../services/database";

const CheckOut = () => {
  const { cartList } = useContext(CartContext);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [orderID, setOrderID] = useState("");

  const filledFields = name && lastName && email && phone;

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

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

  if (orderID) {
    return (
      <Alert severity="success" sx={{ maxWidth: "700px", m: "20px auto" }}>
        <Typography>
          Gracias por tu compra! Tu número de orden es: {orderID}
        </Typography>
      </Alert>
    );
  }

  const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePurchase = (event) => {
    event.preventDefault();
    const order = {
      buyer: {
        name,
        lastName,
        email,
        phone,
      },
      items: cartList.map((item) => {
        return {
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
        };
      }),
      date: serverTimestamp(),
      total: totalPrice,
    };
    addOrder(order).then((id) => setOrderID(id));
  };

  return (
    <Box
      component="form"
      sx={{ display: "grid", maxWidth: "sm", gap: 2, mx: "auto" }}
      onSubmit={handlePurchase}
    >
      <TextField
        label="Nombre"
        required
        value={name}
        onChange={handleNameChange}
      />
      <TextField
        label="Apellido"
        required
        value={lastName}
        onChange={handleLastNameChange}
      />
      <TextField
        label="Email"
        required
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        label="Teléfono"
        required
        value={phone}
        onChange={handlePhoneChange}
      />
      <Button type="submit" disabled={!filledFields} variant="contained">
        Finalizar compra
      </Button>
    </Box>
  );
};

export default CheckOut;
