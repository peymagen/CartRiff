// components/WeeklySales.js

"use client"
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styles from '../../styles/components/WeeklySales.module.css';

// WeeklySales component to display weekly sales data in a bar chart
const WeeklySales = ({ data }) => {
  return (
    <div className={styles.card}>
      <h3>Weekly Sales</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklySales;
