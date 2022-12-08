import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator';

it('check all 19 calculator buttons in the the page', () => {
  render(<Calculator />);
  const buttonElements = screen.getAllByRole('button');
  expect(buttonElements.length).toBe(19);
});

it('it add 7 and 3 By click button', () => {
  render(<Calculator />);

  const getFirtBtn = screen.getByTestId('7');
  const getSecondBtn = screen.getByTestId('3');
  const getOpBtn = screen.getByTestId('+');
  const getEqualBtn = screen.getByTestId('=');
  const calScreen = screen.getByTestId('screen');

  fireEvent.click(getFirtBtn, { target: { innerText: '7' } });
  fireEvent.click(getOpBtn, { target: { innerText: '+' } });
  fireEvent.click(getSecondBtn, { target: { innerText: '3' } });
  fireEvent.click(getEqualBtn, { target: { innerText: '=' } });

  expect(calScreen.textContent).toBe('10');
});

it('check component match with snapshot', () => {
 const calComponent= render(<Calculator />);
  expect(calComponent).toMatchSnapshot();
});
