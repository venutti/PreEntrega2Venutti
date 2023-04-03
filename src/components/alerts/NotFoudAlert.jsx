import surpriseGhostImage from "./assets/surprise_ghost.png";
import Alert from "./Alert";

const NotFoundAlert = () => {
  return (
    <Alert
      image={surpriseGhostImage}
      title={"¡Oops! Página no encontrada"}
      subtitle={
        "Parece que este fantasma ha asustado a nuestra página y la ha hecho desaparecer."
      }
    />
  );
};

export default NotFoundAlert;
