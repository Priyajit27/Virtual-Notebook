import './App.css';
import Navbar from './components/Navbar';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import { useState } from 'react';
import NoteState from './context/Notes/NoteState';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  const [alert,setalert]=useState(null)

  const showAlert=(message,type)=>{
        setalert({
          msg:message,
          type:type
        })
        setTimeout(()=>{
          setalert(null)
      }, 3000);
      
  }
  return (
    <>
    <NoteState>
    <Navbar></Navbar>
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
          <Route exact path="/" element={<Home showAlert={showAlert}/>} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
      <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
      </Routes>
      </div>
      </NoteState>
    </>
  );
}

export default App;
