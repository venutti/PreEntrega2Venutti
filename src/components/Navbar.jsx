import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <Stack
      component="nav"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ backgroundColor: "warning.light", p: 2 }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", letterSpacing: -2 }}>
        BoogieShop
      </Typography>
      <ButtonGroup color="inherit" variant="text">
        <Button>Inicio</Button>
        <Button>Productos</Button>
        <Button>Contacto</Button>
      </ButtonGroup>
    </Stack>
  );
};

export default Navbar;
