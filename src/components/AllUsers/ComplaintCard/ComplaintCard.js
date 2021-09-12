import React from 'react';




import './ComplaintCard.css';

function ComplaintCard(props) {

  function handleClick(){
    props.handleUserClick(props.item)
  }
  return (
    <>


        <div className={`complaint-card complaint-card_type_without-img`} onClick={handleClick}>
          <h2 className="complaint-card__title_without-img">{props.item !== null && `${props.item.lastname} ${props.item.firstname} ${props.item.patronymic !== "Отсутствует" ? `${props.item.patronymic}` : ''}`}</h2>
          <div className="complaint-card__info-container">
            <p className="complaint-card__date">{props.item.house.name}</p>
            <p className={`complaint-card__status `} >Квартира {props.item.flat}</p>
          </div>
        </div>

    </>
  )
}

export default ComplaintCard;
