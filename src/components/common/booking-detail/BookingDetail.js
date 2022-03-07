// styles
import styles from './booking-detail.module.css';

const BookingDetail = () => (
  <section className={styles.bookingDetail}>
    <input className={styles.input} placeholder="Where are you going?" />
    <div style={{ display: 'flex' }}>
      <input className={styles.input} placeholder="20 Dec,2020" />
      <input className={styles.input} placeholder="21 Dec,2020" />
    </div>
    <input
      className={styles.input}
      placeholder="2 adult ,0 children - 1 room"
    />
    <button className={styles.searchButton}>Search</button>
  </section>
);

export default BookingDetail;
