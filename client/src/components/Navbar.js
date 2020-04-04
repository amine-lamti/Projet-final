import React, { Component } from "react";
import { Link } from 'react-router-dom'


class Navbar extends Component {
  render() {
    return (
      <div>
        	<nav class="navbar navbar-expand-lg navbar-light bg-warning">
        <a class="navbar-brand" href="#">LOCATION VOITURES</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto topnav">
                <li class="nav-item active">
                    <Link class="nav-link" to="/">Acceuil<span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/vehicule">A propos</Link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Contact</a>
                </li>
                <li class="nav-item">
                    <Link class="nav-link btn btn-primary text-white" type="button" to="/login" data-toggle="modal" data-target="#myModal">Se connecter</Link>                
                </li>
                <li class="nav-item">
                    <Link class="nav-link btn btn-danger text-white" type="button" to="/register" data-toggle="modal" data-target="#myModal">S'inscrire</Link>
                </li>
            </ul>
        </div>
        </nav>
      </div>

    );
  }
}

export default Navbar;