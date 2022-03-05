import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Hotels } from './pages';
import Providers from './provider';

ReactDOM.render(
  <Providers>
    <Hotels />
  </Providers>,
  document.getElementById('root')
);
