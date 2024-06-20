// components/TodaysTrends.js

"use client"
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styles from '../../styles/components/TodaysTrends.module.css';

// TodaysTrends component to display today's trends in a line chart
const TodaysTrends = ({ data }) => {
  return (
    <div className={styles.card}>
      <h3>Today's Trends</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TodaysTrends;
