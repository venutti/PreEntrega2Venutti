import Stack from "@mui/material/Stack";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import CartWidget from "./CartWidget";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

const links = [
  { route: "/category/clothes", label: "Disfraces" },
  { route: "/category/deco", label: "Decoración" },
];

const Navbar = () => {
  const renderedLinks = links.map((link) => (
    <Button key={link.label} component={RouterLink} to={link.route}>
      {link.label}
    </Button>
  ));

  return (
    <Stack
      component="nav"
      direction="row"
      alignItems="center"
      sx={{ backgroundColor: "warning.light", px: 4, py: 2 }}
    >
      <Link
        component={RouterLink}
        underline="none"
        variant="h4"
        color="black"
        sx={{ fontWeight: "bold", letterSpacing: -2, mr: 4 }}
        to="/"
      >
        BoogieShop
      </Link>
      <ButtonGroup color="inherit" variant="text" sx={{ mr: "auto" }}>
        {renderedLinks}
      </ButtonGroup>
      <CartWidget />
    </Stack>
  );
};

export default Navbar;
