import React, { Component } from 'react';
import Agencycar from './Agencycar'
import Agencyinfo from './Agencyinfo'
import { connect } from 'react-redux'
import { getagencycar } from '../actions/CarActions'
import{CardDeck,Card} from 'react-bootstrap'
import { loadUser } from "../actions/AuthActions";


class Monagence extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}

        };
    }

    componentDidMount() {
        if (this.props.auth.token) {
          this.props.loadUser();
        }
      }

    componentDidMount() {
        this.props.getagencycar();   
    }
    render() {
        return (
            <div><div className="agenceprofil">
              <div> <h3 className="h3">Mes commandes</h3>
                <CardDeck className="div">
                    
  {this.props.car.map(el=> el.reservation.map(el=> <div className="div1"><Card>
    <Card.Img className="reser" variant="top" src={el.image} />
    <Card.Body>
  <Card.Title>{el.fullname}</Card.Title>
  <Card.Title>{el.modele}</Card.Title>
  <Card.Title>{el.email}</Card.Title>
  <Card.Title>{el.téléphone}</Card.Title>

  <Card.Title>{el.startDate}</Card.Title>
  <Card.Title>{el.endDate}</Card.Title>
   
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card></div>) )}
  </CardDeck></div>

                <Agencyinfo />
            </div>

            <Agencycar />
            </div >
        );
    }
}
const mapStateToProps = (state) => {
    return {
        car: state.Agencyreducer.cars,
        auth: state.auth
    };
};
export default connect(mapStateToProps, { getagencycar, loadUser })(Monagence);
