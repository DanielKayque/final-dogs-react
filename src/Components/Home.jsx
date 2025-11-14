import React, { useEffect, useState } from 'react';

const Home = () => {
  const [photos, setPhotos] = useState('');
  useEffect(() => {
    fetch('https://dogsapi.origamid.dev/json/api/photo')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((api) => {
        console.log(api);
        setPhotos(api);
        return api;
      });
  }, []);
  return (
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
  );
};

export default Home;
