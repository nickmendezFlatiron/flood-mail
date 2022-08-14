import React , {useState , useEffect} from 'react'
import { Container, Row, Col, Form, Button , Fade } from 'react-bootstrap'
import { useNavigate , Link } from 'react-router-dom'

import uuid from "react-uuid"

const SignupForm = ({setUser}) => {

  const [onTransition , toggleTransition] = useState(false)
  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")
  const [passwordConfirmation , setPasswordConfirmation] = useState("")
  const [email , setEmail] = useState("")

  const [errors , setErrors] = useState([])
  const navigate = useNavigate()
  // Form Control Functions
  function handleUsername(e) {
    setUsername(e.target.value)
  }
  function handleEmail(e) {
    setEmail(e.target.value)
  }
  function handlePassword(e) {
    setPassword(e.target.value)
  }
  function handlePasswordConfirmation(e) {
    setPasswordConfirmation(e.target.value)
    if (e.target.value.length > 0 && e.target.value !== password) {
      console.log({password, passwordConfirmation}) 
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newAccount = {
      username , 
      password , 
      password_confirmation: passwordConfirmation , 
      email
    }

    const isEmpty = Object.values({username , password , passwordConfirmation}).filter(key => key.length === 0 )

    if(isEmpty.length > 0 ) {
      return setErrors(["Required field(s) blank"])
    }

    fetch("/signup" , {
      method: "POST" ,
      headers: {"Content-Type": "application/json"} ,
      body: JSON.stringify(newAccount)
    })
      .then(r => {
          if (r.ok) {
            r.json().then(user =>{
              console.log(user)
              setUser(user)
              setUsername("")
              setPassword("")
              setPasswordConfirmation("")
              setEmail("")
              navigate("/account")
            })
          }
        })

  }

  const isEqual = password !== passwordConfirmation ? "Does Not Match" : "" ;
  const displayErrors = errors.map(e => <li key={uuid()} className="text-danger">{e}</li>)

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
          <Form className="py-5 border-3 px-3 rounded-3" id="signup-form" onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formUsername" >
              <Form.Label>Username 
              <Form.Text className="text-muted ms-2" maxLength="30">
                <em>{30 - username.length} Characters Remaining</em>
              </Form.Text>
              </Form.Label>
              <Form.Control required type="text" placeholder="Username..." maxLength={30} value={username} onChange={handleUsername}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address <small><em className='text-muted'>optional</em></small></Form.Label>
              <Form.Control type="email" placeholder="Email..." value={email} onChange={handleEmail}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control required type="password" placeholder="Password" value={password} onChange={handlePassword}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPasswordConfirmation">
              <Form.Label>Password Confirmation <small><em className='text-danger'>{isEqual}</em></small></Form.Label>
              <Form.Control required type="password" placeholder="Passwords Must Match" value={passwordConfirmation} onChange={handlePasswordConfirmation}/>
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I Agree to Terms of Service" />
            </Form.Group> */}
            <hr />
            <ul>
              {displayErrors}
            </ul>
            <Button variant="danger" type="submit" form="signup-form" >
              Sign Up
            </Button>
            <Link to="/" className='text-danger opacity-75 ms-3' exact={true}>Have an account? Login here.</Link> 
          </Form>
          </Fade>
          </Col>
        </Row>
      </Container>
  
  )
}

export default SignupForm