import Carousel from "react-bootstrap/Carousel";
import banner1 from "../assets/baner2.jpg";
import {Container} from "react-bootstrap"
function CarrouselPrincipal() {
  return (
    <div >
      <Carousel variant="dark"  >
        <Carousel.Item>
          <img className="d-block w-100" src="https://i.linio.com/cms/a804f9ac-1102-11ed-9c5e-8658f5069fd7.webp" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://i.linio.com/cms/a804f9ac-1102-11ed-9c5e-8658f5069fd7.webp" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://i.linio.com/cms/a804f9ac-1102-11ed-9c5e-8658f5069fd7.webp" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      </div>
  );
}

export default CarrouselPrincipal;
