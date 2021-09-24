import '../../../index.css';
import './AboutProject.css';
import React from "react";






function AboutProject(props) {
  return (
    <div className="about-project" id="why-us-better">
      <h2 className="about-project__title">Почему для многоквартирного дома лучше УК, чем ТСЖ?</h2>
      <div className="about-project__two-chapters-container">
        <div className="about-project__chapter-container">
          <h3 className="about-project__chapter-title">Выполняем работу качественно</h3>
          <p className="about-project__chapter-text">Управляющая компания не заинтересована в предельной экономии средств, ввиду чего выполняет ремонт, оснащение дома более качественно.</p>
        </div>
        <div className="about-project__chapter-container">
          <h3 className="about-project__chapter-title">Удобная связь</h3>
          <p className="about-project__chapter-text">С управляющей компанией гораздо проще связаться. Например, через наш сайт или социальные сети. А также по номеру телефона <a className="about-project__chapter-text"  href="tel:88124949798">8 (812) 494-97-28</a></p>
        </div>
      </div>
      {props.screenWidth <= 586 ?
      <></>
      :
        <>
        <div className="about-project__two-chapters-container">
        <div className="about-project__chapter-container">
          <h3 className="about-project__chapter-title">Всё вовремя</h3>
          <p className="about-project__chapter-text">Все работы выполняются нанятыми подрядчиками в чётко установленные сроки.</p>
        </div>
        <div className="about-project__chapter-container">
          <h3 className="about-project__chapter-title">Фиксированная оплата</h3>
          <p className="about-project__chapter-text">Незапланированные траты отсутствуют, так как оплата работы управляющей компании фиксированная, а все необходимые услуги выполняются ею автоматически.</p>
        </div>
      </div>
      <div className="about-project__two-chapters-container">
        <div className="about-project__chapter-container">
          <h3 className="about-project__chapter-title">Решаем проблемы домов</h3>
          <p className="about-project__chapter-text">В отличие от товарищества собственников жилья, выдвиженцы которого могут оказаться некомпетентными, хоть и активными людьми (из-за чего важные дела дома будут разрешаться хуже), управляющая компания решает проблемы быстрее и разумнее.</p>
        </div>
        <div className="about-project__chapter-container">
          <h3 className="about-project__chapter-title">Есть средства на незапланированные траты</h3>
          <p className="about-project__chapter-text">По сравнению с товариществом собственников жилья, у которого мало отложенных средств, управляющая компания обладает весьма крупным капиталом, что позволяет разрешить неожиданно возникающие проблемы.</p>
        </div>
      </div>
        </>
        }

      <h2 className="about-project__graph-title">Ежемесячный платеж</h2>
      <div className="about-project__graph">

        <div className="about-project__graph-green">
          <p className="about-project__graph-text-green">~300₽</p>
        </div>
        <div className="about-project__graph-gray">
          <p className="about-project__graph-text-gray">~1000₽ и более</p>
        </div>
        <p className="about-project__graph-subtitle">С УК</p>
        <p className="about-project__graph-subtitle">С ТСЖ</p>
      </div>
    </div>
  );
}

export default AboutProject;
