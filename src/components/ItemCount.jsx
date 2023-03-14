import { Box, Button, ButtonGroup } from "@mui/material";
import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <ButtonGroup color="warning" variant="contained" disableElevation>
        <Button onClick={decrement}>-</Button>
        <Box
          sx={{
            padding: "5px 30px",
            display: "grid",
            placeContent: "center",
            borderBlockStart: "1px solid",
            borderBlockEnd: "1px solid",
            borderColor: "warning.dark",
          }}
        >
          {count}
        </Box>
        <Button onClick={increment}>+</Button>
      </ButtonGroup>

      <Button
        variant="contained"
        color="success"
        disableElevation
        onClick={handleAdd}
      >
        Agregar al carrito
      </Button>
    </Box>
  );
};

export default ItemCount;
