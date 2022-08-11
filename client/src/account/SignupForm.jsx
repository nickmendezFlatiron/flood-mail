import React , {useState , useEffect} from 'react'
import { Container, Row, Col, Form, Button , Fade } from 'react-bootstrap'

const SignupForm = () => {

  const [onTransition , toggleTransition] = useState(false)

  useEffect(()=>{
    toggleTransition(true)
  },[])
  
  return (
    
      <Container className='my-4 py-5 border border-5 rounded-3 bg-light'>
        <Row className="mx-3">
          <Col className="bg-danger rounded-4 d-flex text- align-items-center justify-content-center text-white">
            <h1 id='signup-text'>
            Create A New
            <br/>
            Flood Account →
            </h1>
          </Col>
          <Col>
          <Fade in={onTransition}>
          <Form className="py-5 border-3 px-3 rounded-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username..." />
              <Form.Text className="text-muted ms-2">
              X Characters Remaining
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address <small><em className='text-muted'>optional</em></small></Form.Label>
              <Form.Control type="email" placeholder="Email..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" placeholder="Passwords Must Match" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="danger" type="submit">
              Sign Up
            </Button>
          </Form>
          </Fade>
          </Col>
        </Row>
      </Container>
  
  )
}

export default SignupForm