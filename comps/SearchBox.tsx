import styles from '../styles/main.module.scss';

const SearchBox = props => {
  return (
    <form className={styles.search}>
      <input
        className={styles.search__input}
        onChange={props.handleInput}
        type='text'
        placeholder='Search Items...'
        autoComplete='off'
      />
    </form>
  );
};

export default SearchBox;
