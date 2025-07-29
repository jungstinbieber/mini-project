import { useEffect, useState } from 'react';
import dummy from './dummy';

function Exposure () {
  const [apartments, setApartments] = useState([]);
  

  useEffect(()=>{
    // id가 1부터 5인 데이터만 필터링
    const filteredApartments = dummy.filter(apt => apt.id >= 1 && apt.id <= 2);
    setApartments(filteredApartments);
    
  }, []);

  return(
    <>
    <div className="ExposureContainer" style={{display:'flex'}} >
        {apartments.map((apt, index) => (
          <div key={index} className="ExposureBox" style={{border:'1px, solid, blue', height:'500px',padding:'10px', margin:'auto',width:'350px'}}>
            <img src="" alt={apt['아파트명']} /> 
            <p>{apt['아파트명']}</p>
            <h3>{apt['가격'].toLocaleString('ko-KR')} 원</h3>
            <p>{apt['주소']}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Exposure