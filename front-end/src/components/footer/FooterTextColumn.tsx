import React from 'react';
import styles from '../../styles/footer/FooterColumns.module.css';
import type { FooterSection } from '../../types';  // Type-only

interface FooterTextColumnProps {
  section: FooterSection;
  style?: object
}

export const FooterTextColumn: React.FC<FooterTextColumnProps> = ({ section }) => (
  <div className={styles.textColumn}>
    <h3 className={styles.columnHeading}>{section.heading}</h3>
    <div className={styles.linkList}>  {/* Flex column for vertical texts */}
      {section.links.map((link, linkIndex) => (
        <a key={linkIndex} href={link.href} className={styles.columnLink}>
          {link.label}
        </a>
      ))}
    </div>
  </div>
);