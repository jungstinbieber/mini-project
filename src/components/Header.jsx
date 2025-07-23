import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



function Header(){
  const navigate = useNavigate();
  return(
    <>
       <Nav variant="pills" defaultActiveKey="/main">
      <Nav.Item>
        <Nav.Link onClick={()=>navigate('/main')}>Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </>
  )
}

export default Header;