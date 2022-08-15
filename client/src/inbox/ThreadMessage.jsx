import React from 'react'

import { Row } from 'react-bootstrap'

const ThreadMessage = ({message, recipient}) => {

  const color = message.creator === recipient.username ? "receiver" : "sender"
  const time = new Date(message.created_at).toString().split(" ").splice(0,5).join(" ")
  return (
  <Row className={`${color} rounded-3 p-3 m-3 shadow-sm`}>
    <p>{message.body}</p>
    <h6 className="mt-2 ">{message.creator} <small className="text-muted text-end">at {time}</small></h6>
  </Row>
  )
}

export default ThreadMessage