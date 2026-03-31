import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import PuchaseDetails from "./pages/purchase/PurchaseDetails";

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={
            <Home />
          } />
        <Route path="/purchase" element={
            <PuchaseDetails />
          } />
      </Routes>
      </BrowserRouter>
   
  );
}

export default App;