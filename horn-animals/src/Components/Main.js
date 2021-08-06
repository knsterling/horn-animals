import React, { useState } from 'react';
import HornedBeasts from './HornedBeasts';
// import Rhino from '../images/rhinoceros-768714_1920.jpg';
import {Container, Row, Col, Dropdown} from 'react-bootstrap';
import'bootstrap/dist/css/bootstrap.min.css';

function Main({animalData}){
  let filterArray=[1, 2, 3, 100];
  const[selectedHorns, setSelectedHorns]= useState(0);

  return (
    <> 
      <Container>
        <Row>

          <Col xs={12}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="Filter Dropdown">
            Filter Beast by Horn Amount
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {filterArray.map(number =>(
                  <Dropdown.Item
                    onSelect={(eventKey)=> setSelectedHorns(parseInt(eventKey))}
                    eventKey={number}>
                    {number}Horn(s)
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          {animalData.filter(data=> data.horns === selectedHorns
          ).map((filteredData, key)=>
            (
              <Col xs={12} md={6} lg={4}>
                <div key={key}>
                  <HornedBeasts
                    img_url={filteredData.image_url}
                    title={filteredData.title}
                    description={filteredData.description}
                  />
                </div>
              </Col>
            )
          )}
        </Row>
      </Container>
    </>
  );
}
export default Main;
