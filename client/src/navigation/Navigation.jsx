import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar , Nav , Container } from 'react-bootstrap'

import DropDown from './DropDown'
import image from  "../assets/logo.png"
import Notifications from './Notifications'
import { useEffect, useState } from 'react'

// import LoginModal from '../home/LoginModal'


const Navigation = ({user, setUser ,  setIsAuthenticated , cableApp}) => {
  const [alerts, setAlerts] = useState(null)
  const [newAlert, setNewAlert] = useState(null)
  useEffect(()=>{
   
    fetch("/alerts")
      .then(r =>{
          if (r.ok){
            r.json().then(r => setAlerts(r))
          } else {
            console.log("fail")
          }
      })
  },[])

  useEffect(()=>{
    cableApp.notifications = cableApp.cable.subscriptions.create({channel: "AlertChannel"},{
      received: data => { 
        const newAlertRow = {...data.alert}
        newAlertRow.message = data.message 
        newAlertRow.message.creator = data.creator
        setNewAlert(newAlertRow)
      }
    })
  },[alerts, setAlerts, cableApp])
  
  useEffect (()=>{
    if(newAlert !== null && alerts.length > 0) {
      setAlerts([newAlert, ...alerts])
    } else if (newAlert !== null && alerts.length === 0) {
      setAlerts([newAlert])
    }
  },[newAlert])
  return (
    <Navbar className='border-3 border-bottom' bg="dark" variant="dark">
      <Container className='justify-content-start'>
        <a href="/"> <img alt='logo' src={image} className="ms-2"  id="nav-logo"/></a>
        <Navbar.Text>Flood Mail</Navbar.Text>
      </Container>
      <Container className='justify-content-end text-danger'>
      <Nav>
        <Notifications cableApp={cableApp} alerts={alerts} setAlerts={setAlerts}/>
        <Nav.Link as={Link} to="/inbox/table" exact={true}>Inbox</Nav.Link>
        <DropDown user={user} setUser={setUser} setIsAuthenticated={setIsAuthenticated}/> 
      </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation