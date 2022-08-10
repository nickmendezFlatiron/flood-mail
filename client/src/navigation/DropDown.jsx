import React from 'react'

import { NavDropdown , Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';


const DropDown = ({user , setUser}) => {

  function handleLogout(){
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser({})
      }
    }); 
  }
  return (
    <>
      <NavDropdown title={user.username}  align="end">
        <NavDropdown.Item as={Link} to="/account">Account Settings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Button} onClick={handleLogout}>Logout</NavDropdown.Item>
      </NavDropdown>
    </>
  )
}

export default DropDown