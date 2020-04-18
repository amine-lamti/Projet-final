import React, { Component } from 'react';
import { connect } from "react-redux"
import { loadUser } from "../actions/AuthActions";
import { Link } from "react-router-dom"

class Agencyinfo extends Component {
    componentWillMount() {
        if (this.props.agence.isAuthenticated) {
            this.props.loadUser()
        }
    }
    render() {
        return (
<div className="agence">
  <div class="col-sm-4">
  <div class="card text-dark bg-light">
   <div class="card-header bg-primary text-center text-warning">
       <h4>{this.props.agence.user.firstname+" "+this.props.agence.user.lastname}</h4>
       </div>
      <div class="card-body ">
        <h6 class="card-title">{this.props.agence.user.email}</h6>
        <h6 class="card-title">{this.props.agence.user.agence}</h6>
        <h6 class="card-title">{this.props.agence.user.lieu}</h6>
      </div>
     <div class="card-footer bg-primary border-warning text-center">
      <Link to="#" class="btn btn-outline-light btn-sm">modifier votre profil</Link> 
      <Link to={`/carform/${5}`} class="btn btn-outline-light btn-sm">ajouter une annonce</Link>
      </div>
    </div>
 </div>
</div>
        );
    }
}
const mapStateToProps = state => {
    return {
        agence: state.auth
    }
}

export default connect(mapStateToProps, { loadUser })(Agencyinfo);
