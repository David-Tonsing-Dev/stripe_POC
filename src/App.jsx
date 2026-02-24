import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./common/components/Header";
import Footer from "./common/components/Footer";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
