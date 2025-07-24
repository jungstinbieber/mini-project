import { useState } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



function Header(){
  const navigate = useNavigate();
  const [search,setSearch] =useState('');
  const onChange =(e)=>{
    setSearch(e.target.value)
  }
  return(
    <>
      


       <Nav variant="pills" defaultActiveKey="/main" className="nav" style={{backgroundColor:'#548ce8',position:"fixed", top:0, zIndex:99, width:'100%', }}>
      <Nav.Item>
        <Nav.Link  onClick={()=>navigate('/')}><h3 style={{color:'black'}}><i class="fa-solid fa-house"></i>HOME</h3></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          <p>로그인/회원가입</p>

        </Nav.Link>
      </Nav.Item>
    </Nav>
      <div className='search'style={{textAlign:'center'}}>
      <input  type="text" value={search} onChange={onChange} input/>
      <button>검색하기</button>
      </div>

    </>
  )
}

export default Header;