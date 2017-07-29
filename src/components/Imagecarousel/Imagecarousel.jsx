import React, { Component } from 'react';
import './Imagecarousel.css';
import image1 from './carouselimage1.jpg';
import image2 from './carouselimage2.jpg';
import image3 from './carouselimage3.jpg';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';


export class Imagecarousel extends Component {
    constructor(props) {
      super(props);
    }
    onSelect= (active,direction)=>{
      console.log(`active=${active} && direction=${direction}`);
    }
    render() {
      return(
        <div>
          <React_Bootstrap_Carousel
            animation={true}
            onSelect={this.onSelect}
            className="carousel-fade"
            >
            <div>
              <img className="carousel-image" src={image1} />
            </div>
            <div>
              <img className="carousel-image" src={image2} />
            </div>
            <div>
              <img className="carousel-image" src={image3} />
            </div>
          </React_Bootstrap_Carousel>
      </div>
    );
  }
}
