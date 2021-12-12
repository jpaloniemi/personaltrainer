import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Customers from './Customers';
import Trainings from './Trainings';
import Calendar from './Calendar';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
              <Route exact path="/" element={< Home />} />
              <Route path="/Customers" element={<Customers />} />
              <Route path="/Trainings" element={<Trainings/>} />
              <Route path="/Calendar" element={<Calendar/>} />
              <Route render={ () => <h2> Page not found </h2>} />
     </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
