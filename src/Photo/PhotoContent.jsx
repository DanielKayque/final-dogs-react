import React from 'react';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import styles from './PhotoContent.module.css';

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  return (
    <section className="fixed lg:pt-8 lg:px-8 z-10 mx-auto items-center w-[1200px] ">
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="w-full overflow-y-auto">
          <img
            className="object-contain w-auto h-1/2 lg:h-full"
            src={photo.src}
            alt={photo.title}
          />
        </div>
        <div className="p-4 border-4 bg-white">
          <div className="">
            <p className="flex justify-between">
              <Link className="text-gray-400" to={`/perfil/${photo.author}`}>
                @{photo.author}
              </Link>
              <span className="text-gray-400 relative">{photo.acessos}</span>
            </p>
            <h1 className="isolate after:content-[''] after:w-[30px] after:h-[30px] after:bg-[#FABD01] after:absolute after:left-0 after:bottom-0 relative after:z-[-1] after:rounded-lg text-6xl text-[#333]">
              <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
            </h1>
            <ul className="flex gap-6 items-start">
              <li className="font-bold">{photo.peso} kg</li>
              {'|'}
              <li className="font-bold">{photo.idade} anos</li>
            </ul>
          </div>
          <PhotoComments id={photo.id} comments={comments} />
        </div>
      </div>
    </section>
  );
};

export default PhotoContent;
