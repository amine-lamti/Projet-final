import React, { Component } from "react";
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { setAlert, removeAlert } from '../actions/AlertAcrtion';



class Register extends Component {
    registerNow = () => {
        if(this.state.firstname === '' || this.state.lastname ==='' || this.email ==='' || this.state.password ===''){
            let id = uuidv4()
            this.props.setAlert('All fields are required!', 'danger', id)
            setTimeout(() => {
                this.props.clearAlert(id)
            }, 5000);
        }
    }
    render() {
        return (
            <div className="register">
                <form>
                <h3 className="sign">Sign Up</h3>
                <div className="pop">
                    <div>
                        <input type="radio" class="form-check-input" name="optradio"/>
                        <label>Agence</label>
                    </div>
                    <div>
                        <input type="radio" class="form-check-input" name="optradio"/>
                        <label>Client</label>
                        </div>
                 </div>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.registerNow}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
            </div>
        );
    }
}

            
const mapDispatchToProps = dispatch => {
    return{
        setAlert: (msg, type,id) => dispatch(setAlert(msg, type, id)),
        clearAlert: id => dispatch(removeAlert(id))

    }
}

export default connect(null, mapDispatchToProps)(Register)