import { useEffect, useState } from "react";
import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk";
import dummy from "./dummy";

function RealEstateMap () {
  const [data, setDate] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  

  useEffect(()=>{
    fetch(`al%2Fe0Nlt7mwxAU1i%2BBMvKy4iOA64Fg6guUpo8wo5AHIPRb55%2FCg5hl566MMyZtAO%2F47PIXJr1aZlo2LjuwBqsw%3D%3D`)
    .then(res=>res.json())
    .then(data => setDate());
  },[]);
  
  
  

  return(
    <>
    <div className="detailSearchContainer">
      <div className="searchBar">
        <input style={{display:'flex', justifyContent:'center,', alignContent:'center', margin:'auto'}} type="text" placeholder="아파트, 지역 또는 학교명으로 검색" value={searchQuery} onChange={handleSearchChange} />
        <button style={{display:'flex', justifyContent:'center,', alignContent:'center', margin:'auto'}}>🔍</button>
      </div>
      <Map
      center={{ lat: 36.2683, lng: 127.6358 }}
      style={{ width: "100%", height: "360px" }}
      level={14}
    >
      <MarkerClusterer
        averageCenter={true}
        minLevel={10}
      >
        {dummy.map((pos) => (
          <MapMarker
            key={`${pos.위도}-${pos.경도}`}
            position={{lat: pos.위도, lng: pos.경도}}
          >


          </MapMarker>
            

        ))}
      </MarkerClusterer>
    </Map>
    </div>
    </>
  )
}

export default RealEstateMap