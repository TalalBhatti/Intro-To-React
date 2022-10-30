import React, {useState} from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';


function firstChild(props) {
  const [name,setname] = useState("");
    //getting data through parent
    // console.log("See in child", props)

    function handleChange(){
      console.log("Im pressed")
      setname("Hello")
    }
  return (
    <div className="App">
        {/* Accessing the data */}
        <h1> Good {props.tosend.greet} {name}</h1>
        <Button 
        variant="danger"
        onClick={handleChange}
        >Check</Button>
    </div>
  );
}

export default firstChild;
