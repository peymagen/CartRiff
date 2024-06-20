// components/RecentActivity.js

"use client"
import React from 'react';
import styles from '../../styles/components/RecentActivity.module.css';

// RecentActivity component to display recent activities
const RecentActivity = ({ activities }) => {
  return (
    <div className={styles.card}>
      <h3>Recent Activity</h3>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>{activity.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
