import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('renders brand logo title and main navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText('AGUA VIVA')).toBeInTheDocument();
    expect(screen.getByText('HOLÍSTICA')).toBeInTheDocument();
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Nosotros')).toBeInTheDocument();
    expect(screen.getByText('Servicios')).toBeInTheDocument();
    expect(screen.getByText('Contacto')).toBeInTheDocument();
  });
});
