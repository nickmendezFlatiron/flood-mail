import {React }from 'react'



const InboxTableRow = ({thread , user, setSelectedThread, handleClick}) => {

  
  const recipient = thread.users.find(u => u.username !== user.username)
  
  const time = new Date(thread.created_at).toString().split(" ").splice(0,5).join(" ")
  
  
  const message = thread.latest_message

 function handleThread(e) {
    setSelectedThread(e.target.parentNode.id)
    handleClick(e.target.parentNode.id)
  }
  
  return (
      <tr  id={thread.id} onClick={handleThread}>
        <td>{recipient.username}</td>
        <td><strong>{thread.subject}</strong></td>
        <td>{message}</td>
        <td>{time}</td>
      </tr>
  )
}

export default InboxTableRow