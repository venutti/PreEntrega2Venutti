import { Box, Button, ButtonGroup } from "@mui/material";

const QuantityButton = ({ quantity, onIncrement, onDecrement }) => {
  return (
    <ButtonGroup color="warning" variant="contained" disableElevation>
      <Button onClick={onDecrement}>-</Button>
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
        {quantity}
      </Box>
      <Button onClick={onIncrement}>+</Button>
    </ButtonGroup>
  );
};

export default QuantityButton;
