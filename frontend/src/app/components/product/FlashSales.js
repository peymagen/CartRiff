import React from 'react';
import styles from '../../styles/components/FlashSales.module.css';

const flashSalesProducts = [
  { id: 1, name: 'Smart TV', price: 400, originalPrice: 600, imageUrl: '/images/smart-tv.jpg' },
  { id: 2, name: 'Gaming Laptop', price: 1200, originalPrice: 1500, imageUrl: '/images/gaming-laptop.jpg' },
  { id: 3, name: 'Wireless Earbuds', price: 80, originalPrice: 100, imageUrl: '/images/earbuds.jpg' },
  { id: 4, name: 'Smart Watch', price: 200, originalPrice: 300, imageUrl: '/images/smart-watch.jpg' },
  // Add more products as needed
];

const FlashSales = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Flash Sales</h2>
      <div className={styles.products}>
        {flashSalesProducts.map(product => (
          <div key={product.id} className={styles.product}>
            <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.price}>
              ${product.price} <span className={styles.originalPrice}>${product.originalPrice}</span>
            </p>
            <button className={styles.buyNow}>Buy Now</button>
          </div>
        ))}
      </div>
      <div className={styles.viewAllContainer}>
        <button className={styles.viewAll}>View All</button>
      </div>
    </div>
  );
};

export default FlashSales;
