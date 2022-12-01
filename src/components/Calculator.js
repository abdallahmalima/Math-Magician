import React from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calculateObject: {
        total: null,
        next: null,
        operation: null,

      },
    };
  }

  handleClick=(e) => {
    const buttonName = e.target.innerText;
    const obj = calculate(this.state.calculateObject, buttonName);
    console.log(obj);
    this.setState({ calculateObject: obj });
  }

  render() {
    return <div className='calculator-wrapper'>
    <div className='screen'>
        <p>{this.state.calculateObject.total}
        {this.state.calculateObject.operation}
        {this.state.calculateObject.next}</p>
    </div>
    <div className='btn-container'>
     <div className='btn-row'>

    <button className='btn' onClick={this.handleClick}>AC</button>

    <button className='btn' onClick={this.handleClick}>+/-</button>

    <button className='btn' onClick={this.handleClick}>%</button>

    <button className='btn btn-last' onClick={this.handleClick}>&divide;</button>

    </div>
    <div className='btn-row'>

    <button className='btn' onClick={this.handleClick}>7</button>

    <button className='btn' onClick={this.handleClick}>8</button>

    <button className='btn' onClick={this.handleClick}>9</button>

    <button className='btn btn-last' onClick={this.handleClick}>x</button>

    </div>
    <div className='btn-row'>

    <button className='btn' onClick={this.handleClick}>4</button>

    <button className='btn' onClick={this.handleClick}>5</button>

    <button className='btn'onClick={this.handleClick}>6</button>

    <button className='btn btn-last' onClick={this.handleClick}>-</button>

    </div>
    <div className='btn-row'>

    <button className='btn' onClick={this.handleClick}>1</button>

    <button className='btn' onClick={this.handleClick}>2</button>

    <button className='btn' onClick={this.handleClick}>3</button>

    <button className='btn btn-last' onClick={this.handleClick}>+</button>

    </div>
    <div className='btn-row'>

    <button className='btn btn-zero' onClick={this.handleClick}>0</button>

    <button className='btn' onClick={this.handleClick}>.</button>

    <button className='btn btn-last' onClick={this.handleClick}>=</button>

    </div>

    </div>
    </div>;
  }
}

export default Calculator;