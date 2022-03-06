/* eslint-disable jsx-a11y/alt-text */
// img
import room1 from './assets/room1.png';
// styles
import styles from './room-list.module.css';

const roomListDat = [
  {
    id: 1,
    currency: 'BAHT',
    img: room1,
    price: 1500,
    type: 'Deluxe Room',
  },
  {
    id: 2,
    currency: 'BAHT',
    img: room1,
    price: 1000,
    type: 'Standard Room',
  },
];

const RoomList = () => {
  const numberWithCommas = (number) => {
    const convertNumber = number
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return convertNumber;
  };

  return (
    <section className={styles.roomList}>
      {roomListDat.map((data) => (
        <div className={styles.roomCard} key={data.id}>
          <img className={styles.img} src={data.img} />
          <div className={styles.description}>
            <p className={styles.roomType}>{data.type}</p>
            <p className={styles.roomPrice}>
              {numberWithCommas(data.price)} {data.currency}/night
            </p>
          </div>
          <div className={styles.bookNow}>
            <p>Book now</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default RoomList;
