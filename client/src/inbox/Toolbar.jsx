import React from 'react'
import {FormControl , InputGroup } from 'react-bootstrap'

const Toolbar = ({setSearchQuery ,searchQuery}) => {

  function handleFilter(event){
    setSearchQuery(event.target.value)
  }
  
  return (
    <>
      <InputGroup size="lg" >
        <FormControl 
          // ref={messageFormTarget} 
          aria-label="Large" 
          aria-describedby="inputGroup-sizing-sm" 
          placeholder='Search Threads....' 
          value={searchQuery} 
          onChange={handleFilter}
          />
      </InputGroup>
    </>
  )
}

export default Toolbar