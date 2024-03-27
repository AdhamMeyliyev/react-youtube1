import React from "react";

const Header = () => {
  return (
    <div>
      <section className="header">
        <div className="container">
          <img
            className="header--left__icon-menu"
            src="../assets/icon/menu.svg"
            alt="menu"
          />
          <img
            className="header__you-tube__logo"
            src="../assets/logo/youtube-logo.svg"
            alt="youtub-logo"
          />

          <div className="header--center">
            <form className="header--center__form">
              <input
                className="header--center__form__search-input"
                type="text"
                placeholder="Search"
              />
              <button className="header__search__btn">
                <img
                  className="search--icon"
                  src="../assets/icon/search.svg"
                  alt="search"
                />
              </button>
            </form>
          </div>

          <div className="header--right">
            <a className="header--right__icon" href="#">
              <img
                src="../assets/icon/header-button--icon1.svg"
                alt="icon-zoom"
              />
            </a>
            <a class="header--right__icon" href="#">
              <img
                src="../assets/icon/header-button-icon2.svg"
                alt="icon-zoom"
              />
            </a>
            <a class="header--right__icon" href="#">
              <img
                src="../assets/icon/header-button--icon3.svg"
                alt="icon-zoom"
              />
            </a>
            <a class="header--right__icon" href="#">
              <img src="../assets/icon/sub-photo.svg" alt="icon-zoom" />
            </a>
          </div>
        </div>

        
    
      </section>
    </div>
  );
};

export default Header;
