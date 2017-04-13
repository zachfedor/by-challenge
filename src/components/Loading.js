import React from 'react';
import spinner from './spinner.svg';
import './Loading.css';


const Loading = () => (
  <img src={spinner} className="Loading" alt="Loading..." />
);

export default Loading;
