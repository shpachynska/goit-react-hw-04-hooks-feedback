import React from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const Buttons = ({ options, onLeaveFeedback }) => (
  <div className={styles.feedback__buttons}>
    {options.map(option => (
      <button
        key={option}
        className={styles.feedback__button}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

Buttons.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default Buttons;
