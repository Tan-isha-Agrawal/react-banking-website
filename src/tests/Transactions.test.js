import { render, screen } from '@testing-library/react';
import Transactions from '../../src/components/Transactions';

test('renders transactions link', () => {    
  render(<Transactions />);                                       // add the component you want to render
  const linkElement = screen.getByText(/AccountNumber/);          // add something that renders within that component
  expect(linkElement).toBeInTheDocument();
});
