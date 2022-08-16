import {React , useEffect , useState , useRef}from 'react'

import ThreadMessage from './ThreadMessage'

import  Container  from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button"
import Col from 'react-bootstrap/Col'

import Form from "react-bootstrap/Form"

import uuid from 'react-uuid'

const Thread = ({emailThreads , selectedThread , user}) => {

  const [threadInfo, setThreadInfo] = useState([])
  const [newMessage , setNewMessage] = useState("")
  const scrollRef = useRef()
  const scroll = () => setTimeout(function(){scrollRef.current.scrollIntoView({behavior: "smooth", block: "end"})} , 250)

  const recipient = threadInfo.users  && threadInfo.users.filter(u => u.username !== user.username)

  const updateThreadInfo = emailThreads.filter(t => t.id === parseInt(selectedThread))
  // console.log(updateThreadInfo)
  useEffect(()=>{
    fetch(`/email_threads/${selectedThread}`)
    .then(r=>{
      if(r.ok) {
        r.json().then(r => {
          setThreadInfo(r)
        })
      }
    }).then(scroll())
  },[selectedThread])

  function handleNewMessage(e) {
    setNewMessage(e.target.value)
  }

  function handleMessageSubmit(e){
    // e.preventDefault()
    const message = {
      email_thread_id: selectedThread,
      body: newMessage ,
      user_id: user.id
    }
    fetch("/messages" ,{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(message)
    }).then(r=> {
      if (r.ok) {
        r.json().then(message => {
          threadInfo.messages.push(message)
          setThreadInfo({...threadInfo})
          scroll()
          setNewMessage("")
          updateThreadInfo[0].latest_message = message.body.slice(0 , 30)
        })
      }
    })
    
  }
  const displayMessages = threadInfo.messages && threadInfo.messages.map(message => <ThreadMessage key={uuid()} threadInfo={threadInfo} setThreadInfo={setThreadInfo} recipient={recipient[0]} message={message} />)
 
  return (
    <Container className="overflow-auto" >
      <h2>{threadInfo.subject}</h2>
      <Col>
     {displayMessages}
      </Col>
      <Col>
        <Form className="mx-3 pt-2" onSubmit={handleMessageSubmit}>
          <Form.Control
            as="textarea"
            id="chatbox"
            value={newMessage}
            onChange={handleNewMessage}
            placeholder="Enter message Here....."
          >
          </Form.Control>
        <Button ref={scrollRef} onClick={handleMessageSubmit} className="form-button mt-2 btn-danger">Submit</Button>
        </Form>
      </Col>
    </Container>
  )
}

export default Thread