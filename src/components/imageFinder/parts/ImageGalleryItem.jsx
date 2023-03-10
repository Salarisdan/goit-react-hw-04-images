import React from 'react';
import css from './ImageGaleryItem.module.css';

const ImageGaleryItem = ({ onModal, webformatURL, largeImageURL }) => {
  const handleClick = () => {
    onModal(largeImageURL);
  };

  return (
    <li className={css.ImageGalleryItem} onClick={handleClick}>
      <img
        className={css.ImageGalleryItem__image}
        src={webformatURL}
        alt="qwe"
      />
    </li>
  );
};

export default ImageGaleryItem;
