import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import logoFJ from "../css/img/LogoFJ.png";

import * as Scroll from "react-scroll";
let LinkAnchor = Scroll.Link;

function Header({ setVisibleModal }) {
  const [mobNav, setMobNav] = React.useState(false);

  const handleSetMobNav = () => {
    setMobNav(!mobNav);
  };

  const handleSetVisibleModal = () => {
    setVisibleModal(true);
  };

  const headerRef = React.useRef();

  let clsName = classNames({
    nav: true,
    show: mobNav,
  });

  React.useEffect(() => {
    const clickOutside = (e) => {
      if (!e.path.includes(headerRef.current)) {
        setMobNav(false);
      }
    };
    document.body.addEventListener("click", clickOutside);

    return () => {
      window.removeEventListener("click", clickOutside);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={classNames({
        header: true,
        headerDark: mobNav,
      })}
    >
      <div className="container">
        <div className="header__inner">
          <Link className="header__logo" to="/">
            <img src={logoFJ} alt="Fortuna Job Sp z o.o." />
            <span className="header__logo-name ">Fortuna Job</span>
          </Link>

          <nav className={clsName} id="nav">
            <LinkAnchor
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              to="vacancies"
              hashSpy={true}
              className="nav__link"
            >
              Вакансии
            </LinkAnchor>

            <LinkAnchor
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              to="clients"
              hashSpy={true}
              className="nav__link"
            >
              Партнеры
            </LinkAnchor>

            <LinkAnchor
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              to="benefits"
              hashSpy={true}
              className="nav__link"
            >
              Преимущества
            </LinkAnchor>

            <LinkAnchor
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              to="team"
              hashSpy={true}
              className="nav__link"
            >
              Команда
            </LinkAnchor>

            <LinkAnchor
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              to="mission"
              className="nav__link"
              hashSpy={true}
            >
              Цель
            </LinkAnchor>
            <LinkAnchor
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              to="blog"
              className="nav__link"
            >
              Блог
            </LinkAnchor>

            <span className="nav__link" onClick={handleSetVisibleModal}>
              Связь с нами
            </span>
          </nav>
          <button
            onClick={handleSetMobNav}
            className={classNames("burger", { active: mobNav })}
            type="button"
          >
            <span className="burger__line">1</span>
            <span className="burger__line">2</span>
            <span className="burger__line">3</span>
            <span className="burger__line">4</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
