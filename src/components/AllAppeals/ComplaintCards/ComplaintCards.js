import React from 'react';


import ComplaintCard from '../ComplaintCard/ComplaintCard'


import './ComplaintCards.css';

function ComplaintCards(props) {

  return (
    <div className='complaint-cards'>
      {props.allAppeals && props.allAppeals.length === 0 && <p className='complaint-cards__text'>Нет обращений</p>}

      {props.allAppeals && props.selectedType === 'Все' && props.selectedHouse === 'Все' && props.allAppeals.map((item, i) => (
        // console.log(item)
        <ComplaintCard item={item} handleAppealClick={props.handleAppealClick} key={item._id + i + 'alll' + Math.random()} />
      ))}


      {props.allAppeals && props.selectedType !== 'Все' && props.selectedHouse === 'Все' && props.allAppeals.filter((item) => {
        if (item.status === props.statusEn) {
          return item
        } return false
      }).length === 0 && <p className='complaint-cards__text'>Нет обращений со статусом "{props.selectedType}"</p>}

      {props.allAppeals && props.selectedType !== 'Все' && props.selectedHouse === 'Все' &&
        props.allAppeals.map((item, i) => (
          // console.log(item)
          item.status === props.statusEn ? <ComplaintCard item={item} handleAppealClick={props.handleAppealClick} key={item._id + i + item.status + Math.random()} /> : <></>
        ))}

      {props.allAppeals && props.selectedType === 'Все' && props.selectedHouse !== 'Все' && props.allAppeals.filter((item) => {
        if (item.owner !== null && item.owner.house.name === props.selectedHouse) {
          return item
        } return false
      }).length === 0 && <p className='complaint-cards__text'>В доме {props.selectedHouse} нет обращений</p>}

      {props.allAppeals && props.selectedType === 'Все' && props.selectedHouse !== 'Все' &&
        props.allAppeals.map((item, i) => (
          // console.log(item.owner !== null && item.owner.house.name === props.selectedHouse)
          (item.owner !== null && item.owner.house.name === props.selectedHouse) ? <ComplaintCard handleAppealClick={props.handleAppealClick} item={item} key={item._id + i + item.status + Math.random()} /> : <></>
        ))}

      {props.allAppeals && props.selectedType !== 'Все' && props.selectedHouse !== 'Все' && props.allAppeals.filter((item) => {
        if (item.owner !== null && item.owner.house.name === props.selectedHouse && item.status === props.statusEn) {
          return item
        } return false
      }).length === 0 && <p className='complaint-cards__text'>В доме {props.selectedHouse} нет обращений со статусом "{props.selectedType}"</p>}

      {props.allAppeals && props.selectedType !== 'Все' && props.selectedHouse !== 'Все' &&
        props.allAppeals.map((item, i) => (
          // console.log(item.owner !== null && item.owner.house.name === props.selectedHouse)
          (item.owner !== null && item.owner.house.name === props.selectedHouse && item.status === props.statusEn) ? <ComplaintCard handleAppealClick={props.handleAppealClick} item={item} key={item._id + i + item.status + Math.random()} /> : <></>
        ))}


    </div>
  )
}

export default ComplaintCards;
// : <p>Вы еще не отправили ни одной жалобы</p>
