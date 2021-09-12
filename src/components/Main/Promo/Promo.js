import '../../../index.css';
import './Promo.css';
import React from "react";


import logo from '../../../images/promo-logo.svg'





function Promo(props) {
  return (
    <div className="promo">
      <h1 className="promo__title">Мы – управляющая компания «Профессионал»</h1>
      <img alt="Логотип" src={logo} className="promo__logo" />
    </div>
  );
}

export default Promo;
