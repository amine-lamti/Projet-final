import React, { Component } from 'react';
import{Button,Modal} from 'react-bootstrap'

class Modal2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
show:false
        };
    }
    handleClose=()=>{
      this.setState({show:false})
    }
    handleShow=()=>{
      this.setState({show:true})
    }
    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.handleShow}>
            confirmer la réservation
          </Button>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>validation finale</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div class="container">

            <form action={`https://formspree.io/${this.props.email}`} method="POST">
            <div class="row">
    <div class="col-25">
      <label for="fname">Nom:</label>
    </div>
    <div class="col-75">
      <input type="text" id="fname" name="firstname" placeholder="Your name.." required/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="lname">Prénom:</label>
    </div>
    <div class="col-75">
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." required/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="subject">Message:</label>
    </div>
    <div class="col-75">
      <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
    </div>
  </div>
    <button >Envoyer</button>
    </form>
    </div>
    </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Fermer
              </Button>              
            </Modal.Footer>
          </Modal> 
            </div>
        );
    }
}

export default Modal2;