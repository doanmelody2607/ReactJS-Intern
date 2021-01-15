import React from "react";
import { Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./Carousel.scss";

const ControlCarousel = () => {
  const { t } = useTranslation();
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
            <h3>{t("banner.title1")}</h3>
            <p>{t("banner.content1")}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>{t("banner.title2")}</h3>
            <p>{t("banner.content2")}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={900}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/4056593/pexels-photo-4056593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>{t("banner.title3")}</h3>
            <p>{t("banner.content3")}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ControlCarousel;
