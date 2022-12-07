import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Quote from './components/Quote';

const App = () => (
    <div className="App">
     <NavBar/>
     <Routes>
         <Route exact path="/calculator" element={
          <main className='CalMain'>
          <h3 className='subTitle'>Let's do some math!</h3>
          <div className='CalContainer'>
          <Calculator />
          </div>
          </main>
         }/>
         <Route path="/quotes" element={<Quote/>}/>
         <Route path="/home" element={<Home/>}/>
         <Route path="*" element={<p>Not found</p>}/>
     </Routes>

    </div>
);

export default App;
