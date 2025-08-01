import { useState } from "react"
import dummy from "./dummy"
import { useParams } from "react-router-dom"
import 실내1 from '../images/img1/실내1.jpg'
import 실내2 from '../images/img1/실내2.jpg'
import 실내3 from '../images/img1/실내3.jpg'
import 실내4 from '../images/img1/실내4.jpg'
import 실내5 from '../images/img1/실내5.jpg'



function Recommendation() {
  const param = useParams();
  const id = param.id;

  // const { id } = useParams();

  const dummyFind = dummy.find((item) => item.id === id);

  console.log(dummyFind)
  
 

  return(
    <>
    <hr />
    <div className="RemmendationContainer">
      <div className="RemmandationBox">
       
       <hr />
        <h1>{dummyFind.아파트명}</h1>
        <p>{dummyFind.주소}</p>
        <p>{dummyFind.평수}평</p>
        <p>{dummyFind.상세}</p>

        
        
      </div>
    </div>
    </>
  )
  
 
  
  
}


export default Recommendation