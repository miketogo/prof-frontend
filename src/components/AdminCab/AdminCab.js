import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import complaitIcon from '../../images/complait-icon.svg'

import emailIcon from '../../images/email-icon.svg'
import counterIcon from '../../images/counter-icon.svg'
import usersIcon from '../../images/users-icon.svg'
import surveyIcon from '../../images/survey-icon.svg'
import home from '../../images/home-icon.svg'
import telegramIcon from '../../images/telegram-icon.svg'



import './AdminCab.css';

function AdminCab(props) {

  return (
    <>
      <Header isAdmin={props.isAdmin} handleMenuOpenClick={props.handleMenuOpenClick} loggedIn={props.loggedIn} />
      <div className="usercab">

        <h2 className="usercab__title">Панель администратора</h2>
        <div className="usercab__links">
          <Link to="/all-appeals" className="usercab__link">
            <img className="usercab__link-icon" alt="Иконка жалоб" src={complaitIcon}></img>
            <h2 className="usercab__link-title">Обращения</h2>
          </Link>
          <Link to="/all-counters" className="usercab__link" >
            <img className="usercab__link-icon" alt="Иконка счётчиков" src={counterIcon}></img>
            <h2 className="usercab__link-title">Счётчики</h2>
          </Link>
          <Link to="/survey-results" className="usercab__link" >
            <img className="usercab__link-icon" alt="Иконка опроса" src={surveyIcon}></img>
            <h2 className="usercab__link-title">Опрос</h2>
          </Link>
          <Link to="/all-users" className="usercab__link" >
            <img className="usercab__link-icon usercab__link-icon_type_statement" alt="Иконка пользователей" src={usersIcon}></img>
            <h2 className="usercab__link-title">Пользователи</h2>
          </Link>
          <Link to="/emails-sent" className="usercab__link" >
            <img className="usercab__link-icon" alt="Иконка email" src={emailIcon}></img>
            <h2 className="usercab__link-title">Email рассылки</h2>
          </Link>
          <Link to="/add-house" className="usercab__link" >
            <img className="usercab__link-icon" alt="Иконка добавить дом" src={home}></img>
            <h2 className="usercab__link-title">Добавить дом</h2>
          </Link>

          <a target="_blank" rel="noreferrer" href="https://t.me/prof_uk_bot" className="usercab__link" >
            <img className="usercab__link-icon" alt="Иконка телеграм" src={telegramIcon}></img>
            <h2 className="usercab__link-title">Бот телеграм</h2>
          </a>
        </div>

      </div>
    </>
  )
}

export default AdminCab;
