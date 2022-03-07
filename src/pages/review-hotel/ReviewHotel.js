// components
import { BookingDetail, SearchInput } from '../../components/common';
import {
  CancellationCharges,
  CheckInAndOut,
  GuestDetails,
  ReviewYourBooking,
  TotalAmount,
} from '../../components/review-hotel';
import { MobileMenu, Navbar } from '../../components/layout';
// hooks
import { useMenu } from '../../hooks/useMenu';
// styles
import styles from './review-hotel.module.css';

const ReviewHotel = () => {
  const { onClickMenu, toggleMenu } = useMenu();

  if (toggleMenu) return <MobileMenu />;

  return (
    <div className={styles.container}>
      <Navbar onClickMenu={onClickMenu} />
      <main className={styles.reviewHotel}>
        <div className={styles.bookingReview}>
          <SearchInput placeholder="Search city, Country, Place for Travel advisory" />
          <BookingDetail />
          <div className={styles.main}>
            <ReviewYourBooking />
            <div className={styles.totalAmount}>
              <TotalAmount />
              <CancellationCharges />
            </div>
            <CheckInAndOut />
            <GuestDetails />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReviewHotel;
