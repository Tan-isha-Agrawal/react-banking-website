import { render, screen } from '@testing-library/react';
import CheckBalance from '../../src/components/CheckBalance';

test('renders learn react link', () => {
  render(<CheckBalance />);                                     //add the component you want to render
  const linkElement = screen.getByText(/Current Balance/);        //add something that the component renders
  expect(linkElement).toBeInTheDocument();
});
