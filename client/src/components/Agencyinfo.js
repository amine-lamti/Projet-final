import React, { Component } from 'react';
import { connect } from "react-redux"
import { loadUser } from "../actions/AuthActions";
import {Card} from "react-bootstrap"
import {ListGroupItem} from "react-bootstrap" 
import {ListGroup} from "react-bootstrap"
import { Link } from "react-router-dom"

class Agencyinfo extends Component {
    componentWillMount() {
        if (this.props.agence.isAuthenticated) {
            this.props.loadUser()
        }
    }
    render() {
        return (<div>
            <Card className="agence" style={{ width: '18rem' }}>
  
  <Card.Body>
        <Card.Title>{this.props.agence.user.firstname+" "+this.props.agence.user.lastname}</Card.Title>
    
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{this.props.agence.user.email}</ListGroupItem>
    <ListGroupItem>{this.props.agence.user.agence}</ListGroupItem>
    <ListGroupItem>{this.props.agence.user.lieu}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">modifier votre profil</Card.Link><br/>
    <Card.Link ><Link to={`/carform/${5}`}>ajouter une annonce</Link></Card.Link>
  </Card.Body>
</Card>
        </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        agence: state.auth
    }
}

export default connect(mapStateToProps, { loadUser })(Agencyinfo);
