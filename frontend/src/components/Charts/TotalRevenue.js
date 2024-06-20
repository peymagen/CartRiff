// components/TotalRevenue.js

"use client"
import React from 'react';
import styles from '../../styles/components/TotalRevenue.module.css';

// TotalRevenue component to display total revenue
const TotalRevenue = ({ revenue, change }) => {
  return (
    <div className={styles.card}>
      <h2>Total Revenue</h2>
      <p>{revenue}</p>
      <p className={change > 0 ? styles.positiveChange : styles.negativeChange}>{change}</p>
    </div>
  );
};

export default TotalRevenue;
