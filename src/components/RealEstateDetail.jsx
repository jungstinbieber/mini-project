import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import dummy from './dummy'; // dummy 데이터 import
import './RealEstateDetail.css'

function RealEstateDetail() {
  // URL 파라미터에서 아파트명 가져오기 (예: /detail/푸르지오-중랑구-1)
  const { apartmentName } = useParams();
  const location = useLocation();
  const decodedApartmentName = apartmentName?.replace(/-/g, ' '); // 대시를 공백으로 변환

  // dummy 데이터에서 해당 아파트 찾기
  const apartment = dummy.find((apt) => 
    apt['아파트명'].replace(/\s+/g, '-') === apartmentName
  );

  // 데이터가 없으면 404 또는 기본 메시지
  if (!apartment) {
    return <div>아파트 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="detail-container">
      <h2>{apartment['아파트명']} 상세 정보</h2>
      <div className="detail-item">
        <strong>주소:</strong> {apartment['주소']}
      </div>
      <div className="detail-item">
        <strong>가격:</strong> {apartment['가격'].toLocaleString('ko-KR')} 원
      </div>
      <div className="detail-item">
        <strong>평수:</strong> {apartment['평수']} 평
      </div>
      <div className="detail-item">
        <strong>위도/경도:</strong> {apartment['위도']}, {apartment['경도']}
      </div>
      {/* 추가 정보 (예: 이미지, 맵) */}
      <div className="map-preview">
        {/* 간단한 미리보기 지도 (선택 사항) */}
        <p>위치 미리보기 (지도 API 연동 가능)</p>
      </div>
    </div>
  );
}

export default RealEstateDetail;