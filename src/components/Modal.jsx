import React from "react";
import classNames from "classnames";

function Modal({ setVisibleModal }) {

  const handlesetVisibleModal = () => {
    setVisibleModal(false)
  }
  return (
    <>
      {
        <div
          className={classNames("modal")}
          onClick={handlesetVisibleModal}
        >
          <div className="modal__inner">
            <div
              className="modal__content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal__header">
                <h4 className="modal__title">Помощь с работой в Польше</h4>
                <div className="modal__text">
                  <p>
                    Оставьте свои данные и мы свяжемся с Вами в ближайшее время!
                  </p>
                </div>
              </div>

              <form className="form" action="/" method="POST">
                <div className="form__group">
                  <input
                    className="input input--dark input--user"
                    type="text"
                    placeholder="Ваше имя"
                    required
                    maxLength="20"
                  />
                </div>
                <div className="form__group">
                  <input
                    className="input input--dark input--phone"
                    type="tel"
                    placeholder="Номер телефона"
                    required
                    maxLength="20"
                  />
                </div>
                <div className="form__group">
                  <input
                    className="input input--dark input--email"
                    type="email"
                    placeholder="Ваш e-mail"
                    maxLength="30"
                  />
                </div>
                <button className="btn btn--block btn--orange" type="submit">
                  <span> Оставить заявку</span>
                </button>
              </form>
              <div className="modal__footer">
                <h4 className="modal__footer-title">Наши контакты</h4>
                <address className="modal__contacts">
                  <p>New York, Street, ZIP code</p>
                  <p>
                    Phone: <a href="tel:+9948373123">+9948373123</a>
                  </p>
                  <p>
                    E-mail:
                    <a href="mailto:hello@centerlogistic.com">
                      hello@centerlogistic.com
                    </a>
                  </p>
                </address>
              </div>
              <button
                className="modal__close"
                type="button"
                data-modal-close=""
              >
                <img
                  className="modal__close-img"
                  src="img/close.svg"
                  alt=""
                  onClick={handlesetVisibleModal}
                />
              </button>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Modal;
