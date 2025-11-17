import React, { useState } from 'react';
import { PHOTOS_GET } from '../../api';
import js from '@eslint/js';
import Loading from '../Helper/Loading';
import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = ({ photo, index }) => {
  return (
    <li className={`${styles.foto}`}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
