function Login() {
  return(
    <>
    <div className="loginContainer" style={{height:'500px', alignItems:'center', justifyContent:'center'}}>
      <div className="loginBox" style={{display:'flex', flexDirection:'column',width:'300px',gap:'10px',padding:'20px',
        borderRadius:'5px'
      }}>
        <input type="text" placeholder="아이디"/>
        <input type="text" placeholder="비밀번호" />
        <button>로그인</button>
        <hr>
        </hr>
       
        <button>회원가입</button>
      </div>
    </div>
    </>
  )
}

export default Login