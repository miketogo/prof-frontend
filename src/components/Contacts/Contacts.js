import Header from '../Header/Header';
import './Contacts.css';
import React from "react";






function Contacts(props) {
  return (
    <>
      <Header isAdmin={props.isAdmin} handleMenuOpenClick={props.handleMenuOpenClick} loggedIn={props.loggedIn} />
      <div className="contacts" id="contacts">
        <h2 className="contacts__title">Контакты</h2>
        <div className="contacts__two-chapters-container">

          <div className="contacts__chapter-container">
            <h3 className="contacts__chapter-title">Если возникли проблемы с сайтом</h3>

            <p className="contacts__chapter-text">Отправьте нам письмо - <a target="_blank" rel="noreferrer" className="contacts__chapter-text" href="mailto:support@prof-uk.ru">support@prof-uk.ru</a></p>
          </div>
          <div className="contacts__chapter-container">
            <h3 className="contacts__chapter-title">Привязать телеграм</h3>

            <p className="contacts__chapter-text"><a target="_blank" rel="noreferrer" className="contacts__chapter-text" href="https://t.me/prof_uk_bot">@prof_uk_bot</a></p>
          </div>
        </div>
        <div className="contacts__two-chapters-container">
          <div className="contacts__chapter-container">
            <h3 className="contacts__chapter-title">Ново-Александровская 14</h3>
            <p className="contacts__chapter-text">
              Круглосуточная диспетчерская служба - <a className="contacts__chapter-text" href="tel:88124949798">8 (812) 494-97-28</a>
              <br />
              <br />
              Управляющий домом - Григорий Юрьевич <a className="contacts__chapter-text" href="tel:+79219608077">+7 (921) 960-80-77</a>
              <br />
              <br />
              Офис (9-18 пн-пт) - <a className="contacts__chapter-text" href="tel:88124949723">8 (812) 494-97-23</a>
            </p>
          </div>
          <div className="contacts__chapter-container">
            <h3 className="contacts__chapter-title">Ярославский 78</h3>
            <p className="contacts__chapter-text">
              Круглосуточная диспетчерская служба - <a className="contacts__chapter-text" href="tel:88126767641">8 (812) 676-76-41</a>
              <br />
              <br />
              Управляющий домом - Сергей Тамерланович <a className="contacts__chapter-text" href="tel:+79291122501">+7 (929) 112-25-01</a>
              <br />
              <br />
              Офис (8:30-17:30 пн-пт) - <a className="contacts__chapter-text" href="tel:88126767640">8 (812) 676-76-40</a>
            </p>
          </div>
        </div>
        <div className="contacts__two-chapters-container">
          <div className="contacts__chapter-container">
            <h3 className="contacts__chapter-title">Ярославский 95</h3>
            <p className="contacts__chapter-text">
              Круглосуточная диспетчерская служба - <a className="contacts__chapter-text" href="tel:88122965424">8 (812) 296-54-24</a>
              <br />
              <br />
              Управляющий домом - Алексей Евгеньевич  (9-17 пн-пт) <a className="contacts__chapter-text" href="tel:+79626865118">+7 (962) 686-51-18</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
