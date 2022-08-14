import React , {useState} from 'react'
import { Container , Button , Row , Col , Nav} from 'react-bootstrap'
import LoginModal from './LoginModal';
import { Link } from 'react-router-dom';
import image from "../assets/logo.png"

const Homepage = ({user, showModal, handleClose , handleShow , setUser , errors , setErrors , setIsAuthenticated , isAuthenticated}) => {

  
  const login = <>
            <Button className="btn btn-danger btn-lg" onClick={handleShow}>Login</Button>
            <Link to="/signup" className='text-danger opacity-75 ms-3' exact={true}>Not a user? Sign up here.</Link> 
            <LoginModal handleClose={handleClose} showModal={showModal} setUser={setUser} errors={errors} setErrors={setErrors}  setIsAuthenticated={ setIsAuthenticated}/>
  </>
  const helloMessage = <h3 className="text-danger"><strong>Welcome {user.username}!</strong></h3>

  const message = !isAuthenticated ? login : helloMessage
  return (
    <Container className='align-text-center py-5'>
    
      <Row  className="py-5 mb-4 bg-light rounded-3 shadow">
        <Col lg={6} >
          <div>
          <div className="container-fluid ">
            <h1 className="display-5 fw-bold">No Personal Information Required.</h1>
            <p className="fs-4 py-3">
              Direct message other Flood members with complete control over your conversations.
              Delete a message, and it's gone forever.  
              <br/>
              <strong> For Both Users.</strong>
              <br/>
            </p>
           {message}
          </div>
        </div>
        </Col>
        <Col className="d-flex align-items-center justify-content-center mt-5" lg={6}>
          <img alt='logo' src={image} className="ms-2 "  id="homepage-image"/>
        </Col>
      </Row>
    </Container>
  )
}

export default Homepage