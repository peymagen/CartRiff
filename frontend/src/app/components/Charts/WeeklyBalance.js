// components/WeeklyBalance.js
import React from 'react';
import styles from '../../styles/components/WeeklyBalance.module.css';

// WeeklyBalance component to display weekly balance
const WeeklyBalance = ({ balance }) => {
  return (
    <div className={styles.card}>
      <h3>Weekly Balance</h3>
      <p>{balance}</p>
      <a href="#">View entire list</a>
    </div>
  );
};

export default WeeklyBalance;
