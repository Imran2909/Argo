import React from 'react';
import styles from '../../styles/navbar/UserAvatar.module.css';
import type { User } from '../../types';

interface UserAvatarProps {
  user?: User | null;
  isAuthenticated?: boolean;
  onLoginClick?: () => void;
  onLogoutClick?: () => void;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
  user,
  isAuthenticated = false,
  onLoginClick,
  onLogoutClick,
}) => {
  const handleClick = () => {
    if (isAuthenticated) {
      if (onLogoutClick) onLogoutClick();
    } else if (onLoginClick) {
      onLoginClick();
    }
  };

  const avatarContent = isAuthenticated && user
    ? user.avatar
      ? (
          <img
            src={user.avatar}
            alt={user.name}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        )
      : user.name?.charAt(0).toUpperCase()
    : '👤';

  return (
    <button
      className={`${styles.avatar} ${!isAuthenticated ? styles.avatarPlaceholder : ''}`}
      onClick={handleClick}
      type="button"
    >
      {avatarContent}
    </button>
  );
};
