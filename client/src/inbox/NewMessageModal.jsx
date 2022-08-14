import {React , useState }from 'react'
import { Modal , Button , Form , InputGroup, Row} from 'react-bootstrap';

const NewMessageModal = ({setShow , show}) => {
  
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} className="mt-5">
        <Modal.Header closeButton>
          <Modal.Title>Compose New Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">To: </InputGroup.Text>
            <Form.Control
              placeholder="Username (Case Sensitive)"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            {/* <InputGroup.Text id="basic-addon2">Subject: </InputGroup.Text> */}
            <Form.Control
              placeholder="Subject Line"
              aria-label="Subject"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <Form.Group>
            <Row className="px-2">
              <textarea placeholder='Enter message here...' className="rounded-3 border border-2">
              {/* Enter Text Here */}
              </textarea>
            </Row>
            
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Send 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default NewMessageModal