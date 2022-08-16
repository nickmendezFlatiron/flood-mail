import {React }from 'react'



const InboxTableRow = ({thread , user, setSelectedThread, handleClick}) => {

  const recipient = thread.users.find(u => u.username !== user.username)  
  const time = new Date(thread.created_at).toString().split(" ").splice(0,5).join(" ")
  

  function handleThread(e) {

    //  else {}
      // 
      handleClick(e)
    }
  
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