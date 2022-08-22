import React from 'react'
import Table from 'react-bootstrap/Table'
import Spinner from "react-bootstrap/Spinner"

import InboxTableRow from './InboxTableRow'
import { useOutletContext } from "react-router-dom";

import uuid from "react-uuid"

const InboxTable = ({navigate}) => {
  const {renderEmailThreadRows , user } = useOutletContext()

  let renderThreads = renderEmailThreadRows?.map(thread => <InboxTableRow key={uuid()} user={user} thread={thread} navigate={navigate}/>)  
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