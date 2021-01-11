import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.scss";

const ControlCarousel = () => {
  return (
    <div>
      <Carousel className="carousel">
        <Carousel.Item interval={1100}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Mercedes-AMG GT</h3>
            <p>Tiên phong dẫn lối - trải nghệm lái khác biệt.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Mercedes-AMG GT R'</h3>
            <p>LMercedes-AMG GT kết hợp cảm giác V8 quyến rũ với tính tiện ích hàng ngày vượt trội đáng kinh ngạc.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={900}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/4056593/pexels-photo-4056593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Sang trọng - An toàn</h3>
            <p>
                Chất thể thao vượt trội - đảm bảo tính tự chủ tối đa.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ControlCarousel;
