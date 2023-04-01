import { Button, Container } from "@mui/material";
import Subtitle from "../shared/Subtitle";
import { Link } from "react-router-dom";
import okGhostImage from "./assets/ok_ghost.png";

const OrderConfirmationAlert = ({ orderID }) => {
  return (
    <Container
      maxWidth="sm"
      sx={{ my: 2, display: "grid", justifyItems: "center", gap: 1 }}
    >
      <img style={{ maxWidth: "100%", height: "auto" }} src={okGhostImage} />
      <Subtitle>
        <strong>¡Gracias por tu compra!</strong>
        <br /> Tu número de orden es: {orderID}
      </Subtitle>
      <Button component={Link} to="/" variant="contained" color="primary">
        Volver al listado
      </Button>
    </Container>
  );
};

export default OrderConfirmationAlert;
