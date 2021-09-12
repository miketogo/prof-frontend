import React from 'react';




import './CounterCard.css';

function CounterCard(props) {

  // function handleClick(){
  //   props.handleUserClick(props.item)
  // }
  return (
    <>


        <div className={`counter-card counter-card_type_without-img`}>
          <h2 className="counter-card__title_without-img">Квартира {props.item.flat}</h2>
          <div className="counter-card__info-container">
            <p className="counter-card__date">{props.item !== null && `${props.item.lastname} ${props.item.firstname.substring(0,1)}. ${props.item.patronymic !== "Отсутствует" ? `${props.item.patronymic.substring(0,1)}.` : ''}`}</p>
            <p className={`counter-card__status `} >Дата {props.item.meterReadings && props.item.meterReadings.length > 0 && props.item.meterReadings[props.item.meterReadings.length - 1].time}</p>
          </div>
          <div className="counter-card__info-container">
            <p className="counter-card__date">{props.item.house.name}</p>
            <p className={`counter-card__status `} >ГВС {props.item.meterReadings && props.item.meterReadings.length > 0 && props.item.meterReadings[props.item.meterReadings.length - 1].hotWaterSupply} | ХВС { props.item.meterReadings && props.item.meterReadings.length > 0 && props.item.meterReadings[props.item.meterReadings.length - 1].coldWaterSupply}</p>
          </div>

        </div>

    </>
  )
}

export default CounterCard;
