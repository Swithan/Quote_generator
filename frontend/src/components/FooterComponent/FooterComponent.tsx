import React, { FC } from 'react';
import styles from './FooterComponent.module.css';

interface FooterComponentProps {}

const FooterComponent: FC<FooterComponentProps> = () => (
  <div className={styles.FooterComponent} data-testid="FooterComponent">
    <a href='https://linktr.ee/swithan' target='_blank' rel="noreferrer noopener">Debongnie Nathan</a>
  </div>
);

export default FooterComponent;
