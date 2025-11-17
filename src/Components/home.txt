import React, { useContext, useEffect } from 'react';
import { UserContext } from '../Context/UserContext';
import { PHOTO_GET } from '../api';
import { useNavigate, NavLink, Routes, Route } from 'react-router-dom';
import Conta from './Conta';

const Home = () => {
  const { photoGet, login, photos } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (login) {
      photoGet();
    } else {
      navigate('/login');
    }
  }, [login]);

  return (
    <div>
      <div className="h-svh">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
          {photos &&
            photos.map((photo) => (
              <li key={photo.id}>
                <img className="rounded-sm" src={photo.src} alt="Foto" />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
