import RecentSearchCard from '../recent-search-card/RecentSearchCard';
// styles
import styles from './recent-search.module.css';

const RecentSearch = () => {
  return (
    <section>
      <p className={styles.recentSearchTitle}>Recent Searchs</p>
      <RecentSearchCard />
      <RecentSearchCard />
    </section>
  );
};

export default RecentSearch;
