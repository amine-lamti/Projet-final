import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/AuthActions'
import{clearcars} from '../actions/CarActions'


const Navbar = props => {
 const logmeout=()=>{
    props.logout()
    props.clearcars()
}
    const userConnected = () => (
           <div>
           <nav class="navbar navbar-expand-lg navbar-light bg-warning">
       <a class="navbar-brand" href="#">{props.auth.user && props.auth.user.firstname +' '+ props.auth.user.lastname}</a>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
       </button> 
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
           <ul class="navbar-nav ml-auto topnav">
               <li class="nav-item active">
                   <Link class="nav-link" to="/">Acceuil<span class="sr-only">(current)</span></Link>
               </li>
               <li class="nav-item">
                   <Link class="nav-link" to="/">A propos</Link>
               </li>
               <li class="nav-item">
                   <Link class="nav-link" to="/">Contact</Link>
               </li>
               <li class="nav-item">
                   <Link class="nav-link btn btn-primary text-white" type="button" to="/login" data-toggle="modal" data-target="#myModal" onClick={logmeout}>Déconnexion</Link>                
               </li>
           </ul>
       </div>
       </nav>
     </div>
    )

    const guest = () => (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
        <a class="navbar-brand" href="#">CAR DEALER</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto topnav">
                <li class="nav-item active">
                    <Link class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="#">About</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="#">Contact</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link btn btn-primary text-white" type="button" to="/login" data-toggle="modal" data-target="#myModal">Sign In</Link>                  
                </li>
                <li class="nav-item">
                    <Link class="nav-link btn btn-danger text-white" type="button" to="/register" data-toggle="modal" data-target="#myModal">Register</Link>
                </li>
            </ul>
        </div>
        </nav>
         </div>
    )
   
   return (
       <div>
        {props.auth.isAuthenticated ? userConnected(): guest()} 
      </div>
   )
  }


const mapStateToProps = state => {
   return{
       auth: state.auth
   } 
}

export default connect(mapStateToProps, { logout ,clearcars})(Navbar)