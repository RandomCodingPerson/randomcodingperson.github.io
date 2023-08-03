import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route, Redirect, BrowserRouter } from "react-router-dom";
import Home from './pages/index.js';
import NotFound from './pages/404.js';

export default function App() {
  return (
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
<HashRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
</Routes>
</HashRouter>
*/

/*

<BrowserRouter basename="https://randomcodingperson.github.io/">
      <Routes>
        <Route path="/*" element={<Home/>}></Route>
        {/*<Route path="/*" element={<NotFound/>}></Route>
        } 
        </Routes>
        </BrowserRouter>

*/