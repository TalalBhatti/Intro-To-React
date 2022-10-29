import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import FirstChild from './components/firstChild'

function App() {
  const [greeting,setGreeting] = useState({
    greet: "morning"
  })  

  useEffect(()=>{
    setTimeout(() => {
      setGreeting({
        greet:"Afternoon"
      })
      console.log("RUN SUCCESSFUL");
      console.log(greeting.greet);
    }, 3000); 
  },[])
  

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
