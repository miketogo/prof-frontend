import React from 'react';

import close from '../../images/close.svg'
import Preloader from '../Preloader/Preloader';

import './UpdateMetersPopup.css';

function UpdateMetersPopup(props) {
  const [hotValue, setHotValue] = React.useState('');
  const [coldValue, setColdValue] = React.useState('');
  const [hotValidity, setHotValidity] = React.useState({});
  const [coldValidity, setColdValidity] = React.useState({});



  function handleClose() {
    setColdValue('')
    setColdValidity({})
    setHotValue('')
    setHotValidity({})
    props.handleUpdateMetersCloseClick()
  }
  function handleHotChange(e) {

    let inputValue = e.target.value.replace(/\D/g, '')
    // let selectionStart = e.target.selectionStart
    if (!inputValue) {
      setHotValue('')
      setHotValidity({
        errorMassage: 'Это поле не может быть пустым',
        validState: false
      })
    }


    if (e.target.value.match(/[a-zA-Zа-яА-ЯёЁ\D]/g)) {
      setHotValue(inputValue)
      setHotValidity({
        errorMassage: 'Можно вводить только цифры',
        validState: false
      })
    }
    else if (Number(inputValue) <= 0 && inputValue){
      setHotValue('')
      setHotValidity({
        errorMassage: 'Показания счётчиков не могут начинаться с нуля',
        validState: false
      })
    }

    else {
      setHotValue(inputValue);
      setHotValidity({
        errorMassage: e.target.validationMessage,
        validState: e.target.validity.valid
      });
    }
  }
  function handleColdChange(e) {
    let inputValue = e.target.value.replace(/\D/g, '')
    // let selectionStart = e.target.selectionStart
    if (!inputValue) {
      setColdValue('')
      setColdValidity({
        errorMassage: 'Это поле не может быть пустым',
        validState: false
      })
    }if (e.target.value.match(/[a-zA-Zа-яА-ЯёЁ\D]/g)) {
      setColdValue(inputValue)
      setColdValidity({
        errorMassage: 'Можно вводить только цифры',
        validState: false
      })
    }
    else if (Number(inputValue) <= 0 && inputValue){
      setColdValue('')
      setColdValidity({
        errorMassage: 'Показания счётчиков не могут начинаться с нуля',
        validState: false
      })
    }

    else {
      setColdValue(inputValue);
      setColdValidity({
        errorMassage: e.target.validationMessage,
        validState: e.target.validity.valid
      });
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    // Запрещаем браузеру переходить по адресу формы
    props.handleUpdateMeters(hotValue, coldValue)


    // console.log(data.get('image'), data.get('text'))


  };


  return (
    <>
      <div className={`add-complaint-popup ${props.isUpdateMetersOpen ? 'add-complaint-popup_active' : ''}`}>
        <form className="add-complaint-popup__container" encType="multipart/form-data" onSubmit={handleSubmit}>
          {props.isPreloaderVisible ? <Preloader /> :
            <>
              <img className="add-complaint-popup__close" src={close} alt="Закрыть" onClick={handleClose}></img>
              <h2 className="add-complaint-popup__title">Обновить показания</h2>
              <div className="add-complaint-popup__input-container">
                <p className="add-complaint-popup__input-title">Введите новые показания ГВС</p>
                <input className="register__input" name="statement" placeholder={(props.currentUser && props.currentUser.meterReadings.length > 0)? props.currentUser.meterReadings[props.currentUser.meterReadings.length - 1].hotWaterSupply : ''} required value={hotValue} onChange={handleHotChange}></input>
                <span className="add-complaint-popup__error">{hotValidity.errorMassage}</span>
              </div>
              <div className="add-complaint-popup__input-container">
                <p className="add-complaint-popup__input-title">Введите новые показания ХВС</p>
                <input className="register__input" name="statement" placeholder={(props.currentUser && props.currentUser.meterReadings.length > 0)? props.currentUser.meterReadings[props.currentUser.meterReadings.length - 1].coldWaterSupply : ''} required value={coldValue} onChange={handleColdChange}></input>
                <span className="add-complaint-popup__error">{coldValidity.errorMassage}</span>
              </div>
              <span className="api-error">{props.apiErrorMessage}</span>

              <button type="submit" className={`add-complaint-popup__submit-button ${(hotValidity.validState && coldValidity.validState) ? "add-complaint-popup__submit-button_active" : "add-complaint-popup__submit-button_disabled"}`} disabled={(hotValidity.validState && coldValidity.validState) ? false : true}>Обновить</button>}
            </>}
        </form>
        <div className={`add-complaint-popup_bg ${props.isUpdateMetersOpen ? 'add-complaint-popup_bg_active' : ''}`} onClick={props.isPreloaderVisible ? '' : handleClose}> </div>
      </div>

    </>
  )
}

export default UpdateMetersPopup;
