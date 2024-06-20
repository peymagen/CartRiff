"use client"

import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/components/MerchantCard.module.css';

// Card component definition 
const MerchantCard = ({title, ordernumber, gradient}) => {
    // Construct the background gradient style
  const backgroundStyle = {
    background: gradient // This will apply the linear gradient as the background
  };
    return (
        <div className={'styles.card'} style={backgroundStyle}>
            {/* Card title */}
            <div className={'styles.title'}>{title}</div>
            {/* Card order number with dynamic color */}
            <div className={'styles.ordernumber'}>{ordernumber}</div>
        </div>
    );
    };

// Proptypes for validation and better development 
MerchantCard.PropTypes = {
    title: PropTypes.string.isRequired, // Title of the cart e.g "Shipped orders"
    ordernumber: PropTypes.oneOfType([PropTypes.string, PropTypes.ordernumber]).isRequired, // order number in the cart 
    gradient: PropTypes.string.isRequired, // Background gradient for the card
}

export default MerchantCard;