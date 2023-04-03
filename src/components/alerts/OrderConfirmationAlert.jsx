import okGhostImage from "./assets/ok_ghost.png";
import Alert from "./Alert";

const OrderConfirmationAlert = ({ orderID }) => {
  return (
    <Alert
      image={okGhostImage}
      title={"¡Gracias por tu compra!"}
      subtitle={`Tu número de orden es: ${orderID}`}
    />
  );
};

export default OrderConfirmationAlert;
