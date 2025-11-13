import React, { useState } from 'react';
import dog from '../images//Assets/login.jpg';
import Input from '../Components/Input.jsx';
import Button from '../Components/Button.jsx';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <section className="h-auto">
      <div className="h-[1200px] flex md:h-auto">
        <img
          className="hidden md:block w-1/2 h-[1200px] object-cover"
          src={dog}
          alt="Cachorro"
        />

        <form className="w-full h-[auto] px-20 flex flex-col justify-center">
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-6xl text-[#333]">Login</h1>
            <Input
              label="Usuário"
              type="text"
              id="usuario"
              value={username}
              setValue={setUsername}
            />

            <Input
              label="Password"
              type="password"
              id="password"
              value={password}
              setValue={setPassword}
            />
            <Button label="Enviar" />

            <Link
              className='after:w-[120px] after:bottom-0 after:left-0 after:h-[3px]  relative after:absolute after:bg-gray-700 after:content-[""] '
              to="/login/forgot"
            >
              Perdeu a senha?
            </Link>
            <h1 className="text-4xl text-[#333] mt-4">Cadastre-se</h1>
            <p>Ainda não possui conta? Cadastre-se no site.</p>
            <Button label="Cadastre-se" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
