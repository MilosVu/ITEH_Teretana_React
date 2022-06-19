import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  Pocetna from './components/pages/Pocetna';
import ONama from './components/pages/ONama';
import Ponuda from './components/pages/Ponuda';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component = {Pocetna}/>
          <Route path='/o-nama' exact component = {ONama}/>
          <Route path='/ponuda' exact component = {Ponuda}/>
        </Switch>
        <Footer/>
      </Router>
      </>
  );
}

export default App;
