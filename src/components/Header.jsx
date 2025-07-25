import { useState } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



function Header(){
  const navigate = useNavigate();
  const [search,setSearch] =useState('');
  const onChange =(e)=>{
    setSearch(e.target.value)
  }

  const homeclick = () =>{
    navigate('/')
  }
  const loginclick = () =>{
    navigate('/Login')
  }

  
  return(
    <>
      


       <Nav variant="pills" defaultActiveKey="/main" className="nav" style={{backgroundColor:'#548ce8',position:"fixed", top:0, zIndex:99, width:'100%', }}>
      <Nav.Item>
        <Nav.Link onClick={homeclick}><h3 style={{color:'black'}}><i class="fa-solid fa-house"></i>HOME</h3></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item  class='login'>
        <Nav.Link  >
          <h5 onClick={loginclick} >로그인/회원가입</h5>
        </Nav.Link>
      </Nav.Item>
    </Nav>
      

    </>
  )
}

export default Header;