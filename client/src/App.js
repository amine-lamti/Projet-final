import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Acceuil from './components/Acceuil';
import Vehicule from './components/Vehicule';
import Reservation from './components/Reservation';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route  exact path="/" component={Acceuil}/>
      <Route  path="/vehicule" component={Vehicule}/>
      <Route  path="/reservation" component={Reservation}/>
      <Route  path="/register" component={Register}/>
      <Route  path="/login" component={Login}/>
    </Switch>
    </BrowserRouter>
     
  );
}

export default App;
