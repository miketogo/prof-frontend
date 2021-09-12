import React from 'react';

import close from '../../images/close.svg'
import Preloader from '../Preloader/Preloader';


import edit from '../../images/edit-icon.svg'
import arrow from '../../images/arrow-icon.svg'

import './AppealPopup.css';

function AppealPopup(props) {
  const [isFulltext, setFulltext] = React.useState(false);
  const [isLogsOpen, setLogsOpen] = React.useState(false);

  function handleClose() {
    setFulltext(false)
    props.handleAppealCloseClick()
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
  function handleEditStatus() {
    props.handleChangeAppealStatusOpenClick()
  }
  function nohandleEditStatus() {

  }

  let status
  if (props.selectAppeal !== null && props.selectAppeal.status === 'waiting') {
    status = 'В ожидании'
  } else if (props.selectAppeal !== null && props.selectAppeal.status === 'in_work') {
    status = 'В работе'
  } else if (props.selectAppeal !== null && props.selectAppeal.status === 'done') {
    status = 'Выполнено'
  } else if (props.selectAppeal !== null && props.selectAppeal.status === 'rejected') {
    status = 'Отклонено'
  }

  function handleDateClick() {
    if (props.selectAppeal !== null && props.selectAppeal.adminsChangedStatus) {
      handleLogsOpen()
    }

  }

  function handleLogsOpen() {
    if (isLogsOpen) {
      setLogsOpen(false)
    } else {
      setLogsOpen(true)
    }
  }
  return (
    <>
      <div className={`appeal-popup ${props.selectAppeal !== null ? 'appeal-popup_active' : ''}`}>
        <form className={`appeal-popup__container  ${props.selectAppeal !== null && props.selectAppeal.status === "done" && "appeal-popup__container_green"} ${props.selectAppeal !== null && props.selectAppeal.status === "rejected" && "appeal-popup__container_red"}`} onSubmit={handleSubmit}>
          {props.isPreloaderVisible ? <Preloader /> :
            <>
              <img className="appeal-popup__close" src={close} alt="Закрыть" onClick={handleClose}></img>
              <h2 className="appeal-popup__title">{props.selectAppeal !== null && props.selectAppeal._id}</h2>
              <div className="appeal-popup__status-date-container">
                <p onClick={props.selectAppeal !== null && (props.selectAppeal.status === 'done' || props.selectAppeal.status === 'rejected') ? nohandleEditStatus : handleEditStatus} className="appeal-popup__status-text">{props.selectAppeal !== null && status}{props.selectAppeal !== null && (props.selectAppeal.status === 'done' || props.selectAppeal.status === 'rejected') ? <></> : <img className="appeal-popup__edit" src={edit} alt="Редактировать" ></img>}</p>

                {props.selectAppeal !== null && props.selectAppeal.status !== 'waiting' &&  props.selectAppeal.adminsChangedStatus && props.selectAppeal.adminsChangedStatus.length !== 0?
                  <>
                    <div className={`appeal-popup__bgblacker ${isLogsOpen ? 'appeal-popup__bgblacker_active' : ''}`} onClick={handleLogsOpen}></div>
                    <p onClick={handleDateClick} className="appeal-popup__date-text">{props.selectAppeal !== null && props.selectAppeal.dateOfRequest}


                    </p>
                    {isLogsOpen &&
                        <div className="appeal-popup__date-logs-container" onClick={handleDateClick}>
                          {props.selectAppeal !== null && props.selectAppeal.adminsChangedStatus && props.selectAppeal.adminsChangedStatus.length !== 0 ?
                            props.selectAppeal.adminsChangedStatus.map((item, i) => (

                              <div className="appeal-popup__date-logs-text-container" key={item._id}>
                                <div className="appeal-popup__date-log-text-container">
                                  <p className="appeal-popup__date-log-text">Дата изменения</p>
                                  <p className="appeal-popup__date-log-text">{item.time}</p>
                                </div>
                                <div className="appeal-popup__date-log-text-container">
                                  <p className="appeal-popup__date-log-text">Администратор</p>
                                  <p className="appeal-popup__date-log-text">{item.admin_id.lastname} {item.admin_id.firstname.substring(0, 1)}. {item.admin_id.patronymic !== "Отсутствует" && `${item.admin_id.patronymic.substring(0, 1)}.`}</p>
                                </div>
                                {item.appeal_new_status === "rejected" &&
                                  <div className="appeal-popup__date-log-text-container">
                                    <p className="appeal-popup__date-log-text">Причина отклонения</p>
                                    <p className="appeal-popup__date-log-text">{props.selectAppeal !== null && props.selectAppeal.rejectReason}</p>
                                  </div>
                                }
                                <div className="appeal-popup__date-log-text-container">
                                  <p className="appeal-popup__date-log-text">{item.appeal_previous_status === "waiting" && "В ожидании"}{item.appeal_previous_status === "in_work" && "В работе"}{item.appeal_previous_status === "done" && "Выполнено"}{item.appeal_previous_status === "rejected" && "Отклонено"}</p>
                                  <img className="appeal-popup__arrow" src={arrow} alt="->" ></img>
                                  <p className="appeal-popup__date-log-text">{item.appeal_new_status === "waiting" && "В ожидании"}{item.appeal_new_status === "in_work" && "В работе"}{item.appeal_new_status === "done" && "Выполнено"}{item.appeal_new_status === "rejected" && "Отклонено"}</p>
                                </div>

                              </div>))
                            : <></>
                          }

                        </div>
                      }
                  </>
                  :
                  <p className="appeal-popup__date-text">{props.selectAppeal !== null && props.selectAppeal.dateOfRequest}</p>
                }
              </div>
              <div className="appeal-popup__text-container">
                <p className={`appeal-popup__text ${isFulltext ? 'appeal-popup__text_full' : 'appeal-popup__text_crop'}`}>{props.selectAppeal !== null && props.selectAppeal.text}</p>
                {(props.selectAppeal !== null && props.selectAppeal.text.length > 26) ? <p className="appeal-popup__open-fulltext" onClick={handleOpenFullText}>{isFulltext ? 'Свернуть' : 'Раскрыть полный текст'}</p> : <></>}
              </div>
              <div className="appeal-popup__info-container">
                <p className="appeal-popup__info-name">Дом</p>
                <p className="appeal-popup__info-text">{props.selectAppeal !== null && props.selectAppeal.owner !== null && props.selectAppeal.owner.house.name}</p>
              </div>
              <div className="appeal-popup__info-container">
                <p className="appeal-popup__info-name">Расположение</p>
                <p className="appeal-popup__info-text">{props.selectAppeal !== null && props.selectAppeal.owner !== null && props.selectAppeal.owner.entranceNumber} парадная, {props.selectAppeal !== null && props.selectAppeal.owner !== null && props.selectAppeal.owner.flat} квартира</p>
              </div>
              <div className="appeal-popup__info-container">
                <p className="appeal-popup__info-name">Телефон</p>
                <p className="appeal-popup__info-text">{props.selectAppeal !== null && props.selectAppeal.owner !== null && props.selectAppeal.owner.phone}</p>
              </div>
              <div className="appeal-popup__info-container">
                <p className="appeal-popup__info-name">Email</p>
                <p className="appeal-popup__info-text">{props.selectAppeal !== null && props.selectAppeal.owner !== null && props.selectAppeal.owner.email}</p>
              </div>
              <div className="appeal-popup__info-container">
                <p className="appeal-popup__info-name">Отправитель</p>
                <p className="appeal-popup__info-text">{props.selectAppeal !== null && props.selectAppeal.owner !== null && props.selectAppeal.owner.fullname}</p>
              </div>
              {(props.selectAppeal !== null && props.selectAppeal.image !== 'not image') ?
                <img className="appeal-popup__image" src={props.selectAppeal !== null && `https://api-prof.ru${props.selectAppeal.image}`} alt="Фото обращения" onClick={handleClose} />
                :
                <></>}

            </>}
        </form>
        <div className={`appeal-popup_bg ${props.selectAppeal !== null ? 'appeal-popup_bg_active' : ''}`} onClick={props.isPreloaderVisible ? '' : handleClose}> </div>
      </div>

    </>
  )
}

export default AppealPopup;
