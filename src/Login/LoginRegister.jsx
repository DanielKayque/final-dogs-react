import React, { useState } from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';

const LoginRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, userLogin } = useContext(UserContext);

  const onSubmit = async ({ username, password, email }) => {
    try {
      await registerUser(username, password, email);
      console.log(username, password);
      console.log(userLogin);
      userLogin(username, password);
    } catch (error) {
      console.error('Falha' + error.message);
    }
  };

  return (
    <div className="animeLeft md:w-1/2 w-full items-center md:items-start h-[auto] px-20 flex flex-col justify-center">
      <div className="flex flex-col py-20 md:py-0 items-start gap-6">
        <h1 className="after:content-[''] after:w-[30px] after:h-[30px] after:bg-[#FABD01] after:absolute after:left-0 after:bottom-0 relative after:z-[-1] after:rounded-lg text-6xl text-[#333]">
          Cadastre-se
        </h1>

        <label htmlFor="username">
          Usuário
          <input
            type="text"
            className={`input ${
              errors?.username?.type === 'required' && 'input-error'
            }`}
            {...register('username', { required: true })}
          />
        </label>
        {errors?.usuario?.type === 'required' && (
          <p className="text-red-600">Digite algo</p>
        )}

        <label htmlFor="email">
          Email
          <input
            type="text"
            className={`input ${
              errors?.email?.type === 'required' && 'input-error'
            }`}
            {...register('email', { required: true })}
          />
        </label>
        {errors?.email?.type === 'required' && (
          <p className="text-red-600">Digite algo</p>
        )}

        <label htmlFor="password">
          Senha
          <input
            type="text"
            className={`input ${
              errors?.senha?.type === 'required' && 'input-error'
            }`}
            {...register('password', { required: true })}
          />
        </label>
        {errors?.senha?.type === 'required' && (
          <p className="text-red-600">Digite algo</p>
        )}

        <button onClick={() => handleSubmit(onSubmit)()} className="button">
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default LoginRegister;
