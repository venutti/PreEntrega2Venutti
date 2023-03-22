import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const CartWidget = () => {
  const { cartList } = useContext(CartContext);
  const quantityInCart = cartList.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <IconButton>
      <Badge badgeContent={quantityInCart} color="error">
        <ShoppingCartOutlinedIcon sx={{ color: "black" }} />
      </Badge>
    </IconButton>
  );
};

export default CartWidget;
