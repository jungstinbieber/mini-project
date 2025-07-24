import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './BasicExample.css';
import mokup from '../mokup';


function BasicExample() {
  const mok = mokup
  
  

  return (
    <Card className='cards' >
    {
      mok.map((item,i)=>{
  
      return (
      
        <Card.Body key={i}>
          <img src="https://placehold.co/200x200" alt=""  />
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.price}
          </Card.Text>
          <Button variant="primary">더 보기</Button>
        </Card.Body>
  
     
      )
      })

    }


     </Card>

    
  );
}

export default BasicExample;