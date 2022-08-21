import {React , useEffect , useState , useRef}from 'react'

import ThreadMessage from './ThreadMessage'

import  Container  from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button"
import Col from 'react-bootstrap/Col'
import Form from "react-bootstrap/Form"
import CloseButton from 'react-bootstrap/CloseButton';

import { useOutletContext , useParams } from "react-router-dom";
import uuid from 'react-uuid'

const Thread = () => {
  const {setView , setEmailThreads , selectedThread , emailThreads , user} = useOutletContext()
  const params = useParams()
  const [threadInfo, setThreadInfo] = useState([])
  const [newMessage , setNewMessage] = useState("")
  const scrollRef = useRef()
  const topRef = useRef()
  const scroll = () => setTimeout(function(){scrollRef.current.scrollIntoView({behavior: "smooth", block: "end"})} , 250)

  const recipient = threadInfo.users  && threadInfo.users.filter(u => u.username !== user.username)
  
  useEffect(()=>{
    fetch(`/email_threads/${params.threadId}`)
    .then(r=>{
      if(r.ok) {
        r.json().then(r => {
          setThreadInfo(r)
        })
      }
    })
    .then(scroll())
  },[selectedThread])

  function handleNewMessage(e) {
    setNewMessage(e.target.value)
  }

  function handleDeleteThread(){
    if(window.confirm("Do you want to delete this thread?")) {
      fetch(`/email_threads/${selectedThread}`, {method: "DELETE"})
        .then (r => {if(r.ok){
          const removedThread= emailThreads.filter(t => t.id !== parseInt(selectedThread))
          setEmailThreads([...removedThread])
          setView("table")
        }})
    }
  }

  function handleTopScroll() {
    topRef.current.scrollIntoView({behavior: "smooth", block: "end"})
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
        })
      }
    })
    
  }
  const displayMessages = threadInfo.messages && threadInfo.messages.map(message => <ThreadMessage key={uuid()} threadInfo={threadInfo} setThreadInfo={setThreadInfo} recipient={recipient[0]} message={message} />)
 
  return (
    <Container className="overflow-auto" >
      <Container className="d-flex justify-content-between">
        <h2 ref={topRef}>{threadInfo.subject}</h2>
        <CloseButton className='fs-5' onClick={handleDeleteThread}></CloseButton>
      </Container>
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
          <Container className="d-flex mt-2  justify-content-between">
            <Button className="form-button btn-danger" onClick={handleTopScroll}>To Top</Button>
            <Button ref={scrollRef} onClick={handleMessageSubmit} className="form-button btn-danger">Send</Button>
          </Container>
        </Form>
      </Col>
    </Container>
  )
}

export default Thread