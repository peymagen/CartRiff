"use client"; // Marks the file as a client component for using hooks in the Next.js framework

import React, { useState } from 'react'; // Importing necessary hooks from React
import styles from '../../styles/components/NewsletterForm.module.css'; // Importing CSS module for styling

const Newsletter = () => {
  // Defining state to store the email input value
  const [email, setEmail] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    // Handle form submission logic here
    console.log('Email submitted:', email);
  };

  return (
    <div className={styles.newsletter}>
      {/* Heading for the newsletter form */}
      <h2 className={styles.headline}>Subscribe To The Newsletter</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputContainer}>
          {/* Email input field */}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          {/* Submit button */}
          <button type="submit" className={styles.submitButton}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter; // Exporting the component for use in other parts of the app

