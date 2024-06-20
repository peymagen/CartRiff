// Indicates that this file is a client component for using hooks in the Next.js framework
"use client"; 

// Import necessary libraries and CSS module
import React, { useEffect, useState } from 'react';
import styles from '../../styles/components/Products.module.css';
// import { FaShoppingCart } from 'react-icons/fa';

// Mock API call to fetch products
// In a real application, this would be an actual API call
const fetchProducts = async () => {
  try {
    return [
      // Array of product objects
      {
        id: 1,
        name: 'Breed Dry Dog Food',
        price: 100,
        rating: 4.5,
        reviews: 35,
        image: '/images/dog-food.jpg',
      },
      {
        id: 2,
        name: 'CANON EOS DSLR Camera',
        price: 360,
        rating: 4.7,
        reviews: 59,
        image: '/images/camera.jpg',
      },
      {
        id: 3,
        name: 'ASUS FHD Gaming Laptop',
        price: 700,
        rating: 4.8,
        reviews: 325,
        image: '/images/laptop.jpg',
      },
      {
        id: 4,
        name: 'Curology Product Set',
        price: 500,
        rating: 4.6,
        reviews: 145,
        image: '/images/curology.jpg',
      },
      {
        id: 5,
        name: 'Kids Electric Car',
        price: 550,
        rating: 4.9,
        reviews: 68,
        image: '/images/electric-car.jpg',
      },
      {
        id: 6,
        name: 'Jr. Zoom Soccer Cleats',
        price: 160,
        rating: 4.3,
        reviews: 39,
        image: '/images/soccer-cleats.jpg',
      },
      {
        id: 7,
        name: 'GPII Shooter USB Gamepad',
        price: 60,
        rating: 4.4,
        reviews: 69,
        image: '/images/gamepad.jpg',
      },
      {
        id: 8,
        name: 'Quilted Satin Jacket',
        price: 680,
        rating: 4.5,
        reviews: 103,
        image: '/images/jacket.jpg',
      },
    ];
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
};

// Define the Products component
const Products = ({ initialProducts }) => {
  // Initialize state with initial products data from server or an empty array
  const [products, setProducts] = useState(initialProducts || []);
  const [loading, setLoading] = useState(false);

  // Use useEffect to fetch products dynamically on the client-side
  useEffect(() => {
    const updateProducts = async () => {
      setLoading(true);
      try {
        // Fetch updated products
        const updatedProducts = await fetchProducts();
        // Update state with the new products data
        setProducts(updatedProducts);
      } catch (error) {
        console.error('Failed to update products:', error);
      } finally {
        setLoading(false);
      }
    };
    // Call the function to fetch products
    updateProducts();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className={styles.productsContainer}>
      <h1 className={styles.title}>Explore Our Products</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img src={product.image} alt={product.name} className={styles.productImage} />
              <h2 className={styles.productName}>{product.name}</h2>
              <p className={styles.productPrice}>${product.price}</p>
              <div className={styles.productRating}>
                {product.rating} stars ({product.reviews} reviews)
              </div>
              <button className={styles.addToCartButton}>
                 Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// getServerSideProps to fetch products on each request for SSR
export async function getServerSideProps() {
  // Fetch initial products data
  const initialProducts = await fetchProducts();
  // Return the initial products as props to the component
  return {
    props: {
      initialProducts,
    },
  };
}

// Export the Products component as default
export default Products;
