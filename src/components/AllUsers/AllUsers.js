import React from 'react';


import Header from '../Header/Header';
import UsersCards from './UsersCards/UsersCards'

import selectTick from '../../images/select-tick.svg'




import './AllUsers.css';

function AllUsers(props) {
  const [isSelectOpen, setSelectOpen] = React.useState(false);
  const [isSelectHouseOpen, setSelectHouseOpen] = React.useState(false);
  const [selectedHouse, setSelectedHouse] = React.useState('Все');
  const [searchValue, setSearchValue] = React.useState('');
  const [filteredUsers, setFilteredUsers] = React.useState(props.allAdminsUsers);

  React.useEffect(() => {
    setFilteredUsers(props.allAdminsUsers)
  }, [props.allAdminsUsers])

  function handleSelectOpen() {
    if (isSelectOpen) {
      setSelectOpen(false)
    } else {
      setSelectHouseOpen(false)
      setSelectOpen(true)
    }
  }



  function handleSearchChange(e) {
    setSearchValue(e.target.value);
    if (!e.target.value || e.target.value === '') {
      setFilteredUsers(props.allAdminsUsers)
    }
    setFilteredUsers(props.allAdminsUsers.filter(function (item) {
      if ((item.fullname.toLowerCase().includes(e.target.value.trim().toString().toLowerCase()))
        || (item.flat.toString().includes(e.target.value.trim().toString()))
        || (item.email.toLowerCase().includes(e.target.value.trim().toString().toLowerCase()))

      ) {
        return true
      }
      return false
    }))
  }
  function handleSelectHouseOpen() {
    if (isSelectHouseOpen) {
      setSelectHouseOpen(false)
    } else {
      setSelectOpen(false)
      setSelectHouseOpen(true)
    }
  }
  function handleHouseSelect(name) {
    setSelectedHouse(name)
    setSelectHouseOpen(false)
  }



  return (
    <>
      <div className={`usercomplaints__bgblacker ${isSelectOpen ? 'usercomplaints__bgblacker_active' : ''}`} onClick={handleSelectOpen}></div>
      <div className={`usercomplaints__bgblacker ${isSelectHouseOpen ? 'usercomplaints__bgblacker_active' : ''}`} onClick={handleSelectHouseOpen}></div>
      <Header isAdmin={props.isAdmin} handleMenuOpenClick={props.handleMenuOpenClick} loggedIn={props.loggedIn} />
      <div className="usercomplaints">
        <h2 className="usercomplaints__title">Все пользователи</h2>
        {/* <div>
          <input></input>
        </div> */}
        <div className="all-users__input-container">
          <p className="all-users__input-title">Поиск по пользователям</p>
          <input className="all-users__input" name="name" type="text" autoComplete="off" required placeholder="Введите данные" onChange={handleSearchChange} value={searchValue} ></input>
          <span className="all-users__error"></span>
        </div>
        <p className="add-complaint-popup__custom-input-title">Выберите дом</p>
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
        </div>



        <UsersCards handleUserClick={props.handleUserClick} allAdminsUsers={filteredUsers && filteredUsers.sort(function (a, b) {

          if (a.flat < b.flat) return -1;
          if (b.flat < a.flat) return 1;

          return 0;
        })} selectedHouse={selectedHouse} />

      </div>
    </>
  )
}

export default AllUsers;
