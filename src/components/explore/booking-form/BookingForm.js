import { useState } from 'react';
import DatePicker from 'react-datepicker';
// styles
import 'react-datepicker/dist/react-datepicker.css';
import styles from './booking-form.module.css';

const BookingForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <section className={styles.bookingForm}>
      <input
        type="text"
        className={styles.locationInput}
        placeholder="Pattaya"
      />
      <div style={{ display: 'flex' }}>
        <DatePicker
          className={styles.startDateInput}
          dateFormat="EEE,d MMMM-yyyy"
          onChange={(date) => setStartDate(date)}
          selected={startDate}
        />
        <DatePicker
          className={styles.endDateInput}
          dateFormat="EEE,d MMMM-yyyy"
          onChange={(date) => setEndDate(date)}
          selected={endDate}
        />
      </div>
      <input
        type="text"
        className={styles.peopleInput}
        placeholder="2 adult, 1 children - 1 room"
      />
      <button className={styles.submitButton}>Search</button>
    </section>
  );
};

export default BookingForm;
