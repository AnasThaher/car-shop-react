import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import CarDetails from "./pages/CarDetails";
import CarListing from "./pages/CarListing";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Singup from '../src/pages/Signup/Singup.jsx'
import Login from '../src/pages/Login/Login.jsx'

import { Slider, Typography } from 'antd';
import Orders from "./pages/orderes";
const { Paragraph } = Typography; 

function App() {
  const [cars, setCars] = useState([]);

  const getAllCar = () => {
    fetch("http://127.0.0.1:8000/api/cars")
      .then((res) => res.json())
      .then((json) => setCars(json['data']));
  };
  const getCarById = (id) => {
    fetch(`http://127.0.0.1:8000/api/car/${id}`)
      .then((res) => res.json())
      .then((json) => setCars(json['data']));
      
  };
  useEffect(() => {
    getAllCar();
  }, []);
  let style = {
    bacgroundColor : 'red',

  }
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
         
          
          <Route path="/" element={<Home cars={cars} />} />
          <Route path="carListing" element={<CarListing cars={cars} />} />
          <Route path="carDetails/:id" element={<CarDetails />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Singup" element={<Singup />} />
          <Route path="login" element={<Login/>} />
          <Route path="orders" element={<Orders cars={cars}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
