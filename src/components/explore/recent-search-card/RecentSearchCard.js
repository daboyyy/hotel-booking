/* eslint-disable jsx-a11y/alt-text */
// img
import homeHotel from './assets/homeHotel.png';
// icon
import bathIcon from './assets/bathIcon.png';
import clockIcon from './assets/clockIcon.png';
import seemoreIcon from './assets/seemoreIcon.png';
import sportCarIcon from './assets/sportCarIcon.png';
import wifiIcon from './assets/wifiIcon.png';
import wineIcon from './assets/wineIcon.png';
// styles
import styles from './recent-search-card.module.css';

const RecentSearchCard = () => (
  <div className={styles.searchCard}>
    <img height="100%" src={homeHotel} width="120" />
    <div className={styles.detail}>
      <p className={styles.title}>Hotel JW Marriott</p>
      <svg
        id="rating"
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="12"
        viewBox="0 0 80 12"
      >
        <path
          id="Path_18"
          data-name="Path 18"
          d="M60,73.646,63.708,76l-.981-4.44L66,68.575l-4.315-.39L60,64l-1.685,4.185L54,68.575l3.273,2.985L56.292,76Z"
          transform="translate(-54 -64)"
          fill="#ffc362"
          opacity="0.999"
        />
        <path
          id="Path_19"
          data-name="Path 19"
          d="M60,73.646,63.708,76l-.981-4.44L66,68.575l-4.315-.39L60,64l-1.685,4.185L54,68.575l3.273,2.985L56.292,76Z"
          transform="translate(-37 -64)"
          fill="#ffc362"
        />
        <path
          id="Path_20"
          data-name="Path 20"
          d="M60,73.646,63.708,76l-.981-4.44L66,68.575l-4.315-.39L60,64l-1.685,4.185L54,68.575l3.273,2.985L56.292,76Z"
          transform="translate(-20 -64)"
          fill="#ffc362"
        />
        <path
          id="Path_21"
          data-name="Path 21"
          d="M60,73.646,63.708,76l-.981-4.44L66,68.575l-4.315-.39L60,64l-1.685,4.185L54,68.575l3.273,2.985L56.292,76Z"
          transform="translate(-3 -64)"
          fill="#ffc362"
        />
        <path
          id="Path_22"
          data-name="Path 22"
          d="M60,73.646,63.708,76l-.981-4.44L66,68.575l-4.315-.39L60,64l-1.685,4.185L54,68.575l3.273,2.985L56.292,76Z"
          transform="translate(14 -64)"
          fill="#727c8e"
          opacity="0.3"
        />
      </svg>
      <div className={styles.ratings}>
        <svg
          id="rating"
          xmlns="http://www.w3.org/2000/svg"
          width="47"
          height="22"
          viewBox="0 0 47 22"
        >
          <rect
            id="Rectangle_12"
            data-name="Rectangle 12"
            width="47"
            height="22"
            rx="11"
            fill="#ff6969"
          />
          <path
            id="Path_12"
            data-name="Path 12"
            d="M59,72.039,62.09,74l-.817-3.7L64,67.813l-3.6-.325L59,64l-1.4,3.488-3.6.325L56.728,70.3,55.91,74Z"
            transform="translate(-44.934 -58)"
            fill="#fff"
          />
          <text
            id="_4.9"
            data-name="4.9"
            transform="translate(30 16)"
            fill="#fff"
            fontSize="12"
            fontFamily="Poppins-Medium, Poppins"
            fontWeight="500"
          >
            <tspan x="-9.138" y="0">
              4.9
            </tspan>
          </text>
        </svg>
        <p className={styles.reviews}>1366 Reviews</p>
      </div>
      <p className={styles.types}>Amenities</p>
      <div className={styles.iconContainer}>
        <img className={styles.icon} src={sportCarIcon} />
        <img className={styles.icon} src={bathIcon} />
        <img className={styles.icon} src={wineIcon} />
        <img className={styles.icon} src={wifiIcon} />
        <img className={styles.icon} src={clockIcon} />
        <img className={styles.icon} src={seemoreIcon} />
      </div>
      <p className={styles.price}>1,000/night</p>
    </div>
    <div className={styles.bookNow}>
      <p>Book now</p>
    </div>
  </div>
);

export default RecentSearchCard;
