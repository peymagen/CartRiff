// Import React library
import React from 'react';
// Import styles for the component
import styles from '../../styles/components/BrandBanner.module.css'; 

// Define the BrandBanner component
const BrandBanner = () => {
  return (
    
    <div className={styles.banner}>
      {/* Container for text content */}
      <div className={styles.content}>
        {/* Heading for the banner */}
        <h1 className={styles.bannerText}>Big Fashion Festival</h1>
        {/* Text for the discount */}
        <p className={styles.discountText}>50% - 80% off</p>
        {/* Explore button */}
        <a href="/explore" className={styles.exploreButton}>Explore</a>
      </div>
    </div>
  );
};


export default BrandBanner;
