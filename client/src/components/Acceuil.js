import React from "react";
import { connect } from "react-redux";
import { loadUser } from "../actions/AuthActions";
import Agencyhome from "./agencyhome";
import Clienthome from "./clienthome";
import Footer from "./Footer"




class Acceuil extends React.Component {
  state = {
    type: " ",
  };
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.loadUser();
    }
  }

  //componentWillReceiveProps = (nextprops) => {
    //  console.log(this.props.auth.isAuthenticated)
    //if (this.props.auth.isAuthenticated) {
    //  this.setState({ type: nextprops.auth.user.type });
   // }
 // };

  render() {
    return (
      <div>
      <div>
        {this.props.auth.user && this.props.auth.user.type === "client" ? (
          <Clienthome />
        ) : (
          <Agencyhome />
        )}
      </div>
       <Footer /> 
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { loadUser })(Acceuil);
