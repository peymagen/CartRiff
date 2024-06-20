// src/Wishlist.js
"use client"
import React from 'react';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';
import '../../styles/components/WishList.module.css';

// Mock data for wishlist items and "Just For You" items
const wishlistItems = [
    {
        name: 'Gucci duffle bag',
        price: 960,
        originalPrice: 1500,
        image: '/images/gucci-duffle-bag.jpg', // Example path
        discount: '-36%'
    },
    {
        name: 'RGB liquid CPU Cooler',
        price: 1950,
        image: '/images/rgb-cpu-cooler.jpg'
    },
    {
        name: 'QP11 Shooter USB Gamepad',
        price: 550,
        image: '/images/gamepad.jpg'
    },
    {
        name: 'Quilted Satin Jacket',
        price: 750,
        image: '/images/jacket.jpg'
    }
];

const justForYouItems = [
    {
        name: 'ASUS FHD Gaming Laptop',
        price: 960,
        originalPrice: 1100,
        image: '/images/asus-gaming-laptop.jpg',
        discount: '-35%',
        rating: 4.5
    },
    {
        name: 'IPS LCD Gaming Monitor',
        price: 1160,
        image: '/images/gaming-monitor.jpg',
        rating: 4.5
    },
    {
        name: 'HAVIT HV-G92 Gamepad',
        price: 560,
        image: '/images/havit-gamepad.jpg',
        new: true,
        rating: 4.5
    },
    {
        name: 'AK-900 Wired Keyboard',
        price: 200,
        image: '/images/wired-keyboard.jpg',
        rating: 4.5
    }
];

const WishList = () => {
    return (
        <div className="wishlist-container">
            <div className="wishlist-header">
                <h2>Wishlist ({wishlistItems.length})</h2>
                <button className="move-all-btn">Move All To Bag</button>
            </div>
            <div className="wishlist-items">
                {wishlistItems.map((item, index) => (
                    <div key={index} className="wishlist-item">
                        {item.discount && <span className="item-discount">{item.discount}</span>}
                        <img src={item.image} alt={item.name} className="item-image" />
                        <div className="item-details">
                            <p className="item-name">{item.name}</p>
                            <p className="item-price">${item.price}</p>
                            {item.originalPrice && <p className="item-original-price">${item.originalPrice}</p>}
                            <button className="add-to-cart-btn">
                                <FaShoppingCart /> Add To Cart
                            </button>
                        </div>
                        <button className="remove-btn">
                            <FaTrash />
                        </button>
                    </div>
                ))}
            </div>

            <div className="just-for-you">
                <h2>Just For You</h2>
                <div className="just-for-you-items">
                    {justForYouItems.map((item, index) => (
                        <div key={index} className="just-for-you-item">
                            {item.discount && <span className="item-discount">{item.discount}</span>}
                            {item.new && <span className="item-new">NEW</span>}
                            <img src={item.image} alt={item.name} className="item-image" />
                            <div className="item-details">
                                <p className="item-name">{item.name}</p>
                                <p className="item-price">${item.price}</p>
                                {item.originalPrice && <p className="item-original-price">${item.originalPrice}</p>}
                                <div className="item-rating">
                                    {'★'.repeat(Math.floor(item.rating))}{'☆'.repeat(5 - Math.floor(item.rating))}
                                </div>
                                <button className="add-to-cart-btn">
                                    <FaShoppingCart /> Add To Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="see-all-btn">See All</button>
            </div>
        </div>
    );
};

export default WishList;
