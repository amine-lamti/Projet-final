import React, { Component } from 'react';
import { connect } from "react-redux"
import { getclientcar } from "../actions/CarActions"
import { Link } from "react-router-dom"


class Clientcar extends Component {


    componentDidMount() {
        this.props.getclientcar()
    }
    render() {
        return (
            <div>
                {this.props.car.map(el =>
                    <div>
                        <img src={el.image} />
                        <p>{el.modele}</p>
                        <button><Link to={`/caritem/${el._id}`}>See more</Link> </button>
                    </div>
                )}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        car: state.Clientcar
    }
}

export default connect(mapStateToProps, { getclientcar })(Clientcar);
