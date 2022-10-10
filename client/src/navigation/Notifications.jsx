import React from 'react'

import { Badge , Button } from 'react-bootstrap'

const Notifications = ({cableApp, alerts, setAlerts}) => {
  console.log(alerts)
  const renderAlerts = alerts && alerts.map(alert=> <div>{alert.message.body}</div>)
  return (
    <Button variant="dark" className="text-secondary">
      Alerts <Badge bg={alerts?.length > 0 ? "danger" : "transparent"} text="light" >{alerts?.length > 0 && alerts?.length}</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  )
}

export default Notifications