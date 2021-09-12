import React from 'react';

import close from '../../images/close.svg'
import Preloader from '../Preloader/Preloader';


import './ChangeAppealStatusPopup.css';

function ChangeAppealStatusPopup(props) {

  const [selectValue, setSelectValue] = React.useState('');
  const [reasonValue, setReasonValue] = React.useState(undefined);
  const [selectValidity, setSelectValidity] = React.useState({});
  React.useEffect(() => {
    if (props.selectAppeal !== null) {
      if (props.selectAppeal !== null && props.selectAppeal.status === 'waiting') {
        setSelectValue('in_work')
      }
      if (props.selectAppeal !== null && props.selectAppeal.status === 'in_work') {
        setSelectValue('done')
      }
      if (props.selectAppeal !== null && props.selectAppeal.status === 'rejected') {
        setSelectValue('')
      }
      if (props.selectAppeal !== null && props.selectAppeal.status === 'done') {
        setSelectValue('')
      }
      setSelectValidity({
        errorMassage: '',
        validState: true
      });
    }



  }, [props.selectAppeal]);



  function handleClose() {
    setReasonValue(undefined)
    setSelectValidity({
      errorMassage: '',
      validState: true
    });
    props.handleChangeAppealStatusCloseClick()
  }
  function handleSelectChange(e) {
    setSelectValue(e.target.value);
    setSelectValidity({
      errorMassage: e.target.validationMessage,
      validState: e.target.validity.valid
    });
  }
  function handleReasonChange(e) {
    if (e.target.value.length === 0){
      setReasonValue(undefined);
    } else {
      setReasonValue(e.target.value);
    }


  }
  function handleSubmit(e) {
    e.preventDefault();
    // Запрещаем браузеру переходить по адресу формы
    props.handleChangeAppealStatus(selectValue, reasonValue)

    setReasonValue(undefined)
    setSelectValidity({
      errorMassage: '',
      validState: true
    });
    // console.log(data.get('image'), data.get('text'))


  };



  return (
    <>
      <div className={`add-complaint-popup ${props.isChangeStatusClicked ? 'add-complaint-popup_active' : ''}`}>
        <form className="add-complaint-popup__container" encType="multipart/form-data" onSubmit={handleSubmit}>
          {props.isPreloaderVisible ? <Preloader /> :
            <>
              <img className="add-complaint-popup__close" src={close} alt="Закрыть" onClick={handleClose}></img>
              <h2 className="add-complaint-popup__title">Изменить статус</h2>
              <div className="add-complaint-popup__input-container">
                <p className="add-complaint-popup__input-title">Выберите статус</p>
                <select className="register__input" name="statement" required value={selectValue} onChange={handleSelectChange}>
                  {(props.selectAppeal !== null && (props.selectAppeal.status === 'waiting' || props.selectAppeal.status === 'done' || props.selectAppeal.status === 'rejected' || props.selectAppeal.status === 'in_work')) ? <></> : <option className="register__select-item" value="waiting" >В ожидании</option>}
                  {(props.selectAppeal !== null && (props.selectAppeal.status === 'in_work' || props.selectAppeal.status === 'rejected' || props.selectAppeal.status === 'done')) ? <></> : <option className="register__select-item" value="in_work" >В работе</option>}
                  {(props.selectAppeal !== null && props.selectAppeal.status === 'rejected') ? <></> : <option className="register__select-item" value="rejected" >Отклонено</option>}
                  {(props.selectAppeal !== null && props.selectAppeal.status === 'done') ? <></> : <option className="register__select-item" value="done" >Выполнено</option>}
                </select>

                <span className="add-complaint-popup__error">{selectValidity.errorMassage}</span>
              </div>
              {selectValue !== '' && selectValue === 'rejected' &&
                  <div className="add-complaint-popup__input-container">
                    <p className="add-complaint-popup__input-title">Введите причину отказа или оставьте поле пустым</p>
                    <input className="register__input" name="statement"  value={reasonValue} onChange={handleReasonChange}></input>
                  </div>
                }
              <span className="api-error">{props.apiErrorMessage}</span>
              <button type="submit" className={`add-complaint-popup__submit-button ${(selectValidity.validState) ? "add-complaint-popup__submit-button_active" : "add-complaint-popup__submit-button_disabled"}`} disabled={(selectValidity.validState) ? false : true}>Изменить</button>
            </>}
        </form>
        <div className={`add-complaint-popup_bg ${props.isChangeStatusClicked ? 'add-complaint-popup_bg_active' : ''}`} onClick={props.isPreloaderVisible ? '' : handleClose}> </div>
      </div>

    </>
  )
}

export default ChangeAppealStatusPopup;
