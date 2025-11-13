import React, { useState } from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';

const LoginRegister = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form className="md:w-1/2 w-full items-center md:items-start h-[auto] px-20 flex flex-col justify-center">
      <div className="flex flex-col py-20 md:py-0 items-start gap-6">
        <h1 className="after:content-[''] after:w-[30px] after:h-[30px] after:bg-[#FABD01] after:absolute after:left-0 after:bottom-0 relative after:z-[-1] after:rounded-lg text-6xl text-[#333]">
          Perdeu a senha?
        </h1>
        <Input
          label="Usuário"
          type="text"
          id="usuario"
          value={username}
          setValue={setUsername}
        />
        <Input
          label="Email"
          type="text"
          id="email"
          value={email}
          setValue={setEmail}
        />
        <Input
          label="Senha"
          type="password"
          id="email"
          value={password}
          setValue={setPassword}
        />

        <Button label="Enviar Email" />
      </div>
    </form>
  );
};

export default LoginRegister;
