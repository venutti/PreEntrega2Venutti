import { Divider, Typography } from "@mui/material";
import DarkPanel from "./shared/DarkPanel";
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
    <DarkPanel>
      <Subtitle bold>Resumen de compra</Subtitle>
      <Divider />
      <Typography mt={3}>
        <strong>CANTIDAD DE PRODUCTOS:</strong> {cartList.length}
      </Typography>
      <Typography>
        <strong>TOTAL:</strong> {totalPrice}
      </Typography>
    </DarkPanel>
  );
};

export default PurchaseResume;
