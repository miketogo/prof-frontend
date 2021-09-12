import React from 'react';


import Header from '../Header/Header';
import ComplaintCards from './ComplaintCards/ComplaintCards'

import selectTick from '../../images/select-tick.svg'
import plus from '../../images/plus.svg'



import './UserComplaints.css';

function UserComplaints(props) {
  const [isSelectOpen, setSelectOpen] = React.useState(false);
  const [selectedType, setSelectedType] = React.useState('Все');

  function handleSelectOpen() {
    if (isSelectOpen) {
      setSelectOpen(false)
    } else {
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
  function handleAdd(){
    props.handleAddComplaintOpenClick()
  }
  return (
    <>
      <div className={`usercomplaints__bgblacker ${isSelectOpen ? 'usercomplaints__bgblacker_active' : ''}`} onClick={handleSelectOpen}></div>
      <Header isAdmin={props.isAdmin} handleMenuOpenClick={props.handleMenuOpenClick} loggedIn={props.loggedIn} />
      <div className="usercomplaints">
        <h2 className="usercomplaints__title">Мои жалобы</h2>
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

        <ComplaintCards allAppeals={props.allAppeals} selectedType={selectedType} />

      </div>
    </>
  )
}

export default UserComplaints;
