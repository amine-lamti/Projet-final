import React, { Component } from 'react';
import {Modal} from "react-bootstrap"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import{reserver} from '../actions/CarActions'
import { connect } from 'react-redux'

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class ResrverModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            show:false,
            fullname:"",
            email:"",
            téléphone:"",
            startDate: new Date(),
            endDate: new Date()

          
      
        }}
        handleChange = e => {
            this.setState({ [e.target.name]: e.target.value })
        }
    
        handleChange2= date => {
            this.setState({
              endDate:date
            });
          };
        handleChange1= date => {
            this.setState({
              startDate: date,
              
            });
          };
        handleShow=()=>{
            this.setState({show:true})
        }
        handleClose=()=>{
            this.props.reserver({res:this.state,id:this.props.id})
this.setState({show:false})
this.setState({
    show:false,
    fullname:"",
    email:"",
    téléphone:"",
    startDate: new Date(),
    endDate: new Date()

})
        }
    render() {
        return (
            <div>
                <button class="btn btn-outline-warning btn-sm" onClick={this.handleShow}>
                Réserver
      </button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Réserver gratuitement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="form-group">
                    <label>Nom/Prénom</label>
                    <input type="text" className="form-control" placeholder="Enter fullname" name="fullname" value={this.state.couleur} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                <label>Email</label>
                    <input type="text" className="form-control" placeholder="Enter email" name="email" value={this.state.couleur} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                <label>Téléphone</label>
                    <input type="text" className="form-control" placeholder="Enter téléphone" name="téléphone" value={this.state.téléphone} onChange={this.handleChange}/>
                </div>
                
     <div className="calendar">
      <div>
      <h6>Date de départ</h6>
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange1}
      />
      </div>
       <div>
       <h6>Date de retour</h6>
      <DatePicker
        selected={this.state.endDate}
        onChange={this.handleChange2}
      />
      </div>
      </div>
        </Modal.Body>
        <Modal.Footer>      
          <button class="btn btn-outline-dark btn-sm" onClick={this.handleClose}>
            Fermer
          </button>
          <button class="btn btn-outline-warning btn-sm" onClick={this.handleClose}>
          Réserver
          </button>
        </Modal.Footer>
      </Modal>
            </div>
        );
    }
}

export default connect(null,{reserver})(ResrverModal);
