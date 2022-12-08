import operate from '../operate';

describe('Test operate function,which take first number,second number and operation and return answer as string', () => {
  it('7 + 3 should be 10', () => {
    expect(operate(7, 3, '+')).toBe('10');
  });

  it('7 - 3 should be 4', () => {
    expect(operate(7, 3, '-')).toBe('4');
  });

  it('7 x 3 should be 21', () => {
    expect(operate(7, 3, 'x')).toBe('21');
  });

  it('10 ÷ 5 should be 2', () => {
    expect(operate(10, 5, '÷')).toBe('2');
  });

  it('10 ÷ 0 should not devide by zero', () => {
    expect(operate(10, 0, '÷')).toBe('Can\'t divide by 0.');
  });
});
