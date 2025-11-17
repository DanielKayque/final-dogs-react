import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PHOTO_POST } from '../api';
import js from '@eslint/js';

const PostPhoto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [preview, setPreview] = useState(null);

  function onSubmit({ nome, peso, idade, imagem, target }) {
    console.log(imagem);
    console.log(target);

    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('peso', peso);
    formData.append('idade', idade);
    formData.append('img', imagem[0]);
    console.log(formData);

    const request = async () => {
      const { url, options } = PHOTO_POST(formData);
      const response = await fetch(url, options);
      console.log(response);
      const json = await response.json();
      console.log(json);
    };
    request();
  }

  function handlePreview(event) {
    const file = event.target.files[0];
    console.log(event);
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  }
  return (
    <section className="p-4 lg:flex justify-between">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="nome">
          Nome:
          <input
            className={`input ${
              errors?.nome?.type === 'required' && 'input-error'
            }`}
            type="text"
            {...register('nome', { required: true })}
          />
        </label>
        {errors?.nome?.type === 'required' && (
          <p className="text-red-600">Digite um valor</p>
        )}

        <label htmlFor="peso">
          Peso:
          <input
            className={`input ${
              errors?.peso?.type === 'required' && 'input-error'
            }`}
            type="number"
            {...register('peso', { required: true })}
          />
        </label>
        {errors?.peso?.type === 'required' && (
          <p className="text-red-600">Digite um valor</p>
        )}

        <label htmlFor="idade">
          Idade:
          <input
            className={`input ${
              errors?.idade?.type === 'required' && 'input-error'
            }`}
            type="number"
            {...register('idade', { required: true })}
          />
        </label>
        {errors?.idade?.type === 'required' && (
          <p className="text-red-600">Digite um valor</p>
        )}
        <label htmlFor="imagem">
          Imagem:
          <input
            className={'input-file'}
            type="file"
            {...register('imagem', {
              required: true,
              onChange: (event) => handlePreview(event),
            })}
          />
        </label>

        <button type="submit" className="button">
          Enviar
        </button>
      </form>
      {preview ? (
        <div>
          <img
            className="lg:mt-2 mt-6 rounded-lg w-[500px] object-cover h-[500px]"
            src={preview}
            alt=""
          />
        </div>
      ) : null}
    </section>
  );
};

export default PostPhoto;
