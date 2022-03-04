import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Explore from './pages';
import Providers from './provider';

ReactDOM.render(
  <Providers>
    <Explore />
  </Providers>,
  document.getElementById('root')
);
