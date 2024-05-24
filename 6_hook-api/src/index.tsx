import React from 'react';
import ReactDOM from 'react-dom/client';

//hooks 예제
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
//import FCounter from './FCounter';


//reducer 예제
//import App1 from './reducer/App1'; 
//import App2 from './reducer/App2'; 
//import App3 from './reducer/App3'; 
//import App4 from './reducer/App4';
//import App5 from './reducer/App5';
import prac1 from './reducer/prac1';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<FCounter title="이것은 COUNTER입니다"  num={0}></FCounter>
  <prac1></prac1>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
