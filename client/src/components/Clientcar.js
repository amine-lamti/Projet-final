import React, { Component } from "react";
import { connect } from "react-redux";
import { getclientcar } from "../actions/CarActions";
import CarItem from "./CarItem";

class Clientcar extends Component {
  componentDidMount() {
    this.props.getclientcar();
  }
  render() {
    return (
      <div>
        {this.props.car.map((el) => (
          <div>
            <CarItem id={el._id} />
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    car: state.Clientcar.cars,
  };
};

export default connect(mapStateToProps, { getclientcar })(Clientcar);
