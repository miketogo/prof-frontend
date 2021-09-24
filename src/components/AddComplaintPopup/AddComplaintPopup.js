import React from 'react';



import close from '../../images/close.svg'
import Preloader from '../Preloader/Preloader';

import plus from '../../images/plus.svg'
import tick from '../../images/select-tick.svg'

import './AddComplaintPopup.css';

function AddComplaintPopup(props) {
  const [textValue, setTextValue] = React.useState('');
  const [fileValue, setFileValue] = React.useState(undefined);
  const [textValidity, setTextValidity] = React.useState({});
  const [fileValidity, setFileValidity] = React.useState({});
  function handleClose() {
    setFileValue(undefined)
    setTextValue('')
    setTextValidity({
      errorMassage: '',
      validState: false
    });
    setFileValidity({
      errorMassage: '',
      validState: false
    });
    props.handleAddComplaintCloseClick()
  }
  function handleTextChange(e) {
    setTextValue(e.target.value);
    setTextValidity({
      errorMassage: e.target.validationMessage,
      validState: e.target.validity.valid
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setFileValidity({
      errorMassage: '',
      validState: false
    });
    // Запрещаем браузеру переходить по адресу формы
    if (fileValue) {
      props.handleAddComplaint(fileValue, textValue)
      setFileValue(undefined)
      setTextValue('')
    } else {
      props.handleAddComplaint(undefined, textValue)
      setFileValue(undefined)
      setTextValue('')
    }




    // console.log(data.get('image'), data.get('text'))


  };
  // function handleFileAdd(e) {

  //   console.log(e.target.files)
  // }
  function handleChange(file) {

    setFileValidity({
      errorMassage: '',
      validState: false
    });
    if ((file.size && file.size / 1024 / 1024) > 10) {

      setFileValidity({
        errorMassage: 'Максимальынй размер файла 10мб.',
        validState: false
      });
    } else {
      // if (!file.type) {
      //   setFileValidity({
      //     errorMassage: '',
      //     validState: true
      //   });
      //   setFileValue(file)
      // } else {
      //   setFileValidity({
      //     errorMassage: '',
      //     validState: true
      //   });
      //   new Compressor(file, {
      //     maxWidth: 1280,
      //     quality: 0.8, // 0.6 can also be used, but its not recommended to go below.
      //     success: (compressedResult) => {
      //       console.log(compressedResult)
      //       // compressedResult has the compressed file.
      //       // Use the compressed file to upload the images to your server.
      //       setFileValue(compressedResult)
      //     },
      //   });
      // }
      setFileValidity({
        errorMassage: '',
        validState: true
      });
      setFileValue(file)

    }







  }

  return (
    <>
      <div className={`add-complaint-popup ${props.isAddComplaintOpen ? 'add-complaint-popup_active' : ''}`}>
        <form className="add-complaint-popup__container" encType="multipart/form-data" onSubmit={handleSubmit}>
          {props.isPreloaderVisible ? <Preloader /> :
            <>
              <img className="add-complaint-popup__close" src={close} alt="Закрыть" onClick={handleClose}></img>
              <h2 className="add-complaint-popup__title">Новая жалоба</h2>
              <div className="add-complaint-popup__input-container">
                <p className="add-complaint-popup__input-title">Опишите вашу проблему</p>
                <textarea className="add-complaint-popup__input" name="text" type="text" required value={textValue} onChange={handleTextChange} maxLength="250"></textarea>
                <span className="add-complaint-popup__error">{textValidity.errorMassage}</span>
              </div>
              <p className="add-complaint-popup__custom-input-title">Добавьте фотографию (необязательно)</p>
              <div className="add-complaint-popup__custom-input-file-container">
                <label className={`add-complaint-popup__custom-input-file ${fileValidity.validState ? 'add-complaint-popup__custom-input-file_active' : ''} ${fileValidity.errorMassage ? 'add-complaint-popup__custom-input-file_error' : ''} `} htmlFor="file-upload">
                  <img className={`add-complaint-popup__plus ${fileValidity.errorMassage ? 'add-complaint-popup__plus_error' : ''}`} alt="добавить картинку" src={fileValidity.validState ? tick : plus}></img>
                  <input className="add-complaint-popup__input-file" id="file-upload" name="file" accept="image/png, image/jpg, image/jpeg, image/heic" type="file" onChange={(e) => handleChange(e.target.files[0])}></input>

                </label>

                <p className="add-complaint-popup__filename">{fileValidity.validState && fileValue && fileValue.name}</p>
                <span className="add-complaint-popup__error">{!fileValidity.validState && fileValidity.errorMassage}</span>
              </div>
              <span className="api-error">{props.apiErrorMessage}</span>
              <button type="submit" className={`add-complaint-popup__submit-button ${(textValidity.validState) ? "add-complaint-popup__submit-button_active" : "add-complaint-popup__submit-button_disabled"}`} disabled={(textValidity.validState) ? false : true}>Отправить</button>
            </>}
        </form>
        <div className={`add-complaint-popup_bg ${props.isAddComplaintOpen ? 'add-complaint-popup_bg_active' : ''}`} onClick={props.isPreloaderVisible ? '' : handleClose}> </div>
      </div>

    </>
  )
}

export default AddComplaintPopup;
