import React from 'react';




import './ComplaintCard.css';

function ComplaintCard(props) {
  let status;
  if (props.status === 'waiting') {
    status = 'В ожидании'
  } else if (props.status === 'in_work') {
    status = 'В работе'
  } else if (props.status === 'done') {
    status = 'Выполнено'
  } else if (props.status === 'rejected') {
    status = 'Отклонено'
  }
  return (
    <>
      {props.image !== 'not image' ?
        <div className="complaint-card complaint-card_type_with-img">
          <img className="complaint-card__image" src={`https://api-prof.ru${props.image}`} alt="Фото жалобы"></img>
          <h2 className="complaint-card__title">{props.text}</h2>
          <div className="complaint-card__info-container">
            <p className="complaint-card__date">{props.date.split(' ')[0]}</p>
            <p className={`complaint-card__status ${((props.status === 'in_work') && 'complaint-card__status_blue')} ${((props.status === 'rejected') && 'complaint-card__status_red')} ${((props.status === 'done') && 'complaint-card__status_green')}`} >{status}</p>
          </div>
        </div> :
        <div className="complaint-card complaint-card_type_without-img">
          <h2 className="complaint-card__title_without-img">{props.text}</h2>
          <div className="complaint-card__info-container">
            <p className="complaint-card__date">{props.date.split(' ')[0]}</p>
            <p className={`complaint-card__status ${((props.status === 'in_work') && 'complaint-card__status_blue')} ${((props.status === 'rejected') && 'complaint-card__status_red')} ${((props.status === 'done') && 'complaint-card__status_green')}`} >{status}</p>
          </div>
        </div>
      }
    </>
  )
}

export default ComplaintCard;
