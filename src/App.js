import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);
  
  const showAlert=(msg,type)=>{
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      showAlert("Dark mode enabled", "success");
      document.body.style.backgroundColor='#0a2246';
    }
    else
    {
      setMode('light');
      showAlert("Light mode enabled", "success");
      document.body.style.backgroundColor='white';
    }
  }

  return (
    //JSX Fragment
    <>  
      <BrowserRouter>
      <Navbar title="Textutils" about="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route exact path="/" element={<TextForm head="Enter text" mode={mode} showAlert={showAlert}/>}>
            </Route>
          </Routes>
      </div>
      </BrowserRouter>

    </>
  );
}

export default App;
