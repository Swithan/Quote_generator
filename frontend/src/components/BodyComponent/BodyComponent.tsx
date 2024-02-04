import React, { FC } from 'react';
import styles from './BodyComponent.module.css';

interface BodyComponentProps {}

const BodyComponent: FC<BodyComponentProps> = () => (
  <div className={styles.BodyComponent} data-testid="BodyComponent">
    BodyComponent Component
  </div>
);

export default BodyComponent;
