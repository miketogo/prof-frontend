import '../../index.css';
import './App.css';
import React, { Suspense } from "react";
import { Route, Switch, withRouter, Redirect, useHistory } from 'react-router-dom';
import { usePageVisibility } from 'react-page-visibility';






import MenuPopup from '../MenuPopup/MenuPopup';
import mainApi from '../../utils/MainApi';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import CurrentUserContext from '../CurrentUserContext/CurrentUserContext'
import AddComplaintPopup from '../AddComplaintPopup/AddComplaintPopup'
import OrderStatementPopup from '../OrderStatementPopup/OrderStatementPopup';
import UpdateMetersPopup from '../UpdateMetersPopup/UpdateMetersPopup';




import AppealPopup from '../AppealPopup/AppealPopup';
import UserPopup from '../UserPopup/UserPopup';



import ChangeAppealStatusPopup from '../ChangeAppealStatusPopup/ChangeAppealStatusPopup';
import Footer from '../Footer/Footer';


import Preloader from '../Preloader/Preloader';
import Register from '../Register/Register';


const Login = React.lazy(() => import('../Login/Login'));
const PageNotFound = React.lazy(() => import('../PageNotFound/PageNotFound'));
const EmailNotVerified = React.lazy(() => import('../EmailNotVerified/EmailNotVerified'));
const Profile = React.lazy(() => import('../Profile/Profile'));
const Main = React.lazy(() => import('../Main/Main'));
const UserComplaints = React.lazy(() => import('../UserComplaints/UserComplaints'));
const UserStatements = React.lazy(() => import('../UserStatements/UserStatements'));
const UserMeters = React.lazy(() => import('../UserMeters/UserMeters'));
const Contacts = React.lazy(() => import('../Contacts/Contacts'));
const UserCab = React.lazy(() => import('../UserCab/UserCab'));


const AdminCab = React.lazy(() => import('../AdminCab/AdminCab'));
const AllAppeals = React.lazy(() => import('../AllAppeals/AllAppeals'));
const AllUsers = React.lazy(() => import('../AllUsers/AllUsers'));
const AllCounters = React.lazy(() => import('../AllCounters/AllCounters'));
const SurveyResults = React.lazy(() => import('../SurveyResults/SurveyResults'));
const EmailsSent = React.lazy(() => import('../EmailsSent/EmailsSent'));
const AddHouse = React.lazy(() => import('../AddHouse/AddHouse'));

const SurveyForm = React.lazy(() => import('../SurveyForm/SurveyForm'));


