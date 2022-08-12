import React , {useState , useEffect} from 'react'
import { Container, Row, Col, Form, Button , Fade } from 'react-bootstrap'

const SignupForm = () => {

  const [onTransition , toggleTransition] = useState(false)
  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")
  const [passwordConfirmation , setPasswordConfirmation] = useState("")
  const [email , setEmail] = useState("")

  function handleUsername(e) {
    setUsername(e.target.value)
  }
  function handlePassword(e) {
    setPassword(e.target.value)
  }
  function handlePasswordConfirmation(e) {
    setPasswordConfirmation(e.target.value)
  }
  function handleEmail(e) {
    setEmail(e.target.value)
  }

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
            <br/>
            </h1>
          </Col>
          <Col>
          <Fade in={onTransition}>
          <Form className="py-5 border-3 px-3 rounded-3" id="signup-form">
            <Form.Group className="mb-3" controlId="formUsername" >
              <Form.Label>Username 
              <Form.Text className="text-muted ms-2" maxlength="30">
             <em>{30 - username.length} Characters Remaining</em>
              </Form.Text>

              </Form.Label>
              <Form.Control type="text" placeholder="Username..." maxLength={30} value={username} onChange={handleUsername}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address <small><em className='text-muted'>optional</em></small></Form.Label>
              <Form.Control type="email" placeholder="Email..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPasswordConfirmation">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" placeholder="Passwords Must Match" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I Agree to Terms of Service" />
            </Form.Group> */}
            <Button variant="danger" type="submit" form="signup-form">
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