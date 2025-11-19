import React, { useContext, useState } from 'react';
import { UserContext } from '../Context/UserContext';

const PhotoComments = ({ comments }) => {
  const { login } = useContext(UserContext);
  return login ? (
    <ul>
      {comments &&
        comments.map((comentario, index) => (
          <li key={index}>
            <div className="flex gap-1">
              <p className="font-bold">{comentario.comment_author}: </p>
              <p>{comentario.comment_content}</p>
            </div>
          </li>
        ))}
    </ul>
  ) : (
    <p className='text-gray-400'>Faça login para ter acesso aos comentários.</p>
  );
};
export default PhotoComments;
