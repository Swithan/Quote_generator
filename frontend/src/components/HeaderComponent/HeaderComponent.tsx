import React, { FC } from 'react';
import styles from './HeaderComponent.module.css';

interface HeaderComponentProps {}

const HeaderComponent: FC<HeaderComponentProps> = () => (
  <div className={styles.HeaderComponent} data-testid="HeaderComponent">
    <h1>Quote generator</h1>
  </div>
);

export default HeaderComponent;
