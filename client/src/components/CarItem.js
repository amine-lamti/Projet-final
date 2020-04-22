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
  /**componentWillReceiveProps(nextprops){
    console.log(this.props.auth.isAuthenticated)
    if (this.props.car) {
      this.setState({cars: nextprops.car.filter(el => el._id === this.props.id)[0]});
    }
  }*/
  



  agence = () => (<div>
    <button onClick={() => this.props.saved(this.props.info)}><Link to={`/carform/${this.props.info._id}`}>Editer</Link></button>
    <button onClick={() => this.props.deletecar(this.props.info._id)}>Supprimer</button></div>)


handleClick(e) {
  e.preventDefault();
  if (this.props.auth.isAuthenticated){
  this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));}
}

  render() {
    return (     
      
      <div className="voitue">
        

 <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">  

 <div className="row">         
<div className="col">
<div className="card card-block car-item-card">
  <img className="card-img-top" alt="100%x180" src={this.props.info.image} style={{height: "180px", width: "300px", display: "block"}}/>
  <div className="card-block">
    <h1 className="card-title flip1" >{this.props.info.modele}</h1>
    <h6 className="card-text"><span className="prix">{this.props.info.prix}  DT/Jour</span></h6>
  
    {!this.props.auth.isAuthenticated ? <Link to="/login"><button className="voir btn btn-outline-dark border-warning bg-warning btn-sm"><i class="fas fa-angle-double-right"> Voir</i></button></Link> : <button className="voir btn btn-outline-dark border-warning bg-warning btn-sm" onClick={this.handleClick}><i class="fas fa-angle-double-right"> Voir</i></button> }

  </div>
  </div>
</div>
</div> 

        
        <div className="row">        <div className="col">
          <div className="cards">
          <img className="ca" alt="100%x180" src={this.props.info.image} style={{height: "180px", width: "300px", display: "block"}}/>
          <div className="card-block">
          <h1 className="card-title flip1">{this.props.info.modele}</h1>
          <h6 className="card-title flip">{this.props.info.energie}</h6>
          <h6 className="card-title flip">{this.props.info.couleur}</h6>
          <h6 className="card-title flip">{this.props.info.téléphone}</h6>
          <h6 className="card-title flip1"><span className="prix">{this.props.info.prix}  DT/Jour</span></h6>
         <div className="">
          <button onClick={this.handleClick}>Retour</button>
          {this.props.auth.user ? (this.props.info.user === this.props.auth.user._id ? this.agence() : <ResrverModal info={this.props.info}/>) : <ResrverModal  info={this.props.info}/>}   
          </div>
          </div>
          </div>
          </div>    
   
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