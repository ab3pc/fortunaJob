import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from "classnames";




export default class SliderIntro extends Component {
 
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <> 
      
      <Slider {...settings}>
               {this.props.children}


               
        </Slider>
    
      </>
          
     
    );
  }
}