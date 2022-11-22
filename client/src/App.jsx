import Navbar from "./Navbar";
import CreatePurchase from "./CreatePurchase";
import ViewPurchase from "./ViewPurchase";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/view-purchase" element={<ViewPurchase />} />
          <Route path="/create-purchase" element={<CreatePurchase />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;