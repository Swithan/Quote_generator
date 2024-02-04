import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BodyComponent from './BodyComponent';

describe('<BodyComponent />', () => {
  test('it should mount', () => {
    render(<BodyComponent />);
    
    const bodyComponent = screen.getByTestId('BodyComponent');

    expect(bodyComponent).toBeInTheDocument();
  });
});