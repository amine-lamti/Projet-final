import React, { Component } from 'react';
import {connect} from "react-redux"
import {getagencycar} from "../actions/CarActions"
import { Link } from "react-router-dom"



class Agencycar extends Component {
   componentDidMount(){
       this.props.getagencycar()
   }
    render() {
        return (
            <div>
            {this.props.car && this.props.car.map(el =>
                <div>
                  <img src={el.image} />
            <p>{el.modele}</p>
            <button><Link to={`/caritem/${el._id}`}>See more</Link></button>
            </div>
            )}
            
        </div>)
    }
}
const mapStateToProps = state => {
    return {
        car: state.Agencyreducer.cars
    }
}
export default  connect(mapStateToProps,{getagencycar})(Agencycar);
