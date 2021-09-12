import React from 'react';




import './SurveyCard.css';

function SurveyCard(props) {


  return (
    <>


      <div className={`survey-card survey-card_type_without-img`}>
        <h2 className="survey-card__title_without-img">{props.item !== null && `${props.item.secondname} ${props.item.firstname}`}</h2>
        <div className="survey-card__info-container">
          <p className="survey-card__date">{props.item.date}</p>
          <p className={`survey-card__status `} > Площадь - {props.item.area}м</p>
        </div>
        <div className="survey-card__info-container">
          <p className="survey-card__date">Платеж в месяц за 1м<sup>2</sup></p>
          <p className={`survey-card__status `} >{(props.item.monthPay / props.item.area).toString().substring(0,4)} &#8381;</p>
        </div>
        <div className="survey-card__info-container">
          <p className="survey-card__date">Email </p>
          <p className={`survey-card__status `} >{props.item.email}</p>
        </div>
        <div className="survey-card__info-container">
          <p className={`survey-card__status `} >Адресс </p>
          <p className={`survey-card__status `} > {props.item.address}</p>
        </div>
        <div className="survey-card__info-container">
          <p className={`survey-card__status `} >Название тсж </p>
          <p className={`survey-card__status `} >{props.item.homeOrg}</p>
        </div>
        <div className="survey-card__info-container">
          <p className={`survey-card__status `} >Телефон </p>
          <p className={`survey-card__status `} >{props.item.phone}</p>
        </div>

      </div>

    </>
  )
}

export default SurveyCard;
