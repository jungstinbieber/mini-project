import React, { useState } from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import dummy from './dummy';
import { useNavigate } from 'react-router-dom';

function RealEstateMap() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMarker, setSelectedMarker] = useState(null); // 클릭된 마커 정보 상태
  const navigate = useNavigate();

  // 검색 처리 함수
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    // 실시간 필터링 (선택 사항: 현재 전체 표시)
  };

  // 마커 클릭 시 정보 표시/숨김 토글
  const handleMarkerClick = (apt) => {
    if (selectedMarker && selectedMarker['위도'] === apt['위도'] && selectedMarker['경도'] === apt['경도']) {
      // 동일한 마커를 다시 클릭하면 정보 숨김
      setSelectedMarker(null);
    } else {
      // 다른 마커 또는 처음 클릭 시 정보 표시
      setSelectedMarker(apt);
    }
  };

  return (
    <div className="detailSearchContainer">
      <div className="searchBar">
        <input
          type="text"
          placeholder="아파트, 지역 또는 학교명으로 검색"
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button className="search-button" onClick={handleSearchChange}>🔍</button>
      </div>
      <Map
        center={{ lat: 37.5665, lng: 126.9780 }} // 서울 중심
        style={{ width: '100%', height: '360px' }}
        level={10}
      >
        {dummy.map((pos) => (
          <MapMarker
            key={`${pos.위도}-${pos.경도}`}
            position={{ lat: pos.위도, lng: pos.경도 }}
            onClick={() => handleMarkerClick(pos)}
          >
            {/* 클릭 시 커스텀 오버레이로 정보 표시 */}
            {selectedMarker && selectedMarker['위도'] === pos['위도'] && selectedMarker['경도'] === pos['경도'] && (
              <CustomOverlayMap position={{ lat: pos.위도, lng: pos.경도 }}>
                <div className="custom-overlay">
                  <div className="overlay-content">
                    <h4>{pos['아파트명']}</h4>
                    <p>주소: {pos['주소']}</p>
                    <p>가격: {pos['가격'].toLocaleString('ko-KR')} 원</p>
                    <p>평수: {pos['평수']} 평</p>
                    <button onClick={() => setSelectedMarker(null)}>닫기</button>
                  </div>
                </div>
              </CustomOverlayMap>
            )}
          </MapMarker>
        ))}
      </Map>
    </div>
  );
}

export default RealEstateMap;