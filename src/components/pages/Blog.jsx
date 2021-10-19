import React from "react";
import { Link } from "react-router-dom";

import * as Scroll from "react-scroll";
import { Header } from "..";
let scrollSpy = Scroll.scrollSpy;

function Blog({setVisibleModal}) {
  React.useEffect(() => {
    scrollSpy.update();
  }, []);
  return (
    <div name="blog" className = "blog">
      <Header setVisibleModal = {setVisibleModal} />

      <div className="intro intro--blog" id="intro"></div>

      <div className="section section--last">
        <div className="container">
          <main className="main">
            <div className="main__col">
              <h1 className="section__title">
                
                <span>Интересно </span> почитать
              </h1>
              <div className="news news-column">
                <article className="news__item">
                  <div className="news__title">
                    <h4>
                      
                      <a href="#">Какая-то статья</a>
                    </h4>
                  </div>
                  <div className="news__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus rem error, tempore aperiam, a totam voluptas et
                    itaque quo quasi excepturi dolores molestias, recusandae
                    exercitationem quod fugiat aut molestiae! Possimus.
                  </div>
                  <time className="news__date" datetime="2021-03-12 19:00">
                    12 March, 2021
                  </time>
                </article>
                <article className="news__item">
                  <div className="news__title">
                    <h4>
                      
                      <a href="#">Еще Какая-то статья</a>
                    </h4>
                  </div>
                  <div className="news__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus rem error, tempore aperiam, a totam voluptas et
                    itaque quo quasi excepturi dolores molestias, recusandae
                    exercitationem quod fugiat aut molestiae! Possimus.
                  </div>
                  <time className="news__date" datetime="2021-03-12 19:00">
                    12 March, 2021
                  </time>
                </article>
                <article className="news__item">
                  <div className="news__title">
                    <h4>
                      
                      <a href="#">Еще Какая-то статья</a>
                    </h4>
                  </div>
                  <div className="news__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus rem error, tempore aperiam, a totam voluptas et
                    itaque quo quasi excepturi dolores molestias, recusandae
                    exercitationem quod fugiat aut molestiae! Possimus.
                  </div>
                  <time className="news__date" datetime="2021-03-12 19:00">
                    12 March, 2021
                  </time>
                </article>
                <article className="news__item">
                  <div className="news__title">
                    <h4>
                      
                      <a href="#">Еще Какая-то статья</a>
                    </h4>
                  </div>
                  <div className="news__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus rem error, tempore aperiam, a totam voluptas et
                    itaque quo quasi excepturi dolores molestias, recusandae
                    exercitationem quod fugiat aut molestiae! Possimus.
                  </div>
                  <time className="news__date" datetime="2021-03-12 19:00">
                    12 March, 2021
                  </time>
                </article>
              </div>
              <Link className="btn btn--orange" to = "/">
                
                <span>На главную</span>
              </Link>
            </div>
            <div className="main__col">
              <div className="request-form request-form--right">
                <div className="request-form__header">
                  <h3 className="request-form__title">Оставьте данные</h3>
                  <div className="request-form__text">
                    И мы свяжемся с Вами в ближайшее время
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
                    maxLength="20"
                      />
                    </div>
                    <div className="form__group">
                      <input
                        className="input input--phone"
                        type="tel"
                        placeholder="Телефон"
						required
						maxLength="20"
                      />
                    </div>
                    <div className="form__group">
                      <input
                        className="input input--email"
                        type="email"
                        placeholder="e-mail"
                      />
                    </div>
                    <button
                      className="btn btn--block btn--orange"
                      type="submit"
                    >
                      <span> Перезвонить</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Blog;
