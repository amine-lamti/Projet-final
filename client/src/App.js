import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Acceuil from './components/Acceuil';
import Vehicule from './components/Vehicule';
import Reservation from './components/Reservation';
import Register from './components/Register';
import Login from './components/Login';
import Alerts from './components/Alerts';
import setAuthToken from './utils/setAuthToken';
import CarItem from './components/CarItem'
//import PrivateRoute from './components/PrivateRoute'

if(localStorage.token){
  setAuthToken(localStorage.token)
}

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Alerts />
    <Switch>
      <Route  exact path="/" component={Acceuil}/>
      <Route  path="/vehicule" component={Vehicule}/>
      <Route  path="/reservation" component={Reservation}/>
      <Route  path="/register" component={Register}/>
      <Route  path="/login" component={Login}/>
      <Route  path="/caritem/:id" component={CarItem}/>

    </Switch>
    </BrowserRouter>
     
  );
}

export default App;
