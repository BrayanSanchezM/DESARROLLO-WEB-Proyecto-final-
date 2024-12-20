import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Section title="Inicio" />} />
          <Route path="/catalogo" element={<Section title="Catálogo" />} />
          <Route path="/contacto" element={<Section title="Contacto" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
