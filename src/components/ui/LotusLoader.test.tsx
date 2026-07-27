import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LotusLoader from './LotusLoader';

describe('LotusLoader Component', () => {
  it('renders brand heading and text while loading', () => {
    render(<LotusLoader />);
    expect(screen.getByText(/Agua Viva/i)).toBeInTheDocument();
    expect(screen.getByText(/Holística/i)).toBeInTheDocument();
  });
});
