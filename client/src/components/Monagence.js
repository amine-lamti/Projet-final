import React, { Component } from 'react';
import Agencycar from './Agencycar'
import Agencyinfo from './Agencyinfo'
class Monagence extends Component {
   
    render() {
        return (
            <div>
                <Agencyinfo/>
                <Agencycar/>
            </div>
        );
    }
}


export default Monagence;
