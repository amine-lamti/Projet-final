import React, { Component } from "react";
import { connect } from "react-redux";
import { getclientcar } from "../actions/CarActions";
import { loadUser } from "../actions/AuthActions";
import CarItem from "./CarItem";

class Clientcar extends Component {
  componentDidMount() {
    this.props.getclientcar();
    
    if (this.props.auth.isAuthenticated) {
      this.props.loadUser();
    }
  }

  render() {
    return (
      <div className="cars">
        {this.props.car.map((el) => (
          <CarItem id={el._id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    car: state.Clientcar.cars,
  };
};

export default connect(mapStateToProps, { getclientcar, loadUser })(Clientcar);
