import styles from '../styles/main.module.scss';

const SearchBox = props => {
  return (
    <div className={styles.search}>
      <input
        className={styles.search__input}
        onChange={props.handleInput}
        type='text'
        placeholder='Search'
        autoComplete='off'
      />
    </div>
  );
};

export default SearchBox;
