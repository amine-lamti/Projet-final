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

          <Carousel.Item >
             <img src="https://goldencars.com.tn/wp-content/themes/goldencar/images/clients/audi.jpg" width={300} height={100} />
             <img src="https://goldencars.com.tn/wp-content/themes/goldencar/images/clients/bmw.jpg" width={300} height={100} />
             <img src="https://goldencars.com.tn/wp-content/themes/goldencar/images/clients/porsche.jpg" width={300} height={100} />
             <img src="https://goldencars.com.tn/wp-content/themes/goldencar/images/clients/mercedes-benz.jpg" width={300} height={100} />
          </Carousel.Item>
         
          <Carousel.Item>
             <img src="https://goldencars.com.tn/wp-content/themes/goldencar/images/clients/citroen-tunisie.jpg" width={300} height={100} />
             <img src="https://goldencars.com.tn/wp-content/themes/goldencar/images/clients/volkswagon-tunisie.jpg" width={300} height={100} />
             <img src="https://goldencars.com.tn/wp-content/themes/goldencar/images/clients/suzuki-tunisie.jpg" width={300} height={100} />
             <img src="https://goldencars.com.tn/wp-content/themes/goldencar/images/clients/fiat-tunisie.jpg" width={300} height={100} />
          </Carousel.Item>


          </Carousel>
           </div>
    );
  }
}

export default MultiCarousel;