import React, { Component } from 'react';
import { connect } from 'react-redux'
import { saved, deletecar, getclientcar } from '../actions/CarActions'
import { loadUser } from "../actions/AuthActions";
import { Link } from "react-router-dom"
import ReactCardFlip from 'react-card-flip';



class CarItem extends Component {
  constructor(props){
    super(props)
    this.state = {
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
    if (this.props.car) {
      this.setState({cars: nextprops.car.filter(el => el._id == this.props.id)[0]});
    }
  }
  client = () => (<a href="#" className="myBtn">Réserver</a>)



  agence = () => (<div>
    <a href="#" className="myBtn" onClick={() => this.props.saved(this.state)}><Link to={`/carform/${this.state.cars._id}`}>Editer</Link></a>
    <a href="#" className="myBtn" onClick={() => this.props.deletecar(this.state.cars._id)}>Supprimer</a></div>)


handleClick(e) {
  e.preventDefault();
  if (this.props.auth.isAuthenticated){
  this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));}
}

  render() {
    return (     
      <div class="container">
        {this.state.cars ? 
 <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">  

 <div class="row">         
<div class="col-sm-3">
<div class="card card-block">
  <img class="card-img-top" alt="100%x180" src={this.state.cars.image} style={{height: "180px", width: "100%", display: "block"}}/>
  <div class="card-block">
    <h1 class="card-title">{this.state.cars.modele}</h1>
    <h6 class="card-text"><span className="prix">{this.state.cars.prix}  DT/JOUR</span></h6>
    {!this.props.auth.isAuthenticated ? <button className="myButton"><Link to="/login">Voir</Link></button> : < button className="myButton" onClick={this.handleClick}>Voir</button> }
  </div>
  </div>
</div>
</div> 

        
        <div class="row">
       { this.state.cars ? <div class="col-sm-3">
          <div class="card card-block">
          <img class="card-img-top" alt="100%x180" src={this.state.cars.image} style={{height: "180px", width: "100%", display: "block"}}/>
          <div class="card-block">
          <h1 class="card-title">{this.state.cars.modele}</h1>
          <h6 class="card-title">{this.state.cars.energie}</h6>
          <h6 class="card-title">{this.state.cars.couleur}</h6>
          <h6 class="card-title">{this.state.cars.téléphone}</h6>
          <h6 class="card-title"><span className="prix">{this.state.cars.prix}  DT/Jour</span></h6>
          <a href="#" className="myButton" onClick={this.handleClick}>Retour</a>
          {this.props.auth.user ? (this.state.cars.user === this.props.auth.user._id ? this.agence() : this.client()) : this.client()}   
          </div>
          </div>
          </div> : "...Loading"}    
        </div>
    
        </ReactCardFlip> : "...Loading"}
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