/* eslint-disable jsx-a11y/alt-text */
// img
import {
  FoodRating,
  HousekeepingRating,
  Point,
  ServiceRating,
  StaffRating,
} from './assets';
import bathIcon from './assets/bathIcon.png';
import clockIcon from './assets/clockIcon.png';
import sportCarIcon from './assets/sportCarIcon.png';
import wifiIcon from './assets/wifiIcon.png';
import wineIcon from './assets/wineIcon.png';
// styles
import styles from './review.module.css';

const ratingData = [
  {
    id: 1,
    name: 'Housekeeping',
    starImg: HousekeepingRating,
  },
  {
    id: 2,
    name: 'Food',
    starImg: FoodRating,
  },
  {
    id: 3,
    name: 'Service',
    starImg: ServiceRating,
  },
  {
    id: 4,
    name: 'Staff',
    starImg: StaffRating,
  },
];

const Review = () => {
  return (
    <section className={styles.review}>
      <div className={styles.header}>
        <Point point={8.4} />
        <div className={styles.title}>
          <p className={styles.adjective}>Excellent</p>
          <p className={styles.totalReviews}>6879 Reviews</p>
        </div>
      </div>
      <div className={styles.ratings}>
        <div>
          {ratingData.map((data) => (
            <div className={styles.container} key={data.id}>
              <p>{data.name}</p>
            </div>
          ))}
        </div>
        <div>
          {ratingData.map((data) => (
            <div className={styles.star} key={data.id}>
              <data.starImg />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.services}>
        <p>Services</p>
        <div className={styles.serviceIcon}>
          <img className={styles.icon} src={sportCarIcon} />
          <img className={styles.icon} src={bathIcon} />
          <img className={styles.icon} src={wineIcon} />
          <img className={styles.icon} src={wifiIcon} />
          <img className={styles.icon} src={clockIcon} />
        </div>
      </div>
    </section>
  );
};

export default Review;
