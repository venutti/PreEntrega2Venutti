import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartWidget = () => {
  return (
    <IconButton>
      <Badge badgeContent={4} color="error">
        <ShoppingCartOutlinedIcon sx={{ color: "black" }} />
      </Badge>
    </IconButton>
  );
};

export default CartWidget;
