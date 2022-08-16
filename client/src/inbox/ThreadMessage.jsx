import React from 'react'
import  Row  from 'react-bootstrap/Row'
import CloseButton from 'react-bootstrap/CloseButton'

const ThreadMessage = ({message, recipient , threadInfo , setThreadInfo}) => {

  const variant = message.creator === recipient.username ? "receiver" : "sender"
  const time = new Date(message.created_at).toString().split(" ").splice(0,5).join(" ")

  const filteredMessages = threadInfo.messages.filter(m => m.id !== message.id)
  
  function handleDelete(){
    if (window.confirm("Do you want to delete this message? It will be deleted for everyone.")){
        fetch(`/messages/${message.id}`, {method: "DELETE"}).then(r=> 
          {
            
          if (r.ok) {
              threadInfo.messages = filteredMessages
              
              setThreadInfo({...threadInfo})
          }
        })
    }
  }
  return (
    
  <Row className={`${variant} rounded-3 p-3 m-3 shadow-sm`}>
    <CloseButton onClick={handleDelete}></CloseButton>
    <p>{message.body}</p>
    <h6 className="mt-2 ">{message.creator} <small className="text-muted text-end">at {time}</small></h6>
  </Row>
  )
}

export default ThreadMessage