import React, { Component } from 'react';
import { connect } from "react-redux"
import {getclientcar} from "../actions/CarActions"
class Clienthome extends Component {
   
   
    componentDidMount(){
        this.props.getclientcar()
      

    }
    render() {
        return (
            <div>
                {this.props.car.map(el =>
                    <div>
                      <img src={el.image} />
                <p>{el.modele}</p>
                <button>See more</button>
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

export default connect(mapStateToProps,{getclientcar})(Clienthome);
