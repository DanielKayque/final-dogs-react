import React from 'react';
import dog from '../images//Assets/login.jpg';
import { Link, Route, Routes } from 'react-router-dom';
import ForgotPassword from './ForgotPassword.jsx';
import LoginForm from './LoginForm.jsx';
import LoginRegister from './LoginRegister.jsx';

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
        <Route path="cadastro" element={<LoginRegister />} />
      </Routes>
    </section>
  );
};

export default Login;
