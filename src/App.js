import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Treneri from './components/Treneri';
import Pocetna from './components/Pocetna';


let treneri = [
  {
      "ime": "Milos",
      "prezime": "Vujic",
      "specijalnost": "Atletika",
      "iskustvo": "4"
  },
  {
      "ime": "Petar",
      "prezime": "Petrovic",
      "specijalnost": "Fitnes",
      "iskustvo": "1"
  },
  {
      "ime": "Nina",
      "prezime": "Markovic",
      "specijalnost": "Body building",
      "iskustvo": "2"
  },
  {
      "ime": "Milica",
      "prezime": "Micic",
      "specijalnost": "Atletika",
      "iskustvo": "2"
  }
];

let ponude = [
  {
    "naziv": "zlatni",
    "cena": "300",
    "pogodnosti": [
      "Program ishrane", "Kompletan plan treninga", "30 termina mesecno", "10 termina saune", "Besplatan parking"
    ],
    "slika": 'https://images.unsplash.com/photo-1535743686920-55e4145369b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
  },
  {
    "naziv": "srebrni",
    "cena": "200",
    "pogodnosti": [
      "Program ishrane", "20 termina mesecno", "5 termina saune", "Besplatan parking"
    ],
    "slika": 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    "naziv": "bronzani",
    "cena": "100",
    "pogodnosti": [
      "10 termina mesecno", "Besplatan parking"
    ],
    "slika": 'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1113&q=80'
  }
];

let data = {
  "treneri" : treneri,
  "ponude": ponude
}

function App() {
  return (
    <div className='main-container'>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Pocetna data={data}/>} />
            <Route path='/pocetna' element={<Pocetna data={data}/>} />
            {/* <Route path='/treneri' element={<Treneri treneri={data.treneri}/>} /> */}
          </Routes>
      </Router>
    </div >
  );
}

export default App;
