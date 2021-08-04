import React from 'react';
import{Button, Image, Container, Row, Col} from 'react-bootstrap';
import{BsFillHeartFill}from 'react-icons/bs';
import {useState} from 'react';
 
function HornedBeasts({img_url, title, description}){
  const handleClick = () => {
    setCounter(counter + 1);
  };
  const [counter, setCounter] = useState (0);
  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            <Button>
              <Image
                onClick={handleClick}
                src={img_url}
                className="img-fluid"  
              />
            </Button>
          </Col>
          <Col xs={12}>
            <BsFillHeartFill/>
          </Col>
          <Col xs={12}>
            {counter}
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>
              {title}
            </h2>
          </Col>
          <Col>
            <p>
              {description}
            </p>
          </Col> 
        </Row>
      </Container>
    </>
  );
}
export default HornedBeasts;
