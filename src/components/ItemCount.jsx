import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import QuantityButton from "./QuantityButton";
import AddToCartButton from "./AddToCartButton";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count >= stock) return;
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  const handleAdd = () => {
    if (count > stock) return;
    onAdd(count);
  };

  return (
    <Stack
      alignItems="center"
      sx={{
        gap: 1,
      }}
    >
      <Typography sx={{ transform: "translateY(5px)", color: "grey.500" }}>
        {stock} en stock
      </Typography>

      <QuantityButton
        quantity={count}
        onIncrement={increment}
        onDecrement={decrement}
      />

      <AddToCartButton onAdd={handleAdd} />
    </Stack>
  );
};

export default ItemCount;
