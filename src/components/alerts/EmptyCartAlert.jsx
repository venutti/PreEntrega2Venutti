import emptyGhostImage from "./assets/empty_ghost.png";
import Alert from "./Alert";

const EmptyCartAlert = () => {
  return (
    <Alert
      image={emptyGhostImage}
      title={"¡Ups!"}
      subtitle={"Parece que tu carrito está vacío."}
    />
  );
};

export default EmptyCartAlert;
