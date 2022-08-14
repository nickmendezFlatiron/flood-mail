import {React , Fragment, useState, useEffect } from "react";
import { Routes , Route } from "react-router-dom";

// CSS Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// React Page Components
import Homepage from "./home/Homepage";
import Navigation from "./navigation/Navigation"
import Account from "./account/Account";
import Inbox from "./inbox/Inbox";
import SignupForm from "./account/SignupForm";
import Container from "react-bootstrap/Container"
// import Footer from "./Footer";
// import uuid from 'react-uuid'

function App() {
 const [user , setUser] = useState({})
 const [showModal, setShowModal] = useState(false);
 const [isAuthenticated , setIsAuthenticated] = useState(false)
 const [errors , setErrors] = useState([])

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    // user auto-login
    fetch("/authorize")
      .then(r => {
        if (r.ok) {
          setIsAuthenticated(true)
          r.json().then(user => setUser(user))
      }
  })}
  , []);
  
  return (
    <Fragment >
      <Navigation user={user} setUser={setUser} showModal={showModal} handleClose={handleClose} handleShow={handleShow}  setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/>
      <Routes>
        <Route path="/" exact={true} element={<Homepage is setUser={setUser} showModal={showModal} handleClose={handleClose} handleShow={handleShow} errors={errors}  setIsAuthenticated={ setIsAuthenticated} setErrors={setErrors}/>} />
        <Route path="/account" exact={true} element={<Account user={user} isAuthenticated={isAuthenticated}/>} />
        <Route path="/inbox" exact={true} element={<Inbox />}/>
        <Route path="/signup" exact={true} element={<SignupForm setUser={setUser}/>}/>
      </Routes>
    </Fragment>
  );
}

export default App;