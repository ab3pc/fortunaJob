import React from "react";
import classNames from "classnames";
import ReactDOM from "react-dom"

function ModalForVacancies({setModalForVacancies, name, workPlace, salary}) {
  return ReactDOM.createPortal(
        <div
          className={classNames("modalForVac")}
          
        >
          <div className="modal__inner">
            <div
              className="modal__content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal__header">
                <h4 className="modal__title">Узнать больше о вакансии</h4>
                <div className="modal__text">
                  <div className = "modalAboutVac">
                   <p>
                   <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 20.292969 5.2929688 L 9 16.585938 L 4.7070312 12.292969 L 3.2929688 13.707031 L 9 19.414062 L 21.707031 6.7070312 L 20.292969 5.2929688 z"/></svg>
                     {name}</p>

                



                <p>
                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 20.292969 5.2929688 L 9 16.585938 L 4.7070312 12.292969 L 3.2929688 13.707031 L 9 19.414062 L 21.707031 6.7070312 L 20.292969 5.2929688 z"/></svg>
                  Место работы: {workPlace}</p>
                <p>
                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 20.292969 5.2929688 L 9 16.585938 L 4.7070312 12.292969 L 3.2929688 13.707031 L 9 19.414062 L 21.707031 6.7070312 L 20.292969 5.2929688 z"/></svg>
                  Оплата: {salary} zl</p>
                  </div>
               

                  <p>Оставьте данные и мы проконсультируем Вас в скором времени!</p>
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
                <div className="form__group">
                  <textarea  
                    className="input input--dark"
                    rows = "3"
                  
                    placeholder="Комментарий"
                    maxLength="150"
                  />
                </div>


                <button className="btn btn--block btn--orange" type="submit">
                  <span>Оставить заявку</span>
                </button>
              </form>
            
              <button
              onClick = {() => setModalForVacancies(false)}
                className="modal__close"
                type="button"
                  >
                <img
                  className="modal__close-img"
                  src="img/close.svg"
                  alt=""
                  
                />
              </button>
            </div>
          </div>
        </div>, document.getElementById('root')
  );
}

export default ModalForVacancies;
