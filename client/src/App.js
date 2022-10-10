import {React , Fragment, useState, useEffect } from "react";
import { Routes , Route , useNavigate , Navigate} from "react-router-dom";


// CSS Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// React Page Components
import Homepage from "./home/Homepage";
import Navigation from "./navigation/Navigation"
import Account from "./account/Account";
import Inbox from "./inbox/Inbox";
import Thread from "./inbox/Thread";
import SignupForm from "./account/SignupForm";
import Spinner from "react-bootstrap/Spinner"
import InboxTable from "./inbox/InboxTable";


// import Footer from "./Footer";
// import uuid from 'react-uuid'

function App({cableApp}) {
 const [user , setUser] = useState({})
 const [isAuthenticated , setIsAuthenticated] = useState(null)
 const [errors , setErrors] = useState([])
 const navigate = useNavigate()

  const spinner =    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>

  
  useEffect(() => {
    fetch("/authorize")
      .then(r => {
        if (r.ok) {
          setIsAuthenticated(true)
          r.json().then(user => setUser(user))
          cableApp.notifications = cableApp.cable.subscriptions.create({channel: "AlertChannel"})
      } else {setIsAuthenticated(false)}
  })
  
  // return (()=>{
  //   // cableApp.notifications.unsubscribe()
  // }, [])
}, []);

  const renderSignup = <SignupForm navigate={navigate} isAuthenticated={isAuthenticated} setUser={setUser} errors={errors}  setIsAuthenticated={ setIsAuthenticated} setErrors={setErrors}/>

  if(isAuthenticated === null) return spinner
  if (!isAuthenticated) return  renderSignup

  return (
    <Fragment >
      <Navigation cableApp={cableApp} user={user} setUser={setUser}  setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Homepage user={user}/>} />
        <Route path="/account" exact={true} element={<Account setUser={setUser} user={user}  setIsAuthenticated={setIsAuthenticated} navigate={navigate} />} />
        <Route path="/inbox" exact={true} element={<Inbox user={user} navigate={navigate}/>}> 
          <Route path="/inbox/table" exact={true} element={<InboxTable navigate={navigate}/>} />
          <Route path="/inbox/thread/:threadId" element={<Thread navigate={navigate}/> } />
        </Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Fragment>
  );
}

export default App;