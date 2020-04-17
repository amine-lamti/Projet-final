import { connect } from 'react-redux'
import { saved, deletecar, getclientcar } from '../actions/CarActions'
import React, { Component } from 'react';
import { loadUser } from "../actions/AuthActions";
import { Link } from "react-router-dom"
import ReactCardFlip from 'react-card-flip';
import {Card,Button} from "react-bootstrap"


class CarItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      type: "client",
      cars:{},
      isFlipped: false
  
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount(){
    //this.setState({cars:this.props.car.filter(el => el._id== this.props.match.params.id)[0]})
    this.props.getclientcar()

    if (this.props.auth.isAuthenticated) {
      this.props.loadUser()
  }
}
  componentWillReceiveProps(nextprops){
    console.log(this.props.auth.isAuthenticated)
    if (this.props.auth.isAuthenticated) {
      this.setState({ type: nextprops.auth.user.type, cars: nextprops.car.filter(el => el._id == this.props.id)[0]});
    }
  }
  client = () => (<button>réserver</button>)



  agence = () => (<div>
    <button onClick={() => this.props.saved(this.state)}><Link to={`/carform/${this.state.cars._id}`}>EDIT </Link> </button>
    <button onClick={() => this.props.deletecar(this.state.cars._id)}>DELETE</button></div>)


handleClick(e) {
  e.preventDefault();
  this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
}

  render() {
    return (
      <div className="card fav-item">
 <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.state.cars.image} />
            <Card.Body>
        <Card.Title>{this.state.cars.modele}</Card.Title>
              <Card.Text>
               {this.state.cars.prix}
              </Card.Text>
              <Button variant="dark" className="butn" onClick={this.handleClick}>see more</Button>
            </Card.Body>
          </Card>
      </div>
 
        <div className="infos">
       { this.state.cars ? <div><img src={this.state.cars.image} />
          <h1>{this.state.cars.modele}</h1>
          <h1>{this.state.cars.energie}</h1>
          <h1>{this.state.cars.couleur}</h1>
          <h1>{this.state.cars.téléphone}</h1>
          <h1>{this.state.cars.prix}</h1>
          {this.state.cars.user === this.props.auth.user._id ? this.agence() : this.client()} 
          <button onClick={this.handleClick}>retour</button>
          </div> : "...Loading"}    
        </div>
      </ReactCardFlip>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth,
    car: state.Clientcar.cars

  }
}



export default connect(mapStateToProps, { saved, deletecar, loadUser, getclientcar })(CarItem)