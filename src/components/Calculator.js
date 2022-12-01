import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculateObject, setCalculateObject] = useState({
    total: null,
    next: null,
    operation: null,

  });

  const handleClick = (e) => {
    const buttonName = e.target.innerText;
    const obj = calculate(calculateObject, buttonName);
    setCalculateObject(obj);
  };

  return <div className='calculator-wrapper'>
    <div className='screen'>
        <p>{calculateObject.total}
        {calculateObject.operation}
        {calculateObject.next}</p>
    </div>
    <div className='btn-container'>
     <div className='btn-row'>

    <button className='btn' onClick={ handleClick}>AC</button>

    <button className='btn' onClick={ handleClick}>+/-</button>

    <button className='btn' onClick={ handleClick}>%</button>

    <button className='btn btn-last' onClick={ handleClick}>&divide;</button>

    </div>
    <div className='btn-row'>

    <button className='btn' onClick={ handleClick}>7</button>

    <button className='btn' onClick={ handleClick}>8</button>

    <button className='btn' onClick={ handleClick}>9</button>

    <button className='btn btn-last' onClick={ handleClick}>x</button>

    </div>
    <div className='btn-row'>

    <button className='btn' onClick={ handleClick}>4</button>

    <button className='btn' onClick={ handleClick}>5</button>

    <button className='btn'onClick={ handleClick}>6</button>

    <button className='btn btn-last' onClick={ handleClick}>-</button>

    </div>
    <div className='btn-row'>

    <button className='btn' onClick={ handleClick}>1</button>

    <button className='btn' onClick={ handleClick}>2</button>

    <button className='btn' onClick={ handleClick}>3</button>

    <button className='btn btn-last' onClick={ handleClick}>+</button>

    </div>
    <div className='btn-row'>

    <button className='btn btn-zero' onClick={ handleClick}>0</button>

    <button className='btn' onClick={ handleClick}>.</button>

    <button className='btn btn-last' onClick={ handleClick}>=</button>

    </div>

    </div>
    </div>;
};

export default Calculator;