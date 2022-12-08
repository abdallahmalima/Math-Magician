import calculate from '../calculate';

describe('Test caliculate function,check if all operations works', () => {
  it('pass only seven without operaton and second number', () => {
    let calObj = {
      total: null,
      next: null,
      operation: null,
    };
    calObj = calculate(calObj, '7');
    expect(calObj.next).toBe('7');
  });

  it('7 + 3 should be 10', () => {
    let calObj = {
      total: '7',
      next: '3',
      operation: '+',
    };
    calObj = calculate(calObj, '=');
    expect(calObj.total).toBe('10');
  });

  it('7 - 3 should be 4', () => {
    let calObj = {
      total: '7',
      next: '3',
      operation: '-',
    };
    calObj = calculate(calObj, '=');
    expect(calObj.total).toBe('4');
  });

  it('7 x 3 should be 21', () => {
    let calObj = {
      total: '7',
      next: '3',
      operation: 'x',
    };
    calObj = calculate(calObj, '=');
    expect(calObj.total).toBe('21');
  });

  it('10 ÷ 2 should be 5', () => {
    let calObj = {
      total: '10',
      next: '2',
      operation: '÷',
    };
    calObj = calculate(calObj, '=');
    expect(calObj.total).toBe('5');
  });
});
