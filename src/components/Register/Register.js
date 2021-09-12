import '../../index.css';
import './Register.css';
import React from "react";
import { Link } from 'react-router-dom';
import validator from 'validator'


import logo from '../../images/logo-header.svg'



function Register(props) {
  const [regStep, setRegStep] = React.useState(1);
  const [emailValue, setEmailValue] = React.useState('');
  const [emailValidity, setEmailValidity] = React.useState({});
  const [passValue, setPassValue] = React.useState('');
  const [passValidity, setPassValidity] = React.useState({});
  const [passCheckValue, setPassCheckValue] = React.useState('');
  const [passCheckValidity, setPassCheckValidity] = React.useState({});




  const [flatValue, setFlatValue] = React.useState('');
  const [flatValidity, setFlatValidity] = React.useState({});
  const [phoneValue, setPhoneValue] = React.useState('');
  const [phoneValidity, setPhoneValidity] = React.useState({});
  const [houseValue, setHouseValue] = React.useState('');

  React.useEffect(() => {
    if (props.houses) {

      setHouseValue(props.houses[0].formValue)
    }



  }, [props.houses]);


  function handleHouseChange(e) {

    setHouseValue(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    let firstname = firstnameValue
    let secondname = secondnameValue
    let patronymic = patronymicValue

    if (!patronymicValue) {
      patronymic = 'Отсутствует'
    }
    let fullname = `${secondname} ${firstname} ${patronymic}`

    props.onRegister(fullname, emailValue, passValue, houseValue, flatValue, phoneValue, setRegStep);
  };
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

  function handleNext() {
    setRegStep(regStep + 1)
  }
  function handleBack() {
    setRegStep(regStep - 1)
  }

  function handleEnter(e) {
    if (e.keyCode === 13) {
      const form = e.target.form;
      const index = Array.prototype.indexOf.call(form, e.target);
      form.elements[index + 1].focus();
      e.preventDefault();
    }
  }
  function handleFormEnter(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  }

  function handleFlatChange(e) {
    let inputValue = e.target.value.replace(/\D/g, '')
    // let selectionStart = e.target.selectionStart
    if (!inputValue) {
      setFlatValue('')
      setFlatValidity({
        errorMassage: 'Это поле не может быть пустым',
        validState: false
      })
    }if (e.target.value.match(/[a-zA-Zа-яА-ЯёЁ\D]/g)) {
      setFlatValue(inputValue)
      setFlatValidity({
        errorMassage: 'Можно вводить только цифры',
        validState: false
      })
    }
    else if (Number(inputValue) <= 0 && inputValue){
      setFlatValue('')
      setFlatValidity({
        errorMassage: 'Номер квартиры не может начинаться с нуля',
        validState: false
      })
    }

    else {
      setFlatValue(inputValue);
      setFlatValidity({
        errorMassage: e.target.validationMessage,
        validState: e.target.validity.valid
      });
    }

  }

  function handlePhoneChange(e) {

    let inputValue = e.target.value.replace(/\D/g, '')
    let formattedInputValue = '';
    // let selectionStart = e.target.selectionStart
    if (!inputValue) {
      setPhoneValue('')
      setPhoneValidity({
        errorMassage: 'Можно вводить только цифры',
        validState: false
      })
    }
    // if (e.target.value.length !== selectionStart) {
    //   window.requestAnimationFrame(() => {
    //     e.target.selectionStart = selectionStart;
    //     e.target.selectionEnd = selectionStart;
    //   });
    //   console.log('red', e.nativeEvent.inputType, selectionStart - 1, selectionStart)
    //   if (e.nativeEvent.inputType === 'deleteContentBackward') {
    //     let redacted = e.target.value.substring(0, selectionStart) + e.target.value.substring(selectionStart, e.target.value.length)
    //     console.log(redacted)
    //     setPhoneValue(redacted)
    //   }
    //   if (e.nativeEvent.inputType === 'deleteContentForward') {
    //     let redacted = e.target.value.substring(0, e.target.selectionEnd) + e.target.value.substring(e.target.selectionEnd, e.target.value.length)
    //     console.log(redacted)
    //     setPhoneValue(redacted)
    //   }
    //   if (e.nativeEvent.inputType === 'insertText') {
    //     if (/\D/g.test(e.nativeEvent.data)) {
    //       setPhoneValue(inputValue)
    //       e.target.selectionStart = selectionStart;
    //       e.target.selectionEnd = selectionStart;
    //       return
    //     }
    //     let redacted = e.target.value.substring(0, e.target.selectionEnd) + e.target.value.substring(e.target.selectionEnd, e.target.value.length)
    //     console.log(redacted)
    //     setPhoneValue(redacted)
    //   }
    //   return;
    // }
    else {
      if (['7', '8', '9'].indexOf(inputValue[0]) > -1) {
        setPhoneValidity({
          errorMassage: '',
          validState: false
        })
        if (inputValue[0] === '9') inputValue = '7' + inputValue;

        let firstSimbols = (inputValue[0] === '8') ? '8' : '+7';
        formattedInputValue = firstSimbols + ' '

        if (inputValue.length > 1) {
          formattedInputValue += '(' + inputValue.substring(1, 4)
        }
        if (inputValue.length >= 5) {
          formattedInputValue += ') ' + inputValue.substring(4, 7)
        }
        if (inputValue.length >= 8) {
          formattedInputValue += '-' + inputValue.substring(7, 9)
        }
        if (inputValue.length >= 10) {
          formattedInputValue += '-' + inputValue.substring(9, 11)
        }
        if (inputValue.length >= 11) {
          setPhoneValidity({
            errorMassage: '',
            validState: true
          });
        } else {
          setPhoneValidity({
            errorMassage: '',
            validState: false
          });
        }
      } else {
        formattedInputValue = '+' + inputValue.substring(0, 16)
        if (inputValue.length >= 11) {
          setPhoneValidity({
            errorMassage: '',
            validState: true
          });
        } else {
          setPhoneValidity({
            errorMassage: '',
            validState: false
          });
        }
      }

      setPhoneValue(formattedInputValue)
    }




  }

  function handlePhoneDelite(e) {
    if (e.keyCode === 8 && e.target.value.replace(/\D/g, '').length === 1) {
      setPhoneValue('')
    }
    if (e.keyCode === 8 && e.target.value.replace(/\D/g, '').length < 11) {
      setPhoneValidity({
        errorMassage: '',
        validState: false
      });
    }

  }

  const [secondnameValue, setSecondnameValue] = React.useState('');
  const [secondnameValidity, setSecondnameValidity] = React.useState({});
  const [firstnameValue, setFirstnameValue] = React.useState('');
  const [firstnameValidity, setFirstnameValidity] = React.useState({});
  const [patronymicValue, setPatronymicValue] = React.useState('');
  const [patronymicValidity, setPatronymicValidity] = React.useState({
    errorMassage: '',
    validState: true
  });

  function handleSecondnameChange(e) {
    let inputValue = e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '')

    let formattedInputValue = '';
    if (!inputValue) {
      setSecondnameValue('')
    } else {
      if (inputValue[0] !== inputValue[0].toUpperCase()) {
        inputValue = inputValue.toUpperCase()
      }
      let firstSimbol = inputValue[0];
      formattedInputValue = firstSimbol
      if (inputValue.length > 1) {
        formattedInputValue += inputValue.toLowerCase().substring(1, 40)
      }
      if (inputValue.length >= 1) {
        setSecondnameValidity({
          errorMassage: '',
          validState: true
        })
      }
    }
    if (e.target.value.match(/[^a-zA-Zа-яА-ЯёЁ\s]/g)) {
      setSecondnameValidity({
        errorMassage: 'Вы можете вводить только буквы русского или латинского алфавита',
        validState: false
      })
    } else if (inputValue.length < 1) {
      setSecondnameValidity({
        errorMassage: 'Минимальная длина-1 символ',
        validState: false
      })
    }
    setSecondnameValue(formattedInputValue);

  }

  // function handleSecondnameDelite(e){
  //   if (e.keyCode === 8) {
  //     setSecondnameValidity({
  //       errorMassage: '',
  //       validState: false
  //     });
  //   }

  // }

  function handleFirstnameChange(e) {
    let inputValue = e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '')

    let formattedInputValue = '';
    if (!inputValue) {
      setFirstnameValue('')
    } else {
      if (inputValue[0] !== inputValue[0].toUpperCase()) {
        inputValue = inputValue.toUpperCase()
      }
      let firstSimbol = inputValue[0];
      formattedInputValue = firstSimbol
      if (inputValue.length > 1) {
        formattedInputValue += inputValue.toLowerCase().substring(1, 40)
      }
      if (inputValue.length >= 1) {
        setFirstnameValidity({
          errorMassage: '',
          validState: true
        })
      }
    }
    if (e.target.value.match(/[^a-zA-Zа-яА-ЯёЁ\s]/g)) {
      setFirstnameValidity({
        errorMassage: 'Вы можете вводить только буквы русского или латинского алфавита',
        validState: false
      })
    } else if (inputValue.length < 1) {
      setFirstnameValidity({
        errorMassage: 'Минимальная длина-1 символ',
        validState: false
      })
    }
    setFirstnameValue(formattedInputValue);
  }

  function handlePatronymicChange(e) {
    let inputValue = e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '')

    let formattedInputValue = '';
    if (!inputValue) {
      setPatronymicValidity({
        errorMassage: '',
        validState: true
      })
      setPatronymicValue('')
    } else {
      if (inputValue[0] !== inputValue[0].toUpperCase()) {
        inputValue = inputValue.toUpperCase()
      }
      let firstSimbol = inputValue[0];
      formattedInputValue = firstSimbol
      if (inputValue.length > 1) {
        formattedInputValue += inputValue.toLowerCase().substring(1, 40)
      }
      if (inputValue.length >= 1) {
        setPatronymicValidity({
          errorMassage: '',
          validState: true
        })
      }
    }
    if (e.target.value.match(/[^a-zA-Zа-яА-ЯёЁ\s]/g)) {
      setPatronymicValidity({
        errorMassage: 'Вы можете вводить только буквы русского или латинского алфавита',
        validState: false
      })
    }
    setPatronymicValue(formattedInputValue);
  }

  function handlePassChange(e) {
    setPassValue(e.target.value);
    setPassValidity({
      errorMassage: e.target.validationMessage,
      validState: e.target.validity.valid
    });
  }
  function handlePassCheckChange(e) {
    if(e.target.value !== passValue){
      setPassCheckValidity({
        errorMassage: 'Пароли не совпадают',
        validState: false
      });
      setPassCheckValue(e.target.value);
      return
    }
    setPassCheckValue(e.target.value);
    setPassCheckValidity({
      errorMassage: e.target.validationMessage,
      validState: e.target.validity.valid
    });
  }
  const [showPass, setShowPass] = React.useState(false);
  function handleShowPass (){
    if (showPass){
      setShowPass(false)
    } else {
      setShowPass(true)
    }
  }
  return (
    <div className="register">
      <Link to="/" className="register__logo">
        <img alt="Логотип" src={logo}></img>
      </Link>
      <h2 className="register__greeting">Добро пожаловать!</h2>
      <form className="register__form" name="register" onSubmit={handleSubmit} onKeyDown={handleFormEnter}>
        {regStep === 1 &&
          <>
            <div className="register__step-container">
              <p className="register__step"></p>
              <p className="register__step">Шаг 1/4</p>
            </div>


            <div className="register__input-container">
              <p className="register__input-title">Фамилия</p>
              <input onKeyDown={handleEnter} className="register__input" name="name" type="text" required value={secondnameValue} onChange={handleSecondnameChange} minLength="2" maxLength="30"></input>
              <span className="register__error">{secondnameValidity.errorMassage !== '' ? secondnameValidity.errorMassage : ''}</span>
            </div>
            <div className="register__input-container">
              <p className="register__input-title">Имя</p>
              <input onKeyDown={handleEnter} className="register__input" name="name" type="text" required value={firstnameValue} onChange={handleFirstnameChange} minLength="2" maxLength="30"></input>
              <span className="register__error">{firstnameValidity.errorMassage}</span>
            </div>
            <div className="register__input-container">
              <p className="register__input-title">Отчество (при наличии)</p>
              <input className="register__input" name="name" type="text" required value={patronymicValue} onChange={handlePatronymicChange} minLength="2" maxLength="30"></input>
              <span className="register__error">{patronymicValidity.errorMassage}</span>
            </div>
            <button type="button" className={`register__next-button ${(patronymicValidity.validState && firstnameValidity.validState && secondnameValidity.validState) ? "register__next-button_active" : "register__next-button_disabled"}`} disabled={(patronymicValidity.validState && firstnameValidity.validState && secondnameValidity.validState) ? false : true} onClick={handleNext}>Далее</button>
            <div className="register__auth-text-container">
              <p className="register__auth-text">Уже зарегистрированы? <Link className="register__auth-link" to='/signin'>Войти</Link></p>

            </div>
          </>
        }
        {regStep === 2 &&
          <>
            <div className="register__step-container">
              <p className="register__step-back" onClick={handleBack}>Назад</p>
              <p className="register__step">Шаг 2/4</p>
            </div>
            <div className="register__input-container">
              <p className="register__input-title">E-mail</p>
              <input onKeyDown={handleEnter} className="register__input" name="email" type="email" required value={emailValue} onChange={handleEmailChange}></input>
              <span className="register__error">{emailValidity.errorMassage}</span>
            </div>
            <div className="register__input-container">
              <p className="register__input-title">Номер телефона</p>
              <input className="register__input" name="phone" type="tel" required value={phoneValue} onChange={handlePhoneChange} onKeyDown={handlePhoneDelite}></input>
              <span className="register__error">{phoneValidity.errorMassage !== '' ? phoneValidity.errorMassage : ''}</span>
            </div>
            <button type="button" className={`register__next-button ${(emailValidity.validState && phoneValidity.validState) ? "register__next-button_active" : "register__next-button_disabled"}`} disabled={(emailValidity.validState && phoneValidity.validState) ? false : true} onClick={handleNext}>Далее</button>
          </>
        }
        {regStep === 3 &&
          <>
            <div className="register__step-container">
              <p className="register__step-back" onClick={handleBack}>Назад</p>
              <p className="register__step">Шаг 3/4</p>
            </div>
            <div className="register__input-container">
              <p className="register__input-title">Пароль <p onClick={handleShowPass} className="register__show-pass">{showPass? 'Скрыть': 'Показать'}</p></p>
              <input onKeyDown={handleEnter} className="register__input" name="password" type={showPass? 'text': 'password'} minLength="8" required value={passValue} onChange={handlePassChange}></input>
              <span className="register__error">{passValidity.errorMassage}</span>
            </div>
            <div className="register__input-container">
              <p className="register__input-title">Повторите пароль <p  onClick={handleShowPass} className="register__show-pass">{showPass? 'Скрыть': 'Показать'}</p></p>
              <input className="register__input" disabled={passValidity.validState ? false : true} name="password" type={showPass? 'text': 'password'} minLength="8" required value={passCheckValue} onChange={handlePassCheckChange}></input>
              <span className="register__error">{passCheckValidity.errorMassage}</span>
            </div>
            <button type="button" className={`register__next-button ${(passValidity.validState && passCheckValidity.validState && passValue === passCheckValue) ? "register__next-button_active" : "register__next-button_disabled"}`} disabled={(passValidity.validState && passCheckValidity.validState && passValue === passCheckValue) ? false : true} onClick={handleNext}>Далее</button>
          </>
        }
        {regStep === 4 &&
          <>
            <div className="register__step-container">
              <p className="register__step-back" onClick={handleBack}>Назад</p>
              <p className="register__step">Шаг 4/4</p>
            </div>
            <div className="register__input-container">
              <p className="register__input-title">Выберите ваш дом</p>
              <select className="register__select-container" name="house" type="text" required value={houseValue} onChange={handleHouseChange}>
                {props.houses && props.houses.map((item, i) => (
                  <option className="register__select-item" value={item.formValue} key={item._id}>{item.name}</option>
                ))}
              </select>
            </div>
            <div className="register__input-container">
              <p className="register__input-title">Номер квартиры</p>
              <input className="register__input" name="flat" type="text" required value={flatValue} onChange={handleFlatChange} minLength="1" maxLength="30"></input>
              <span className="register__error">{flatValidity.errorMassage}</span>
            </div>
            <span className="register__api-error">{props.apiErrorMessage}</span>
            <button type="submit" className={`register__submit-button ${(emailValidity.validState && patronymicValidity.validState && firstnameValidity.validState && secondnameValidity.validState && passValidity.validState && flatValidity.validState && phoneValidity.validState && passCheckValidity.validState) ? "register__submit-button_active" : "register__submit-button_disabled"}`} disabled={(emailValidity.validState && patronymicValidity.validState && firstnameValidity.validState && secondnameValidity.validState && passValidity.validState && passCheckValidity.validState && flatValidity.validState && phoneValidity.validState) ? false : true}>Зарегистрироваться</button>
          </>
        }
        {/* <div className="register__input-container">
          <p className="register__input-title">E-mail</p>
          <input className="register__input" name="email" type="email" required value={emailValue} onChange={handleEmailChange}></input>
          <span className="register__error">{emailValidity.errorMassage}</span>
        </div>
        <div className="register__input-container">
          <p className="register__input-title">Пароль</p>
          <input className="register__input" name="password" type="password" required value={passValue} onChange={handlePassChange}></input>
          <span className="register__error">{passValidity.errorMassage}</span>
        </div>
        <div className="register__input-container">
        <p className="register__input-title">Выберите ваш дом</p>
        <select className="register__select-container" name="house" type="text" required value={houseValue} onChange={handleHouseChange}>
          {props.houses && props.houses.map((item, i) => (
          <option className="register__select-item" value={item.formValue} key={item._id}>{item.name}</option>
        ))}
        </select>
        <span className="register__error">{houseValidity.errorMassage}</span>
        </div>

        <div className="register__input-container">
          <p className="register__input-title">Номер квартиры</p>
          <input className="register__input" name="flat" type="number" required value={flatValue} onChange={handleFlatChange} minLength="2" maxLength="30"></input>
          <span className="register__error">{flatValidity.errorMassage}</span>
        </div>
        <div className="register__input-container">
          <p className="register__input-title">Номер телефона</p>
          <input className="register__input" name="phone" type="number" required value={phoneValue} onChange={handlePhoneChange} minLength="2" maxLength="30"></input>
          <span className="register__error">{phoneValidity.errorMassage}</span>
        </div>
         <span className="register__api-error">{props.apiErrorMessage}</span>
        <button type="submit" className={`register__submit-button ${(emailValidity.validState && nameValidity.validState && passValidity.validState && flatValidity.validState && phoneValidity.validState && houseValidity.validState) ? "register__submit-button_active" : "register__submit-button_disabled"}`} disabled={(emailValidity.validState && nameValidity.validState && passValidity.validState) ? false : true}>Зарегистрироваться</button>
        */}




      </form>
    </div>
  );
}

export default Register;
