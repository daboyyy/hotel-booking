// styles
import styles from './check-in-and-out.module.css';

const CheckInAndOut = () => {
  return (
    <div className={styles.checkInAndOut}>
      <div className={styles.card}>
        <div className={styles.details}>
          <p className={styles.type}>Check-in</p>
          <p className={styles.date}>Sunday 21, Dec</p>
          <p className={styles.type}>10am</p>
        </div>
        <button>1 night</button>
      </div>
      <div className={styles.card}>
        <div className={styles.details}>
          <p className={styles.type}>Check-out</p>
          <p className={styles.date}>Monday 22, Dec</p>
          <p className={styles.type}>10am</p>
        </div>
        <p className={styles.room}>2 Adult - 1 room</p>
      </div>
    </div>
  );
};

export default CheckInAndOut;
