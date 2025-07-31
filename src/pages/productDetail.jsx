import { useParams } from "react-router-dom"
import mokup from "../mokup";
import { useEffect } from "react";


function ProductDetail() {

  const { id } = useParams();
  const product = mokup.find((item) => item.id === parseInt(id));

  
  useEffect(() => {
    document.querySelector('.Detailbox').innerHTML = product.text
  }, [])
  

  return (

    
    <div className="Detailcontainer">
      <h1>{product.title}</h1>
      
      
      <div className="Detailbox">


      </div>
      
    </div>
  );
  
}
export default ProductDetail