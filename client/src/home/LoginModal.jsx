import React from 'react'
import { Modal , Form , Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LoginModal = ({handleClose , showModal}) => {

  

  return (
    <>
     <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Account Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username here..."
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password here..."
                autoFocus
              />
            </Form.Group>
            <Form.Group>
              <Link to="/signup" className='text-danger opacity-75' exact={true}>Not a user? Sign up here.</Link>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default LoginModal