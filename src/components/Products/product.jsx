import React from "react";
import { CardDeck, Card, Button } from "react-bootstrap";
import "./Products.scss";

const Product = (props) => {
  const { product, onAdd } = props;

  return (
    <div class="product col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <Card border="light">
        <Card.Img className="product-img" variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <p>{product.price}</p>
        </Card.Body>
        <Button
          className="ml-2"
          variant="outline-dark"
          onClick={() => onAdd(product)}
          size="sm"
        >
          Add to Cart
        </Button>
      </Card>
    </div>
  );
};

export default Product;
