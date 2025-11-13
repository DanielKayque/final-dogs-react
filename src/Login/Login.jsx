import React, { useState } from 'react';
import dog from '../images//Assets/login.jpg';
// import Input from '../Components/Input.jsx';
// import Button from '../Components/Button.jsx';
import { Link, Route, Routes } from 'react-router-dom';
import ForgotPassword from './ForgotPassword.jsx';
import LoginForm from './LoginForm.jsx';

const Login = () => {
  return (
    <section className="h-full w-full flex">
      <div className="hidden md:flex h-[1200px] w-1/2 md:h-auto">
        <img
          className="hidden md:block w-full min-h-svh object-cover"
          src={dog}
          alt="Cachorro"
        />
      </div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="perdeu" element={<ForgotPassword />} />
      </Routes>
    </section>
  );
};

export default Login;
