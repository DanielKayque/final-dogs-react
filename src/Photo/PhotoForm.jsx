import React from 'react';
import { useForm } from 'react-hook-form';
import Enviar from '../images/Assets/enviar.svg?react';
import { COMMENT_POST } from '../api';

const PhotoForm = ({ id }) => {
  const { register, handleSubmit, formState: errors } = useForm();

  async function onSubmit({comment}) {
    console.log(comment);
    console.log(id);
    const { url, options } = COMMENT_POST(id, {comment} );
    const response = await fetch(url, options);
    const json = await response.json();
  }

  return (
    <form className="p-2 flex" onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Comente..."
        type="text"
        className="input"
        {...register('comment')}
      />
      <button type="submit">
        <Enviar />
      </button>
    </form>
  );
};

export default PhotoForm;
