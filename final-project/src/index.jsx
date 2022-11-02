import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
const element = <h1 className='text-3xl font-bold underline'>hi</h1>;
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
