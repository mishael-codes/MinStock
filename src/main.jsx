import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Stocks from "./pages/stocks.jsx";
import StockDetail from "./pages/stockDetails.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/stocks" element={<Stocks />} />
        {/* <Route path="/stocks/:symbol" element={<StockDetail />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
