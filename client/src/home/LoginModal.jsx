import React , {useState} from 'react'
import { Modal , Form , Button } from 'react-bootstrap'
import { Link , useNavigate} from 'react-router-dom'

import uuid from "react-uuid"

const LoginModal = ({handleClose , showModal , setUser , errors , setErrors ,  setIsAuthenticated}) => {

  const [password , setPassword] = useState("")
  const [username , setUsername] = useState("")
  
  const navigate = useNavigate()

  
  function handlePassword(e){
    setPassword(e.target.value) 
  }
  
  function handleUsername(e) {
    setUsername(e.target.value)
  }

  function handleHide(){
    setPassword("")
    setUsername("")
    setErrors([])
  }

  function handleLogin(e){
    e.preventDefault()
    
    if( password === "" || username === "") {
      return setErrors(["Username or Password Field Blank"])
    }
    const loginInfo = {password , username}

    fetch('/login', {
      method: "POST" ,
      headers: {"Content-Type": "application/json"} ,
      body: JSON.stringify(loginInfo)
    }).then(r => {
      
      if (r.ok) {
        r.json().then(user => {
          setUser(user)
          handleClose()
          setPassword("")
          setUsername("")
          setIsAuthenticated(true)
          setErrors([])
          navigate("/account")
        })
      } else {
        r.json().then(r => setErrors(r.errors))
      }

    })
      
  }
  function handleClick(){
    handleClose()
    setErrors([])
  }
  const displayErrors = errors.map(e => <li key={uuid()} className="text-danger">{e}</li>)

  

  return (
    <>
     <Modal show={showModal} onHide={handleClose} className="p-5 my-5">
        <Modal.Header closeButton onHide={handleHide}>
          <Modal.Title>Account Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin} id="login-form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username here..."
                autoFocus
                value={username}
                onChange={handleUsername}
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
                value={password}
                onChange={handlePassword}
              />
            </Form.Group>
            <Form.Group>
              <ul>{displayErrors}</ul>
              <Link to="/signup" onClick={handleClick}className='text-danger opacity-75' exact={true}>Not a user? Sign up here.</Link>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClick}>
            Close
          </Button>
          <Button variant="danger" type="submit" onSubmit={handleLogin} form="login-form">
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default LoginModal