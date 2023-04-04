import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const CartWidget = ({ sx }) => {
  const { cartList } = useContext(CartContext);
  const quantityInCart = cartList.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <IconButton component={Link} to="/cart" sx={{ ...sx }}>
      <Badge badgeContent={quantityInCart} color="error">
        <ShoppingCartOutlinedIcon sx={{ color: "black" }} />
      </Badge>
    </IconButton>
  );
};

export default CartWidget;
