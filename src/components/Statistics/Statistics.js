import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ values, totalCount, percentage }) => (
  <>
    <ul className={styles.feedback__statsList}>
      <li>Good: {values.good}</li>
      <li>Neutral: {values.neutral}</li>
      <li>Bad: {values.bad}</li>
      <li>Total: {totalCount}</li>
      <li>
        Positive feedback:{' '}
        <span className={percentage >= 50 ? styles.positive : styles.negative}>
          {percentage}%
        </span>
      </li>
    </ul>
  </>
);

Statistics.propTypes = {
  values: PropTypes.object,
  totalCount: PropTypes.number,
  percentage: PropTypes.number,
};

export default Statistics;
