import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import complaitIcon from '../../images/complait-icon.svg'
import statementIcon from '../../images/statement-icon.svg'
import counterIcon from '../../images/counter-icon.svg'
import telegramIcon from '../../images/telegram-icon.svg'


import './UserCab.css';

function UserCab(props) {

  return (
    <>
    <Header isAdmin={props.isAdmin} handleMenuOpenClick={props.handleMenuOpenClick} loggedIn={props.loggedIn} />
    <div className="usercab">

      <h2 className="usercab__title">Здраствуйте, {props.currentUser.firstname}</h2>
      <div className="usercab__links">
        <Link to="/my-complaints" className="usercab__link">
          <img className="usercab__link-icon" alt="Иконка жалоб" src={complaitIcon}></img>
          <h2 className="usercab__link-title">Мои жалобы</h2>
        </Link>
        <Link to="/my-statements" className="usercab__link" >
          <img className="usercab__link-icon usercab__link-icon_type_statement" alt="Иконка справок" src={statementIcon}></img>
          <h2 className="usercab__link-title">Мои справки</h2>
        </Link>
        <Link to="/my-counters" className="usercab__link" >
          <img className="usercab__link-icon" alt="Иконка счётчиков" src={counterIcon}></img>
          <h2 className="usercab__link-title">Мои счётчики</h2>
        </Link>
        <a target="_blank"  rel="noreferrer"  href="https://t.me/prof_uk_bot" className="usercab__link" >
          <img className="usercab__link-icon" alt="Иконка телеграм" src={telegramIcon}></img>
          <h2 className="usercab__link-title">Бот телеграм</h2>
        </a>
      </div>

    </div>
    </>
  )
}

export default UserCab;
