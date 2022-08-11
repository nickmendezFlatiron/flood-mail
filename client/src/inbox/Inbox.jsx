import React , { useState } from 'react'
import { Container, Row, Col , Button , Table } from 'react-bootstrap'

// React Components
import Toolbar from './Toolbar'
import InboxTable from './InboxTable'
import NewMessageModal from './NewMessageModal'


const Inbox = () => {
  
  const mainDisplay = {table: <InboxTable /> , }
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  
  return (
    <Container className="my-5 border border-3 rounded">
        <Row className="">
          <Col className="border-end border-3 pt-3 d-flex flex-column bg-light" md={2}>
           
            <Button onClick={handleShow} className="btn-danger shadow">New Message</Button>
            <NewMessageModal show={show} setShow={setShow}/>
            <hr />
            <Button variant="link" className="text-danger align-self-start">Threads</Button>
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
            {mainDisplay.table}
          </Row>
          </Col>
        </Row>

    </Container>
  )
}

export default Inbox