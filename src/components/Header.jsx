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
  const  RealEstateMapClick = () =>{
    navigate('/RealEstateMap')
  }

  
  return(
    <>
      


       <Nav variant="pills" defaultActiveKey="/main" className="nav" style={{backgroundColor:'#548ce8',position:"fixed", top:0, zIndex:99, width:'90%', justifyContent:'space-between',margin:'auto'  }}>
      <Nav.Item>
        <Nav.Link onClick={homeclick}><h3 className="iHome" style={{color:'black'}}><i class="fa-solid fa-house"></i>HOME</h3></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="searchHover" onClick={RealEstateMapClick} eventKey="link-1"><h3 style={{color:'black'}}>상세검색</h3></Nav.Link>
      </Nav.Item>
      <Nav.Item  class='login'>
        <Nav.Link  >
          <h3 className="loginHover" style={{color:'black'}} onClick={loginclick} >로그인/회원가입</h3>
          
        </Nav.Link>
      </Nav.Item>
    </Nav>
    

    </>
  )
}

export default Header;