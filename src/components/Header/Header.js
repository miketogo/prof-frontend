import '../../index.css';
import './Header.css';
import React from "react";
import { Link } from 'react-router-dom';

import logo from '../../images/logo-header.svg'
import Navigation from '../Navigation/Navigation';
import profileIcon from '../../images/profile-icon.svg'


function Header(props) {
  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <img alt="Логотип" src={logo} className="header__logo-img"/>
      </Link>
      {props.loggedIn ? (
        <>
          <Navigation  isAdmin={props.isAdmin}/>
          <Link to="/profile" className="header__profile-button-container">
            <img alt="Иконка профиля" src={profileIcon} className="header__profile-icon" />
            <p className="header__profile-text">Аккаунт</p>
          </Link>
          <div className="header__menu-container" onClick={props.handleMenuOpenClick}>
            <div className="header__menu">
              <span className="header__menu-line"></span>
              <span className="header__menu-line"></span>
              <span className="header__menu-line"></span>
            </div>
          </div>
        </>
      ) : (
        <div className="header__links">
          <Link className="header__reg-link" to="/signup">Регистрация</Link>
          <Link className="header__auth-link" to="/signin">Войти</Link>
        </div>
      )}


    </div>
  );
}

export default Header;
