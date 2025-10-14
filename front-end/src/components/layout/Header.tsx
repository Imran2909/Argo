import React from 'react';
import styles from '../../styles/navbar/Header.module.css';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { UserAvatar } from './UserAvatar';
import type { User } from '../../types';

interface HeaderProps {
  user?: User | null;
  isAuthenticated?: boolean;
  onLogin?: () => void;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  isAuthenticated = false,
  onLogin,
  onLogout,
}) => {
  const handleLogin = () => {
    if (onLogin) onLogin();
    else window.location.href = '/login';
  };

  const handleLogout = () => {
    if (onLogout) onLogout();
    else console.log('Logout'); // Replace later
  };

  return (
    <header className={styles.header}>
      <Logo
        text="Argo"
        onClick={() => (window.location.href = '/')}
      />
      <NavLinks user={user} />
      <UserAvatar
        user={user}
        isAuthenticated={isAuthenticated}
        onLoginClick={handleLogin}
        onLogoutClick={handleLogout}
      />
    </header>
  );
};

export default Header;
