import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import Main from './main';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
