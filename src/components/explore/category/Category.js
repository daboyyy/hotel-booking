// icon
import MockCategory from './assets';
// styles
import styles from './category.module.css';

const Category = () => {
  return (
    <section className={styles.category}>
      <p className={styles.catchphrase}>What Are You Looking For?</p>
      <MockCategory />
    </section>
  );
};

export default Category;
