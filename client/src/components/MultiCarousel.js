import React, { Component } from 'react';
import {Carousel}  from 'react-bootstrap';

class MultiCarousel extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      index: 0,
      direction: null
    };
    }

  render() {
   
    return ( 
             <div className="item">
          <Carousel controls={false}>
          
          <Carousel.Item>
             <img className="carou" src="https://www.argusautomobile.tn/wp-content/uploads/2018/11/SEAT-150x150.png"/>
             <img className="carou" src="https://www.argusautomobile.tn/wp-content/uploads/2018/11/CHEVROLET-150x150.png"/>
             <img className="carou" src="https://www.argusautomobile.tn/wp-content/uploads/2018/11/VOLKSWAGEN-150x150.png"/>
             <img className="carou" src="https://www.argusautomobile.tn/wp-content/uploads/2018/11/SKODA-150x150.png"/>
             <img className="carou" src="https://www.argusautomobile.tn/wp-content/uploads/2018/11/TOYOTA-150x150.png"/>
             <img className="carou" src="https://www.argusautomobile.tn/wp-content/uploads/2019/01/Nissan-emblem-2003-2048x2048-150x150.png"/>
          </Carousel.Item>
          
           <Carousel.Item>
             <img className="carou" src="https://www.argusautomobile.tn/wp-content/uploads/2018/11/DACIA-150x150.png"/>
             <img className="carou" src="https://www.argusautomobile.tn/wp-content/uploads/2018/11/FIAT-150x150.png"/>
             <img className="carou" src="https://www.argusautomobile.tn/wp-content/uploads/2018/11/FORD-150x150.png"/>
             <img className="carou" src="https://www.argusautomobile.tn/wp-content/uploads/2018/11/MAZDA-150x150.png"/>
             <img className="carou" src="https://www.argusautomobile.tn/wp-content/uploads/2018/11/honda-150x150.png"/>
             <img className="carou" src="https://www.argusautomobile.tn/wp-content/uploads/2018/11/SEAT-150x150.png"/>
          </Carousel.Item>
     
          
          <Carousel.Item>
             <img className="carou" src="https://www.argusautomobile.tn/wp-content/uploads/2018/11/kia-150x150.png"/>
             <img className="carou" src="https://www.argusautomobile.tn/wp-content/uploads/2018/11/MITSUBISHI-150x150.png"/>
             <img className="carou" src="https://www.argusautomobile.tn/wp-content/uploads/2018/11/mahindra-150x150.png"/>
             <img className="carou" src="https://www.argusautomobile.tn/wp-content/uploads/2018/11/PEUGEOT-150x150.png"/>
             <img className="carou" src="https://www.argusautomobile.tn/wp-content/uploads/2018/11/RENAULT-150x150.png"/>
             <img className="carou" src="https://www.argusautomobile.tn/wp-content/uploads/2018/11/TATA-150x150.png"/>
          </Carousel.Item>

          <Carousel.Item>
             <img className="carou" src="https://www.argusautomobile.tn/wp-content/uploads/2018/11/MERCEDES-BENZ-150x150.png"/>
             <img className="carou" src="https://www.argusautomobile.tn/wp-content/uploads/2018/11/BMW-150x150.png"/>
             <img className="carou" src="https://www.argusautomobile.tn/wp-content/uploads/2018/11/LANDROVER-150x150.png"/>
             <img className="carou" src="https://www.argusautomobile.tn/wp-content/uploads/2018/11/JAGUAR-150x150.png"/>
             <img className="carou" src="https://www.argusautomobile.tn/wp-content/uploads/2018/11/ALFA-150x150.png"/>
             <img className="carou" src="https://www.argusautomobile.tn/wp-content/uploads/2018/11/AUDI-150x150.png"/>
          </Carousel.Item>
         
          
          </Carousel>
         
           </div>
    );
  }
}

export default MultiCarousel;