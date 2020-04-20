import React, { Component } from "react";
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { setAlert, removeAlert } from '../actions/AlertActions';
import { register, clearError } from '../actions/AuthActions';
import { Link } from 'react-router-dom'




class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            type:'',
            agence:'',
            lieu:''
        }
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    registerNow = (e) => {
        e.preventDefault() 
        if(this.state.firstname === '' || this.state.lastname ==='' || this.state.email ==='' || this.state.password ==='' || this.state.type ===''){
            let id = uuidv4()
            this.props.setAlert('All fields are required!', 'danger', id)
            setTimeout(() => {
                this.props.removeAlert(id)
            }, 5000);
        }else{ if(this.state.type==="agence"){this.props.register({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            type: this.state.type,
            agence:this.state.agence,
            lieu:this.state.lieu

        })}
        else{this.props.register({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            type: this.state.type
        })}
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
                        <input value="agence" id="Agence" type="radio" class="form-check-input" name="type" onClick={this.handleChange}/>
                        <label htmlFor="Agence">Agence</label>
                    </div>
                    <div>
                        <input value="client" id="Client" type="radio" class="form-check-input" name="type" onClick={this.handleChange}/>
                        <label htmlFor="Client">Client</label>
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

                {
                    this.state.type === "agence" && <div>
                        <div className="form-group">
                    <label>Name of your agency</label>
                    <input type="text" className="form-control" placeholder="Name of your agency" name="agence" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Location of your agency</label>
                    <input type="text" className="form-control" placeholder="Location of your agency" name="lieu" onChange={this.handleChange}/>
                </div>
                        </div>
                }

                <button className="btn btn-primary btn-block" onClick={this.registerNow}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link to="/login">Sign In?</Link>
                </p>
            </form>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, { setAlert, removeAlert, register, clearError })(Register)