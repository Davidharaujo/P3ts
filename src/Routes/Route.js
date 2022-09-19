import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dogs from "../Components/Dogs";
import Header from "./Header";
import Home from '../Components/Home'
import Cats from '../Components/Cats'

export default function Router() {
  return (
    <BrowserRouter>
      <Header rota="Home" rota2="Doguinho!" rota3="Catinho!" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dog" element={<Dogs />} />
        <Route path="/cat" element={<Cats />}/>
      </Routes>
    </BrowserRouter>
  );
}
