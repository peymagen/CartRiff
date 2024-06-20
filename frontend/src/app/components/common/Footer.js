"use client"

import React from 'react'; 
import styles from '../../styles/components/Footer.module.css'; 
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => { // Define the Footer functional component
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className={styles.footer}> {/* Apply the footer styles */}
      <div className={styles.container}> {/* Container div to hold all footer content */}
        <div className={styles.column}> {/* Column for the "Exclusive" section */}
          <h3>Exclusive</h3> {/* Section title */}
          <p>Get 10% off your first order</p> {/* Promotional text */}
          <form> {/* Form for subscribing to the newsletter */}
            <input type="email" placeholder="Enter your email" required /> {/* Email input field */}
            <button type="submit">SUBSCRIBE</button> {/* Submit button */}
          </form>
        </div>
        <div className={styles.column}> {/* Column for the "Support" section */}
          <h3>Support</h3> {/* Section title */}
          <address> {/* Contact information using the address element */}
            123 Street St. Louis<br /> {/* Street address */}
            United States<br /> {/* Country */}
            <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a><br /> {/* Email address */}
            <a href="tel:+02212478647">+02 2124 78647</a> {/* Phone number */}
          </address>
        </div>
        <div className={styles.column}> {/* Column for the "Account" section */}
          <h3>Account</h3> {/* Section title */}
          <ul> {/* List of account-related links */}
            <li><a href="/account">My Account</a></li> {/* Link to "My Account" page */}
            <li><a href="/login">Login / Register</a></li> {/* Link to "Login / Register" page */}
            <li><a href="/cart">Cart</a></li> {/* Link to "Cart" page */}
            <li><a href="/wishlist">Wishlist</a></li> {/* Link to "Wishlist" page */}
            <li><a href="/shop">Shop</a></li> {/* Link to "Shop" page */}
          </ul>
        </div>
        <div className={styles.column}> {/* Column for the "Quick Links" section */}
          <h3>Quick Links</h3> {/* Section title */}
          <ul> {/* List of quick links */}
            <li><a href="/privacy-policy">Privacy Policy</a></li> {/* Link to "Privacy Policy" page */}
            <li><a href="/terms-of-use">Terms of Use</a></li> {/* Link to "Terms of Use" page */}
            <li><a href="/faq">FAQ</a></li> {/* Link to "FAQ" page */}
            <li><a href="/contact">Contact</a></li> {/* Link to "Contact" page */}
            <li><a href="/become-seller">Become a Seller</a></li> {/* Link to "Become a Seller" page */}
          </ul>
        </div>
        {/* Container for social media icons */}
        <div className={styles.socialMedia}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className={styles.icon} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className={styles.icon} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.icon} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className={styles.icon} />
            </a>
          </div>
      </div>
      <div className={styles.copyright}> {/* Copyright section */}
        &copy; Copyright {currentYear}. All rights reserved. {/* Display the current year dynamically */}
      </div>
    </footer>
  );
};

export default Footer; // Export the Footer component as the default export
