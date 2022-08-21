import {React }from 'react'
import { useNavigate } from 'react-router-dom'


const InboxTableRow = ({thread , user}) => {

  const recipient = thread.users.find(u => u.username !== user.username)  
  const time = new Date(thread.updated_at).toString().split(" ").splice(0,5).join(" ")
  const navigate = useNavigate()
  function handleThreadClick(){
    navigate(`/inbox/thread/${thread.id}`)
  }
  return (
    <tr  id={thread.id} onClick={handleThreadClick}>
        <td>{recipient.username}</td>
        <td className='fw-bolder'>{thread.subject}</td>
        <td>{thread.latest_message}</td>
        <td>{time}</td>
      </tr>
  )
}

export default InboxTableRow