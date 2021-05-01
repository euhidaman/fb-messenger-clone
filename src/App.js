import { useState } from "react";
// import logo from './logo.svg';
import './App.css';

function App() {

  const [input, setInput] = useState('');

  return (
    <div className="App">
      <h1>New to React !!</h1>
      <input/>
      <button>Send</button>
    </div>
  );
}

export default App;
