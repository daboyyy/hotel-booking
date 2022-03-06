/* eslint-disable jsx-a11y/alt-text */
// components
import { SearchInput } from '../../components/common';
import {
  BookingForm,
  Category,
  DesktopImage,
  RecentSearch,
} from '../../components/explore';
import { MobileMenu, Navbar } from '../../components/layout';
// hooks
import { useMenu } from '../../hooks/useMenu';
// styles
import styles from './Explore.module.css';

const Explore = () => {
  const { onClickMenu, toggleMenu } = useMenu();

  if (toggleMenu) return <MobileMenu />;

  return (
    <div className={styles.container}>
      <Navbar isActive onClickMenu={onClickMenu} />
      <main className={styles.explore}>
        <SearchInput
          placeholder="Search city, Country, Place for Travel advisory"
          type="explore"
        />
        <Category />
        <BookingForm />
        <RecentSearch />
      </main>
      <DesktopImage />
    </div>
  );
};

export default Explore;
