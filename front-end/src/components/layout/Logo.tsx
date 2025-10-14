import React from "react";
import styles from "../../styles/navbar/Logo.module.css"; // Import module CSS
// import type { User } from '../../types';
// import { IoAirplaneSharp } from "react-icons/io5";
import Icon from "./Icon";

interface LogoProps {
  text?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ text = "Argo", onClick }) => (
  <div className={styles.logo} onClick={onClick}>
    {/* {icon && (
      <span className={styles.logoIcon}>
        <IoAirplaneSharp size={17.8} color="white" />
      </span>
    )} */}

    <Icon />
    <a href="/" className={styles.logoText}>
      {text}
    </a>
  </div>
);
