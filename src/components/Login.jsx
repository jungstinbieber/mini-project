import { useNavigate } from "react-router-dom";


function Login() {

  const navigate = useNavigate();

  const membershipClick = ()=>{
    navigate('/Membership')
  }
  return(
    <>
    <div className="loginContainer" style={{height:'500px', width:'300px', margin:'auto'}}>
      <div className="loginBox" style={{display:'flex', flexDirection:'column',width:'300px',gap:'10px',padding:'20px',
        borderRadius:'5px'
      }}>
        <input type="text" placeholder="아이디"/>
        <input type="text" placeholder="비밀번호" />
        <button>로그인</button>
        <hr>
        </hr>
       
        <button onClick={()=>{
         membershipClick()
        }}>회원가입</button>
      </div>
    </div>
    </>
  )
}

export default Login