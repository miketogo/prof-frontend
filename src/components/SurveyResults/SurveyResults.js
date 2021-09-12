import React from 'react';


import Header from '../Header/Header';
import SurveyCards from './SurveyCards/SurveyCards'





import './SurveyResults.css';

function SurveyResults(props) {
  const [isSelectOpen, setSelectOpen] = React.useState(false);


  const [searchValue, setSearchValue] = React.useState('');
  const [filteredResults, setFilteredResults] = React.useState(props.allSurveyResults);

  React.useEffect(() => {
    setFilteredResults(props.allSurveyResults)
  }, [props.allSurveyResults])

  function handleSelectOpen() {
    if (isSelectOpen) {
      setSelectOpen(false)
    } else {

      setSelectOpen(true)
    }
  }



  function handleSearchChange(e) {
    setSearchValue(e.target.value);
    if (!e.target.value || e.target.value === '') {
      setFilteredResults(props.allSurveyResults)
    }
    setFilteredResults(props.allSurveyResults.filter(function (item) {
      if ((item.firstname.toLowerCase().includes(e.target.value.trim().toString().toLowerCase()))
        || (item.secondname.toString().includes(e.target.value.trim().toString()))
        || (item.email.toLowerCase().includes(e.target.value.trim().toString().toLowerCase()))

      ) {
        return true
      }
      return false
    }))
  }
  // function handleSelectHouseOpen() {
  //   if (isSelectHouseOpen) {
  //     setSelectHouseOpen(false)
  //   } else {
  //     setSelectOpen(false)
  //     setSelectHouseOpen(true)
  //   }
  // }
  // function handleHouseSelect(name) {
  //   setSelectedHouse(name)
  //   setSelectHouseOpen(false)
  // }



  return (
    <>
      <div className={`usercomplaints__bgblacker ${isSelectOpen ? 'usercomplaints__bgblacker_active' : ''}`} onClick={handleSelectOpen}></div>

      <Header isAdmin={props.isAdmin} handleMenuOpenClick={props.handleMenuOpenClick} loggedIn={props.loggedIn} />
      <div className="usercomplaints">
        <h2 className="usercomplaints__title">Все результаты опроса</h2>
        {/* <div>
          <input></input>
        </div> */}
        <div className="all-users__input-container">
          <p className="all-users__input-title">Поиск по пользователям</p>
          <input className="all-users__input" name="name" type="text" autoComplete="off" required placeholder="Введите данные" onChange={handleSearchChange} value={searchValue} ></input>
          <span className="all-users__error"></span>
        </div>
        {/* <p className="add-complaint-popup__custom-input-title">Выберите дом</p>
        <div className="usercomplaints__buttons">
          <div className={`usercomplaints__select ${isSelectHouseOpen ? 'usercomplaints__select_active' : ''}`} onClick={handleSelectHouseOpen}>
            <p className="usercomplaints__option">{selectedHouse}</p>
            <img className={`usercomplaints__tick ${isSelectHouseOpen ? 'usercomplaints__tick_active' : ''}`} alt="галочка" src={selectTick}></img>
          </div>
          <div className={`usercomplaints__options ${isSelectHouseOpen ? 'usercomplaints__options_active' : ''}`}>
            {selectedHouse === 'Все' ? <></> : <p className={`usercomplaints__options-item ${selectedHouse === 'Все' ? 'usercomplaints__options-item_selected' : ''}`} onClick={() => handleHouseSelect('Все')}>Все</p>}
            {props.houses && props.houses.map((item, i) => (


              selectedHouse === item.name ? <></> : <p key={item._id + 'allusers'} className={`usercomplaints__options-item`} onClick={() => handleHouseSelect(item.name)}>{item.name}</p>
            ))}
          </div>
        </div> */}



        <SurveyCards allSurveyResults={filteredResults} />

      </div>
    </>
  )
}

export default SurveyResults;
