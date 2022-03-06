// icon
import SuggestionIcon from './assets/SuggestionIcon';
// styles
import styles from './suggestion-message.module.css';

const SuggestionMessage = () => {
  return (
    <section className={styles.suggestionMessage}>
      <SuggestionIcon />
      <p>This property is in highly demand today.</p>
    </section>
  );
};

export default SuggestionMessage;
