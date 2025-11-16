import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { API_URL } from '../api';

const Home = () => {
  const [photos, setPhotos] = useState('');
  const navigate = useNavigate();

  const { login } = React.useContext(UserContext);

  // useEffect(() => {
  //   if (login) {
  //     fetch(API_URL + '/api/photo')
  //       .then((response) => {
  //         console.log(response);
  //         return response.json();
  //       })
  //       .then((api) => {
  //         console.log(api);
  //         setPhotos(api);
  //         return api;
  //       });
  //   } else {
  //     navigate('/login')
  //   }
  // }, []);

  // const getContent = async () => {
  //   if (login) {
  //     const puxarDados = await fetch(API_URL + '/api/photo');
  //     const response = await puxarDados.json();
  //     setPhotos(response);
  //     console.log(response);
  //   } else {
  //     navigate('/login');
  //   }
  // };

  useEffect(() => {
    if (login) {
      const teste = async () => {
        const puxarDados = await fetch(API_URL + '/api/photo');
        const response = await puxarDados.json();
      setPhotos(response);
      console.log(response)

      };
    } else {
      navigate('/login');
    }
  }, [login, navigate]);

  return (
    <>
      {login ? (
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
      ) : (
        navigate('/login')
      )}
    </>
  );
};

export default Home;
