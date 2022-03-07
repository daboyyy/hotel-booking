// styles
import styles from './cancellation-charges.module.css';

const CancellationCharges = () => {
  return (
    <div className={styles.cancellationCharges}>
      <div className={styles.container}>
        <p className={styles.title}>Cancellation Charges</p>
        <p className={styles.subTitle}>Non Refundable</p>
        <p className={styles.description}>
          Penalty may be charged by the airline & by MMT based on how close to
          departure date you cancel. View fare rules to know more.
        </p>
        <p className={styles.description}>VIEW POLICY</p>
      </div>
    </div>
  );
};

export default CancellationCharges;
