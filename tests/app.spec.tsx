import { it, describe, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../src/App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders headline', () => {
    expect(screen.getByText('Chromatic Tuner')).toBeVisible();
  });

  it('shows a recording button', () => {
    expect(screen.getByTestId('record-button')).toBeVisible();
  });
});
