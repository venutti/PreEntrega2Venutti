import { Button, ButtonGroup, useMediaQuery } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuLinks from "./MenuLinks";

const links = [
  { route: "/category/clothes", label: "Disfraces" },
  { route: "/category/deco", label: "Decoración" },
];

const CategoriesMenu = () => {
  const matches = useMediaQuery("(min-width:520px)");

  const location = useLocation();

  const renderedLinks = links.map((link) => (
    <Button
      key={link.label}
      component={Link}
      to={link.route}
      sx={{
        bgcolor: location.pathname === link.route ? "warning.main" : "inherit",
      }}
    >
      {link.label}
    </Button>
  ));

  return matches ? (
    <ButtonGroup variant="text" color="inherit">
      {renderedLinks}
    </ButtonGroup>
  ) : (
    <MenuLinks links={links} />
  );
};

export default CategoriesMenu;
