import React from 'react';
import moment from 'moment-timezone';


import Header from '../Header/Header';




import './UserMeters.css';

function UserMeters(props) {
  const [dayNow, setDayNow] = React.useState('');
  const [monthNow, setMonthNow] = React.useState('');
  React.useEffect(() => {
    setDayNow(Number(moment().tz("Europe/Moscow").format('D')))
    setMonthNow(Number(moment().tz("Europe/Moscow").format('MM')))
  }, []);

  function handleOpen(){
    props.handleUpdateMetersOpenClick()
  }

  return (
    <>
      <Header isAdmin={props.isAdmin} handleMenuOpenClick={props.handleMenuOpenClick} loggedIn={props.loggedIn} />
      <div className="usermeters">
        <h2 className="usermeters__title">Мои счётчики</h2>
        {(props.currentUser && props.currentUser.meterReadings.length > 0) ?
          <>
            <div className="usermeters__indications-container">
              <p className="usermeters__indications-title">Последние показания</p>
              <p className="usermeters__date">{props.currentUser && props.currentUser.meterReadings[props.currentUser.meterReadings.length - 1].time}</p>
              <div className="usermeters__indications">
                <p className="usermeters__indication">ГВС {props.currentUser && props.currentUser.meterReadings[props.currentUser.meterReadings.length - 1].hotWaterSupply}</p>
                <p className="usermeters__indication">ХВС {props.currentUser && props.currentUser.meterReadings[props.currentUser.meterReadings.length - 1].coldWaterSupply}</p>
              </div>
            </div>
            {(dayNow && dayNow >= 20 && dayNow <= 25) ?
              <>
                {(monthNow && props.currentUser && monthNow === Number(props.currentUser.meterReadings[props.currentUser.meterReadings.length - 1].time.split('.')[1])) ?
                  <p className="usermeters__notdate">Вы уже отправляли показания в этом месяце</p>
                  :
                  <button className="usermeters__update" onClick={handleOpen}>Обновить показания</button>
                }

              </>
              :
              <p className="usermeters__notdate">Вы сможете обновить показания только в период с 20 по 25 числа месяца</p>
            }

          </>
          :
          <>
            <p className="usermeters__notsend">Вы ещё не отправляли показания счетчиков</p>
            {(dayNow && dayNow >= 20 && dayNow <= 25) ?
              <button className="usermeters__update" onClick={handleOpen}>Обновить показания</button>
              :
              <p className="usermeters__notdate">Вы сможете обновить показания только в период с 20 по 25 числа месяца</p>
            }
          </>}
      </div>
    </>
  )
}

export default UserMeters;
