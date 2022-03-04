/* eslint-disable jsx-a11y/alt-text */
import styles from './desktop-image.module.css';
// img
import tajmahal from './assets/tajmahal.png';

const DesktopImage = () => {
  return (
    <section className={styles.background}>
      <img className={styles.backgroundImg} src={tajmahal} />
      <p className={styles.catchphrase}>Incredible India</p>
      <p className={styles.catchphrase2}>“For where thy treasure is, </p>
      <p className={styles.catchphrase3}>there also will thy heart be.”</p>
      <button className={styles.takeTourButton}>Take Tour</button>
    </section>
  );
};

export default DesktopImage;
