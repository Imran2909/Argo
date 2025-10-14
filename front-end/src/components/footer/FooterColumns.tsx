import React from "react";
import styles from "../../styles/footer/FooterColumns.module.css";
import { FooterTextColumn } from "./FooterTextColumn";
import { SocialMedia } from "./SocialMedia";
import type { FooterSection, FooterSocialIcon } from "../../types";

interface FooterColumnsProps {
  sections?: FooterSection[];
  socialIcons?: FooterSocialIcon[];
}

export const FooterColumns: React.FC<FooterColumnsProps> = ({
  sections = [
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Safety", href: "/safety" },
        { label: "Guidelines", href: "/guidelines" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ],
  socialIcons,
}) => (
  <div className={styles.contentSection}>
    <div className={styles.links}>
      {/* Place text columns in grid cells 1-3 */}
      {sections.map((section, index) => (
        <FooterTextColumn
          key={index}
          section={section}
        />
      ))}
    </div>
    <div className={styles.socialMedia} >
      {/* Social in grid cell 4 (right) */}
      <SocialMedia socialIcons={socialIcons} />
    </div>
  </div>
);
