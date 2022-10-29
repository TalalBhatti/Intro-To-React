import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import FirstChild from './components/firstChild'

function App() {

  //Setting the state
  const [greeting,setGreeting] = useState({
    //initial value if not given would be update
    greet: "morning"
  })  


  //Updating the Dom through Timers,data, etc
  useEffect(()=>{
    //Setting time out for 3 seconds
    setTimeout(() => {
      // setting the hook state
      setGreeting({
        greet:"Afternoon"
      })
      //reading the values
      console.log("RUN SUCCESSFUL");
      console.log(greeting.greet);
    }, 3000); 
  },[])
  
  //Html
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Good {greeting.greet}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn 
        </a>
        <FirstChild props={greeting.greet}/>
      </header>
    </div>
  );
}

export default App;
