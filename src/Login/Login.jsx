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
      <div className="h-auto flex border-2 border-black">
        <img
          className="h-[1000px] w-full object-cover"
          src={dog}
          alt="Cachorro"
        />

        <form className="border-2 w-full h-[auto] border-4 border-red-400 px-20 flex flex-col justify-center">
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
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
