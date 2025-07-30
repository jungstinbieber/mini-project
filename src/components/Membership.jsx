import { useNavigate } from "react-router-dom"

function Membership () {


  return(
    <>
    <div className="membershipContainer"  >
      <div className="membershipBox" style={{display:'flex',flexDirection:'column', width:'300px',justifyContent:"center",alignItems:'center',margin:'auto'}}>
        <input type="text" placeholder="아이디"/>
        <input type="text" typeof="passWorld" placeholder="비밀번호"/>
        <input type="text" placeholder="이름"/>
        <input type="text" placeholder="생년월일"/>
        <button>다음</button>
        
      </div>
    </div>
    </>
  )
}

export default Membership