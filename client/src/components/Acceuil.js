import React from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../actions/AuthActions'

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
   {this.state.type && this.state.type === "client" ? <h1>WELCOME CLIENT</h1> : <h1>WELCOME AGENCY</h1>}
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