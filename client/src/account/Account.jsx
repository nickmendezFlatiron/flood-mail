import React , { useEffect , useState }from 'react'

import { Container , Col , Row, Button, Fade } from 'react-bootstrap'

const Account = ({user}) => {
  const [quote , setQuote] = useState("")
  const [onFade , toggleFade] = useState(false)

  
  useEffect(() => {
    
    fetch(`https://type.fit/api/quotes`)
    .then(r => r.json())
    .then(quote => {
      const randomArr = Math.floor(Math.random() * 1643) + 1;
      toggleFade(true)
      setQuote(quote[randomArr])})
  } , [])

  
  return (

   <Container className="my-4 bg-light rounded-3">
      <Row>
        <Col className="my-5 mx-2 border-bottom rounded bg-white shadow" lg={5}>
          <h1 id='account-username' className=''>{user.username}</h1>
          <h3 className='mb-5 text-secondary'>{user.email && user.email}</h3>
          <h1 className='pb-2'>Messages: <small className='text-secondary'> # Here</small></h1>
          <h1 className='pb-2'>Threads: <small className='text-secondary'> # Here</small></h1>
          <h1 className='pb-5'>Contacts: <small className='text-secondary'> # Here</small></h1>
          <Button className='mb-4' variant='danger  ' >Burn My Account</Button>
        </Col>
        <Col className="d-flex align-items-center opacity-75 text-center" >
          <Fade in={onFade}  >
            <p id="quote"><em>{quote.text}</em></p>
          </Fade>
        </Col>
      </Row>
   </Container>
  )
}

export default Account