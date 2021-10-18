import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




export default class SimpleSlider extends Component {
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
             <Slider {...settings}>
        <div className="reviews__item">
                  <div className="reviews__header">
                    <img className="reviews__photo" src="img/slider/kopta.png" alt="" />
                    <div className="reviews__header-content">
                      <div className="reviews__name">John Kopta</div>
                      <div className="reviews__company">Skanska</div>
                    </div>
                  </div>
                  <div className="reviews__content">
                    <p>
                     
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                    </p>
                    <p>
                      accusam et justo duo dolores et ea rebum.Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor
                    </p>
                  </div>
                </div>
                <div className="reviews__item">
                  <div className="reviews__header">
                    <img className="reviews__photo" src="img/slider/torpol.png" alt="" />
                    <div className="reviews__header-content">
                      <div className="reviews__name">Arkadiush Kozma</div>
                      <div className="reviews__company">Torpol</div>
                    </div>
                  </div>
                  <div className="reviews__content">
                    <p>
                     
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                    </p>
                    <p>
                      accusam et justo duo dolores et ea rebum.Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor
                    </p>
                  </div>
                </div>
        </Slider>
     
    );
  }
}