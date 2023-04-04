import { Button } from "@mui/material";

const AddToCartButton = ({ onAdd }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      disableElevation
      onClick={onAdd}
    >
      Agregar al carrito
    </Button>
  );
};

export default AddToCartButton;
