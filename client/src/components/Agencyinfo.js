import React, { Component } from 'react';
import { connect } from "react-redux"
import { loadUser } from "../actions/AuthActions";
import { Link } from "react-router-dom"

class Agencyinfo extends Component {
    componentWillMount() {
        if (this.props.agence.token) {
            this.props.loadUser()
        }
    }
    render() {
        return (
<div className="agence">
  <div class="col-sm-4" className="sm">
  <div class="card text-warning bg-dark">
   <div class="card-header bg-warning text-center text-dark">
       <h4>{this.props.agence.user.agence}</h4>
       </div>
      <div class="card-body ">
        <h6 class="card-title">{this.props.agence.user.firstname+" "+this.props.agence.user.lastname}</h6>
        <h6 class="card-title">{this.props.agence.user.email}</h6>
        <h6 class="card-title">{this.props.agence.user.lieu}</h6>
        <h6 class="card-title">{this.props.agence.user.téléphone}</h6>
      </div>
     <div class="card-footer bg-warning border-warning text-center">
      <Link to="#" class="btn btn-outline-dark btn-sm">Modifier votre profil</Link> 
      <Link to={`/carform/${5}`} class="btn btn-outline-dark btn-sm">Ajouter une annonce</Link>
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
