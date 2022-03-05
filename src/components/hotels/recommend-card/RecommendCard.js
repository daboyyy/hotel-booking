/* eslint-disable jsx-a11y/alt-text */
// img
import recommendHotel1 from './assets/recommendHotel1.png';
import recommendHotel2 from './assets/recommendHotel2.png';
import recommendHotel3 from './assets/recommendHotel3.png';
import recommendHotel4 from './assets/recommendHotel4.png';
import recommendHotel5 from './assets/recommendHotel5.png';
// styles
import styles from './recommend-card.module.css';

const recommendData = [
  {
    id: 1,
    description: 'Trip to Thailand & Get 30% off on flight booking',
    img: recommendHotel1,
  },
  {
    id: 2,
    description: 'Get additional 25% off on Bhutan tour fare',
    img: recommendHotel2,
  },
  {
    id: 3,
    description: 'Trip to Thailand & Get 30% off on flight booking',
    img: recommendHotel3,
  },
  {
    id: 4,
    description: 'Flat 40% off on hotel bookings in Agra',
    img: recommendHotel4,
  },
  {
    id: 5,
    description: 'Trip to Thailand & Get 30% off on flight booking',
    img: recommendHotel5,
  },
];

const RecommendCard = () => (
  <section className={styles.recommendCard}>
    <p className={styles.title}>Recommend</p>
    {recommendData.map((data) => (
      <div key={data.id}>
        <img src={data.img} width="100%" />
        <p className={styles.description}>{data.description}</p>
      </div>
    ))}
  </section>
);

export default RecommendCard;
