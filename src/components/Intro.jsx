import React from "react";
import SliderIntro from "./SliderIntro";

function Intro() {
  return (
    <div className="intro" id="intro">
  <div className="intro__slider" id="introSlider">
    <SliderIntro>

    {/* <div className="slider-item">
          <div
            className="intro__slider-item"
            styles="background-image: url(img/slider/slide-1.jpg)"
          >
          
          </div>
        </div> */}


        <div className="slider-item">
          <img
            className="introsliderPhoto"
            src="img//slider/slide-2.jpg"
            alt=""
          />
        </div>

{/* 
        <div className="slider-item">
          <div className="intro__slider-item"
            styles="background-image: url(img/slider/slide-3.jpg)"
          ></div>
        </div> */}


        <div className="slider-item">
          <img
            className="introsliderPhoto"
            src="img//slider/slide-4.jpg"
            alt=""
          />
        </div>

       </SliderIntro>
   

      </div>

      <div className="container">
        <div className="intro__inner">
          <div
            className="request-form request-form--intro"
            data-aos="fade-right"
          >
            <div className="request-form__header">
              <h3 className="request-form__title">Есть вопросы?</h3>
              <div className="request-form__text">
                Оставьте свои данные и мы свяжемся с Вами в ближайшее время!
              </div>
            </div>
            <div className="request-form__content">
              <form className="form" action="/" method="POST">
                <div className="form__group">
                  <input
                    className="input input--user"
                    type="text"
                    placeholder="Ваше имя"
                    required
                    maxLength="15"
                  />
                </div>
                <div className="form__group">
                  <input
                    className="input input--phone"
                    type="tel"
                    placeholder="Номер телефона"
                    required
                    maxLength="15"
                  />
                </div>
                <div className="form__group">
                  <input
                    className="input input--email"
                    type="email"
                    placeholder="Ваш e-mail"
                    maxLength="20"
                  />
                </div>
                <button className="btn btn--block btn--orange" type="submit">
                  <span> Оставить заявку</span>
                </button>
              </form>
            </div>
          </div>
          <div className="into__text" data-aos="fade-left">
            <div className="intro__countries">
              Лицензия №18847 от 2020-06-18
            </div>
            <h1 className="intro__title">
              <span className="intro__title-amp">в</span>Работа
              <br />
              Польше
            </h1>
          </div>


          {/* <div className="intro__slider-arrows">
            <button
              className="intro__slider-btn intro__slider-btn-prev"
              id="introSliderPrev"
              type="button"
            >
              Prev
            </button>
            <button
              className="intro__slider-btn intro__slider-btn-next"
              id="introSliderNext"
              type="button"
            >
              Next
            </button>
          </div> */}



        </div>
      </div>
    </div>
  );
}

export default Intro;
