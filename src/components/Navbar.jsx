import Stack from "@mui/material/Stack";
import CartWidget from "./CartWidget";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import CategoriesMenu from "./CategoriesMenu";

const Navbar = () => {
  return (
    <Stack
      component="nav"
      direction="row"
      alignItems="center"
      sx={{ backgroundColor: "warning.light", px: 3, py: 2, gap: 2 }}
    >
      <Link
        component={RouterLink}
        underline="none"
        variant="h4"
        color="black"
        sx={{ fontWeight: "bold", letterSpacing: -2 }}
        to="/"
      >
        BoogieShop
      </Link>
      <CategoriesMenu />
      <CartWidget sx={{ ml: "auto" }} />
    </Stack>
  );
};

export default Navbar;
