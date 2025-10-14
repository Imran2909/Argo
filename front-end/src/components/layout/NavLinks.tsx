import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/navbar/NavLinks.module.css';  // Import module
import type { NavLinksProps } from '../../types';
// import type { User } from '../../types';

export const NavLinks: React.FC<NavLinksProps> = ({ user, links = [
  { label: 'Home', to: '/' },
  { label: 'My Bookings', to: '/my-bookings' },
  { label: 'Profile', to: '/profile' },
  { label: 'Admin', to: '/admin', adminOnly: true },
] }) => {
  const isAdmin = user?.role === 'admin' || 'user';
  const visibleLinks = links.filter(link => !link.adminOnly || isAdmin
    
  );

  return (
    <ul className={styles.navLinks}>
      {visibleLinks.map((link) => (
        <li key={link.to}>
          <Link
            to={link.to}
            className={`${styles.navLink} ${window.location.pathname === link.to ? styles.navLinkActive : ''}`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};