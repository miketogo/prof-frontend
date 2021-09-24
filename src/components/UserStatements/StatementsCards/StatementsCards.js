import React from 'react';


import StatementsCard from '../StatementsCard/StatementsCard'


import './StatementsCards.css';

function StatementsCards(props) {

  return (
    <div className='statement-cards'>
      {props.allAppeals && props.allAppeals.filter((item) => {
        if (item.type === 'statement') {
          return item
        } return false
      }).length === 0 &&  props.selectedType !== 'Ожидание' &&  props.selectedType !== 'В работе' &&  props.selectedType !== 'Доставлено' &&  props.selectedType !== 'Отклонено'&&<p className='statement-cards__text'>Вы ещё не заказывали справок</p>}

      {props.allAppeals && props.selectedType === 'Все' && props.allAppeals.map((item, i) => (
        // console.log(item)
        item.type === 'statement' ? <StatementsCard text={item.text} status={item.status} image={item.image} date={item.dateOfRequest} key={item._id} /> : <></>
      ))}


      {props.allAppeals && props.selectedType === 'Ожидание' && props.allAppeals.filter((item) => {
        if (item.type === 'statement' && item.status === 'waiting') {
          return item
        } return false
      }).length === 0 && <p className='statement-cards__text'>У вас нет справок со статусом "Ожидание"</p>}

      {props.allAppeals && props.selectedType === 'Ожидание' &&
        props.allAppeals.map((item, i) => (
          // console.log(item)
          item.type === 'statement' && item.status === 'waiting' ? <StatementsCard text={item.text} status={item.status} image={item.image} date={item.dateOfRequest} key={item._id} /> : <></>
        ))}


      {props.allAppeals && props.selectedType === 'В работе' && props.allAppeals.filter((item) => {
        if (item.type === 'statement' && item.status === 'in_work') {
          return item
        } return false
      }).length === 0 && <p className='statement-cards__text'>У вас нет справок со статусом "В работе"</p>}

      {props.allAppeals && props.selectedType === 'В работе' &&
        props.allAppeals.map((item, i) => (
          // console.log(item)
          item.type === 'statement' && item.status === 'in_work' ? <StatementsCard text={item.text} status={item.status} image={item.image} date={item.dateOfRequest} key={item._id} /> : <></>
        ))}


      {props.allAppeals && props.selectedType === 'Доставлено' && props.allAppeals.filter((item) => {
        if (item.type === 'statement' && item.status === 'done') {
          return item
        } return false
      }).length === 0 && <p className='statement-cards__text'>У вас нет справок со статусом "Доставлено"</p>}

      {props.allAppeals && props.selectedType === 'Доставлено' &&
        props.allAppeals.map((item, i) => (
          // console.log(item)
          item.type === 'statement' && item.status === 'done' ? <StatementsCard text={item.text} status={item.status} image={item.image} date={item.dateOfRequest} key={item._id} /> : <></>
        ))}


      {props.allAppeals && props.selectedType === 'Отклонено' && props.allAppeals.filter((item) => {
        if (item.type === 'statement' && item.status === 'rejected') {
          return item
        } return false
      }).length === 0 && <p className='statement-cards__text'>У вас нет справок со статусом "Отклонено"</p>}

      {props.allAppeals && props.selectedType === 'Отклонено' &&
        props.allAppeals.map((item, i) => (
          // console.log(item)
          item.type === 'statement' && item.status === 'rejected' ? <StatementsCard text={item.text} status={item.status} image={item.image} date={item.dateOfRequest} key={item._id} /> : <></>
        ))}
    </div>
  )
}

export default StatementsCards;
// : <p>Вы еще не отправили ни одной жалобы</p>
