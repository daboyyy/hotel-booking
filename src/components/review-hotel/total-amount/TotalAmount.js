// styles
import styles from './total-amount.module.css';

const TotalAmount = () => {
  const numberWithCommas = (number) => {
    const convertNumber = number
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return convertNumber;
  };

  return (
    <section className={styles.totalAmount}>
      <div className={styles.grid}>
        <p className={styles.subText}>1 room X 1 night</p>
        <div className={styles.number}>
          <p className={styles.subNumber}>{numberWithCommas(1000)}</p>
        </div>
        <p className={styles.subText}>Total discount</p>
        <div className={styles.number}>
          <p className={styles.subNumber}>{numberWithCommas(0)}</p>
        </div>
        <p className={styles.subText}>Price after discount</p>
        <div className={styles.number}>
          <p className={styles.subNumber}>{numberWithCommas(1000)}</p>
        </div>
        <p className={styles.subText}>Taxes & service fees</p>
        <div className={styles.number}>
          <p className={styles.subNumber}>{numberWithCommas(140)}</p>
        </div>
        <p className={styles.mainText}>Total Amount</p>
        <div className={styles.number}>
          <p className={styles.mainNumber}>{numberWithCommas(1140)}</p>
        </div>
      </div>
    </section>
  );
};

export default TotalAmount;
