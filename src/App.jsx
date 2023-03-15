import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </>
  );
};

export default App;
