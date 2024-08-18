# Explanation

Let’s break down the test cases for the CustomButton component. Each test case is designed to verify different aspects of the component’s functionality and behavior. Here's a detailed explanation of each test:

## 1. Test: Renders with Label

```jsx
test('renders with label', () => {
  render(<CustomButton label="Click Me" />);
  expect(screen.getByText('Click Me')).toBeInTheDocument();
});
```

#### Purpose:

This test ensures that the CustomButton component correctly renders the button with the text provided via the label prop.

#### Explanation:

- render(<CustomButton label="Click Me" />);: This line renders the CustomButton component with the label prop set to "Click Me".
- expect(screen.getByText('Click Me')).toBeInTheDocument();: This assertion checks if an element with the text "Click Me" is present in the document. screen.getByText is used to query the DOM for an element containing the specified text.

## 2. Test: Calls onClick Prop When Clicked

```jsx
test('calls onClick prop when clicked', () => {
  const handleClick = vi.fn();
  render(<CustomButton label="Click Me" onClick={handleClick} />);
  fireEvent.click(screen.getByText('Click Me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

#### Purpose:

This test verifies that the onClick handler passed as a prop to the CustomButton component is called when the button is clicked.

#### Explanation:

- const handleClick = vi.fn();: vi.fn() creates a mock function that can be used to track how many times it was called and with what arguments.
- render(<CustomButton label="Click Me" onClick={handleClick} />);: This renders the CustomButton component with the mock handleClick function passed as the onClick prop.
- fireEvent.click(screen.getByText('Click Me'));: This simulates a click event on the button with the text "Click Me".
- expect(handleClick).toHaveBeenCalledTimes(1);: This assertion checks that the handleClick mock function was called exactly once in response to the click event.

## 3. Test: Applies Custom Styles

```jsx
test('applies custom styles', () => {
  const style = { backgroundColor: 'blue', color: 'white' };
  render(<CustomButton label="Styled Button" style={style} />);
  const button = screen.getByText('Styled Button');
  expect(button).toHaveStyle('background-color: blue; color: white;');
});
```

#### Purpose:

This test ensures that custom styles provided via the style prop are correctly applied to the button.

#### Explanation:

- const style = { backgroundColor: 'blue', color: 'white' };: Defines a JavaScript object with the desired CSS styles.
- render(<CustomButton label="Styled Button" style={style} />);: Renders the CustomButton component with the custom styles applied.
- const button = screen.getByText('Styled Button');: Queries the DOM for the button with the text "Styled Button".
- expect(button).toHaveStyle('background-color: blue; color: white;');: Asserts that the button element has the specified inline styles applied.

## Summary

- Label Rendering: Confirms that the CustomButton component renders the correct text label.
- Click Handling: Ensures that the onClick handler is called when the button is clicked.
- Custom Styling: Verifies that custom styles are applied as expected.

These tests comprehensively check the core functionalities and styling capabilities of the CustomButton component, ensuring it behaves correctly and meets the specified requirements.
