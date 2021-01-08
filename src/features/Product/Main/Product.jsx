import React from "react";
import { CardDeck, Card, Button } from "react-bootstrap";
import "./Product.scss";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { product, onAdd } = props;

  return (
    <div class="product col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <Card border="light">
        <Link to={`/${product.id}`}>
          <Card.Img variant="top" src={product.image} />
        </Link>

        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <p>{product.price}</p>
        </Card.Body>

        <Card.Footer border="light">
          <Button
            variant="outline-dark"
            onClick={() => onAdd(product)}
            size="sm"
            block
          >
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Product;
