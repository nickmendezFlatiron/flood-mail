import React from 'react'
import { Table } from 'react-bootstrap'

import InboxTableRow from './InboxTableRow'

import uuid from "react-uuid"

const InboxTable = () => {

  let example = [...Array(15).keys()].map(e => <InboxTableRow key={uuid()} />)  

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
      {example}
    </tbody>
  </Table>
  )
}

export default InboxTable