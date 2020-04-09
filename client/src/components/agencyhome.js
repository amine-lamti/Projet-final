import React, { Component } from 'react';
import {connect} from "react-redux"
import {getagencycar} from "../actions/CarActions"


class Agencyhome extends Component {
   componentDidMount(){
       this.props.getagencycar()
   }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default  connect(null,{getagencycar})(Agencyhome);
