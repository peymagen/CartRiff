"use client"; // Marks the component as a client-side component in a Next.js app

import React, { useState, useEffect } from 'react';
import styles from '../../styles/components/TrailComponent.module.css';

// Define the TrailComponent component
const HeroSection = () => {
  // Sample posters data
  const samplePosters = [
    { imageUrl: 'images/BrandBanner.png' }, // Ensure these paths are correct
    { imageUrl: 'images/Rectangle 374.png' },
    { imageUrl: 'images/BrandBanner.png' }
  ];

  // State to keep track of the current poster index
  const [currentPosterIndex, setCurrentPosterIndex] = useState(0);

  // Using useEffect hook to set up a timer for automatic poster sliding
  useEffect(() => {
    // If there are no posters, do nothing
    if (samplePosters.length === 0) return;

    // Set an interval to change the current poster index every 5 seconds
    const interval = setInterval(() => {
      // Update the poster index, cycling back to the start if at the end
      setCurrentPosterIndex((prevIndex) => (prevIndex + 1) % samplePosters.length);
    }, 5000); // Change the interval as needed (in milliseconds)

    // Clean up the interval timer when the component is unmounted or when 'posters' changes
    return () => clearInterval(interval);
  }, [samplePosters]); // Dependency array to re-run the effect when 'posters' changes

  // If there are no posters, display a message
  if (samplePosters.length === 0) {
    return <div className={styles.heroSection}>No posters available</div>;
  }

  // Render the TrailComponent with the current poster
  return (
    <div className={styles.heroSection}>
      {samplePosters.map((poster, index) => (
        <div
          className={styles.rectangle}
          key={index}
          // Only display the poster if it matches the currentPosterIndex
          style={{ display: index === currentPosterIndex ? 'block' : 'none' }}
        >
          {/* Display the poster image */}
          <img src={poster.imageUrl} alt={`Poster ${index + 1}`} className={styles.posterImage} />
          {/* Overlay content on the poster */}
          <div className={styles.posterContent}>
            <h1 className={styles.bannerText}>Big Fashion Festival</h1>
            <p className={styles.discountText}>50% - 80% off</p>
            <a href="/explore" className={styles.exploreButton}>Explore</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSection; // Exporting the component for use in other parts of the app
