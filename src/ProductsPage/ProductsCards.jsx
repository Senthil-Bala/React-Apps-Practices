import React from "react";
import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function ProductsCards({ productsData }) {
  return (
    <div>
      {productsData.map((ele) => (
        <Card style={{ width: "10rem" }}>
          <Card.Img variant="top" src={ele.image} />
          <Card.Body>
            <Card.Title>{ele.category}</Card.Title>
            <Card.Text>{ele.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ProductsCards;
