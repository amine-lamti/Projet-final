import React, { Component } from 'react';
import { connect } from "react-redux"
import { getclientcar } from "../actions/CarActions"
import { Link } from "react-router-dom"
import {Card,Button} from "react-bootstrap"



class Clientcar extends Component {


    componentDidMount() {
        this.props.getclientcar()
    }
    render() {
        return (
            <div className="cars">{this.props.car.map(el =><div className="car"><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={el.image} />
            <Card.Body>
        <Card.Title>{el.modele}</Card.Title>
              <Card.Text>
               {el.prix}
              </Card.Text>
              <Button variant="dark" className="butn"><Link className="butn" to={`/caritem/${el._id}`}>See more</Link></Button>
            </Card.Body>
          </Card></div>) }</div>  
        );
    }
}
const mapStateToProps = state => {
    return {
        car: state.Clientcar.cars
    }
}

export default connect(mapStateToProps, { getclientcar })(Clientcar);
