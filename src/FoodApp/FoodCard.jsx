import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

function FoodCard({ items }) {
  return (
    <div>
      <Container>
        <Row>
          {items.map((ele, index) => (
            <Col xs={12} sm={12} md={4} lg={3}>
             <Card className="m-3  border-dark-subtle rounded-4" key={ele.id}>
      <Card.Img variant="top" src={ele.image} />
      <Card.Body>
        <Card.Title>{ele.title}</Card.Title>
        <Card.Text>
          {ele.description}
        </Card.Text>
        <h4 className="fw-bold">{ele.category}</h4>
        <h6 className="fw-bold">Price {ele.price}</h6>
        
      </Card.Body>
    </Card>
            
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default FoodCard;
