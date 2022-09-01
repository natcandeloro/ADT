import Carousel from 'react-bootstrap/Carousel';
import "../Assets/Css/Galeria.css"
import galeria1 from "../Assets/Statics/galeria1.jpg"
import galeria2 from "../Assets/Statics/galeria2.jpg"
import galeria3 from "../Assets/Statics/galeria3.jpg"


function DarkVariantExample() {
  return (
<div className='espiritu'>

    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 img-fluid"
          src={galeria1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 img-fluid"
          src={galeria2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={galeria3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default DarkVariantExample;