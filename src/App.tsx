import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/b1/Home";
import About from "./components/b1/About";
import Contact from "./components/b1/Contact";
import Navigation from "./components/b2/Navigation";

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}
