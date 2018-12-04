import React from 'react';

const Kunote = props => (
  <div key={props.id} className="kunote panel card">
    <h3>To: {props.toProp}</h3>    
    <p>From: {props.fromProp}</p>
    <br></br>
    <p>Subject: {props.titleProp}</p>
    <p>{props.bodyProp}</p>
    
  </div>
)

export default Kunote;

