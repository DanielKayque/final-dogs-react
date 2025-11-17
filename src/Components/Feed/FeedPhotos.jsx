import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import { PHOTOS_GET } from '../../api';
import Loading from '../Helper/Loading';
import styles from './FeedPhotos.module.css'

const FeedPhotos = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState('');
  React.useEffect(() => {
    async function fetchPhotos() {
      setLoading(true);
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const response = await fetch(url, options);
      console.log(response);
      const json = await response.json();
      console.log(json);
      setData(json);
      setLoading(false);
    }
    fetchPhotos();
  }, []);

  if (loading) return <Loading />;
  return (
    <ul
      className={`animeLeft ${styles.feed}`}
    >
      {data &&
        data.map((photo, index) => (
          <FeedPhotosItem key={photo.id} photo={photo} index={index} />
        ))}
    </ul>
  );
};

export default FeedPhotos;
