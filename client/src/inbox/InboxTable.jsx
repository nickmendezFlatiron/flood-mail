import React from 'react'
import Table from 'react-bootstrap/Table'
import Spinner from "react-bootstrap/Spinner"

import InboxTableRow from './InboxTableRow'
import { useOutletContext } from "react-router-dom";

import uuid from "react-uuid"

const InboxTable = () => {
  const {renderEmailThreadRows , user , handleClick} = useOutletContext()
  // debugger
  let renderThreads = renderEmailThreadRows?.map(thread => <InboxTableRow key={uuid()} handleClick={handleClick} user={user} thread={thread} />)  
  const spinner =  <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>

  if(!renderEmailThreadRows) return spinner
  
  return (
    <Table hover >
     
    <tbody>
      {renderThreads}
    </tbody>
  </Table>
  )
}

export default InboxTable