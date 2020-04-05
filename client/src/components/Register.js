import React, { Component } from "react";
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { setAlert, removeAlert } from '../actions/AlertActions';
import { register, clearError } from '../actions/AuthActions'


class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        }
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    registerNow = () => { 
        if(this.state.firstname === '' || this.state.lastname ==='' || this.email ==='' || this.state.password ===''){
            let id = uuidv4()
            this.props.setAlert('All fields are required!', 'danger', id)
            setTimeout(() => {
                this.props.clearAlert(id)
            }, 5000);
        }else{ 
            this.props.register({
            firstname: this.props.firstname,
            lastname: this.props.lastname,
            email: this.props.email,
            password: this.props.password
        })

        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated){
            this.props.history.push('/')
        }
        if(nextProps.auth.error === 'Email already exist!'){
            let id = uuidv4()
            this.props.setAlert(nextProps.auth.error, 'danger', id)
            setTimeout(() => {
                this.props.removeAlert(id)
                this.props.clearError()
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
                    <input type="text" className="form-control" placeholder="First name" name="firstname" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" name="lastname" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={this.handleChange}/>
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
const mapStateToProps = state => {
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps, { setAlert, removeAlert, register, clearError })(Register)