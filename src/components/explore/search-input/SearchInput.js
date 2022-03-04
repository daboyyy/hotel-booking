// styles
import styles from './search-input.module.css';

const SearchInput = ({ placeholder }) => (
  <input className={styles.searchInput} placeholder={placeholder} />
);

export default SearchInput;
