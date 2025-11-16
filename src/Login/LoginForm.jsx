import React, { useEffect, useState } from 'react';
import Button from '../Components/Button';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { TOKEN_POST, USER_GET } from '../api';
import { UserContext } from '../Context/UserContext';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function onSubmit(data) {
    userLogin({ username: data.username, password: data.password });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="md:w-1/2 w-full items-center md:items-start h-svh md:h-[auto] px-20 flex flex-col justify-center"
    >
      <div className="flex flex-col py-20 md:py-0 items-start gap-6">
        <h1 className="after:content-[''] after:w-[30px] after:h-[30px] after:bg-[#FABD01] after:absolute after:left-0 after:bottom-0 relative after:z-[-1] after:rounded-lg text-6xl text-[#333]">
          Login
        </h1>
        <label htmlFor="name">
          Usuario
          <input
            className={`input ${
              errors?.username?.type === 'required' && 'input-error'
            }`}
            type="text"
            {...register('username', { required: true })}
          />
        </label>
        {errors?.username?.type === 'required' && (
          <p className="text-red-600">Digite algo</p>
        )}

        <label htmlFor="senha">
          Senha
          <input
            className={`input ${
              errors?.password?.type === 'required' && 'input-error'
            }`}
            type="text"
            {...register('password', { required: true })}
          />
        </label>
        {errors?.senha?.type === 'required' && (
          <p className="text-red-600">Digite algo</p>
        )}
        {loading ? (
          <button className='button' disabled>Carregando...</button>
        ) : (
          <button type="submit" className="button">
            Entrar
          </button>
        )}

        {error && <p>{error}</p>}

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
    </form>
  );
};

export default LoginForm;
