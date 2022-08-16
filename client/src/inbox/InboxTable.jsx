import React from 'react'
import Table from 'react-bootstrap/Table'

import InboxTableRow from './InboxTableRow'

import uuid from "react-uuid"

const InboxTable = ({emailThreads , user , handleClick}) => {

  let renderThreads = emailThreads.map(thread => <InboxTableRow key={uuid()} handleClick={handleClick} user={user} thread={thread} />)  

  return (
    <Table hover >
     
    <tbody>
      {renderThreads}
    </tbody>
  </Table>
  )
}

export default InboxTable