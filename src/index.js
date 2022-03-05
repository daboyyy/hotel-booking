import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ExploreHotel } from './pages';
import Providers from './provider';

ReactDOM.render(
  <Providers>
    <ExploreHotel />
  </Providers>,
  document.getElementById('root')
);
