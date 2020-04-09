import React from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../actions/AuthActions'
import Agencyhome from "./agencyhome"

class Acceuil extends React.Component {

    state = {
        type: "client"
    }
    componentDidMount() {
        this.props.loadUser()
    }

    componentWillReceiveProps =(nextprops) => {
       this.setState
           ({type: nextprops.auth.user.type})
 
}
    render(){
    return (
        <div>
   {this.state.type && this.state.type === "client" ? <h1>WELCOME CLIENT</h1> : <Agencyhome/>}
        </div>
    )
  }
}

 const mapStateToProps = state => {
    return{
        auth: state.auth
    } 
}

export default connect(mapStateToProps, { loadUser })(Acceuil)