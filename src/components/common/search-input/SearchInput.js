// styles
import styles from './search-input.module.css';

const SearchInput = ({ placeholder, type }) => {
  if (type === 'explore') {
    return <input className={styles.searchInput} placeholder={placeholder} />;
  }

  return (
    <input className={styles.searchInputNotExplore} placeholder={placeholder} />
  );
};

export default SearchInput;
