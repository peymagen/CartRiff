// components/OrdersInLine.js

"use client"
import React from 'react';
import styles from '../../styles/components/OrdersLine.module.css';

// OrdersInLine component to display number of orders in line
const OrdersInLine = ({ orders }) => {
  return (
    <div className={styles.card}>
      <h3>Orders in Line</h3>
      <p>{orders}</p>
      <a href="#">View entire list</a>
    </div>
  );
};

export default OrdersInLine;
