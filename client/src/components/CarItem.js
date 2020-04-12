import { connect } from 'react-redux'
import { saved,deletecar } from '../actions/CarActions'
import React, { Component } from 'react';
import { loadUser } from "../actions/AuthActions";


class CarItem extends Component {
    state = {
        type: "client",
        modele:"",
energie:"",
couleur:"",
téléphone:"",
prix:"",
id:""

      };
      componentWillMount() {
        if (this.props.auth.isAuthenticated) {
          this.props.loadUser();
        }
        {this.props.car.map(el => el.id===this.props.match.params.id ? this.setState({
modele:el.modele,energie:el.energie,couleur:el.couleur,téléphone:el.téléphone,prix:el.prix,id:el._id
        }):"")}
      }
    componentWillReceiveProps = (nextprops) => {
         console.log(this.props.auth.isAuthenticated)
        if (this.props.auth.isAuthenticated) {
          this.setState({ type: nextprops.auth.user.type });
        }
      }
      client=()=>(<button>réserver</button>)
          
              
      
      agence=()=>(<div>
        <button onClick={() =>this.props.saved(this.state)}>Edit</button>
        <button onClick={() => this.props.deletecar(this.state.id)}>DELETE</button></div>)
        
      
    render() {
        return (
            <div className="card fav-item">
                <div className="infos">
                    <img src={this.props.car.image} />
                    <h1>{this.state.modele}</h1>
                    <h1>{this.state.energie}</h1>
                    <h1>{this.state.couleur}</h1>
                    <h1>{this.state.téléphone}</h1>
                    <h1>{this.state.prix}</h1>
                </div>
                 { this.state.type==="client" ? this.client() : this.agence()}
                  
                
            </div>
        )
    }}
    const mapStateToProps =state=>{
        return{
            auth: state.auth,
            car:state.Clientcar

        }
    }
    
    
    
    export default connect(mapStateToProps, {saved,deletecar,loadUser})(CarItem)
    
