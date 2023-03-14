import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const links = [
  { route: "/category/clothes", label: "Ropa" },
  { route: "/category/shoes", label: "Calzado" },
  { route: "/category/deco", label: "Decoración" },
];

const Navbar = () => {
  return (
    <Stack
      component="nav"
      direction="row"
      alignItems="center"
      sx={{ backgroundColor: "warning.light", p: 2 }}
    >
      <Link to="/">
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", letterSpacing: -2, mr: 4 }}
        >
          BoogieShop
        </Typography>
      </Link>
      <ButtonGroup color="inherit" variant="text" sx={{ mr: "auto" }}>
        <Button>Inicio</Button>
        <Button>Productos</Button>
        <Button>Contacto</Button>
      </ButtonGroup>
      <CartWidget />
    </Stack>
  );
};

export default Navbar;
