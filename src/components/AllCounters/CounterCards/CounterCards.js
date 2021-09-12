import React from 'react';


import CounterCard from '../CounterCard/CounterCard'


import './CounterCards.css';

function CounterCards(props) {

  return (
    <div className='counter-cards'>
      { props.allAdminsUsers && props.selectedHouse === 'Все' && props.allAdminsUsers.length === 0 && <p className='counter-cards__text'>Не найдено пользователей</p>}

      { props.allAdminsUsers && props.selectedHouse === 'Все' &&  props.allAdminsUsers.map((item, i) => (
        // console.log(item)
        ((item && item.meterReadings &&item.meterReadings.length > 0) ?
        <CounterCard item={item} handleUserClick={props.handleUserClick} key={item._id + i + 'all'} />
        :
        <></>
        )

      ))}



      { props.allAdminsUsers  && props.selectedHouse !== 'Все' &&  props.allAdminsUsers.filter((item) => {
        if (item.house !== null && item.house.name === props.selectedHouse) {
          return item
        } return false
      }).length === 0 && <p className='counter-cards__text'>В доме {props.selectedHouse} не найдено пользователей</p>}

      { props.allAdminsUsers && props.selectedHouse !== 'Все' &&
        props.allAdminsUsers.map((item, i) => (
          // console.log(item.owner !== null && item.owner.house.name === props.selectedHouse)
          (item.house !== null && item.house.name === props.selectedHouse && item.meterReadings &&item.meterReadings.length > 0) ? <CounterCard handleUserClick={props.handleUserClick} item={item} key={item._id + i } /> : <></>
        ))}



    </div>
  )
}

export default CounterCards;
// : <p>Вы еще не отправили ни одной жалобы</p>
