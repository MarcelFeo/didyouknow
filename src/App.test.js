import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ok text', () => {
  render(<App />);
  const textElement = screen.getByText(/ok/i);
  expect(textElement).toBeInTheDocument();
});
