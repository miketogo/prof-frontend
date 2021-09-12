import React from 'react';




import './ComplaintCard.css';

function ComplaintCard(props) {
  let status;

  if (props.item.status === 'waiting') {
    status = 'В ожидании'
  } else if (props.item.status === 'in_work') {
    status = 'В работе'
  } else if (props.item.status === 'done') {
    status = 'Выполнено'
  } else if (props.item.status === 'rejected') {
    status = 'Отклонено'
  }
  function handleClick(){
    props.handleAppealClick(props.item)
  }
  return (
    <>
      {props.item.image !== 'not image' ?
        <div className={`complaint-card complaint-card_type_with-img ${((props.item.status === 'waiting') && 'complaint-card_blue')} ${((props.item.status === 'rejected') && 'complaint-card_red')} ${((props.item.status === 'done') && 'complaint-card_green')}`} onClick={handleClick}>
          <img className="complaint-card__image" src={`https://api-prof.ru${props.item.image}`} alt="Фото жалобы"></img>
          <h2 className="complaint-card__title">{props.item.text}</h2>
          <div className="complaint-card__info-container">
            <p className="complaint-card__date">{props.item.dateOfRequest.split(' ')[0]}</p>
            <p className={`complaint-card__status ${((props.item.status === 'in_work') && 'complaint-card__status_blue')} ${((props.item.status === 'rejected') && 'complaint-card__status_red')} ${((props.item.status === 'done') && 'complaint-card__status_green')}`} >{status}</p>
          </div>
        </div> :
        <div className={`complaint-card complaint-card_type_without-img ${((props.item.status === 'waiting') && 'complaint-card_blue')} ${((props.item.status === 'rejected') && 'complaint-card_red')} ${((props.item.status === 'done') && 'complaint-card_green')}`} onClick={handleClick}>
          <h2 className="complaint-card__title_without-img">{props.item.text}</h2>
          <div className="complaint-card__info-container">
            <p className="complaint-card__date">{props.item.dateOfRequest.split(' ')[0]}</p>
            <p className={`complaint-card__status ${((props.item.status === 'in_work') && 'complaint-card__status_blue')} ${((props.item.status === 'rejected') && 'complaint-card__status_red')} ${((props.item.status === 'done') && 'complaint-card__status_green')}`} >{status}</p>
          </div>
        </div>
      }
    </>
  )
}

export default ComplaintCard;
