import '../../index.css';
import './Main.css';
import React from "react";


import Header from '../Header/Header';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import WhyUs from './WhyUs/WhyUs';
import Survey from './Survey/Survey';






function Main(props) {
  return (
    <>
    <Header isAdmin={props.isAdmin} handleMenuOpenClick={props.handleMenuOpenClick} loggedIn={props.loggedIn}/>
    <div className="main">
      <Promo />
      <NavTab />
      <AboutProject screenWidth={props.screenWidth} />
      <WhyUs screenWidth={props.screenWidth} />
      <Survey />

    </div>

    </>

  );
}

export default Main;
