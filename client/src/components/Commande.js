import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getagencycar } from '../actions/CarActions'
import { loadUser } from "../actions/AuthActions";
import Modal2 from './Modal2'

class Commandes extends Component {
    
   

    componentDidMount() {
      this.props.getagencycar();    
      if (this.props.auth.token) {
          this.props.loadUser();
        }
      }

    
    render() {
        return (
          <div >
   <div class="container table">
      <h1>Mes commandes</h1>
      {this.props.car.map(el=> el.reservation.map(el=> <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nom/Prénom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Modéle</th>
            <th>Date de départ</th>
            <th>Date de retour</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{el.fullname}</td>
            <td>{el.email}</td>
            <td>{el.téléphone}</td>
            <td>{el.modele}</td>
            <td>{el.startDate}</td>
            <td>{el.endDate}</td>
            <td><img style={{width:"100%"}} src={el.image}/></td>
            <td><Modal2 email={el.email}/></td>
          </tr>
        </tbody>
      </table>
      </div>))}
    </div>
  </div>         
        );
    }
}
const mapStateToProps = (state) => {
    return {
        car: state.Agencyreducer.cars,
        auth: state.auth
    };
};
export default connect(mapStateToProps, { getagencycar, loadUser })(Commandes);