import AOS from "aos";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.scss";

const Product = (props) => {
  AOS.init();

  const { product } = props;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="product col-xs-4 col-sm-4 col-md-4 col-lg-4"
    >
      <Card border="light">
        <Link to={`/${product.id}`} className="light__img ">
          <Card.Img variant="top" className="" src={product.thumbail} />
        </Link>

        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <p>{product.price} VNĐ</p>
        </Card.Body>

        <Card.Footer border="light">
          <Button variant="outline-dark" size="sm" block>
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Product;
