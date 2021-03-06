import React from "react";
import { connect } from "react-redux";
import { loadUser} from "../actions/AuthActions";
import CarouselPage from "./CarouselPage";
import Image from "./Image";
import Footer from './Footer';
import MultiCarousel from "./MultiCarousel";
import Conseil from "./Conseil";





class Acceuil extends React.Component {

  componentWillMount() {
    if (this.props.auth.token) {
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
 <CarouselPage />
 <Image />
 <div className="scroll-image-bg">
 </div>
 <Conseil />
 <div className="scroll-image-bg1">
 </div>
 <MultiCarousel />
 <Footer />
      </div>
		)
	}}


	


const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { loadUser })(Acceuil);
