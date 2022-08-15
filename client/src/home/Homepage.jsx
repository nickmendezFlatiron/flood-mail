import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import image from "../assets/logo.png"

const Homepage = ({user}) => {

  

  

  
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
            <h3 className="text-danger"><strong>Welcome {user.username}!</strong></h3>
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