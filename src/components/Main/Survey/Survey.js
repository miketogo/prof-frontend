import '../../../index.css';
import './Survey.css';
import React from "react";
import { Link } from 'react-router-dom';





function Survey(props) {
  return (
    <div className="survey" id="techs">
      <div className="survey__container">
        <h2 className="survey__title">Сколько Вы переплатили за домоуправленческие услуги?</h2>
        <h3 className="survey__subtitle">Пройдите опрос</h3>
        <p className="survey__text">И узнайте сколько вы могли бы сэкономить с Профессионалом</p>
        <Link className="survey__button" to="/survey">Пройти</Link>
      </div>
    </div>
  );
}

export default Survey;
