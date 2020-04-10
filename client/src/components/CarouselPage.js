import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact"; 


const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://www.planeterenault.com/UserFiles/photos/slideshow/location-voiture-pas-cher.jpg"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://appartements-fuerteventura.com/wp-content/uploads/2017/11/visuel_location_vehicule_0.jpg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                //src="https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.carstodo.net%2Fpromotion-location-voiture-tunisie.htm&psig=AOvVaw1O65b985qmyR7tvxG2_qk6&ust=1586625087252000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjulqCt3ugCFQAAAAAdAAAAABAD"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>

        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;