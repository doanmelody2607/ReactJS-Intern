import React from "react";
import { Button } from "react-bootstrap";

function Details(props) {
  const { product } = props;

  return (
    <>
      {details.map((product) => (
        <div className="details" key={product.id}>
          <div>
            <h2 title={product.name}>{product.name}</h2>
            <h3>{product.price}</h3>
            <p>{product.description}</p>
            <img src={product.image} />
            <Button className="btn btn-dark">Get It</Button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Details;
