import '../../index.css';
import './Profile.css';
import React from "react";
import { withRouter, useHistory } from 'react-router-dom';



import Header from '../Header/Header';



function Profile(props) {







  const history = useHistory();



  function handleExit() {
    props.setLoggedIn(false)
    localStorage.removeItem('jwt');
    localStorage.removeItem('_id');
    localStorage.removeItem('email');
    history.push('/signin');
  }

  return (
    <>
      <Header isAdmin={props.isAdmin} handleMenuOpenClick={props.handleMenuOpenClick} loggedIn={props.loggedIn} />
      <div className="profile">
        <h2 className="profile__greeting">Здравствуйте, {props.currentUser.firstname}</h2>

        <>
          {!props.isEditProfileClicked ? (
            <>
              <div className="profile__form" name="profile">
                <div className="profile__container">
                  <div className="profile__input-container">
                    <p className="profile__input-title">ФИО</p>
                    <p className="profile__input">{props.currentUser.fullname}</p>
                  </div>
                </div>
                <div className="profile__container">
                  <div className="profile__input-container">
                    <p className="profile__input-title">E-mail</p>
                    <p className="profile__input">{props.currentUser.email}</p>
                  </div>
                </div>
                <div className="profile__container">
                  <div className="profile__input-container">
                    <p className="profile__input-title">Телеграм</p>
                    <a className="profile__input" target="_blank" rel="noreferrer" href="https://t.me/prof_uk_bot">{props.currentUser.telegram_id && props.currentUser.telegram_id !== '' ? "Привязан" : "Подключить" }</a>
                  </div>
                </div>
                <div className="profile__container">
                  <div className="profile__input-container">
                    <p className="profile__input-title">Телефон</p>
                    <p className="profile__input">{props.currentUser.phone}</p>
                  </div>
                </div>
                <div className="profile__container">
                  <div className="profile__input-container">
                    <p className="profile__input-title">Адресс</p>
                    <p className="profile__input">{props.currentUser.house.address}, кв. {props.currentUser.flat}, парадная {props.currentUser.entranceNumber}</p>
                  </div>
                </div>
              </div>
              <p className="profile__good-massage">{props.profileMessage}</p>

              <div className="profile__auth-text-container">
                <p className="profile__exit" to='/signin' onClick={handleExit}>Выйти из аккаунта</p>
              </div>
            </>
          ) : <></>}
        </>




      </div>
    </>

  );
}

export default withRouter(Profile);
