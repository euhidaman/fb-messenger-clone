import { useState } from "react";
// import logo from './logo.svg';
import './App.css';

// 28:00

function App() {

  const [input, setInput] = useState('');
  console.log(input);
  const [messages, setMessages] = useState([])

  const sendMessage = (event) => { //Contains logic to send messages
      setMessages([...messages, input]);//Saves all messages as an array
      setInput(''); //After pressing send, Make textbox empty
  }
  console.log(messages);

  return (
    <div className="App">
      <h1>New to React !!</h1>

      {/* We are wrapping the input & button in a form, bcz 'enter key' doesn't work without it */}
      <form>
          <input value={input} onChange={event => setInput(event.target.value)} />
          <button type='submit' onClick={sendMessage} >Send</button>
      </form>      
      {/* The above code is used to continuously update and set the value of input to whtever is typed in the input field*/}

      
      
      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }

    </div>
  );
}

export default App;
