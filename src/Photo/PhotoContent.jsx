import React from 'react';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import styles from './PhotoContent.module.css';

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  return (
    <section className={styles.photo}>
      <div className="">
        <img className={styles.img} src={photo.src} alt={photo.title} />
      </div>
      <div className="">
        <div className={styles.details}>
          <p className="">
            <Link className="text-gray-400" to={`/perfil/${photo.author}`}>
              @{photo.author}
            </Link>
            <span className="text-gray-400 relative">{photo.acessos}</span>
          </p>
          <h1 className="titulo isolate">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className="">
            <li className="font-bold">{photo.peso} kg</li>
            {'|'}
            <li className="font-bold">{photo.idade} anos</li>
          </ul>
        </div>
        <div className={styles.comments}>
          <PhotoComments id={photo.id} comments={comments} />
        </div>
      </div>
    </section>
  );
};

export default PhotoContent;
