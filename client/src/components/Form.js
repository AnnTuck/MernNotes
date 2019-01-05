import React from 'react';

const Form = props => (
  <div>
    <br></br>
    <h1>{props.heading}</h1>
    <form id="addNote">
      
      <select name="newTo" className="noteInput" onChange={props.changeHandler}>
        <option value="" selected="" disabled="">To</option>                <option>Tina Turner</option>
        <option>Amy Winehouse</option>
        <option>Johnny Cash</option>
        <option>Engelbert Humperdink</option>
      </select>

      <select name="newFrom" className="noteInput" onChange={props.changeHandler}>
        <option value="" selected="" disabled="">From</option>                <option>Tina Turner</option>
        <option>Amy Winehouse</option>
        <option>Johnny Cash</option>
        <option>Engelbert Humperdink</option>
      </select>

      <input name="newTitle" className="noteInput" placeholder=" Title" onChange={props.changeHandler} />
      <input name="newBody" className="noteInput" placeholder=" Body" onChange={props.changeHandler} />

      <button className="noteBtn" onClick={props.clickHandler}>Submit</button>
    </form>
    <br></br>
  </div>
)





export default Form;