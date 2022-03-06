// styles
import styles from './hotel-description.module.css';

const HotelDescription = () => {
  return (
    <section className={styles.hotelDescription}>
      <div>
        <p className={styles.title}>Holiday Inn Resort</p>
        <p className={styles.description}>Mobor,Cavelossim,Goa</p>
      </div>
      <button className={styles.priceButton}>
        Price Starting from 1,000 BAHT
      </button>
    </section>
  );
};

export default HotelDescription;
