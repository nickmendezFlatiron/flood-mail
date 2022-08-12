import React from 'react'

import { NavDropdown , Button } from 'react-bootstrap'
import { Link , useNavigate} from 'react-router-dom';


const DropDown = ({user , setUser}) => {
  const navigate = useNavigate();

  function handleLogout(){
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser({})
        navigate("/")
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