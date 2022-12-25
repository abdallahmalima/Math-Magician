import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const MyContext = createContext();

const quote = {
  name: 'William Paul Thurston',
  description: "is not about numbers, equations,computations or algorithms; it's about understanding.”",
};

root.render(
  <React.StrictMode>
    <Router>
      <MyContext.Provider value={quote}>
      <App />
      </MyContext.Provider>
    </Router>
  </React.StrictMode>,
);

export default MyContext;
