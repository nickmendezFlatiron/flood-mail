import React from 'react'
import { Container, Row, Col , Button } from 'react-bootstrap'

const Inbox = () => {

  return (
    <Container className="my-5 border rounded">
        <Row className="">
          <Col className="border-end border-3 pt-3 d-flex flex-column" md={2}>
            <Button className="btn-danger">New Message</Button>
            <hr />
            <Button variant="link" className="text-danger align-self-start">Link</Button>
            <br />
            <Button variant="link" className="text-danger align-self-start">Link</Button>
            <br />
            <Button variant="link" className="text-danger align-self-start">Link</Button>
          </Col>
          <Col className="" md={10}></Col>

        </Row>

    </Container>
  )
}

export default Inbox