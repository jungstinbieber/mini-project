import { useState } from "react"
import dummy from "./dummy"
import { useParams } from "react-router-dom"

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
       
        <h1>{dummyFind.아파트명}</h1>
        
        
      </div>
    </div>
    </>
  )
  
 
  
  
}


export default Recommendation