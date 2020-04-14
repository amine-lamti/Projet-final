import { connect } from 'react-redux'
import { saved, deletecar, getclientcar } from '../actions/CarActions'
import React, { Component } from 'react';
import { loadUser } from "../actions/AuthActions";
import { Link } from "react-router-dom"



class CarItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      type: "client",
      cars:{},
  
    };
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
      this.setState({ type: nextprops.auth.user.type, cars: nextprops.car.filter(el => el._id== this.props.match.params.id)[0]});
    }
  }
  client = () => (<button>réserver</button>)



  agence = () => (<div>
    <button onClick={() => this.props.saved(this.state)}><Link to={`/carform/${this.state.cars._id}`}>EDIT </Link> </button>
    <button onClick={() => this.props.deletecar(this.state.cars._id)}>DELETE</button></div>)


  render() {
    return (
      <div className="card fav-item">

        <div className="infos">
          { 
          this.state.cars ? <div><img src={this.state.cars.image} />
          <h1>{this.state.cars.modele}</h1>
          <h1>{this.state.cars.energie}</h1>
          <h1>{this.state.cars.couleur}</h1>
          <h1>{this.state.cars.téléphone}</h1>
          <h1>{this.state.cars.prix}</h1>
          {this.state.type === "client" ? this.client() : this.agence()} 
          </div> : "...Loading"}
        </div>
       


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

