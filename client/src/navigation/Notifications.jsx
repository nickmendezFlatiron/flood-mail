import {React, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Badge  from 'react-bootstrap/Badge'
import Button  from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const Notifications = ({cableApp, alerts, setAlerts}) => {
  const navigate = useNavigate()
  const renderAlerts = alerts && alerts.map(alert=> {
    function handleClick(e){
      e.preventDefault()
      fetch(`/alerts/${alert.id}`)
      .then(r => r.json())
      .then(r => 
       { const filterAlerts = alerts.filter(a => a.id !== alert.id)
        setAlerts(filterAlerts)
        navigate(`/inbox/thread/${r.email_thread_id}`)
      }
      )
    }
    return  <li key={alert.id} className={`alerts-list`} onClick={handleClick}>
              New message from <strong>{alert.message.creator}</strong>
            </li>
  })

  const popover = (
    <Popover id="popover-basic" >
      <Popover.Header as="h3" className="text-center">Notifications</Popover.Header>
      <Popover.Body className='p-0'>
       <ul className='text-center p-0 justify-content-center'>
          {renderAlerts}
       </ul>
      </Popover.Body>
    </Popover>
  );
  return (
    <>
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button variant="dark" className="text-danger">
        Alerts <Badge bg={alerts?.length > 0 ? "danger" : "transparent"} text="white" >{alerts?.length > 0 && alerts?.length}</Badge>
        <span className="visually-hidden">unread messages</span>
      </Button>
    </OverlayTrigger>

    </>
  )
}

export default Notifications