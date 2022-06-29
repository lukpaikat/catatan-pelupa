import { render, screen } from '@testing-library/react';
import App from '..src/App';

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/catatan-pelupa/i);
  expect(linkElement).toBeInTheDocument();
});
