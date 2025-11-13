import React, { useState } from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div
      onSubmit={onSubmit}
      className="md:w-1/2 w-full items-center md:items-start h-svh md:h-[auto] px-20 flex flex-col justify-center"
    >
      <div className="flex flex-col py-20 md:py-0 items-start gap-6">
        <h1 className="after:content-[''] after:w-[30px] after:h-[30px] after:bg-[#FABD01] after:absolute after:left-0 after:bottom-0 relative after:z-[-1] after:rounded-lg text-6xl text-[#333]">
          Login
        </h1>
        <label htmlFor="name">
          Nome
          <input
            className={`input ${
              errors?.name?.type === 'required' && 'input-error'
            }`}
            type="text"
            {...register('name', { required: true })}
          />
        </label>
        {errors?.name?.type === 'required' && (
          <p className="text-red-600">Digite algo</p>
        )}

        <label htmlFor="email">
          Email
          <input
            className={`input ${
              errors?.email?.type === 'required' && 'input-error'
            }`}
            type="text"
            {...register('email', { required: true })}
          />
        </label>
        {errors?.email?.type === 'required' && (
          <p className="text-red-600">Digite algo</p>
        )}

        <label htmlFor="senha">
          Senha
          <input
            className={`input ${
              errors?.senha?.type === 'required' && 'input-error'
            }`}
            type="text"
            {...register('senha', { required: true })}
          />
        </label>
        {errors?.senha?.type === 'required' && (
          <p className="text-red-600">Digite algo</p>
        )}

        <button onClick={() => handleSubmit(onSubmit)()} className="button">
          Enviar
        </button>

        <Link
          className='after:w-[120px] after:bottom-0 after:left-0 after:h-[3px]  relative after:absolute after:bg-gray-700 after:content-[""]'
          to="perdeu"
        >
          Perdeu a senha?
        </Link>

        <h1 className="text-4xl text-[#333] mt-4">Cadastre-se</h1>
        <p>
          Ainda não possui conta?{' '}
          <span className='lg:after:w-[140px] after:bottom-[-2px] after:left-0 after:h-[2px] relative after:absolute after:bg-gray-700 after:content-[""]'>
            Cadastre-se no site
          </span>
          .
        </p>
        <Link to="cadastro">
          <Button label="Cadastre-se" />
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
