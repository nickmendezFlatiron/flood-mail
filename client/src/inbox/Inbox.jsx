import React , { useState , useEffect} from 'react'
import { Container, Row, Col , Button , Table } from 'react-bootstrap'

// React Components
import Toolbar from './Toolbar'
import InboxTable from './InboxTable'
import NewMessageModal from './NewMessageModal'
import Thread from './Thread'


const Inbox = ({navigate , isAuthenticated , user}) => {
  
  const mainDisplay = {table: <InboxTable handleClick={handleClick}/> , thread: <Thread />}
  const [view , setView] = useState(mainDisplay.table)

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  

  function handleClick(e){
    console.log(e)
    if(e.target.innerText === "Threads") {
      setView(mainDisplay.table)
    }
  }

  useEffect(()=> {
    fetch(`/user/threads`)
  } ,[])
  
  

  return (
    <Container className="my-5 border border-3 rounded">
        <Row className="">
          <Col className="border-end border-3 pt-3 d-flex flex-column bg-light" md={2}>
           
            <Button onClick={handleShow} className="btn-danger shadow">New Message</Button>
            <NewMessageModal show={show} setShow={setShow}/>
            <hr />
            <Button variant="link" className="text-danger align-self-start" onClick={handleClick}>Threads</Button>
            <br />
            <Button variant="link" className="text-danger align-self-start">Dropdown</Button>
            <br />
            <Button variant="link" className="text-danger align-self-start">Link</Button>
          </Col>
          <Col className="pt-3">
          <Row>
            <Toolbar/>
          </Row>
            {/* <Table>
              <thead>
                <tr>
                  <th>Sender Username</th>
                  <th>Thread Subject</th>
                  <th>Latest Message From Thread</th>
                  <th>Timestamp</th>
                </tr>
              </thead>
            </Table> */}
          <Row className="mt-1 p-3 height-match">
            {view}
          </Row>
          </Col>
        </Row>

    </Container>
  )
}

export default Inbox