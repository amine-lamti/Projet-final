import React, { Component } from 'react';
import Agencycar from './Agencycar'
import Agencyinfo from './Agencyinfo'
class Monagence extends Component {
   
    render() {
        return (
            <div className="profil">
                <Agencyinfo/>
                <Agencycar className="agencycar"/>
            </div>
        );
    }
}


export default Monagence;
