import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './Login/LoginForm';
import Login from './Login/Login';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import { UserStorage } from './Context/UserContext';
import Conta from './Components/Conta';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="conta/*" element={<Conta />} />
            <Route path="login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
