import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Treneri from './components/Treneri';
import Pocetna from './components/Pocetna';

function App() {
  return (
    <div className='main-container'>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Pocetna />} />
            <Route path='/pocetna' element={<Pocetna />} />
            <Route path='/treneri' element={<Treneri />} />
          </Routes>
      </Router>
    </div >
  );
}

export default App;
