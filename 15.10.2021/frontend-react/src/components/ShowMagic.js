import { useState } from "react"

import Fun from './Fun';
import Greeting from './Greeting';
import Greetings from './Greeting_v2';
import Arvuta from './arvuta';
import GreetingLogIn from './IsloggedIn';
import './App.css';

function ShowMagic() {
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

export default ShowMagic;