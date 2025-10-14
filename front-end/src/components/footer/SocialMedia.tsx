import React from "react";
import styles from "../../styles/footer/FooterColumns.module.css";
import type { FooterSocialIcon } from "../../types";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa6";

interface SocialMediaProps {
  socialIcons?: FooterSocialIcon[];
  style?: object;
}

export const SocialMedia: React.FC<SocialMediaProps> = ({
  socialIcons = [
    { icon: <FaFacebook />, href: "https://facebook.com/travelpro" },
    { icon: <FaLinkedin />, href: "https://Linkedin.com/travelpro" },
    { icon: <FiInstagram />, href: "https://instagram.com/travelpro" },
    { icon: <FaTwitter />, href: "https://twitter.com/travelpro" },
  ],
}) => (
  <div className={styles.socialSection}>
    {socialIcons.map((social, index) => (
      <a
        key={index}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialIcon}
      >
        <div className={styles.icons}> {social.icon} </div>
      </a>
    ))}
  </div>
);
