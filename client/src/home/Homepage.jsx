import React , {useState} from 'react'
import { Container , Button , Row , Col} from 'react-bootstrap'
import LoginModal from './LoginModal';

import image from "../assets/logo.png"

const Homepage = ({showModal, handleClose , handleShow , setUser}) => {

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
            <Button className="btn btn-danger btn-lg" onClick={handleShow}>Login</Button>
            <LoginModal handleClose={handleClose} showModal={showModal} setUser={setUser}/>
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