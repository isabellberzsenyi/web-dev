import React from 'react';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Labs from './components/Labs';
import Tuiter from './components/Tuiter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route
            path='/' 
            element={<Home />} 
          />
          <Route
            path='/hello' 
            element={<HelloWorld />} 
          />
          <Route 
            path='/labs' 
            element={<Labs />} 
          />
          <Route 
            path='/tuiter' 
            element={<Tuiter />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
