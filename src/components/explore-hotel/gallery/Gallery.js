/* eslint-disable jsx-a11y/alt-text */
// img
import gallery1 from './assets/gallery1.png';
import gallery2 from './assets/gallery2.png';
import gallery3 from './assets/gallery3.png';
import gallery4 from './assets/gallery4.png';
// styles
import styles from './gallery.module.css';

const Gallery = () => (
  <section className={styles.gallery}>
    <div className={styles.gridGallery}>
      <img height="100%" src={gallery1} width="100%" />
      <img height="100%" src={gallery2} width="100%" />
      <img height="100%" src={gallery3} width="100%" />
      <div className={styles.seeAll}>
        <img height="100%" src={gallery4} width="100%" />
        <p>See All</p>
      </div>
    </div>
  </section>
);

export default Gallery;
