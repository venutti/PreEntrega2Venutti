import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { Route, Routes } from "react-router-dom";
import ItemCount from "./components/ItemCount";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <ItemCount stock={3} onAdd={(count) => console.log(count)} />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer greeting="Bienvenido a BoogieShop. Una tienda de accesorios para Halloween! Próximamente vendran más productos..." />
          }
        />
        <Route
          path="/category/:id"
          element={<p>Contenedor de lista filtrada por categoría</p>}
        />
        <Route
          path="/item/:id"
          element={<p>Contenedor del detalle del producto</p>}
        />
      </Routes>
    </>
  );
};

export default App;
