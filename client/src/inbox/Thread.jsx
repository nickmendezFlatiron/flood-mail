import {React , useEffect , useState}from 'react'

import ThreadMessage from './ThreadMessage'

import  Container  from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

const Thread = ({selectedThread , user}) => {

  const [threadInfo, setThreadInfo] = useState([])

  const recipient = threadInfo.users  && threadInfo.users.filter(u => u.username !== user.username)
  useEffect(()=>{
    fetch(`/email_threads/${selectedThread}`)
      .then(r=>{
        if(r.ok) {
          r.json().then(r => {
            setThreadInfo(r)
          })
        }
      })
  },[selectedThread])

  const displayMessages = threadInfo.messages && threadInfo.messages.map(message => <ThreadMessage recipient={recipient[0]} message={message} />)
  return (
    <Container >
      <h4>{threadInfo.subject}</h4>
      <Col>
     {displayMessages}
      </Col>
    </Container>
  )
}

export default Thread