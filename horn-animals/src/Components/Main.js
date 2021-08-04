import React from 'react';
import HornedBeasts from './HornedBeasts';
import Rhino from '../images/rhinoceros-768714_1920.jpg';
import {Container, Row, Col} from 'react-bootstrap';
import'bootstrap/dist/css/bootstrap.min.css';

function Main({animalData}){
  return (
    <> 
      <Container>
        <Row>
          {animalData.map((data, key) => {
            return (
              <Col xs={12} md={6} lg={4}>
                <div key={key}>
                  <HornedBeasts
                    img_url={data.image_url}
                    title={data.title}
                    description={data.description}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <HornedBeasts
        img_url={Rhino}
        description="large and gray with horns"
        title= "Rhinoceros"
      />
    </>
  );
}
export default Main;
