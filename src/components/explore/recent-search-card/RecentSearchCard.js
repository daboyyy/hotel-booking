/* eslint-disable jsx-a11y/alt-text */
// img
import homeHotel from './assets/homeHotel.png';
// icon
import { RatingPoint, RatingStar } from './assets';
import bathIcon from './assets/bathIcon.png';
import clockIcon from './assets/clockIcon.png';
import seemoreIcon from './assets/seemoreIcon.png';
import sportCarIcon from './assets/sportCarIcon.png';
import wifiIcon from './assets/wifiIcon.png';
import wineIcon from './assets/wineIcon.png';
// styles
import styles from './recent-search-card.module.css';

const RecentSearchCard = () => (
  <div className={styles.searchCard}>
    <img height="100%" src={homeHotel} width="140" />
    <div className={styles.detail}>
      <p className={styles.title}>Hotel JW Marriott</p>
      <RatingStar />
      <div className={styles.ratings}>
        <RatingPoint />
        <p className={styles.reviews}>1366 Reviews</p>
      </div>
      <p className={styles.types}>Amenities</p>
      <div className={styles.iconContainer}>
        <img className={styles.icon} src={sportCarIcon} />
        <img className={styles.icon} src={bathIcon} />
        <img className={styles.icon} src={wineIcon} />
        <img className={styles.icon} src={wifiIcon} />
        <img className={styles.icon} src={clockIcon} />
        <img className={styles.icon} src={seemoreIcon} />
      </div>
      <p className={styles.price}>1,000/night</p>
    </div>
    <div className={styles.bookNow}>
      <p>Book now</p>
    </div>
  </div>
);

export default RecentSearchCard;
