import React from 'react'
import { Form , FormControl , InputGroup } from 'react-bootstrap'

const Toolbar = ({toggle , onToggle , filter , setFilter}) => {

  function handleChange () {
    onToggle(!toggle)
  }

  function handleFilter(event){
    setFilter(event.target.value)
  }
  return (
    <>
      <InputGroup size="lg" >
        <FormControl 
          aria-label="Large" 
          aria-describedby="inputGroup-sizing-sm" 
          placeholder='Search Messages' 
          value={filter} 
          onChange={handleFilter}
          />
      </InputGroup>
    </>
  )
}

export default Toolbar