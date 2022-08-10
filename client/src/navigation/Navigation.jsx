import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar , Nav , Container } from 'react-bootstrap'

import DropDown from './DropDown'
import image from  "../assets/logo.png"

// import LoginModal from '../home/LoginModal'


const Navigation = ({user}) => {
  
  const logInLink = <Nav.Link as={Link} to="/login" exact={true}>Login</Nav.Link>
  const signInLink = <Nav.Link as={Link} to="/signup" exact={true}>Signup</Nav.Link>
  
  return (
    <Navbar className='border-3 border-bottom' bg="dark" variant="dark">
      <Container className='justify-content-start'>
        <a href="/"> <img alt='logo' src={image} className="ms-2"  id="nav-logo"/></a>
        
          <Navbar.Text>Flood Mail</Navbar.Text>
      </Container>
      <Container className='justify-content-end'>
        <Nav >
          {user.username ? "" : signInLink}
          
          <Navbar.Text>Notifics</Navbar.Text>
          <Nav.Link as={Link} to="/inbox" exact>Inbox</Nav.Link>
          {user.username ? <DropDown user={user}/> : logInLink}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation