import React from 'react';


import Header from '../Header/Header';
import ComplaintCards from './ComplaintCards/ComplaintCards'

import selectTick from '../../images/select-tick.svg'
import plus from '../../images/plus.svg'



import './AllAppeals.css';

function AllAppeals(props) {
  const [isSelectOpen, setSelectOpen] = React.useState(false);
  const [isSelectHouseOpen, setSelectHouseOpen] = React.useState(false);
  const [selectedType, setSelectedType] = React.useState('Ожидание');
  const [selectedHouse, setSelectedHouse] = React.useState('Все');

  function handleSelectOpen() {
    if (isSelectOpen) {
      setSelectOpen(false)
    } else {
      setSelectHouseOpen(false)
      setSelectOpen(true)
    }
  }

  function handleWaitSelect() {
    setSelectedType('Ожидание')
    setSelectOpen(false)
  }
  function handleWorkSelect() {
    setSelectedType('В работе')
    setSelectOpen(false)
  }
  function handleRejectSelect() {
    setSelectedType('Отклонено')
    setSelectOpen(false)
  }
  function handleDoneSelect() {
    setSelectedType('Выполнено')
    setSelectOpen(false)
  }
  function handleAllSelect() {
    setSelectedType('Все')
    setSelectOpen(false)
  }
  function handleAdd() {
    props.handleAddComplaintOpenClick()
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

  let statusEn
  if(selectedType === 'Ожидание'){
    statusEn = 'waiting'
  }
  if(selectedType === 'В работе'){
    statusEn = 'in_work'
  }
  if(selectedType === 'Отклонено'){
    statusEn = 'rejected'
  }
  if(selectedType === 'Выполнено'){
    statusEn = 'done'
  }

  return (
    <>
      <div className={`usercomplaints__bgblacker ${isSelectOpen ? 'usercomplaints__bgblacker_active' : ''}`} onClick={handleSelectOpen}></div>
      <div className={`usercomplaints__bgblacker ${isSelectHouseOpen ? 'usercomplaints__bgblacker_active' : ''}`} onClick={handleSelectHouseOpen}></div>
      <Header isAdmin={props.isAdmin} handleMenuOpenClick={props.handleMenuOpenClick} loggedIn={props.loggedIn} />
      <div className="usercomplaints">
        <h2 className="usercomplaints__title">Все обращения</h2>
        <p className="add-complaint-popup__custom-input-title">Выберите статус обращения</p>
        <div className="usercomplaints__buttons">

          <div className={`usercomplaints__select ${isSelectOpen ? 'usercomplaints__select_active' : ''}`} onClick={handleSelectOpen}>
            <p className="usercomplaints__option">{selectedType}</p>
            <img className={`usercomplaints__tick ${isSelectOpen ? 'usercomplaints__tick_active' : ''}`} alt="галочка" src={selectTick}></img>
          </div>
          <div className={`usercomplaints__options ${isSelectOpen ? 'usercomplaints__options_active' : ''}`}>
            {selectedType === 'Все' ? <></> : <p className={`usercomplaints__options-item ${selectedType === 'Все' ? 'usercomplaints__options-item_selected' : ''}`} onClick={handleAllSelect}>Все</p>}
            {selectedType === 'Ожидание' ? <></> : <p className={`usercomplaints__options-item ${selectedType === 'Ожидание' ? 'usercomplaints__options-item_selected' : ''}`} onClick={handleWaitSelect}>Ожидание</p>}
            {selectedType === 'В работе' ? <></> : <p className={`usercomplaints__options-item ${selectedType === 'В работе' ? 'usercomplaints__options-item_selected' : ''}`} onClick={handleWorkSelect}>В работе</p>}
            {selectedType === 'Отклонено' ? <></> : <p className={`usercomplaints__options-item ${selectedType === 'Отклонено' ? 'usercomplaints__options-item_selected' : ''}`} onClick={handleRejectSelect}>Отклонено</p>}
            {selectedType === 'Выполнено' ? <></> : <p className={`usercomplaints__options-item ${selectedType === 'Выполнено' ? 'usercomplaints__options-item_selected' : ''}`} onClick={handleDoneSelect}>Выполнено</p>}
          </div>
          <div className="usercomplaints__add" onClick={handleAdd}>
            <img className="usercomplaints__plus" alt="добавить" src={plus}></img>
            <p className="usercomplaints__add-text">Новая жалоба</p>
          </div>

        </div>
        <p className="add-complaint-popup__custom-input-title">Выберите дом</p>
        <div className="usercomplaints__buttons">
          <div className={`usercomplaints__select ${isSelectHouseOpen ? 'usercomplaints__select_active' : ''}`} onClick={handleSelectHouseOpen}>
            <p className="usercomplaints__option">{selectedHouse}</p>
            <img className={`usercomplaints__tick ${isSelectHouseOpen ? 'usercomplaints__tick_active' : ''}`} alt="галочка" src={selectTick}></img>
          </div>
          <div className={`usercomplaints__options ${isSelectHouseOpen ? 'usercomplaints__options_active' : ''}`}>
            {selectedHouse === 'Все' ? <></> : <p className={`usercomplaints__options-item ${selectedHouse === 'Все' ? 'usercomplaints__options-item_selected' : ''}`} onClick={() => handleHouseSelect('Все')}>Все</p>}
            {props.houses.map((item, i) => (


              selectedHouse === item.name ? <></> : <p key={item.name+i} className={`usercomplaints__options-item`} onClick={() => handleHouseSelect(item.name)}>{item.name}</p>
            ))}
          </div>
        </div>

        <ComplaintCards handleAppealClick={props.handleAppealClick} allAppeals={props.allAppeals} statusEn={statusEn} selectedType={selectedType} selectedHouse={selectedHouse} />

      </div>
    </>
  )
}

export default AllAppeals;
