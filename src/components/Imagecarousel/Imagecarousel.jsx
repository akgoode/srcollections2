import React, { Component } from 'react';
import './Imagecarousel.css';
import labels from '../../labels/sitecontent.json';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';


export class Imagecarousel extends Component {
    onSelect= (active,direction)=>{
      console.log(`active=${active} && direction=${direction}`);
    }
    render() {
      return(
        <React_Bootstrap_Carousel
          animation={true}
          onSelect={this.onSelect}
          className="carousel-fade"
          >
          <div className="image1 carousel-image">
            <p className="carousel-image-text">{labels.carouselImage1Text}</p>
          </div>
          <div className="image2 carousel-image">
            <p className="carousel-image-text">{labels.carouselImage2Text}</p>
          </div>
          <div className="image3 carousel-image">
            <p className="carousel-image-text">{labels.carouselImage3Text}</p>
          </div>

        </React_Bootstrap_Carousel>
    );
  }
}
