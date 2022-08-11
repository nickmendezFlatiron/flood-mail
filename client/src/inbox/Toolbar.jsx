import React from 'react'
import {FormControl , InputGroup } from 'react-bootstrap'

const Toolbar = ({messageFormTarget}) => {



  function handleFilter(event){
    
  }
  return (
    <>
      <InputGroup size="lg" >
        <FormControl 
          ref={messageFormTarget} 
          aria-label="Large" 
          aria-describedby="inputGroup-sizing-sm" 
          placeholder='Search Messages' 
          value="" 
          onChange={handleFilter}
          />
      </InputGroup>
    </>
  )
}

export default Toolbar