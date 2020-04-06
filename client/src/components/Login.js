import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { login } from '../actions/AuthActions'
import { setAlert, removeAlert } from '../actions/AlertActions'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated){
            this.props.history.push('/')
        }
        if(nextProps.auth.error === 'Please Register Before!' || nextProps.auth.error === 'Wrong Password!' ){
            let id = uuidv4()
            this.props.setAlert(nextProps.auth.error, 'warning', id)
            setTimeout(() => {
                this.props.removeAlert(id)
                this.props.clearError()
            }, 5000);
        }
    }
    loginNow = (e) => {
        e.preventDefault()
        if(this.state.email ==='' || this.state.password ===''){
            let id = uuidv4()
            this.props.setAlert('Please enter your credentials before!', 'danger', id)
            setTimeout(() => {
                this.props.removeAlert(id)
            }, 5000);
        }else{
            this.props.login({
                email: this.state.email,
                password: this.state.password
            })
        } 
    }
  
    render() {
        return (
            <div className="login">
            <form>
                <h3 className="sign">Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.loginNow}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <p className="forgot-password text-right">
                    Don't have an Account <Link to="/register">Sign Up?</Link>
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
export default connect(mapStateToProps, { login, setAlert, removeAlert })(Login)