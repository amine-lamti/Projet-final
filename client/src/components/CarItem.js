import React, { Component } from 'react';
import { connect } from 'react-redux'
import { saved, deletecar, getclientcar } from '../actions/CarActions'
import { loadUser } from "../actions/AuthActions";
import { Link } from "react-router-dom"
import ReactCardFlip from 'react-card-flip';
import ResrverModal from './Modal'



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
      this.setState({cars: nextprops.car.filter(el => el._id === this.props.id)[0]});
    }
  }
  



  agence = () => (<div>
    <button onClick={() => this.props.saved(this.state)}><Link to={`/carform/${this.state.cars._id}`}>Editer</Link></button>
    <button onClick={() => this.props.deletecar(this.state.cars._id)}>Supprimer</button></div>)


handleClick(e) {
  e.preventDefault();
  if (this.props.auth.isAuthenticated){
  this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));}
}

  render() {
    return (     
      <div>
        {this.state.cars ? 
 <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">  

 <div className="row">         
<div className="col">
<div className="card card-block car-item-card">
  <img className="card-img-top" alt="100%x180" src={this.state.cars.image} style={{height: "180px", width: "300px", display: "block"}}/>
  <div className="card-block">
    <h1 className="card-title">{this.state.cars.modele}</h1>
    <h6 className="card-text"><span className="prix">{this.state.cars.prix}  DT/Jour</span></h6>
    {!this.props.auth.isAuthenticated ? <button><Link to="/login">Voir</Link></button> : <button onClick={this.handleClick}>Voir</button> }
  </div>
  </div>
</div>
</div> 

        
        <div className="row">
       { this.state.cars ? <div className="col">
          <div className="cards">
          <img className="ca" alt="100%x180" src={this.state.cars.image} style={{height: "180px", width: "100%", display: "block"}}/>
          <div className="card-block">
          <h1 className="card-title">{this.state.cars.modele}</h1>
          <h6 className="card-title">{this.state.cars.energie}</h6>
          <h6 className="card-title">{this.state.cars.couleur}</h6>
          <h6 className="card-title">{this.state.cars.téléphone}</h6>
          <h6 className="card-title"><span className="prix">{this.state.cars.prix}  DT/Jour</span></h6>
          <button onClick={this.handleClick}>Retour</button>
          {this.props.auth.user ? (this.state.cars.user === this.props.auth.user._id ? this.agence() : <ResrverModal id={this.state.cars._id}/>) : <ResrverModal id={this.state.cars._id}/>}   
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