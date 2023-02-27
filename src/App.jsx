import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <ItemListContainer greeting="Bienvenido a BoogieShop. Una tienda de accesorios para Halloween! Próximamente vendran más productos..." />
    </>
  );
};

export default App;
