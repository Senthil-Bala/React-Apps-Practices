import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function CardsList({ currentCards, loading }) {
  return (
    
    <Container>
        {loading && <h1>Loading... </h1>}
      <Row>
        {currentCards.map((ele) => (
          <Col key={ele.id} xs={12} sm={6} md={4} lg={3} xl={3}>
            <Card style={{ width: '10rem' }} className='m-4'>
      <Card.Img variant="top" src={ele.thumbnailUrl}/>
      <Card.Body>
        <Card.Title>{ele.title}</Card.Title>
        <Card.Text>
         {ele.title}
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardsList;
