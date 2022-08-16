import {React }from 'react'



const InboxTableRow = ({thread , user,  handleClick}) => {

  const recipient = thread.users.find(u => u.username !== user.username)  
  const time = new Date(thread.updated_at).toString().split(" ").splice(0,5).join(" ")
  
  return (
    <tr  id={thread.id} onClick={(e) => handleClick(e)}>
        <td>{recipient.username}</td>
        <td className='fw-bolder'>{thread.subject}</td>
        <td>{thread.latest_message}</td>
        <td>{time}</td>
      </tr>
  )
}

export default InboxTableRow