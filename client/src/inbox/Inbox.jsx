import React , { useState , useEffect} from 'react'
import {  Outlet, Navigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"


// React Components
import Toolbar from './Toolbar'
import InboxTable from './InboxTable'
import NewMessageModal from './NewMessageModal'
import Thread from './Thread'



const Inbox = ({user , navigate }) => {

  const [emailThreads , setEmailThreads] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [view , setView] = useState("spinner")
  const [show, setShow] = useState(false);
  const [selectedThread , setSelectedThread] = useState(null)
  const handleShow = () => setShow(true);
  
  function handleClick(e){
    
    if (e.target !== "tr") {
      setView("thread")
      setSelectedThread(e.target.parentNode.id)
    }
  //  console.log(e)
  }
  
  function handleThread(){
    // setView(() => "table")
    navigate("/inbox/table")
  }

  const filteredThread = emailThreads?.filter(t => t.subject.toLowerCase().includes(searchQuery.toLowerCase()) || t.users[0].username.toLowerCase().includes(searchQuery.toLowerCase()) ||t.users[1].username.toLowerCase().includes(searchQuery.toLowerCase()) || t.latest_message.toLowerCase().includes(searchQuery.toLowerCase()))
  const renderEmailThreadRows = emailThreads?.length > 0 && searchQuery.length > 0 ? filteredThread : emailThreads
  // const renderThread = <Thread setView={setView} setEmailThreads={setEmailThreads} selectedThread={selectedThread} emailThreads={emailThreads} user={user}/> 

  
  
  useEffect(()=> {
    fetch(`/user/threads`)
    .then(r => {
      if (r.ok) {
        r.json().then(emails => {
          setEmailThreads([...emails])
          setView("table")

        }) 
      } 
    })
  } ,[])
  
  // const selectComponent = view === "table" ? <Navigate to="/table" /> : <Navigate to="/thread/:id" />
  // const display = view === "spinner" ? renderSpinner : selectComponent


  return (
    <Container className="mt-4 border border-3 rounded">
        <Row >
          <Col className="border-end border-3 pt-3 d-flex flex-column bg-light" md={2}>
           
            <Button onClick={handleShow} className="btn-danger shadow">New Message</Button>
            <NewMessageModal show={show} setShow={setShow} user={user} emailThreads={emailThreads} setEmailThreads={setEmailThreads}/>
            <hr />
            <Button variant="link" className="text-danger align-self-start" onClick={handleThread}>Threads</Button>
            <br />
            <Button variant="link"className="text-danger align-self-start">Contact List</Button>
          </Col>
          <Col className="pt-3">
          <Row>
            <Toolbar setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
          </Row>
          <Row className="mt-1 pt-3 px-3 overflow-auto inbox-height">
            <Outlet context={{handleClick , user , renderEmailThreadRows , setSelectedThread , setView , setEmailThreads , selectedThread , emailThreads }}/>
          </Row>
          </Col>
        </Row>

    </Container>
  )
}

export default Inbox