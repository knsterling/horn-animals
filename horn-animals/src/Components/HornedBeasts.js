import React from 'react';
import{Button, Image, Container, Row, Col} from 'react-bootstrap';
import{BsFillHeartFill}from 'react-icons/bs';
function HornedBeasts({img_url, title, description}){
  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            <Button>
              <Image
                src={img_url}
                className="img-fluid"  
              />
            </Button>
          </Col>
          <Col xs={12}>
            <BsFillHeartFill/>
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
