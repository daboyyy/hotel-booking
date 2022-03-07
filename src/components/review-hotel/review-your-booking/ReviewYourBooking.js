/* eslint-disable jsx-a11y/alt-text */
// components
import { Title } from '../../common';
// img
import FourStarRating from './assets';
import hotel from './assets/hotel.png';
// styles
import styles from './review-your-booking.module.css';

const ReviewYourBooking = () => {
  return (
    <section className={styles.reviewYourBooking}>
      <Title text="Review your booking" />
      <div className={styles.description}>
        <div>
          <div className={styles.ratings}>
            <p>Holiday In Resort</p>
            <FourStarRating />
          </div>
          <p className={styles.subDescription}>
            Tambudki, Arpora, goa, Goa, India
          </p>
          <p className={styles.subDescription}>
            This hotel is reviewed by global firm
          </p>
        </div>
        <div className={styles.img}>
          <img src={hotel} width="100%" />
        </div>
      </div>
    </section>
  );
};

export default ReviewYourBooking;
