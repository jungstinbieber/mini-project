import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './BasicExample.css';
import mokup from '../mokup';
import { useNavigate } from 'react-router-dom';


function BasicExample() {
  const mok = mokup
  
  const navigate = useNavigate();
  const handleCardClick = (id)=>{
    navigate(`/product/${id}`)
  }
  

  return (
    <Card style={{width:'1440px', margin:'10px'}} className='cards' >
    {
      mok.map((item,i)=>{
  
      return (
      
        <Card.Body  key={i} >
          <img src={item.img} alt="" style={{width: '100%', height: '150px'}} />
          <Card.Title>{item.title}</Card.Title>
          <Card.Text> {item.price} </Card.Text>
          
          <Button onClick={()=> handleCardClick(item.id)} variant="primary">더 보기</Button>
          <Card.Text>{item.address}</Card.Text>
        </Card.Body>

      )
      })

    }
     </Card>
  );
}

export default BasicExample;