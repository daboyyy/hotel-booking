// components
import { BookingDetail, SearchInput } from '../../components/common';
import {
  Gallery,
  HotelDescription,
  RoomList,
  Review,
  SuggestionMessage,
} from '../../components/explore-hotel';
import { MobileMenu, Navbar } from '../../components/layout';
// hooks
import { useMenu } from '../../hooks/useMenu';
// styles
import styles from './explore-hotel.module.css';

const ExploreHotel = () => {
  const { onClickMenu, toggleMenu } = useMenu();

  if (toggleMenu) return <MobileMenu />;

  return (
    <div className={styles.container}>
      <Navbar onClickMenu={onClickMenu} />
      <main className={styles.exploreHotel}>
        <SearchInput placeholder="Search city, Country, Place for Travel advisory" />
        <BookingDetail />
        <div className={styles.main}>
          <div>
            <Gallery />
            <HotelDescription />
            <RoomList />
          </div>
          <div>
            <Review />
            <SuggestionMessage />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExploreHotel;
