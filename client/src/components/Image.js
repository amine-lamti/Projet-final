import React, { Component } from 'react';
import { Card, CardDeck } from "react-bootstrap"
import { connect } from "react-redux"
import { Link } from "react-router-dom"


class Image extends Component {
    render() {
        return (
            <div>
              <div className="txt">
                <h3 className="txt1">Effectuez votre réservation ou déposer votre annonce en quelques clics !</h3>
                <hr/>
                <p>C'est un site web, qui regroupe touts les agences de location véhicules dans une région. Ce site porte aussi toutes les informations des agences (Adresses, Téléphones, email, site web . . .) et il permet de faire une réservation des véhicules en ligne</p>
              </div>
     <div className="image">
                <CardDeck style={{width: '90%', margin:'0px'}}>
  <Card>
    <Card.Img variant="top" src="https://cdn2.webmanagercenter.com/wmc/wp-content/uploads/2019/06/federation-location-voitures.jpg" />
    <Card.Body>
      <Card.Title>Vous chercher un véhicule de location</Card.Title>
      <Card.Text>
      Réservez la voiture adaptée pour vous et commencez votre voyage. C'est simple et rapide !
      </Card.Text>
    </Card.Body>
    <Card.Footer>   
      {this.props.auth.isAuthenticated ? <Link class="btn btn-outline-warning btn-sm" type="button" to="/cars" data-toggle="modal" data-target="#myModal">Réserver gratuitement</Link> : <Link class="btn btn-outline-warning btn-sm" type="button" to="/login" data-toggle="modal" data-target="#myModal">Réserver gratuitement</Link>}
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.carstodo.net/photos/tarifs-promotionnels-de-location-voiture-en-tunisie-hammamet-djerba-sousse-enfidha-monastir-1107758.jpg" />
    <Card.Body>
      <Card.Title>Vous êtes une agence de location de véhicules</Card.Title>
      <Card.Text>
      Gérez vos agences et vos véhicules, retrouvez vos réservations, consultez votre compte et mettez à jour vos informations à tout moment.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    {this.props.auth.isAuthenticated ? <Link class="btn btn-outline-dark btn-sm" type="button" to="/monagence" data-toggle="modal" data-target="#myModal">Déposer votre annonce gratuitement</Link> : <Link class="btn btn-outline-dark btn-sm" type="button" to="/register" data-toggle="modal" data-target="#myModal">Déposer votre annonce gratuitement</Link>}
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.paris-taxi.eu/uploads/book/Alt_Paris-taxi.eu_voiture%20de%20location%20mariage_image2.jpg" className="bob"/>
    <Card.Body>
      <Card.Title>Vous cherchez un véhicule de luxe ou de mariage</Card.Title>
      <Card.Text>
      Vous vous préparez pour mariage ou vous rêvez de conduire un véhicule de prestige. Alors découvrez la voiture luxe de vos rêves.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    {this.props.auth.isAuthenticated ? <Link class="btn btn-outline-warning btn-sm" type="button" to="/cars" data-toggle="modal" data-target="#myModal">Réserver gratuitement</Link> : <Link class="btn btn-outline-warning btn-sm" type="button" to="/login" data-toggle="modal" data-target="#myModal">Réserver gratuitement</Link>}
    </Card.Footer>
  </Card>
</CardDeck>
</div>
            </div>
        );
    }
}
const mapStateToProps=state=>{
  return{
    auth:state.auth
  }
}

export default connect(mapStateToProps)(Image);