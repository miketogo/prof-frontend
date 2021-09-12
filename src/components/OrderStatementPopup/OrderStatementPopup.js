import React from 'react';

import close from '../../images/close.svg'
import Preloader from '../Preloader/Preloader';



import './OrderStatementPopup.css';

function OrderStatementPopup(props) {
  const [selectValue, setSelectValue] = React.useState('');
  React.useEffect(() => {
    if (props.userAvilibleStatements) {

      setSelectValue(props.userAvilibleStatements[0].value)
      setSelectValidity({
        errorMassage: '',
        validState: true
      });
    }



  }, [props.userAvilibleStatements]);


  const [selectValidity, setSelectValidity] = React.useState({});
  function handleClose() {
    setSelectValidity({
      errorMassage: '',
      validState: true
    });
    props.handleOrderStatementCloseClick()
  }
  function handleSelectChange(e) {
    setSelectValue(e.target.value);
    setSelectValidity({
      errorMassage: e.target.validationMessage,
      validState: e.target.validity.valid
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    // Запрещаем браузеру переходить по адресу формы
    props.handleOrderStatement(selectValue)



  };


  return (
    <>
      <div className={`add-complaint-popup ${props.isOrderStatementOpen ? 'add-complaint-popup_active' : ''}`}>
        <form className="add-complaint-popup__container" encType="multipart/form-data" onSubmit={handleSubmit}>
          {props.isPreloaderVisible ? <Preloader /> :
            <>
              <img className="add-complaint-popup__close" src={close} alt="Закрыть" onClick={handleClose}></img>
              <h2 className="add-complaint-popup__title">Заказать справку</h2>
              <div className="add-complaint-popup__input-container">
                <p className="add-complaint-popup__input-title">Выберите справку</p>
                <select className="register__input" name="statement" required value={selectValue} onChange={handleSelectChange}>
                  {props.userAvilibleStatements && props.userAvilibleStatements.map((item, i) => (
                    <option className="register__select-item" value={item.value} key={item._id + 'statement'} >{item.name}</option>
                  ))}
                </select>
                <span className="add-complaint-popup__error">{selectValidity.errorMassage}</span>
              </div>
              <p className="add-complaint-popup__subtitile">Обращаем ваше внимание на то, что все документы формируются на основе данных, указанных при регистрации.<br />
                Во избежание ошибок проверьте ваши данные.<br /><br />

                Заказчик: {props.currentUser && props.currentUser.lastname} {props.currentUser && props.currentUser.firstname.substring(0,1)}. {props.currentUser && props.currentUser.patronymic !== 'Отсутствует' ? props.currentUser.patronymic.substring(0,1) : ''}.<br />
                Телефон: {props.currentUser && props.currentUser.phone}<br />
                Адрес: {props.currentUser && props.currentUser.house.city}, {props.currentUser && props.currentUser.house.address}, кв. {props.currentUser && props.currentUser.flat}<br />
              </p>
              <span className="api-error">{props.apiErrorMessage}</span>
              <button type="submit" className={`add-complaint-popup__submit-button ${(selectValidity.validState) ? "add-complaint-popup__submit-button_active" : "add-complaint-popup__submit-button_disabled"}`} disabled={(selectValidity.validState) ? false : true}>Заказать</button>}
            </>}
        </form>
        <div className={`add-complaint-popup_bg ${props.isOrderStatementOpen ? 'add-complaint-popup_bg_active' : ''}`} onClick={props.isPreloaderVisible ? '' : handleClose}> </div>
      </div>

    </>
  )
}

export default OrderStatementPopup;
