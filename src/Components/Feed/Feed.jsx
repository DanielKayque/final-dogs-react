import React, { useState } from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

const Feed = () => {
  const [photoModal, setPhotoModal] = useState('');
  

  return (
    <div>
      {photoModal && <FeedModal photo={photoModal}/>}
      <FeedPhotos setPhotoModal={setPhotoModal} />
    </div>
  );
};

export default Feed;
