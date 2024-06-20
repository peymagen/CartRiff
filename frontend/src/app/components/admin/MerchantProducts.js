"use client"
import React, { useEffect, useState } from 'react';
import styles from '../../styles/components/MerchantProducts.module.css';
import { FaSort, FaFilter, FaPlus, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const MerchantProducts = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Number of products per page

  useEffect(() => {
    fetchProductsFromAPI();
  }, [currentPage]);

  const fetchProductsFromAPI = async () => {
    setTimeout(() => {
      const fetchedProducts = [
        { id: 1, name: "Macbook Pro 13' 2019", sku: 'SKU 345-091', category: 'Electronics', qty: 1120, rating: 4.6, price: 1500, image: '/images/laptop.jpg' },
        { id: 2, name: "iPhone 11", sku: 'SKU 345-092', category: 'Electronics', qty: 560, rating: 4.7, price: 999, image: '/images/iphone.jpg' },
        { id: 3, name: "Samsung Galaxy S20", sku: 'SKU 345-093', category: 'Electronics', qty: 300, rating: 4.8, price: 1200, image: '/images/samsung.jpg' },
        { id: 4, name: "Sony WH-1000XM4", sku: 'SKU 345-094', category: 'Electronics', qty: 800, rating: 4.9, price: 350, image: '/images/headphones.jpg' },
        { id: 5, name: "Apple Watch Series 6", sku: 'SKU 345-095', category: 'Electronics', qty: 400, rating: 4.5, price: 450, image: '/images/apple-watch.jpg' },
        { id: 6, name: "Dell XPS 13", sku: 'SKU 345-096', category: 'Electronics', qty: 150, rating: 4.6, price: 1700, image: '/images/dell.jpg' },
        { id: 7, name: "HP Spectre x360", sku: 'SKU 345-097', category: 'Electronics', qty: 200, rating: 4.6, price: 1600, image: '/images/hp.jpg' },
        // ... more products
      ];

      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      setProducts(fetchedProducts.slice(startIndex, endIndex));
    }, 1000);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerAndProfile}>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>ALL Products</h1>
          <div className={styles.searchContainer}>
            <input type="text" placeholder="Search" />
          </div>
        </header>
        <div className={styles.userProfile}>
          <img src="/images/profile.jpg" alt="User Profile" />
          <div>
            <p>User Name</p>
            <p>user.email@example.com</p>
          </div>
        </div>
      </div>
      <div className={styles.actionButtons}>
        <div className={styles.filterSortButtons}>
          <button className={styles.sortButton}><FaSort /> Sort</button>
          <button className={styles.filterButton}><FaFilter /> Filter</button>
        </div>
        <button className={styles.addButton}><FaPlus /> Add Product</button>
      </div>

      <div className={styles.productGrid}>
        {products.map(product => (
          <div className={styles.productCard} key={product.id}>
            <div className={styles.productImage}>
              <img src={product.image} alt={product.name} />
              <span className={styles.category}>{product.category}</span>
            </div>
            <h2>{product.name}</h2>
            <span className={styles.sku}>{product.sku}</span>
            <div className={styles.productInfo}>
              <span>QTY: {product.qty}</span>
              <span>Ratings: {product.rating}/5.0</span>
              <span>Price: ${product.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <button 
          className={styles.paginationButton} 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}>
          <FaArrowLeft /> Previous
        </button>
        <div className={styles.pages}>
          {[...Array(Math.ceil(7 / productsPerPage))].map((_, index) => (
            <button 
              key={index} 
              onClick={() => handlePageChange(index + 1)} 
              className={currentPage === index + 1 ? styles.activePageButton : ''}>
              {index + 1}
            </button>
          ))}
        </div>
        <button 
          className={styles.paginationButton} 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === Math.ceil(7 / productsPerPage)}>
          Next <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default MerchantProducts;

