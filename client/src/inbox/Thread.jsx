import React from 'react'

import ThreadMessage from './ThreadMessage'

import { Container } from 'react-bootstrap'

const Thread = () => {
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