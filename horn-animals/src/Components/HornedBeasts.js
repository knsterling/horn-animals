import React from 'react';
function HornedBeasts(props){
  return (
    <>
      <h2>{props.title}</h2>
      <img height="500px" src={props.img_url}/>
      <p>{props.description}</p>
    </>
  );
}
export default HornedBeasts;
