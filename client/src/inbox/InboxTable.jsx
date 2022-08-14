import React from 'react'
import { Table } from 'react-bootstrap'

import InboxTableRow from './InboxTableRow'

import uuid from "react-uuid"

const InboxTable = ({emailThreads , user}) => {

  let renderThreads = emailThreads.map(thread => <InboxTableRow key={uuid()} user={user} thread={thread}/>)  
  console.log(emailThreads)
  return (
    <Table hover >
    <thead>
      <tr>
        <th>Sender Username</th>
        <th>Thread Subject</th>
        <th>Latest Message From Thread</th>
        <th>Timestamp</th>
      </tr>
    </thead>
    <tbody>
      {renderThreads}
    </tbody>
  </Table>
  )
}

export default InboxTable