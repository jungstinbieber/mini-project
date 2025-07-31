import { useEffect, useState } from 'react';
import dummy from './dummy'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';




// 커스텀 화살표 컴포넌트
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'blue', borderRadius: '50%', width: '30px', height: '30px' }} // 색상 파란색으로 변경
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'blue', borderRadius: '50%', width: '30px', height: '30px' }} // 색상 파란색으로 변경
      onClick={onClick}
    />
  );
}

function Exposure() {
  const [apartments, setApartments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredApartments = dummy.filter(apt => apt.id >= 1 && apt.id <= 5);
    setApartments(filteredApartments);
  }, []);

  

  

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />, // 커스텀 다음 화살표
    prevArrow: <SamplePrevArrow />, // 커스텀 이전 화살표
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const divClick = (id)=>{
    navigate(`/Recommendation/${id}`)
  }

  
  return (
    <>
      <div className="slider-container" style={{borderRadius:'20px', width: '450px', margin: '0 auto', padding: '20px', border: '1px solid black' }}>
        
        <Slider  {...sliderSettings}>
          {apartments.map((apt, i) => (
            <div  onClick={() => divClick(apt.id)} key={i} className="ExposureBox" style={{
              border: '1px solid #007bff',
              borderRadius: '10px',
              height: '500px',
              padding: '20px',
              margin: '0 10px',
              gap:'5px',
              backgroundColor: '#f8f9fa',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              width: '350px',
              
            }}
            >
             
              <img
                src={apt['img']}
                alt={apt['아파트명']}
                style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}
              />
              
              <p style={{ fontSize: '18px', fontWeight: 'bold', margin: '10px 0' }}>{apt['아파트명']}</p>
              <h3 style={{ color: '#28a745', margin: '10px 0' }}>{apt['가격'].toLocaleString('ko-KR')} 원</h3>
              <p style={{ color: '#6c757d' }}>{apt['주소']}</p>
              
              <p>{apt['평수']}평</p>
            </div>
            
          ))}
          
          
        </Slider>
      </div>
    </>
  );
}

export default Exposure;