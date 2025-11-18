import React, { useState } from 'react';
import { PHOTOS_GET } from '../../api';
import js from '@eslint/js';
import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = ({ photo, setPhotoModal }) => {
  function handleClick() {
    setPhotoModal(photo);
  }

  return (
    <li className={`${styles.foto}`} onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
