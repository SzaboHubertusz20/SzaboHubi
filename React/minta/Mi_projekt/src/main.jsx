import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Form, Button, Spinner, Alert } from 'react-bootstrap';  
import Menu from './Componens/Menu.jsx';
import FoOldal from './Componens/FoOldal.jsx';
import Leiras from './Componens/Leiras.jsx';
import Regisztracio from './Componens/Regisztracio.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Alkalmazas />
    </BrowserRouter>
  </React.StrictMode>
);



function Alkalmazas() {
  return (
    <div>
      <Menu />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<FoOldal />} />
          <Route path="/leiras" element={<Leiras />} />
          <Route path="/regisztracio" element={<Regisztracio />} />
        </Routes>
      </Container>
    </div>
  );
}


