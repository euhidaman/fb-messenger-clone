import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { useState, useEffect } from "react";
// import logo from './logo.svg';
import './App.css';
import Message from "./components/Message";

// 1:19:00

// REACT hooks -->
// useState = it's like a vraible in REACT, which stores temporary memory
// useEffct = it's a block of code tht gets executed based on a condition

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]) //This is an array of objects, check on line 26
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('Please enter your Name : '));
  }, [])

  const sendMessage = (event) => { //Contains logic to send messages
      event.preventDefault(); //prevents the page from refreshing automatically
                              // (hence, stops the page from forgetting all state memory)
      setMessages([...messages, {username: username, text: input}]);//Saves all messages as an array of objects. 
                       // where name stores the username from the prompt & text stores whtever we input in the form
      setInput(''); //After pressing send, Make textbox empty
  }
  

  return (
    <div className="App container">
      <h1>Messenger Clone</h1>
      <h1>Welcome {username}</h1>

      {/* We are wrapping the input & button in a form, bcz 'enter key' doesn't work without it */}
      <FormControl>
        <InputLabel>Message</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
        <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage} >Send</Button><br />
      </FormControl>
      {/* The above code is used to continuously update and set the value of input to whtever is typed in the input field*/}

      {
        messages.map(message => (
          <Message username={username} message={message}/>
        ))
      }
      {/* Above code loops through all the msgs in the messages array, and displays it.
       username & message are props, which we are passing to the Message.js component.
       The username, is the person who's logged in. And, we are passing the whole message as a prop
       because, a message can have a user which isn't the person logged in */}

    </div>
  );
}

export default App;
