import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo-header.svg'

import './EmailNotVerified.css';

function EmailNotVerified(props) {
  const [sendmailDisabled, setSendmailDisabled] = React.useState(false)
  const [sendmailTimer, setSendmailTimer] = React.useState()

  React.useEffect(() => {
      const timer = setInterval(() => {
        if (sendmailTimer === 0) {
          setSendmailDisabled(false)
          setSendmailTimer()
          clearInterval(timer)
        } else {
          setSendmailTimer((sendmailTimer - 1))
          clearInterval(timer)
        }
      }, 1000);
  }, [sendmailTimer]);

  function handleExit() {
    props.setLoggedIn(false)
    localStorage.removeItem('jwt');
  }
  function handleSendMail() {
    if(sendmailDisabled){
      return
    }
    setSendmailDisabled(true)
    setSendmailTimer(31)
    props.sendMailAgain()
  }
  function handleRefresh(){
    window.location.reload();
  }
  return (
    <div className="emailnoverified">
      <Link to="/" className="emailnoverified__logo">
        <img alt="Логотип" src={logo}></img>
      </Link>
      <h3 className="emailnoverified__title">
        Пожалуйста подтвердите Email
      </h3>
      <p className="emailnoverified__text">
        {props.currentUser.firstname}, Вам на почту было отправленно письмо с кнопкой для подтверждения email. Для доступа к личному кабинету необходимо подтвердить адрес электронной почты
        <br />
        <br />
        Если письма нет, проверьте папку “Спам”
        <br />
        <br />
        Если письмо с подтверждением не пришло вы можете <span className={`emailnoverified__sendmail ${sendmailDisabled ? "emailnoverified__sendmail_disabled" : ""}`} onClick={handleSendMail}>запросить новое письмо{sendmailDisabled && <><br /><br /></>}{sendmailDisabled ? `Повторная отправка сообщения станет доступна через ${sendmailTimer} сек` : ""}</span>
      </p>

      <p className="emailnoverified__refresh" onClick={handleRefresh}>Обновить</p>
      <p className="emailnoverified__exit" onClick={handleExit}>Выйти из аккаунта</p>
    </div>
  )
}

export default EmailNotVerified;
