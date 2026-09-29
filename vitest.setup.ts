import '@testing-library/jest-dom';
import React from 'react';
import { vi } from 'vitest';

vi.mock('next/image', () => ({
  default: ({ fill, priority, ...props }: any) => {
    return React.createElement('img', { ...props, alt: props.alt || '' });
  },
}));

vi.mock('next/link', () => ({
  default: ({ children, href, ...rest }: any) => {
    return React.createElement('a', { href, ...rest }, children);
  },
}));
