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
  const [seeInt,setInt] = useState(18);
  const [seebool, setBool] = useState(true);
  const [seeString,setString] = useState("Hello world")
  const [ui,setui] = useState(
    <div>
      You are offline
    </div>
  )

  // console.log(seebool)

  //Updating the Dom through Timers,data, etc
  useEffect(()=>{
    //Setting time out for 3 seconds
    setTimeout(() => {
      // setting the hook state
      setGreeting({
        greet:"Afternoon"
      })
      //reading the values
      // console.log("RUN SUCCESSFUL");
      // console.log(greeting.greet);
    }, 3000); 
  },[greeting])

  useEffect(()=>{
    if(seebool){
      setui(
      <div>
        You are Online
      </div>
    )
  }
  },[])
  
  //Html
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Good {greeting.greet}.
        </p>
        <p>
          My age is {seeInt}
        </p>
        <p>
          I passed my exam {seebool}
        </p>
        <p>
          {seeString}
        </p>
        {ui}
        <FirstChild tosend={greeting}/>
      </header>
    </div>
    );
}

export default App;
