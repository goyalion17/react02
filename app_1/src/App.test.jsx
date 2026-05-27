import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App.jsx';

describe('App', () => {
  it('renders the edit instruction', () => {
    render(<App />);
    expect(screen.getByText(/Edit/)).toBeInTheDocument();
    expect(screen.getByText('src/App.jsx')).toBeInTheDocument();
  });

  it('renders the Learn React link pointing to react.dev', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: /learn react/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://react.dev');
  });

  it('renders the logo image with alt text', () => {
    render(<App />);
    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });
});
