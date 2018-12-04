import React from 'react';

const Form = props => (
  <div>
    <h1>{props.heading}</h1>
    <form>
      
      <input name="newTitle" placeholder="Title" onChange={props.changeHandler} />
      <input name="newBody" placeholder="Body" onChange={props.changeHandler} />

      <select name="newTo" onChange={props.changeHandler}>
        <option value="" selected="" disabled="">To</option>                <option>Tina Turner</option>
        <option>Amy Winehouse</option>
        <option>Johnny Cash</option>
        <option>Engelbert Humperdink</option>
      </select>

      <select name="newFrom" onChange={props.changeHandler}>
        <option value="" selected="" disabled="">From</option>                <option>Tina Turner</option>
        <option>Amy Winehouse</option>
        <option>Johnny Cash</option>
        <option>Engelbert Humperdink</option>
      </select>
      <button onClick={props.clickHandler}>Submit</button>
    </form>
  </div>
)





export default Form;