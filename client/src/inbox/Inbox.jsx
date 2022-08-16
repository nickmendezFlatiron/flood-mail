import React , { useState , useEffect} from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Spinner from "react-bootstrap/Spinner"

// React Components
import Toolbar from './Toolbar'
import InboxTable from './InboxTable'
import NewMessageModal from './NewMessageModal'
import Thread from './Thread'



const Inbox = ({user }) => {

  const [emailThreads , setEmailThreads] = useState(null)
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
    window.location.reload()
  }

  // const filteredThread = emailThreads.filter(e => e.id === parseInt(selectedThread))
  
  const renderThread = <Thread setView={setView} setEmailThreads={setEmailThreads} selectedThread={selectedThread} emailThreads={emailThreads} user={user}/> 
  const renderTable = <InboxTable handleClick={handleClick} user={user} emailThreads={emailThreads} setSelectedThread={setSelectedThread}/>
  const renderSpinner =  <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>
  
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
  
  const selectComponent = view === "table" ? renderTable : renderThread
  const display = view === "spinner" ? renderSpinner : selectComponent


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
            <Toolbar/>
          </Row>
          <Row className="mt-1 pt-3 px-3 overflow-auto inbox-height">
            {display}
          </Row>
          </Col>
        </Row>

    </Container>
  )
}

export default Inbox