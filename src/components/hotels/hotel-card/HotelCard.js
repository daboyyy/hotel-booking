/* eslint-disable jsx-a11y/alt-text */
// img
import hotel1 from './assets/hotel1.png';
import hotel2 from './assets/hotel2.png';
import hotel3 from './assets/hotel3.png';
import hotel4 from './assets/hotel4.png';
import hotel5 from './assets/hotel5.png';
import hotel6 from './assets/hotel6.png';
// styles
import styles from './hotel-card.module.css';

const hotelData = [
  {
    id: 1,
    name: 'Nobu Hotel Chicago',
    description: 'Price starts from 1,000',
    img: hotel1,
  },
  {
    id: 2,
    name: 'The Langham, Chicago',
    description: 'Price starts from 1,000',
    img: hotel2,
  },
  {
    id: 3,
    name: 'Trump International Hotel..',
    description: 'Price starts from 1,000',
    img: hotel3,
  },
  {
    id: 4,
    name: 'The Guesthouse Hotel',
    description: 'Price starts from 1,000',
    img: hotel4,
  },
  {
    id: 5,
    name: 'Villa D’Citta',
    description: 'Price starts from 1,000',
    img: hotel5,
  },
  {
    id: 6,
    name: 'Loews Chicago Hotel',
    description: 'Price starts from 1,000',
    img: hotel6,
  },
  {
    id: 7,
    name: 'Nobu Hotel Chicago',
    description: 'Price starts from 1,000',
    img: hotel1,
  },
  {
    id: 8,
    name: 'The Langham, Chicago',
    description: 'Price starts from 1,000',
    img: hotel2,
  },
  {
    id: 9,
    name: 'Trump International Hotel..',
    description: 'Price starts from 1,000',
    img: hotel3,
  },
];

const HotelCard = () => {
  return (
    <section className={styles.hotelCard}>
      {hotelData.map((data) => (
        <div key={data.id} style={{ marginBottom: '2vh' }}>
          <img src={data.img} width="100%" />
          <div className={styles.description}>
            <div>
              <p className={styles.hotelName}>{data.name}</p>
              <p className={styles.hotelPrice}>{data.description}</p>
            </div>
            <button className={styles.detailButton}>View Details</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HotelCard;
