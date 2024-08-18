// https://vitest.dev/guide/mocking.html#functions
// CustomButton.test.jsx
import { describe, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomButton from './CustomButton';

describe('CustomButton Component', () => {
  test('renders with label', () => {
    render(<CustomButton label="Click Me" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('calls onClick prop when clicked', () => {
    const handleClick = vi.fn();
    render(<CustomButton label="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies custom styles', () => {
    const style = { backgroundColor: 'blue', color: 'white' };
    render(<CustomButton label="Styled Button" style={style} />);
    const button = screen.getByText('Styled Button');
    expect(button).toHaveStyle('background-color: blue; color: white;');
  });
});
