import React from 'react';
import styles from '../../styles/footer/Footer.module.css';

interface CopyrightBarProps {
  year?: number;
  company?: string;
}

export const CopyrightBar: React.FC<CopyrightBarProps> = ({ year = 2024, company = 'TravelPro' }) => (
  <div className={styles.copyrightSection}>
    <p className={styles.copyrightText}>
      &copy; {year} {company}. All rights reserved.
    </p>
  </div>
);