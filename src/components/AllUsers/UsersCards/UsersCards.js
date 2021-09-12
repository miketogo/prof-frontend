import React from 'react';

import ComplaintCard from '../ComplaintCard/ComplaintCard'


import './UsersCards.css';

function ComplaintCards(props) {

  return (
    <div className='users-cards'>
      { props.allAdminsUsers && props.selectedHouse === 'Все' && props.allAdminsUsers.length === 0 && <p className='users-cards__text'>Не найдено пользователей</p>}

      { props.allAdminsUsers && props.selectedHouse === 'Все' &&  props.allAdminsUsers.map((item, i) => (
        // console.log(item)
        <ComplaintCard item={item} handleUserClick={props.handleUserClick} key={item._id + i + 'all'} />
      ))}



      { props.allAdminsUsers  && props.selectedHouse !== 'Все' &&  props.allAdminsUsers.filter((item) => {
        if (item.house !== null && item.house.name === props.selectedHouse) {
          return item
        } return false
      }).length === 0 && <p className='users-cards__text'>В доме {props.selectedHouse} не найдено пользователей</p>}

      { props.allAdminsUsers && props.selectedHouse !== 'Все' &&
        props.allAdminsUsers.map((item, i) => (
          // console.log(item.owner !== null && item.owner.house.name === props.selectedHouse)
          (item.house !== null && item.house.name === props.selectedHouse) ? <ComplaintCard handleUserClick={props.handleUserClick} item={item} key={item._id + i } /> : <></>
        ))}



    </div>
  )
}

export default ComplaintCards;
// : <p>Вы еще не отправили ни одной жалобы</p>
