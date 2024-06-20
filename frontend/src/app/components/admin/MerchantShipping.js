"use client"

import React from 'react';
import { FaSort, FaFilter, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from '../../styles/components/MerchantShipping.module.css';

const MerchantShipping = ({ shipments = [], currentPage, handlePageChange, shipmentsPerPage, totalShipments }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerAndProfile}>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>Shipping</h1>
          <div className={styles.searchContainer}>
            <input type="text" placeholder="Search" />
          </div>
        </header>
        <div className={styles.userProfile}>
          <img src="/images/profile.jpg" alt="User Profile" />
          <div>
            <p>Uroos Fatima</p>
            <p>uroos.design@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={styles.actionButtons}>
        <div className={styles.filterSortButtons}>
          <button className={styles.sortButton}><FaSort /> Sort</button>
          <button className={styles.filterButton}><FaFilter /> Filter</button>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.shipmentTable}>
          <thead>
            <tr>
              <th>PRODUCTS</th>
              <th>CUSTOMER</th>
              <th>DELIVERY</th>
              <th>AMOUNT</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {shipments.length > 0 ? (
              shipments.map((shipment) => (
                <tr key={shipment.id}>
                  <td>
                    <div className={styles.productInfo}>
                      <img src={shipment.product.image} alt={shipment.product.name} />
                      <div>
                        <p>{shipment.product.name}</p>
                        <p>{shipment.product.id}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{shipment.customer.name}</p>
                    <p>{shipment.customer.email}</p>
                  </td>
                  <td>
                    <p>{shipment.delivery.country}</p>
                    <p>{shipment.delivery.address}</p>
                  </td>
                  <td>${shipment.amount}</td>
                  <td>
                    <span
                      className={`${styles.status} ${styles[shipment.status.toLowerCase().replace(' ', '')]}`}
                    >
                      {shipment.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className={styles.emptyMessage}>
                  No shipments available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        <button
          className={styles.paginationButton}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaArrowLeft /> Previous
        </button>
        <div className={styles.pages}>
          {[...Array(Math.ceil(totalShipments / shipmentsPerPage))].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? styles.activePageButton : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          className={styles.paginationButton}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(totalShipments / shipmentsPerPage)}
        >
          Next <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default MerchantShipping;
