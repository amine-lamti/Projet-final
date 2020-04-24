import React, { Component } from 'react';
import Agencycar from './Agencycar'
import Agencyinfo from './Agencyinfo'
import { connect } from 'react-redux'
import { getagencycar } from '../actions/CarActions'
import { loadUser } from "../actions/AuthActions";


class Monagence extends Component {
    
   

    componentDidMount() {    
      if (this.props.auth.token) {
          this.props.loadUser();
        }
      }

    
    render() {
        return (
          <div className="agency">
         <Agencyinfo />
         <Agencycar />
          </div>         
        );
    }
}
const mapStateToProps = (state) => {
    return { 
        auth: state.auth
    };
};
export default connect(mapStateToProps, { getagencycar, loadUser })(Monagence);