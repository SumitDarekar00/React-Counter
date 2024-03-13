import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import App from './App';
import store from './Store';
import Counter from './counter';
import Products from "./products";
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <Provider store={store}>
    <Router> 
      <Routes> 
        <Route path="/" element={<App />} /> 
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/products" element={<Products />} /> 
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);
