// Indicates that this file is a client component for using hooks in the Next.js framework
"use client"; 

// Importing necessary components and icons
// For client-side navigation
import Link from "next/link"; 
// Icons for heart and shopping cart
import { CiHeart, CiShoppingCart } from "react-icons/ci"; 
// Icon for person outline
import { IoPersonOutline } from "react-icons/io5"; 
// Icons for account box and shopping bag
import { RiAccountBoxLine, RiShoppingBag3Line } from "react-icons/ri"; 
// Icon for times circle
import { FaRegTimesCircle } from "react-icons/fa"; 
// Icons for star and logout
import { CiStar, CiLogout } from "react-icons/ci"; 
// CSS module for styling
import styles from '../../styles/components/Trails.module.css'; 
// React hooks for state management and side effects
import { useState, useEffect, useRef } from 'react'; 
// Next.js router for navigation
import { useRouter } from 'next/navigation'; 

// Defining the Static Navbar Component
const Navbar = () => {
    // Initializing Next.js router
    const router = useRouter(); 

    // Array of menu items for the navbar
    const menus = [
        { title: 'Home', href: '/' },
        { title: 'New Arrival', href: '/categories' },
        { title: 'Categories', href: '/categories' },
        { title: 'Sale', href: '/sale' },
    ];

    // State to handle the visibility of the dropdown menu
    const [dropdownVisible, setDropdownVisible] = useState(false);
    
    // Ref for detecting clicks outside the dropdown
    const dropdownRef = useRef(null);

    // Effect to handle clicks outside the dropdown to close it
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                // Close the dropdown if clicked outside
                setDropdownVisible(false); 
            }
        }

        // Add event listener to detect clicks outside
        document.addEventListener("mousedown", handleClickOutside);
        
        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    // Function to handle redirection
    const handleRedirect = (path) => {
        // Redirect to the specified path
        router.push(path); 
    };

    return (
        <div>
            <nav className={styles.navbar}>
                {/* Navbar logo */}
                <div className={styles.logo}>
                    {/* Link to the homepage */}
                    <Link href="/">LOGO</Link> 
                </div>

                {/* Navbar links */}
                <div className={styles.navLinks}>
                    {menus.map(menu => (
                        <Link key={menu.title} href={menu.href}>
                            {/* Displaying menu titles */}
                            {menu.title} 
                        </Link>
                    ))}
                </div>

                {/* Search bar */}
                <div className={styles.search}>
                    <input type="text" placeholder="What are you looking for?" />
                    <button type="button">Search</button>
                </div>

                {/* Action buttons including the profile dropdown */}
                <div className={styles.actions}>
                    <button className={styles.actionButton}><CiHeart /></button>
                    <button className={styles.actionButton}><CiShoppingCart /></button>
                    {/* Profile button container with dropdown */}
                    <div className={styles.profileButtonContainer} ref={dropdownRef}>
                        <button
                            className={styles.profileButton}
                            // Toggle dropdown visibility
                            onClick={() => setDropdownVisible(!dropdownVisible)} 
                        >
                            <IoPersonOutline />
                        </button>
                        {/* Dropdown menu, visible only when dropdownVisible is true */}
                        {dropdownVisible && (
                            <div className={styles.dropdownMenu}>
                                <button onClick={() => handleRedirect('/account')}>
                                    <RiAccountBoxLine /> Manage my account
                                </button>
                                <button onClick={() => handleRedirect('/orders')}>
                                    <RiShoppingBag3Line /> My order
                                </button>
                                <button onClick={() => handleRedirect('/cancellations')}>
                                    <FaRegTimesCircle /> My cancellations
                                </button>
                                <button onClick={() => handleRedirect('/reviews')}>
                                    <CiStar /> My reviews
                                </button>
                                <button onClick={() => handleRedirect('/login')}>
                                    <CiLogout /> Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            
            {/* Promotional div for inviting friends */}
            <div className={styles.inviteFriends}>
                <p>Invite Friends and get 50% off on your next purchase. Invite Now.</p>
            </div>
        </div>
    );
};

export default Navbar;
