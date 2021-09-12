import '../../index.css';
import './Navigation.css';
import React from "react";
import { NavLink } from 'react-router-dom';





function Navigation(props) {
  return (
    <div className="navigation">
      {props.isAdmin?
      <>
      <NavLink className="navigation__link" activeClassName="navigation__link_active" to='/'>Панель управления</NavLink>
      <NavLink className="navigation__link" activeClassName="navigation__link_active" to='/contacts'>Контакты</NavLink>
      </>
      :
      <>
      <NavLink className="navigation__link" activeClassName="navigation__link_active" to='/'>Личный кабинет</NavLink>
      <NavLink className="navigation__link" activeClassName="navigation__link_active" to='/contacts'>Контакты</NavLink>
      </>}
    </div>
  );
}

export default Navigation;
