// Counter.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // for assertions like .toBeInTheDocument()
import { describe, it, expect, beforeEach } from 'vitest';
import Counter from './Counter'; // Adjust the import path as needed

describe('Counter Component', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it('renders the Counter component', () => {
    expect(screen.getByText('Counter')).toBeInTheDocument();
    expect(screen.getByText('Decrease')).toBeInTheDocument();
    expect(screen.getByText('Increase')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('increments the count when Increase button is clicked', () => {
    const increaseButton = screen.getByText('Increase');
    fireEvent.click(increaseButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('decrements the count when Decrease button is clicked', () => {
    const decreaseButton = screen.getByText('Decrease');
    fireEvent.click(decreaseButton);
    expect(screen.getByText('-1')).toBeInTheDocument();
  });

  it('handles multiple clicks on Increase and Decrease buttons', () => {
    const increaseButton = screen.getByText('Increase');
    const decreaseButton = screen.getByText('Decrease');

    fireEvent.click(increaseButton); // count = 1
    fireEvent.click(increaseButton); // count = 2
    fireEvent.click(decreaseButton); // count = 1
    fireEvent.click(decreaseButton); // count = 0

    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
