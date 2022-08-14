import React from 'react'

import Thread from './Thread'

const InboxTableRow = ({thread , user}) => {
  const recipient = thread.users.find(u => u.username !== user.username)
  const time = new Date(thread.created_at).toString().split(" ").splice(0,5).join(" ")
  
  const message = thread.latest_message
  return (
      <tr>
        <td>{recipient.username}</td>
        <td>{thread.subject}</td>
        <td>{message}</td>
        <td>{time}</td>
      </tr>
  )
}

export default InboxTableRow