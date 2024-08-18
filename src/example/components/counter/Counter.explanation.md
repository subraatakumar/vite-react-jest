# Explanation of Test Cases:

## Render Check:

```jsx
it('renders the Counter component', () => {
  expect(screen.getByText('Counter')).toBeInTheDocument();
  expect(screen.getByText('Decrease')).toBeInTheDocument();
  expect(screen.getByText('Increase')).toBeInTheDocument();
  expect(screen.getByText('0')).toBeInTheDocument();
});
```

This test verifies that the Counter component renders correctly with the initial text values and buttons.

## Increment Functionality:

```jsx
it('increments the count when Increase button is clicked', () => {
  const increaseButton = screen.getByText('Increase');
  fireEvent.click(increaseButton);
  expect(screen.getByText('1')).toBeInTheDocument();
});
```

This test checks that clicking the Increase button increments the count correctly.

## Decrement Functionality:

```jsx
it('decrements the count when Decrease button is clicked', () => {
  const decreaseButton = screen.getByText('Decrease');
  fireEvent.click(decreaseButton);
  expect(screen.getByText('-1')).toBeInTheDocument();
});
```

This test checks that clicking the Decrease button decrements the count correctly.

## Multiple Clicks Handling:

```jsx
it('handles multiple clicks on Increase and Decrease buttons', () => {
  const increaseButton = screen.getByText('Increase');
  const decreaseButton = screen.getByText('Decrease');

  fireEvent.click(increaseButton); // count = 1
  fireEvent.click(increaseButton); // count = 2
  fireEvent.click(decreaseButton); // count = 1
  fireEvent.click(decreaseButton); // count = 0

  expect(screen.getByText('0')).toBeInTheDocument();
});
```

This test verifies that the component correctly updates the count after multiple clicks on both buttons.
