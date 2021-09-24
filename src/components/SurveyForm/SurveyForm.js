import '../../index.css';
import './SurveyForm.css';
import React from "react";
import { Link } from 'react-router-dom';
import validator from 'validator'


import logo from '../../images/logo-header.svg'



function SurveyForm(props) {

  const [surveyStep, setSurveyStep] = React.useState(1);
  const [emailValue, setEmailValue] = React.useState('');
  const [emailValidity, setEmailValidity] = React.useState({});
  // const [passValue, setPassValue] = React.useState('');
  // const [passValidity, setPassValidity] = React.useState({});
  // const [passCheckValue, setPassCheckValue] = React.useState('');
  // const [passCheckValidity, setPassCheckValidity] = React.useState({});
  // const [fullnameValue, setFullnameValue] = React.useState('');



  const [monthPayValue, setMonthPayValue] = React.useState('');
  const [monthPayValidity, setMonthPayValidity] = React.useState({});
  const [flatValue, setFlatValue] = React.useState('');
  const [flatValidity, setFlatValidity] = React.useState({});
  const [phoneValue, setPhoneValue] = React.useState('');
  const [phoneValidity, setPhoneValidity] = React.useState({});
  // const [houseValue, setHouseValue] = React.useState('');

  // React.useEffect(() => {
  //   if (props.houses) {

  //     setHouseValue(props.houses[0].formValue)
  //   }



  // }, [props.houses]);
  React.useEffect(() => {
    if (props.isSurveyPassed) {
      setSurveyStep(4)
      const monthPayValue = localStorage.getItem("monthPayValue");
      const houseMenagmentValue = localStorage.getItem("houseMenagmentValue");
      const flatValue = localStorage.getItem("flatValue");
      setMonthPayValue(monthPayValue)
      setHouseMenagmentValue(houseMenagmentValue)
      setFlatValue(flatValue)
    }


  }, [props.isSurveyPassed]);

  // function handleHouseChange(e) {

  //   setHouseValue(e.target.value);
  // }


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
    setSurveyStep(surveyStep + 1)
  }
  function handleBack() {
    setSurveyStep(surveyStep - 1)
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
    } if (e.target.value.match(/[a-zA-Zа-яА-ЯёЁ\D]/g)) {
      setFlatValue(inputValue)
      setFlatValidity({
        errorMassage: 'Можно вводить только цифры',
        validState: false
      })
    }
    else if (Number(inputValue) <= 0 && inputValue) {
      setFlatValue('')
      setFlatValidity({
        errorMassage: 'Площадь квартиры не может начинаться с нуля',
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
  function handleMonthPayChange(e) {
    let inputValue = e.target.value.replace(/\D/g, '')
    // let selectionStart = e.target.selectionStart
    if (!inputValue) {
      setMonthPayValue('')
      setMonthPayValidity({
        errorMassage: 'Это поле не может быть пустым',
        validState: false
      })
    } if (e.target.value.match(/[a-zA-Zа-яА-ЯёЁ\D]/g)) {
      setMonthPayValue(inputValue)
      setMonthPayValidity({
        errorMassage: 'Можно вводить только цифры',
        validState: false
      })
    }
    else if (Number(inputValue) <= 0 && inputValue) {
      setMonthPayValue('')
      setMonthPayValidity({
        errorMassage: 'Платеж не может начинаться с нуля',
        validState: false
      })
    }

    else {
      setMonthPayValue(inputValue);
      setMonthPayValidity({
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

  // function handlePhoneDelite(e) {
  //   if (e.keyCode === 8 && e.target.value.replace(/\D/g, '').length === 1) {
  //     setPhoneValue('')
  //   }
  //   if (e.keyCode === 8 && e.target.value.replace(/\D/g, '').length < 11) {
  //     setPhoneValidity({
  //       errorMassage: '',
  //       validState: false
  //     });
  //   }

  // }

  const [houseMenagmentValue, setHouseMenagmentValue] = React.useState('');
  const [houseMenagmentValidity, setHouseMenagmentValidity] = React.useState({});
  const [addressValue, setAddressValue] = React.useState('');
  const [addressValidity, setAddressValidity] = React.useState({});
  // const [patronymicValue, setPatronymicValue] = React.useState('');
  // const [patronymicValidity, setPatronymicValidity] = React.useState({
  //   errorMassage: '',
  //   validState: true
  // });

  function handleHouseMenagmentChange(e) {
    setHouseMenagmentValue(e.target.value);
    setHouseMenagmentValidity({
      errorMassage: e.target.validationMessage,
      validState: e.target.validity.valid
    });
  }

  // function handleSecondnameDelite(e){
  //   if (e.keyCode === 8) {
  //     setSecondnameValidity({
  //       errorMassage: '',
  //       validState: false
  //     });
  //   }

  // }

  function handleAddressChange(e) {
    setAddressValue(e.target.value);
    setAddressValidity({
      errorMassage: e.target.validationMessage,
      validState: e.target.validity.valid
    });

  }

  // function handlePatronymicChange(e) {
  //   let inputValue = e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '')

  //   let formattedInputValue = '';
  //   if (!inputValue) {
  //     setPatronymicValidity({
  //       errorMassage: '',
  //       validState: true
  //     })
  //     setPatronymicValue('')
  //   } else {
  //     if (inputValue[0] !== inputValue[0].toUpperCase()) {
  //       inputValue = inputValue.toUpperCase()
  //     }
  //     let firstSimbol = inputValue[0];
  //     formattedInputValue = firstSimbol
  //     if (inputValue.length > 1) {
  //       formattedInputValue += inputValue.toLowerCase().substring(1, 40)
  //     }
  //     if (inputValue.length >= 1) {
  //       setPatronymicValidity({
  //         errorMassage: '',
  //         validState: true
  //       })
  //     }
  //   }
  //   if (e.target.value.match(/[^a-zA-Zа-яА-ЯёЁ\s]/g)) {
  //     setPatronymicValidity({
  //       errorMassage: 'Вы можете вводить только буквы русского или латинского алфавита',
  //       validState: false
  //     })
  //   }
  //   setPatronymicValue(formattedInputValue);
  // }

  // function handlePassChange(e) {
  //   setPassValue(e.target.value);
  //   setPassValidity({
  //     errorMassage: e.target.validationMessage,
  //     validState: e.target.validity.valid
  //   });
  // }
  // function handlePassCheckChange(e) {
  //   if (e.target.value !== passValue) {
  //     setPassCheckValidity({
  //       errorMassage: 'Пароли не совпадают',
  //       validState: false
  //     });
  //     setPassCheckValue(e.target.value);
  //     return
  //   }
  //   setPassCheckValue(e.target.value);
  //   setPassCheckValidity({
  //     errorMassage: e.target.validationMessage,
  //     validState: e.target.validity.valid
  //   });
  // }
  // const [showPass, setShowPass] = React.useState(false);
  // function handleShowPass() {
  //   if (showPass) {
  //     setShowPass(false)
  //   } else {
  //     setShowPass(true)
  //   }
  // }
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
  const [secondnameValue, setSecondnameValue] = React.useState('');
  const [secondnameValidity, setSecondnameValidity] = React.useState({});
  const [firstnameValue, setFirstnameValue] = React.useState('');
  const [firstnameValidity, setFirstnameValidity] = React.useState({});
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
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    localStorage.setItem('houseMenagmentValue', houseMenagmentValue)
    localStorage.setItem('flatValue', flatValue);
    localStorage.setItem('monthPayValue', monthPayValue)
    e.preventDefault();
    handleNext()
    props.handleSurvey(houseMenagmentValue, addressValue, secondnameValue, firstnameValue, emailValue, flatValue, phoneValue, monthPayValue);
  };
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
    handleEnter(e)

  }

  return (
    <div className="register">

      {surveyStep <= 3 &&
        <>
          <Link to="/" className="register__logo">
            <img alt="Логотип" src={logo}></img>
          </Link>
          <h2 className="register__greeting">Ответьте на пару вопросов</h2>
          <form className="register__form" name="register" onSubmit={handleSubmit} onKeyDown={handleFormEnter}>
            {surveyStep === 1 &&
              <>
                <div className="register__step-container">
                  <p className="register__step"></p>
                  <p className="register__step">Шаг 1/3</p>
                </div>

                <div className="register__input-container">
                  <p className="register__input-title">Площадь Вашей квартиры в м<sup className="register__input-sup">2</sup></p>
                  <input onKeyDown={handleEnter} className="register__input" name="flat" type="text" required value={flatValue} onChange={handleFlatChange} minLength="1" maxLength="30"></input>
                  <span className="register__error">{flatValidity.errorMassage}</span>
                </div>
                <div className="register__input-container">
                  <p className="register__input-title">Название Вашей домоуправленческой организации</p>
                  <input onKeyDown={handleEnter} className="register__input" name="name" type="text" required value={houseMenagmentValue} onChange={handleHouseMenagmentChange} minLength="2" maxLength="30"></input>
                  <span className="register__error">{houseMenagmentValidity.errorMassage !== '' ? houseMenagmentValidity.errorMassage : ''}</span>
                </div>
                <div className="register__input-container">
                  <p className="register__input-title">Адресс Вашего дома</p>
                  <input className="register__input" name="name" type="text" required value={addressValue} onChange={handleAddressChange} minLength="2" maxLength="30"></input>
                  <span className="register__error">{addressValidity.errorMassage}</span>
                </div>
                <button type="button" className={`register__next-button ${(flatValidity.validState && addressValidity.validState && houseMenagmentValidity.validState) ? "register__next-button_active" : "register__next-button_disabled"}`} disabled={( flatValidity.validState && addressValidity.validState && houseMenagmentValidity.validState) ? false : true} onClick={handleNext}>Далее</button>
              </>
            }
            {surveyStep === 2 &&
              <>
                <div className="register__step-container">
                  <p className="register__step-back" onClick={handleBack}>Назад</p>
                  <p className="register__step">Шаг 2/3</p>
                </div>
                <div className="register__input-container">
                  <p className="register__input-title">E-mail</p>
                  <input onKeyDown={handleEnter} className="register__input" name="email" type="email" required value={emailValue} onChange={handleEmailChange}></input>
                  <span className="register__error">{emailValidity.errorMassage}</span>
                </div>
                <div className="register__input-container">
                  <p className="register__input-title">Номер телефона</p>
                  <input  className="register__input" name="phone" type="tel" required value={phoneValue} onChange={handlePhoneChange} onKeyDown={handlePhoneDelite} ></input>
                  <span className="register__error">{phoneValidity.errorMassage !== '' ? phoneValidity.errorMassage : ''}</span>
                </div>
                <div className="register__input-container">
                  <p className="register__input-title">Фамилия</p>
                  <input onKeyDown={handleEnter} className="register__input" name="name" type="text" required value={secondnameValue} onChange={handleSecondnameChange} minLength="2" maxLength="30"></input>
                  <span className="register__error">{secondnameValidity.errorMassage !== '' ? secondnameValidity.errorMassage : ''}</span>
                </div>
                <div className="register__input-container">
                  <p className="register__input-title">Имя</p>
                  <input className="register__input" name="name" type="text" required value={firstnameValue} onChange={handleFirstnameChange} minLength="2" maxLength="30"></input>
                  <span className="register__error">{firstnameValidity.errorMassage}</span>
                </div>
                <button type="button" className={`register__next-button ${(emailValidity.validState && phoneValidity.validState && firstnameValidity.validState && secondnameValidity.validState) ? "register__next-button_active" : "register__next-button_disabled"}`} disabled={(emailValidity.validState && phoneValidity.validState) ? false : true} onClick={handleNext}>Далее</button>
              </>
            }
            {surveyStep === 3 &&
              <>
                <div className="register__step-container">
                  <p className="register__step-back" onClick={handleBack}>Назад</p>
                  <p className="register__step">Шаг 3/3</p>
                </div>
                <div className="register__input-container">
                  <p className="register__input-title">Сколько сейчас Вы платите в месяц за домоуправленческие услуги</p>
                  <input className="register__input" name="monthPay" type="text" required value={monthPayValue} onChange={handleMonthPayChange} minLength="1" maxLength="30"></input>
                  <span className="register__error">{monthPayValidity.errorMassage}</span>
                </div>
                <span className="register__api-error">{props.apiErrorMessage}</span>
                <button type="submit" className={`register__submit-button ${(emailValidity.validState && monthPayValidity.validState && addressValidity.validState && houseMenagmentValidity.validState && flatValidity.validState && phoneValidity.validState) ? "register__submit-button_active" : "register__submit-button_disabled"}`} disabled={(emailValidity.validState && monthPayValidity.validState && addressValidity.validState && houseMenagmentValidity.validState && flatValidity.validState && phoneValidity.validState) ? false : true}>Узнать результат</button>
              </>
            }
          </form>
        </>
      }

      {surveyStep === 4 && Math.round((Number(monthPayValue) * 12) - (Number(flatValue) * 3.39 * 12)) > 0 &&
        <>
          <Link to="/" className="register__logo">
            <img alt="Логотип" src={logo}></img>
          </Link>
          <h3 className="survey__subtitle">Сожалеем, Вы переплачиваете</h3>
          <p className="survey__text">Каждый год Вы переплачивали <span className="survey__text_red">{Math.round((Number(monthPayValue) * 12) - (Number(flatValue) * 3.39 * 12))} &#8381;</span>,  а ведь эти деньги можно откладывать!</p>
          <div className="survey-result__grafs">
            <div className="survey-result__grafs-start-line"></div>
            <div className="survey-result__grafs-center-line"></div>
            <div className="survey-result__two-graf-container">
              <div className="survey-result__graf-container">

                <div className="survey-result__green-graf_small">
                  <div className="survey-result__green-graf_bg"></div>
                </div>
                <p className="survey-result__graf-price">{Math.round(Number(flatValue) * 3.39 * 12)} &#8381;</p>
                <p className="survey-result__graf-title">УК Профессионал</p>
              </div>
              <p className="survey-result__price-difference">{Math.round((Number(monthPayValue) * 12) - (Number(flatValue) * 3.39 * 12))} &#8381;</p>
              <div className="survey-result__graf-container">

                <div className="survey-result__red-graf-big">
                </div>
                <p className="survey-result__graf-price">{Math.round(Number(monthPayValue) * 12)} &#8381;</p>
                <p className="survey-result__graf-title">{houseMenagmentValue !== '' && houseMenagmentValue}</p>
              </div>
            </div>
          </div>
          <button type="button" className={`register__next-button register__next-button_active`} onClick={handleNext}>Далее</button>
        </>
      }
      {surveyStep === 4 && Math.round((Number(monthPayValue) * 12) - (Number(flatValue) * 3.39 * 12)) < 0 &&
        <>
          <Link to="/" className="register__logo">
            <img alt="Логотип" src={logo}></img>
          </Link>
          <h3 className="survey__subtitle">Вы везунчик!</h3>
          <p className="survey__text">Вы входите в 1% людей, которые так мало платят. А хотели бы Вы улучшить условия жизни в вашем доме?</p>
          <div className="survey-result__grafs">
            <div className="survey-result__grafs-start-line"></div>
            <div className="survey-result__grafs-center-line"></div>
            <div className="survey-result__two-graf-container">
              <div className="survey-result__graf-container">

                <div className="survey-result__green-graf-big">

                </div>
                <p className="survey-result__graf-price">{Math.round(Number(flatValue) * 3.39 * 12)} &#8381;</p>
                <p className="survey-result__graf-title">УК Профессионал</p>
              </div>
              <p className="survey-result__price-difference">{-1 * Math.round((Number(monthPayValue) * 12) - (Number(flatValue) * 3.39 * 12))} &#8381;</p>
              <div className="survey-result__graf-container">

                <div className="survey-result__red-graf_small">
                  <div className="survey-result__red-graf_bg"></div>
                </div>
                <p className="survey-result__graf-price">{Math.round(Number(monthPayValue) * 12)} &#8381;</p>
                <p className="survey-result__graf-title">{houseMenagmentValue !== '' && houseMenagmentValue}</p>
              </div>
            </div>
          </div>
          <button type="button" className={`register__next-button register__next-button_active`} onClick={handleNext}>Далее</button>
        </>
      }
      {surveyStep === 4 && Math.round((Number(monthPayValue) * 12) - (Number(flatValue) * 3.39 * 12)) === 0 &&
        <>
          <Link to="/" className="register__logo">
            <img alt="Логотип" src={logo}></img>
          </Link>
          <h3 className="survey__subtitle">Вот это совпадение!</h3>
          <p className="survey__text">Ежемесячная оплата у нас одинаковая. А хотели бы Вы улучшить условия жизни в вашем доме?</p>
          <div className="survey-result__grafs">
            <div className="survey-result__grafs-start-line"></div>
            <div className="survey-result__grafs-center-line"></div>
            <div className="survey-result__two-graf-container">
              <div className="survey-result__graf-container">

                <div className="survey-result__green-graf_small">
                  <div className="survey-result__green-graf_bg"></div>
                </div>
                <p className="survey-result__graf-price">{Math.round(Number(flatValue) * 3.39 * 12)} &#8381;</p>
                <p className="survey-result__graf-title">УК Профессионал</p>
              </div>
              <p className="survey-result__price-difference">{Math.round((Number(monthPayValue) * 12) - (Number(flatValue) * 3.39 * 12))} &#8381;</p>
              <div className="survey-result__graf-container">

                <div className="survey-result__red-graf_small">
                  <div className="survey-result__red-graf_bg"></div>
                </div>
                <p className="survey-result__graf-price">{Math.round(Number(monthPayValue) * 12)} &#8381;</p>
                <p className="survey-result__graf-title">{houseMenagmentValue !== '' && houseMenagmentValue}</p>
              </div>
            </div>
          </div>
          <button type="button" className={`register__next-button register__next-button_active`} onClick={handleNext}>Далее</button>
        </>
      }
       {surveyStep === 5 &&
        <>
          <Link to="/" className="register__logo">
            <img alt="Логотип" src={logo}></img>
          </Link>
          <h3 className="survey__subtitle">Присоединяйтесь к Профессионалу</h3>
          <p className="survey__text">Переведите Ваш дом на УК “Профессионал” и получите 10 месяцев бесплатного обслуживания своей квартиры!</p>
          <div className="why-us__two-chapters-container">
          <div className="why-us__chapter-container">
            <h3 className="why-us__chapter-title">Позвоните нам с 9 до 18</h3>
            <h3 className="why-us__chapter-title">Или напишите нам на почту</h3>
            <p className="why-us__chapter-text">Составим план действий для перехода Вашего дома на Проофессионал</p>
            <p className="survey__text"><a className="contacts__chapter-text" href="tel:88124949723">8 (812) 494-97-23</a><br/><br/><a  target="_blank"  rel="noreferrer"  className="contacts__chapter-text" href="mailto:change@prof-uk.ru">change@prof-uk.ru</a></p>
          </div>
        </div>
        </>
      }





    </div>
  );
}

export default SurveyForm;
