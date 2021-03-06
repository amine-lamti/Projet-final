import React, { Component } from "react";
import { connect } from "react-redux";
import { getagencycar } from "../actions/CarActions";
import { loadUser } from "../actions/AuthActions";
import CarItem from "./CarItem";

class Agencycar extends Component {
  componentDidMount() {
    this.props.getagencycar();

    if (this.props.auth.token) {
      this.props.loadUser();
    }
  }
  render() {
    return (
      <div className="cars">
        {this.props.car.map((el,i) => (
          <CarItem info={el} key={i} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    car: state.Agencyreducer.cars,
  };
};

export default connect(mapStateToProps, { getagencycar, loadUser })(Agencycar);
