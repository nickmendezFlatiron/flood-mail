import {React , useEffect , useState}from 'react'

import ThreadMessage from './ThreadMessage'

import  Container  from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button"
import Col from 'react-bootstrap/Col'
import Form from "react-bootstrap/Form"
import uuid from 'react-uuid'

const Thread = ({selectedThread , user}) => {

  const [threadInfo, setThreadInfo] = useState([])
  const [newMessage , setNewMessage] = useState("")

  const recipient = threadInfo.users  && threadInfo.users.filter(u => u.username !== user.username)
  useEffect(()=>{
    fetch(`/email_threads/${selectedThread}`)
      .then(r=>{
        if(r.ok) {
          r.json().then(r => {
            setThreadInfo(r)
          })
        }
      })
  },[selectedThread])

  function handleNewMessage(e) {
    e.preventDefault()
    setNewMessage(e.target.value)
    console.log(e.target.value)
  }
  const displayMessages = threadInfo.messages && threadInfo.messages.map(message => <ThreadMessage key={uuid()} threadInfo={threadInfo} setThreadInfo={setThreadInfo} recipient={recipient[0]} message={message} />)
  return (
    <Container className="overflow-auto" >
      <h2>{threadInfo.subject}</h2>
      <Col>
     {displayMessages}
      </Col>
      <Col>
        <Form className="mx-3 pt-2">
          <Form.Control
            as="textarea"
            id="chatbox"
            value={newMessage}
            onChange={handleNewMessage}
            placeholder="Enter message Here....."
          >

          </Form.Control>
          {/* <Button variant="danger">Submit</Button> */}
        </Form>
      </Col>
    </Container>
  )
}

export default Thread