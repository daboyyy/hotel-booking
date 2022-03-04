/* eslint-disable jsx-a11y/alt-text */
// components
import {
  BookingForm,
  Category,
  RecentSearch,
  SearchInput,
} from '../../components/explore';
import { MobileMenu, Navbar } from '../../components/layout';
// hooks
import { useMenu } from '../../hooks/useMenu';
// img
import tajmahal from '../../assets/tajmahal.png';
// styles
import styles from './Explore.module.css';

const Explore = () => {
  const { onClickMenu, toggleMenu } = useMenu();

  if (toggleMenu) return <MobileMenu />;

  return (
    <div className={styles.container}>
      <Navbar onClickMenu={onClickMenu} />
      <main className={styles.explore}>
        <SearchInput placeholder="Search city, Country, Place for Travel advisory" />
        <Category />
        <BookingForm />
        <RecentSearch />
      </main>
      <section className={styles.background}>
        <img className={styles.backgroundImg} src={tajmahal} />
        <p className={styles.catchphrase}>Incredible India</p>
        <p className={styles.catchphrase2}>“For where thy treasure is, </p>
        <p className={styles.catchphrase3}>there also will thy heart be.”</p>
        <button className={styles.takeTourButton}>Take tour</button>
      </section>
    </div>
  );
};

export default Explore;
