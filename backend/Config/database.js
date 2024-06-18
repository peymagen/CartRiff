const express = require('express');
const mysql = require('mysql');

// Create a pool to the MySQL database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'mysqli',
  database: 'ecommerce'
});

module.exports = pool; 