
class MainApi {
  constructor({ baseUrl }) {
    this._BASE_URL = baseUrl
  }

  register(fullname, email, password, house, flat, phone) {
    return fetch(`${this._BASE_URL}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "fullname": fullname,
        "password": password,
        "email": email,
        "house": house,
        "flat": flat,
        "phone": phone
      }
      )
    }).then(this._checkResponse)
  };

  auth(email, password) {
    return fetch(`${this._BASE_URL}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "password": password,
        "email": email
      }
      )
    }).then(this._checkResponse)
  }

  jwtCheck(jwt) {
    return fetch(`${this._BASE_URL}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",

        "Authorization": `Bearer ${jwt}`
      }
    }).then(this._checkResponse)

  }
  getUserAppeals(jwt) {
    return fetch(`${this._BASE_URL}/appeals/my`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",

        "Authorization": `Bearer ${jwt}`
      }
    }).then(this._checkResponse)

  }
  adminCheck(jwt) {
    return fetch(`${this._BASE_URL}/users/is-administrator`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",

        "Authorization": `Bearer ${jwt}`
      }
    }).then(this._checkResponse)

  }
  getUserAvilibleStatements(jwt) {
    return fetch(`${this._BASE_URL}/houses/statements`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",

        "Authorization": `Bearer ${jwt}`
      }
    }).then(this._checkResponse)

  }
  getAllAppeals(jwt) {
    return fetch(`${this._BASE_URL}/appeals/all`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",

        "Authorization": `Bearer ${jwt}`
      }
    }).then(this._checkResponse)

  }
  getAllUsers(jwt) {
    return fetch(`${this._BASE_URL}/users`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",

        "Authorization": `Bearer ${jwt}`
      }
    }).then(this._checkResponse)

  }
  getSurveyResults(jwt) {
    return fetch(`${this._BASE_URL}/survey`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",

        "Authorization": `Bearer ${jwt}`
      }
    }).then(this._checkResponse)

  }
  getEmailsSent(jwt) {
    return fetch(`${this._BASE_URL}/sent-emails`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",

        "Authorization": `Bearer ${jwt}`
      }
    }).then(this._checkResponse)

  }
  postSurveyResult(houseMenagmentValue, addressValue, secondnameValue, firstnameValue, emailValue, flatValue, phoneValue, monthPayValue) {
    return fetch(`${this._BASE_URL}/survey`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": emailValue, // Валидный email
        "firstname": firstnameValue, // Имя
        "secondname": secondnameValue, // Фамилия
        "address": addressValue, // Адресс дома
        "homeOrg": houseMenagmentValue, // Название домоуправленческой организации
        "phone": phoneValue, // Номер телефона, минимально 11 символов
        "area": Number(flatValue), // Площадь квартиры, число
        "monthPay": monthPayValue // Платеж в месяц
      }
      )
    }).then(this._checkResponse)
  }
  orderStatement(jwt, value) {
    return fetch(`${this._BASE_URL}/appeals/order-statement`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${jwt}`
      },
      body: JSON.stringify({
        "value": value
      }
      )
    }).then(this._checkResponse)
  }
  addHouse(jwt, name, formValue, city, address, statements, entranceArray) {
    return fetch(`${this._BASE_URL}/houses/add`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${jwt}`
      },
      body: JSON.stringify({
        "name": name,
        "formValue": formValue,
        "city": city,
        "address": address,
        "statements": statements,
        "entranceArray": entranceArray,
      }
      )
    }).then(this._checkResponse)
  }

  changeStatusNotRejected(jwt, status, appeal_id) {
    return fetch(`${this._BASE_URL}/appeals/change-status`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${jwt}`
      },
      body: JSON.stringify({
        "status": status,
        "appeal_id": appeal_id
      }
      )
    }).then(this._checkResponse)
  }
  changeStatusRejected(jwt, status, appeal_id, rejectReason) {
    return fetch(`${this._BASE_URL}/appeals/change-status`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${jwt}`
      },
      body: JSON.stringify({
        "status": status,
        "appeal_id": appeal_id,
        "rejectReason": rejectReason
      }
      )
    }).then(this._checkResponse)
  }

  updateMeters(jwt, hot, cold) {
    return fetch(`${this._BASE_URL}/users/meter-update`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${jwt}`
      },
      body: JSON.stringify({
        "hotWater": hot,
        "coldWater": cold
      }
      )
    }).then(this._checkResponse)
  }

  sendMailAgain(jwt) {
    return fetch(`${this._BASE_URL}/emailCheck/send-again`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",

        "Authorization": `Bearer ${jwt}`
      }
    }).then(this._checkResponse)

  }
  addComplaint(jwt, data) {
    return fetch(`${this._BASE_URL}/appeals/create-complaint`, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${jwt}`
      },
      body: data
    }).then(this._checkResponse)

  }
  getHouses() {
    return fetch(`${this._BASE_URL}/all-houses`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    }).then(this._checkResponse)

  }


  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    else {
      var statusCode = res.status
      return res.json().then((res) => {
        return Promise.reject({
          statusCode: statusCode,
          message: res.message
        })
      })
    }
    ;
  }

}

const mainApi = new MainApi({
  baseUrl: 'https://www.api-prof.ru'
  // baseUrl: 'http://localhost:3003'
});
export default mainApi
