import { Box, Divider, Typography } from "@mui/material";
import Subtitle from "./shared/Subtitle";

const PurchaseResume = ({ cartList }) => {
  // Precio formateado
  const totalPrice = cartList
    .reduce((total, { price, quantity }) => total + price * quantity, 0)
    .toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <Box
      sx={{ px: 4, py: 2, borderRadius: 2, backgroundColor: "grey.400", my: 2 }}
    >
      <Subtitle bold>Resumen de compra</Subtitle>
      <Divider />
      <Typography mt={3}>
        <strong>CANTIDAD DE PRODUCTOS:</strong> {cartList.length}
      </Typography>
      <Typography>
        <strong>TOTAL:</strong> {totalPrice}
      </Typography>
    </Box>
  );
};

export default PurchaseResume;
