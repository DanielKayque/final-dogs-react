import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="animeLeft md:w-1/2 w-full items-center md:items-start h-[auto] px-20 flex flex-col justify-center">
      <div className="flex flex-col py-20 md:py-0 items-start gap-6">
        <h1 className="after:content-[''] after:w-[30px] after:h-[30px] after:bg-[#FABD01] after:absolute after:left-0 after:bottom-0 relative after:z-[-1] after:rounded-lg text-6xl text-[#333]">
          Perdeu a senha?
        </h1>
        <label htmlFor="email">
          Digite seu email
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

        <button type='submit' className="button">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default ForgotPassword;
