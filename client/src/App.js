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
// import Footer from "./Footer";
// import uuid from 'react-uuid'

function App() {
 const [user , setUser] = useState({})
 const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then(users => {
        
        setUser(users[0])});
  }, []);

  
  
  return (
    <Fragment >
      <Navigation user={user} setUser={setUser} showModal={showModal} handleClose={handleClose} handleShow={handleShow}/>
      <Routes>
        <Route path="/" exact element={<Homepage setUser={setUser} showModal={showModal} handleClose={handleClose} handleShow={handleShow}/>} />
        <Route path="/account" exact={true} element={<Account user={user}/>} />
        <Route path="/inbox" exact={true} element={<Inbox />}/>
        <Route path="/signup" exact={true} element={<SignupForm />}/>

      </Routes>
    </Fragment>
  );
}

export default App;