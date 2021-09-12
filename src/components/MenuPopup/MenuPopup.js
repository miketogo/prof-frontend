import '../../index.css';
import './MenuPopup.css';
import React from "react";
import { Link,  NavLink } from 'react-router-dom';

import profileIcon from '../../images/profile-icon.svg'




function MenuPopup(props) {
  return (
    <div className={`menu-popup ${props.isMenuPopupOpen ? 'menu-popup_active' : ''}`}>
      <div className={`menu-popup__container ${props.isMenuPopupOpen ? 'menu-popup__container_active' : ''}`}>
        <div className="menu-popup__close" onClick={props.handleMenuCloseClick}></div>
        <nav className="menu-popup__link-container">
        {props.isAdmin?
        <>
        <NavLink exact to="/"  className="menu-popup__link" activeClassName="menu-popup__link_active" onClick={props.handleMenuCloseClick}>Панель управления</NavLink>
        <NavLink to="/all-appeals"  className="menu-popup__link" activeClassName="menu-popup__link_active" onClick={props.handleMenuCloseClick}>Обращения</NavLink>
        <NavLink to="/all-counters"  className="menu-popup__link" activeClassName="menu-popup__link_active" onClick={props.handleMenuCloseClick}>Счётчики</NavLink>
        <NavLink to="/survey-results"  className="menu-popup__link" activeClassName="menu-popup__link_active" onClick={props.handleMenuCloseClick}>Результаты опроса</NavLink>
        <NavLink to="/all-users"  className="menu-popup__link" activeClassName="menu-popup__link_active" onClick={props.handleMenuCloseClick}>Пользователи</NavLink>
        <NavLink to="/contacts"  className="menu-popup__link" activeClassName="menu-popup__link_active" onClick={props.handleMenuCloseClick}>Контакты</NavLink>
        </>
        :
        <>
        <NavLink exact to="/"  className="menu-popup__link" activeClassName="menu-popup__link_active" onClick={props.handleMenuCloseClick}>Личный кабинет</NavLink>
        <NavLink to="/my-complaints"  className="menu-popup__link" activeClassName="menu-popup__link_active" onClick={props.handleMenuCloseClick}>Отправить жалобу</NavLink>
        <NavLink to="/my-statements"  className="menu-popup__link" activeClassName="menu-popup__link_active" onClick={props.handleMenuCloseClick}>Заказать справку</NavLink>
        <NavLink to="/my-counters"  className="menu-popup__link" activeClassName="menu-popup__link_active" onClick={props.handleMenuCloseClick}>Мои счётчики</NavLink>
        <NavLink to="/contacts"  className="menu-popup__link" activeClassName="menu-popup__link_active" onClick={props.handleMenuCloseClick}>Контакты</NavLink>
        </>
        }

        <Link to="/profile" className="menu-popup__profile-button-container" onClick={props.handleMenuCloseClick}>
        <img alt="Иконка профиля" src={profileIcon} className="menu-popup__profile-icon" />
        <p className="menu-popup__profile-text">Аккаунт</p>
        </Link>
        </nav>
      </div>
      <div className={`menu-popup__background ${props.isMenuPopupOpen ? 'menu-popup__background_active' : ''}`} onClick={props.handleMenuCloseClick}>

      </div>
    </div>
  );
}

export default MenuPopup;
