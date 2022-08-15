import React from 'react'
import Table from 'react-bootstrap/Table'

import InboxTableRow from './InboxTableRow'

import uuid from "react-uuid"

const InboxTable = ({emailThreads , user}) => {

  let renderThreads = emailThreads.map(thread => <InboxTableRow key={uuid()} user={user} thread={thread}/>)  
  
  console.log(emailThreads)
  return (
    <Table hover >
     
    <tbody>
      {renderThreads}
    </tbody>
  </Table>
  )
}

export default InboxTable