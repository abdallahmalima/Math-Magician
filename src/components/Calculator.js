import React from 'react';

class Calculator extends React.Component {
  render() {
    return <div className='calculator-wrapper'>
    <div className='screen'>
        <p>0</p>
    </div>
    <div className='btn-container'>
     <div className='btn-row'>

    <button class='btn'>AC</button>

    <button class='btn'>+/-</button>

    <button class='btn'>%</button>

    <button class='btn btn-last'>&divide;</button>

    </div>
    <div className='btn-row'>

    <button class='btn'>7</button>

    <button class='btn'>8</button>

    <button class='btn'>9</button>

    <button class='btn btn-last'>x</button>

    </div>
    <div className='btn-row'>

    <button class='btn'>4</button>

    <button class='btn'>5</button>

    <button class='btn'>6</button>

    <button class='btn btn-last'>-</button>

    </div>
    <div className='btn-row'>

    <button class='btn'>1</button>

    <button class='btn'>2</button>

    <button class='btn'>3</button>

    <button class='btn btn-last'>+</button>

    </div>
    <div className='btn-row'>

    <button class='btn btn-zero'>0</button>

    <button class='btn'>.</button>

    <button class='btn btn-last'>=</button>

    </div>

    </div>
    </div>;
  }
}

export default Calculator;