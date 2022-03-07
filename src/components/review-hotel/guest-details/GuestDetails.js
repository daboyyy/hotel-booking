// component
import { Title } from '../../common';
// styles
import styles from './guest-details.module.css';

const GuestDetails = () => {
  return (
    <div className={styles.guestDetails}>
      <Title text="Guest Details" />
      <div className={styles.grid}>
        <input className={styles.input} placeholder="First Name" />
        <input className={styles.input} placeholder="Last Name" />
        <input className={styles.input} placeholder="E-mail address" />
        <input className={styles.input} placeholder="Mobile Number" />
      </div>
      <div className={styles.addGuest}>
        <Title text="Add Guest +" />
      </div>
      <Title text="Special Request (optional)" />
      <textarea className={styles.textarea} />
      <button className={styles.continueButton}>Continue</button>
    </div>
  );
};

export default GuestDetails;
