import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../NavBar';

const MockNavbar = () => (
    <Router>
      <NavBar />
    </Router>
);

it('check if app name render', () => {
  render(<MockNavbar />);
  const headingElement = screen.getByText(/Math magicians/i);
  expect(headingElement).toBeInTheDocument();
});
