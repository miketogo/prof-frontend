import '../../../index.css';
import './WhyUs.css';
import React from "react";






function WhyUs(props) {
  return (
    <div className="why-us" id="why-us">
      <div className="why-us__container">
        <h2 className="why-us__title">Почему именно наша УК?</h2>
        <h3 className="why-us__subtitle">Более 5 лет</h3>
        <p className="why-us__text">Мы занимаемся управлением домами, являясь опытной компанией.</p>
        <div className="why-us__two-chapters-container">
          <div className="why-us__chapter-container">
            <h3 className="why-us__chapter-title">Улучшение вашей жизни в доме</h3>
            <p className="why-us__chapter-text">Интересует каждого из наших сотрудников, благодаря чему они усердно работают над этим</p>
          </div>
          <div className="why-us__chapter-container">
            <h3 className="why-us__chapter-title">На нас можно положиться</h3>
            <p className="why-us__chapter-text">Ведь наши подрядчики — это такие уважаемые компании как <a target="_blank" rel="noreferrer" className="why-us__chapter-link" href="http://www.vodokanal.spb.ru/">Водоканал</a>, <a target="_blank" rel="noreferrer" className="why-us__chapter-link" href="https://psk-info.ru/">ПСК</a>, <a target="_blank" rel="noreferrer" className="why-us__chapter-link" href="https://www.gptek.spb.ru/">ТЭК</a>, <a target="_blank" rel="noreferrer" className="why-us__chapter-link" href="http://6120033.ru/">Патриот</a>,  <a target="_blank" rel="noreferrer" className="why-us__chapter-link" href="http://www.переработкарти.рф">СпецТехника</a>, <a target="_blank" rel="noreferrer" className="why-us__chapter-link" href="https://www.sknt.ru/">SkyNet</a>, <a target="_blank" rel="noreferrer" className="why-us__chapter-link" href="https://pakt.ru/">Пакт</a>, <a target="_blank" rel="noreferrer" className="why-us__chapter-link" href="https://rsvo.ru/">РСВО</a></p>
          </div>
        </div>
        {props.screenWidth <= 586 ?
          <></>
          :
          <div className="why-us__two-chapters-container">
            <div className="why-us__chapter-container">
              <h3 className="why-us__chapter-title">Мы предоставляем услуги своих юристов</h3>
              <p className="why-us__chapter-text">Чтобы Вам было легче подготовить все необходимые документы для перехода к Профессионалу</p>
            </div>
            <div className="why-us__chapter-container">
              <h3 className="why-us__chapter-title">Каждый жилец остаётся доволен</h3>
              <p className="why-us__chapter-text">Так как мы умеем находить индивидуальный подход к людям, чей комфорт нам важен</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default WhyUs;
