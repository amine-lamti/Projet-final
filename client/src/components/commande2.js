import React, { Component } from 'react';
import { getclientcar } from '../actions/CarActions'
import { loadUser } from "../actions/AuthActions";
import { connect } from 'react-redux';

class commande2 extends Component {
    componentDidMount() {
        this.props.getclientcar();  
        if (this.props.auth.token) {
            this.props.loadUser();
          }
        }
    render() {
        return (
            <div >
            <div class="container table">
               <h1>Mes Réservations</h1>
               {this.props.car.map(el=> el.reservation.map(el=> el.user === this.props.auth.user._id && <div>
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
        car: state.Clientcar.cars,
        auth: state.auth
    };
};

export default  connect(mapStateToProps, { getclientcar, loadUser })(commande2);
