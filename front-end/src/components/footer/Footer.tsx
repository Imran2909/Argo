import React from 'react';
import styles from '../../styles/footer/Footer.module.css';
import { FooterColumns } from './FooterColumns';
import { CopyrightBar } from './CopyRightBar';
import type { FooterProps } from '../../types';

export const Footer: React.FC<FooterProps> = (props) => (
  <footer className={styles.footerOuter}>
    <div className={styles.footerInner}>
      <FooterColumns {...props} />
      <CopyrightBar year={props.year} company={props.company} />
    </div>
  </footer>
);

export default Footer;