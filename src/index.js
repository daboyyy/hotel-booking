import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ReviewHotel } from './pages';
import Providers from './provider';

ReactDOM.render(
  <Providers>
    <ReviewHotel />
  </Providers>,
  document.getElementById('root')
);
