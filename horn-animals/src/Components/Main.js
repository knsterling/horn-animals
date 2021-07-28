import React from 'react';
import HornedBeasts from './HornedBeasts';
import Rhino from '../images/rhinoceros-768714_1920.jpg';
function Main(){
  return (
    <> 
      <HornedBeasts
        img_url={Rhino}
        description="large and gray with horns"
        title= "Rhinoceros"
      />
    </>
  );
}
export default Main;
