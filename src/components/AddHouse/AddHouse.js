import '../../index.css';
import './AddHouse.css';
import React from "react";
import { Link } from 'react-router-dom';


import logo from '../../images/logo-header.svg'



function AddHouse(props) {
  const [regStep, setRegStep] = React.useState(1);










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






  const [housenameValue, setHousenameValue] = React.useState('');
  const [housenameValidity, setHouseameValidity] = React.useState({});
  const [formValue, setFormValue] = React.useState('');

  const [cityValue, setCityValue] = React.useState('');

  const [cityValidity, setCityValidity] = React.useState({});

  function handleHousenameChange(e) {
    let inputValue = e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁ0-9.-\s]/g, '')

    let formattedInputValue = '';
    let formattedFormValue = '';
    if (!inputValue) {
      setHousenameValue('')
      setFormValue('')
    } else {
      if (inputValue[0] !== inputValue[0].toUpperCase()) {
        inputValue = inputValue.toUpperCase()
      }
      let firstSimbol = inputValue[0];
      formattedInputValue = firstSimbol
      formattedFormValue = translit(firstSimbol)
      if (inputValue.length > 1) {
        formattedInputValue += inputValue.toLowerCase().substring(1, 40)
        formattedFormValue += translit(inputValue.toLowerCase().substring(1, 40))
      }
      if (inputValue.length >= 1) {
        setHouseameValidity({
          errorMassage: '',
          validState: true
        })
      }
    }
    if (e.target.value.match(/[^a-zA-Zа-яА-ЯёЁ0-9.-\s]/g)) {
      setHouseameValidity({
        errorMassage: 'Вы можете вводить только буквы русского или латинского алфавита, цифры, пробел, "-"',
        validState: false
      })
    } else if (inputValue.length < 1) {
      setHouseameValidity({
        errorMassage: 'Минимальная длина-1 символ',
        validState: false
      })
    }
    setHousenameValue(formattedInputValue);
    setFormValue(formattedFormValue)

  }

  // function handleSecondnameDelite(e){
  //   if (e.keyCode === 8) {
  //     setSecondnameValidity({
  //       errorMassage: '',
  //       validState: false
  //     });
  //   }

  // }



  function handleCityChange(e) {
    let inputValue = e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁ0-9.-\s]/g, '')

    let formattedInputValue = '';
    if (!inputValue) {
      setCityValidity({
        errorMassage: 'Минимальная длина-1 символ',
        validState: false
      })
      setCityValue('')
    } else {
      if (inputValue[0] !== inputValue[0].toUpperCase()) {
        inputValue = inputValue.toUpperCase()
      }
      let firstSimbol = inputValue[0];
      formattedInputValue = firstSimbol
      if (inputValue.length > 1) {
        formattedInputValue += inputValue.substring(1, 40)
      }
      if (inputValue.length >= 1) {
        setCityValidity({
          errorMassage: '',
          validState: true
        })
      }
    }
    if (e.target.value.match(/[^a-zA-Zа-яА-ЯёЁ0-9.-\s]/g)) {
      setCityValidity({
        errorMassage: 'Вы можете вводить только буквы русского или латинского алфавита, цифры, пробел, "-"',
        validState: false
      })
    }
    setCityValue(formattedInputValue);
  }
  const [addressValue, setAddressValue] = React.useState('');
  const [addressValidity, setAddressValidity] = React.useState({});


  function handleAddressChange(e) {
    let inputValue = e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁ0-9.-\s.,]/g, '')

    let formattedInputValue = '';
    if (!inputValue) {
      setAddressValidity({
        errorMassage: 'Минимальная длина-1 символ',
        validState: false
      })
      setAddressValue('')
    } else {

      if (inputValue.length >= 1) {
        formattedInputValue += inputValue.substring(0, 40)
      }
      if (inputValue.length >= 1) {
        setAddressValidity({
          errorMassage: '',
          validState: true
        })
      }
    }
    if (e.target.value.match(/[^a-zA-Zа-яА-ЯёЁ0-9.-\s.,]/g)) {
      setAddressValidity({
        errorMassage: 'Вы можете вводить только буквы русского или латинского алфавита, цифры, пробел, "-"',
        validState: false
      })
    }
    setAddressValue(formattedInputValue);
  }

  function translit(word) {
    var answer = '';
    var converter = {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
      'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
      'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
      'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
      'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
      'ш': 'sh', 'щ': 'sch', 'ь': '', 'ы': 'y', 'ъ': '',
      'э': 'e', 'ю': 'yu', 'я': 'ya',

      'А': 'a', 'Б': 'b', 'В': 'v', 'Г': 'g', 'Д': 'd',
      'Е': 'e', 'Ё': 'e', 'Ж': 'zh', 'З': 'z', 'И': 'i',
      'Й': 'y', 'К': 'k', 'Л': 'l', 'М': 'm', 'Н': 'n',
      'О': 'o', 'П': 'p', 'Р': 'r', 'С': 's', 'Т': 't',
      'У': 'u', 'Ф': 'f', 'Х': 'h', 'Ц': 'c', 'Ч': 'ch',
      'Ш': 'sh', 'Щ': 'sch', 'Ь': '', 'Ы': 'y', 'Ъ': '',
      'Э': 'e', 'Ю': 'yu', 'Я': 'ya', '-': '_', ' ': '_'
    };

    for (var i = 0; i < word.length; ++i) {
      if (converter[word[i]] === undefined) {
        answer += word[i].toLowerCase();
      } else {
        answer += converter[word[i]];
      }
    }

    return answer;
  }

  const [statementslengthValue, setStatementslengthValue] = React.useState('');
  const [statementslengthValidity, setStatementslengthValidity] = React.useState({});
  const [statArrayValue, setStatArrayValue] = React.useState([]);
  function handleStatementslengthChange(e) {
    setStatementslengthValidity({
      errorMassage: e.target.validationMessage,
      validState: e.target.validity.valid
    });
    let inputValue = e.target.value.replace(/\D/g, '')

    if (!inputValue) {
      setStatementslengthValidity({
        errorMassage: 'Минимально 1',
        validState: false
      })
      setStatArrayValue([])
      setStatementslengthValue('')
    }
    if (inputValue > 15) {
      setStatementslengthValidity({
        errorMassage: 'Максимально 15 ',
        validState: false
      })
      setStatArrayValue([])
      setStatementslengthValue('')
    }
    if (inputValue > 0 && inputValue <= 15) {
      setStatementslengthValue(e.target.value);
      setStatementValue(Array.apply(null, Array(Number(e.target.value))).map(function (x, i) { return { name: '', value: '' } }))
      setStatementValidity(Array.apply(null, Array(Number(e.target.value))).map(function (x, i) { return { errorMassage: '', validState: false } }))
      let stetArray = []
      for (var i = 0; i < e.target.value; ++i) {
        stetArray.push(i)
      }
      setStatArrayValue(stetArray)


    }
  }

  function handleStatementChange(e, i) {
    let inputValue = e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁ0-9.-\s.,]/g, '')
    const array = statementValue.slice();
    const validArray = statementValidity.slice();
    if (e.target.value.match(/[^a-zA-Zа-яА-ЯёЁ0-9.-\s.,]/g)) {
      validArray[i].errorMassage = 'Вы можете вводить только буквы русского или латинского алфавита, цифры, пробел, "-"'
      validArray[i].validState = false
      setStatementValidity(validArray)

    }
    if (!inputValue) {
      validArray[i].errorMassage = 'Минимально один символ'
      validArray[i].validState = false
      setStatementValidity(validArray)
    }
    if (array.filter((item) => {
      if (item.name.toLowerCase() === inputValue.toLowerCase()) {
        return item
      } return false
    }).length === 0 && inputValue.length > 0) {
      validArray[i].errorMassage = ''
      validArray[i].validState = true
      setStatementValidity(validArray)

      array[i].name = inputValue;
      array[i].value = translit(inputValue)
      setStatementValue(array)
    } else {
      array[i].name = inputValue;
      array[i].value = translit(inputValue)
      setStatementValue(array)
    }


  }
  const [statementValue, setStatementValue] = React.useState([]);
  const [statementValidity, setStatementValidity] = React.useState([]);

  const [entrancelengthValue, setEntrancelengthValue] = React.useState('');
  const [entrancelengthValidity, setEntrancelengthValidity] = React.useState({});
  const [entranceArrayValue, setEntranceArrayValue] = React.useState([]);
  const [entValue, setEntValue] = React.useState([]);
  const [entValidity, setEntValidity] = React.useState([]);

  function handleEntrancelengthChange(e) {
    setEntrancelengthValidity({
      errorMassage: e.target.validationMessage,
      validState: e.target.validity.valid
    });
    let inputValue = e.target.value.replace(/\D/g, '')

    if (!inputValue) {
      setEntrancelengthValidity({
        errorMassage: 'Минимально 1',
        validState: false
      })
      setEntranceArrayValue([])
      setEntrancelengthValue('')
    }
    if (inputValue > 15) {
      setEntrancelengthValidity({
        errorMassage: 'Максимально 15 ',
        validState: false
      })
      setEntranceArrayValue([])
      setEntrancelengthValue('')
    }
    if (inputValue > 0 && inputValue <= 15) {
      setEntrancelengthValue(e.target.value);
      setEntValue(Array.apply(null, Array(Number(e.target.value))).map(function (x, i) { return { flat: '' } }))
      setEntValidity(Array.apply(null, Array(Number(e.target.value))).map(function (x, i) { return { errorMassage: '', validState: false } }))
      let stetArray = []
      for (var i = 0; i < e.target.value; ++i) {
        stetArray.push(i)
      }
      setEntranceArrayValue(stetArray)


    }
  }

  function handleEntChange(e, i) {
    let inputValue = e.target.value.replace(/\D/g, '')
    const array = entValue.slice();
    const validArray = entValidity.slice();
    if (e.target.value.match(/\D/g)) {
      validArray[i].errorMassage = 'Вы можете вводить только цифры'
      validArray[i].validState = false
      setEntValidity(validArray)

    }

    if (!inputValue || inputValue <= 0) {
      validArray[i].errorMassage = 'Минимально 1'
      validArray[i].validState = false
      setEntValidity(validArray)
    }
    if (i >= 1 && inputValue < entValue[i -1 ].flat) {
      validArray[i].errorMassage = 'Число должно быть больше предыдущего'
      validArray[i].validState = false
      setEntValidity(validArray)
    }
     if (array.filter((item) => {
      if (item.flat === inputValue) {
        return item
      } return false
    }).length === 0 && inputValue > 0 ) {

      validArray[i].errorMassage = ''
      validArray[i].validState = true
      setEntValidity(validArray)

      array[i].flat = inputValue;

      setEntValue(array)
    } else {

      array[i].flat = inputValue;

      setEntValue(array)
    }


  }
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    props.handleAddHouse(housenameValue, formValue, cityValue, addressValue, statementValue, entValue.map((item, i) => {
      return Number(item.flat)
    }))
  };
  return (
    <div className="register">
      <Link to="/" className="register__logo">
        <img alt="Логотип" src={logo}></img>
      </Link>
      <h2 className="register__greeting">Добавить дом</h2>
      <form className="register__form" name="register" autoComplete="off" onSubmit={handleSubmit} onKeyDown={handleFormEnter}>
        {regStep === 1 &&
          <>
          <p className="register__step">Предупреждение: это действие понесёт за собой изменение структуры всех разделов, попросите профессионала заполнить эту форму.</p>
            <div className="register__step-container">
              <p className="register__step"></p>
              <p className="register__step">Шаг 1/4</p>
            </div>


            <div className="register__input-container">
              <p className="register__input-title">Название дома</p>
              <input onKeyDown={handleEnter} className="register__input" name="name" type="text" required value={housenameValue} onChange={handleHousenameChange} minLength="2" maxLength="30"></input>
              <span className="register__error">{housenameValidity.errorMassage !== '' ? housenameValidity.errorMassage : ''}</span>
            </div>
            <div className="register__input-container">
              <p className="register__input-title">Город</p>
              <input className="register__input" name="name" type="text" required value={cityValue} onChange={handleCityChange} minLength="2" maxLength="30"></input>
              <span className="register__error">{cityValidity.errorMassage}</span>
            </div>
            <button type="button" className={`register__next-button ${(cityValidity.validState && housenameValidity.validState) ? "register__next-button_active" : "register__next-button_disabled"}`} disabled={(cityValidity.validState && housenameValidity.validState) ? false : true} onClick={handleNext}>Далее</button>

          </>
        }
        {regStep === 2 &&
          <>
            <div className="register__step-container">
              <p className="register__step-back" onClick={handleBack}>Назад</p>
              <p className="register__step">Шаг 2/4</p>
            </div>
            <div className="register__input-container">
              <p className="register__input-title">Адресс (улица __, дом __, корпус __)</p>
              <input onKeyDown={handleEnter} className="register__input" name="name" type="text" required value={addressValue} onChange={handleAddressChange}></input>
              <span className="register__error">{addressValidity.errorMassage}</span>
            </div>
            <button type="button" className={`register__next-button ${(addressValidity.validState) ? "register__next-button_active" : "register__next-button_disabled"}`} disabled={(addressValidity.validState) ? false : true} onClick={handleNext}>Далее</button>
          </>
        }
        {regStep === 3 &&
          <>
            <div className="register__step-container">
              <p className="register__step-back" onClick={handleBack}>Назад</p>
              <p className="register__step">Шаг 3/4</p>
            </div>
            <div className="register__input-container">
              <p className="register__input-title">Введите количество справок</p>
              <input onKeyDown={handleEnter} className="register__input" name="statementslength" type="number" min="1" max="15" required value={statementslengthValue} onChange={handleStatementslengthChange}></input>
              <span className="register__error">{statementslengthValidity.errorMassage}</span>
            </div>
            {statArrayValue && statArrayValue.length > 0 && statArrayValue.map((item, i) => (
              <div className="register__input-container">
                <p className="register__input-title">Короткое название справки №{i + 1}</p>
                <input onKeyDown={handleEnter} className="register__input" name="statementslength" type="text" minLength="1" maxLength="30" required value={statementValue[i].name} onChange={(e) => handleStatementChange(e, i)}></input>
                <span className="register__error">{statementValidity[i].errorMassage}</span>
              </div>
            ))}
            <button type="button" className={`register__next-button ${(statementslengthValidity.validState && statementValidity.filter((item) => {
              if (item.validState === false) {
                return item
              } return false
            }).length === 0) ? "register__next-button_active" : "register__next-button_disabled"}`} disabled={(statementslengthValidity.validState && statementValidity.filter((item) => {
              if (item.validState === false) {
                return item
              } return false
            }).length === 0) ? false : true} onClick={handleNext}>Далее</button>
          </>
        }
        {regStep === 4 &&
          <>
            <div className="register__step-container">
              <p className="register__step-back" onClick={handleBack}>Назад</p>
              <p className="register__step">Шаг 3/4</p>
            </div>
            <div className="register__input-container">
              <p className="register__input-title">Введите количество парадных</p>
              <input onKeyDown={handleEnter} className="register__input" name="statementslength" type="number" min="1" max="15" required value={entrancelengthValue} onChange={handleEntrancelengthChange}></input>
              <span className="register__error">{entrancelengthValidity.errorMassage}</span>
            </div>
            {entranceArrayValue && entranceArrayValue.length > 0 && entranceArrayValue.map((item, i) => (
              <div className="register__input-container">
                <p className="register__input-title">Введите номер последней квартиры в парадной №{i + 1} включительно</p>
                <input onKeyDown={handleEnter} autoComplete="off" className="register__input" name="statementslength" type="text" minLength="1" maxLength="30" required value={entValue[i].flat} onChange={(e) => handleEntChange(e, i)}></input>
                <span className="register__error">{entValidity[i].errorMassage}</span>
              </div>
            ))}
            <span className="register__api-error">{props.apiErrorMessage}</span>
            <button type="submit" className={`register__submit-button ${(entrancelengthValidity.validState && entValidity.filter((item) => {
              if (item.validState === false) {
                return item
              } return false
            }).length === 0) ? "register__submit-button_active" : "register__submit-button_disabled"}`} disabled={(entrancelengthValidity.validState && entValidity.filter((item) => {
              if (item.validState === false) {
                return item
              } return false
            }).length === 0) ? false : true}>Далее</button>


          </>
        }





      </form>
    </div>
  );
}

export default AddHouse;
