import '../../index.css';
import './Login.css';
import React from "react";
import { Link } from 'react-router-dom';
import validator from 'validator'

import logo from '../../images/logo-header.svg'



function Login(props) {
  const [emailValue, setEmailValue] = React.useState('');
  const [emailValidity, setEmailValidity] = React.useState({});
  const [passValue, setPassValue] = React.useState('');
  const [passValidity, setPassValidity] = React.useState({});
  let regEmail = localStorage.getItem('regEmail');
  React.useEffect(() => {
    if (regEmail) {

      setEmailValue(regEmail)

    }
  }, [regEmail])
  function handleEmailChange(e) {
    setEmailValue(e.target.value);
    if (validator.isEmail(e.target.value)) {
      setEmailValidity({
        errorMassage: '',
        validState: true
      })
    } else {
      setEmailValidity({
        errorMassage: (!e.target.validity.valid ? e.target.validationMessage : 'Введите валидный email'),
        validState: false
      })
    }

    ;
  }
  function handlePassChange(e) {
    setPassValue(e.target.value);
    setPassValidity({
      errorMassage: e.target.validationMessage,
      validState: e.target.validity.valid
    });
  }
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    props.onLogin(emailValue, passValue)
  };
  return (
    <div className="login">
      <Link className="login__logo" to="/">
      <img  alt="Логотип" src={logo}></img>
      </Link>
      <h2 className="login__greeting">Рады видеть!</h2>
      <form className="login__form" name="login" onSubmit={handleSubmit}>
        <div className="login__input-container">
          <p className="login__input-title">E-mail</p>
          <input className="login__input" name="email" type="email" required value={emailValue} onChange={handleEmailChange}></input>
          <span className="login__error">{emailValidity.errorMassage}</span>
        </div>
        <div className="login__input-container">
          <p className="login__input-title">Пароль</p>
          <input className="login__input" name="password" type="password" required minLength='8' value={passValue} onChange={handlePassChange}></input>
          <span className="login__error">{passValidity.errorMassage}</span>
        </div>

        <span className="login__api-error">{props.apiErrorMessage}</span>

        <button type="submit" className={`login__submit-button ${(emailValidity.validState && passValidity.validState) ? "login__submit-button_active" : "login__submit-button_disabled"}`} disabled={(emailValidity.validState && passValidity.validState) ?  false :  true}>Войти</button>
        <div className="login__auth-text-container">
          <p className="login__auth-text">Ещё не зарегистрированы? <Link className="login__auth-link" to='/signup'>Регистрация</Link></p>

        </div>
      </form>
    </div>
  );
}

export default Login;
