import React from 'react'
import { Container, Row, Col , Button } from 'react-bootstrap'

// React Components
import Toolbar from './Toolbar'
import InboxTable from './InboxTable'

const Inbox = () => {

  const mainDisplay = {table: <InboxTable /> , }

  
  return (
    <Container className="my-5 border border-3 rounded">
        <Row className="">
          <Col className="border-end border-3 pt-3 d-flex flex-column bg-light" md={2}>
            <Button className="btn-danger shadow">New Message</Button>
            <hr />
            <Button variant="link" className="text-danger align-self-start">Threads</Button>
            <br />
            <Button variant="link" className="text-danger align-self-start">Dropdown</Button>
            <br />
            <Button variant="link" className="text-danger align-self-start">Link</Button>
          </Col>
          <Col className="pt-3">
          <Row>
            <Toolbar />
          </Row>
          <Row className="mt-1 p-3 height-match">
            {mainDisplay.table}
          </Row>
          </Col>
        </Row>

    </Container>
  )
}

export default Inbox