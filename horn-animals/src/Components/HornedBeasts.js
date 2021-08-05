import React from 'react';
import{Button, Image, Container, Row, Col} from 'react-bootstrap';
import{BsFillHeartFill}from 'react-icons/bs';
import {useState} from 'react';
import SelectedBeasts from './SelectedBeasts';

function HornedBeasts({img_url, title, description}){
  const handleClick = () => {
    setCounter(counter + 1);
    setModalOpen(!modalOpen);

  };

  
  const [counter, setCounter] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
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
          <Col xs={12}>
            <h2>
              {title}
            </h2>
          </Col>
          <Col xs={12}>
            <p>
              {description}
            </p>
          </Col> 
        </Row>
        <Row>
          <SelectedBeasts
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            img_url={img_url}
          />
        </Row>
      </Container>
    </>
  );
}
export default HornedBeasts;
