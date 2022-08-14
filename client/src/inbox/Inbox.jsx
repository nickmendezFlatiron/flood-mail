import React , { useState , useEffect} from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"


// React Components
import Toolbar from './Toolbar'
import InboxTable from './InboxTable'
import NewMessageModal from './NewMessageModal'
import Thread from './Thread'
import InboxTableRow from './InboxTableRow'


const Inbox = ({navigate , isAuthenticated , user}) => {
  const [emailThreads , setEmailThreads] = useState([])

  const mainDisplay = {table: <InboxTable handleClick={handleClick} user={user} emailThreads={emailThreads}/> , thread: <Thread />}
  const [view , setView] = useState(mainDisplay.table)
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  

  function handleClick(e){
    if(e.target.innerText === "Threads") {
      setView(mainDisplay.table)
    }
  }

  useEffect(()=> {
    fetch(`/user/threads`)
    .then(r => {
      if (r.ok) {
        r.json().then(emailThreads => {
          setEmailThreads([...emailThreads])
          setView(mainDisplay.table)
        })
      }
    })
  } ,[])
  

  return (
    <Container className="my-4 border border-3 rounded">
        <Row className="">
          <Col className="border-end border-3 pt-3 d-flex flex-column bg-light height-match" md={2}>
           
            <Button onClick={handleShow} className="btn-danger shadow">New Message</Button>
            <NewMessageModal show={show} setShow={setShow}/>
            <hr />
            <Button variant="link" className="text-danger align-self-start" onClick={handleClick}>Threads</Button>
            <br />
            <Button variant="link" className="text-danger align-self-start">Dropdown</Button>
            <br />
            <Button variant="link"className="text-danger align-self-start">Contact List</Button>
          </Col>
          <Col className="pt-3">
          <Row>
            <Toolbar/>
          </Row>
          <Row className="mt-1 p-3 ">
            {view}
          </Row>
          </Col>
        </Row>

    </Container>
  )
}

export default Inbox