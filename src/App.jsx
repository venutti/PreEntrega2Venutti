import { Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/pages/ItemListContainer";
import ItemDetailContainer from "./components/pages/ItemDetailContainer";
import CartView from "./components/pages/CartView";
import CheckOut from "./components/pages/CheckOut";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </>
  );
};

export default App;
