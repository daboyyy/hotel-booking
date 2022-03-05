// components
import { SearchInput, Title } from '../../components/common';
import { HotelCard, RecommendCard } from '../../components/hotels';
import { MobileMenu, Navbar } from '../../components/layout';
// hooks
import { useMenu } from '../../hooks/useMenu';
// styles
import styles from './hotels.module.css';

const Hotels = () => {
  const { onClickMenu, toggleMenu } = useMenu();

  if (toggleMenu) return <MobileMenu />;

  return (
    <div className={styles.container}>
      <Navbar onClickMenu={onClickMenu} />
      <main className={styles.hotels}>
        <SearchInput placeholder="Search city, Country, Place for Travel advisory" />
        <div className={styles.title}>
          <Title text="Best places to enjoy your stay" />
          <button>Sort By</button>
          <button>Filter</button>
        </div>
        <HotelCard />
      </main>
      <RecommendCard />
    </div>
  );
};

export default Hotels;
