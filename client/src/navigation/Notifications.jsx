import React from 'react'

import { Badge , Button } from 'react-bootstrap'

const Notifications = () => {
  return (
    <Button variant="dark" className="text-secondary">
      Alerts <Badge bg="danger" text="light" >9</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  )
}

export default Notifications