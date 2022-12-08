import { render, screen } from '@testing-library/react';
import Home from '../Home';

it('check if home page heading text render', () => {
  render(<Home />);
  const headingElement = screen.getByText(/Welcome to our page/i);
  expect(headingElement).toBeInTheDocument();
});

it('check component match with snapshot', () => {
  const homeComponent = render(<Home />);
  expect(homeComponent).toMatchSnapshot();
});
