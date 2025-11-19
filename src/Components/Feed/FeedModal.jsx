import React, { useEffect, useState } from 'react';
import { PHOTO_GET } from '../../api';
import PhotoContent from '../../Photo/PhotoContent';
import Loading from '../Helper/Loading';
import styles from './FeedModal.module.css';

const FeedModal = ({ photo, setPhotoModal }) => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const modalPhoto = async () => {
      setLoading(true);
      const { url, options } = PHOTO_GET(photo.id);
      const response = await fetch(url, options);
      const json = await response.json();
      setLoading(false);
      setData(json);
    };
    modalPhoto();
  }, [photo]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setPhotoModal(null);
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
