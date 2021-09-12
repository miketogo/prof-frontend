import React from 'react';



import './StatementsCard.css';

function StatementsCard(props) {
  let status;
  if (props.status === 'waiting') {
    status = 'В ожидании'
  } else if (props.status === 'in_work') {
    status = 'В работе'
  } else if (props.status === 'done') {
    status = 'Доставлено'
  } else if (props.status === 'rejected') {
    status = 'Отклонено'
  }
  return (
    <>
      {
        <div className="statement-card complaint-card_type_without-img">
          <h2 className="statement-card__title_without-img">{props.text.split("\"")[1]}</h2>
          <div className="statement-card__info-container">
            <p className="statement-card__date">{props.date.split(' ')[0]}</p>
            <p className={`statement-card__status ${((props.status === 'in_work') && 'statement-card__status_blue')} ${((props.status === 'rejected') && 'statement-card__status_red')} ${((props.status === 'done') && 'complaint-card__status_green')}`} >{status}</p>
          </div>
        </div>
      }
    </>
  )
}

export default StatementsCard;
