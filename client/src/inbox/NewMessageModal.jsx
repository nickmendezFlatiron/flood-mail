import {React , useState }from 'react'
import { Modal , Button , Form , InputGroup, Row} from 'react-bootstrap';

const NewMessageModal = ({setShow , show , user, emailThreads , setEmailThreads}) => {

  const [username , setUsername] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState([])

  const handleClose = () => setShow(false);

  // Form functions
  function handleUsername(e){
    setUsername(e.target.value)
  }
  function handleSubject(e){
    setSubject(e.target.value)
  } 
  function handleMessage(e){
    setMessage(e.target.value)
  }

  function handleSubmitForm(){
    const newThread = {
      username, 
      subject, 
      message , 
      user_id: user.id 
    } 

    fetch("/email_threads", {
      method: "POST" ,
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newThread) 
    }).then(r=> {
      if(r.ok) {
        r.json().then(thread => {
          console.log(thread)
          setEmailThreads(t => [thread,...emailThreads])
          setUsername("")
          setSubject("")
          setMessage("")
          setErrors([])
          handleClose()
        }) 
      } else {
        r.json().then(e => setErrors(e.errors) ) 
      }
    })
  }
  const renderErrors = errors && errors.map(e => <li>{e}</li>)
  
  return (
    <>
      <Modal show={show} onHide={handleClose} className="mt-5">
        <Modal.Header closeButton>
          <Modal.Title>Compose New Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">To: </InputGroup.Text>
            <Form.Control
              placeholder="Username (Case Sensitive)"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={username}
              onChange={handleUsername}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2" className="text-muted">{50 - subject.length}</InputGroup.Text>
            <Form.Control
              placeholder="Subject Line"
              aria-label="Subject"
              aria-describedby="basic-addon2"
              value={subject}
              onChange={handleSubject}
              maxLength="50"
            />
          </InputGroup>
          <Form.Group>
            <Row className="px-2">
              <textarea placeholder='Enter message here...' className="rounded-3 border border-2" onChange={handleMessage} value={message}>
              </textarea>
            </Row>
            
          </Form.Group>
          <Form.Group>
            <ul className='mt-2 text-danger'>
              {renderErrors}
            </ul>
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleSubmitForm}>
            Send 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default NewMessageModal