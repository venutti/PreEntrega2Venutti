import { Button, Container } from "@mui/material";
import Subtitle from "../shared/Subtitle";
import { Link } from "react-router-dom";
import surpriseGhostImage from "./assets/surprise_ghost.png";

const NotFoundAlert = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{ my: 2, display: "grid", justifyItems: "center", gap: 1 }}
    >
      <img
        style={{ maxWidth: "90%", height: "auto" }}
        src={surpriseGhostImage}
      />
      <Subtitle>
        <strong>¡Oops! Página no encontrada</strong>
        <br /> Parece que este fantasma ha asustado a nuestra página y la ha
        hecho desaparecer.
      </Subtitle>
      <Button component={Link} to="/" variant="contained" color="primary">
        Volver al listado
      </Button>
    </Container>
  );
};

export default NotFoundAlert;
