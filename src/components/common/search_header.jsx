import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';

function SearchHeader({ onSearch }) {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
    // prop으로 받아온 onSearch, 검색이란 이벤트가 발생하면 이 전달해준 콜백함수를 불러
    // value로 검색된 결과값 호출
  };

  const onClick = (e) => {
    handleSearch();
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        className={styles.input}
        type="search"
        placeholder="Search"
        ref={inputRef}
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
}

export default memo(SearchHeader);
