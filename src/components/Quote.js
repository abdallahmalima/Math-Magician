import { useContext } from 'react';
import MyContext from '..';

const Quote = () => {
  const { name, description } = useContext(MyContext);

  return (
    <div className='quoteContainer'>
           <h4 className='quoteText'>
            “<i className='quotor'>Mathematics</i>{' '}{description} <i className='quotor'>--{name}</i>
            </h4>
    </div>

  );
};

export default Quote;