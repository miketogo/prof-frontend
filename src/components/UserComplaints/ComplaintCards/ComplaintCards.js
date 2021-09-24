import React from 'react';


import ComplaintCard from '../ComplaintCard/ComplaintCard'


import './ComplaintCards.css';

function ComplaintCards(props) {

  return (
    <div className='complaint-cards'>
      {props.allAppeals && props.allAppeals.filter((item) => {
        if (item.type === 'complaint') {
          return item
        } return false
      }).length === 0  &&  props.selectedType !== 'Ожидание' &&  props.selectedType !== 'В работе' &&  props.selectedType !== 'Выполнено' &&  props.selectedType !== 'Отклонено'&& <p className='complaint-cards__text'>Вы ещё не оставляли жалоб</p>}

      {props.allAppeals && props.selectedType === 'Все' && props.allAppeals.map((item, i) => (
        // console.log(item)
        item.type === 'complaint' ? <ComplaintCard text={item.text} status={item.status} image={item.image} date={item.dateOfRequest} key={item._id+ i + 'all'} /> : <></>
      ))}


      {props.allAppeals && props.selectedType === 'Ожидание' && props.allAppeals.filter((item) => {
        if (item.type === 'complaint' && item.status === 'waiting') {
          return item
        } return false
      }).length === 0 && <p className='complaint-cards__text'>У вас нет жалоб со статусом "Ожидание"</p>}

      {props.allAppeals && props.selectedType === 'Ожидание' &&
        props.allAppeals.map((item, i) => (
          // console.log(item)
          item.type === 'complaint' && item.status === 'waiting' ? <ComplaintCard text={item.text} status={item.status} image={item.image} date={item.dateOfRequest} key={item._id + i  + 'wait'} /> : <></>
        ))}


      {props.allAppeals && props.selectedType === 'В работе' && props.allAppeals.filter((item) => {
        if (item.type === 'complaint' && item.status === 'in_work') {
          return item
        } return false
      }).length === 0 && <p className='complaint-cards__text'>У вас нет жалоб со статусом "В работе"</p>}

      {props.allAppeals && props.selectedType === 'В работе' &&
        props.allAppeals.map((item, i) => (
          // console.log(item)
          item.type === 'complaint' && item.status === 'in_work' ? <ComplaintCard text={item.text} status={item.status} image={item.image} date={item.dateOfRequest} key={item._id + i  + 'work'} /> : <></>
        ))}


      {props.allAppeals && props.selectedType === 'Выполнено' && props.allAppeals.filter((item) => {
        if (item.type === 'complaint' && item.status === 'done') {
          return item
        } return false
      }).length === 0 && <p className='complaint-cards__text'>У вас нет жалоб со статусом "Выполнено"</p>}

      {props.allAppeals && props.selectedType === 'Выполнено' &&
        props.allAppeals.map((item, i) => (
          // console.log(item)
          item.type === 'complaint' && item.status === 'done' ? <ComplaintCard text={item.text} status={item.status} image={item.image} date={item.dateOfRequest} key={item._id  + i + 'done'} /> : <></>
        ))}


      {props.allAppeals && props.selectedType === 'Отклонено' && props.allAppeals.filter((item) => {
        if (item.type === 'complaint' && item.status === 'rejected') {
          return item
        } return false
      }).length === 0 && <p className='complaint-cards__text'>У вас нет жалоб со статусом "Отклонено"</p>}

      {props.allAppeals && props.selectedType === 'Отклонено' &&
        props.allAppeals.map((item, i) => (
          // console.log(item)
          item.type === 'complaint' && item.status === 'rejected' ? <ComplaintCard text={item.text} status={item.status} image={item.image} date={item.dateOfRequest} key={item._id + i  + 'reject'} /> : <></>
        ))}
    </div>
  )
}

export default ComplaintCards;
// : <p>Вы еще не отправили ни одной жалобы</p>
