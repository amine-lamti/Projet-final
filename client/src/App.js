import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Acceuil from './components/Acceuil';
import Reservation from './components/Reservation';
import Register from './components/Register';
import Login from './components/Login';
import Alerts from './components/Alerts';
import setAuthToken from './utils/setAuthToken';
import CarItem from './components/CarItem'
import Mesvehicule from './components/Mesvehicule'
import CarForm from './components/CarForm'
import Clientcar from './components/Clientcar'

//import PrivateRoute from './components/PrivateRoute'

if(localStorage.token){
  setAuthToken(localStorage.token)
}

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Alerts />
    <Switch>
      <Route  exact path="/" component={Acceuil}/>
      <Route  path="/reservation" component={Reservation}/>
      <Route  path="/register" component={Register}/>
      <Route  path="/login" component={Login}/>
      <Route  path="/caritem/:id" component={CarItem}/>
      <Route  path="/carform/:id" component={CarForm}/>
      <Route  path="/cars" component={Clientcar}/>
      <Route  path="/vehicule" component={Mesvehicule}/>





    </Switch>
    </BrowserRouter>
    </div>
     
  );
}

export default App;
