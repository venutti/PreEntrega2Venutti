import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const GoToCartButton = () => {
  return (
    <Button color="primary" variant="contained" component={Link} to="/cart">
      Terminar con mi compra
    </Button>
  );
};

export default GoToCartButton;
