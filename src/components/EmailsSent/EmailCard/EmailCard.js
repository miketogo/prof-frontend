import React from 'react';




import './EmailCard.css';

function EmailCard(props) {


  return (
    <>


      <div className={`email-card email-card_type_without-img`}>
        <h2 className="email-card__title_without-img">{props.item !== null && props.item.to_user && props.item.to_user.email}</h2>
        <div className="email-card__info-container">
          <p className="email-card__date">{props.item.date}</p>

        </div>

        <p className="email-card__email-title">{props.item.title}</p>
        <p className="email-card__email-text">{props.item.text}</p>
        <div className="email-card__info-container">
          <p className="email-card__date">Получатель </p>
          <p className={`email-card__status `} >{props.item !== null && props.item.to_user && `${props.item.to_user.lastname} ${props.item.to_user.firstname}`}</p>
        </div>
        <div className="email-card__info-container">
          <p className={`email-card__status `} >Телефон </p>
          <p className={`email-card__status `} >{props.item !== null && props.item.to_user && props.item.to_user.phone}</p>
        </div>

      </div>

    </>
  )
}

export default EmailCard;
