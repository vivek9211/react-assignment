import React, { useState } from "react";
import Welcome from "./components/welcome";
import './App.css';


const App = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState();
  const [collage, setCollage] = useState();

const inputEvent = (event) => {
  console.log(event.target.value);
  setName(event.target.value);
}

const onSubmit = () => {
    setFullName(name);
    setCollage("Welcome to LPU Collage")
}


  return (
    <div>
      <input 
        type="text"
        onChange={inputEvent}
        value={name}
      />
      <button onClick={onSubmit}>Login</button>
      <Welcome name={fullName} collage={collage}/>
      {/* <h1>{fullName}</h1>
      <h2>{collage}</h2> */}
      <p>Assignment done by Vivek Kumar Collage id - 12007412</p>
      
    </div>
  )

}
export default App;
