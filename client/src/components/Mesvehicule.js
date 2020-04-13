import React, { Component } from 'react';
import Agencycar from './Agencycar'
import { Link } from 'react-router-dom';

class Mesvehicule extends Component {
    render() {
        return (
            <div className="div">
<Agencycar/>   
<button className="add"><Link to="/carform">add new car</Link> </button>  
            </div>
        );
    }
}

export default Mesvehicule;
