import React, { useState } from 'react';
import Searchbar from './parts/Searchbar';
import ImageGalery from './parts/ImageGallery';
import css from './styles.module.css';
import Modal from './parts/Modal';

const ImageFinder = () => {
  const [name, setName] = useState('');
  const [page, setPage] = useState(12);
  const [img, setImg] = useState(null);
  const [modal, setModal] = useState(false);

  const buttonMore = () => {
    setPage(prevPage => prevPage + 12);
  };

  const openModal = largeImageURL => {
    setImg(largeImageURL);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const formSubmit = async name => {
    setName(name);
    setPage(12);
  };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={formSubmit} />

      <ImageGalery
        name={name}
        page={page}
        buttonMore={buttonMore}
        onModal={openModal}
      />

      {modal && (
        <Modal modalClose={closeModal}>
          <img src={img} alt="asd" />
        </Modal>
      )}
    </div>
  );
};

export default ImageFinder;
