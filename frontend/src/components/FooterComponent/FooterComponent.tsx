import React, { FC } from 'react';
import styles from './FooterComponent.module.css';

interface FooterComponentProps {}

const FooterComponent: FC<FooterComponentProps> = () => (
  <div className={styles.FooterComponent} data-testid="FooterComponent">
    FooterComponent Component
  </div>
);

export default FooterComponent;
