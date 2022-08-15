import React from 'react'

import ThreadMessage from './ThreadMessage'

import { Container } from 'react-bootstrap'
import { useEffect } from 'react'

const Thread = ({selectedThread}) => {

  useEffect(()=>{
    fetch(`/email_threads/${selectedThread}`)
      .then(r=>{
        if(r.ok) {
          r.json().then(console.log)
        }
      })
  },[])
  return (
    <Container>
      <h6>From:</h6>
      <h4>Thread Subject Here</h4>
      <ThreadMessage />
    
      <ThreadMessage />
    
      <ThreadMessage />
    
    </Container>
  )
}

export default Thread