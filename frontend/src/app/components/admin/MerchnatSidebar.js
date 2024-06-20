// components/MerchantSidebar.js

// Indicates that this file is a client component for using hooks in the Next.js framework
"use client"; 

import React from 'react'; // Import React library
import { FaTachometerAlt, FaShoppingCart, FaBox, FaShippingFast, FaUndo, FaCog } from 'react-icons/fa'; // Import icons from react-icons library
import styles from '../../styles/components/MerchantSidebar.module.css'; // Import CSS module for styling

const MerchantSidebar = () => {
  return (
    <div className={styles.sidebar}>
      {/* Sidebar container */}
      <div className={styles.logo}>
        <h2>MERCHANT</h2>
        {/* Logo text */}
      </div>
      <ul className={styles.nav}>
        {/* Navigation menu */}
        <li>
          <a href="/dashboard">
            <FaTachometerAlt /> Dashboard
          </a>
        </li>
        <li>
          <a href="/order">
            <FaShoppingCart /> Order
          </a>
        </li>
        <li>
          <a href="/products">
            <FaBox /> Products
          </a>
        </li>
        <li>
          <a href="/shipping">
            <FaShippingFast /> Shipping
          </a>
        </li>
        <li>
          <a href="/refund">
            <FaUndo /> Refund
          </a>
        </li>
        <li>
          <a href="/settings">
            <FaCog /> Settings
          </a>
        </li>
      </ul>
      <div className={styles.support}>
        {/* Customer Support section */}
        <h3>Customer Support</h3>
        <p>
          Ask your query, place requests or important issues. Our support team will contact ASAP to you.
        </p>
        <button className={styles.connectButton}>Connect Now</button>
      </div>
      <div className={styles.footer}>
        {/* Footer section */}
        <p><a href="/terms">Terms & Services</a> | <a href="/privacy">Privacy Policy</a></p>
      </div>
    </div>
  );
};

export default MerchantSidebar;
