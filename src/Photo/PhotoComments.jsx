import React from 'react';

const PhotoComments = ({ comments }) => {
  console.log(comments);
  return (
    <ul>
      {comments &&
        comments.map((comentario, index) => (
          <li key={index}>
            <div className='flex gap-1'>
              <p className='font-bold'>{comentario.comment_author}: </p>
              <p>{comentario.comment_content}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default PhotoComments;
