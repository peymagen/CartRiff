import React from 'react';
import { FaStar } from 'react-icons/fa';
import styles from '../../styles/components/BestSellingProducts.module.css';

const products = [
  { id: 1, name: 'The north coat', price: 280, originalPrice: 300, rating: 4.5, imageUrl: '/images/north-coat.jpg' },
  { id: 2, name: 'Gucci duffle bag', price: 960, originalPrice: 1160, rating: 5, imageUrl: '/images/gucci-bag.jpg' },
  { id: 3, name: 'RGB liquid CPU Cooler', price: 160, originalPrice: 210, rating: 4.5, imageUrl: '/images/cpu-cooler.jpg' },
  { id: 4, name: 'Small BookShelf', price: 360, originalPrice: 400, rating: 4, imageUrl: '/images/bookshelf.jpg' },
  { id: 5, name: 'Study Chair', price: 1320, originalPrice: 2200, rating: 3.5, imageUrl: '/images/studychair.jpg' },
  { id: 6, name: 'T shirt', price: 499, originalPrice: 999, rating: 4.5, imageUrl: '/images/Tshirt.jpg' },
  { id: 7, name: 'Headphone', price: 799, originalPrice: 1199, rating: 4.3, imageUrl: '/images/Headphone.jpg' },
  { id: 8, name: 'Leather Wallet', price: 999, originalPrice: 999, rating: 4.4, imageUrl: '/images/LeatherWallet.jpg' },
];

const BestSellingProducts = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Best Selling Products</h2>
      <div className={styles.products}>
        {products.map(product => (
          <div key={product.id} className={styles.product}>
            <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.price}>
              ${product.price} <span className={styles.originalPrice}>${product.originalPrice}</span>
            </p>
            <div className={styles.rating}>
              {[...Array(Math.floor(product.rating))].map((_, i) => (
                <FaStar key={i} className={styles.star} />
              ))}
            </div>
            <button className={styles.addToCart}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className={styles.viewAllContainer}>
        <button className={styles.viewAll}>View All</button>
      </div>
    </div>
  );
};

export default BestSellingProducts;
