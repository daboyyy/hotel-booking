/* eslint-disable jsx-a11y/alt-text */
// images
import activeMenu from './assets/activeMenu.png';
import exploreMenu from './assets/exploreMenu.png';
import homeMenu from './assets/homeMenu.png';
import profileMenu from './assets/profileMenu.png';
import tripsMenu from './assets/tripsMenu.png';
// styles
import styles from './navbar.module.css';

const Navbar = ({ isActive, onClickMenu }) => {
  return (
    <nav className={styles.navbar}>
      <svg
        className={styles.categoryIcon}
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="34"
        viewBox="0 0 30 34"
      >
        <g id="Group_335" data-name="Group 335" transform="translate(-42 -55)">
          <circle
            id="Ellipse_57"
            data-name="Ellipse 57"
            cx="8"
            cy="8"
            r="8"
            transform="translate(42 55)"
            fill="#fff"
          />
          <circle
            id="Ellipse_58"
            data-name="Ellipse 58"
            cx="6.5"
            cy="6.5"
            r="6.5"
            transform="translate(43 76)"
            fill="#fff"
          />
          <circle
            id="Ellipse_59"
            data-name="Ellipse 59"
            cx="6.5"
            cy="6.5"
            r="6.5"
            transform="translate(59 70)"
            fill="#fff"
          />
        </g>
      </svg>
      <svg
        className={styles.menuIcon}
        onClick={onClickMenu}
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30"
        height="34"
        viewBox="0 0 30 30"
      >
        <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
      </svg>
      <div className={styles.desktopMenu}>
        <img src={homeMenu} />
        {isActive ? <img src={activeMenu} /> : <img src={exploreMenu} />}
        <img src={tripsMenu} />
        <img src={profileMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
