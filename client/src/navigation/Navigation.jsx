import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar , Nav , Container } from 'react-bootstrap'

import DropDown from './DropDown'
import image from  "../assets/logo.png"
import Notifications from './Notifications'

// import LoginModal from '../home/LoginModal'


const Navigation = ({user, setUser ,  setIsAuthenticated , isAuthenticated}) => {
  
  const signInLink = <Nav.Link as={Link} to="/signup" exact={true}>Signup</Nav.Link>

  const nav = <Nav>
                <Notifications />
                <Nav.Link as={Link} to="/inbox" exact={true}>Inbox</Nav.Link>
                <DropDown user={user} setUser={setUser} setIsAuthenticated={setIsAuthenticated}/> 
              </Nav>
  
  return (
    <Navbar className='border-3 border-bottom' bg="dark" variant="dark">
      <Container className='justify-content-start'>
        <a href="/"> <img alt='logo' src={image} className="ms-2"  id="nav-logo"/></a>
        <Navbar.Text>Flood Mail</Navbar.Text>
      </Container>
      <Container className='justify-content-end text-danger'>
       {isAuthenticated ? nav : signInLink}
      </Container>
    </Navbar>
  )
}

export default Navigation