import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, loadUser } from '../actions/AuthActions'
import{clearcars} from '../actions/CarActions'


class Navbar extends Component {

    
   componentDidMount() {
        if (this.props.auth.isAuthenticated) {
          this.props.loadUser();
        }
      }


  logmeout=()=>{
    this.props.logout()
    this.props.clearcars()
}



  userConnected = () => (
           <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
       <a class="navbar-brand" href="#">
       <i class="fas fa-user"> {this.props.auth.user && this.props.auth.user.firstname +' '+ this.props.auth.user.lastname}</i>      
           </a>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
       </button> 
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
           {this.props.auth.user && this.props.auth.user.type === "client" ? <ul class="navbar-nav ml-auto topnav">
               <li class="nav-item active">
                   <Link class="nav-link" to="/">Acceuil<span class="sr-only">(current)</span></Link>
               </li>
               <li class="nav-item">
                   <Link class="nav-link" to="/cars">Véhicules</Link>
               </li>
               <li class="nav-item">
                   <Link class="nav-link" to="/">Agences</Link>
               </li>
               <li class="nav-item">
                   <Link class="nav-link" to="/reservation">Réservation</Link>
               </li>  
               <li class="nav-item">
                   <Link class="nav-link btn btn-primary text-white" type="button" to="/" data-toggle="modal" data-target="#myModal" onClick={this.logmeout}><i class="fas fa-sign-out-alt"> Déconnexion</i></Link>                
               </li>
           </ul> : <ul class="navbar-nav ml-auto topnav">
               <li class="nav-item active">
                   <Link class="nav-link" to="/">Acceuil<span class="sr-only">(current)</span></Link>
               </li>
               <li class="nav-item">
                   <Link class="nav-link" to="/cars">véhicules</Link>
               </li>
               <li class="nav-item">
                   <Link class="nav-link" to="/monagence">Mon agence</Link>
               </li>
               <li class="nav-item">
                   <Link class="nav-link" to="/">Mes Commandes</Link>
               </li>
               <li class="nav-item">
                   <Link class="nav-link btn btn-primary text-white" type="button" to="/" data-toggle="modal" data-target="#myModal" onClick={this.logmeout}><i class="fas fa-sign-out-alt"> Déconnexion</i></Link>                
               </li>
           </ul>}
          </div> 
       </nav>
     </div>
    )

     guest = () => (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-warning fixed-top">
         <h1>Go My Car</h1>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto topnav">
                <li class="nav-item active">
                    <Link class="nav-link" to="/">Acceuil<span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                   <Link class="nav-link" to="/vehicule">Conseils</Link>
               </li>
               <li class="nav-item">
                   <Link class="nav-link" to="/reservation">Contact</Link>
               </li>            
                <li class="nav-item">
                    <Link class="nav-link btn btn-primary text-white" type="button" to="/login" data-toggle="modal" data-target="#myModal"><i class="fas fa-sign-in-alt"> Se connecter</i></Link>                  
                </li>
                <li class="nav-item">
                    <Link class="nav-link btn btn-danger text-white" type="button" to="/register" data-toggle="modal" data-target="#myModal"><i class="fas fa-user-plus"> S'inscrire</i></Link>
                </li>
            </ul>
        </div>
        </nav>
         </div>
    )
   
    render() {
   return (
       <div>
        {this.props.auth.isAuthenticated ? this.userConnected(): this.guest()} 
      </div>
   );
  }
}

const mapStateToProps = state => {
   return{
       auth: state.auth
   } 
}

export default connect(mapStateToProps, { logout ,clearcars, loadUser })(Navbar)