import { render, screen } from '@testing-library/react';
import Quote from '../Quote';

it('check if quote render', () => {
  render(<Quote />);
  const headingElement = screen.getByRole('heading');
  expect(headingElement).toBeInTheDocument();
});
