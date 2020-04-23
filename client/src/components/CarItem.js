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

    if (this.props.auth.token) {
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
    <Link to={`/carform/${this.props.info._id}`}><button className="btn btn-outline-dark btn-sm" onClick={() => this.props.saved(this.props.info)}>Editer</button></Link>
    <button className="btn btn-outline-warning btn-sm" onClick={() => this.props.deletecar(this.props.info._id)}>Supprimer</button></div>)


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
  <img className="card-img-top" alt="100%x180" src={this.props.info.image} style={{height: "150px", width: "250px", display: "block"}}/>
  <div className="card-block">
    <h4 className="card-title flip1" >{this.props.info.modele}</h4>
    <h6 className="card-text"><span className="prix">{this.props.info.prix}  DT/Jour</span></h6>
  
    {!this.props.auth.isAuthenticated ? <Link to="/login"><a type="button" className="voir text-warning"><i class="fas fa-angle-double-right"> Voir</i></a></Link> : <a type="button" className="voir text-warning" onClick={this.handleClick}><i class="fas fa-angle-double-right"> Voir</i></a> }

  </div>
  </div>
</div>
</div> 

        
        <div className="row res">       
        <div className="col">
          <div className="card card-block car-item-card">
          <img className="card-img-top" alt="100%x180" src={this.props.info.image} style={{height: "200px", width: "100%", display: "block"}}/>
          <div className="card-block">
          <h1 className="card-title flip1">{this.props.info.modele}</h1>
          <h6 className="card-text"><img src="https://img.icons8.com/ios-glyphs/72/gas-station.png" style={{width:"25px"}}/> {this.props.info.energie}</h6>
          <h6 className="card-text"><img src="https://img.icons8.com/material/72/color-dropper--v1.png" style={{width:"25px"}}/> {this.props.info.couleur}</h6>
          <h6 className="card-text"><img src="https://img.icons8.com/material/72/google-mobile.png" style={{width:"25px"}}/> {this.props.info.téléphone}</h6>
          <h6 className="card-text"><img src="https://img.icons8.com/material/72/euro-pound-exchange--v1.png" style={{width:"25px"}}/> {this.props.info.prix}  DT/Jour</h6>
         <div className="selem">
          <a type="button" className="text-dark retour" onClick={this.handleClick}><i class="fas fa-angle-double-left"> Retour</i></a>
          <div>{this.props.auth.user ? (this.props.info.user === this.props.auth.user._id ? this.agence() : <ResrverModal info={this.props.info}/>) : <ResrverModal  info={this.props.info}/>}</div>  
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