import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// // express 설치
// const express = require('express')
// const app = express()
// const port = 5000

// // 몽고DB 연결
// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/')
//   .then(() => console.log('MogoDB 연결완료'))
//   .catch(() => console.log('failed'))

// app.listen(port, () => {console.log(`App listening on port ${port}`)})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
