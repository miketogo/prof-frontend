import React from 'react';

import close from '../../images/close.svg'
import Preloader from '../Preloader/Preloader';




import './UserPopup.css';

function AppealPopup(props) {
  const [isFulltext, setFulltext] = React.useState(false);
  const [isMetersOpen, setMetersOpen] = React.useState(false);

  function handleClose() {
    setFulltext(false)
    setMetersOpen(false)
    props.handleUserCloseClick()
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Запрещаем браузеру переходить по адресу формы



    // console.log(data.get('image'), data.get('text'))


  };

  function handleOpenFullText() {
    if (isFulltext) {
      setFulltext(false)
    } else {
      setFulltext(true)
    }

  }
  function handleMetersClick() {
    if (isMetersOpen) {
      setMetersOpen(false)
    } else {
      setMetersOpen(true)
    }

  }




  return (
    <>
      <div className={`appeal-popup ${props.selectUser !== null ? 'appeal-popup_active' : ''}`}>
        <form className={`appeal-popup__container  `} onSubmit={handleSubmit}>
          {props.isPreloaderVisible ? <Preloader /> :
            <>
              <img className="appeal-popup__close" src={close} alt="Закрыть" onClick={handleClose}></img>
              <h2 className="appeal-popup__title">{props.selectUser !== null && `${props.selectUser.lastname} ${props.selectUser.firstname.substring(0,1)}. ${props.selectUser.patronymic !== "Отсутствует" ? `${props.selectUser.patronymic.substring(0, 1)}.` : ''}`}</h2>
              {isMetersOpen &&

                props.selectUser !== null && props.selectUser.meterReadings && props.selectUser.meterReadings.length > 0 ?
                <>
                <p onClick={handleMetersClick} className="appeal-popup__meter-back">Назад</p>
                <div className="appeal-popup__meter-reverse">
                  {
                    props.selectUser.meterReadings.length > 6 ? props.selectUser.meterReadings.slice(props.selectUser.meterReadings.length - 6, props.selectUser.meterReadings.length - 1).map((item, i) => (

                      <div className="appeal-popup__meter-logs-text-container" key={item._id}>
                        <div className="appeal-popup__meter-log-text-container">
                          <p className="appeal-popup__meter-log-text">Дата </p>
                          <p className="appeal-popup__meter-log-text">{item.time}</p>
                        </div>
                        <div className="appeal-popup__meter-log-text-container">
                          <p className="appeal-popup__meter-log-text">Показания</p>
                          <p className="appeal-popup__meter-log-text">ГВС: {item.hotWaterSupply} | ХВС: {item.coldWaterSupply}</p>
                        </div>


                      </div>))
                    :  props.selectUser.meterReadings.map((item, i) => (

                      <div className="appeal-popup__meter-logs-text-container" key={item._id}>
                        <div className="appeal-popup__meter-log-text-container">
                          <p className="appeal-popup__meter-log-text">Дата </p>
                          <p className="appeal-popup__meter-log-text">{item.time}</p>
                        </div>
                        <div className="appeal-popup__meter-log-text-container">
                          <p className="appeal-popup__meter-log-text">Показания</p>
                          <p className="appeal-popup__meter-log-text">ГВС: {item.hotWaterSupply} | ХВС: {item.coldWaterSupply}</p>
                        </div>


                      </div>))
                    }
                </div>
                </>
                : <>
                  <div className="appeal-popup__text-container">
                    <p className={`appeal-popup__text ${isFulltext ? 'appeal-popup__text_full' : 'appeal-popup__text_crop'}`}>{props.selectUser !== null && `${props.selectUser.lastname} ${props.selectUser.firstname} ${props.selectUser.patronymic !== "Отсутствует" ? `${props.selectUser.patronymic}` : ''}`}</p>
                    {(props.selectUser !== null && props.selectUser.fullname.length > 26) ? <p className="appeal-popup__open-fulltext" onClick={handleOpenFullText}>{isFulltext ? 'Свернуть' : 'Раскрыть полный текст'}</p> : <></>}
                  </div>
                  <div className="appeal-popup__info-container">
                    <p className="appeal-popup__info-name">Дом</p>
                    <p className="appeal-popup__info-text">{props.selectUser !== null && props.selectUser.house !== null && props.selectUser.house.name}</p>
                  </div>
                  <div className="appeal-popup__info-container">
                    <p className="appeal-popup__info-name">Расположение</p>
                    <p className="appeal-popup__info-text">{props.selectUser !== null && props.selectUser.house !== null && props.selectUser.entranceNumber} парадная, {props.selectUser !== null && props.selectUser.flat} кв.</p>
                  </div>
                  <div className="appeal-popup__info-container">
                    <p className="appeal-popup__info-name">Телефон</p>
                    <p className="appeal-popup__info-text">{props.selectUser !== null && props.selectUser.phone}</p>
                  </div>
                  <div className="appeal-popup__info-container">
                    <p className="appeal-popup__info-name">Email</p>
                    <p className="appeal-popup__info-text">{props.selectUser !== null && props.selectUser.email}</p>
                  </div>
                  <div className="appeal-popup__info-container">
                    <p className="appeal-popup__info-name">Email подтверждён</p>
                    <p className="appeal-popup__info-text">{props.selectUser !== null && props.selectUser.emailVerified ? 'Да' : 'Нет'}</p>
                  </div>
                  <div className="appeal-popup__info-container">
                    <p className="appeal-popup__info-name">Телеграм</p>
                    <p className="appeal-popup__info-text">{props.selectUser !== null && props.selectUser.telegram_id && props.selectUser.telegram_id !== '' ? `Привязан id: ${props.selectUser.telegram_id}` : 'Не привязан'}</p>
                  </div>
                  <div className="appeal-popup__info-container">
                    <p className="appeal-popup__info-name">Дата регистрации</p>
                    <p className="appeal-popup__info-text">{props.selectUser !== null && props.selectUser.registrationDate}</p>
                  </div>
                  <div className="appeal-popup__info-container">
                    <p className="appeal-popup__info-name">Показания счётчиков</p>
                    {props.selectUser !== null && props.selectUser.meterReadings && props.selectUser.meterReadings.length > 0 ?
                      <p onClick={handleMetersClick} className="appeal-popup__info-text appeal-popup__info-text_pointer">{props.selectUser !== null && props.selectUser.meterReadings && props.selectUser.meterReadings.length > 0 ? 'Открыть' : 'Нет'}</p>
                      :
                      <p className="appeal-popup__info-text">{props.selectUser !== null && props.selectUser.meterReadings && props.selectUser.meterReadings.length > 0 ? 'Открыть' : 'Нет'}</p>
                    }

                  </div></>


              }





            </>}
        </form>
        <div className={`appeal-popup_bg ${props.selectUser !== null ? 'appeal-popup_bg_active' : ''}`} onClick={props.isPreloaderVisible ? '' : handleClose}> </div>
      </div>

    </>
  )
}

export default AppealPopup;
