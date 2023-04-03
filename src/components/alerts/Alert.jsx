import { Button, Container } from "@mui/material";
import Subtitle from "../shared/Subtitle";
import { Link } from "react-router-dom";

const Alert = ({ image, title, subtitle }) => {
  return (
    <Container
      maxWidth="sm"
      sx={{ my: 2, display: "grid", justifyItems: "center", gap: 1 }}
    >
      <img style={{ maxWidth: "90%", height: "auto" }} src={image} />
      <Subtitle>
        <strong>{title}</strong>
        <br /> {subtitle}
      </Subtitle>
      <Button component={Link} to="/" variant="contained" color="primary">
        Volver al listado
      </Button>
    </Container>
  );
};

export default Alert;
