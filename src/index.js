import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

const divRoot = document.querySelector('#root');

// Dos argumentos jsx, dom
ReactDOM.render(<CounterApp />, divRoot)