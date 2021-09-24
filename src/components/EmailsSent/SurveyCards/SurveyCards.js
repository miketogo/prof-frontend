import React from 'react';


import EmailCard from '../EmailCard/EmailCard'


import './SurveyCards.css';

function SurveyCards(props) {

  return (
    <div className='survey-cards'>
      { props.allSurveyResults && props.allSurveyResults.length === 0 && <p className='survey-cards__text'>Не найдено отправленных писем</p>}

      { props.allSurveyResults &&  props.allSurveyResults.map((item, i) => (
        // console.log(item)
        <EmailCard item={item}  key={item._id + i + 'all'} />
      ))}



      {/* { props.allAdminsUsers  && props.selectedHouse !== 'Все' &&  props.allAdminsUsers.filter((item) => {
        if (item.house !== null && item.house.name === props.selectedHouse) {
          return item
        } return false
      }).length === 0 && <p className='users-cards__text'>В доме {props.selectedHouse} не найдено пользователей</p>}

      { props.allAdminsUsers && props.selectedHouse !== 'Все' &&
        props.allAdminsUsers.map((item, i) => (
          // console.log(item.owner !== null && item.owner.house.name === props.selectedHouse)
          (item.house !== null && item.house.name === props.selectedHouse) ? <ComplaintCard handleUserClick={props.handleUserClick} item={item} key={item._id + i } /> : <></>
        ))} */}



    </div>
  )
}

export default SurveyCards;
// : <p>Вы еще не отправили ни одной жалобы</p>