function App(props) {
  const [isMenuPopupOpen, setMenuPopupOpen] = React.useState(false);
  const [isAdmin, setAdmin] = React.useState(undefined);
  const [isPreloaderVisible, setPreloaderVisible] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(undefined);
  const [allAppeals, setAllAppeals] = React.useState(null);
  const [allAdminsAppeals, setAllAdminsAppeals] = React.useState(null);
  const [allAdminsUsers, setAllAdminsUsers] = React.useState(null);
  const [allSurveyResults, setAllSurveyResults] = React.useState(null);
  const [allEmailsSent, setAllEmailsSent] = React.useState(null);
  const [userAvilibleStatements, setUserAvilibleStatements] = React.useState(null);
  const [loggedIn, setLoggedIn] = React.useState(undefined);
  const [apiErrorMessage, setApiErrorMessage] = React.useState('');
  const [profileMessage, setProfileMessage] = React.useState('');
  const [isAddComplaintOpen, setAddComplaintOpen] = React.useState(false);
  const [isOrderStatementOpen, setOrderStatementOpen] = React.useState(false);
  const [isUpdateMetersOpen, setUpdateMetersOpen] = React.useState(false);
  const [isEditProfileClicked, setEditProfileClicked] = React.useState(false);
  const [isSurveyPassed, setSurveyPassed] = React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  // const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const history = useHistory();
  function handleResize() {
    setTimeout(setScreenWidth, 500, window.innerWidth)


    window.removeEventListener('resize', handleResize);
  }

  // window.addEventListener('resize', handleResize);

  React.useEffect(() => {

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  const [houses, setHouses] = React.useState(null);
  const isVisible = usePageVisibility()
  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    const monthPayValue = localStorage.getItem("monthPayValue");
    const houseMenagmentValue = localStorage.getItem("houseMenagmentValue");
    const flatValue = localStorage.getItem("flatValue");
    if (flatValue !== null && houseMenagmentValue !== null && monthPayValue !== null) {
      setSurveyPassed(true)
    }

    mainApi.getHouses()
      .then((res) => {
        setHouses(res.houses)
      })
      .catch((err) => {
        console.log(err);
      });

    if (jwt) {
      auth(jwt)

    } else {
      setLoggedIn(false)
    }


  }, [])
  React.useEffect(() => {
    if (isVisible && currentUser) {
      const jwt = localStorage.getItem("jwt");
      if (isAdmin) {
        mainApi.getAllAppeals(jwt).then((res) => {
          setAllAdminsAppeals(res.appeals.reverse())
        }).catch((err) => {
          console.log(err)
        })
        mainApi.getAllUsers(jwt).then((res) => {
          let users = res.users.filter((item) => {
            if (item.display !== "not_display"){
              return true
            }
            return false
          })
          setAllAdminsUsers(users)
        }).catch((err) => {
          console.log(err)
        })
        mainApi.getSurveyResults(jwt).then((res) => {
          setAllSurveyResults(res.results.reverse())
        }).catch((err) => {
          console.log(err)
        })
        mainApi.getEmailsSent(jwt).then((res) => {
          setAllEmailsSent(res.emails.reverse())
        }).catch((err) => {
          console.log(err)
        })
      }
      mainApi.getUserAppeals(jwt).then((res) => {
        setAllAppeals(res.appeals.reverse())
      })
        .catch((err) => {
          console.log(err)
        })
      mainApi.getUserAvilibleStatements(jwt).then((res) => {
        setUserAvilibleStatements(res.statements)
      })
        .catch((err) => {
          console.log(err)
        })

    }

  }, [isVisible, isAdmin, currentUser])

  function auth(jwt) {

    mainApi.adminCheck(jwt).then(() => {
      setAdmin(true)
      mainApi.getAllAppeals(jwt).then((res) => {

        setAllAdminsAppeals(res.appeals.reverse())
      }).catch((err) => {
        console.log(err)
      })
      mainApi.getAllUsers(jwt).then((res) => {
        let users = res.users.filter((item) => {
          if (item.display !== "not_display"){
            return true
          }
          return false
        })
        setAllAdminsUsers(users)
      }).catch((err) => {
        console.log(err)
      })
      mainApi.getSurveyResults(jwt).then((res) => {
        setAllSurveyResults(res.results.reverse())
      }).catch((err) => {
        console.log(err)
      })
      mainApi.getEmailsSent(jwt).then((res) => {
        setAllEmailsSent(res.emails.reverse())
      }).catch((err) => {
        console.log(err)
      })
    })
      .catch(() => {
        setAdmin(false)
      })
    mainApi.jwtCheck(jwt).then((res) => {
      mainApi.getUserAppeals(jwt).then((res) => {
        setAllAppeals(res.appeals.reverse())
      })
        .catch((err) => {
          console.log(err)
        })
      mainApi.getUserAvilibleStatements(jwt).then((res) => {
        setUserAvilibleStatements(res.statements)
      })
        .catch((err) => {
          console.log(err)
        })

      setCurrentUser(res.user)
      setLoggedIn(true);
      // setInterval(refresher, 60000, jwt);
      // авторизуем пользователя
    }).catch((err) => {
      setLoggedIn(false)
      console.log(err); // выведем ошибку в консоль
    });

  }

  // function refresher(jwt) {
  //   if (isAdmin) {
  //     mainApi.getAllAppeals(jwt).then((res) => {
  //       setAllAdminsAppeals(res.appeals.reverse())
  //     }).catch((err) => {
  //       console.log(err)
  //     })
  //     mainApi.getAllUsers(jwt).then((res) => {
  //       setAllAdminsUsers(res.users)
  //     }).catch((err) => {
  //       console.log(err)
  //     })
  //   }
  //   mainApi.getUserAppeals(jwt).then((res) => {
  //     setAllAppeals(res.appeals.reverse())
  //   })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  //   mainApi.getUserAvilibleStatements(jwt).then((res) => {
  //     setUserAvilibleStatements(res.statements)
  //   })
  //     .catch((err) => {
  //       console.log(err)
  //     })

  // }


  function sendMailAgain() {
    const jwt = localStorage.getItem("jwt");
    mainApi.sendMailAgain(jwt)
      .then((res) => {

      }).catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  function handleMenuOpenClick() {

    setMenuPopupOpen(true)
  }

  function handleMenuCloseClick() {

    setMenuPopupOpen(false)
  }

  function handleRegister(fullname, email, password, house, flat, phone, setRegStep) {
    mainApi.register(fullname, email, password, house, flat, phone)
      .then((data) => {

        setLoggedIn(undefined)
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          localStorage.removeItem('regEmail');
        }
        return data.token
      }).then((token) => {
        auth(token)
      }).catch((err) => {
        setLoggedIn(false)
        setApiErrorMessage(err.message)
        setTimeout(setApiErrorMessage, 10000, '')
        console.log(err)
      });
  }

  function handleLogin(email, password) {
    mainApi.auth(email, password)
      .then((data) => {

        setLoggedIn(undefined)
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          localStorage.removeItem('regEmail');
        }
        return data.token
      }).then((token) => {
        auth(token)
      }).catch((err) => {
        setLoggedIn(false)
        setApiErrorMessage(err.message)
        setTimeout(setApiErrorMessage, 10000, '')
        console.log(err); // выведем ошибку в консоль
      });
  }

  function handleUpdateUser(userInfo) {
    mainApi.setUserInfo(userInfo)
      .then((res) => {
        setProfileMessage('Данные были успешно обновлены')
        setTimeout(setProfileMessage, 5000, '')
        setApiErrorMessage('')
        setCurrentUser(res.user)
        setEditProfileClicked(false)
      })
      .catch((err) => {
        setEditProfileClicked(true)
        setApiErrorMessage(err.message)
        setTimeout(setApiErrorMessage, 10000, '')
        console.log(err); // выведем ошибку в консоль
      });
  }

  function handleAddComplaintOpenClick() {

    setAddComplaintOpen(true)
  }
  function handleAddComplaintCloseClick() {

    setAddComplaintOpen(false)
  }
  function handleOrderStatementOpenClick() {

    setOrderStatementOpen(true)
  }
  function handleOrderStatementCloseClick() {

    setOrderStatementOpen(false)
  }
  function handleUpdateMetersOpenClick() {

    setUpdateMetersOpen(true)
  }
  function handleUpdateMetersCloseClick() {

    setUpdateMetersOpen(false)
  }
  function handleAddComplaint(file, text) {
    var data = new FormData();
    if (file !== undefined) {
      data.append("image", file);
    }
    data.append("text", text);
    setPreloaderVisible(true)
    const jwt = localStorage.getItem("jwt");

    mainApi.addComplaint(jwt, data).then((res) => {
      if (isAdmin){
        mainApi.getAllAppeals(jwt).then((res) => {

          setAllAdminsAppeals(res.appeals.reverse())
          handleAddComplaintCloseClick()
          setPreloaderVisible(false)
        }).catch((err) => {
          console.log(err)
        })
      }
      else {
        mainApi.getUserAppeals(jwt).then((res) => {
          setAllAppeals(res.appeals.reverse())
          handleAddComplaintCloseClick()
          setPreloaderVisible(false)
        })
          .catch((err) => {
            console.log(err)
          })
      }

    })
      .catch((err) => {
        setPreloaderVisible(false)
        setApiErrorMessage(err.message)
        setTimeout(setApiErrorMessage, 10000, '')
        console.log(err)
      })
  }
  function handleOrderStatement(value) {
    setPreloaderVisible(true)
    const jwt = localStorage.getItem("jwt");
    mainApi.orderStatement(jwt, value).then((res) => {

      mainApi.getUserAppeals(jwt).then((res) => {
        setAllAppeals(res.appeals.reverse())
        handleOrderStatementCloseClick()
        setPreloaderVisible(false)
      })
        .catch((err) => {
          console.log(err)
        })
    })
      .catch((err) => {
        setPreloaderVisible(false)
        setApiErrorMessage(err.message)
        setTimeout(setApiErrorMessage, 10000, '')
        console.log(err)
      })
  }
  function handleUpdateMeters(hot, cold) {
    setPreloaderVisible(true)
    const jwt = localStorage.getItem("jwt");
    mainApi.updateMeters(jwt, hot, cold).then((res) => {
      setCurrentUser(res.user)
      setPreloaderVisible(false)
      handleUpdateMetersCloseClick()
    })
      .catch((err) => {
        setPreloaderVisible(false)
        setApiErrorMessage(err.message)
        setTimeout(setApiErrorMessage, 10000, '')
        console.log(err)
      })
  }
  const [selectUser, selectedUser] = React.useState(null);
  const [selectAppeal, selectedAppeal] = React.useState(null);
  function handleAppealClick(item) {
    selectedAppeal(item)
  }
  function handleAppealCloseClick() {

    selectedAppeal(null)
  }

  function handleUserClick(item) {
    selectedUser(item)
    console.log(item)
  }

  function handleUserCloseClick() {

    selectedUser(null)
  }

  const [isChangeStatusClicked, setChangeStatusClicked] = React.useState(false);
  function handleChangeAppealStatusOpenClick() {

    setChangeStatusClicked(true)
  }
  function handleChangeAppealStatusCloseClick() {

    setChangeStatusClicked(false)
  }

  function handleChangeAppealStatus(status, rejectReason) {
    setPreloaderVisible(true)
    const jwt = localStorage.getItem("jwt");
    if (status !== "rejected") {
      mainApi.changeStatusNotRejected(jwt, status, selectAppeal._id).then((res) => {
        mainApi.getAllAppeals(jwt).then((res) => {
          setPreloaderVisible(false)
          setAllAdminsAppeals(res.appeals.reverse())
          handleChangeAppealStatusCloseClick()
          handleAppealCloseClick()
        }).catch((err) => {
          console.log(err)
        })

      })
        .catch((err) => {
          setPreloaderVisible(false)
          setApiErrorMessage(err.message)
          setTimeout(setApiErrorMessage, 5000, '')
          console.log(err)
        })
    } else if (status === "rejected" && rejectReason === undefined) {
      mainApi.changeStatusNotRejected(jwt, status, selectAppeal._id).then((res) => {
        mainApi.getAllAppeals(jwt).then((res) => {
          setPreloaderVisible(false)
          setAllAdminsAppeals(res.appeals.reverse())
          handleChangeAppealStatusCloseClick()
          handleAppealCloseClick()
        }).catch((err) => {
          console.log(err)
        })

      })
        .catch((err) => {
          setPreloaderVisible(false)
          setApiErrorMessage(err.message)
          setTimeout(setApiErrorMessage, 5000, '')
          console.log(err)
        })
    } else {
      mainApi.changeStatusRejected(jwt, status, selectAppeal._id, rejectReason).then((res) => {
        mainApi.getAllAppeals(jwt).then((res) => {
          setPreloaderVisible(false)
          setAllAdminsAppeals(res.appeals.reverse())
          handleChangeAppealStatusCloseClick()
          handleAppealCloseClick()
        }).catch((err) => {
          console.log(err)
        })

      })
        .catch((err) => {
          setPreloaderVisible(false)
          setApiErrorMessage(err.message)
          setTimeout(setApiErrorMessage, 5000, '')
          console.log(err)
        })
    }

  }
  function handleSurvey(houseMenagmentValue, addressValue, secondnameValue, firstnameValue, emailValue, flatValue, phoneValue, monthPayValue) {

    mainApi.postSurveyResult(houseMenagmentValue, addressValue, secondnameValue, firstnameValue, emailValue, flatValue, phoneValue, monthPayValue).then((res) => {
      console.log(res)
    })
      .catch((err) => {

        console.log(err)
      })
  }
  function handleAddHouse(name, formValue, city, address, statements, entranceArray) {
    const jwt = localStorage.getItem("jwt");
    mainApi.addHouse(jwt, name, formValue, city, address, statements, entranceArray)
      .then((res) => {
        mainApi.getHouses()
          .then((res) => {
            setHouses(res.houses)
            history.push('/')
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className="app">
        {loggedIn !== undefined &&
          <>

            <Switch>

              {(!loggedIn)
                &&
                <Switch>
                  <Route path="/signup" >
                      <Register onRegister={handleRegister} apiErrorMessage={apiErrorMessage} houses={houses} />
                  </Route>
                  <Route path="/signin" >
                    <Suspense fallback={<div className='app__preloader'><Preloader /></div>}>
                      <Login onLogin={handleLogin} apiErrorMessage={apiErrorMessage} />
                    </Suspense>


                  </Route>
                  <Route exact path="/">
                    <Suspense fallback={<div className='app__preloader'><Preloader /></div>}>
                      <Main screenWidth={screenWidth} handleMenuOpenClick={handleMenuOpenClick} loggedIn={loggedIn} isAdmin={isAdmin} />
                      <Footer />
                    </Suspense>

                  </Route>
                  <Route path="/contacts"  >
                    <Suspense fallback={<div className='app__preloader'><Preloader /></div>}>
                      <Contacts handleMenuOpenClick={handleMenuOpenClick} currentUser={currentUser} loggedIn={loggedIn} isAdmin={isAdmin} />
                    </Suspense>

                  </Route>
                  <Route path="/survey" >
                    <Suspense fallback={<div className='app__preloader'><Preloader /></div>}>
                      <SurveyForm isSurveyPassed={isSurveyPassed} handleSurvey={handleSurvey} />
                    </Suspense>

                  </Route>
                  <Route path="/my-complaints" >
                    <Redirect to="/signin" />
                  </Route>
                  <Route path="/my-statements" >
                    <Redirect to="/signin" />
                  </Route>
                  <Route path="/my-counters" >
                    <Redirect to="/signin" />
                  </Route>
                  <Route path="/all-users" >
                    <Redirect to="/signin" />
                  </Route>
                  <Route path="/all-counters" >
                    <Redirect to="/signin" />
                  </Route>
                  <Route path="/all-appeals" >
                    <Redirect to="/signin" />
                  </Route>

                  <Route path="*">
                    <Suspense fallback={<div className='app__preloader'><Preloader /></div>}>
                      <PageNotFound />
                    </Suspense>

                  </Route>
                </Switch>
              }
              {(currentUser && loggedIn && !isAdmin)
                &&
                <>
                  <MenuPopup isMenuPopupOpen={isMenuPopupOpen} handleMenuCloseClick={handleMenuCloseClick} isAdmin={isAdmin} />
                  <AddComplaintPopup isPreloaderVisible={isPreloaderVisible} isAddComplaintOpen={isAddComplaintOpen} handleAddComplaintCloseClick={handleAddComplaintCloseClick} handleAddComplaint={handleAddComplaint} />
                  <OrderStatementPopup currentUser={currentUser} userAvilibleStatements={userAvilibleStatements} isPreloaderVisible={isPreloaderVisible} isOrderStatementOpen={isOrderStatementOpen} handleOrderStatementCloseClick={handleOrderStatementCloseClick} handleOrderStatement={handleOrderStatement} />
                  <UpdateMetersPopup apiErrorMessage={apiErrorMessage} currentUser={currentUser} handleUpdateMeters={handleUpdateMeters} handleUpdateMetersCloseClick={handleUpdateMetersCloseClick} isPreloaderVisible={isPreloaderVisible} isUpdateMetersOpen={isUpdateMetersOpen} />
                  <Switch>

                    {(currentUser && !currentUser.emailVerified) &&
                      <Route path="*">
                        <Suspense fallback={<div className='app__preloader'><Preloader /></div>}>
                          <EmailNotVerified setLoggedIn={setLoggedIn} sendMailAgain={sendMailAgain} currentUser={currentUser} />
                        </Suspense>
                      </Route>}
                    <Route path="/signup" >
                      <Redirect to="/" />
                    </Route>
                    <Route path="/signin" >
                      <Redirect to="/" />
                    </Route>
                    <Route path="/my-complaints" >

                      <Suspense fallback={<div className='app__preloader'><Preloader /></div>}>
                        <UserComplaints isAdmin={isAdmin} handleAddComplaintOpenClick={handleAddComplaintOpenClick} handleMenuOpenClick={handleMenuOpenClick} currentUser={currentUser} loggedIn={loggedIn} allAppeals={allAppeals ? allAppeals : null} />
                      </Suspense>

                    </Route>
                    <Route path="/my-statements" >
                      <Suspense fallback={<div className='app__preloader'><Preloader /></div>}>
                        <UserStatements isAdmin={isAdmin} handleOrderStatementOpenClick={handleOrderStatementOpenClick} handleMenuOpenClick={handleMenuOpenClick} currentUser={currentUser} loggedIn={loggedIn} allAppeals={allAppeals ? allAppeals : null} />
                      </Suspense>

                    </Route>
                    <Route path="/my-counters" >
                      <Suspense fallback={<div className='app__preloader'><Preloader /></div>}>
                        <UserMeters isAdmin={isAdmin} handleUpdateMetersOpenClick={handleUpdateMetersOpenClick} handleMenuOpenClick={handleMenuOpenClick} currentUser={currentUser} loggedIn={loggedIn} allAppeals={allAppeals ? allAppeals : null} />
                      </Suspense>

                    </Route>

                    <Route path="/contacts"  >
                      <Suspense fallback={<div className='app__preloader'><Preloader /></div>}>
                        <Contacts handleMenuOpenClick={handleMenuOpenClick} currentUser={currentUser} loggedIn={loggedIn} isAdmin={isAdmin} />
                      </Suspense>
                    </Route>
                    <Route exact path="/">
                      <Suspense fallback={<div className='app__preloader'><Preloader /></div>}>
                        <UserCab isAdmin={isAdmin} handleMenuOpenClick={handleMenuOpenClick} currentUser={currentUser} loggedIn={loggedIn} />
                      </Suspense>

                    </Route>
                    <Route path="/profile">
                      <Suspense fallback={<div className='app__preloader'><Preloader /></div>}>
                        <ProtectedRoute
                          isAdmin={isAdmin}
                          currentUser={currentUser}
                          setEditProfileClicked={setEditProfileClicked}
                          isEditProfileClicked={isEditProfileClicked}
                          loggedIn={loggedIn}
                          component={Profile}
                          handleMenuOpenClick={handleMenuOpenClick}
                          setLoggedIn={setLoggedIn}
                          handleUpdateUser={handleUpdateUser}
                          apiErrorMessage={apiErrorMessage}
                          profileMessage={profileMessage}
                        />
                      </Suspense>
                    </Route>
                    <Route path="*">
                      <Suspense fallback={<div className='app__preloader'><Preloader /></div>}>
                        <PageNotFound />
                      </Suspense>

                    </Route>
                  </Switch>
                </>
              }
              {(currentUser && loggedIn && isAdmin)
                &&
                <>
                  <MenuPopup isMenuPopupOpen={isMenuPopupOpen} handleMenuCloseClick={handleMenuCloseClick} isAdmin={isAdmin} />
                  <AddComplaintPopup isPreloaderVisible={isPreloaderVisible} isAddComplaintOpen={isAddComplaintOpen} handleAddComplaintCloseClick={handleAddComplaintCloseClick} handleAddComplaint={handleAddComplaint} />
                  <ChangeAppealStatusPopup handleChangeAppealStatus={handleChangeAppealStatus} handleChangeAppealStatusCloseClick={handleChangeAppealStatusCloseClick} isChangeStatusClicked={isChangeStatusClicked} isPreloaderVisible={isPreloaderVisible} apiErrorMessage={apiErrorMessage} selectAppeal={selectAppeal} />
                  <AppealPopup handleChangeAppealStatusOpenClick={handleChangeAppealStatusOpenClick} handleAppealCloseClick={handleAppealCloseClick} apiErrorMessage={apiErrorMessage} selectAppeal={selectAppeal} />
                  <UserPopup handleUserCloseClick={handleUserCloseClick} apiErrorMessage={apiErrorMessage} selectUser={selectUser} />
                  <Switch>
                    {(currentUser && !currentUser.emailVerified) &&
                      <Route path="*">
                        <Suspense fallback={<div className='app__preloader'><Preloader /></div>}>
                          <EmailNotVerified setLoggedIn={setLoggedIn} sendMailAgain={sendMailAgain} currentUser={currentUser} />
                        </Suspense>
                      </Route>}
                    <Route path="/signup" >
                      <Redirect to="/" />
                    </Route>
                    <Route path="/signin" >
                      <Redirect to="/" />
                    </Route>

                    <Route path="/all-appeals" >
                      <Suspense fallback={<div className='app__preloader'><Preloader /></div>}>
                        <AllAppeals isAdmin={isAdmin} handleAppealClick={handleAppealClick} houses={houses} handleAddComplaintOpenClick={handleAddComplaintOpenClick} handleMenuOpenClick={handleMenuOpenClick} currentUser={currentUser} loggedIn={loggedIn} allAppeals={allAdminsAppeals ? allAdminsAppeals : null} />
                      </Suspense>

                    </Route>
                    <Route path="/all-counters" >

                      <Suspense fallback={<div className='app__preloader'><Preloader /></div>}>
                        <AllCounters isAdmin={isAdmin} allAdminsUsers={allAdminsUsers} handleUserClick={handleUserClick} houses={houses} handleAddComplaintOpenClick={handleAddComplaintOpenClick} handleMenuOpenClick={handleMenuOpenClick} currentUser={currentUser} loggedIn={loggedIn} allAppeals={allAdminsAppeals ? allAdminsAppeals : null} />
                      </Suspense>
                    </Route>
                    <Route path="/all-users" >
                      <Suspense fallback={<div className='app__preloader'><Preloader /></div>}>
                        <AllUsers isAdmin={isAdmin} allAdminsUsers={allAdminsUsers} handleUserClick={handleUserClick} houses={houses} handleAddComplaintOpenClick={handleAddComplaintOpenClick} handleMenuOpenClick={handleMenuOpenClick} currentUser={currentUser} loggedIn={loggedIn} allAppeals={allAdminsAppeals ? allAdminsAppeals : null} />
                      </Suspense>

                    </Route>
                    <Route exact path="/">
                      <Suspense fallback={<div className='app__preloader'><Preloader /></div>}>
                        <AdminCab isAdmin={isAdmin} handleMenuOpenClick={handleMenuOpenClick} currentUser={currentUser} loggedIn={loggedIn} />
                      </Suspense>

                    </Route>
                    <Route path="/survey-results">
                      <Suspense fallback={<div className='app__preloader'><Preloader /></div>}>
                        <SurveyResults allSurveyResults={allSurveyResults} isAdmin={isAdmin} handleMenuOpenClick={handleMenuOpenClick} currentUser={currentUser} loggedIn={loggedIn} />
                      </Suspense>

                    </Route>
                    <Route path="/emails-sent">
                      <Suspense fallback={<div className='app__preloader'><Preloader /></div>}>
                        <EmailsSent allEmailsSent={allEmailsSent} isAdmin={isAdmin} handleMenuOpenClick={handleMenuOpenClick} currentUser={currentUser} loggedIn={loggedIn} />
                      </Suspense>

                    </Route>
                    <Route path="/add-house" >
                      <Suspense fallback={<div className='app__preloader'><Preloader /></div>}>
                        <AddHouse handleAddHouse={handleAddHouse} onRegister={handleRegister} apiErrorMessage={apiErrorMessage} houses={houses} />
                      </Suspense>

                    </Route>
                    <Route path="/profile">
                      <Suspense fallback={<div className='app__preloader'><Preloader /></div>}>
                        <ProtectedRoute
                          isAdmin={isAdmin}
                          currentUser={currentUser}
                          setEditProfileClicked={setEditProfileClicked}
                          isEditProfileClicked={isEditProfileClicked}
                          loggedIn={loggedIn}
                          component={Profile}
                          handleMenuOpenClick={handleMenuOpenClick}
                          setLoggedIn={setLoggedIn}
                          handleUpdateUser={handleUpdateUser}
                          apiErrorMessage={apiErrorMessage}
                          profileMessage={profileMessage}
                        />
                      </Suspense>

                    </Route>
                    <Route path="/contacts"  >
                      <Suspense fallback={<div className='app__preloader'><Preloader /></div>}>
                        <Contacts isAdmin={isAdmin} handleMenuOpenClick={handleMenuOpenClick} currentUser={currentUser} loggedIn={loggedIn} />
                      </Suspense>
                    </Route>
                    <Route path="*">
                      <Suspense fallback={<div className='app__preloader'><Preloader /></div>}>
                        <PageNotFound />
                      </Suspense>

                    </Route>
                  </Switch>
                </>
              }
            </Switch>
          </>}

      </div>
    </CurrentUserContext.Provider>

  );
}

export default withRouter(App);
