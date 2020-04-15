import React, { Component } from 'react';
import {connect} from "react-redux"
import {getagencycar} from "../actions/CarActions"
import { Link } from "react-router-dom"
import {Card,Button} from "react-bootstrap"



class Agencycar extends Component {
   componentDidMount(){
       this.props.getagencycar()
   }
    render() {
        return (<div className="cars">{this.props.car.map(el =><div className="car"><Card className="card" style={{ width: '18rem' }}>
            <Card.Img className="carimage" variant="top" src={el.image} />
            <Card.Body>
        <Card.Title>{el.modele}</Card.Title>
              <Card.Text>
               {el.prix}
              </Card.Text>
              <Button variant="dark" ><Link to={`/caritem/${el._id}`} className="butn">See more</Link></Button>
            </Card.Body>
          </Card></div>) }</div>  
           
    
        )}}
const mapStateToProps = state => {
    return {
        car: state.Agencyreducer.cars
    }
}
export default  connect(mapStateToProps,{getagencycar})(Agencycar);
