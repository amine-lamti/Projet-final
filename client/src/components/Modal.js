import React, { Component } from 'react';
import {Modal,Button} from "react-bootstrap"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import{reserver,getagencycar} from '../actions/CarActions'
import { connect } from 'react-redux'

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
                <Button variant="primary" onClick={this.handleShow}>
                reserver
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>resrever gratuitement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="form-group">
                    <label>fullname</label>
                    <input type="text" className="form-control" placeholder="Enter fullname" name="fullname" value={this.state.couleur} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                <label>email</label>
                    <input type="text" className="form-control" placeholder="Enter email" name="email" value={this.state.couleur} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                <label>téléphone</label>
                    <input type="text" className="form-control" placeholder="Enter téléphone" name="téléphone" value={this.state.téléphone} onChange={this.handleChange}/>
                </div>
                <div>
      <h4>Start Date</h4>
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange1}
      />
            <h4>End date</h4>

      <DatePicker
        selected={this.state.endDate}
        onChange={this.handleChange2}
      /></div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
          reserver
          </Button>
        </Modal.Footer>
      </Modal>
            </div>
        );
    }
}

export default connect(null,{reserver})(ResrverModal);
