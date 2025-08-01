import Carousel from 'react-bootstrap/Carousel';

function Carousel1() {
  return (

    
    <Carousel className='CarouselBox' style={{width:'550px',margin:'10px',  gap:'10px' }}>
      <Carousel.Item >
          <iframe width="560" height="500" src="https://www.youtube.com/embed/VD-puQk9uTM?si=bD03pIecr_CciykA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          
      </Carousel.Item>

      <Carousel.Item>
       <iframe width="560" height="500" src="https://www.youtube.com/embed/mr47uxNlFbw?si=6eoX4WgGVcM4ibNS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <iframe width="560" height="500" src="https://www.youtube.com/embed/rs14eUpdQng?si=6kkA45n4QgLtO1mW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    
  );
}

export default Carousel1;