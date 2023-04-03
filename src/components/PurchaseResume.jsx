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

  const totalQuantity = cartList.reduce(
    (total, { quantity }) => total + quantity,
    0
  );

  return (
    <DarkPanel>
      <Subtitle bold>Resumen de compra</Subtitle>
      <Divider />

      <Typography mt={2}>
        <strong>DETALLE DE PRODUCTOS:</strong>
      </Typography>
      {cartList.map((item) => (
        <Typography key={item.id} mt={1}>
          {item.quantity}x {item.title} -{" "}
          {item.price.toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Typography>
      ))}

      <Typography mt={2}>
        <strong>CANTIDAD DE PRODUCTOS:</strong> {totalQuantity}
      </Typography>
      <Typography>
        <strong>TOTAL:</strong> {totalPrice}
      </Typography>
    </DarkPanel>
  );
};

export default PurchaseResume;
