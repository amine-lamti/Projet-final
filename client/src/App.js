import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Acceuil from './components/Acceuil';
import Vehicule from './components/Vehicule';
import Reservation from './components/Reservation';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Acceuil}/>
      <Route path="/vehicule" component={Vehicule}/>
      <Route path="/reservation" component={Reservation}/>
    </Switch>
    </BrowserRouter>
     
  );
}

export default App;
