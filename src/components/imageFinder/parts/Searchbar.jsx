import React, { useState, useCallback } from 'react';
import css from './Searchbar.module.css';
import { ReactComponent as AddIcon } from './icon/iconSearch.svg';

const Searchbar = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleNameSearch = useCallback(e => {
    setName(e.currentTarget.value);
  }, []);

  const handleNameSubmit = useCallback(
    e => {
      e.preventDefault();

      if (name.trim() === '') {
        alert('enter image title');
        return;
      }

      onSubmit(name);
      setName('');
    },
    [name, onSubmit]
  );

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleNameSubmit}>
        <button tupe="submit" className={css.SearchForm__button}>
          <span className="button-label">
            <AddIcon display="block" fill="black" width="32px" height="32px" />
          </span>
        </button>
        <input
          className={css.SearchForm__input}
          value={name}
          type="text"
          name="name"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleNameSearch}
        />
      </form>
    </header>
  );
};

export default Searchbar;
