import React from "react";
import { Home, Apollo, Aphrodite } from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apollo" element={<Apollo />} />
        <Route path="/aphrodite" element={<Aphrodite />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
