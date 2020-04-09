import React, { Component } from 'react';
import { connect } from "react-redux"
import {getclientcar} from "../actions/CarActions"
class Clienthome extends Component {
   state={
       cars:[]
   }
   
    componentDidMount(){
        this.props.getclientcar()
        this.setState({
            cars:this.props.car.sort((a,b)=>{return b.date-a.date})
        })

    }
    render() {
        return (
            <div>
                {this.state.cars.map(el =>
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
