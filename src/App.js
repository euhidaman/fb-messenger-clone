import { Button, FormControl, IconButton, Input, InputLabel } from "@material-ui/core";
import { useState, useEffect } from "react";
import './App.css';
import Message from "./components/Message";
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import logo from "./logo.svg";
import SendIcon from '@material-ui/icons/Send';

// 2:00:00

// REACT hooks -->
// useState = it's like a vraible in REACT, which stores temporary memory
// useEffct = it's a block of code tht gets executed based on a condition

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]) //This is an array of objects, check on line 26
  const [username, setUsername] = useState('');
  window.scrollTo(0, 999999999999);
  useEffect(() => 
  { //run once, for when the main App component loads
    db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(
      snapshot => {  //snapshot is for continuously checking the firestore database
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() }))) // 'docs' is the entire document consisting of many 'doc'
        //  'doc' is each individual document in the 'docs'. 'doc' is the key-value pair present in each document, as an object.
        // 'id' is the unique key that is present in firestore for each doc , Format of 'data'  --> {text: 'something' , username: 'name'}
        // Finally, 'doc' and 'message' is of the format --> {id: 'unique_doc_key', text: 'something' , username: 'name'}
      })
  }, [])

  

  useEffect(() => { //This is for getting username
    setUsername(prompt('Please enter your Name : '));
  }, [])

  const sendMessage = (event) => { //Contains logic to send messages
      event.preventDefault(); // prevents the page from refreshing automatically (hence, stops the page from forgetting all state memory)
      window.scrollTo(0, 999999999999); //After typing message, it scrolls down to show the recent message

      db.collection('messages').add({  // This is used to add to firestore backend (from line 39-43)
        text: input,
        username: username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })

      setInput(''); //After pressing send, Make textbox empty
  }
  

  return (
    <div className="App container">
      <img alt="Messenger_logo" src={logo} />
      <h1>Facebook Messenger Clone</h1>
      <h1>Welcome {username}</h1>

      <FlipMove>
        {
          messages.map( ({id, message}) => ( // here message & id are from line 25
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
      {/* Above code loops through all the msgs in the messages array, and displays it.
       username & message are props, which we are passing to the Message.js component.
       The username, is the person who's logged in. And, we are passing the whole message as a prop
       because, a message can have a user which isn't the person logged in */}

      {/* We are wrapping the input & button in a form, bcz 'enter key' doesn't work without it */}

       <form>
          <FormControl className="app_form">
            <Input placeholder="Type your Message here" value={input} onChange={event => setInput(event.target.value)} />
          </FormControl>
        <IconButton className="app_iconButton" disabled={!input} variant='contained' color='primary' type="submit" onClick={sendMessage}>
            <SendIcon />
          </IconButton>
       </form>
      {/* The above code is used to continuously update and set the value of input to whtever is typed in the input field*/}


    </div>
  );
}


export default App;
