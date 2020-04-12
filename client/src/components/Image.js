import React, { Component } from 'react';
import { Card, CardDeck } from "react-bootstrap"

class Image extends Component {
    render() {
        return (
            <div>
              <div className="txt">
                <h1>Effectuez votre réservation ou déposer votre annonce en quelques clics !</h1>
                <p>C'est un site web, qui regroupe touts les agences de location véhicules dans une région. Ce site porte toutes les informations des agences (Adresses, Téléphones, email, site web . . .) et il permet de faire une réservation des véhicules en ligne</p>
              </div>
                <CardDeck>
  <Card>
    <Card.Img variant="top" src="https://cdn2.webmanagercenter.com/wmc/wp-content/uploads/2019/06/federation-location-voitures.jpg" />
    <Card.Body>
      <Card.Title>Vous chercher un véhicule de location</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <button className="text-muted">Last updated 3 mins ago</button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.carstodo.net/photos/tarifs-promotionnels-de-location-voiture-en-tunisie-hammamet-djerba-sousse-enfidha-monastir-1107758.jpg" />
    <Card.Body>
      <Card.Title>Vous êtes une agence de location de véhicules</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <button className="text-muted">Last updated 3 mins ago</button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/l7rEgkG0IhC2URWEW_unCJlGcbYyJ7m6-5Bkjm3oGVUIAoevlat8peKURvZzlKPqc36uckh1JhR_qGSIf99jgIEakCoDtQs-JpFqjQpuef4X8saY1iP8enV_F_3Y" />
    <Card.Body>
      <Card.Title>Vous cherchez un véhicule de luxe ou de mariage</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <button className="text-muted">Last updated 3 mins ago</button>
    </Card.Footer>
  </Card>
</CardDeck>
            </div>
        );
    }
}

export default Image;