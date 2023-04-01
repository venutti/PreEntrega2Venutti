import { Button, Container } from "@mui/material";
import Subtitle from "../shared/Subtitle";
import { Link } from "react-router-dom";
import sadGhostImage from "./assets/sad_ghost.png";

const EmptyCartAlert = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{ my: 2, display: "grid", justifyItems: "center", gap: 1 }}
    >
      <img style={{ maxWidth: "100%", height: "auto" }} src={sadGhostImage} />
      <Subtitle>
        <strong>¡Ups!</strong>
        <br /> Parece que tu carrito está vacío
      </Subtitle>
      <Button component={Link} to="/" variant="contained" color="primary">
        Volver al listado
      </Button>
    </Container>
  );
};

export default EmptyCartAlert;
