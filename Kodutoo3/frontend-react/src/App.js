import { useState } from "react"
import './App.css';
import Fun from './components/Fun';
import Greeting from './components/Greeting';
import Greetings from './components/Greeting_v2';
import Arvuta from './components/arvuta';
import GreetingLogIn from './components/IsloggedIn';

function App() {
  const [magicNumber, setMagicNumber] = useState(0)
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      { show && <h1>{ magicNumber }</h1> }
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber}
        show={show}
        setShow={setShow}
      />
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber} 
        amount={5}
        show={show}
        setShow={setShow}
      />
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber} 
        amount={25}
        show={show}
        setShow={setShow}
      />
      <Greeting name="Raimo" age="34"/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Greetings name={"Mari"}/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Arvuta number={"5"}/>
      <GreetingLogIn isLoggedIn={true} name="hm"/>
      <GreetingLogIn isLoggedIn={false} name="hm"/>
      <GreetingLogIn isLoggedIn={true} name="hm" age="100"/>
    </div>
  );
}

export default App;