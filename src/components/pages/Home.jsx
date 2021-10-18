import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import {Intro, Vacancies} from "../index";
import SimpleSlider from "../Slider";

function Home({setVisibleModal}) {
const handleVisibleModal = () => {
  setVisibleModal(true);
};

  return (
    <>
      <Intro />
	  
      <Vacancies/>
     
      <section
        className="section section--map" name = "clients" >
        <div className="container">
          <h2 className="section__title">
            <span className="">Наши</span> партнеры
          </h2>
          <div className="clients">
            <div className="clients__logos">
              <ul className="clients__list">
                <li >
                  <a href="#" target="_blank">
                    <img
                      className="clients__list-logo img"
                      src="img/clients/atica.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-delay="50"
                  data-aos-anchor=".clients"
                >
                  <a href="#" target="_blank">
                    <img
                      className="clients__list-logo img"
                      src="img/clients/hex-lab.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-anchor=".clients"
                >
                  <a href="#" target="_blank">
                    <img
                      className="clients__list-logo img"
                      src="img/clients/amara.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-delay="150"
                  data-aos-anchor=".clients"
                >
                  <a href="#" target="_blank">
                    <img
                      className="clients__list-logo img"
                      src="img/clients/muzica-2.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-anchor=".clients"
                >
                  <a href="#" target="_blank">
                    <img
                      className="clients__list-logo img"
                      src="img/clients/solaytic.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-delay="250"
                  data-aos-anchor=".clients"
                >
                  <a href="#" target="_blank">
                    <img
                      className="clients__list-logo img"
                      src="img/clients/hexa.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-anchor=".clients"
                >
                  <a href="#" target="_blank">
                    <img
                      className="clients__list-logo img"
                      src="img/clients/utosia-2.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-delay="350"
                  data-aos-anchor=".clients"
                >
                  <a href="#" target="_blank">
                    <img
                      className="clients__list-logo img"
                      src="img/clients/fox-hub.svg"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>




            <div className="clients__reviews">


              <div className="reviews" id="reviewsSlider">


              <SimpleSlider/>



              </div>


              
            </div>






          </div>
          <div className="clients__footer">
            <button
              type="button" onClick = {handleVisibleModal}
              className={classNames("btn", "btn--orange", "btn--shadow")} 
            >
              <span> Оставить заявку</span>
            </button>
          
            <span className="clients-love">Мы ценим своих рабтников</span>
          </div>
        </div>
      </section>

      <section className="section" name = "benefits">
        <div className="container">
          <h2 className="section__title">
                   <span>Наши</span> преимущества
          </h2>
          <div className="benefits">
            <div className="benefits__col">
              <ul className="benefits__list">
                <li
                  className="benefits__list__item"
                  data-aos="fade-down"
                  data-aos-anchor=".benefits"
                >
                  <h4 className="benefits__list__title">Подбор вакансий</h4>
                  <div>
                    <p className="benefits__list__text">
                    выбор вакансий, с предоставление только правдивой информации
                    </p>
                  </div>
                </li>
                <li
                  className="benefits__list__item"
                  data-aos="fade-down"
                  data-aos-delay="100"
                  data-aos-anchor=".benefits"
                >
                  <h4 className="benefits__list__title">
                    Помощь с документами
                  </h4>
                  <div>
                    <p className="benefits__list__text">
                    подготовка всех необходимых документов для открытия визы
                    </p>
                  </div>
                </li>
                <li
                  className="benefits__list__item"
                  data-aos="fade-down"
                  data-aos-delay="200"
                  data-aos-anchor=".benefits"
                >
                  <h4 className="benefits__list__title">
                    Поддержка
                  </h4>
                  <div>
                    <p className="benefits__list__text">
                    сопровождение до самого приезда на место работы
                    </p>
                  </div>
                </li>
                <li
                  className="benefits__list__item"
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-anchor=".benefits"
                >
                  <h4 className="benefits__list__title">Команда профессионалов</h4>
                  <div>
                    <p className="benefits__list__text">
                    Во время нашего сотрудничества мы будем Вас координировать от А до Я
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="benefits__col">
              <img className="img" src="img/benefits-photo1.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--shadow" name = 'team'  >
        <div className="container ">
          <h2 className="section__title">
            <span className="">Наша</span> команда
          </h2>

          <div className="team">
            <div className="team__member" data-aos="fade-in">
              <img
                className="img team__photo"
                src="img/team/team-1.jpg"
                alt=""
              />
              <div className="team__name">John Smith</div>
              <div className="team__about">
                Logistic manager - 8 years experience
              </div>
              <div className="team__contacts">
                <p className="team__email">
                  <img
                    className="team__contacts-icon"
                    src="img/team--mail.svg"
                    alt=""
                  />
                  <a href="mailto:john@centerlogistic.com">
                    john@centerlogistic.com
                  </a>
                </p>
                <p className="team__phone">
                  <img
                    className="team__contacts-icon"
                    src="img/team-phone.svg"
                    alt=""
                  />
                  <a href="tel:+987412512543">+987412512543</a>{" "}
                </p>
              </div>
            </div>
            <div
              className="team__member"
              data-aos="fade-in"
              data-aos-delay="100"
            >
              <img
                className="img team__photo"
                src="img/team/team-2.jpg"
                alt=""
              />
              <div className="team__name">Daniel Kore</div>
              <div className="team__about">Software engineer</div>
              <div className="team__contacts">
                <p className="team__email">
                  <img
                    className="team__contacts-icon"
                    src="img/team--mail.svg"
                    alt=""
                  />
                  <a href="mailto:daniel@centerlogistic.com">
                    daniel@centerlogistic.com
                  </a>
                </p>
                <p className="team__phone">
                  <img
                    className="team__contacts-icon"
                    src="img/team-phone.svg"
                    alt=""
                  />
                  <a href="tel:+987423252253">+987423252253</a>
                </p>
              </div>
            </div>
            <div
              className="team__member"
              data-aos="fade-in"
              data-aos-delay="200"
            >
              <img
                className="img team__photo"
                src="img/team/team-3.jpg"
                alt=""
              />
              <div className="team__name">Anna Filler</div>
              <div className="team__about">
                Marketing specialist - 10 years experience
              </div>
              <div className="team__contacts">
                <p className="team__email">
                  <img
                    className="team__contacts-icon"
                    src="img/team--mail.svg"
                    alt=""
                  />
                  <a href="mailto:anna@centerlogistic.com">
                    anna@centerlogistic.com
                  </a>
                </p>
                <p className="team__phone">
                  <img
                    className="team__contacts-icon"
                    src="img/team-phone.svg"
                    alt=""
                  />
                  <a href="tel:+98735353456">+98735353456</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" name = "mission">
        <div className="container">
          <h2 className="mission__title-back">наша цель</h2>
          <div className="mission" data-aos="fade-up" data-aos-duration="1000">
            <h3 className="mission__title">
          Легальное трудоустройство за границей!
                          </h3>
            <h4 className="mission__subtitle">
            Наша команда профессионалов  с радостью, проконсультируют и ознакомят со всеми правилами и условиями трудоустройства за границей.
            </h4>
          </div>
          <div className="text-center">
            <button
              className="btn btn--orange btn--shadow"
              type="button"
              data-modal="#becomeClientModal"
            >
              <span onClick={handleVisibleModal}> Связаться с нами!</span>
            </button>
          </div>
        </div>
      </section>

      <section
        className="section section--last"
        name = 'blog'
      >
        <div className="container">
          <h2 className="section__title">
            <span>Интересно</span> почитать
          </h2>
          <div className="news">
            <article className="news__item" data-aos="fade-in">
              <div className="news__title">
                <h4>
               
                  <a href="#">Какая-то статья</a>
                </h4>
              </div>
              <div className="news__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus rem error, tempore aperiam, a totam voluptas et itaque
                quo quasi excepturi dolores molestias, recusandae exercitationem
                quod fugiat aut molestiae! Possimus.
              </div>
              <time className="news__date" dateTime="2021-03-12 19:00">
                12 March, 2021
              </time>
            </article>
            <article
              className="news__item"
              data-aos="fade-in"
              data-aos-delay="100"
            >
              <div className="news__title">
                <h4>
                 
                  <a href="#">Еще Какая-то статья</a>
                </h4>
              </div>
              <div className="news__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus rem error, tempore aperiam, a totam voluptas et itaque
                quo quasi excepturi dolores molestias, recusandae exercitationem
                quod fugiat aut molestiae! Possimus.
              </div>
              <time className="news__date" dateTime="2021-03-12 19:00">
                12 March, 2021
              </time>
            </article>
            <article
              className="news__item"
              data-aos="fade-in"
              data-aos-delay="100"
            >
              <div className="news__title">
                <h4>
                 
                  <a href="#">Еще Какая-то статья</a>
                </h4>
              </div>
              <div className="news__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus rem error, tempore aperiam, a totam voluptas et itaque
                quo quasi excepturi dolores molestias, recusandae exercitationem
                quod fugiat aut molestiae! Possimus.
              </div>
              <time className="news__date" dateTime="2021-03-12 19:00">
                12 March, 2021
              </time>
            </article>
            <article
              className="news__item"
              data-aos="fade-in"
              data-aos-delay="100"
            >
              <div className="news__title">
                <h4>
                 
                  <a href="#">Еще Какая-то статья</a>
                </h4>
              </div>
              <div className="news__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus rem error, tempore aperiam, a totam voluptas et itaque
                quo quasi excepturi dolores molestias, recusandae exercitationem
                quod fugiat aut molestiae! Possimus.
              </div>
              <time className="news__date" dateTime="2021-03-12 19:00">
                12 March, 2021
              </time>
            </article>
            <article
              className="news__item"
              data-aos="fade-in"
              data-aos-delay="100"
            >
              <div className="news__title">
                <h4>
                 
                  <a href="#">Еще Какая-то статья</a>
                </h4>
              </div>
              <div className="news__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus rem error, tempore aperiam, a totam voluptas et itaque
                quo quasi excepturi dolores molestias, recusandae exercitationem
                quod fugiat aut molestiae! Possimus.
              </div>
              <time className="news__date" dateTime="2021-03-12 19:00">
                12 March, 2021
              </time>
            </article>
            <article
              className="news__item"
              data-aos="fade-in"
              data-aos-delay="100"
            >
              <div className="news__title">
                <h4>
                 
                  <a href="#">Еще Какая-то статья</a>
                </h4>
              </div>
              <div className="news__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus rem error, tempore aperiam, a totam voluptas et itaque
                quo quasi excepturi dolores molestias, recusandae exercitationem
                quod fugiat aut molestiae! Possimus.
              </div>
              <time className="news__date" dateTime="2021-03-12 19:00">
                12 March, 2021
              </time>
            </article>
          </div>
          <Link className="btn btn--orange btn--shadow" to='/blog'>
            <span>Перейти в блог</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
