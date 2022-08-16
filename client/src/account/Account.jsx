import React , { useEffect , useState }from 'react'

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Fade from 'react-bootstrap/Fade'
import Spinner from 'react-bootstrap/Spinner';



const Account = ({user , setUser , navigate , setIsAuthenticated}) => {
  const [quote , setQuote] = useState("")
  const [onFade , toggleFade] = useState(false)
  const {message_count , email_thread_count , contacts} = user
  
  function handleClick(){
    if (window.confirm(`Burning your account is not reversible. Please confirm that you want to burn your account.`)) {
        fetch(`/users/${user.id}` , {method: "DELETE"}).then(r => {
          if (r.ok) { 
            setIsAuthenticated(false)
            setUser({})
            navigate("/signup")
          }
        })

    }
  }
  useEffect(() => {
    fetch(`https://type.fit/api/quotes`)
    .then(r => r.json())
    .then(quote => {
      const randomArr = Math.floor(Math.random() * 1643) + 1;
      setQuote(quote[randomArr])})
      toggleFade(true)
    } , [])
    
    const spinner =    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>

    if (!user.contacts) return spinner

  return (

   <Container className="my-4 bg-light rounded-3">
      <Row>
        <Col className="my-5 mx-2 border-bottom rounded bg-white shadow" lg={5}>
          <h1 id='account-username' className=''>{user.username}</h1>
          <h3 className='mb-5 text-secondary'>{user.email && user.email}</h3>
          <h1 className='pb-2'>Messages: <small className='text-secondary'>{user && message_count}</small></h1>
          <h1 className='pb-2'>Threads: <small className='text-secondary'>{user && email_thread_count}</small></h1>
          <h1 className='pb-5'>Contacts: <small className='text-secondary'>{user && contacts.length}</small></h1>
          <Button className='mb-4' variant='danger' onClick={handleClick} >Burn My Account</Button>
        </Col>
        <Col className="d-flex align-items-center opacity-75 text-center" >
          <Fade in={onFade} mountOnEnter={true} >
            <p id="quote"><em>{quote.text}</em></p>
          </Fade>
        </Col>
      </Row>
   </Container>
  )
}

export default Account